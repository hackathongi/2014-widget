eso.AverageView = Backbone.View.extend({

    template: JST['src/templates/average.html'],

    tagName: 'div',
    id: 'eso-header',

    initialize: function(options) {
        // Get some options params
        if (options && options.root) this.root = options.root;
    },

    render: function() {
        // Compile the template with all suitable params
        this.$el.html(this.template({
            root:this.root,
            averageValue: '3',
            reviewAmount: 600
        }));
        // Return the view
        return this;
    }
});