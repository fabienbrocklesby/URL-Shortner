import randomstring from 'randomstring';
import * as urlModel from './url.model.js';
import validator from '../../validators/url.validator.js';

export const shortenUrl = async ({ originalUrl }) => {
  await validator({ originalUrl }, ['originalUrl']);
  const shortenedUrl = randomstring.generate(7);
  return urlModel.shortenUrl({ shortenedUrl, originalUrl });
};

export const redirectUrl = async (url) => urlModel.redirectUrl(url);
