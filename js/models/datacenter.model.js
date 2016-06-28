/**
 * Created by tangzhi.ye at 2015/11/24
 * model for whole data mamagement
 */

 define([
    'require',
    'marionette',
    'underscore',
    'jquery',
    'backbone',
    'config',
    'variables'
 ], function(require, Mn, _, $, Backbone,Config,Variables){
    'use strict';

    return window.Datacenter = new (Backbone.Model.extend({
        defaults: function(){
            return {
            };
        },

        initialize: function(url){
            var self = this;

        },
        start: function(){
        },


    }))();
 });
