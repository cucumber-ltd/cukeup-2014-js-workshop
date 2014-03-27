function CheckoutController($scope) {
  var cucumbers = { quantity: 1 };

  $scope.cucumbers = cucumbers;
  $scope.total = 0;

  $scope.scanCucumber = function () {
    throw new Error('todo');
  };
}
