const User = require('../../models/User')

const auth = async (obj, { email, password }, params) => {
    const auth = await User.query().findOne({email: email, password: password})
    if(auth){
        return true
    }
    return false
}

const resolvers = {
    Query: {
        auth,
    }
}

module.exports = resolvers