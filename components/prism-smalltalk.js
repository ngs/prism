(function () {
	function register(Prism) {
		if (typeof Prism === 'object') {
			Prism.languages.smalltalk = {
				'comment': /"(?:""|[^"])+"/,
				'string': /'(?:''|[^'])+'/,
				'symbol': /#[\da-z]+|#(?:-|([+\/\\*~<>=@%|&?!])\1?)|#(?=\()/i,
				'block-arguments': {
					pattern: /(\[\s*):[^\[|]*?\|/,
					lookbehind: true,
					inside: {
						'variable': /:[\da-z]+/i,
						'punctuation': /\|/
					}
				},
				'temporary-variables': {
					pattern: /\|[^|]+\|/,
					inside: {
						'variable': /[\da-z]+/i,
						'punctuation': /\|/
					}
				},
				'keyword': /\b(?:nil|true|false|self|super|new)\b/,
				'character': {
					pattern: /\$./,
					alias: 'string'
				},
				'number': [
					/\d+r-?[\dA-Z]+(?:\.[\dA-Z]+)?(?:e-?\d+)?/,
					/(?:\B-|\b)\d+(?:\.\d+)?(?:e-?\d+)?/
				],
				'operator': /[<=]=?|:=|~[~=]|\/\/?|\\\\|>[>=]?|[!^+\-*&|,@]/,
				'punctuation': /[.;:?\[\](){}]/
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
