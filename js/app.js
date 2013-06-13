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
    {"id": "1",  "title": "asdf", "imageUrl": "images/chapeuzinho.png", "livroUrl": "book.html"},
    {"id": "2",  "title": "asdf", "imageUrl": "images/fabula.png",      "livroUrl": "book.html"},
    {"id": "3",  "title": "asdf", "imageUrl": "images/fabula1.png",     "livroUrl": "book.html"},
    {"id": "4",  "title": "asdf", "imageUrl": "images/gansa.png",       "livroUrl": "book.html"},
    {"id": "5",  "title": "asdf", "imageUrl": "images/raposa.png",      "livroUrl": "book.html"},

    {"id": "6",  "title": "asdf", "imageUrl": "images/chapeuzinho.png", "livroUrl": "book.html"},
    {"id": "7",  "title": "asdf", "imageUrl": "images/fabula.png",      "livroUrl": "book.html"},
    {"id": "8",  "title": "asdf", "imageUrl": "images/fabula1.png",     "livroUrl": "book.html"},
    {"id": "9",  "title": "asdf", "imageUrl": "images/gansa.png",       "livroUrl": "book.html"},
    {"id": "10", "title": "asdf", "imageUrl": "images/raposa.png",      "livroUrl": "book.html"},

    {"id": "11", "title": "asdf", "imageUrl": "images/chapeuzinho.png", "livroUrl": "book.html"},
    {"id": "12", "title": "asdf", "imageUrl": "images/fabula.png",      "livroUrl": "book.html"},
    {"id": "13", "title": "asdf", "imageUrl": "images/fabula1.png",     "livroUrl": "book.html"},
    {"id": "14", "title": "asdf", "imageUrl": "images/gansa.png",       "livroUrl": "book.html"},
    {"id": "15", "title": "asdf", "imageUrl": "images/raposa.png",      "livroUrl": "book.html"},
    {"id": "16", "title": "asdf", "imageUrl": "images/chapeuzinho.png", "livroUrl": "book.html"}
  ];
}
