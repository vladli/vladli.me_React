const userType = `
type User{
    uid:ID!
    email:String!
    emailVerified:Boolean
    displayName:String
    photoURL:String
}
type LoginReturnType{

    admin:String
}
type Query{
    login:LoginReturnType!
    getUser(id:ID):User!
    getAllUsers:[User!]
}
`;

export default userType;
