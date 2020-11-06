class HomeCtrl {
  constructor($scope, HomeService) {
    "ngInject";
  
    $scope.contacts = HomeService.list();
    
    $scope.saveContact = function() {
      HomeService.save($scope.contact);
      alert(HomeService.alertTxt);
      $scope.contact = {};
    };

    $scope.delete = function(id) {
      myService.delete(id);
      alert(HomeService.alertTxt);
      if ($scope.contact.id == id) $scope.contact = {};
    };
    $scope.edit = function(id) {
      $scope.contact = angular.copy(HomeService.get(id));
    };
  }
}

export default HomeCtrl;
