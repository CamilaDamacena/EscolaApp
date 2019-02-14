var tipoAvaliacaoEscolaApi = function ($http) {
    var _getTipoAvaliacao = function () {
        return $http.get(baseUrl + "/rest/tiposavaliacao");
    };

    return {
        getTipoAvaliacao: _getTipoAvaliacao
    };

}

escolaApp.factory("tipoAvaliacaoEscolaApi", tipoAvaliacaoEscolaApi);