var app = angular.module('TestApp', []);

app.controller('TestController', ['$scope',
    function($scope) {
        $scope.yourName = "";
        $scope.yourReps = "";
        $scope.yourWeight ="";
        var training = [{
            name: "Hammercurls",
            reps: 10,
            weight: 10
        }, {
            name: "Squats",
            reps: 8,
            weight: 90
        }, {
            name: "Pushdown",
            reps: 15,
            weight: 25
        }];
        $scope.training = training;
        $scope.addOneMore = function() {
        	var newEx = {
        		name: $scope.yourName,
        		reps: $scope.yourReps,
        		weight: $scope.yourWeight
        	}
            $scope.training.push(newEx);
            $scope.yourName ="";
            $scope.yourReps ="";
            $scope.yourWeight ="";
        }
        $scope.zweierSplit = function() {
            $scope.training = [{
                name: "Nevativbank",
                reps: 10,
                weight: 60
            }, {
                name: "Bizeps",
                reps: 8,
                weight: 32
            }];
        }

        $scope.dreierSplit = function() {
            $scope.training = [{
                name: "Hammercurls",
                reps: 10,
                weight: 10
            }, {
                name: "Squats",
                reps: 8,
                weight: 90
            }, {
                name: "Pushdown",
                reps: 15,
                weight: 25
            }];
        }
        $scope.removeExercise =function(index) {
        	$scope.training.splice(index,1);
        };

        $scope.markRead = function(event) {
        	$(event.target).addClass("disabled");
        	$(event.target).parent().children().css("opacity", "0.5");
        };
    }
]);
