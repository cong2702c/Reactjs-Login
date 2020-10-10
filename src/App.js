import React, {useEffect, useState} from 'react';
import styled from "styled-components";

import './App.css';
import Input from "./components/Input";
import H2 from "./components/H2";
import Button from "./components/Button";
import Logo from "./image/logo.png";
import Links from "./components/link";
import ErrorMessage from "./components/ErrorMessage";

const FormWrapper = styled.div`
  text-align: center;
  width: 660px;
  background-color: #fff;
  padding: 135px;
  border-radius: 15px;
`;

function App() {
  const [user, setUser] = useState();
  const [pass, setPass] = useState();
  const [checkUser, setCheckUser] = useState(true);
  const [checkPass, setCheckUserPass] = useState(true);

  const checkValid = () => {
    if(!user) {
      setCheckUser(false);
    }
    if(!pass) {
      setCheckUserPass(false);
    }
  }

  useEffect(() => {
    if(user) {
      setCheckUser(true);
    }
    if(pass) {
      setCheckUserPass(true);
    }
  }, [user, pass])

  return (
    <div className="App">
      <FormWrapper>
        <img src={Logo} />
        <H2 title="Đăng nhập" />
        <Input placeholder="Tên Đăng Nhập" onChange={e => setUser(e.target.value)}/>
        {!checkUser && <ErrorMessage text="input invalid" />}
        <Input placeholder="Mật Khẩu" onChange={e => setPass(e.target.value)}/>
        {!checkPass && <ErrorMessage text="input invalid" />}
        <Button text="Đăng nhập" type="submit" onClick={checkValid}/>
        <Links />
      </FormWrapper>
    </div>
  );
}

export default App;
