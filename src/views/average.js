eso.AverageView = Backbone.View.extend({

    template: JST['src/templates/average.html'],

    tagName: 'div',
    id: 'eso-average',

    initialize: function(options) {
        // Get some options params
        if (options && options.root) this.root = options.root;
    },

    render: function() {
        // Compile the template with all suitable params
        this.$el.html(this.template({
            root:this.root,
            averageValue: this.root.reviews.getAverageValue(),
            reviewAmount: this.root.reviews.length
        }));
        // Return the view
        return this;
    }
});