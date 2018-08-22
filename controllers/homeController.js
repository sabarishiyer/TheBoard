(function (homeController) {
    var data = require("../data/index")


    homeController.init = function (app) {

        app.get("/", function (req, res) {
            
            data.getNoteCategories(function (err, results) {
                res.render("index", { title: "Express + Vash",error:err,categories:results });
                res.send(results);
            })    
        });


        app.post("/api/contact/:contactName", function (req, res) {
            res.set("Content-Type", "application/json");
            var contactName = req.params.contactName;
            console.log(contactName);
            console.log(req.body.email);
            res.send({"success":"sent from server"});
        })

    };

})(module.exports);