define([
    'require',
    'marionette',
    'underscore',
    'jquery',
    'backbone',
    'datacenter',
    'config'
], function(require, Mn, _, $, Backbone,Datacenter,Config) {
    'use strict';

    return Mn.LayoutView.extend({
            el:"#rootCantainer",
            regions: {
                test: "#testRegion"
            }
    });
});
