import { useState } from 'react';

import InputDisplay from '../InputDisplay/InputDisplay';
import ValueDisplay from '../ValueDisplay/ValueDisplay';

import styles from './MyDisplay.module.css';


const MyDisplay = () => {

    const [currentValue, setCurrentValue] = useState('');
    
    
    const getCurrentValue = (newCurrentValue) => {
        setCurrentValue(newCurrentValue)
    }

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Current and Previous Value</h2>
            <InputDisplay getCurrentValue={getCurrentValue} />
            <ValueDisplay value={currentValue} />
        </div>
    );
};

export default MyDisplay;