const express = require('express');
const morgan = require('morgan');
const path = require('path');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer();
const app = express();

const imageMain = 'http://127.0.0.1:3007';
const experiences = 'http://127.0.0.1:3636';
const bestNearby = 'http://127.0.0.1:3003';
const reviews = 'http://127.0.0.1:3004';
const proxyPort = 3006;

const publicDir = path.resolve(__dirname, '..', 'client', 'public');

app.use(morgan('dev'));
app.use('/:productId', express.static(publicDir));

// ==============================IMAGE MAIN=============================
app.get('/:productId/imageMain/bundle.js', (req, res) => {
  proxy.web(req, res, { target: imageMain });
});
app.get('/:id/api/carousels', (req, res) => {
  proxy.web(req, res, { target: imageMain });
});
app.patch('/:imgId/api/carousels/helpful', (req, res) => {
  proxy.web(req, res, { target: imageMain });
});
app.patch('/:imgId/api/carousels/reported', (req, res) => {
  proxy.web(req, res, { target: imageMain });
});

// =============================EXPERIENCES=============================
app.get('/:productId/exp/bundle.js', (req, res) => {
  proxy.web(req, res, { target: experiences });
});
app.get('/:id/exp/api', (req, res) => {
  proxy.web(req, res, { target: experiences });
});
app.get('/:id/fonts/*', (req, res) => {
  proxy.web(req, res, { target: experiences });
});

// =============================BEST NEARBY=============================
app.get('/:productId/bestNearby/bundle.js', (req, res) => {
  proxy.web(req, res, { target: bestNearby });
});

app.get('/:attractionId/api/nearbyattractions', (req, res) => {
  proxy.web(req, res, { target: bestNearby });
});

// ===============================REVIEWS===============================
app.get('/:productId/reviewsModule/bundle.js', (req, res) => {
  proxy.web(req, res, { target: reviews });
});
app.get('/:productId/api/reviews', (req, res) => {
  proxy.web(req, res, { target: reviews });
});
app.patch('/:productId/api/reviews/:reviewId', (req, res) => {
  proxy.web(req, res, { target: reviews });
});
app.patch('/:productId/api/reviews/:reviewId/:imageId', (req, res) => {
  proxy.web(req, res, { target: reviews });
});

// ===============================LISTEN===============================
app.listen(proxyPort, () => {
  console.log(`proxy good to go port ${proxyPort}`);
});
