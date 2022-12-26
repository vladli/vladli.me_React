import React from "react";
import Card from "../../components/Cards/Card";
import Divider from "../../components/Divider";
import TextField from "../../components/Input/TextField";
//@ts-ignore
import LOGIN_IMG from "../../assets/login.svg";
import Button from "../../components/Buttons/Button";

const Login = () => {
  return (
    <div className="flex h-[100vh] items-center justify-center">
      <div className="w-[80%]">
        <Card>
          <div className="flex h-[40vh]">
            <div className="m-5 flex w-[50%] items-center justify-center p-14">
              <img src={LOGIN_IMG} alt="Logo" />
            </div>
            <Divider vertical />
            <div className="flex w-[50%] items-center justify-center bg-stone-600">
              <div className="w-[70%]">
                <TextField name="id" text="Username" />
                <TextField name="password" text="Password" type="password" />
                <div className="w-[100%]">
                  <Button size="full">Login</Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
