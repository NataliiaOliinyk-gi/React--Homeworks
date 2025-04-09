import { useSelector } from 'react-redux';

import TitleComponent from '../TitleComponent/TitleComponent';

import styles from './User.module.css';

const User = () => {

    const items = useSelector(store => store.user);

    return (
        <div>
            <TitleComponent>User Information</TitleComponent>
            <div className={styles.container}>
                <p>Name: <span className={styles.span}>{items.username}</span></p>
                <p>Status: <span className={styles.span}>{items.userStatus}</span></p>
            </div>
        </div>
    )
};

export default User;