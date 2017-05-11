app.controller("newctrl", function ($scope, newfactory) {
    $scope.my = {
        name: "Aakash"
    }
    $scope.msg = "Posts";
    $scope.viewComments = false;
    $scope.toggleViewComments = function (obj) {
        if (obj.viewComments === true) {
            obj.viewComments = false;
        }
        else
        if (obj.viewComments === false) {
            obj.viewComments = true;
        }
    }
    $scope.getPost = function () {
        var promise = newfactory.getPostFromServer(urls.getPosts);
        promise.then(function (data) {
            $scope.posts = data.data.posts;
        }, function (error) {
            $scope.error = error;
        });
    }
    $scope.postComment = function () {
        var promise = newfactory.postComment(urls.postComment);
        promise.then(function (data) {
            $scope.commentPostResult = data.data.posts;
        }, function (error) {
            $scope.error = error;
        });
        console.log("Entered post comment!");
    }
    $scope.toggleLikePost = function (obj) {
        if (obj.postLiked === true) {
            obj.postLiked = false;
            obj.postLikes.pop();
        }
        else if (obj.postLiked === false) {
            obj.postLiked = true;
            obj.postLikes.push($scope.my.name);
        }
        //newfactory.postObjToServer(urls.postPost);
    }
    $scope.deleteComment = function () {
        var promise = newfactory.deleteComment(urls.deleteComment);
        promise.then(function (data) {
            $scope.commentDeleteResult = data.data;
        }, function (error) {
            $scope.error = error;
        });
        console.log("Entered delete comment!");
    }
    $scope.getPost();
});
