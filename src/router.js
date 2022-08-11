import * as urlController from './modules/posts/url.controller.js.js';
import * as errorController from './helpers/error.controller.js';

export default (route) => {
  // Post Operations
  route.post('/shorten', urlController.shortenUrl);
  route.get('/:url', urlController.redirectUrl);

  // Error Routes
  route.use(errorController.notFound);
  route.use(errorController.errorHandler);
};
