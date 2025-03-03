import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import CV from './Components/CV';
// import Contact from './Components/Contact';
// import Testimonials from './Components/Testimonials';
// import Portfolio from './Components/Portfolio';
import * as data from './cvData.json';
import $ from "jquery";
window.$ = window.jQuery = $;
import 'jquery-migrate';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar',
      cvData: data,
    };
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.cvData.main} />
        <About data={this.state.cvData.main} />
        <CV data={this.state.cvData.CV} />
        {/* <Portfolio data={this.state.cvData.portfolio} /> */}
        {/* <Testimonials data={this.state.cvData.testimonials} /> */}
        {/* <Contact data={this.state.cvData.main} /> */}
        <Footer data={this.state.cvData.main} />
      </div>
    );
  }
}

export default App;
