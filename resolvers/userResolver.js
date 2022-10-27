import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { UserInputError, AuthenticationError } from "apollo-server-express";
import { JWT_KEY } from "../security/key.js";

export default {
  Query: {
    login: async (_, { login, password }) => {
      try {
        if (!login) throw new UserInputError("Заполните все поля!");
        if (!password) throw new UserInputError("Заполните все поля!");

        const user = await User.findOne({ login: login });
        if (!user) throw new UserInputError("Неверные данные.");

        const isCorrectPassword = true;

        if (!isCorrectPassword) throw new UserInputError("Неверные данные.");

        const token = jwt.sign({ _id: user._id }, JWT_KEY, {
          expiresIn: 60 * 60,
          algorithm: "HS256",
        });
        return {
          ...user.toJSON(),
          token,
        };
      } catch (err) {
        return err;
      }
    },
    getUser: async (_, args, context) => {
      try {
        let getUser = await User.findOne({ _id: context.userId });
        if (!getUser) throw new AuthenticationError("Invalid user.");
        let newObj = { ...getUser }._doc;
        delete newObj.password;
        return newObj;
      } catch (err) {
        return err;
      }
    },
  },
};
