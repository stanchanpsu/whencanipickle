exports.handler = async function (event, context) {
    const apiKey = process.env.GOOGLE_API_KEY;

    return {
        statusCode: 200,
        body: JSON.stringify({ message: apiKey }),
    };
};
