const Publisher = require('../../models/Publisher')

const addPublisher = async (obj, { input }, context) => {
    try{
        if(input.address){
            const newP = await Publisher.query().insertGraph({
                company: input.company,
                phoneNumber: input.phoneNumber,
                numBooksPublished: input.numBooksPublished,
                address: {
                    street: input.address.street,
                    city: input.address.city,
                    state: input.address.state,
                    zip: input.address.zip,
                },
            })
        }
        else{
            const newP = await Publisher.query().insertGraph({
                company: input.company,
                phoneNumber: input.phoneNumber,
                numBooksPublished: input.numBooksPublished,
            })
        }
    }
    catch(err){
        console.log(err)
        throw new Error('Unable to insert given Publisher')
    }
}

const resolvers = {
    Mutation: {
        addPublisher,
    },
}

module.exports = resolvers