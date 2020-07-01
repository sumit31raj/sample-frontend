import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import DropdownComponent from '../Dropdown';
import './index.css';

const MainContainer = () => {
  return (
    <div className="mainContainer">
      <div className="filters">
        <DropdownComponent label="Popular"/>
        <DropdownComponent label="Arithmetic"/>
        <DropdownComponent label="Popular"/>
        <DropdownComponent label="More Filters"/>
      </div>
      <Card>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MainContainer;
