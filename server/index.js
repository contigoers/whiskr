const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const randomPuppy = require('random-puppy');
const db = require('../database/index');

const app = new Koa();

app
  .use(serve(`${__dirname}/../react-client/dist`))
  .use(bodyParser())
  .use(router.routes());

router.get('/picture', async (ctx) => {
  // ctx.router available
  await randomPuppy()
    .then((url) => {
      ctx.body = url;
    });
});

router.post('/createDog', async (ctx) => {
  const dog = ctx.request.body;
  try {
    await db.createDog(dog);
    ctx.status = 201;
    ctx.body = {
      status: 'success',
    };
  } catch (err) {
    ctx.status = 400;
    ctx.body = {
      status: 'error',
      message: err.message || 'Sorry, an error has occurred.',
    };
  }
});

app
  .use(router.routes())
  .use(router.allowedMethods());


app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}!`);
});
