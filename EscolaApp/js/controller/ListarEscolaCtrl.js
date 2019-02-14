// Controllers pega as informações para listar -------------------------------------------------
var listarEscolaCtrl = function ($scope, escolaApi, $mdToast) {

    $scope.escolas = []; //mudar nos demais controller's;
    $scope.quantidades = [10, 20, 30, 40, 50, 100];

    $scope.listarEscola = function (quantidade) { //Essa função está no button Aqui dentro é o momentoem que pega as informações
        escolaApi.getEscolas(quantidade) //mudar o escolaApi nos demais controller's;
            .then(function (response) { //Garante que a requisão vai e a resposta vem.
              var toast = $mdToast.simple()
                    .textContent('As escolas foram listadas abaixo.')
                    .position('top right')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-success');
                $mdToast.show(toast);

                $scope.escolas = response.data;
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



escolaApp.controller("ListarEscolaCtrl", listarEscolaCtrl);
