import Login from "../../views/auth/Login/Login";
import { m } from "framer-motion";
const LoginPage = () => {
  return (
    <m.div
      className="flex h-[100vh] items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Login />
    </m.div>
  );
};

export default LoginPage;
