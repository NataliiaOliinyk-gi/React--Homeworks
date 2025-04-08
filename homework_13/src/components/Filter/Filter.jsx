import { useDispatch } from 'react-redux';
import { useRef, useEffect } from 'react';

import { setFilter } from '../../redux/actionCreators';

import styles from './Filter.module.css';

const Filter = () => {

    const dispatch = useDispatch();
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const handleChange = (event) => {
        dispatch(setFilter(event.target.value));
    }

    return (
        <div className={styles.container}>
            <input onChange={handleChange} type="text" ref={inputRef} className={styles.input} />
        </div>
    );
};

export default Filter;