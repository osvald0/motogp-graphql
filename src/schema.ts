import { gql } from 'apollo-server';

const typeDefs = gql`
  type Category {
    id: ID!
    name: String
  }

  type Brand {
    id: ID!
    name: String
    country: String
  }

  type Team {
    id: ID
    brand: Brand
    name: String
  }

  type Rider {
    id: ID!
    team: Team
    riderNumber: String
    category: Category
    name: String
    birthPlace: String
    birthdate: String
    weight: Int
    height: Int
  }

  type Query {
    riders: [Rider]
    teams: [Team]
    brands: [Brand]
    categories: [Category]
  }
`;

export default typeDefs;
