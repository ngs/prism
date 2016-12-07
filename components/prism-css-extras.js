(function () {
	function register(Prism) {
		if (typeof Prism === 'object') {
			Prism.languages.css.selector = {
				pattern: /[^\{\}\s][^\{\}]*(?=\s*\{)/,
				inside: {
					'pseudo-element': /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
					'pseudo-class': /:[-\w]+(?:\(.*\))?/,
					'class': /\.[-:\.\w]+/,
					'id': /#[-:\.\w]+/,
					'attribute': /\[[^\]]+\]/
				}
			};

			Prism.languages.insertBefore('css', 'function', {
				'hexcode': /#[\da-f]{3,6}/i,
				'entity': /\\[\da-f]{1,8}/i,
				'number': /[\d%\.]+/
			});
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
