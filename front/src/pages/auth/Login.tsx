import React from "react";
import { useForm } from "react-hook-form";
import Card from "../../components/Cards/Card";
import Divider from "../../components/Divider";
import FormInput from "../../components/Input/FormInput";
//@ts-ignore
import LOGIN_IMG from "../../assets/login.svg";
import Button from "../../components/Buttons/Button";
interface IFormValues {
  "First Name": string;
  Age: number;
}
const Login = () => {
  const { register, handleSubmit } = useForm<IFormValues>();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="flex h-[100vh] items-center justify-center">
      <div className="w-[80%]">
        <Card>
          <div className="flex h-[40vh]">
            <div className="flex w-[50%] items-center justify-center p-14">
              <img src={LOGIN_IMG} alt="Logo" />
            </div>
            <Divider vertical />
            <form
              className="flex w-[50%] items-center justify-center"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="w-[70%]">
                <FormInput name="Username" register={register} />
                <FormInput
                  name="Password"
                  register={register}
                  type="password"
                />
                <div className="w-[100%]">
                  <Button size="full" type="submit">
                    Login
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
