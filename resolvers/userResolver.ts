import admin from "../firebase/firebase";
import { NO_PREMESSION } from "../config/errors";
import { Request, Response } from "express";

export const getUser = (req: Request, res: Response) => {
  const { role, query } = req;
  if (role !== "admin") return res.status(404).send(NO_PREMESSION);
  admin
    .auth()
    .getUser(query["uid"] as string)
    .then((user) => res.json(user))
    .catch(() => res.send(NO_PREMESSION));
};

export const getAllUsers = (req: Request, res: Response) => {
  const { role } = req;
  if (role !== "admin") return res.status(404).send(NO_PREMESSION);
  admin
    .auth()
    .listUsers()
    .then((users) => {
      const userList: any = [];
      users.users.map((user) =>
        userList.push({
          uid: user.uid,
          email: user.email,
          creationTime: user.metadata.creationTime,
        })
      );
      res.send(userList);
    })
    .catch(() => res.send(NO_PREMESSION));
};

export const deleteUser = (req: Request, res: Response) => {
  const { role, query } = req;
  res.send("h");
  console.log(query["uid"]);
};
