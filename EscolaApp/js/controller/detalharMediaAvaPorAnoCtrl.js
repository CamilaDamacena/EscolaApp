var detalharMediaAvaliacaoPorAnoCtrl = function($scope, $mdToast, escolaApi) {
    
    $scope.mediaAvaliacao = {};

    $scope.detalharMediaAvaliacaoPorAno = function(codEscola, ano) {
        escolaApi.getDetalharMediaAvaliacaoPorAno(codEscola, ano)
              .then(function (response) {
                // Toast
                var toast = $mdToast.simple()
                    .textContent('O tipo da avaliação foi listada abaixo.')
                    .position('top right')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-success');
                $mdToast.show(toast);

                $scope.mediaAvaliacao = response.data;
              })
                .catch(function (error) {
                    var toast = $mdToast.simple()
                        .textContent('Algum problema ocorreu na solicitação dos dados da avaliacao.')
                        .position('top right')
                        .action('OK')
                        .hideDelay(6000)
                        .toastClass('my-error');
                    $mdToast.show(toast);

                    console.error(error);
              });
    }
};

escolaApp.controller("DetalharMediaAvaliacaoPorAnoCtrl", detalharMediaAvaliacaoPorAnoCtrl);