HTML5 Background Video
======================

Want to play a video in the background of a container or `body` itself ? This plugin will help you do exactly that. I'd suggest you to [read this article](http://codetheory.in/html5-fullscreen-background-video/) too.

[**Demo**](http://rishabhp.github.io/bideo.js/)

Basic Features
--------

### Resizing

The `video` element in use will automatically adapt to the container's dimensions. It will also resize as the browser window resizes.

### Overlay

Plugin doesn't supports any overlay as it is easy to implement that with plain HTML/CSS in [your code](http://codetheory.in/html5-fullscreen-background-video/#overlays).

### Video Cover

Video might take a few seconds to load, especially because the sources are added via JS which is something you'll load after the DOM's loading. Till then you may want to show a video cover which'll be same as the first frame or the video (or some other image).

The support for this is not in the plugin as it's fairly simple to achieve this via just HTML/CSS (just like overlays). Check the demo!

### Network Speed

[Read this](http://codetheory.in/html5-fullscreen-background-video/#network_speed).

Options
-------

Check `main.js`.

More on HTML5 Video/Audio
-------------------------

- https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events
- http://www.w3schools.com/tags/ref_av_dom.asp
