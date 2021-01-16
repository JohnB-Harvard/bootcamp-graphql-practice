const { gql } = require('apollo-server-express')

module.exports = gql`
  scalar Date

  type Query {
    authors: [Author!]
    authorFromBook(bookId: ID!): Author
    books: [Book!]
    author(id: ID): Author
    publishers: [Publisher!]
    user (email: String!): User
    auth (email: String!, password: String!): Boolean!
  }
  type Mutation {
    addAuthor(input: AuthorInput!): Author
    addBook(input: BookInput!): Book
    addPublisher(input: PublisherInput): Publisher
    addUser(input: UserInput!): User
  }
  type User {
    id: ID!
    email: String!
    password: String!
  }
  type Author {
    id: ID!
    firstName: String!
    lastName: String!
    age: Int!
    email: String!
    numBooksPublished: Int!
    books: [Book!]
    address: Address
  }
  type Address {
    id: ID!
    street: String!
    city: String!
    state: String!
    zip: String!
  }
  type Book {
    id: ID!
    title: String!
    language: String!
    numPages: Int!
    datePublished: Date!
    bestseller: Boolean!
    author: Author!
    publisher: Publisher
  }
  type Publisher {
    id: ID!
    company: String!
    phoneNumber: String!
    numBooksPublished: Int!
    address: Address!
  }

  input UserInput {
    email: String!
    password: String!
  }

  input AuthorInput {
    firstName: String!
    lastName: String!
    age: Int!
    email: String!
    address: AddressInput
  }

  input BookInput {
    title: String!
    language: String!
    numPages: Int!
    datePublished: Date!
    authorId: ID!
    publisherId: ID!
  }

  input AddressInput{
    street: String!
    city: String!
    state: String!
    zip: String!
  }

  input PublisherInput{
    company: String!
    phoneNumber: String!
    numBooksPublished: Int
    address: AddressInput
  }
`
