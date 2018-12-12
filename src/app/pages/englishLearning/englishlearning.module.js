(function () {
  'use strict';

  angular.module('BlurAdmin.pages.englishLearning', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
  	$stateProvider
        .state('englishLearning', {
          url: '/englishLearning',
          templateUrl: 'app/pages/englishLearning/english-learning.html',
          title: 'English Learning',
          sidebarMeta: {
            icon: 'icon ion-android-globe',
            order: 800,
          },
        });

  }

})();