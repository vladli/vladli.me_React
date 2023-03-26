import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Box from "../../../components/Box";
import Divider from "../../../components/Divider";
import Input from "../../../components/Form/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
//@ts-ignore
import { ReactComponent as LOGIN_IMG } from "assets/login.svg";
import Button from "../../../components/Button";

//FIREBASE
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, getErrorMessage } from "../../../config/firebase";

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
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    signInWithEmailAndPassword(auth, data.Email, data.Password)
      .then((userCredential) => {
        userCredential?.user?.getIdToken().then((token) => {
          sessionStorage.setItem("Authorization", token);
        });
        setErrorMessage(null);
        toast.success("Loged in as " + data.Email);
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
          <LOGIN_IMG className="max-h-[100%] fill-primary p-6" />
        </div>
        <Divider horizontal className="hidden md:flex" />
        <form
          className="flex w-[100%] items-center justify-center md:w-[50%]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <Input
              labeled
              name="Email"
              register={register}
              autoComplete="email"
              required
              value="demo@vladli.me"
              color={errors.Email ? "error" : "ghost"}
            />
            <p className="text-red-500">{errors.Email?.message}</p>
            <Input
              labeled
              name="Password"
              register={register}
              type="password"
              required
              value={123456}
              color={errors.Password ? "error" : "ghost"}
            />
            <p className="text-red-500">{errors.Password?.message}</p>
            <div className="mt-4 w-[100%]">
              <Button fullWidth type="submit" disabled={!isValid}>
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
