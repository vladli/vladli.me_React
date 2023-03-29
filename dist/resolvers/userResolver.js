import admin from "../firebase/firebase";
export const createUser = (req, res) => {
    const { query } = req;
    admin
        .auth()
        .createUser({
        email: query["email"],
        password: query["password"],
    })
        .then(() => res.send());
};
export const getUser = (req, res) => {
    const { query } = req;
    admin
        .auth()
        .getUser(query["uid"])
        .then((user) => res.json(user))
        .catch((err) => res.send(err));
};
export const deleteUser = (req, res) => {
    const { query } = req;
    admin
        .auth()
        .getUser(query["uid"])
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
export const getAllUsers = (req, res) => {
    admin
        .auth()
        .listUsers()
        .then((users) => {
        const userList = [];
        users.users.map((user) => userList.push({
            uid: user.uid,
            email: user.email,
            creationTime: user.metadata.creationTime,
            role: user.customClaims?.role,
        }));
        res.send(userList);
    })
        .catch((err) => res.send(err));
};
