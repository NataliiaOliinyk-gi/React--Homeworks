import './OrderStatus.css';

// "Заказ #[orderId]: [status]"

const OrderStatus = ({ orderId, status = "в обработке" }) => {

  return (
    <li className='order-status'>Заказ #{orderId}: {status}</li>
  );
};

export default OrderStatus;