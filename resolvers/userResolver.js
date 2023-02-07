import { GraphQLError } from "graphql";
import admin from "../firebase/firebase.js";
import { NO_PREMESSION } from "../config/errors.js";

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
    getUser: async (_, { uid }, { role }) => {
      if (role !== "admin") throw new GraphQLError(NO_PREMESSION);
      const user = await admin.auth().getUser(uid);
      return user;
    },
    getAllUsers: async (_, __, { role }) => {
      if (role !== "admin") throw new GraphQLError(NO_PREMESSION);
      const getAllUsers = await admin.auth().listUsers();
      return getAllUsers.users;
    },
    setUserRole: async (_, { uid }) => {
      admin
        .auth()
        .setCustomUserClaims(uid, { role: "admin" })
        .then(() => console.log(uid));
    },
  },
};
