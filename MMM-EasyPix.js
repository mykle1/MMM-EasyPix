/* Magic Mirror
 * Module: MMM-EasyPix
 *
 * By Mykle1
 * MIT Licensed.
 */
Module.register("MMM-EasyPix", {

    defaults: {
        picName: "PICTURE_NAME.jpg",   // .jpg, .gif, .png, etc.. (animated gif's too!)
		maxWidth: "350px",             // your picture files go in "pix" folder of module
		},                               

    start: function() {
        self = this;
        this.url = '';

        if (this.config.picName != '') {
            this.url = "modules/MMM-EasyPix/pix/" + this.config.picName;
        }
    },

    getStyles: function() {
        return ["MMM-EasyPix.css"]
    },

    // Override dom generator.
    getDom: function() {
        var wrapper = document.createElement("div");
        var image = document.createElement("img");
        if (this.config.picName != '') {
            image.src = this.url;
            image.className = "photo";
			image.style.maxWidth = this.config.maxWidth;
        }

        wrapper.appendChild(image);
        return wrapper;
    }
});