import React from "react";
import { useForm } from "react-hook-form";
import Box from "../../../components/Box";
import Divider from "../../../components/Divider";
import Input from "../../../components/Input/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
//@ts-ignore
import LOGIN_IMG from "../../../assets/login.svg";
import Button from "../../../components/Buttons/Button";
//FIREBASE
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, getErrorMessage } from "../../../config/firebase";
import { useNavigate } from "react-router-dom";
import { PATH_PAGE } from "../../../router/paths";

const schema = yup
  .object({
    Email: yup.string().email().required(),
    Password: yup.string().required(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const Login = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<FormData>({ mode: "onChange", resolver: yupResolver(schema) });
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    signInWithEmailAndPassword(auth, data.Email, data.Password)
      .then((userCredential) => {
        userCredential?.user?.getIdToken().then((token) => {
          sessionStorage.setItem("Authorization", token);
        });
        setErrorMessage(null);
        navigate(PATH_PAGE.root.url, { replace: true });
      })
      .catch((error: any) => {
        setErrorMessage(getErrorMessage(error.code));
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
            <Input
              labeled
              name="Email"
              register={register}
              autoComplete="email"
              required
              value="demo@vladli.me"
            />
            <p className="text-red-500">{errors.Email?.message}</p>
            <Input
              className="mt-2"
              labeled
              name="Password"
              register={register}
              type="password"
              value={123456}
              required
            />
            <p className="text-red-500">{errors.Password?.message}</p>
            <div className="mt-4 w-[100%]">
              <Button size="full" type="submit" disabled={!isValid}>
                Login
              </Button>
              {errorMessage && (
                <p className="mt-2 select-none rounded-2xl border border-neutral-700 p-2 text-center text-red-500">
                  {errorMessage}
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </Box>
  );
};

export default Login;
