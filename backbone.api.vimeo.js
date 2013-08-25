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

	// Support backbone-app (if available)
	var Model = ( typeof APP != "undefined" && !_.isUndefined( APP.Model) ) ? APP.Model : Backbone.Model;

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
	// JSONP requests for all direct API requests
	Vimeo.Model = Model.extend({

		sync : function( method, model, options ) {

			options.dataType = 'jsonp';

			return Backbone.sync( method, model, options );

		}
	});

	//
	Vimeo.Models.Video = Vimeo.Model.extend({
		url: function(){ return api + "/video/"+ this.id +".json" },
		defaults : {
		},
		parse: function( data ){
			//console.log("Vimeo.Models.Video: ", data);
			// validate data?
			return data[0];
		}
	});


	// Store in selected namespace(s)
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