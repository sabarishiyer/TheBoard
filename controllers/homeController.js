(function (homeController) {
    var data = require("../data/index")


    homeController.init = function (app) {

        app.get("/", function (req, res) {
            
            data.getNoteCategories(function (err, results) {
                res.render("index", { title: "Express + Vash",error:err,categories:results });
                res.send(results);
            })

            
        });
    };

})(module.exports);