var comicsApp = angular.module('comicsApp', ['ngResource']);

comicsApp.controller('ItemsCtrl', [$scope, 'Item', function ($scope, Item) {
  $scope.orderProp = "published_at";
  $scope.items = Item.query();
}]);

commicsApp.factory('Item', [$resource, function ($resource) {
  return $resource('/items');
}]);

function allItens() {
  return [
    {"id": "1", "description": "asdf", "editora": "marvel", "cust": "R$12,00", "imageUrl": "images/imagem1.jpg"},
    {"id": "2", "description": "fda", "editora": "dc", "cust": "R$12,00", "imageUrl": "images/imagem2.jpg"},
    {"id": "3", "description": " asdf asdf ", "editora": "marvel", "cust": "R$12,00", "imageUrl": "images/imagem3.jpg"},
    {"id": "4", "description": "aasdf ", "editora": "dc", "cust": "R$12,00", "imageUrl": "images/imagem4.jpg"},
    {"id": "5", "description": "asdf ", "editora": "punch", "cust": "R$12,00", "imageUrl": "images/imagem5.jpg"},
    {"id": "6", "description": "fdffddfdfd fdfdf", "editora": "abril", "cust": "R$12,00", "imageUrl": "images/imagem6.jpg"},
    {"id": "7", "description": "asdf fadf asdf", "editora": "abor", "cust": "R$12,00", "imageUrl": "images/imagem7.jpg"}
  ];
}