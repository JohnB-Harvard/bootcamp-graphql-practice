const User = require('../../models/User')

const addUser = async (obj, { input }, context) => {
    try{
        const newUser = await User.query().insert({
            email: input.email,
            password: input.password,
        })
    }
    catch(err){
        console.log(err)
        throw new Error('Unable to insert given User')
    }
}

const resolvers = {
    Mutation: {
        addUser,
    },
}

module.exports = resolvers