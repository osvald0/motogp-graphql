import categories from './data/categories';
import brands from './data/brands';
import teams from './data/teams';
import riders from './data/riders';
import { Team, Brand, Rider, Category } from './models';

const resolvers = {
  Team: {
    brand: (_source: Team): Brand => {
      const currentbrand = brands.filter((brand) => brand.id === _source.brand);
      return currentbrand[0];
    },
  },
  Rider: {
    team: (_source: Rider): Team => {
      const currentTeams = teams.filter((team) => team.id === _source.team);
      return currentTeams[0];
    },
    category: (_source: Rider): Category => {
      const currentCategory = categories.filter(
        (category) => category.id === _source.category,
      );
      return currentCategory[0];
    },
  },
  Query: {
    riders: (): Rider[] => {
      return riders;
    },
  },
};

export default resolvers;
