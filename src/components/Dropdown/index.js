import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import styles from './index.module.css';

const DropdownComponent = ({ label }) => {
  return (
    <div className={styles.dropdownContainer}>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {label}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default DropdownComponent;
