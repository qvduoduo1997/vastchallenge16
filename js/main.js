require.config({
    shim: {
         'bootstrap': ['jquery'],
         'backbone': {
            deps: ['jquery','underscore']
        },
     },
    paths: {
        // libs loader
        'text': '../bower_components/text/text',
        'jquery': ['../bower_components/jquery/dist/jquery.min'],
        'underscore': ['../bower_components/underscore/underscore-min'],
        'bootstrap': ['../bower_components/bootstrap/dist/js/bootstrap.min'],
        'backbone': ['../bower_components/backbone/backbone-min'],
        'marionette': ['../bower_components/backbone.marionette/lib/backbone.marionette.min'],
        'backbone.relational': ['../bower_components/backbone-relational/backbone-relational'],
        'd3': ['../bower_components/d3/d3.min'],

        'backbone.routefilter': '../bower_components/backbone.routefilter/dist/backbone.routefilter.min',
        // templates path
        'templates': '../templates',

        'datacenter': 'models/datacenter.model',
        'config': 'models/config.model',
        'variables': 'models/variables.model'
    }
});

require(['app'], function (App) {
    'use strict';
    var app = new App();
    app.start();
});

// require(['jquery', 'underscore', 'd3'], function ($, _, d3) {
//     'use strict';
//     require(['backbone', 'bootstrap'], function (Backbone, Bootstrap) {
//         require(['app'], function (App) { // require.js shim不能与cdn同用,因此3层require,非amd module需要如此
//             var app = new App();
//             app.start();
//         });
//     });
// });
