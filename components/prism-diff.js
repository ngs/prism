(function () {
	function register(Prism) {
		if (typeof Prism === 'object') {
			Prism.languages.diff = {
				'coord': [
					// Match all kinds of coord lines (prefixed by "+++", "---" or "***").
					/^(?:\*{3}|-{3}|\+{3}).*$/m,
					// Match "@@ ... @@" coord lines in unified diff.
					/^@@.*@@$/m,
					// Match coord lines in normal diff (starts with a number).
					/^\d+.*$/m
				],

				// Match inserted and deleted lines. Support both +/- and >/< styles.
				'deleted': /^[-<].*$/m,
				'inserted': /^[+>].*$/m,

				// Match "different" lines (prefixed with "!") in context diff.
				'diff': {
					'pattern': /^!(?!!).+$/m,
					'alias': 'important'
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
