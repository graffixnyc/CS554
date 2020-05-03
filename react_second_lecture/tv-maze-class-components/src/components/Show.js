import React, { Component } from 'react';
import axios from 'axios';
import noImage from '../img/download.jpeg';

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: undefined,
    };
  }
  componentDidMount() {
    this.getShow();
  }

  async getShow() {
    try {
      const { data } = await axios.get(
        `http://api.tvmaze.com/shows/${this.props.match.params.id}`
      );

      this.setState({
        data: data,
      });
    } catch (e) {
      console.log(`error ${e}`);
    }
  }

  render() {
    let body = null;
    const regex = /(<([^>]+)>)/gi;

    body = (
      <div className="show-body">
        <h3 className="cap-first-letter">
          {(this.state.data && this.state.data.name) || 'No Title'}
        </h3>
        <img
          alt="Show"
          src={
            (this.state.data &&
              this.state.data.image &&
              this.state.data.image.medium) ||
            noImage
          }
        />
        <br />
        <br />
        <p>
          Average Rating:{' '}
          {(this.state.data && this.state.data.rating.average) || 'No rating'}
          <br />
          Network:
          {(this.state.data &&
            this.state.data.network &&
            this.state.data.network.name) ||
            'No Network'}
          <br />
          Language:{' '}
          {(this.state.data && this.state.data.language) || 'Not specified'}
          <br />
          Runtime:{' '}
          {(this.state.data && this.state.data.runtime) || 'Not Provided'}
          <br />
          Premiered:{' '}
          {(this.state.data && this.state.data.premiered) || 'Not Provided'}
          <br />
        </p>
        <b>Genres</b>
        <dl>
          {(this.state.data &&
            this.state.data.genres.map((genre) => {
              return <dt key={genre}>{genre}</dt>;
            })) ||
            'No Genre'}
        </dl>
        Summary:
        {(this.state.data &&
          this.state.data.summary &&
          this.state.data.summary.replace(regex, '')) ||
          'No Summary'}
      </div>
    );

    return body;
  }
}

export default Show;
