this["JST"] = this["JST"] || {};

this["JST"]["src/templates/adv.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a class="eso-adv" href="#">El anuncio</a>';

}
return __p
};

this["JST"]["src/templates/average.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h6 class="intro-text">Els nostres usuaris diuen:</h6>\r\n<div class="average-container">\r\n    <div class="review-image" data-value="' +
((__t = ( averageValue )) == null ? '' : __t) +
'">\r\n        <span class="icon icon-face-' +
((__t = ( averageValue )) == null ? '' : __t) +
'"></span>\r\n    </div>\r\n    <div class="review-amount">\r\n        <a href="#">de <span class="amount-value">' +
((__t = ( reviewAmount )) == null ? '' : __t) +
'</span> opinions</a>\r\n    </div>\r\n</div>';

}
return __p
};

this["JST"]["src/templates/main.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="eso-widget" class="">\r\n\r\n    <div id="eso-average"></div>\r\n\r\n    <div id="eso-reviews"></div>\r\n\r\n    <div id="eso-adv"></div>\r\n\r\n</div>';

}
return __p
};

this["JST"]["src/templates/review.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="review-details">\r\n    <div class="author-city">From:  ' +
((__t = ( _.str.capitalize(model.city()) )) == null ? '' : __t) +
'</div>\r\n    <div class="review-date">' +
((__t = ( model.date() )) == null ? '' : __t) +
'</div>\r\n</div>\r\n<div class="review-container">\r\n    <div class="review-description">\r\n        <span class="author-name">' +
((__t = ( _.str.capitalize(model.name()) )) == null ? '' : __t) +
':</span> ' +
((__t = ( model.comment() )) == null ? '' : __t) +
'\r\n    </div>\r\n    <div class="review-image" data-value="' +
((__t = ( model.value() )) == null ? '' : __t) +
'">\r\n        <span class="icon icon-face-' +
((__t = ( model.value() )) == null ? '' : __t) +
'"></span>\r\n    </div>\r\n</div>\r\n';

}
return __p
};