$(function() {
    var BV = new $.BigVideo();
	BV.init();
	BV.show('video/TWoA-vid.mp4');

	var player = BV.getPlayer();

	// player.pause();
});