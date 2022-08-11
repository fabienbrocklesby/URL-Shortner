import * as urlService from './url.service.js';

export const shortenUrl = async (request, response, next) => {
  try {
    const data = await urlService.shortenUrl(request.body);
    response.json(data);
  } catch (error) {
    next(error);
  }
};

export const redirectUrl = async (request, response, next) => {
  try {
    const data = await urlService.redirectUrl(request.params.url);
    response.redirect(data.original);
  } catch (error) {
    next(error);
  }
};
