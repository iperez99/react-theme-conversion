import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import Wrapper from './Wrapper';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Banner />
        <Wrapper>

        </Wrapper>
      </React.Fragment>
    );

  }
}



export default App;