/**
 * HKG Widget Main View
 * Author: Daniel Garcia
 * Date: 08/03/11
 */

// Prevent early calls on the app namespace
var hkg = hkg || {};

// -------------------------------------------------------------
// HkgView:
// the global main app view
// -------------------------------------------------------------

hkg.HkgView = Backbone.View.extend({

    el: '#hkg-widget',
    root: null,

    events: {
        //'click #id': 'clearCompleted'
    },

    initialize: function(options) {

        // Get some options params
        if (options && options.root) this.root = options.root;
        if (options && options.initialOptions) this.initialOptions = options.initialOptions;

        // Set the first Identification object
        this.root.id = {
            secretKey: this.initialOptions.apiKey || null
        };

        this.render();

    },

    render: function() {
        // Create the navigation view and append to DOM
        //this.root.navigationView = new rho.NavigationView({root:this.root});
        //his.$el.find('#rho-navigation').append(this.root.navigationView.el);

    }
});