const { AuthenticationError } = require('apollo-server-express');

const { User } = require('../models');
const { signToken } = require('../utils/auth');  


const resolvers = {
    // Query: {

    // },
    Mutation:{
        async login(parent, {email,password}){
const user = await user.findOne({email});
if(!user){
    throw new AuthenticationError('no user found with this email')
};
const correctPw = await user.isCorrectPassword(password);
if(!correctPw){
    throw new AuthenticationError('Incorrect credentials');

}
const token = signToken(user);
return{ token, user}
        },
        async addUser(parent, {email,password}){
            const user = await User.create({
                email: email,
                password: password
            });
            const token = signToken(user);
            return{token, user}
        }

    }
}
module.exports = resolvers