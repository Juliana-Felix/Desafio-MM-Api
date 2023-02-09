import { app } from './app';

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is runnig on http://localhost:${port}`);
});