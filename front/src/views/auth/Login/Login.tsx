import React from "react";
import { useForm } from "react-hook-form";
import Box from "../../../components/Box";
import Divider from "../../../components/Divider";
import FormInput from "../../../components/Input/FormInput";
//@ts-ignore
import LOGIN_IMG from "../../../assets/login.svg";
import Button from "../../../components/Buttons/Button";
//FIREBASE
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { PATH_PAGE } from "../../../router/paths";

type Inputs = {
  Email: string;
  Password: string;
};

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<Inputs>();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = React.useState("");

  const onSubmit = (data: any) => {
    signInWithEmailAndPassword(auth, data.Email, data.Password)
      .then((userCredential) => {
        userCredential?.user?.getIdToken().then((token) => {
          sessionStorage.setItem("Authorization", token);
        });
        setErrorMessage("");
        navigate(PATH_PAGE.root, { replace: true });
      })
      .catch((error: any) => {
        setErrorMessage(error.message);
      });
  };
  return (
    <Box className="w-[80%] 2xl:w-[40%]">
      <div className="flex h-[50vh]">
        <div className="hidden w-[50%] items-center justify-center md:flex">
          <img src={LOGIN_IMG} alt="Logo" className="max-h-[100%] p-14" />
        </div>
        <Divider vertical />
        <form
          className="flex w-[100%] items-center justify-center md:w-[50%]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-[70%]">
            <div className="flex flex-col rounded-2xl bg-neutral-800/60 font-bold">
              <p className="m-auto">Email: demo@vladli.me</p>
              <p className="m-auto">Password: 123456</p>
            </div>
            <FormInput
              name="Email"
              register={register}
              autoComplete="email"
              value="demo@vladli.me"
            />
            <FormInput
              name="Password"
              register={register}
              type="password"
              value={123456}
            />
            {errorMessage}
            <div className="w-[100%]">
              <Button size="full" type="submit">
                Login
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Box>
  );
};

export default Login;
