const express = require("express");
const app = express();
const port = 3000;
const usersRouter = require("./routes/users");
const postsRouter = require("./routes/posts");
const commentsRouter = require('./routes/comments');

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');        //Permet d'acceder à l'API depuis n'importe quelle origine
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); // permet d'ajouter les headers aux requetes envoyée vers notre API
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');  // Permet d'envoyer des requetes avec les methodes GET POST PUT DELETE PATCH OPTIONS
  next();
});
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
app.use("api/signup",  usersRouter);
app.use("api/login",  usersRouter);
app.use("api/posts",  postsRouter);
app.use("api/comments",commentsRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});