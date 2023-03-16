import axios from "axios";
import Button from "components/Button";
import Modal from "components/Modal/Modal";
import { useState } from "react";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";

const UserActions = ({ user, refetch }: any) => {
  const { uid, email, creationTime } = user;
  const [modalDelete, setmodalDelete] = useState(false);
  const showModal = () => setmodalDelete(!modalDelete);
  const actionDelete = () => {
    axios
      .delete(`/api/users/user`, {
        params: { uid: uid },
      })
      .then(() => {
        refetch();
        setmodalDelete(false);
        toast.success("Complete!");
      })
      .catch((err: any) => {
        toast.error(err.response.data);
        setmodalDelete(false);
      });
  };
  return (
    <>
      <Button shape="square" size="sm" color="ghost">
        <MdEdit size={20} />
      </Button>
      <Button shape="square" size="sm" color="ghost" onClick={showModal}>
        <MdDeleteForever color="red" size={20} />
      </Button>
      <Modal open={modalDelete} onClickBackDrop={showModal}>
        <label
          onClick={showModal}
          className="btn-sm btn-circle btn absolute right-2 top-2"
        >
          ✕
        </label>
        <Modal.Header className="font-bold">Delete User</Modal.Header>
        <Modal.Body>
          <p>Do you want to permanently delete user?</p>
          <br />
          <p>UID: {uid}</p>
          <p>Email: {email}</p>
        </Modal.Body>
        <Modal.Actions>
          <Button color="error" size="sm" onClick={actionDelete}>
            Delete
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default UserActions;
