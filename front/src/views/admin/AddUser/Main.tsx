import Button from "components/Button";
import { faker } from "@faker-js/faker";
import axios from "axios";
import { toast } from "react-toastify";

type Props = {};

function Main({}: Props) {
  const handleClick = () => {
    let email = faker.internet.email(...[, ,], "vladli.me");
    axios
      .post("/api/users/user", null, {
        params: { email: email, password: "123456" },
      })
      .then(() => toast.info("Complete"));
  };
  return (
    <div className="p-4">
      <Button onClick={handleClick}>Create random user</Button>
    </div>
  );
}

export default Main;
