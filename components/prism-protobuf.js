(function () {
	function register(Prism) {
		if (typeof Prism === 'object') {
			Prism.languages.protobuf = Prism.languages.extend('clike', {
				keyword: /\b(package|import|message|enum)\b/,
				builtin: /\b(required|repeated|optional|reserved)\b/,
				primitive: {
					pattern: /\b(double|float|int32|int64|uint32|uint64|sint32|sint64|fixed32|fixed64|sfixed32|sfixed64|bool|string|bytes)\b/,
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
