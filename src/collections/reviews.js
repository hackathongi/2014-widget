
var eso = eso || {};

// Reviews Collection
// ---------------

eso.Reviews = Backbone.Collection.extend({

    // Reference to this collection's model.
    model: eso.Review,
    url: '../rest/reviews',
    fetched: false,
    root: null,

    // -------------------
    /* INITIALIZE FUNCTION */
    // -------------------

    initialize: function(models, options){
        // Get some options params
        if (options && options.root) this.root = options.root;
        //this.url = this.root.options.getRestUrl() + 'hotels';
    },

    // -------------------
    /* MODEL FUNCTIONS */
    // -------------------

    /* getModelById(reviewId)
     * returns the model by reviewId if there are a result available */
    getModelById: function(reviewId) {
        return this.findWhere({'id':reviewId}) || false;
    },

    /* getModelByLanguage(languageCode)
     * returns the model by languageCode if there are a result available */
    getModelByLanguage: function(languageCode) {
        //return this.find({'id':languageCode}) || false;
    },

    // -------------------
    /* SERVER FUNCTIONS */
    // -------------------

    load: function(completed) {
        // Prepare the data needed to send
        var parseData = {};
        // Add the identification information to parse data
        $.extend(parseData, this.root.id);
        // Fetch data from server
        this.fetch({
            data: parseData,
            processData: true,
            reset: true, // Important, to fire the reset event
            success: this.loadSuccess(function(){
                // Callback load when it's done & populated
                completed();
            }),
            error: this.loadError
        });
    },
    loadSuccess: function (completed) {
        // Attach the reset event to the collection
        this.on('reset', function() {
            // Wait for being populated
            // Mark fetched as true
            this.fetched = true;
            // Callback
            completed();
        });
    },
    loadError: function (collection, response, options) {
        if (response.status == 500) {console.log("Error loading availability, review your ID params parsed with request urls");}
        if (response.status == 404) {console.log("Error loading availability, review the model and collection urls");}
        alert('Error');
    }

});


