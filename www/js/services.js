angular.module('starter')

.service('SendCommand', function($http) {
  var LOCAL_SERVER_KEY = 'server'
  function loadServer() {
    var server = window.localStorage.getItem(LOCAL_SERVER_KEY);
    if (server) {
      return server
    } else {
      return '192.168.31.11'
    }
  };

  function storeServer(server) {
    window.localStorage.setItem(LOCAL_SERVER_KEY, server);
  };

  function go(message) {
    server = loadServer();
    var requestTime= new Date().getTime();
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    $http({
      url: 'http://' + server + '/',
      method: "post",
      data: {
        "k": message,
        "time":requestTime
      }
    })
    .then(function(response) {
        console.log("ok")
          // success
      },
      function(response) { // optional
        console.log("error")
          // failed
      });
    console.log(message + server);
  };

  return {
    'name': 'name',
    go: go,
    storeServer: storeServer,
    loadServer: loadServer,
  };
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [];
  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
