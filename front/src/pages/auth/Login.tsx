import React from "react";
import Card from "../../components/Cards/Card";
import Divider from "../../components/Divider";
import TextField from "../../components/Input/TextField";

const Login = () => {
  return (
    <div className="flex h-[100vh] items-center justify-center">
      <div className="w-[80%]">
        <Card>
          <div className="flex h-[40vh]">
            <div className="flex w-[50%] items-center justify-center ">
              IMAGE
            </div>
            <Divider vertical />
            <div className="flex w-[50%] items-center justify-center bg-stone-600">
              <TextField name="id" label="Username" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
