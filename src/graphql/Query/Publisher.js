const Publisher = require('../../models/Publisher')
const Address = require('../../models/Address')

const address = async (obj, params, context) => {
    try{
        const a = await Address.query().findOne('id', obj.addressId)
        return a
    }
    catch(err){
        console.log(err)
        throw new Error('Unable to get address')
    }
}

const publishers = async (obj, params, context) => {
    try{
        const p = await Publisher.query()
        return p
    }
    catch(err){
        console.log(err)
        throw new Error('Unable to get Publishers')
    }
}

const resolvers = {
    Query: {
        publishers,
    },
    Publisher: {
        address,
    },
}

module.exports = resolvers