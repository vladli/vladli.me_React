import admin from "firebase-admin";
import { readFile } from "fs/promises";
const json = JSON.parse(
  await readFile(new URL("./service-account.json", import.meta.url))
);

admin.initializeApp({
  credential: admin.credential.cert(json),
});
export default admin;
