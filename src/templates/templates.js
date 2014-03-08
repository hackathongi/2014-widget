this["JST"] = this["JST"] || {};

this["JST"]["src/templates/average.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>Valoració dels nostres usuaris</h1>\r\n<h2>Mitjana: ' +
((__t = ( averageValue )) == null ? '' : __t) +
'</h2>\r\n        <div class="review-image" data-value="' +
((__t = ( averageValue )) == null ? '' : __t) +
'"></div>\r\n<div id="review-amount">\r\n    <a href="#">de <span class="amount-value">' +
((__t = ( reviewAmount )) == null ? '' : __t) +
'</span> opinions [+]</a>\r\n</div>';

}
return __p
};

this["JST"]["src/templates/main.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="eso-widget" class="">\r\n\r\n    <div id="eso-average"></div>\r\n\r\n    <header id="eso-header">Titol</header>\r\n\r\n    <main id="eso-main">Contingut</main>\r\n\r\n    <footer id="eso-footer">Peu</footer>\r\n\r\n</div>';

}
return __p
};