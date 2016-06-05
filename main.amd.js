/*
 * This example requires require.js. It can be downloaded from:
 *      
 *      http://requirejs.org/docs/download.html
 */

require(['./bideo'], function (Bideo) {

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
});

