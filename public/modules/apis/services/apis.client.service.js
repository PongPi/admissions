'use strict';

//Apis service used to communicate Apis REST endpoints
angular.module('apis').factory('Apis', ['$resource',
	function($resource) {
		return $resource('apis/:apiId', { apiId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);