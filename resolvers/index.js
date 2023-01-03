import { mergeResolvers } from "@graphql-tools/merge";
//import carsResolver from "./carsResolver.js";
import userResolver from "./userResolver.js";

const resolvers = [userResolver];

export default mergeResolvers(resolvers);
