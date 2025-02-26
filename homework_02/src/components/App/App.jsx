import Greeting from '../Greeting/Greeting';
import ShoppingList from '../ShoppingList/ShoppingList';
import OrderStatus from '../OrderStatusList/OrderStatus/OrderStatus';
import OrderStatusList from '../OrderStatusList/OrderStatusList';

import './App.css';

const shoppingItems = ['Куриное филе – 500 г', 'Брокколи – 300 г', 'Картофель – 1 кг', 'Чеснок – 2 зубчика', 'Сливки 20% – 200 мл'];
// const shoppingItems = [];

const orderStatusItem = [
  {
    orderId: 121,
    status: 'доставлен',
  },
  {
    orderId: 122,
    status: 'обработан',
  },
  {
    orderId: 123,
    status: 'в пути',
  },
  {
    orderId: 124,
    status: 'доставлен',
  },
  {
    orderId: 125,
  },
];

function App() {


  return (
    <>
      <Greeting name="Natali" />

      <ShoppingList items={shoppingItems} />

      <OrderStatus orderId='123' status='в пути' />

      <OrderStatusList items={orderStatusItem} />
    </>
  );
};

export default App;
