/**
 * A set of functions called "actions" for `test-api`
 */

export default {
  exampleActionGet: async (ctx, next) => {
    try {
      ctx.body = 'ok';
    } catch (err) {
      ctx.body = err;
    }
  },
  exampleActionPost: async (ctx, next) => {
    const { body } = ctx.request;
    console.log('body>>>>', body);
    try {
      ctx.body = 'ok' + JSON.stringify(body);
    } catch (err) {
      ctx.body = err;
    }
  }
};
