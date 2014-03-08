eso.ReviewView = Backbone.View.extend({

    template: JST['src/templates/review.html'],

    tagName: 'div',
    class: 'eso-review',

    initialize: function(options) {
        // Get some options params
        if (options && options.root) this.root = options.root;
        if (options && options.parentView) this.parentView = options.parentView;
    },

    render: function() {
        // Compile the template with all suitable params
        this.$el.html(this.template({
            root: this.root,
            model: this.root.reviews.models[ Math.floor(Math.random()*this.root.reviews.length) ]
        }));

        this.$el.hide().delay(800).fadeIn(800).delay(6000).fadeOut(800, (function() {
            this.parentView.updateReview();
        }).bind(this));
        // Return the view
        return this;
    }
});