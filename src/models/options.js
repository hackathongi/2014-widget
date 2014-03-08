
var eso = eso || {};

// Options Model (Deep Model)
// ----------------------------

eso.Options = Backbone.DeepModel.extend({

    // Default attributes ensure that model created has required empty keys.
    defaults: {
        development: {
            customerId: null,
            apiUrl: null,
            apiKey: null
        },
        locale: {
            language: 'en'
        }
    },
    fetched: false,

    url: 'widget/options',

    // -------------------
    /* INITIALIZE FUNCTION */
    // -------------------

    initialize: function(attributes, options) {
        // Get some options params
        if (options && options.root) this.root = options.root;
    },

    // -------------------
    /* SERVER FUNCTIONS */
    // -------------------

    load: function (completed) {
        // Prepare the data needed to send
        var parseData = {
            //options: this.root.initialOptions || null
        };
        // Add the identification information to parse data
        $.extend(parseData, this.root.id);
        // Fetch data from server
        this.fetch({
            data: parseData,
            processData: true,
            //reset: true, // Important, to fire the reset event
            success: this.loadSuccess(function(){
                // Callback load when it's done & populated
                completed();
            }),
            error: this.loadError
        });
    },
    loadSuccess: function (completed) {
        // Attach the reset event to the collection
        this.on('change', function() {
            this.fetched = true;
            completed();
        });
    },
    loadError: function (collection, response, options) {
        if (response.status == 500) {console.log("Error loading availability, review your ID params parsed with request urls");}
        if (response.status == 404) {console.log("Error loading availability, review the model and collection urls");}
    },

    // -------------------
    /* QUICK ATTRIBUTE GETTERS */
    // -------------------

    /* language()
     * returns the rate language */
    language: function() {
        return this.get('locale.language');
    }

    // -------------------
    /* GETTER FUNCTIONS */
    // -------------------


});