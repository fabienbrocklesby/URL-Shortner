import Joi from 'joi';

export default (data, required = []) => Joi.object().keys({
  originalUrl: Joi.string().uri().required(),
})
  .fork(required, (field) => field.required())
  .validateAsync(data);
