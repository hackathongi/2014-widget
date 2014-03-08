# Documentation

Read carefully this documentation before proceed to commit any change or deploy a new version.

Development requirements
========================

You need to have previously installed and properly configured on your development environment:

- Git
- [Node](http://nodejs.org/)
- [NPM](https://npmjs.org/)
- [Grunt](http://gruntjs.com/)
- [Bower](http://bower.io/)

To start working on the project, you must install all node modules & bower dependencies, just run `npm install` from root path folder, and `bower install`. The folders node_modules & bower_components will be created, you should exclude them to the repository settings, and IDE environment.

Resolving and installing packages and dependencies
==================================================

This project uses several third party packages and dependencies to work properly.
All of them, are managed by [Bower](http://bower.io/).
Actually, the packages and dependencies used are:

- [jQuery 1.x](http://jquery.com/)
- [Underscore](http://underscorejs.org/)
- [Backbone](http://backbonejs.org/)
- [Underscore.String](http://epeli.github.io/underscore.string/)
- [Backbone-deep-model](https://github.com/powmedia/backbone-deep-model)
- [Polyglot](http://airbnb.github.io/polyglot.js/)

Other specific old IE dependencies are used too:

- [Modernizr](http://modernizr.com/)
- [ES5-shim](https://github.com/es-shims/es5-shim)
- [Respond](https://github.com/scottjehl/Respond)

### Installing packages and dependencies to your local copy

To install this dependencies on your development environment, type in your shell, at the home project folder:

```bash
bower install  # this will download and install all dependencies at /bower_components
```

### Check for newer versions of packages and dependencies

To check them, run this:

```bash
bower list  # this will list packages and their update status
```

### Update packages and dependencies

To update the dependencies, run this:

```bash
bower update  # this will update all dependencies at /bower_components
bower update packageName  # this will update only specified packageName
bower install updatedPackageName --save # this will fix the new package version and save it to package.json
```

### Package or dependency detailed information

To get more information, run this:

```bash
bower info packageName  # this will show more info
```

### Install a new or updated package or dependency

To install newer or updated packages, run this:

```bash
bower install packageName --save # this will install a package and save it to package.json
```

### Uninstall a package or dependency

To uninstall one, run this:

```bash
bower uninstall packageName --save # this will uninstall a package and remove it from package.json
```

Grunt Tasks
=====================================

TO DO For complete task list and detailed information, take a look to Gruntfile.js

Translations and humanization
=============================

TO DO

Send initial parameters by URL
==============================

TO DO

You can send initial parameters via URL JSON encoded object. En example usage looks like this:

```php
// Construct the params object
$params = array(
    "locale" => array(
        "language" => "es"
        }
    "development" => array(
        "apiUrl" => null
        "apiKey" => null
        }
);
// Encode the PHP object to JSON structure
$paramsString = json_encode($params);
// Encode the JSON object to to URL parameters
$paramsStringEncoded = urlencode($paramsString);
// Construct the final URL with all params
$widgetUrl = "index.php?data=".urlencode(json_encode($params));
```

You can omit any booking parameter or set it to null.

Changelog
=========

### 0.0.1 (Beta)

* Add grunt auto-generated dev files to this commit
* Add automation Grunt tasks
* Add index.php file (widget entry point)
* Add Main Template
* Add Main Backbone View
* Add Reviews Backbone Collection
* Add Review Backbone Model
* Add main HKG namespace, ready to receive params
* Make this readme file
* Init this repository

License
=======

MIT license