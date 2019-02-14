var avaliacoesPorTipoCtrl = function ($scope, escolaApi, $mdToast) {

    $scope.avaliacoesPorTipo = {}; //jason

    $scope.avaliacoesPorTipo = function (codEscola, tipo) {
        escolaApi.getAvaliacoesPorTipo(codEscola, tipo)
            .then(function (response) {
                var toast = $mdToast.simple()
                    .textContent('As avaliações foram listadas abaixo.')
                    .position('top right')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-success');
                $mdToast.show(toast);

                $scope.avaliacoesPorTipo = response.data;
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
escolaApp.controller("AvaliacoesPorTipoCtrl", avaliacoesPorTipoCtrl);
