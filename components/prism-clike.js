(function () {
	function register(Prism) {
		if (typeof Prism === 'object') {
			Prism.languages.clike = {
				'comment': [
					{
						pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
						lookbehind: true
					},
					{
						pattern: /(^|[^\\:])\/\/.*/,
						lookbehind: true
					}
				],
				'string': {
					pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
					greedy: true
				},
				'class-name': {
					pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
					lookbehind: true,
					inside: {
						punctuation: /(\.|\\)/
					}
				},
				'keyword': /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
				'boolean': /\b(true|false)\b/,
				'function': /[a-z0-9_]+(?=\()/i,
				'number': /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
				'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
				'punctuation': /[{}[\];(),.:]/
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
