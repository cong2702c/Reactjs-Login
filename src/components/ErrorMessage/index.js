import React from "react";
import styled from "styled-components";

const StyledP = styled.p`
    color: #ff0606;
    font-size: 14px;
    text-align: left;
`;

function ErrorMessage({text}) {
    return (
        <StyledP>{text}</StyledP>
    );
}

export default ErrorMessage;