define(function (require) {
    var app = require('app');

    require("./rootservice");



    app.controller('Rootctrl', ["rootservice",function (rootservice) {
        // shortcut to get angular injected service.
        this.a = rootservice.m;
    }]);

});