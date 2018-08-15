(function (testController) {

    testController.init = function (app) {

        app.get("/test", function (req, res) {
            res.send('<b>My</b> first express http server-test controller');
        });
    };

})(module.exports);