import './Greeting.css';

const Greeting = (props) => {
    return (
        <div className='greeting'>"Привет, {props.name}!"</div>
    );
};

export default Greeting;