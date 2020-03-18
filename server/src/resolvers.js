module.exports = {
  Query: {
    // launches: (_, __, { dataSources }) =>
    launches: () => []
    //   dataSources.launchAPI.getAllLaunches(),
    // launch: (_, { id }, { dataSources }) =>
    //   dataSources.launchAPI.getLaunchById({ launchId: id }),
    // me: (_, __, { dataSources }) => dataSources.userAPI.findOrCreateUser()
  }
};
