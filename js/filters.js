var searchFilters = angular.module('searchFilters', []);

searchFilters.filter('searchFilter', function ($filter) {
    return function (items, searchfilter) {
        var isSearchFilterEmpty = true;
        //searchfilter darf nicht leer sein
        angular.forEach(searchfilter, function (searchstring) {
            if (searchstring != null && searchstring != "") {
                isSearchFilterEmpty = false;
            }
        });

        if (!isSearchFilterEmpty) {
            var result = [];

            angular.forEach(items, function (item) {
                var isFound = false;
                angular.forEach(item, function (term, key) {
                    if (term != null && !isFound) {
                        term = term.toLowerCase();
                        angular.forEach(searchfilter, function (searchstring) {
                            searchstring = searchstring.toLowerCase();
                            if (searchstring != "" && term.indexOf(searchstring) != -1 && !isFound) {
                                result.push(item);
                                isFound = true;
                                // console.log(key,term);
                            }
                        });
                    }
                });
            });
            return result;
        } else {
            return items;
        }
    }
});