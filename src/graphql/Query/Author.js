const Author = require('../../models/Author')
const Book = require('../../models/Book')
const Address = require('../../models/Address')

const authors = async () => {
    try{
        const Authors = await Author.query()
        return Authors
    }
    catch(err){
        console.log(err)
        throw new Error ('Utterly failed at retrieving the wordsmiths')
    }
    
}

const author = async (obj, { id }, context) => {
    try{
        const a = await Author.query().findOne('id', id)
        return a
    }
    catch(err){
        console.log(err)
        throw new Error ('Utterly failed at retrieving that wordsmith')
    }
}

const authorFromBook = async (obj, { bookId }, context) => {
    try{
        const b = await Book.query().findOne('id', bookId)
        const a = await b.$relatedQuery('author').first()
        return a
    }
    catch(err){
        console.log(err)
        throw new Error ('Utterly failed at retrieving the desired wordsmith')
    }
}

const books = async ({ id }, params, context) => {
    try{
        console.log(id)
        const b = await Book.query().where('authorId', id)
        return b;
    }
    catch(err){
        console.log(err)
        throw new Error (err)
    }
}

const address = async(obj, params, context) => {
    try{
        const a = await Address.query().findOne('id', obj.addressId)
        return a
    }
    catch(err){
        throw new Error(err)
    }
}

const resolver = {
    Query: {
        authors,
        authorFromBook,
        author,
    },
    Author: {
        books,
        address,
    },
}

module.exports = resolver