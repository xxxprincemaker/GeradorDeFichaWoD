import app from './app.js';

app.listen(process.env.PORT || 3333, () => {
  console.log(`Server is onlinne on localhost:${process.env.PORT}`);
});