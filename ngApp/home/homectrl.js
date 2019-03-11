define(function (require) {
    var app = require('app');

    require("./homeservice");



    app.controller('Homectrl', ["homeservice",function (homeservice) {
        // shortcut to get angular injected service.
        this.a = homeservice.m;
    }]);

});