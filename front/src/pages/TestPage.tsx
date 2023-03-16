import Button from "components/Button";
import Modal from "components/Modal/Modal";
import Table from "components/Table/Table";
import { useState } from "react";
import LoadingEffect from "../components/LoadingEffect";
import PageTitle from "../components/PageTitle";

const TestPage = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <PageTitle title="Test Page" />
      <LoadingEffect />
    </>
  );
};

export default TestPage;
