import admin from "firebase-admin";
const tempdata = require("./service-account.json");
const data = JSON.stringify(tempdata);
const json = JSON.parse(data);
admin.initializeApp({
    credential: admin.credential.cert(json),
});
export default admin;
