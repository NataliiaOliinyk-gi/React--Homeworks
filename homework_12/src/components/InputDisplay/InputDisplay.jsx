

import styles from './InputDisplay.module.css';

const InputDisplay = ({ getCurrentValue }) => {

    const getValue = (event) => {
        getCurrentValue(event.target.value)
    }

    return (
        <div>
            <input onChange={getValue} type="text"  className={styles.input}/>
        </div>
    );
};

export default InputDisplay;