import React, {
  Component
} from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };
  }

  render() {
    // return <input onChange={this.onInputChange}/>;
    return (
      <div className="search-bar">
        <input placeHolder="Search Videos"
          value={this.state.term}
          onChange = {
            event => this.onInputChange(event.target.value)
          }
        />
      </div>
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchNew(term);
    // console.log(event.target.value);
  }
}

export default SearchBar;
