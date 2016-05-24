
bilbonAppServices
    .factory('UserLocalStorage', userLocalStorage);

/**
* @desc get and set user's data
*/
function userLocalStorage(localStorageService){
    return {
        getUserId: function() {
          var userData = localStorageService.get('userData');
          if(userData != null) return JSON.parse(userData).currentUser.userId;
          else userData;
        },
        getUserName: function() {
          var userData = localStorageService.get('userData');
          if(userData != null) return JSON.parse(userData).currentUser.name;
          else userData;
        },
        setUserData: function(userData) {
          return localStorageService.set('userData', JSON.stringify(userData));
        },
        removeUserData: function() {
          return localStorageService.remove('userData');
        }
    };
};