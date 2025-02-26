import ShoppingItem from './ShoppingItem/ShoppingItem';
import './ShoppingList.css';


const ShoppingList = ({ items = [] }) => {

    if (!items?.length) {
        return <p>Список покупок пуст</p>
    };

    return (
        <ul className='shopping-list'>
            <>
                <h3>Список покупок</h3>
                {items.map((item) => <ShoppingItem key={item} item={item} />)}
            </>
        </ul>
    );
};

export default ShoppingList;