// Write your solution in this file!

var customerName = "bob";

// modifies upperCaseCustomerName
function upperCaseCustomerName(){
customerName = customerName.toUpperCase();
}

// setBestCustomer
function setBestCustomer(){
bestCustomer = "not bob";
}

// overwrites the best customer
function overwriteBestCustomer(newBestCustomer){
bestCustomer = newBestCustomer;
}

// delare a constant called leasFavoriteCustomer in global scope
const leasFavoriteCustomer = "somebody";

// unsuccessfully tries to reasign the leest favorite customer
function changeLeastFavoriteCustomer(){
    leasFavoriteCustomer ="nobody";
}