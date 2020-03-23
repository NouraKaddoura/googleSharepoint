const koa = require('koa');
const koaStatic = require('koa-static');
const koaRouter = require('koa-router');
const axios = require('axios');
const XMLtoJSON = require('xml2js');

const app = new koa();
const router = new koaRouter();
router.get('/__api', async (ctx, next) => {
  const url = 'https://www.mattosfilho.com.br/_api/lists';
  ctx.body = await axios.get(url, { crossDomain: true })
    .then(function (response) {
      console.log(response)
      return XMLtoJSON.parseString(response.data);

    });
});
app.use(router.routes());
app.use(koaStatic(__dirname + '/build'))
app.listen(3000);
console.log("app is listening on port 3000")



//export default getLists;
