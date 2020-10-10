import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";

const StyleButton = styled.button`
    width: 100%;
    text-align: center;
    line-height: 45px;
    height: 45px;
    font-size: 18px;
    background-color: red;
    color: #ffffff;
    text-transform: uppercase;
    border-radius: 7px;
    border: none;
    margin-top: 15px;
`;

function Button({text, onClick}) {
    return (
        <StyleButton onClick={onClick}>{text}</StyleButton>
    );
};

export default Button;