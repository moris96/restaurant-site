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

  // Menu data
  const menuData = {
    breakfast: [
      { name: 'Breakfast Tea', description: 'Breakfast Tea', price: 4.99 },
      { name: 'Muffins', description: 'Muffins', price: 8.99 },
      // Add more breakfast items as needed
    ],
    secondBreakfast: [
        { name: 'Baked Apple Gondorian Toast topped with Streusel Topping', description: 'Second Breakfast 1', price: 12.99 },
        { name: 'Breakfast Susage', description: 'Second Breakfast 2', price: 8.99 },
        // Add more second breakfast items as needed
    ],
    elevenses: [
        { name: 'Lembas Bread', description: 'Elevenses 1', price: 7.99 },
        { name: 'Plain Scones', description: 'Elevenses 1', price: 6.99 },
        // Add more elevenses items as needed
    ],
    lunch: [
        { name: 'Slow Cooked Potato Soup', description: 'Lunch 1', price: 12.99 },
        { name: 'Slow Cooked Rabbit Soup with Lembas Bread Crumbs', description: 'Lunch 1', price: 18.99 },
        // Add more lunch items as needed
    ],
    afternoonTea: [
      { name: 'Afternoon Tea', description: 'Afternoon Tea 1', price: 4.99 },
      { name: 'Plain Scones', description: 'Afternoon Tea 1', price: 6.99 },
      { name: 'Biscotti', description: 'Afternoon Tea 1', price: 8.99 },
      // Add more afternoon tea items as needed
    ],
    dinner: [
      { name: "Balin's Spiced Beef Roast", description: 'Dinner 1', price: 19.99 },
      { name: "Pipin's Salted Pork", description: 'Dinner 1', price: 24.99 },
      // Add more dinner items as needed
    ],
    supper: [
      { name: 'Pork Sasuage', description: 'Supper 1', price: 14.99 },
      // Add more supper items as needed
    ],
    desserts: [
        { name: 'Apple Pie', description: 'Dessert 1', price: 14.99 },
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
          <Dropdown.Item eventKey="desserts">Desserts</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <MenuSection title={
        selectedMenu === 'breakfast' ? 'Breakfast Items' :
        selectedMenu === 'lunch' ? 'Lunch Items' :
        selectedMenu === 'secondBreakfast' ? 'Second Breakfast Items' :
        selectedMenu === 'elevenses' ? 'Elevenses Items' :
        selectedMenu === 'afternoonTea' ? 'Afternoon Tea Items' :
        selectedMenu === 'dinner' ? 'Dinner Items' :
        selectedMenu === 'supper' ? 'Supper Items' :
        'Desserts Items'
      } items={menuData[selectedMenu]} />
    </Container>
  );
};

export default Menu;





