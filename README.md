## MMM-EasyPix

The easiest way to show pictures onto your mirror.

.jpg files, .png files, .gif files, etc..  (Even animated gif's work)

## Where your picture files go

* Your picture files go in the "pix" folder inside the MMM-EasyPix module folder.

## Installation

* `git clone https://github.com/mykle1/MMM-EasyPix` into the `~/MagicMirror/modules` directory.

* Annotated .css file included for exact positioning.

## Config.js entry and options

    {
        module: "MMM-EasyPix",
		position: "top_left",
		config: {
			picName: "Example.jpg", // Enter the picture file name.
			maxWidth: "300px",      // Size picture precisely. Retains aspect ratio.
		}
	},
	
## How to use it multiple times!

* Simply make multiple entries in your config and name a different picture.

## Remember

* All picture files go in the "pix" folder inside the MMM-EasyPix module folder.