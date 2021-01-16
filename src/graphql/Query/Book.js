const Book = require('../../models/Book')
const Publisher = require('../../models/Publisher')
const Author = require('../../models/Author')

const books = async (obj, { bookId }, params) => {
    try{
        const b = await Book.query()
        return b
    }
    catch(err){
        console.log(err)
        throw new Error('Unable to get books')
    }
}

const publisher = async(obj, params, context) => {
    try{
        const p = await Publisher.query().findOne('id', obj.publisherId)
        return p
    }
    catch(err){
        throw new Error(err)
    }
}

const author = async(obj, params, context) => {
    try{
        const p = await Author.query().findOne('id', obj.authorId)
        return p
    }
    catch(err){
        throw new Error(err)
    }
}

const resolvers = {
    Query: {
        books,
    },
    Book: {
        publisher,
        author,
    },
}

module.exports = resolvers