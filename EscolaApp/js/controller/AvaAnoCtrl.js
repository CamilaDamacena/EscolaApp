var avaliacoesPorAnoCtrl = function ($scope, escolaApi, $mdToast) {

    $scope.avaliacoesPorAno = {}; //jason

    $scope.avaliacoesPorAno = function (codEscola, ano) {
        escolaApi.getAvaliacoesPorAno(codEscola, ano)
            .then(function (response) {
                var toast = $mdToast.simple()
                    .textContent('As avaliações foram listadas abaixo.')
                    .position('top right')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-success');
                $mdToast.show(toast);

                $scope.avaliacoesPorAno = response.data;
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
escolaApp.controller("AvaliacoesPorAnoCtrl", avaliacoesPorAnoCtrl);
