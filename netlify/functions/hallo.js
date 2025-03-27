const { createResponse } = require('@netlify/functions');

exports.handler = async (event, context) => {
  const responseMessage = {
    message: "¡Hola desde la función serverless de Netlify!",
  };

  return createResponse(200, responseMessage);
};