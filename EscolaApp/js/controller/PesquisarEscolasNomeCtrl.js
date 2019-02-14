var pesquisarEscolasNomeCtrl = function ($scope,escolaApi, $mdToast) {

    $scope.nomeDaEscolas = []; //jason
    
    $scope.pesquisarEscolasNome = function (nomeDaEscola) {
        
        escolaApi.getEscolasNome(nomeDaEscola)
           .then(function (response) { //Garante que a requisão vai e a resposta vem.
                var toast = $mdToast.simple()
                    .textContent('As escolas foram listadas abaixo.')
                    .position('top right')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-success');
                $mdToast.show(toast);

                $scope.nomeDaEscolas = response.data;
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

escolaApp.controller("PesquisarEscolasNomeCtrl", pesquisarEscolasNomeCtrl);

