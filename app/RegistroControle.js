class RegistroControle {

  constructor() {

    let $ = document.querySelector.bind(document);

    this._inputDescricao = $('#descricao')
    this._inputValor = $('#valor');
    this._listaRegistro = new ListaRegistro();

    this._registroView = new RegistroView($('#registroView'));
    this._registroView.update(this._listaRegistro);
  }

  adiciona(event) {

    event.preventDefault();
    this._listaRegistro.adiciona(this._criaRegistro());
    this._registroView.update(this._listaRegistro);
    this._limpaFormulario();
  }
  _criaRegistro() {

    return new Registro(
      this._inputDescricao.value,
      this._inputValor.value);

  }

  _limpaFormulario() {

    this._inputDescricao.value = '';
    this._inputValor.value = '';
    this._inputDescricao.focus();
  }
}