(function () {
	function register(Prism) {
		if (typeof Prism === 'object') {
			Prism.languages.roboconf = {
				'comment': /#.*/,
				'keyword': {
					'pattern': /(^|\s)(?:(?:facet|instance of)(?=[ \t]+[\w-]+[ \t]*\{)|(?:external|import)\b)/,
					lookbehind: true
				},
				'component': {
					pattern: /[\w-]+(?=[ \t]*\{)/,
					alias: 'variable'
				},
				'property': /[\w.-]+(?=[ \t]*:)/,
				'value': {
					pattern: /(=[ \t]*)[^,;]+/,
					lookbehind: true,
					alias: 'attr-value'
				},
				'optional': {
					pattern: /\(optional\)/,
					alias: 'builtin'
				},
				'wildcard': {
					pattern: /(\.)\*/,
					lookbehind: true,
					alias: 'operator'
				},
				'punctuation': /[{},.;:=]/
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
