import React from 'react';
import {faMusic} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const Nav = ({libraryStatus, setLibraryStatus}) => {
  return (
    <nav className="navigation">
      <h1>Waves</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
        <FontAwesomeIcon icon={faMusic} size="1x"/>
      </button>
    </nav>
  );
}

export default Nav;
