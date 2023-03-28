import Button from "components/Button";
import { faker } from "@faker-js/faker";
import axiosAPI from "config/axiosAPI";
import { toast } from "react-toastify";

type Props = {};

function Main({}: Props) {
  const handleClick = () => {
    let email = faker.internet.email(...[, ,], "vladli.me");
    axiosAPI
      .post("/api/users/user", null, {
        params: { email: email, password: "123456" },
      })
      .then(() => toast.info("Complete"));
  };
  return (
    <div>
      <Button onClick={handleClick}>Create random user</Button>
    </div>
  );
}

export default Main;
