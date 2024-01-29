import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Dropdown, ButtonGroup } from 'react-bootstrap';
import './Menu.css';

const MenuItem = ({ name, description, price, image }) => (
  <ListGroup.Item>
    <Row>
      <Col xs={8}>
        <strong>{name}</strong>
        <p>{description}</p>
      </Col>
      <Col xs={2} className="text-right">
        <div style={{ height: '100px', overflow: 'hidden' }}>
          <img src={image} alt={name} style={{ width: '100%', height: 'auto' }} />
        </div>
      </Col>
      <Col xs={2} className="text-right">
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
      { name: 'Breakfast Tea', description: 'A bold, brisk black tea designed to start your day right.', price: 4.99, image: 'https://static.onecms.io/wp-content/uploads/sites/19/2018/02/13/tea-cup-2000.jpg' },
      { name: 'Muffins', description: 'Moist crumb, chewy texture, risen with the help of baking soda, eggs, and Hobbit magic for love to help start your day right with a choice of chocolate chips, blueberries, or blackberries inside.', price: 8.99, image: 'https://www.inspiredtaste.net/wp-content/uploads/2023/11/Easy-Blueberry-Muffin-Recipe-Video.jpg' },
      { name: 'Poached Eggs', description: 'Egg that has been cooked outside the shell by poaching (steaming), as opposed to simmering or boiling with a touch of Hobbit magic to help start your day right.', price: 9.99, image: 'https://kristineskitchenblog.com/wp-content/uploads/2023/03/perfect-poached-eggs-03.jpg' },
      // Add more breakfast items as needed
    ],
    secondBreakfast: [
        { name: 'Baked Apple Gondorian Toast topped with Streusel Topping', description: 'Bread dipped in a batter of egg and milk and sautéed until brown, usually served with syrup or sprinkled with sugar and cinnamon.', price: 12.99, image: 'https://www.livewellbakeoften.com/wp-content/uploads/2019/09/Apple-Streusel-French-Toast-Casserole-4-Square-copy.jpg' },
        { name: 'Breakfast Susage', description: 'Pork sausage that is typically seasoned with a blend of spices, such as sage, pepper, and nutmeg.', price: 8.99, image: 'https://www.daringgourmet.com/wp-content/uploads/2018/01/Breakfast-Sausages-5-square-lighter-2.jpg' },
        // Add more second breakfast items as needed
    ],
    elevenses: [
        { name: 'Lembas Bread', description: 'Thin cakes, made of a meal that was baked a light brown on the outside, and the inside was the color of cream, wrapped in leaves from the magical elvish forest of Lothlorien. "One small bite is enough to fill the belly of a grown man" - Legolas', price: 7.99, image: 'https://recipes.net/wp-content/uploads/2021/09/lembas-bread-recipe.jpg' },
        { name: 'Plain Scones', description: 'Traditional baked goods made with heavy cream, egg, baking powder, all purpose flour, vanilla - with a side of rasberry or blackberry jam', price: 6.99, image: 'https://www.fifteenspatulas.com/wp-content/uploads/2015/08/English_Scones_Fifteen_Spatulas-640x427.jpg' },
        // Add more elevenses items as needed
    ],
    lunch: [
        { name: 'Slow Cooked Potato Soup', description: 'Slow cooked potato soup with chopped onion, carrots, and black pepper.', price: 12.99, image: 'https://kristineskitchenblog.com/wp-content/uploads/2021/12/best-crockpot-potato-soup-recipe-0735.jpg' },
        { name: 'Slow Cooked Rabbit Soup with Lembas Bread Crumbs', description: 'Slow cooked rabbit soup with chopped onion, carrots, black pepper, and a hint of Shire-grown salt.', price: 18.99, image: 'https://1.bp.blogspot.com/-Gfif2u6T-R4/XpVodIKNI0I/AAAAAAAArbQ/zPhdOvepGioyeooJhze3OwTuXA2RQk7pACKgBGAsYHg/s1600/IMG_20200413_190602.jpg' },
        // Add more lunch items as needed
    ],
    afternoonTea: [
      { name: 'Afternoon Tea', description: 'Choice of black or green tea to help settle your stomach for the late afternoon.', price: 4.99, image: 'https://cupitol.com/wp-content/uploads/2019/08/tea-drinking-1.jpg' },
      { name: 'Plain Scones', description: 'Plain scones that go well with tea', price: 6.99, image: 'https://i0.wp.com/www.livewellbakeoften.com/wp-content/uploads/2019/08/Scones-Recipe-3.jpg?resize=745%2C1117&ssl=1' },
      { name: 'Biscotti', description: 'Almond biscuits that are twice-baked, oblong-shaped, dry, crunchy, and best enjoyed dipped in tea or coffee.', price: 8.99, image: 'https://feelgoodfoodie.net/wp-content/uploads/2023/07/Dark-Chocolate-Chip-Biscotti-13b.jpg' },
      { name: 'Afternoon Coffee', description: 'Afternoon black coffee brewed by Mr. Frodo Baggins himself with a choice of pure black coffee, or additional addings like milk or cream for $1 extra.', price: 3.99, image: 'https://neurosciencenews.com/files/2023/06/coffee-brain-caffeine-neuroscincces.jpg' },
      // Add more afternoon tea items as needed
    ],
    dinner: [
      { name: "Balin's Spiced Beef Roast", description: 'Roasted beef spiced with Shire spice and Dwarven salt', price: 19.99, image: 'https://recipes.oregonlive.com/system/recipes/images/000/003/707/hero/Cork_Spiced_Beef_%281%29.jpg?1449530201' },
      { name: "Pipin's Salted Pork", description: "Roasted pork spiced with both Shire spice and salt. Master Peregrin Took's original recipe made with Hobbit magic and love.", price: 24.99, image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/6/21/1/CCKEL512_salt-crusted-pork-roast-recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1483737178427.jpeg' },
      // Add more dinner items as needed
    ],
    supper: [
      { name: 'Pork Sasuage', description: 'Pork sausage that is typically seasoned with a blend of spices, such as sage, pepper, and nutmeg.', price: 14.99, image: 'https://www.beststopinscott.com/wp-content/uploads/smoked-pork-sausage175.jpg' },
      // Add more supper items as needed
    ],
    desserts: [
        { name: 'Apple Pie', description: 'Classic homemade apple pie. Original recipe from the Master himself: Samwise Gamgee. Our most popular menu item!', price: 14.99, image: 'https://www.inspiredtaste.net/wp-content/uploads/2022/11/Apple-Pie-Recipe-Video.jpg' },
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
