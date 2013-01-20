/******************************************
 * Websanova.com
 *
 * Resources for web entrepreneurs
 *
 * @author          Websanova
 * @copyright       Copyright (c) 2012 Websanova.
 * @license         These websanova utils are dual licensed under the MIT and GPL licenses.
 * @link            http://www.websanova.com
 * @github			http://github.com/websanova/utils
 * @version 		1.4.2
 *
 ******************************************/

/***********************************************************
 * jQuery methods
 ***********************************************************/
jQuery.extend(
{
	postJSON: function(url, data, callback)
	{
		return jQuery.post(url, data, callback, "json");
	},

	stop: function(e, preventDefault, stopPropagation)
	{
		if(preventDefault) e.preventDefault();
		if(stopPropagation) e.stopPropagation();
	},
	
	uri: function(index)
	{
		var uri = window.location.toString().split("/").slice(3);

		return uri[index-1];
	},

	URLParams: function(param)
	{
		var params = {};

		var uri = window.location.toString().split("?");

		if(!uri[1]) return null;

		uri = uri[1].split("#")[0];

		var paramSet = uri.split("&");
		var temp = [];
		for(index in paramSet)
		{
			temp = paramSet[index].split("=");
			params[temp[0]] = temp[1];
		}

		if(param)
		{
			if(params[param]) return params[param];
			else return null;
		}
		else
		{
			return params;
		}
	},
	
	URLHash: function()
	{
		var uri = window.location.toString().split("#");
			
		if(!uri[1]) return null;
		else return uri[1];
	},

	shuffleArray: function(arr)
	{
		for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
		return arr;
	},
	
	reload: function()
	{
		window.location.reload(true);
	},
	
	hexToRgb: function(string)
	{
		if(!string || typeof string !== 'string') return false;

		if(string.substring(0,1) == '#' &&  (string.length == 4 || string.length == 7) && /^[0-9a-fA-F]+$/.test(string.substring(1, string.length)))
		{
			string = string.substring(1, string.length);

			if(string.length == 3) string = string[0] + string[0] + string[1] + string[1] + string[2] + string[2];
    
    		return 'rgb(' + parseInt(string[0] + string[1], 16).toString() + ',' + parseInt(string[2] + string[3], 16).toString() + ',' + parseInt(string[4] + string[5], 16).toString() + ')';
		}
		else return false;
	},

	rgbToHex: function(string)
	{
		if(!string || typeof string !== 'string') return false;

		if(string.substring(0,3) == 'rgb')
		{
			string = string.substring(4, string.length - 1).split(',');

			if(string.length == 3 && string[0] != '' && string[1] != '' && string[2] != '')
			{
				if(string[0] >= 0 && string[0] <= 255 && string[1] >= 0 && string[1] <= 255 && string[2] >= 0 && string[2] <= 255)
				{
					return ('#' + parseInt(string[0]).toString(16) + parseInt(string[1]).toString(16) + parseInt(string[2]).toString(16)).toUpperCase();
				}
				else return false;
			}
			else return false;
		}
		else return false;
	},

	hexOrRgb: function(string)
	{
		if(!string || typeof string !== 'string') return false;

		if(string.substring(0,1) == '#' && (string.length == 4 || string.length == 7) && /^[0-9a-fA-F]+$/.test(string.substring(1, string.length)))
		{
			string = string.substring(1, string.length);
    
			if(string.length == 3) string = string[0] + string[0] + string[1] + string[1] + string[2] + string[2];
    
			return 'rgb(' + parseInt(string[0] + string[1], 16).toString() + ',' + parseInt(string[2] + string[3], 16).toString() + ',' + parseInt(string[4] + string[5], 16).toString() + ')';
		}
		else if(string.substring(0,3) == 'rgb')
		{
			string = string.substring(4, string.length - 1).split(',');

			if(string.length == 3 && string[0] != '' && string[1] != '' && string[2] != '')
			{
				if(string[0] >= 0 && string[0] <= 255 && string[1] >= 0 && string[1] <= 255 && string[2] >= 0 && string[2] <= 255)
				{
					return ('#' + parseInt(string[0]).toString(16) + parseInt(string[1]).toString(16) + parseInt(string[2]).toString(16)).toUpperCase();
				}
				else return false;
			}
			else return false;
		}
		else return false;
	},
	
	base64Encode: function(input)
	{
		var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
		
		var output = "";
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		var i = 0;
 
		input = $.utf8Encode(input);
 
		while (i < input.length)
		{
			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);
 
			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;
 
			if (isNaN(chr2)) enc3 = enc4 = 64;
			else if (isNaN(chr3)) enc4 = 64;
 
			output = output +
			keyStr.charAt(enc1) + keyStr.charAt(enc2) +
			keyStr.charAt(enc3) + keyStr.charAt(enc4);
		}
 
		return output;
	},
	
	base64Decode: function(input)
	{
		var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
		
		var output = "";
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;
 
		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
 
		while (i < input.length)
		{
			enc1 = keyStr.indexOf(input.charAt(i++));
			enc2 = keyStr.indexOf(input.charAt(i++));
			enc3 = keyStr.indexOf(input.charAt(i++));
			enc4 = keyStr.indexOf(input.charAt(i++));
 
			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;
 
			output = output + String.fromCharCode(chr1);
 
			if (enc3 != 64) output = output + String.fromCharCode(chr2);
			if (enc4 != 64) output = output + String.fromCharCode(chr3);
		}
 
		output = $.utf8Decode(output);
 
		return output;
	},
	
	utf8Encode: function (string)
	{
		string = string.replace(/\r\n/g,"\n");
		var utftext = "";
	 
		for (var n = 0; n < string.length; n++)
		{
			var c = string.charCodeAt(n);
 
			if (c < 128)
			{
				utftext += String.fromCharCode(c);
			}
			else if((c > 127) && (c < 2048))
			{
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}
			else
			{
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}
		}
 
		return utftext;
	},
 
	utf8Decode : function (utftext)
	{
		var string = "";
		var i = 0;
		var c = c1 = c2 = 0;
 
		while ( i < utftext.length )
		{
			c = utftext.charCodeAt(i);
 
			if (c < 128)
			{
				string += String.fromCharCode(c);
				i++;
			}
			else if((c > 191) && (c < 224))
			{
				c2 = utftext.charCodeAt(i+1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			}
			else
			{
				c2 = utftext.charCodeAt(i+1);
				c3 = utftext.charCodeAt(i+2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}
		}
 
		return string;
	}
});

/***********************************************************
 * jQuery plugins
 ***********************************************************/
(function($)
{
	$.fn.removeClassRegEx = function(regex)
	{
		return this.each(function()
		{
			var classes = $(this).attr('class');
			
			if(!classes || !regex) return false;
			
			var classArray = [];
			classes = classes.split(' ');
			
			for(var i=0, len=classes.length; i<len; i++) if(!classes[i].match(regex)) classArray.push(classes[i]);
			
			$(this).attr('class', classArray.join(' '));
		});
	};

	$.fn.hasClassRegEx = function(regex)
	{
		var classes = $(this).attr('class');
		
		if(!classes || !regex) return false;
		
		classes = classes.split(' ');
		
		for(var i=0, len=classes.length; i<len; i++) if(classes[i].match(regex)) return true;
		
		return false;
	}; 
	
	$.fn.maxChars = function(maxlength)
	{
		return this.each(function()
		{
			var maxChars = maxlength | $(this).attr('maxlength');

			if(!maxChars) return true; //if no max length set, just quit

			$(this).keyup(function()
			{
				var currentChars = $(this).val().length;
				var charsLeft = maxChars - currentChars;
				
				if(currentChars > maxChars) $(this).val($(this).val().substring(0, maxChars));
			});
		});
	};

	$.fn.cssAll = function(css)
	{
		var obj = {};

		if(this.length)
		{
			var css = css.split(',');
			var params = [];

			for(var i=0,ii=css.length; i<ii; i++)
			{
				params = css[i].split(':');

				obj[$.trim(params[0])] = $(this).css($.trim(params[1] || params[0]));
			}
		}

		return obj;
	};

	$.fn.clear = function(msg, delay, fadeOut)
	{
		return this.each(function()
		{
			var $elem = $(this).html(msg || '').show();
			clearTimeout($elem.data('_clear_timer'));
			$elem.data('_clear_timer', setTimeout(function(){ $elem.fadeOut(fadeOut || 500); }, (delay || 3000) ) );
		});
	};

})(jQuery);

/***********************************************************
 * JavaScript extensions
 ***********************************************************/
if(!Object.prototype.sizeof)
{
	Object.defineProperty(Object.prototype, 'sizeof',
	{
		value: function()
		{
			var counter = 0;
			for(index in this) counter++;
			
			return counter;
		},
		enumerable: false
	});
}

if(!String.prototype.capitalize)
{
	Object.defineProperty(String.prototype, 'capitalize',
	{
		value: function()
		{
			return this.slice(0,1).toUpperCase() + this.slice(1).toLowerCase();
		},
		enumerable: false
	});
}

if(!String.prototype.isHex)
{
	Object.defineProperty(String.prototype, 'isHex',
	{
		value: function()
		{
			return this.substring(0,1) == '#' &&  (this.length == 4 || this.length == 7) && /^[0-9a-fA-F]+$/.test(this.slice(1));
		},
		enumerable: false
	});
}

if(!String.prototype.pxToInt)
{
	Object.defineProperty(String.prototype, 'pxToInt',
	{
		value: function()
		{
			return parseInt(this.split('px')[0]);
		},
		enumerable: false
	});
}

if(!String.prototype.reverse)
{
	Object.defineProperty(String.prototype, 'reverse',
	{
		value: function()
		{
			return this.split( '' ).reverse().join( '' );
		},
		enumerable: false
	});
}

if(!String.prototype.wordCount)
{
	Object.defineProperty(String.prototype, 'wordCount',
	{
		value: function()
		{
			return this.split(' ').length;
		},
		enumerable: false
	});
}

if(!String.prototype.htmlEntities)
{
    Object.defineProperty(String.prototype, 'htmlEntities',
    {
        value: function()
        {
            return String(this).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
        },
        enumerable: false
    });
}

if(!String.prototype.stripTags)
{
    Object.defineProperty(String.prototype, 'stripTags',
    {
        value: function()
        {
            return this.replace(/<\/?[^>]+>/gi, '');
        },
        enumerable: false
    });
}

if(!String.prototype.trim)
{
    Object.defineProperty(String.prototype, 'trim',
    {
        value: function()
        {
            return this.replace(/^\s*/, "").replace(/\s*$/, "");
        },
        enumerable: false
    });
}

if(!String.prototype.stripNonAlpha)
{
    Object.defineProperty(String.prototype, 'stripNonAlpha',
    {
        value: function()
        {
            return this.replace(/[^A-Za-z ]+/g, "");
        },
        enumerable: false
    });
}