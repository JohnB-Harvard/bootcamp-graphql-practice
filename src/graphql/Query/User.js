const User = require('../../models/User')
const bcrypt = require('bcrypt')

const saltRounds = 10

const user = async (obj, { email }, params) => {
    try {
        const u = await User.query().findOne({'email': email})
        return u
    }
    catch(err){
        throw new Error(err)
    }
}

const resolvers = {
    Query: {
        user,
    }
}

export default resolvers
