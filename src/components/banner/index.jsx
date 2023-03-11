import PropTypes from 'prop-types';

const Banner = (props) => {
    return (
        <div style={{ display:'flex', justifyContent:'center', alignItems:'center', backgroundColor: "grey", clear: 'both' }}>
            <h4 style={{ color: 'white' }} >{props.title}</h4>
        </div>
    )
}

Banner.propTypes = {
    title: PropTypes.string.isRequired,
};

Banner.defaultProps = {
    title: 'Texto'
  };
export default Banner