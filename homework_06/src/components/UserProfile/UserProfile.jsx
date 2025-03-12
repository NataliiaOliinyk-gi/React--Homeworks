import { useState, useEffect } from 'react';
import axios from "axios";

import styles from './UserProfile.module.css';

const initialState = {
    name: '',
    picture: null,
    email: '',
    phone: '',
};

const UserProfile = () => {

    const [user, setUser] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUser = async () => {
        try {
            setError(null);
            setLoading(true);
            const { data } = await axios.get('https://randomuser.me/api');
            const userData = data.results[0];
            setUser({
                name: `${userData.name.first} ${userData.name.last}`,
                picture: userData.picture.medium,
                email: userData.email,
                phone: userData.phone,
            });
        } catch (error) {
            setError(error.message);
        }
        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUser()
    }, []);

    const loadNewUser = () => {
        fetchUser()
    };

    return (

        <div className={styles.wrapper}>
            <div className={styles.userProfileContainer}>

                {error && <p style={{ color: "red" }}>{error}</p>}
                {loading && <p>Loading...</p>}
                <img src={user.picture} alt={user.name} className={styles.userImage} />
                <h3 className={styles.userName}>{user.name}</h3>
                {user.email && <p className={styles.userDecrriptions}>Email: {user.email}</p>}
                {user.phone && <p className={styles.userDecrriptions}>Phone: {user.phone}</p>}
                <button className={styles.loadButton} onClick={loadNewUser}>Load New User</button>

            </div>

        </div>
    );
};

export default UserProfile;
