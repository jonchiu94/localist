/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
	//  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
	//  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
	//  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝

	//  ╔╦╗╦╔═╗╔═╗  ╦═╗╔═╗╔╦╗╦╦═╗╔═╗╔═╗╔╦╗╔═╗   ┬   ╔╦╗╔═╗╦ ╦╔╗╔╦  ╔═╗╔═╗╔╦╗╔═╗
	//  ║║║║╚═╗║    ╠╦╝║╣  ║║║╠╦╝║╣ ║   ║ ╚═╗  ┌┼─   ║║║ ║║║║║║║║  ║ ║╠═╣ ║║╚═╗
	//  ╩ ╩╩╚═╝╚═╝  ╩╚═╚═╝═╩╝╩╩╚═╚═╝╚═╝ ╩ ╚═╝  └┘   ═╩╝╚═╝╚╩╝╝╚╝╩═╝╚═╝╩ ╩═╩╝╚═╝

	//  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
	//  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
	//  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝
	// …

	//  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
	//  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
	//  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
	// Note that, in this app, these API endpoints may be accessed using the `Cloud.*()` methods
	// from the Parasails library, or by using those method names as the `action` in <ajax-form>.
	'POST       /entrance/signup'     : { action: 'entrance/signup' },
	'POST       /user/signin'         : { action: 'entrance/signin' },
	'POST       /entrance/signout'    : { action: 'exit/signout' },
	'POST       /tour/add'            : { action: 'tours/post-tour' },
	'POST       /guide/add'           : { action: 'guides/post-guide' },
	'GET        /user/all'            : { action: 'users/list-users' },
	'GET        /tour/all'            : { action: 'tours/get-all-tours' },
	'GET        /guide/all'           : { action: 'guides/get-all-guides' },
	'GET        /guide/find/:id'      : { action: 'guides/single-guide' },
	'GET        /tour/find/:id/:long' : { action: 'tours/single-tour' },
	'DELETE     /tour/delete/:id'     : { action: 'tours/delete-tour' },
	'DELETE     /guide/delete/:id'    : { action: 'guides/delete-guide' },
	'PATCH      /tour/update/:id'     : { action: 'tours/update-tour' },
	'PATCH      /guide/update/:id'    : { action: 'guides/update-guide' }

	//  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
	//  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
	//  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
	// Note that, in this app, these API endpoints may be accessed using the `Cloud.*()` methods
	// from the Parasails library, or by using those method names as the `action` in <ajax-form>.
}
