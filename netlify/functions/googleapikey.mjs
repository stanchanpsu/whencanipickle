exports.handler = async function (event, context) {
    // const value = process.env.MY_IMPORTANT_VARIABLE;

    return {
        statusCode: 200,
        body: JSON.stringify({ message: `Hello, world.` }),
    };
};
