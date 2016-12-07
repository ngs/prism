(function () {
	function register(Prism) {
		if (typeof Prism === 'object') {
			Prism.languages.apl = {
				'comment': /(?:⍝|#[! ]).*$/m,
				'string': /'(?:[^'\r\n]|'')*'/,
				'number': /¯?(?:\d*\.?\d+(?:e[+¯]?\d+)?|¯|∞)(?:j¯?(?:\d*\.?\d+(?:e[\+¯]?\d+)?|¯|∞))?/i,
				'statement': /:[A-Z][a-z][A-Za-z]*\b/,
				'system-function': {
					pattern: /⎕[A-Z]+/i,
					alias: 'function'
				},
				'constant': /[⍬⌾#⎕⍞]/,
				'function': /[-+×÷⌈⌊∣|⍳?*⍟○!⌹<≤=>≥≠≡≢∊⍷∪∩~∨∧⍱⍲⍴,⍪⌽⊖⍉↑↓⊂⊃⌷⍋⍒⊤⊥⍕⍎⊣⊢⍁⍂≈⍯↗¤→]/,
				'monadic-operator': {
					pattern: /[\\\/⌿⍀¨⍨⌶&∥]/,
					alias: 'operator'
				},
				'dyadic-operator': {
					pattern: /[.⍣⍠⍤∘⌸]/,
					alias: 'operator'
				},
				'assignment': {
					pattern: /←/,
					alias: 'keyword'
				},
				'punctuation': /[\[;\]()◇⋄]/,
				'dfn': {
					pattern: /[{}⍺⍵⍶⍹∇⍫:]/,
					alias: 'builtin'
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
