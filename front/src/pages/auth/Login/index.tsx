import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import Box from "components/Box";
import Divider from "components/Divider";
import Input from "components/Form/Input";

//@ts-ignore
import { ReactComponent as LOGIN_IMG } from "assets/login.svg";
import Button from "components/Button";

//FIREBASE
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, getErrorMessage } from "config/firebase";

import { PATH_PAGE } from "router/paths";

const schema = z
  .object({
    Email: z.string().email({ message: "s" }),
    Password: z.string(),
  })
  .strict();
type FormData = z.infer<typeof schema>;

const Login = () => {
  const { t } = useTranslation("auth");
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: "onChange",
    resolver: zodResolver(schema),
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    signInWithEmailAndPassword(auth, data.Email, data.Password)
      .then((userCredential) => {
        userCredential?.user?.getIdToken().then((token) => {
          sessionStorage.setItem("Authorization", token);
        });
        setErrorMessage(null);
        toast.success(t("Login.logedInMessage") + " " + data.Email);
        navigate(PATH_PAGE.root, { replace: true });
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
              label="Email"
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
              label={t("Login.password")}
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
                {t("Login.login")}
              </Button>
              {errorMessage ? (
                <p className="mt-2 select-none rounded-2xl border border-neutral-700 p-2 text-center text-red-500">
                  {errorMessage}
                </p>
              ) : null}
            </div>
          </div>
        </form>
      </div>
    </Box>
  );
};

export default Login;
