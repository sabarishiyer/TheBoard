(function (controller) {

    var homeController = require("./homeController");
    var testController = require("./testController");

    controller.init = function (app) {
        homeController.init(app);
        testController.init(app);
    };

})(module.exports);

