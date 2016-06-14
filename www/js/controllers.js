angular.module('starter.controllers', [])

.controller( 'forwardCtl',['$scope','$http',function($scope,$http){
    function go($scope,message) {
        $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        $http({
            url: 'http://192.168.31.11/',
            method: "post",
            data: {"k":message}
        })
        .then(function(response) {
          console.log("ok")
                // success
        },
        function(response) { // optional
          console.log("error")
                // failed
        });
    };
    $scope.onTouch=function(){
      // alert("你触发了on-touch")
      console.log("touch");
      go($scope,"w");
      console.log("w");
    };
    $scope.onRelease=function(){
      console.log("relese");
      go($scope,"stop");
      console.log("stop");
    };
}])

.controller( 'reverseCtl',['$scope','$http',function($scope,$http){
    // function go($scope,k){
    //         $http.post('http://192.168.31.11/',{k:k},function(){});
    // };
    function go($scope,message) {
        $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        $http({
            url: 'http://192.168.31.11/',
            method: "post",
            data: {"k":message}
        })
        .then(function(response) {
          console.log("ok")
                // success
        },
        function(response) { // optional
          console.log("error")
                // failed
        });
    };
    $scope.onTouch=function(){
      // alert("你触发了on-touch")
      console.log("touch");
      go($scope,"s");
      console.log("s");
    };
    $scope.onRelease=function(){
      console.log("relese");
      go($scope,"stop");
      console.log("stop");
    };
}])

.controller( 'leftCtl',['$scope','$http',function($scope,$http){
    // function go($scope,k){
    //         $http.post('http://192.168.31.11/',{k:k},function(){});
    // };
    function go($scope,message) {
        $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        $http({
            url: 'http://192.168.31.11/',
            method: "post",
            data: {"k":message}
        })
        .then(function(response) {
          console.log("ok")
                // success
        },
        function(response) { // optional
          console.log("error")
                // failed
        });
    };
    $scope.onTouch=function(){
      // alert("你触发了on-touch")
      console.log("touch");
      go($scope,"a");
      console.log("a");
    };
    $scope.onRelease=function(){
      console.log("relese");
      go($scope,"stop");
      console.log("stop");
    };
}])

.controller( 'rightCtl',['$scope','$http',function($scope,$http){
    // function go($scope,k){
    //         $http.post('http://192.168.31.11/',{k:k},function(){});
    // };
    function go($scope,message) {
        $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        $http({
            url: 'http://192.168.31.11/',
            method: "post",
            data: {"k":message}
        })
        .then(function(response) {
          console.log("ok")
                // success
        },
        function(response) { // optional
          console.log("error")
                // failed
        });
    };
    $scope.onTouch=function(){
      // alert("你触发了on-touch")
      console.log("touch");
      go($scope,"d");
      console.log("d");
    };
    $scope.onRelease=function(){
      console.log("relese");
      go($scope,"stop");
      console.log("stop");
    };
}])

.controller( 'stopCtl',['$scope','$http',function($scope,$http){
    // function go($scope,k){
    //         $http.post('http://192.168.31.11/',{k:k},function(){});
    // };
    function go($scope,message) {
        $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        $http({
            url: 'http://192.168.31.11/',
            method: "post",
            data: {"k":message}
        })
        .then(function(response) {
          console.log("ok")
                // success
        },
        function(response) { // optional
          console.log("error")
                // failed
        });
    };
    $scope.onTouch=function(){
      console.log("relese");
      go($scope,"stop");
      console.log("stop");
    };
}])

.controller( 'toggleAuto',['$scope','$http',function($scope,$http){
    // function go($scope,k){
    //         $http.post('http://192.168.31.11/',{k:k},function(){});
    // };
    function go($scope,message) {
        $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        $http({
            url: 'http://192.168.31.11/',
            method: "post",
            data: {"k":message}
        })
        .then(function(response) {
          console.log("ok")
                // success
        },
        function(response) { // optional
          console.log("error")
                // failed
        });
    };
    $scope.value = false;
    console.log($scope.value);
    $scope.toggleChange = function() {
      console.log($scope.value);
      if ($scope.value == true){
          console.log("start");
          $scope.value = true;
          console.log("start");
          go($scope,"auto");
          console.log("Auto");
        } else {
          $scope.value = false;
          console.log("Autosop");
          go($scope, "stop");
          console.log("Stop");
        };
    };
}])
