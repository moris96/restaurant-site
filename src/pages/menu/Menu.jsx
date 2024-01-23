// import React from 'react';

// const Menu = () => {
//   return (
//     <div>
//       <h1>Menu Page</h1>
//     </div>
//   );
// };

// export default Menu



import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Dropdown, ButtonGroup } from 'react-bootstrap';

const MenuItem = ({ name, description, price }) => (
  <ListGroup.Item>
    <Row>
      <Col xs={8}>
        <strong>{name}</strong>
        <p>{description}</p>
      </Col>
      <Col xs={4} className="text-right">
        ${price}
      </Col>
    </Row>
  </ListGroup.Item>
);

const MenuSection = ({ title, items }) => (
  <Card>
    <Card.Header>{title}</Card.Header>
    <ListGroup variant="flush">
      {items.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </ListGroup>
  </Card>
);

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState('breakfast');

  // Dummy data, replace with your actual menu data
  const menuData = {
    breakfast: [
      { name: 'Breakfast 1', description: 'Breakfast 1', price: 8.99 },
      // Add more breakfast items as needed
    ],
    lunch: [
      { name: 'Lunch 1', description: 'Lunch 1', price: 12.99 },
      // Add more lunch items as needed
    ],
    secondBreakfast: [
      { name: 'Second Breakfast 1', description: 'Second Breakfast 1', price: 9.99 },
      // Add more second breakfast items as needed
    ],
    elevenses: [
      { name: 'Elevenses 1', description: 'Elevenses 1', price: 7.99 },
      // Add more elevenses items as needed
    ],
    afternoonTea: [
      { name: 'Afternoon Tea 1', description: 'Afternoon Tea 1', price: 14.99 },
      // Add more afternoon tea items as needed
    ],
    dinner: [
      { name: 'Dinner 1', description: 'Dinner 1', price: 19.99 },
      { name: 'Dinner 2', description: 'Dinner 2', price: 29.99 },
      // Add more dinner items as needed
    ],
    supper: [
      { name: 'Supper 1', description: 'Supper 1', price: 10.99 },
      // Add more supper items as needed
    ],
  };

  const handleMenuSelect = (eventKey) => {
    setSelectedMenu(eventKey);
  };

  return (
    <Container>
      <h1 className="my-4">Menu</h1>
      <Dropdown onSelect={handleMenuSelect} className="mb-4">
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Select Menu
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="breakfast">Breakfast</Dropdown.Item>
          <Dropdown.Item eventKey="secondBreakfast">Second Breakfast</Dropdown.Item>
          <Dropdown.Item eventKey="elevenses">Elevenses</Dropdown.Item>
          <Dropdown.Item eventKey="lunch">Lunch</Dropdown.Item>
          <Dropdown.Item eventKey="afternoonTea">Afternoon Tea</Dropdown.Item>
          <Dropdown.Item eventKey="dinner">Dinner</Dropdown.Item>
          <Dropdown.Item eventKey="supper">Supper</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <MenuSection title={
        selectedMenu === 'breakfast' ? 'Breakfast Items' :
        selectedMenu === 'lunch' ? 'Lunch Items' :
        selectedMenu === 'secondBreakfast' ? 'Second Breakfast Items' :
        selectedMenu === 'elevenses' ? 'Elevenses Items' :
        selectedMenu === 'afternoonTea' ? 'Afternoon Tea Items' :
        selectedMenu === 'dinner' ? 'Dinner Items' :
        'Supper Items'
      } items={menuData[selectedMenu]} />
    </Container>
  );
};

export default Menu;





