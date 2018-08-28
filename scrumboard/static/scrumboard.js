(function(){
		'use strict';

		angular.module('scrumboard.demo',[])

			.controller('ScrumboardController',['$scope','$http', ScrumboardController]);

		function ScrumboardController($scope,$http){


			$scope.add=function(list, title){

				var card={
					list: list.id,
					title:title
				};
				$http.post('/scrumboard/cards/',card).then(function(response){
					list.cards.push(response.data)
				},
				function(){
					alert('Cound not create card');
				});

				

			};


		// 	$scope.data=[
		// 	{
		// 		name:'django demo',
		// 		cards:[
		// 		{
		// 			title: 'create models'
		// 		},
		// 		{
		// 			title: 'Create view'
		// 		},
		// 		{
		// 			title: 'migate db'
		// 		},
		// 		]
		// 	},
		// 	{
		// 		name: 'Angulr demo',
		// 		cards:[
		// 			{
		// 			title: 'write html '
		// 		},
		// 		{
		// 			title: 'write js'
		// 		},
		// 		]
		// 	}
		// ]

		$scope.data=[]

		$http.get('/scrumboard/lists/').then(function(response){
			$scope.data=response.data;
		});


	}

	}());