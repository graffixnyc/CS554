const uuidv4 = require("uuid/v4");
const _ = require("lodash");

const {
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLSchema
} = require("graphql");
const Quotes = require("../data/quote.js");

const QuoteType = new GraphQLObjectType({
  name: "QuoteType",
  description: "Chuck Norris Quotes",
  fields: {
    id: { type: GraphQLID },
    quote: { type: GraphQLString }
  }
});
const QuoteCreateType = new GraphQLInputObjectType({
  name: "QuoteCreateType",
  type: QuoteType,
  fields: {
    quote: { type: new GraphQLNonNull(GraphQLString) }
  }
});

const QuoteUpdateType = new GraphQLInputObjectType({
  name: "QuoteUpdateType",
  type: QuoteType,
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    quote: { type: new GraphQLNonNull(GraphQLString) }
  }
});

const QuoteDeleteType = new GraphQLInputObjectType({
  name: "QuoteDeleteType",
  type: QuoteType,
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) }
  }
});

const ChuckNorrisQueryType = new GraphQLObjectType({
  name: "ChuckNorrisQuerytype",
  description: "Chuck Norris Query Schema",
  fields: {
    quotes: {
      args: {
        id: { type: GraphQLID },
        limit: { type: GraphQLInt }
      },
      type: new GraphQLList(QuoteType),
      resolve: (parent, args) => {
        if (Object.keys(args).length) {
          if (args.id && args.limit)
            return _.take(_.filter(Quotes, { id: args["id"] }), args["limit"]);
          if (args.id) return _.filter(Quotes, { id: args["id"] });
          if (args.limit) return _.take(Quotes, args["limit"]);
        }
        return Quotes;
      }
    }
  }
});

const ChuckNorrisMutationType = new GraphQLObjectType({
  name: "ChuckNorrisMutationType",
  description: "Chuck Norris Query Schema",
  fields: {
    createQuote: {
      type: QuoteType,
      args: {
        input: { type: new GraphQLNonNull(QuoteCreateType) }
      },
      resolve: (source, { input }) => {
        let quoteData = [];
        quoteData.id = uuidv4();
        quoteData.quote = input.quote;

        Quotes.push(quoteData);
        return quoteData;
      }
    },
    updateQuote: {
      type: QuoteType,
      args: {
        input: { type: new GraphQLNonNull(QuoteUpdateType) }
      },
      resolve: (source, { input }) => {
        let quoteData = [];
        quoteData.id = input.id;
        quoteData.quote = input.quote;

        let index = Quotes.findIndex(q => q.id == input.id);
        let update = Quotes.splice(index, 1, quoteData);

        return quoteData;
      }
    },
    deleteQuote: {
      type: QuoteType,
      args: {
        input: { type: new GraphQLNonNull(QuoteDeleteType) }
      },
      resolve: (source, { input }) => {
        let deleteQuote = _.remove(Quotes, q => q.id == input.id);
        return input;
      }
    }
  }
});

const ChockNorrisSchema = new GraphQLSchema({
  query: ChuckNorrisQueryType,
  mutation: ChuckNorrisMutationType
});

module.exports = ChockNorrisSchema;
