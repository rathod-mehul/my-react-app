import PropTypes  from "prop-types";
function Footer(props){
    return(
        <div>this a footer {props.details.name}</div>
    )
}

Footer.propTypes ={
    details: PropTypes.object
}
    
export default Footer;