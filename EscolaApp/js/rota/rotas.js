//Configuração das rotas.----------------------------------------------------------------------------//
escolaApp.config(function ($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    var homeState = { //Para cada página terá um conjunto desses, faz o mapeamento aqui;
        url: '/home',
        templateUrl: 'home.html'
    };

    var listarEscolaState = { //Para cada página terá um conjunto desses, faz o mapeamento aqui;
        url: '/escolas',
        templateUrl: 'listarEscola.html',
        controller: 'ListarEscolaCtrl'
    };

    var pesquisarEscolaState = {
        url: '/escolas/:codEscola',
        templateUrl: 'pesquisarEscola.html',
        controller: 'PesquisarEscolaCtrl'
    };
    
    var pesquisarEscolasNomeState = {
        url: '/escolaspornome',
        templateUrl: 'pesquisarEscolasNome.html',
        controller: 'PesquisarEscolasNomeCtrl'
    };


    var avaliacoesPorAnoState = {
        url: '/avaliacoesPorAno',
        templateUrl: 'listarAvaliacoesAno.html',
        controller: 'AvaliacoesPorAnoCtrl'
    };

    var avaliacoesEscolaState = {
        url: '/avaliacoesEscola/:codEscola',
        templateUrl: 'listarAvaliacoesEscola.html',
        controller: 'AvaliacoesEscolaCtrl'
    }

    var avaliacoesPorTipoState = {
        url: '/avaliacoesPorTipo',
        templateUrl: 'avaliacoesTipo.html',
        controller: 'AvaliacoesPorTipoCtrl'
    }

    var tipoAvaliacaoState = {
        url: '/tipoAvaliacao',
        templateUrl: 'tiposAvaliacao.html',
        controller: 'TipoAvaliacaoCtrl'
    }

    var mediaAvaliacoesState = {
        url: '/mediaAvaliacoes',
        templateUrl: 'mediaAvaliacao.html',
        controller: 'MediaAvaliacoesCtrl'
    }
    
    var detalharMediaAvaliacaoPorAnoState = {
        url: "/detalharMediaAvaliacaoPorAno",
        templateUrl: "detalharMediaAvaPorAno.html",
        controller: "DetalharMediaAvaliacaoPorAnoCtrl"
    };
    
    var detalharAvaliacaoPorAnoPorTipoState ={
        url: "/detalharAvaliacaoPorAnoPorTipo",
        templateUrl: "detalharAvaliacaoPorAnoPorTipo.html",
        controller: "DetalharAvaDoAnoDaEscPorTipoCtrl"
    }


    $stateProvider.state('home', homeState);
    $stateProvider.state('listar', listarEscolaState);
    $stateProvider.state('pesquisar', pesquisarEscolaState);
    $stateProvider.state('pesquisarEscolasNome', pesquisarEscolasNomeState);
    $stateProvider.state('avaliacoesPorAno', avaliacoesPorAnoState);
    $stateProvider.state('avaliacoesEscola', avaliacoesEscolaState);
    $stateProvider.state('avaliacoesPorTipo', avaliacoesPorTipoState);
    $stateProvider.state('tipoAvaliacao', tipoAvaliacaoState);
    $stateProvider.state('mediaAvaliacoes', mediaAvaliacoesState);
    $stateProvider.state('detalharMediaAvaliacaoPorAno', detalharMediaAvaliacaoPorAnoState);
    $stateProvider.state('detalharAvaliacaoPorAnoPorTipo', detalharAvaliacaoPorAnoPorTipoState);
    
  
});