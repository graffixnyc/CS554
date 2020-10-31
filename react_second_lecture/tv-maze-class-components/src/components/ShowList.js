import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchShows from './SearchShows';
import noImage from '../img/download.jpeg';

class ShowList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: undefined,
      searchTerm: undefined,
      searchData: undefined
    };
  }
  async getShows() {
    if (this.state.searchTerm) {
      try {
        const { data } = await axios.get(
          'http://api.tvmaze.com/search/shows?q=' + this.state.searchTerm
        );
        this.setState({ searchData: data });
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const { data } = await axios.get('http://api.tvmaze.com/shows');
        this.setState({ data: data });
      } catch (e) {
        console.log(e);
      }
    }
  }
  componentDidMount() {
    this.getShows();
  }

  searchValue = (value) => {
    this.setState({ searchTerm: value }, () => {
      this.getShows();
    });
  };
  buildListItem = (show) => {
    let img = null;
    if (show.image && show.image.medium) {
      img = <img alt="Show" src={show.image.medium} />;
    } else {
      img = <img alt="Show" src={noImage} />;
    }

    return (
      <li key={show.id}>
        <Link to={`/shows/${show.id}`}>
          {img} <br />
          {show.name}
        </Link>
      </li>
    );
  };

  render() {
    let body = null;
    let li = null;
    if (this.state.searchTerm) {
      li =
        this.state.searchData &&
        this.state.searchData.map((shows) => {
          let { show } = shows;
          return this.buildListItem(show);
        });
    } else {
      li =
        this.state.data &&
        this.state.data.map((show) => {
          return this.buildListItem(show);
        });
    }
    body = (
      <div className="App-body">
        <SearchShows searchValue={this.searchValue} />
        <ul className="list-unstyled">{li}</ul>
      </div>
    );

    return body;
  }
}

export default ShowList;
