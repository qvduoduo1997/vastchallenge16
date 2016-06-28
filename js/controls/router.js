/**
 * Created by tangzhi.ye at 2015/11/30
 * router for app
 */
define([
    'require',
    'marionette',
    'underscore',
    'jquery',
    'backbone'
], function(require, Mn, _, $, Backbone) {
    'use strict';
    var router = {};
    router.API = {
        listContacts: function(){
          console.log("route to list contacts");
        }
    }
    router.Router =  Mn.AppRouter.extend({
        appRoutes: {
          "contacts":"listContacts"
        },
        controller: router.API,
        // before: function () {
        //   console.log('before route')
        //     // window.NProgress.start();
        // },
        //
        // after: function () {
        //   console.log('before route')
        //     // window.NProgress.done();
        // }
    });


    return router;
});
