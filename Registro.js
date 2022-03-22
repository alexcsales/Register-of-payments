class Registro {

  constructor(descricao, valor) {
    this._descricao = descricao;
    this._valor = valor;
  }

  get descricao() {

    return this._descricao;
  }

  get valor() {
    return this._valor;
  }

  get valorTotal() {
    return this._valor;
  }

}