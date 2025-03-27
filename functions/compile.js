exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: 'Method Not Allowed' }),
      };
    }
  
    const { code } = JSON.parse(event.body);
  
    if (!code) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'No code provided' }),
      };
    }
  
    const compiledCode = `Compiled Luau code: ${code}`;
    return {
      statusCode: 200,
      body: JSON.stringify({ compiledCode }),
    };
  };
  