(function (contactController) {

    var data = require("../data/index")

    contactController.init = function (app) {
        app.post("/api/contact/:ContactName", function (req, res) {

            var contactName = req.params.ContactName;

            console.log(contactName);

            console.log(req.body.email);

            //var sqlite3 = require('sqlite3').verbose();
            //var db = new sqlite3.Database('./db/wtDb.db3', sqlite3.OPEN_READWRITE, function (err) {

            //    if (err) {
            //        console.error(err.message);
            //    }
            //    else {
            //        console.log('Connected to the database.');
            //    }
            //});

            //// Select All Data
            //db.serialize(function () {
            //    db.all("SELECT * from Contact", function (err, rows) {
            //        if (err) {
            //            console.log(err);
            //            res.send(err);
            //        }
            //        else {
            //            console.log('Contacts data read');
            //            res.send(rows);
            //        }
            //    });
            //});


            //db.close();
            //console.log('Disconnected from database.');

        });
    };

})(module.exports);
