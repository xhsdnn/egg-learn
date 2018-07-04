module.exports = (options, app) => {
    return async function formatParam(ctx, next) {
        ctx.request.method === "GET" ? ctx.query.extra = options.msg : ctx.request.body.extra = options.msg;

        await next();

        // ctx.body.abc="213";
    }
};