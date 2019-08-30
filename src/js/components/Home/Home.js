import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class Home extends Component {
  render() {
    return (
      <div>
        <p >
          <FormattedMessage id="home.Title" defaultMessage="Home Page" />
        </p>
      </div>
    );
  }
}

export default Home;
