import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import Wrapper from './Wrapper';
import Heading from './Heading';
import Feature from './Feature';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Banner />
        <Wrapper>
          <Heading/>
        </Wrapper>
        <Feature/>

      </React.Fragment>
    );

  }
}



export default App;