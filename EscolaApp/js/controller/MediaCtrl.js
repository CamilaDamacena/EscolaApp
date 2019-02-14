var mediaAvaliacoesCtrl = function ($scope, escolaApi, $mdToast) {

    $scope.mediaAvaliacoes = {}; //jason

    $scope.mediaAvaliacoes = function (codEscola) {
        escolaApi.getMediaAvaliacoes(codEscola)
            .then(function (response) {
                var toast = $mdToast.simple()
                    .textContent('As médias das escolas foram listadas abaixo.')
                    .position('top right')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-success');
                $mdToast.show(toast);

                $scope.mediaAvaliacoes = response.data;
            })
            .catch(function (error) {
                var toast = $mdToast.simple()
                    .textContent('Algum problema ocorreu na solicitação dos dados das escolas.')
                    .position('top right')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-error');
                $mdToast.show(toast);

                console.error(error);
            });
    }
};

escolaApp.controller("MediaAvaliacoesCtrl", mediaAvaliacoesCtrl);