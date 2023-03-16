import Login from "../../views/auth/Login/Login";
import PageTitle from "../../components/PageTitle";
import { PATH_AUTH } from "../../router/paths";

const LoginPage = () => {
  return (
    <>
      <PageTitle title={PATH_AUTH.login.title} />
      <div className="flex h-[100vh] items-center justify-center">
        <Login />
      </div>
    </>
  );
};

export default LoginPage;
