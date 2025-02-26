import './OrderStatusList.css';
import OrderStatus from './OrderStatus/OrderStatus';

const OrderStatusList = ({ items = [] }) => {

    if (!items?.length) {
        return <p>Список заказов пуст</p>
    };

    return (
        <ul className='order-status-list'>
            <>
                <h3>Статус Заказа</h3>
                {items.map(({ orderId, status }) => (
                    <OrderStatus key={orderId} orderId={orderId} status={status} />
                ))}
            </>
        </ul>
    );
};

export default OrderStatusList;