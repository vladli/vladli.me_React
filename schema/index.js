import { buildSchema } from "graphql";
import userSchema from "./userSchema.js";
import carsSchema from "./carsSchema.js";

const schema = `
${userSchema}
${carsSchema}
`;

export default buildSchema(schema);
