
var eso = eso || {};

// Options Model (Deep Model)
// ----------------------------

eso.Translations = Backbone.DeepModel.extend({

    // Default attributes ensure that model created has required empty keys.
    defaults: {
    },
    fetched: false,
    url: '',

    // -------------------
    /* INITIALIZE FUNCTION */
    // -------------------

    initialize: function(attributes, options) {
        // Get some options params
        if (options && options.root) this.root = options.root;
        this.url = 'assets/localization/languages.json';
    },

    // -------------------
    /* SERVER FUNCTIONS */
    // -------------------

    load: function (completed) {
        // Fetch data from server
        this.fetch({
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
        console.log(response);
        rho.rhoView.uiErrorDisplay();
    },

    // -------------------
    /* PARSING FUNCTIONS */
    // -------------------

    parseTranslations: function() {
        this.root.translationsParsed = this.root.translationsParsed || {};
        // Repeat for each language
        _.each(this.attributes, function(language, languageKey){
            this.root.translationsParsed[languageKey] = {};
            // Repeat for each translation
            _.each(language, function(translation){
                // If the translation doesn't contains context information
                if(!translation.context || translation.context == "" || translation.context == "singular") {
                    // Add to the collection
                    this.root.translationsParsed[languageKey][translation.term] = translation.definition;
                    // If the context information = plural
                } else if(translation.context == "plural") {
                    // Modify the collection key, if there's any definition
                    if(translation.definition && translation.definition!="") {
                        this.root.translationsParsed[languageKey][translation.term] = this.root.translationsParsed[languageKey][translation.term] + ' |||| ' + translation.definition;
                    }
                }
            }, this);
        }, this);
    },

    // -------------------
    /* SETTING FUNCTIONS */
    // -------------------

    setTranslation: function(language) {
        // TODO: Set & Load translation for each language, instead of all together
        if(this.root.translationsParsed[language]) {
            // Initialize the internationalization object, and extend with the proper language
            this.root.polyglot = this.root.p = new Polyglot({locale: language});
            this.root.p.extend(this.root.translationsParsed[language]);
            moment.lang(language);
            //completed();
        } /*else {
         this.initializeTranslations(language, function() {
         this.root.polyglot = this.root.p = new Polyglot({locale: language});
         this.root.p.extend(this.root.translationsParsed[language]);
         completed();
         });
         }*/
    }

});