import User from "../models/userModel.js";

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
    getUser: async (_, { uid }, context) => {
      try {
        console.log(context);
        const user = await admin.auth().getUser(uid);
        return user;
      } catch (err) {
        return err;
      }
    },
    getAllUsers: async (_, args) => {
      try {
        const getAllUsers = await admin.auth().listUsers();
        return getAllUsers.users;
      } catch (err) {
        return err;
      }
    },
    setUserRole: async (_, { uid }) => {
      admin
        .auth()
        .setCustomUserClaims(uid, { role: "admin" })
        .then(() => console.log(uid));
    },
  },
};
