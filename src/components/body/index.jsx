import PropTypes from 'prop-types';

const Body = (props) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1, gap: '1rem' }}>
            <div>{props.title}</div>
            {props.array.map((item, idx) => {
                return (
                    <div key={idx}>{idx + 1}. {item}</div>
                )
            })}

            <div>
                <button style={{ backgroundColor: 'gray' }} onClick={()=>{
                    alert('Ponganos 10');
                }}>Button</button>
            </div>
        </div>
    )
}

Body.propTypes = {
    array: [],
    title: PropTypes.string.isRequired
};

export default Body;