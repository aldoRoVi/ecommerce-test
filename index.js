const express = require("express");
const path = require("path");
const productsRouter = require('./routes/views/products');
const productsApiRouter = require('./routes/api/products');
const { logErrors,clientErrorHandler,errorHandler} = require('./utils/middlewares/errorsHandlers');
const app = express();
app.use(express.json())

app.use('/static',express.static(path.join(__dirname,'public')));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use("/products", productsRouter);
app.use("/api/products",productsApiRouter)



app.get('/',function(req,res){
  res.redirect('/products')
});

//error handlerss
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

const server = app.listen(8000, function() {
  console.log(`Listening http://localhost:${server.address().port}`);
});
