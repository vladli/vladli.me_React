import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { JWT_KEY } from "../security/key.js";

import admin from "../firebase/firebase.js";

export default {
  Query: {
    login: async (_, { login, password }) => {
      try {
        console.log(admin.auth());

        return admin;
      } catch (err) {
        return err;
      }
    },
    getUser: async (_, args, context) => {
      try {
        let getUser = await User.findOne({ _id: context.userId });
        if (!getUser) throw new Error("Invalid user.");
        let newObj = { ...getUser }._doc;
        delete newObj.password;
        return newObj;
      } catch (err) {
        return err;
      }
    },
    getAllUsers: async (_, args) => {
      try {
        let getAllUsers = await admin.auth().listUsers();
        return getAllUsers.users;
      } catch (err) {
        return err;
      }
    },
  },
};
