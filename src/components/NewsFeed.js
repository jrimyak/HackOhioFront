import React, { Component } from 'react';

class NewsFeed extends Component {
    constructor() {
      super();
      this.state = {
        recentBlogPost: {
          name: '',
          url: ''
        }
      }
    }
  
    FetchDataFromRssFeed() {
      var request = new XMLHttpRequest();
      request.onreadystatechange = () => {
        if (request.readyState == 4 && request.status == 200) {
          var myObj = JSON.parse(request.responseText);
          for (var i = 0; i < 1; i ++) {
            this.setState({
              recentBlogPost: {
                name: myObj.items[i].title,
                url: myObj.items[i].link
              }
            });
          }
        }
      }
      request.open("GET", "https://api.rss2json.com/v1/api.json?rss_url=http://rss.cnn.com/rss/cnn_topstories.rss", true);
      request.send();
    }
  
    componentDidMount() {
      {this.FetchDataFromRssFeed()}
    }
  
    render() {
      return (
        <div>
          Check out our blog: <a target="_blank" href={this.state.recentBlogPost.url}>{this.state.recentBlogPost.name}</a>
        </div>
      );
    }
  }

  export default NewsFeed