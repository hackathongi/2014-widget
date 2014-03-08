/**
 * eso Widget Main View
 * Author: Daniel Garcia
 * Date: 08/03/11
 */

// Prevent early calls on the app namespace
var eso = eso || {};

// -------------------------------------------------------------
// esoView:
// the global main app view
// -------------------------------------------------------------

eso.EsoView = Backbone.View.extend({

    el: '#eso-widget',
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

        // Create the fake collection
        this.root.reviews = new eso.Reviews(
            [
                {
                    "id": "1",
                    "author": {
                        "name": "pere",
                        "city": "girona",
                        "country": "catalunya"
                    },
                    "rate": {
                        "value": "5", // Expect a value from 0 to 5
                        "comment": "M'han atès moolt bé, hi tornaria a comprar.",
                        "language": "ca",
                        "date": "1394274769"
                    }
                },
                {
                    "id": "2",
                    "author": {
                        "name": "joan",
                        "city": "salt",
                        "country": "catalunya"
                    },
                    "rate": {
                        "value": "2", // Expect a value from 0 to 5
                        "comment": "Fatal!! Aquests del Hackathon estan grillats. No hi aneu!!",
                        "language": "ca",
                        "date": "1391877169"
                    }
                },
                {
                    "id": "3",
                    "author": {
                        "name": "joel",
                        "city": "sevilla",
                        "country": "españa"
                    },
                    "rate": {
                        "value": "4", // Expect a value from 0 to 5
                        "comment": "rapida",
                        "language": "es",
                        "date": "1392978769"
                    }
                },
                {
                    "id": "4",
                    "author": {
                        "name": "james",
                        "city": "london",
                        "country": "england"
                    },
                    "rate": {
                        "value": "5", // Expect a value from 0 to 5
                        "comment": "greatful",
                        "language": "en",
                        "date": "1390858369"
                    }
                },
                {
                    "id": "5",
                    "author": {
                        "name": "joan",
                        "city": "celra",
                        "country": "catalunya"
                    },
                    "rate": {
                        "value": "0", // Expect a value from 0 to 5
                        "comment": "lenta",
                        "language": "ca",
                        "date": "1390901569"
                    }
                },
                {
                    "id": "6",
                    "author": {
                        "name": "john",
                        "city": "manchester",
                        "country": "london"
                    },
                    "rate": {
                        "value": "3", // Expect a value from 0 to 5
                        "comment": "good",
                        "language": "en",
                        "date": "1392305569"
                    }
                }
            ]
            ,{root:this.root}
        );

        this.render();

    },

    render: function() {
        // Create the average view and append to DOM
        this.root.averageView = new eso.AverageView({root:this.root});
        this.$el.find('#eso-average').replaceWith(this.root.averageView.render().el);
        // Create the review view and append to DOM
        this.root.reviewView = new eso.ReviewView({
            root:this.root,
            parentView: this
        });
        this.$el.find('#eso-reviews').append(this.root.reviewView.render().el);
        // Create the advertising view if we've a freemium account
        if (true) {
            // Create the review view and append to DOM
            this.root.advView = new eso.AdvView({root:this.root});
            this.$el.find('#eso-adv').html(this.root.advView.render().el);
        }

    },

    updateReview: function() {
        // Remove the actual review view
        this.root.reviewView.remove();
        // Create the review view and append to DOM
        this.root.reviewView = new eso.ReviewView({
            root:this.root,
            parentView: this
        });
        this.$el.find('#eso-reviews').append(this.root.reviewView.render().el);
    }
});