const Joi = require("joi");

exports.createProductSchema = Joi.object({
  price: Joi.number().required(),
  title: Joi.string().required(),
  detail: Joi.string().required(),
});
