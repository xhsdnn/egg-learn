module.exports = app => {
    const { router, controller } = app;

    // RESTful风格
    router.resources("main", "/api/main", controller.main);
}