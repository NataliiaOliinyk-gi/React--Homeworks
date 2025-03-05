

import styles from './CitySelector.module.css';

const CitySelector = ({ updateCity }) => {


    const handleChange = (event) => {
        updateCity(event.target.selectedIndex);
    };

    return (
        <form className={styles.cityForm}>
            <h2>Выберите город:</h2>
            <select name="city" id="selectCity" onChange={handleChange}>
                <option value="tokio">Токио</option>
                <option value="kioto">Киото</option>
                <option value="osaka">Осака</option>
                <option value="hokkaido">Хоккайдо</option>
                <option value="nagoia">Нагоя</option>
            </select>
        </form>
    );
};

export default CitySelector;