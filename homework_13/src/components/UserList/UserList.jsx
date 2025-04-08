import { useSelector } from 'react-redux';

import UserItem from '../UserItem/UserItem';


import styles from './UserList.module.css';

const UserList = () => {

    const users = useSelector(store => store.users);
    const filter = useSelector(store => store.filter);

    const items = users.filter(user =>
        user.name.toLowerCase().includes(filter.toLowerCase())
    );

    const elements = items.map(item => (
        <UserItem key={item.id} item={item} />
    ))

    return (
        <ul className={styles.listContainer}>
            {elements}
        </ul>
    );
};

export default UserList;