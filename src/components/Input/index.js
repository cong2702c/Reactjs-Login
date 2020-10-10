import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";

const StyleInput = styled.input`
    width: 100%;
    border-radius: 7px;
    height: 45px;
    background-color: #f4f4f4;
    margin-top: 15px;
    border: none;
    padding: 0 15px;
    &:focus {
        outline: 0;
    }
`;

function Input({placeholder, onChange}) {
    return (
        <StyleInput placeholder={placeholder} onChange={onChange}/>
    );
}


// function Input() {
//     const [ count, setCount ] = useState(10);

//     useEffect(() => {
//         console.log("111111111111111111");
//     }, [count]); 

//     const handleClick = () => {
//         setCount(count + 1);
//     }

//     return(
//         <div onClick={handleClick}>{count}</div>
//     );
// }

// class Input extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0,
//         };

//         console.log("1");
//     }

//     componentDidMount() {
//         this.setState({
//             count: 1,
//         })

//         console.log("3");
//     }

//     render() {
//         console.log("2");
//         return (
//         <div>{this.state.count}</div>
//         );
//     }
// }

export default Input;