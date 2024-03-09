function Navbar(props){
    return(
        <div>
            this is a navbar ,compny name is {props.companyName}
        </div>
    )
}
Navbar.defaultProps={
    companyName:"Google"
}

export default Navbar;  