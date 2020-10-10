import React from "react";
import styled from "styled-components";

const StyledLink = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 22px;
    > a {
        color: #cc1d20;
        font-size: 18px;
        &:hover {
            opacity: 0.7;
        }
    }
`;

function Links() {
    return (
        <StyledLink>
            <a href="#">Quên mật khẩu?</a>
            <a href="#">Tạo tài khoản</a>
        </StyledLink>
    );
}

export default Links;