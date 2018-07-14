module.exports = (options, app) => {
    return async function middlewareOne(ctx, next) {
        let msg = options.msg; // extra message
        console.log("==request one==");
        await next();
        console.log("==response one==");
    }
};