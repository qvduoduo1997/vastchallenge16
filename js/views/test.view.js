define([
    'require',
    'marionette',
    'underscore',
    'jquery',
    'backbone',
    'datacenter',
    'config',
    'text!templates/test.tpl'
], function(require, Mn, _, $, Backbone, Datacenter, Config,Tpl) {
    'use strict';
    var testView = new Object();
    testView.ItemView = Mn.ItemView.extend({
        // el:"#testRegion",
        tagName:"li",
        id: "static-view",
        className: "instruction",
        events: {
            "click p": "onClickInformation"
        },
        // id:"testRegion",
        // tagName: 'div',
        // el:"#testRegion",
        template: _.template(Tpl),

        // attributes:{
        //     'style' : 'width: 100%; height:100%;'
        // },
        // regions:{
        //     'flower': '#left',
        //     'graph':'#right-bottom',
        // },
        onClickInformation: function() {
            alert(this.model.get('phoneNumber'));
        },

        initialize: function (options) {
            var self = this;
            options = options || {};
            $(document).ready(function(){
                console.log('ready!!!');
                Datacenter.start();
            });
        },

        onShow: function(){
            var self = this;
        }
    });

    testView.CollectionView = Mn.CollectionView.extend({
        childView: testView.ItemView,
        tagName: 'ul'
    });

    return testView;
});
