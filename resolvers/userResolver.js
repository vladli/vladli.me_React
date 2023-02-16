import admin from "../firebase/firebase.js";
import { NO_PREMESSION } from "../config/errors.js";

export const getUsers = (req, res) => {
  const { role, params } = req;

  if (role !== "admin") return res.status(404).send(NO_PREMESSION);
  admin
    .auth()
    .getUser(params.uid)
    .then((user) => res.json(user))
    .catch(() => res.send(NO_PREMESSION));
};

export const getAllUsers = (req, res) => {
  const { role } = req;
  //if (role !== "admin") return res.status(404).send(NO_PREMESSION);
  admin
    .auth()
    .listUsers()
    .then((users) => res.send(users))
    .catch(() => res.send(NO_PREMESSION));
};
