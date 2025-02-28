export default {
  routes: [
    {
     method: 'GET',
     path: '/test-api',
     handler: 'test-api.exampleActionGet',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
      method: 'POST',
      path: '/test-api',
      handler: 'test-api.exampleActionPost',
      config: {
        policies: [],
        middlewares: [],
      },
     },
  ],
};
