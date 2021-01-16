const Author = require('../../models/Author')

const addAuthor = async (obj, { input }, context) => {
    try{
        if(input.address){
            const newA = await Author.query().insertGraph({
                firstName: input.firstName,
                lastName: input.lastName,
                age: input.age,
                email: input.email,
                address: {
                    street: input.address.street,
                    city: input.address.city,
                    state: input.address.state,
                    zip: input.address.zip,
                },
            })
            return newA
        }
        else{
            const newA = await Author.query().insertGraph({
                firstName: input.firstName,
                lastName: input.lastName,
                age: input.age,
                email: input.email,
            })
            return newA
        }
    }
    catch(err){
        console.log(err)
        throw new Error('Unable to insert given Author')
    }
}

const resolvers = {
    Mutation: {
        addAuthor,
    },
}

module.exports = resolvers