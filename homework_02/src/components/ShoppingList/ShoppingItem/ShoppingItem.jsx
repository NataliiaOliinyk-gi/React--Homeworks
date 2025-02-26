import './ShoppingItem.css';

const ShoppingItem = ({ item }) => {
    return (
        <li className='shopping-item'>{item}</li>
    );
};

export default ShoppingItem;