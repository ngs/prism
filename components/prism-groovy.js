(function () {
	function register(Prism) {
		if (typeof Prism === 'object') {
			Prism.languages.groovy = Prism.languages.extend('clike', {
				'keyword': /\b(as|def|in|abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|trait|transient|try|void|volatile|while)\b/,
				'string': [
					{
						pattern: /("""|''')[\W\w]*?\1|(\$\/)(\$\/\$|[\W\w])*?\/\$/,
						greedy: true
					},
					{
						pattern: /("|'|\/)(?:\\?.)*?\1/,
						greedy: true
					}
				],
				'number': /\b(?:0b[01_]+|0x[\da-f_]+(?:\.[\da-f_p\-]+)?|[\d_]+(?:\.[\d_]+)?(?:e[+-]?[\d]+)?)[glidf]?\b/i,
				'operator': {
					pattern: /(^|[^.])(~|==?~?|\?[.:]?|\*(?:[.=]|\*=?)?|\.[@&]|\.\.<|\.{1,2}(?!\.)|-[-=>]?|\+[+=]?|!=?|<(?:<=?|=>?)?|>(?:>>?=?|=)?|&[&=]?|\|[|=]?|\/=?|\^=?|%=?)/,
					lookbehind: true
				},
				'punctuation': /\.+|[{}[\];(),:$]/
			});

			Prism.languages.insertBefore('groovy', 'string', {
				'shebang': {
					pattern: /#!.+/,
					alias: 'comment'
				}
			});

			Prism.languages.insertBefore('groovy', 'punctuation', {
				'spock-block': /\b(setup|given|when|then|and|cleanup|expect|where):/
			});

			Prism.languages.insertBefore('groovy', 'function', {
				'annotation': {
					alias: 'punctuation',
					pattern: /(^|[^.])@\w+/,
					lookbehind: true
				}
			});

			// Handle string interpolation
			Prism.hooks.add('wrap', function(env) {
				if (env.language === 'groovy' && env.type === 'string') {
					var delimiter = env.content[0];

					if (delimiter != "'") {
						var pattern = /([^\\])(\$(\{.*?\}|[\w\.]+))/;
						if (delimiter === '$') {
							pattern = /([^\$])(\$(\{.*?\}|[\w\.]+))/;
						}

						// To prevent double HTML-encoding we have to decode env.content first
						env.content = env.content.replace(/&lt;/g, '<').replace(/&amp;/g, '&');

						env.content = Prism.highlight(env.content, {
							'expression': {
								pattern: pattern,
								lookbehind: true,
								inside: Prism.languages.groovy
							}
						});

						env.classes.push(delimiter === '/' ? 'regex' : 'gstring');
					}
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
