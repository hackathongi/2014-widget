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
    <title>HKG Widget</title>
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

    <div id="hkg-app" class="">

        <header id="hkg-header">Titol</header>

        <main id="hkg-main">Contingut</main>

        <footer id="hkg-footer">Peu</footer>

    </div>

    <script type="text/javascript" src="assets/js/underscore.js"></script>
    <script type="text/javascript" src="assets/js/backbone.js"></script>
    <script type="text/javascript" src="assets/js/underscore.string.js"></script>
    <script type="text/javascript" src="assets/js/deep-model.js"></script>
    <script type="text/javascript" src="assets/js/polyglot.js"></script>

    <script type="text/javascript" src="src/templates/templates.js"></script>

    <script type="text/javascript" src="src/models/review.js"></script>

    <script type="text/javascript" src="src/collections/reviews.js"></script>

    <script type="text/javascript" src="src/views/hkg.js"></script>



    <script type="text/javascript">
        // Declare the namespace
        var hkg = hkg || {};

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
        hkg.urlParams = getUrlParameters();
        if (_.size(hkg.urlParams) > 0) hkg.urlParams = JSON.parse(decodeURIComponent(hkg.urlParams.data));



         // Init the HKG Widget

         // Setup the initial options
        var initialOptions = {};
        initialOptions.booking = {};
         // Get some parameters from URL if they're present
        if (_.size(hkg.urlParams) > 0) {
            if (hkg.urlParams.locale.language && (hkg.urlParams.locale.language != null)) initialOptions.locale.language = hkg.urlParams.locale.language;
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
        hkg.hkgView = new hkg.HkgView({
            root: hkg,
            initialOptions: initialOptions
        });
    </script>

</body>

</html>