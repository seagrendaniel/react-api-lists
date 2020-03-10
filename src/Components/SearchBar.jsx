import React from 'react';

class SearchBar extends React.Component {
  state = {term: ''};

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input 
            type="text" 
            onChange={(e) => this.setState({term: e.target.value})} 
            placeholder="Enter Search Term Here"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
