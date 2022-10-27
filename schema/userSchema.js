const userType = `
type User{
    _id:ID!
    login:String!
    password:String!
}
type LoginReturnType{
    _id:ID!
    login:String
    token:String
}
type Query{
    login(login:String!,password:String!):LoginReturnType!
    getUser(id:ID):User!
}
`;

export default userType;
