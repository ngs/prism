(function () {
	function register(Prism) {
		if (typeof Prism === 'object') {
			Prism.languages.json = {
			    'property': /"(?:\\.|[^|"])*"(?=\s*:)/ig,
			    'string': /"(?!:)(?:\\.|[^|"])*"(?!:)/g,
			    'number': /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?)\b/g,
			    'punctuation': /[{}[\]);,]/g,
			    'operator': /:/g,
			    'boolean': /\b(true|false)\b/gi,
			    'null': /\bnull\b/gi
			};

			Prism.languages.jsonp = Prism.languages.json;

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
