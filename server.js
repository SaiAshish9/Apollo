const { ApolloServer,gql } = require("apollo-server")

const movies =[
  {
    title:"Terminator 2",
    director:"James Cameron",
    actors:[{name:"Arnold"}]
  },
  {
    title:"Alien",
    director:"Scott",
    actors:[{name:"Weaver"}]
  }
]

const typeDefs=gql`
type Movie{
  title:String,
  director:String,
  actors:[Actor]
}
type Actor{
  name:String
}
type Query{
  movies:[Movie]
}
`
const resolvers={
  Query:{
    movies:()=>movies
  }
}

const server=new ApolloServer({typeDefs,resolvers})

server.listen().then(({url})=>{
  console.log(`server started on ${url}`);
})
