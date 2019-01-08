(function (){
'use strict';

angular.module('ShoppingListCheckoff',[])
.controller('ShoppingListToBuyController', ShoppingListToBuyController)
.controller('ShoppingListBoughtController', ShoppingListBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ShoppingListToBuyController.$inject = ['ShoppingListCheckOffService'];
function ShoppingListToBuyController(ShoppingListCheckOffService) {
  var toBuyController = this;

  toBuyController.items = ShoppingListCheckOffService.getToBuyItems();

  toBuyController.purchaseItem = function(index){
    ShoppingListCheckOffService.purchaseItem(index);
  }

}

ShoppingListBoughtController.$inject = ['ShoppingListCheckOffService'];
function ShoppingListBoughtController(ShoppingListCheckOffService) {
  var AlreadyBoughtController = this;

  AlreadyBoughtController.items = ShoppingListCheckOffService.getBoughtItems();

}

function ShoppingListCheckOffService() {
  var service = this;

  var toBuyList = [
    { name: "cookies", quantity: 10 },
    { name: "Ginger Ale", quantity: 1 },
    { name: "Sliced Bread", quantity: 2},
    { name: "Chicken meat", quantity: 5},
    { name: "Cabbage", quantity: 2},
  ];
  var boughtList = [];

  service.getToBuyItems = function() {
    return toBuyList;
  }

  service.getBoughtItems = function(){
    return boughtList;
  }

  service.purchaseItem = function(itemIndex){
    boughtList.push(toBuyList[itemIndex]);
    toBuyList.splice(itemIndex,1);

  }

}

})();
