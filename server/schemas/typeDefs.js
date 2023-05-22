const {gql} = require('apollo-server-express');

const typeDefs = gql`
type savedChatSchema{
    chatLog:String
}
type User {
    _id: ID!
    username: String
    email:String
    savedChat:[savedChatSchema]
}
type Auth{
    token:ID!
    user:User
}
type Query{
   oneUser(email:String!):User
# user:[User]
}
type Mutation{
    addUser( email:String!, password:String!,username:String!):Auth
    login(email:String!,password:String!):Auth
    saveChat(chatLog: String!):User
}

`
module.exports = typeDefs;