/**
 * This example can be transpiled using browserify:
 *
 *      browserify main.commonjs.js -o main.bundle.js
 *
 * For more information, check http://browserify.org/
 */

var Bideo = require('./bideo');
var bv = new Bideo();

bv.init({
  // Video element
  videoEl: document.querySelector('#background_video'),

  // Container element
  container: document.querySelector('body'),

  // Resize
  resize: true,

  // Array of objects containing the src and type
  // of different video formats to add
  src: [
    {
      src: 'night.mp4',
      type: 'video/mp4'
    }
  ],

  // What to do once video loads (initial frame)
  onLoad: function () {
    document.querySelector('#video_cover').style.display = 'none';
  }
});
