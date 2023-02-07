const userType = `
type User{
    uid:ID!
    email:String!
    emailVerified:Boolean
    displayName:String
    photoURL:String
    phoneNumber:String
    disabled:Boolean

    metadata:MetaData

    customClaims:UserRole
}
type MetaData {
    creationTime:String
}
type UserRole {
    role:String
}

type LoginReturnType{
    admin:String
}
type Query{
    login:LoginReturnType!
    getUser(uid:ID!):User
    getAllUsers:[User!]
    setUserRole(uid:ID!):[User!]
}
`;

export default userType;
