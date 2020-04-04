import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGithub  }from '@fortawesome/free-brands-svg-icons'


function Footer() {
  return (
    <footer>
      <hr />
      <p className="pull-right">
        <FontAwesomeIcon className='fab' icon={faGithub} /> Built using React.js and MongoDB
      </p>
    </footer>
  );
}

export default Footer;
