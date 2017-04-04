app.controller("firstCtrl", function($scope) {
    $scope.hello = "Hello Angular!!!";
    
    $scope.tempVal = "hello";
    
    $scope.tempArra = ["Good noght", "Good morning"];
    
    $scope.addNew = function() {
        
        if ($scope.tempVal) {
            $scope.tempArra.push($scope.tempVal);
            $scope.tempVal = "";
        } else {
            //console.log("empty")
            alert("Please, Enter new text")
        }
        
    }
    
    $scope.deleteItem = function(item) {
        var index =  $scope.tempArra.indexOf(item);
        $scope.tempArra.splice(index, 1);
    }
});