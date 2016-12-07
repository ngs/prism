(function () {
	function register(Prism) {
		if (typeof Prism === 'object') {
			Prism.languages.keyman = {
				'comment': /\bc\s.*/i,
				'function': /\[\s*((CTRL|SHIFT|ALT|LCTRL|RCTRL|LALT|RALT|CAPS|NCAPS)\s+)*([TKU]_[a-z0-9_?]+|".+?"|'.+?')\s*\]/i,  // virtual key
				'string': /("|')((?!\1).)*\1/,
				'bold': [   // header statements, system stores and variable system stores
					/&(baselayout|bitmap|capsononly|capsalwaysoff|shiftfreescaps|copyright|ethnologuecode|hotkey|includecodes|keyboardversion|kmw_embedcss|kmw_embedjs|kmw_helpfile|kmw_helptext|kmw_rtl|language|layer|layoutfile|message|mnemoniclayout|name|oldcharposmatching|platform|targets|version|visualkeyboard|windowslanguages)\b/i,
					/\b(bitmap|bitmaps|caps on only|caps always off|shift frees caps|copyright|hotkey|language|layout|message|name|version)\b/i
				],
				'keyword': /\b(any|baselayout|beep|call|context|deadkey|dk|if|index|layer|notany|nul|outs|platform|return|reset|save|set|store|use)\b/i,  // rule keywords
				'atrule': /\b(ansi|begin|unicode|group|using keys|match|nomatch)\b/i,   // structural keywords
				'number': /\b(U\+[\dA-F]+|d\d+|x[\da-f]+|\d+)\b/i, // U+####, x###, d### characters and numbers
				'operator': /[+>\\,()]/,
				'tag': /\$(keyman|kmfl|weaver|keymanweb|keymanonly):/i   // prefixes
			};
		}
	}
	register(this.Prism);

	if (typeof define === 'function' && define.amd) {
		// AMD
		define([], function () {
			return register;
		});
	} else if (typeof module === 'object' && typeof module.exports === 'object') {
		// CommonJS/Browserify
		module.exports = register;
	}
}).call(undefined);
