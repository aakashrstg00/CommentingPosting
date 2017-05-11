app.factory("newfactory", function ($http, $q) {
    return {
        getPostFromServer: function (url) {
            var pr = $q.defer();
            $http.get(url).then(function (data) {
                pr.resolve(data);
            }, function (error) {
                pr.reject(error);
            });
            return pr.promise;
        }
    };
});