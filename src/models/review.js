
var eso = eso || {};

// Review Model
// ----------

eso.Review = Backbone.DeepModel.extend({

    // Default attributes for review.
    defaults: {
        id: null,
        author: {
            name: null,
            city: null,
            country: null
        },
        rate: {
            value: null, // Expect a value from 0 to 5
            comment: null,
            language: null,
            date: null
        }
    },

    /* INITIALIZE FUNCTION */

    initialize: function(){
    },

    // -------------------
    /* QUICK ATTRIBUTE GETTERS */
    // -------------------

    /* name()
     * returns the rate author's name */
    name: function() {
        return this.get('author.name');
    },

    /* value()
     * returns the rate's value */
    value: function() {
        return this.get('rate.value');
    },

    /* comment()
     * returns the rate's comment */
    comment: function() {
        return this.get('rate.comment');
    },

    /* date()
     * returns the rate's date */
    date: function() {
        return this.get('rate.date');
    }

});