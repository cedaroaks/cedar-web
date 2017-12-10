(function(){
  'use strict';

  angular.module('selfService')

	.constant("BASE_URL", "https://173.212.252.106/fineract-provider/api/v1")

	.constant('AUTH_EVENTS', {
		updateUser: 'update-user',
		notAuthorized: 'auth-not-authorized',
		notAuthenticated: 'auth-not-authenticated'
	})

	.constant("TENANT_IDENTIFIER", "cedaroaks")

	.constant('USER_ROLES', {
		user: 'USER'
	});
})();
