<!DOCTYPE html>

<!--[if lt IE 7 ]> <html class="ie6"> <![endif]-->
<!--[if IE 7 ]>    <html class="ie7"> <![endif]-->
<!--[if IE 8 ]>    <html class="ie8"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!-->
<html class="">
<!--<![endif]-->

<head>
    <meta charset="utf-8" />
    <title>eso Widget</title>
    <meta id="projectViewport" name="viewport" content="width=device-width, initial-scale=1.0">

    <!--[if lt IE 9 ]>
<script type="text/javascript" src="assets/js/old-explorer/modernizr.js"></script>
<script type="text/javascript" src="assets/js/old-explorer/es5-shim.js"></script>
<script type="text/javascript" src="assets/js/old-explorer/es5-sham.js"></script>
<script type="text/javascript" src="assets/js/old-explorer/respond.js"></script>
    <![endif]-->

    <link type="text/css" rel="stylesheet" href="assets/css/styles.css" />

</head>

<body>

    <div id="eso-widget" class="">

        <div id="eso-average"></div>

        <div id="eso-reviews"></div>

        <div id="eso-adv"></div>

    </div>

    <script type="text/javascript" src="assets/js/jquery.js"></script>
    <script type="text/javascript" src="assets/js/underscore.js"></script>
    <script type="text/javascript" src="assets/js/backbone.js"></script>
    <script type="text/javascript" src="assets/js/underscore.string.js"></script>
    <script type="text/javascript" src="assets/js/deep-model.js"></script>
    <script type="text/javascript" src="assets/js/polyglot.js"></script>
    <script type="text/javascript" src="assets/js/moment-with-langs.js"></script>

    <script type="text/javascript" src="src/templates/templates.js"></script>

    <script type="text/javascript" src="src/models/options.js"></script>
    <script type="text/javascript" src="src/models/review.js"></script>
    <script type="text/javascript" src="src/models/translations.js"></script>

    <script type="text/javascript" src="src/collections/reviews.js"></script>

    <script type="text/javascript" src="src/views/adv.js"></script>
    <script type="text/javascript" src="src/views/average.js"></script>
    <script type="text/javascript" src="src/views/eso.js"></script>
    <script type="text/javascript" src="src/views/review.js"></script>



    <script type="text/javascript">
        // Declare the namespace
        var eso = eso || {};

         // Get the URL parameters functions
        function getUrlParameters() {
            var prmstr = window.location.search.substr(1);
            return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
        }

        function transformToAssocArray(prmstr) {
            var params = {};
            var prmarr = prmstr.split("&");
            for (var i = 0; i < prmarr.length; i++) {
                var tmparr = prmarr[i].split("=");
                params[tmparr[0]] = tmparr[1];
            }
            return params;
        }
         // Parse the URL parameters to a proper JSON Object
        eso.urlParams = getUrlParameters();
         //if ( _.size(eso.urlParams) > 0 ) eso.urlParams = decodeURIComponent(eso.urlParams.data);



         // Init the eso Widget

         // Setup the initial options
        var initialOptions = {};
        initialOptions.locale = {};
        initialOptions.development = {};
         // Get some parameters from URL if they're present
        if (_.size(eso.urlParams) > 0) {
            if (eso.urlParams.language && (eso.urlParams.language != null)) initialOptions.locale.language = eso.urlParams.language;
            if (eso.urlParams.customerId && (eso.urlParams.customerId != null)) initialOptions.development.customerId = eso.urlParams.customerId;
            if (eso.urlParams.apiKey && (eso.urlParams.apiKey != null)) initialOptions.development.apiKey = eso.urlParams.apiKey;
            if (eso.urlParams.apiUrl && (eso.urlParams.apiUrl != null)) initialOptions.development.apiUrl = eso.urlParams.apiUrl;
        }


         // Start the app
        eso.esoView = new eso.EsoView({
            root: eso,
            initialOptions: initialOptions
        });
    </script>

</body>

</html>