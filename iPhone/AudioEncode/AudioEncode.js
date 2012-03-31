//
//  AudioEncode.js
//
//  Created by Lyle Pratt, September 2011.
//  MIT licensed
//

/**
 * This class converts audio at a file path to M4A format
 * @constructor
 */
function AudioEncode() {
}

AudioEncode.prototype.callbackMap = {};
AudioEncode.prototype.callbackIdx = 0;

AudioEncode.prototype.encodeAudio = function(audioPath, success, fail) {
    var key = 'audioEncode' + this.callbackIdx++;
    var callbackPrefix = 'window.plugins.AudioEncode.callbackMap.' + key;

    window.plugins.AudioEncode.callbackMap[key] = {
        success: function(path) {
            delete window.plugins.AudioEncode.callbackMap[key];
            success(path);
        },
        fail: function(status) {
            delete window.plugins.AudioEncode.callbackMap[key];
            fail(status);
        },
    };

    return Cordova.exec("AudioEncode.encodeAudio", audioPath, callbackPrefix + '.success', callbackPrefix + '.fail');
};

Cordova.addConstructor(function() {
  	if(!window.plugins)
  	{
  		window.plugins = {};
  	}
    window.plugins.AudioEncode = new AudioEncode();
});
