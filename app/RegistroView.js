class RegistroView {

    constructor(elemento) {

        this._elemento = elemento;

    }

    _template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DESCRIÇÃO</th>
                    <th>VALOR</th>
                    
                </tr>
            </thead>
        
            <tbody>
                ${model.registro.map(r => `
                    
                    <tr>
                        <td>${r.descricao}</td>
                        <td>R$${r.valor}</td>
                    </tr>
                    
                `).join('')}                
            </tbody>
                  
            <tfoot>
                
                    <td>VALOR(total)</td>
                    <td>
                        R$${model.registro.reduce((total, r) => total + parseInt(r.valorTotal), 0.0)}
                    </td>
                
            </tfoot>
            
        </table>
        `;
    }

    update(model) {

        this._elemento.innerHTML = this._template(model);
    }
}