import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Filter from '../Filter/Filter';
import UserList from '../UserList/UserList';

import { getUsers } from '../../api/users';
import { onSetUsers } from '../../redux/actionCreators';

import styles from './UsersView.module.css';

const UsersView = () => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);



    useEffect(() => {

        const fetchUsers = async () => {
            try {
                setLoading(true);
                const data = await getUsers();
                dispatch(onSetUsers(data));
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, [dispatch]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h2 className={styles.title}>User List</h2>
                <Filter />
                <UserList />
                {loading && <p className={styles.load}>Loading Users...</p>}
                {error && <p className={styles.error}>{error}</p>}
            </div>

        </div>
    )
};

export default UsersView;