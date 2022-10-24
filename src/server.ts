import "reflect-metadata";

import parse from "node:path" 

import { ApolloServer } from "apollo-server"
import { buildSchema } from "type-graphql";
import { AppointmentsResolver } from "./resolvers/Appointments-resolver";


async function bootstrap(){

  const schema = await buildSchema({
    resolvers: [
      AppointmentsResolver
    ],
    emitSchemaFile: parse.resolve(__dirname, 'schema.gql')

  })
  const server = new ApolloServer({
    schema,
  })

  const { url } = await server.listen()

  console.log(`🚀 Server is running on ${url}`);
}

bootstrap()