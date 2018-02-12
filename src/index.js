import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';

// Youtube API key
const API_KEY = "AIzaSyCtKx6Nh87HBikJ2moEQjBYwi0tk6EsyWQ";

class App extends Component{
  constructor(props){
      super(props);

      this.state = {
        videos : [],
        selectedVideo : null
     };
     this.searchVideos('surfboards');

  }

  searchVideos(term){
    YTSearch({key:API_KEY, term:term}, (videos)=>{
      console.log(videos);
      this.setState({
         videos : videos,
         selectedVideo : videos[0]
       });
    });
  }



  render(){
    const videoSearch = _.debounce((term) => { this.searchVideos(term) }, 300);
    
    return (
      <div>
        <SearchBar onSearchNew={videoSearch} />
        <VideoDetails video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
