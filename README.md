# MMM-EasyPix

The easiest way to show pictures on your MagicMirror².

Supported file formats: jpg, png and gif (even animated gif's).

## Where your picture files go

Your picture files go in the "pix" folder inside the MMM-EasyPix module folder.

## Works with Hello-Lucy

This module works also with [Hello-Lucy](https://github.com/mykle1/Hello-Lucy) voice enhancement (required for sound).

Pi users should use static pictures or small sized gifs. They can try `eyes.gif` or `2.gif`.

## Installation

- `git clone https://github.com/mykle1/MMM-EasyPix` into the `~/MagicMirror/modules` directory.
- Annotated .css file included for exact positioning.

## config.js entry and options

```js
  {
    module: "MMM-EasyPix",
    position: "top_center",
    config: {
      picName: "18.jpg",              // Enter the picture file name.
      maxWidth: "75%",                // Size picture precisely. Retains aspect ratio.
      sounds: ["1.mp3", "me2.mp3"],   // mp3 audio file names in quotes seperated by commas for Hello-Lucy
      updateInterval: 30 * 60 * 1000, // Updates display (Milliseconds) - Default: 30 * 60 * 1000 = 30 minutes
      animationSpeed: 3000,           // Speed of the update animation. (Milliseconds)
      }
    },
```

## How to use it multiple times

- Simply make multiple entries in your config and name a different picture.

## Remember

- All picture files go in the "pix" folder inside the MMM-EasyPix module folder.
