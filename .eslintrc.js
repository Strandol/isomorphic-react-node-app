module.exports = {
	"env": {
		"browser": true,
		"node": true,
		"es6": true
	},
	"parserOptions": {
		"ecmaFeatures": {
			"arrowFunctions": true,
			"blockBindings": true,
			"classes": true,
			"defaultParams": true,
			"destructuring": true,
			"forOf": true,
			"generators": false,
			"modules": true,
			"objectLiteralComputedProperties": true,
			"objectLiteralDuplicateProperties": false,
			"objectLiteralShorthandMethods": true,
			"objectLiteralShorthandProperties": true,
			"restParams": true,
			"spread": true,
			"superInFunctions": true,
			"templateStrings": true,
			"jsx": true
		},
		"ecmaVersion": 2018,
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"windows"
		],
		"quotes": [
			"error",
			"single"
		],
		"semi": [
			"error",
			"always"
		],
		"no-unused-vars": 2,
		"react/jsx-no-undef": 1,
		"react/jsx-uses-react": 1,
		"react/jsx-uses-vars": 1,
		"react/react-in-jsx-scope": 1
	}
};