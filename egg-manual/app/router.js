module.exports = app => {
    const { router, controller } = app;
    // 根路由，RESTful风格url
    router.resources("main", "/api/main", controller.main);
}