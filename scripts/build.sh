#!/usr/bin/env bash

export NODE_ENV=production

#mkdir js/build

# js transpile (ES6 -> ES5 with commonJS module dependency)
babel --presets react,env js/src -d js/build

# js module bundler (commonJS -> ES5)
browserify js/build/app.js -o js/build/app.browserified.js

# minify so file sync isn't so flippin' slow
uglify -s js/build/app.browserified.js -o app.min.js

#rm -rf js/build

# done
date; echo;
