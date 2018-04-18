// Faça seu exercício neste arquivo


// Alguns elementos importantes na página (index.html):
// #rolar: Botão rolar
//	 - você deve atribuir um handler de evento a ele para fazer o cálculo da rolagem dos dados
// #resultado: Elemento cujo conteúdo deve ser uma string com os resultados
//	 - você deve definir seu conteúdo (.innerHTML) com a string de resultados
// #recipienteResultados: "Container" do elemento dos resultados:
//	 - você deve torná-lo visível removendo a classe "oculto" dele
// .quantidade: todos os input[type=number] com a quantidade de dados a serem rolados
// #quantidadeD{4,6,8,10,12,20}: um ID para cada input[type=number] com a quantidade

const ids = [4,6,8,10,12,20];

let botaoRolar = document.querySelector('#rolar');

botaoRolar.addEventListener('click', function(){
    /* faz recipiente do resultado aparecer */
    let recipienteResultados = document.querySelector('#recipienteResultados');
    recipienteResultados.classList.remove('oculto');

    /* declara resultado */
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    let soma = 0;

    /* coleta qtde de dados selecionados */
    for (let id of ids){
        let qtdeDados = document.querySelector('#quantidadeD'+id).value;
        if(qtdeDados != 0){
            for(let i=0; i < qtdeDados; i++){
                let rand = Math.ceil(Math.random() * id);
                soma += rand;
                resultado.innerHTML += rand;
                if((i+1) != qtdeDados || id != ids[ids.length-1]){
                   resultado.innerHTML += ' + ';
                }
            }
        }
    }

    resultado.innerHMTL += ' = ' + soma;


});
