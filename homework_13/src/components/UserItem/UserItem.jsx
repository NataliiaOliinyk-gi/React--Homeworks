

import styles from './UserItem.module.css';

const UserItem = ({ item }) => {
    return (
        <li className={styles.item}>{item.name}</li>
    );
};

export default UserItem;