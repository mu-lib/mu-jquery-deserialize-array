/**
 * @license MIT http://mu-lib.mit-license.org/
 */
(function (factory) {
	if (typeof exports === "object") {
		factory(require("jquery"), require("mu-jquery-deserialize-object/jquery.deserializeObject"));
	}
	else if (typeof define === "function" && define.amd) {
		define([ "jquery", "mu-jquery-deserialize-object/jquery.deserializeObject" ], factory);
	}
	else {
		factory(window.jQuery)
	}
}(function ($) {
	var NAME = "name";
	var VALUE = "value";

	$.fn.deserializeArray = function (array) {
		var object = {};

		$.each(array || false, function (result, field) {
			object[field[NAME]] = field[VALUE];
		});

		return this.deserializeObject(object);
	}
}));