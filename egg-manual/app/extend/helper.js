exports.tranformStr = data => String(data) + "daiqiang";

module.exports = {
    // 请求成功
    success(ctx, result = null, message = "请求成功", status = 200) {
        ctx.body = {
            code: 0,
            message: message,
            data: result
        };
        ctx.status = status;
    },

    // 请求失败
    error(ctx, code, message) {
        ctx.body = {
            code: code,
            message: message
        };
        ctx.status = code;
    }
}