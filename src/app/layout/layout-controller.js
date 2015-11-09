(function () {

    'use strict';

    var layoutController = function ($rootScope, locale, thirukkuralsUtil) {

        var self = this;

        var init = function(){

            // todo: find value from cookie and set it
            //locale.setLocale('tamil');
            setLanguage('tamil');
        };

        self.AllowedLanguages = [
            {code: 'tamil', value: 'Tamil'},
            {code: 'english', value: 'English & Tamil'},
            //{ code: 'englishTamil', value: 'English & Tamil' }
        ];

        self.SetLocale = function (code) {
            //locale.setLocale(code);
            setLanguage(code);
            thirukkuralsUtil.Log('language changed: ' + code);
        };

        self.IsTamil = function(){
            return self.LocaleCode == 'tamil';
        };

        self.IsActiveMenu = function(menu){
            //return $rootScope.$state.current.name === menu ? "active" : "";
            //return menu;
            //return $rootScope.$state.$current.name;
            //return $rootScope.$state.$current.name === menu ? "active" : "";

            if($rootScope.$state.$current.name == menu)
            {
                return "active";
            }

            return "";
        };

        self.ActiveMenu = function(){
            //return $rootScope.$state.current.name === menu ? "active" : "";
            //return menu;
            return $rootScope.$state.$current.name;/**/
            //return $rootScope.$state.$current.name === menu ? "active" : "";


        };

        function setLanguage(code){
            locale.setLocale(code);
            self.LocaleCode = code;
        };

        init();
    };

    angular.module('thirukkuralApp').controller('layoutController', layoutController);
    layoutController.$inject = ['$rootScope', 'locale', 'thirukkuralsUtil'];

})();