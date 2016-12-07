(function () {
	function register(Prism) {
		if (typeof Prism === 'object') {
			Prism.languages.dart = Prism.languages.extend('clike', {
				'string': [
					/r?("""|''')[\s\S]*?\1/,
					/r?("|')(\\?.)*?\1/
				],
				'keyword': [
					/\b(?:async|sync|yield)\*/,
					/\b(?:abstract|assert|async|await|break|case|catch|class|const|continue|default|deferred|do|dynamic|else|enum|export|external|extends|factory|final|finally|for|get|if|implements|import|in|library|new|null|operator|part|rethrow|return|set|static|super|switch|this|throw|try|typedef|var|void|while|with|yield)\b/
				],
				'operator': /\bis!|\b(?:as|is)\b|\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?/
			});

			Prism.languages.insertBefore('dart','function',{
				'metadata': {
					pattern: /@\w+/,
					alias: 'symbol'
				}
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
