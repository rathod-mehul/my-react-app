function FunctionComponent(props) {
    let name = 'banana';
    switch (name) {
        case 'apple':
            console.log("you enter apple");
            break;
        case 'banana':
            console.log("you enter banana");
            break;
        case 'mango':
            console.log("you enter mango");
        default:
           console.log("you not select any fruits");
    }

    let enumObj = {
        'mehul' : <h1>mehul is web devloper</h1>,
        'rahul' : <h1>rahul is app devloper</h1>,
        'chirag': <h1> chirag is web disiner</h1>,
    }



    return(
<>
{props.name != '' && props.name != undefined ? enumObj[props.name] : "name is not define"}
</>
    )
}


export default FunctionComponent;