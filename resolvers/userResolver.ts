import admin from "../firebase/firebase";
import { Request, Response } from "express";

export const createUser = (req: Request, res: Response) => {
  const { query } = req;

  admin
    .auth()
    .createUser({
      email: query["email"] as string,
      password: query["password"] as string,
    })
    .then(() => res.send());
};

export const getUser = (req: Request, res: Response) => {
  const { query } = req;
  admin
    .auth()
    .getUser(query["uid"] as string)
    .then((user) => res.json(user))
    .catch((err) => res.send(err));
};

export const deleteUser = (req: Request, res: Response) => {
  const { query } = req;

  admin
    .auth()
    .getUser(query["uid"] as string)
    .then((user) => {
      if (user.customClaims?.role === "admin")
        return res.status(405).end("You can not delete Admin user.");
      admin
        .auth()
        .deleteUser(user.uid)
        .then(() => res.send());
    })
    .catch((err) => res.send(err));
};

export const getAllUsers = (req: Request, res: Response) => {
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
          role: user.customClaims?.role,
        })
      );
      res.send(userList);
    })
    .catch((err) => res.send(err));
};
