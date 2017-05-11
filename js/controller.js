app.controller("newctrl", function ($scope, newfactory) {
    $scope.msg = "Posts";
    var url = "../temp.json";
    $scope.viewComments = false;
    $scope.getpost = function () {
        /*var promise = newfactory.getPostFromServer(url);
        promise.then(function (data) {
            $scope.serverdata = data.data;
        }, function (error) {
            $scope.error = error;
        });*/
        $scope.post = {};
        $scope.post.poster = "Aakash Rastogi";
        $scope.post.postContent = "Hi this is my first post. Lorem Ipsum can't create the effect that I can create. I am a motherfuckin starboy!!";
    }
    $scope.toggleViewComments = function () {
        if ($scope.viewComments === true) {
            $scope.viewComments = false;
        }
        else if ($scope.viewComments === false) {
            $scope.viewComments = true;
        }
    }
    $scope.getpost();
});