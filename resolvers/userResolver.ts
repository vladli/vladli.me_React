import admin from "../firebase/firebase";
import { NO_PREMESSION } from "../config/errors";
import { Request, Response } from "express";

export const getUser = (req: Request, res: Response) => {
  const { role, params } = req;
  if (role !== "admin") return res.status(404).send(NO_PREMESSION);
  admin
    .auth()
    .getUser(params.uid)
    .then((user) => res.json(user))
    .catch(() => res.send(NO_PREMESSION));
};

export const getAllUsers = (req: Request, res: Response) => {
  const { role } = req;
  if (role !== "admin") return res.status(404).send(NO_PREMESSION);
  admin
    .auth()
    .listUsers()
    .then((users) => res.send(users))
    .catch(() => res.send(NO_PREMESSION));
};
