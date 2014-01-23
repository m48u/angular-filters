

angular.module("m48u.filters", [ ]);
angular.module("m48u", ["m48u.filters"]);

angular.module("m48u.filters").filter("reverse", function () {
	"use strict";
	return function (input) {
		return input.split('').reverse().join('');
	};
});