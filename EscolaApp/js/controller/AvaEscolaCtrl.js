var avaliacoesEscolaCtrl = function ($scope, $stateParams, escolaApi, $mdToast) {

    $scope.avaliacoesEscola = {}; //jason
    $scope.codEscola= $stateParams.codEscola;

    $scope.avaliacoesEscola = function (codEscola) {
        escolaApi.getAvaliacoesEscola(codEscola)
            .then(function (response) {
                var toast = $mdToast.simple()
                    .textContent('As avaliações foram listadas abaixo.')
                    .position('top right')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-success');
                $mdToast.show(toast);

                $scope.avaliacoesEscola = response.data;
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

escolaApp.controller("AvaliacoesEscolaCtrl", avaliacoesEscolaCtrl);
