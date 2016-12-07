(function () {
	function register(Prism) {
		if (typeof Prism === 'object') {
			Prism.languages.r = {
				'comment': /#.*/,
				'string': /(['"])(?:\\?.)*?\1/,
				'percent-operator': {
					// Includes user-defined operators
					// and %%, %*%, %/%, %in%, %o%, %x%
					pattern: /%[^%\s]*%/,
					alias: 'operator'
				},
				'boolean': /\b(?:TRUE|FALSE)\b/,
				'ellipsis': /\.\.(?:\.|\d+)/,
				'number': [
					/\b(?:NaN|Inf)\b/,
					/\b(?:0x[\dA-Fa-f]+(?:\.\d*)?|\d*\.?\d+)(?:[EePp][+-]?\d+)?[iL]?\b/
				],
				'keyword': /\b(?:if|else|repeat|while|function|for|in|next|break|NULL|NA|NA_integer_|NA_real_|NA_complex_|NA_character_)\b/,
				'operator': /->?>?|<(?:=|<?-)?|[>=!]=?|::?|&&?|\|\|?|[+*\/^$@~]/,
				'punctuation': /[(){}\[\],;]/
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
