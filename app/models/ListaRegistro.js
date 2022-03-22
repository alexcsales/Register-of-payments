class ListaRegistro {

    constructor() {

        this._registro = [];
    }

    adiciona(registro) {

        this._registro.push(registro);
    }

    get registro() {

        return [].concat(this._registro);
    }
}