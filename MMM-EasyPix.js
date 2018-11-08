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
		updateInterval: 30 * 60 * 1000,     // updates display
		animationSpeed: 3000,
		},

    start: function() {
        var self = this;
        this.url = '';

        // ADDED: Schedule update timer courtesy of ninjabreadman
       var self = this;
       setInterval(function() {
       self.updateDom(self.config.animationSpeed || 0); // use config.animationSpeed or revert to zero @ninjabreadman
       }, this.config.updateInterval);
    },



    getStyles: function() {
        return ["MMM-EasyPix.css"]
    },




    // Override dom generator.
    getDom: function() {
        var wrapper = document.createElement("div");
        var image = document.createElement("img");
            image.src = '/modules/MMM-EasyPix/pix/' + this.config.picName + "?seed=" + new Date();
            image.className = "photo";
			image.style.maxWidth = this.config.maxWidth;
        wrapper.appendChild(image);
        return wrapper;
    },

    random_imglink: function (){
    var myimages = new Array()
    var myimages = '/modules/MMM-EasyPix/pix/';

    var ry = Math.floor(Math.random()*'/modules/MMM-EasyPix/pix/'.length)
  if (ry==0) {
     ry=1;
}
    document.write('<img src="'+myimages[ry]+'" border=0>');

    return random_imglink;
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

        if (notification === 'HELLO_THERE_LUCY') {
            var sound = new Audio();
            sound.src = 'modules/MMM-EasyPix/hello.mp3';
            sound.play();
        }
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
