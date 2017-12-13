import $ from 'jquery'
import React from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import moment from 'moment';
import {Link} from 'react-router';
import scrollToElement from 'scroll-to-element';

let Home = React.createClass({
  componentDidMount(){
    require('../assets/css/main.css')
  },

  // componentWillMount(){
  //   document.body.className = "loading";
  // },

  render(){
    let {
      theConfig,
      data,
      thePagination,
      loadDone
    } = this.props

    return (
    <div>
      <div id="wrapper">
        <div id="bg"></div>
        <div id="overlay"></div>
        <div id="main">

          <header id="header">
            <h1>{theConfig?theConfig.name:"Rendact"}</h1>
            <p>{theConfig?theConfig.tagline:"Hello"}</p>
            <nav>
              <ul>
                <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li>
                <li><a href="#" className="icon fa-github"><span className="label">Github</span></a></li>
                <li><a href="#" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
              </ul>
            </nav>
          </header>

          <footer id="footer">
            <span className="copyright">&copy; Rendact Team. Design: <a href="http://html5up.net">HTML5 UP</a>.</span>
          </footer>

        </div>
      </div>
    </div>
    )
  }
});

export default Home;