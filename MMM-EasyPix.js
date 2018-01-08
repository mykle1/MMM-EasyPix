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
    },
    

/////  Add this function to the modules you want to control with voice //////
/////  Must be the same as in "sentences" array in MMM-voice.js /////
/////  Replace sound file with your own greeting /////

    notificationReceived: function(notification, payload) {
        if (notification === 'HIDE_LUCY') {
            this.hide(1000);
            this.updateDom(300);
        }  else if (notification === 'SHOW_LUCY') {
            this.show(1000);
            this.updateDom(300);
        }
        
        if (notification === 'SHOW_LUCY') {
            var sound = new Audio();
            sound.src = 'modules/MMM-EasyPix/sounds/me2.mp3';
            sound.play();
        }
        
            
    },
    

});


