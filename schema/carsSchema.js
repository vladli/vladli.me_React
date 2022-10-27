const carType = `
type Car{
    _id:ID!
    maker:String!
    model:String!
    year:Int!
    createdAt:String!
}

extend type Query{
    getCar(id:ID):Car!
    getAllCars:[Car]!
}
`;

export default carType;
