import { useForm } from 'react-hook-form';
import { useId, useRef, useEffect } from 'react';

import TitleComponent from '../TitleComponent/TitleComponent';

import styles from './UserForm.module.css';

const UserForm = ({ onSetUserInfo }) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const usernameId = useId();
    const userStatusId = useId();

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const onSubmit = values => {
        onSetUserInfo(values);
        reset();
    }

    return (
        <div>
            <TitleComponent>Edit User Information</TitleComponent>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
                <div className={styles.box}>
                    <label ref={inputRef} htmlFor={usernameId} >Name:</label>
                    <input {...register('username', { required: 'This field is required' })}
                        type="text" placeholder='Name' id={usernameId}
                        className={styles.input} />
                </div>
                {errors.username && <p className={styles.error}>{errors.username.message}</p>}

                <div className={styles.box}>
                    <label htmlFor={userStatusId} >Status:</label>
                    <input {...register('userStatus', { required: 'This field is required' })}
                        type="text" placeholder='status' id={userStatusId}
                        className={styles.input} />
                </div>
                {errors.userStatus && <p className={styles.error}>{errors.userStatus.message}</p>}

                <div>
                    <button className={styles.btn}>Save</button>
                </div>
            </form>
        </div>
    )
};

export default UserForm;