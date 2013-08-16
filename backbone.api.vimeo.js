/* Backbone API: Vimeo
 * Source: https://github.com/backbone-api/vimeo
 *
 * Created by Makis Tracend (@tracend)
 * Distributed through [Makesites.org](http://makesites.org)
 * Released under the [MIT license](http://makesites.org/licenses/MIT)
 */

(function(_, Backbone) {

	// API reference: http://developer.vimeo.com/apis/simple

	// Constants
	var api = "http://vimeo.com/api/v2"


	// Base model - mainly used for setup options
	var Vimeo = new Backbone.Model({
		"appId": false,
		"uri": false
	});

	// Namespace definition
	Vimeo.Models = {};
	Vimeo.Collections = {};
	Vimeo.Views = {};

	// Models

	//
	Vimeo.Models.Video = Backbone.Model.extend({
		url: function(){ return api + "/video/"+ this.id +".json" },
		defaults : {
		},
		parse: function( data ){
			console.log("Vimeo.Models.Video: ", data);
			// validate data?
			return data[0];
		}
	});

	// Fallbacks
	//APP = window.APP || (APP = { Models: {}, Collections: {}, Views: {} });
	if( _.isUndefined(Backbone.API) ) Backbone.API = {};
	Backbone.API.Vimeo = Vimeo;

	// alias APP.API
	if( typeof APP != "undefined" && (_.isUndefined( APP.API) || _.isUndefined( APP.API.Vimeo) ) ){
		APP.API = APP.API || {};
		APP.API.Vimeo = Backbone.API.Vimeo;
	}

	// Shortcut
	if(typeof window.Vimeo == "undefined"){
		window.Vimeo = Vimeo;
	}

})(this._, this.Backbone);