import { useState } from 'react';
import './App.css';
import MenuItem from './components/MenuItem';
import Title from './components/Title';
import Cart from './components/Cart';
import OrderPopup from './components/OrderPopup';

import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];


function App() {

  const [orders, setOrders] = useState(Array(menuItems.length).fill(0));
  const [subtotal, setSubtotal] = useState(0);
  const [showOrderPopup, setshowOrderPopup] = useState(false);

  const updateSubtotal = (newOrders) => {
    let total = 0;
    for (let i = 0; i < newOrders.length; i++) {
      total += newOrders[i] * menuItems[i].price;
    }
    setSubtotal(total);
  }

  const updateOrders = (index, change) => {
    let newOrders = [...orders]
    if (newOrders[index] + change < 0) {
      return;
    }
    newOrders[index] += change
    setOrders(newOrders);
    updateSubtotal(newOrders);
  }

  const resetOrder = () => {
    const newOrders = Array(menuItems.length).fill(0);
    setOrders(newOrders);
    updateSubtotal(newOrders);
  }

  const getOrderText = () => {
    if(orders.reduce((partialSum, a) => partialSum + a, 0) === 0){
      return 'No items in cart!'
    }
    let outStr = 'Order Placed: ';
    for(let i = 0; i < orders.length; i++){
      if(orders[i] > 0){
        outStr += `${String(orders[i])} ${menuItems[i].title} `;
      }
    }
    return outStr;
  }

  return (
    <div>
      <Title title='Sakura Restauraunt'
        logo='logo.jpg'
        description='Fresh and authentic Japanese cuisine'
        slogan='Amazing views and even better food' />
      <div className="menu">
        {menuItems.map((e) => {
          return (
            <MenuItem title={e.title}
              description={e.description}
              imageName={e.imageName}
              price={e.price}
              key={e.id}
              quantity={orders[e.id - 1]}
              update={(change) => updateOrders(e.id - 1, change)}
            />
          )
        })}
      </div>
      <OrderPopup showOrderPopup={showOrderPopup}
                  closeOrderPopup={() => {setshowOrderPopup(false); resetOrder();}}
                  orders={getOrderText()}
      />
      <Cart
        subtotal={subtotal}
        orderItems={() => {setshowOrderPopup(true)}}
        resetOrder={resetOrder}
      />
    </div>
  );
}

export default App;
