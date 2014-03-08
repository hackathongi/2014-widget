/**
 * Created by Dani on 8/03/14.
 */

// Declare the namespace
var eshopinion = eso = eshopinion || {};

// Declare some default options
eso.options = {
    divId: 'eshopinion',
    customerId: 'farmaInstant',
    apiKey: null,
    apiUrl: null,
    url: 'http://widget.eshopinion.com',
    language: 'en'
};

eso.parseParams = function (obj) {
    var parts = [];
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }
    }
    return "?" + parts.join('&');
};


// Declare the init options
eso.init = function(options) {

    if (options) {
        if (options.divId && (options.divId != null) ) this.options.divId = options.divId;
        if (options.language && (options.language != null) ) this.options.language = options.language;
        if (options.customerId && (options.customerId != null) ) this.options.customerId = options.customerId;
        if (options.apiKey && (options.apiKey != null) ) this.options.apiKey = options.apiKey;
        if (options.apiUrl && (options.apiUrl != null) ) this.options.apiUrl = options.apiUrl;
        if (options.url && (options.url != null) ) this.options.url = options.url;
    }

    this.el = document.getElementById(this.options.divId);

    if (this.el != null) {
        this.el.innerHTML += '<iframe id="eshopinionIframe" width="100%" style="min-height: 400px;" frameborder="0" allowtransparency="true" src="' + this.options.url + this.parseParams(this.options) + '"></iframe>';
    }

}
