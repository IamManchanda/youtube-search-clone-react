import React, { Fragment, Component } from 'react'; 
import { imageSearchTextBox } from './scoped.module.css';

const SearchBar = class extends Component {
  state = {
    searchTerm: '',
  };

  handleInputChange = (event) => {
    const { value: searchTerm } = event.target;
    this.setState({ searchTerm });
  };

  handleFormSubmission = (event) => {
    event.preventDefault();
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;
    onFormSubmit(searchTerm);
  };

  render() {
    const { searchTerm } = this.state;
    return <Fragment>
      <form 
        onSubmit={ this.handleFormSubmission } 
        className="grid-x grid-padding-x">
        <div className="cell small-8 medium-10">
          <input 
            type="text" 
            className={ imageSearchTextBox } 
            placeholder="Search for Videos"
            value={ searchTerm }
            onChange={ this.handleInputChange }
          />
        </div>
        <div className="cell small-4 medium-2">
          <input type="submit" className="radius bordered hollow button alert" value="Search" />
        </div>
      </form>
    </Fragment>;
  }
};

SearchBar.defaultProps = {
  onFormSubmit: () => {},
};

export default SearchBar;
