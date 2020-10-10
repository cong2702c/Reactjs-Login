import React from "react";
import styled from "styled-components";

const StyledH2 = styled.h2`
    color: #909090;
    font-size: 26.62px;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 0;
`;

function H2({title}) {
    return (
        <StyledH2>{title}</StyledH2>
    );
}

export default H2;