module.exports = app => {
    const { router, controller } = app;
    router.get("/", controller.main.index);
    router.get('/news', controller.news.list);
}