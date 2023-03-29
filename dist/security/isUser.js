import { NOT_AUTH, NO_PREMESSION } from "../config/errors";
export function isAuthenticated(req, res, next) {
    const { userId, isAuth } = req;
    if (!userId || !isAuth) {
        res.status(401).json({ message: NOT_AUTH });
        return;
    }
    next();
}
export function isAdmin(req, res, next) {
    isAuthenticated(req, res, function () {
        const { authRole } = req;
        if (authRole !== "admin") {
            res.status(401).json({ message: NO_PREMESSION });
            return;
        }
        next();
    });
}
const isUser = Object.create(null);
export default Object.assign(isUser, {
    Authenticated: isAuthenticated,
    Admin: isAdmin,
});
