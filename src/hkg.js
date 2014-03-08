// Declare the namespace
var hkg = hkg || {};

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
hkg.urlParams = getUrlParameters();
if ( _.size(hkg.urlParams) > 0 ) hkg.urlParams = JSON.parse(decodeURIComponent(hkg.urlParams.data));



// Init the HKG Widget

// Setup the initial options
var initialOptions = {};
initialOptions.booking = {};
// Get some parameters from URL if they're present
if ( _.size(hkg.urlParams) > 0 ) {
    if ( hkg.urlParams.locale.language && (hkg.urlParams.locale.language != null) ) initialOptions.locale.language = hkg.urlParams.locale.language;
}

// Put other config params
initialOptions.development = {
    rootUrl: '',
    restUrl: ''
};
initialOptions.apiKey = 'theKey';
initialOptions.locale = {
    language: 'es'
};


// Start the app
hkg.hkgView = new hkg.HkgView({root:hkg, initialOptions:initialOptions});