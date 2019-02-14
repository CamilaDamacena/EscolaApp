
// Factory - API
var escolaApi = function ($http) { //Estrutura básica de um factory

    var _getEscolas = function (quantidadeDeItens) {
        return $http.get(baseUrl + "/rest/escolas?quantidadeDeItens=" + quantidadeDeItens);
    }; //retorna uma função http, base url + endpoints

    var _getPesquisarEscola = function (codEscola) {
        return $http.get(baseUrl + "/rest/escolas/" + codEscola);
    };
    
    var _getEscolasNome = function (nomeDaEscola) {
        return $http.get(baseUrl + "/rest/escolas?nome=" + nomeDaEscola);
    };

    var _getAvaliacoesPorAno = function (codEscola, ano) {
        return $http.get(baseUrl + "/rest/escolas/" + codEscola + "/avaliacoes/ano/" + ano);
    };

    var _getAvaliacoesEscola = function (codEscola) {
        return $http.get(baseUrl + "/rest/escolas/" + codEscola + "/avaliacoes");
    };

    var _getAvaliacoesPorTipo = function (codEscola, tipo) {
        return $http.get(baseUrl + "/rest/escolas/" + codEscola + "/avaliacoes/tipo/" + tipo);
    };

    var _getMediaAvaliacoes = function (codEscola) {
        return $http.get(baseUrl + "/rest/escolas/" + codEscola + "/avaliacoes/media");
    };
    
    var _getDetalharMediaAvaliacaoPorAno = function(codEscola, ano){
        return $http.get(baseUrl + "/rest/escolas/" + codEscola + "/avaliacoes/ano/" + ano + "/media");
    };
    
    var _getDetalharAvaliacaoDoAnoDaEscolaPorTipo = function(codEscola, ano, tipo){
        return $http.get(baseUrl + "/rest/escolas/" + codEscola + "/avaliacoes/ano/" + ano + "/tipo/" + tipo);
    }
    


    return {
        getEscolas: _getEscolas,
        getPesquisarEscola: _getPesquisarEscola,
        getEscolasNome: _getEscolasNome,
        getAvaliacoesPorAno: _getAvaliacoesPorAno,
        getAvaliacoesEscola: _getAvaliacoesEscola,
        getAvaliacoesPorTipo: _getAvaliacoesPorTipo,
        getMediaAvaliacoes: _getMediaAvaliacoes,
        getDetalharMediaAvaliacaoPorAno: _getDetalharMediaAvaliacaoPorAno,
        getDetalharAvaliacaoDoAnoDaEscolaPorTipo: _getDetalharAvaliacaoDoAnoDaEscolaPorTipo
        
    
    };
}


// factory responsável por se comunicar com o servidor;
escolaApp.factory("escolaApi", escolaApi);
