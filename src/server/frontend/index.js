/* @flow */
import compression from 'compression';
import express from 'express';
import render from './render';

const app = express();

app.use(compression());
app.use('/assets', express.static('build', { maxAge: '200d' }));
app.use('/wakemydyno.txt', express.static('src/browser/wakemydyno.txt'));
app.get('*', render);

export default app;
