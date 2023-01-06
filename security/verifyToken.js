import admin from "../firebase/firebase.js";

export const verifyToken = async (req, res, next) => {
  const authToken = req.headers.authorization;
  if (!authToken) {
    req.isAuth = false;
    return next();
  }
  const token = authToken.split(" ")[1];
  if (!token || token === "") {
    req.isAuth = false;
    return next();
  }
  console.log(token);
  admin
    .auth()
    .verifyIdToken(token)
    .then((user) => {
      req.userId = user.uid;
      req.isAuth = true;
      req.role = user.role;
      next();
    })
    .catch(() => {
      req.isAuth = false;
      return next();
    });
};
