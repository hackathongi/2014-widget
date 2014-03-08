// Declare the namespace
var eso = eso || {};

// Get the URL parameters functions
function getUrlParameters() {
    var prmstr = window.location.search.substr(1);
    return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}
function transformToAssocArray( prmstr ) {
    var params = {};
    var prmarr = prmstr.split("&");
    for ( var i = 0; i < prmarr.length; i++) {
        var tmparr = prmarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
    return params;
}
// Parse the URL parameters to a proper JSON Object
eso.urlParams = getUrlParameters();
if ( _.size(eso.urlParams) > 0 ) eso.urlParams = JSON.parse(decodeURIComponent(eso.urlParams.data));



// Init the eso Widget

// Setup the initial options
var initialOptions = {};
initialOptions.locale = {};
// Get some parameters from URL if they're present
if ( _.size(eso.urlParams) > 0 ) {
    if ( eso.urlParams.locale.language && (eso.urlParams.locale.language != null) ) initialOptions.locale.language = eso.urlParams.locale.language;
}

// Put other config params
initialOptions.development = {
    customerId: null,
    apiUrl: null,
    apiKey: 'theKey'
};
initialOptions.locale = {
    language: 'ca'
};


// Start the app
eso.esoView = new eso.EsoView({root:eso, initialOptions:initialOptions});