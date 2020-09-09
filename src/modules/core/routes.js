import infoRouter from '../info/Routes'

export default app => {
  app.use('/info', infoRouter);
}