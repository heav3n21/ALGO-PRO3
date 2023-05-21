const { AuthenticationError } = require('apollo-server-express');

const { User } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {

    },
    Mutation: {
        async login(parent, { email, password }) {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('no user found with this email')
            };
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');

            }
            const token = signToken(user);
            return { token, user }
        },
        async addUser(parent, {email, password, username}) { 
            const user = await User.create({
                username: username,
                email: email,
                password: password
            });
            const token = signToken(user);
            return { token, user }
        },
        async saveWork(parent,{solutionData}, context) {
            if(context){       
        
            let filter = {_id: context.user._id }  
          
                const user = await User.findOneAndUpdate(filter,
                    { $push: { savedWork : solutionData}}, 
                    {new: true});
                    return user;

            } else {
                throw new AuthenticationError('You need to be logged in!');
              }

        } 

    }
}
module.exports = resolvers;
