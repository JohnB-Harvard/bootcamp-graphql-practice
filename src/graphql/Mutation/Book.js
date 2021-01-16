const Book = require('../../models/Book')
const Author = require('../../models/Author')
const Publisher = require('../../models/Publisher')

const addBook = async (obj, { input }, context) => {
    try{
        a = Author.query().where('id', input.authorId)
        p = Publisher.query().where('id', input.publisherId)
        if(a && p){
            const book = await Book.query().insertGraph({
                title: input.title,
                language: input.language,
                numPages: input.numPages,
                datePublished: input.datePublished,
                author: {
                    id: input.authorId
                },
                publisher: {
                    id: input.publisherId
                }
            }, {relate: true})
            return book
        }
        else{
            console.log('Unable to find author and/or publisher. Please add them first.')
            return null
        }
    }
    catch(err){
        console.log(err)
        throw new Error('Unable to add book')
    }
}

const resolver = {
    Mutation: {
        addBook,
    },
}

module.exports = resolver