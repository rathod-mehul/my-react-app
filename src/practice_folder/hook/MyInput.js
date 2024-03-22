import {forwardRef} from 'react';

const MyInput = forwardRef(function MyInput(props, ref) {
        return (
            <input type="text" ref={ref} />
        )
    });



// const MyInput = forwardRef(function MyInput(props, ref){
//     return(
//         <input type="text" ref={ref} />
//     )
// });

export default MyInput;