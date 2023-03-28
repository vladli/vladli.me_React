import axiosAPI from "config/axiosAPI";
import { useTranslation } from "react-i18next";
import Button from "components/Button";
import Modal from "components/Modal/Modal";
import { useState } from "react";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";

const UserActions = ({ user, refetch }: any) => {
  const { t } = useTranslation("admin");
  const { uid, email, role } = user;
  const [modalDelete, setModalDelete] = useState(false);
  const showModal = () => {
    if (role === "admin") {
      toast.error("You can not delete Admin user.");
      return;
    }
    setModalDelete(!modalDelete);
  };
  const actionDelete = () => {
    axiosAPI
      .delete(`/api/users/user`, {
        params: { uid: uid },
      })
      .then(() => {
        refetch();
        setModalDelete(false);
        toast.success("Complete!");
      })
      .catch((err: any) => {
        toast.error(err.response.data);
        setModalDelete(false);
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
        <Modal.Header className="font-bold">
          {t("AllUsers.UserActions.title")}
        </Modal.Header>
        <Modal.Body>
          <p>{t("AllUsers.UserActions.body")}</p>
          <br />
          <p>UID: {uid}</p>
          <p>Email: {email}</p>
        </Modal.Body>
        <Modal.Actions>
          <Button color="error" size="sm" onClick={actionDelete}>
            {t("AllUsers.UserActions.button")}
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default UserActions;
