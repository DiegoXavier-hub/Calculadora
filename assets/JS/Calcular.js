onResultado = false
function calcular(tipo, valor){

    function atribuirValor(valorAdicionado){document.getElementById("resultado").value += valorAdicionado}

    if(onResultado) //limpa o visor depois que mostra o resultado da ultima operação e aperta algum botão
    {
        document.getElementById("resultado").value = ''
        onResultado = false
    }

    if(tipo === 'acao')
    {
        switch(valor)
        {
            case 'C':
            //limpar o resultado
            document.getElementById("resultado").value = ''
            break;
            case '+':
                //Soma
                atribuirValor(valor)
                break;  
            case '-':
                //Subtração
                atribuirValor(valor)
                break;  
            case '*':
                //Multiplicação
                atribuirValor(valor)
                break;  
            case '/':
                //Divisão
                atribuirValor(valor)
                break;  
            case '.':
                // ponto
                atribuirValor(valor)
                break;  
            case '=':
            //resultado
            var valor_campo = document.getElementById("resultado").value
            document.getElementById("resultado").value = ''
            atribuirValor(eval(valor_campo))
            onResultado = true
            break;
        }
    }
    else if(tipo === 'valor')
    {
        atribuirValor(valor)
    }
}