(function () {
	function register(Prism) {
		if (typeof Prism === 'object') {
			Prism.languages.scala = Prism.languages.extend('java', {
				'keyword': /<-|=>|\b(?:abstract|case|catch|class|def|do|else|extends|final|finally|for|forSome|if|implicit|import|lazy|match|new|null|object|override|package|private|protected|return|sealed|self|super|this|throw|trait|try|type|val|var|while|with|yield)\b/,
				'string': [
					{
						pattern: /"""[\W\w]*?"""/,
						greedy: true
					},
					{
						pattern: /("|')(?:\\\\|\\?[^\\\r\n])*?\1/,
						greedy: true
					},
				],
				'builtin': /\b(?:String|Int|Long|Short|Byte|Boolean|Double|Float|Char|Any|AnyRef|AnyVal|Unit|Nothing)\b/,
				'number': /\b(?:0x[\da-f]*\.?[\da-f]+|\d*\.?\d+e?\d*[dfl]?)\b/i,
				'symbol': /'[^\d\s\\]\w*/
			});
			delete Prism.languages.scala['class-name'];
			delete Prism.languages.scala['function'];

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
