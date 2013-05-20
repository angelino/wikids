var wikidsApp = angular.module('wikidsApp', []);

wikidsApp.controller('BooksCtrl', function ($scope) {
  $scope.orderProp = "title";
  // $scope.items = Item.query();
  $scope.books = allBooks();
});

// wikidsApp.factory('Book', [$resource, function ($resource) {
//   return $resource('/books');
// }]);

function allBooks() {
  return [
    {"id": "1", "title": "asdf", "imageUrl": "images/chapeuzinho.png"},
    {"id": "2", "title": "asdf", "imageUrl": "images/fabula.png"},
    {"id": "3", "title": "asdf", "imageUrl": "images/fabula1.png"},
    {"id": "4", "title": "asdf", "imageUrl": "images/gansa.png"},
    {"id": "5", "title": "asdf", "imageUrl": "images/raposa.png"}
  ];
}
