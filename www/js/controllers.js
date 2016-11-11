angular.module('starter')

.controller('forwardCtl', function($scope, $http, SendCommand) {

  $scope.onTouch = function() {
    SendCommand.go('w');
  };
  $scope.onRelease = function() {
    SendCommand.go("stop");
  };
})

.controller('reverseCtl',function($scope, $http, SendCommand) {

  $scope.onTouch = function() {
    SendCommand.go("s");
  };
  $scope.onRelease = function() {
    SendCommand.go("stop");
  };
})

.controller('leftCtl', function($scope, $http, SendCommand) {
  $scope.onTouch = function() {
    SendCommand.go("a");
  };
  $scope.onRelease = function() {
    SendCommand.go("stop");
  };
})

.controller('rightCtl', function($scope, $http, SendCommand) {
  $scope.onTouch = function() {
    SendCommand.go("d");
  };
  $scope.onRelease = function() {
    SendCommand.go("stop");
  };
})

.controller('stopCtl', function($scope, $http, SendCommand) {
  $scope.onTouch = function() {
    console.log("relese");
    SendCommand.go("stop");
    console.log("stop");
  };
})

.controller('toggleAuto', function($scope, $http, SendCommand) {
  $scope.value = false;
  console.log($scope.value);
  $scope.toggleChange = function() {
    console.log($scope.value);
    if ($scope.value == true) {
      console.log("start");
      $scope.value = true;
      console.log("start");
      SendCommand.go("auto");
      console.log("Auto");
    } else {
      $scope.value = false;
      console.log("Autosop");
      SendCommand.go("stop");
      console.log("Stop");
    };
  };
})

.controller('setServer', function($scope, $ionicPopup, SendCommand) {
  $scope.showPopup = function() {
    $scope.data = {};
  // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      template: '<input ng-model="data.ip">',
      title: '请输入服务器地址和端口',
      scope: $scope,
      buttons: [
        { text: '取消' },
        {
          text: '<b>保存</b>',
          type: 'button-positive',
          onTap: function(e) {
            if (!$scope.data.ip) {
              //don't allow the user to close unless he enters wifi password
              e.preventDefault();
            } else {
              return $scope.data.ip;
            }
          }
        }
      ]
    });
  myPopup.then(function(server) {
    SendCommand.storeServer(server);
  });
 };
})

.controller('refresh_control', function($scope, SendCommand, $http, $timeout){
  $scope.intervalFunction = function () {
    $timeout(function () {
      var server = SendCommand.loadServer();
      $scope.imageURL = 'http://' + server + '/video_feed';
      $scope.imageUrl = $scope.imageURL + '?' + new Date().getTime();
      $scope.intervalFunction();
    }, 100)
  };
  $scope.intervalFunction();
})
