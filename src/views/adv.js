eso.AdvView = Backbone.View.extend({

    template: JST['src/templates/adv.html'],

    tagName: 'div',
    id: 'eso-adv',

    initialize: function(options) {
        // Get some options params
        if (options && options.root) this.root = options.root;
    },

    render: function() {
        // Compile the template with all suitable params
        this.$el.html(this.template({
            root:this.root
        }));
        // Return the view
        return this;
    }
});