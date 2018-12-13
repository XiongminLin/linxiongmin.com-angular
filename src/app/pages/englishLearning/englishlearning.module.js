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
          // controller: 'EnglishLearningCtrl',
          sidebarMeta: {
            icon: 'icon ion-android-globe',
            order: 800,
          },
          // inject到VocabChartCtrl有问题，暂不resolve
          // resolve: {
          //   vocabs: ['$http',
          //     function($http){
          //       var response = $http.get('http://localhost:8080/english-vocabulary');
          //       return response;
          //     }
          //   ]
          // },
        });

  }

})();