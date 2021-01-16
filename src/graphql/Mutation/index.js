const merge = require('lodash.merge')
const Author = require('./Author')
const Book = require('./Book')
const Publisher = require('./Publisher')
const User = require('./User')

const resolvers = [Author, Book, Publisher, User]

module.exports = merge(...resolvers)
