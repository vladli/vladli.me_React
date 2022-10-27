import Car from "../models/carsModel.js";
import { UserInputError, AuthenticationError } from "apollo-server-express";

export default {
  Query: {
    getCar: async (_, args, context) => {
      try {
        let getCar = await Car.findOne({ _id: args.id });
        return getCar;
      } catch (err) {
        return err;
      }
    },
    getAllCars: async (_, args) => {
      try {
        const getCars = await Car.find();
        return getCars;
      } catch (err) {
        return err;
      }
    },
  },
};
