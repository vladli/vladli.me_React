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
      <Button onClick={() => setVisible(!visible)}>asd</Button>
      <Modal open={visible} onClickBackDrop={() => setVisible(false)}>
        <Modal.Header>Good</Modal.Header>
        <Modal.Body>Bad</Modal.Body>
        <Modal.Actions>
          <Button>Good</Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default TestPage;
