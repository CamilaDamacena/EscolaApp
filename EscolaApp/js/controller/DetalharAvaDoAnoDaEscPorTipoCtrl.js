var detalharAvaDoAnoDaEscPorTipoCtrl = function ($scope, escolaApi, $mdToast) {

    $scope.avaliacoes = []; 
    
    $scope.detalharAvaDoAnoDaEscPorTipo = function (codEscola, ano, tipo) { 
        escolaApi.getDetalharAvaliacaoDoAnoDaEscolaPorTipo(codEscola, ano, tipo) //mudar o escolaApi nos demais controller's;
            .then(function (response) { //Garante que a requisão vai e a resposta vem.
              var toast = $mdToast.simple()
                    .textContent('As avaliações da escola foram listadas abaixo.')
                    .position('top right')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-success');
                $mdToast.show(toast);

                $scope.avaliacoes = response.data;
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



escolaApp.controller("DetalharAvaDoAnoDaEscPorTipoCtrl", detalharAvaDoAnoDaEscPorTipoCtrl);
