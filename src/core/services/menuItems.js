define(['appModule'], function () {
    appModule.provider('menuItems', function () {
        var menuItems = [];

        var self = this;

        self.$get = function () {
            return menuItems;
        }

        self.add = function (item) {
            menuItems.push(item);

            return self;
        }
    })
})