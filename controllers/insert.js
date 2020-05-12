var app=angular.module('insert',[]);

app.controller('insertCtrl',function($scope,$http){
    $scope.data = {};
    $scope.data.list=[];
    $scope.item={};
    $scope.response = "";	
    $scope.add=function()
    {
       var obj={
                 "date":$scope.item.date,
                 "dest":$scope.item.dest,
                 "nob":$scope.item.nob
               };
       $scope.data.list.push(obj); 
       $scope.item={};
    };
    $scope.insert = function() 
    {        
        $http.post("http://localhost:3000/api/insert", JSON.stringify($scope.data)).then((response)=>{
            $scope.response = response;
        });
    };
});


/*
$scope.content = {};
$scope.content.codehttp = [200, 200, 200, 201];

angular.forEach($scope.content.codehttp, function(value, key) {
  if (value != 200) {
    $scope.flag_a = 'bad';
  }
})
*/