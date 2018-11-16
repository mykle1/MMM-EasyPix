## MMM-EasyPix

The easiest way to show pictures onto your mirror.

.jpg files, .png files, .gif files, etc..  (Even animated gif's work)

## Where your picture files go

* Your picture files go in the "pix" folder inside the MMM-EasyPix module folder.

## Works with Hello-Lucy voice enhancement (required for sound)

## Installation

* `git clone https://github.com/mykle1/MMM-EasyPix` into the `~/MagicMirror/modules` directory.

* Annotated .css file included for exact positioning.

## Config.js entry and options

    {
        module: "MMM-EasyPix",
		position: "top_center",
		config: {
			picName: "18.jpg", // Enter the picture file name.
			maxWidth: "75%",        // Size picture precisely. Retains aspect ratio.
			sounds: ["1.mp3", "me2.mp3"],  // mp3 sound file names in quotes seperated by commas for Hello-Lucy
			updateInterval: 30 * 60 * 1000,     // updates display
		        animationSpeed: 3000,
		}
	},
	
## How to use it multiple times!

* Simply make multiple entries in your config and name a different picture.

## Remember

* All picture files go in the "pix" folder inside the MMM-EasyPix module folder.
