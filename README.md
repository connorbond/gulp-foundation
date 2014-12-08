# Gulp w/ Foundation 5 - woo

* Compiles and concatenates Foundation's Sass files and your own Sass files.
* Watches for changes to styles, scripts and images.
* Serves the files.

## Getting Started

Install Node packages:
```
$ npm install
```

Install Bower components:
```
$ bower install
```

Install Ruby Gems:
```
// This exact combination of sass and compass is the only one which seems to work with Foundation (see: http://foundation.zurb.com/forum/posts/18630-scss-compiles-but-resulting-css-file-incomplete)
$ gem install sass --version 3.2.9
$ gem install compass --version 0.12.7
```

Compile and process styles and scripts:
```
$ gulp
```

## Watch Assets

To watch for changes to styles, scripts and images:
```
$ gulp watch
```

To ONLY watch styles:
```
$ gulp watch:styles
```