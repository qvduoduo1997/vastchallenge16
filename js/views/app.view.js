/**
 * Created by aji on 15/7/13.
 */
define([
    'require',
    'marionette',
    'underscore',
    'jquery',
    'backbone',
    'datacenter',
    'config',
    'views/flower.view',
    'views/graph.view',
    'text!templates/app.tpl'
], function(require, Mn, _, $, Backbone,Datacenter,Config,FlowerView,GraphView,
            Tpl) {
    'use strict';

    return Mn.LayoutView.extend({

        tagName: 'div',

        template: _.template(Tpl),

        attributes:{
            'style' : 'width: 100%; height:100%;'
        },
        regions:{
            'flower': '#left',
            'graph':'#right-bottom',
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
});
