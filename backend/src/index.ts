import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3006;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/message', (_req, res) => {
  res.json({ message: 'Hola desde el backend 👋' });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Backend escuchando en http://localhost:${port}`);
});
