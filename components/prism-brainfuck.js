(function () {
	function register(Prism) {
		if (typeof Prism === 'object') {
			Prism.languages.brainfuck = {
				'pointer': {
					pattern: /<|>/,
					alias: 'keyword'
				},
				'increment': {
					pattern: /\+/,
					alias: 'inserted'
				},
				'decrement': {
					pattern: /-/,
					alias: 'deleted'
				},
				'branching': {
					pattern: /\[|\]/,
					alias: 'important'
				},
				'operator': /[.,]/,
				'comment': /\S+/
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
