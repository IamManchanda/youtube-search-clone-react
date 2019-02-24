import React, { Fragment, Component } from 'react'; 
import { imageSearchTextBox } from './scoped.module.css';

const SearchBar = class extends Component {
  render() {
    return <Fragment>
      <form className="grid-x grid-padding-x">
        <div className="cell small-8 medium-10">
          <input type="text" className={ imageSearchTextBox } placeholder="Search for Videos" />
        </div>
        <div className="cell small-4 medium-2">
          <input type="submit" className="radius bordered hollow button alert" value="Search" />
        </div>
      </form>
    </Fragment>;
  }
};

export default SearchBar;
