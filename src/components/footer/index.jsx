const Footer = (props) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "grey", clear: 'both' }}>
            {props.children}
        </div>
    )
}
export default Footer;