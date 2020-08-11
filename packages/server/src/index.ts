import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const app = express()

app.use(express.json());

const PORT = 3001;

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}${server.graphqlPath}`);
});
