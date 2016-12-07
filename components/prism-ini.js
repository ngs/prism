(function () {
	function register(Prism) {
		if (typeof Prism === 'object') {
			Prism.languages.ini= {
				'comment': /^[ \t]*;.*$/m,
				'selector': /^[ \t]*\[.*?\]/m,
				'constant': /^[ \t]*[^\s=]+?(?=[ \t]*=)/m,
				'attr-value': {
					pattern: /=.*/,
					inside: {
						'punctuation': /^[=]/
					}
				}
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
