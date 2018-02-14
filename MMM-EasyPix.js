/* Magic Mirror
 * Module: MMM-EasyPix
 *
 * By Mykle1
 * MIT Licensed.
 */
Module.register("MMM-EasyPix", {

    defaults: {
        picName: "face.gif",          // .jpg, .gif, .png, etc.. (animated gif's too!)
		maxWidth: "100%",             // your picture files go in "pix" folder of module
		sounds: ["1.mp3", "me2.mp3"],  // mp3 sound file names in quotes seperated by commas
		updateInterval: 60 * 1000,     // updates display
		animationSpeed: 1000,
		},                               

    start: function() {
        self = this;
        this.url = ''; 
		this.scheduleUpdate();
        if (this.config.picName != '') {
            this.url = "modules/MMM-EasyPix/pix/" + this.config.picName;
			 
        }
    },
    
    
    
    getStyles: function() {
        return ["MMM-EasyPix.css"]
    },
		
	scheduleUpdate: function() {
        setInterval(() =>  {
			this.updateDom();  //  this.getDom(); @cbd
	//		console.log(this.updateDom);    // for checking
		},
        this.config.updateInterval);
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
            this.hide(500);
        }  else if (notification === 'SHOW_LUCY') {
            this.show(1000);
        }
        
  //      if (notification === 'SHOW_LUCY') {
  //          var sound = new Audio();
  //          sound.src = 'modules/MMM-EasyPix/sounds/me2.mp3';
  //          sound.play();
  //      }
 ///////// So you don't hear the same greeting every time /////////////////////////       
////////// Randomized sound files courtesy of @ Cowboysdude ////////////////////////	    
	   if (notification === 'SHOW_LUCY') {
            var audio_files = this.config.sounds;
            var random_file = audio_files[Math.floor(Math.random() * audio_files.length)];
            var audio = new Audio(random_file);
            audio.src = 'modules/MMM-EasyPix/sounds/'+random_file;
            audio.play();
        }
            
    },
    

});


