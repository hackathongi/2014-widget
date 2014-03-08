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
__p += '<div class="average-container">\r\n    <div class="review-image" data-value="' +
((__t = ( averageValue )) == null ? '' : __t) +
'">\r\n        <span class="icon icon-face-' +
((__t = ( averageValue )) == null ? '' : __t) +
'"></span>\r\n    </div>\r\n    <div class="average-details">\r\n        <h6 class="intro-text">' +
((__t = ( eso.p.t('what_our_customers_think_about_us') )) == null ? '' : __t) +
'</h6>\r\n        <div class="review-amount">\r\n            <a href="#"><span class="amount-value">' +
((__t = ( eso.p.t('N_review', reviewAmount ) )) == null ? '' : __t) +
'</span></a>\r\n        </div>\r\n    </div>\r\n</div>';

}
return __p
};

this["JST"]["src/templates/main.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="eso-widget" class="">\r\n\r\n    <div id="eso-average"></div>\r\n\r\n    <div id="eso-reviews"></div>\r\n    <div id="eso-reviews-2"></div>\r\n\r\n    <div id="eso-adv"></div>\r\n\r\n</div>';

}
return __p
};

this["JST"]["src/templates/review.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="review-header">\r\n    <div class="review-image" data-value="' +
((__t = ( model.value() )) == null ? '' : __t) +
'">\r\n        <span class="icon icon-face-' +
((__t = ( model.value() )) == null ? '' : __t) +
'"></span>\r\n    </div>\r\n    <div class="author-details">\r\n        <span class="author-name">' +
((__t = ( _.str.capitalize(model.name()) )) == null ? '' : __t) +
'</span> from  <span class="author-city">' +
((__t = ( _.str.capitalize(model.city()) )) == null ? '' : __t) +
'</span> <span class="review-date">' +
((__t = ( model.date() )) == null ? '' : __t) +
'</span>\r\n    </div>\r\n</div>\r\n<div class="review-description">' +
((__t = ( model.comment() )) == null ? '' : __t) +
'</div>\r\n';

}
return __p
};