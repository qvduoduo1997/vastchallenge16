define([
    'require',
    'marionette',
    'backbone',
    'underscore',
    'jquery',
    'bootstrap',
    'views/test.view',
    "views/test.layoutview",
    "models/test.model",
    "controls/router"
], function (require, Mn, Backbone, _, $, Bootstrap,TestView,
    TestLayoutView,TestModel, Router) {
    'use strict';

    var RootView = Mn.LayoutView.extend({
        el: 'body',
        regions: {
            'app': '#root-app'
        }
    });

    var App = Mn.Application.extend({

        onStart: function() {

            // console.log(router);
            var myInformation = new TestModel.Model({
                firstName: "Tangzhi",
                lastName: "Ye",
                phoneNumber: "555-0184"
            });
            var myInformation2 = new TestModel.Model({
                firstName: "Tangzhi2",
                lastName: "Ye2",
                phoneNumber: "555-0184"
            });

            var testCollection = new TestModel.Collection();
            testCollection.push(myInformation);
            testCollection.push(myInformation2);
            console.log(testCollection);
            //
            var self = this;
            // console.log('hello')
            var testView = new TestView.CollectionView({collection:testCollection});
            self.testLayoutview.test.show(testView);
            // testView.render();
            // if (Backbone.history) {
            //     Backbone.history.start({
            //         root: '/',
            //         pushState: true
            //     });
            // }
        },

        onBeforeStart: function () { // 一些设置工作

            var self = this;
            self.testLayoutview = new TestLayoutView();
            var router = new Router.Router();
            if(Backbone.history) {

              Backbone.history.start();
              console.log(Backbone.history.fragment);
              Backbone.history.navigate("contacts",{trigger: true});
            }
            // console.log(self.testLayoutview);
            // $(document).on('click', 'a[href]:not([data-bypass])', function (evt) {

            //     // Get the absolute anchor href.
            //     var href = { prop: $(this).prop("href"), attr: $(this).attr("href") };
            //     // Get the absolute root.
            //     var root = location.protocol + "//" + location.host + self.root;

            //     // Ensure the root is part of the anchor href, meaning it's relative.
            //     if (href.prop.slice(0, root.length) === root) {
            //         // Stop the default event to ensure the link will not cause a page
            //         // refresh.
            //         evt.preventDefault();

            //         // `Backbone.history.navigate` is sufficient for all Routers and will
            //         // trigger the correct events. The Router's internal `navigate` method
            //         // calls this anyways.  The fragment is sliced from the root.
            //         Backbone.history.navigate(href.attr, {trigger: true});
            //     }

            // });

        }
    });
    return App;
});
