function CheckoutController($scope, $http) {
  var backEnd = new BackEnd();
  var cucumbers = { quantity: 1 };

  $scope.cucumbers = cucumbers;

  displayTotal();

  $scope.scanCucumber = function () {
    backEnd.scanCucumber(displayTotal);
  };

  function displayTotal() {
    backEnd.getBasket(function (basket) {
      $scope.total = basket.total;
    });
  }

  function BackEnd() {
    var self = {
      getBasket: function (callback) {
        $http.get('/basket')
        .success(callback);
      },

      scanCucumber: function (callback) {
        $http.post('/basket/cucumber', { quantity: cucumbers.quantity })
        .success(callback);
      }
    };

    return self;
  }
}
