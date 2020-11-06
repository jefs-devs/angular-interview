class HomeCtrl {
  constructor($scope, HomeService) {
    "ngInject";
   
    $scope.name='Contacts';
    $scope.contacts = HomeService.list();
    $scope.showModal = false;
    $scope.contact = {};

    $scope.addRecord = function() {
      $scope.contact = {};
      $scope.showModal = true;
      $scope.modalTitle = 'Add Contact';
    };

    $scope.saveContact = function() {
      HomeService.save($scope.contact);
      alert(HomeService.alertTxt);
      $scope.contact = {};
      $scope.showModal = false;
    };

    $scope.delete = function(id) {
      HomeService.delete(id);
      alert(HomeService.alertTxt);
      if ($scope.contact.id == id) $scope.contact = {};
    };
    $scope.edit = function(id) {
      $scope.contact = angular.copy(HomeService.get(id));
      $scope.showModal = true;
    };
    $scope.closeModal = function(id) {
      $scope.showModal = false;
    };

  }
}

export default HomeCtrl;
