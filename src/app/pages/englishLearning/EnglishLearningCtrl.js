/**
 * @author Xiongmin Lin
 * created on 2018.12.12
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.englishLearning')
      .controller('EnglishLearningCtrl', EnglishLearningCtrl);

  /** @ngInject */
  function EnglishLearningCtrl($scope, baConfig, $element, layoutPaths, $http, vocabs) {

    $scope.vocabulary = angular.copy(vocabs);
    console.log(vocabs.data)

  }

})();
