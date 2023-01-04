
function buscaEndereco(){
    let cep = document.getElementById('cep').value;

    if (cep == ''){
        alert('Preencha corretamente os dados!!!')
    } else {
        let logradouro = document.getElementById('logradouro');
        let localidade = document.getElementById('localidade');
        let bairro = document.getElementById('bairro');
        let uf = document.getElementById('uf');
        let ddd = document.getElementById('ddd');
    
        let loading = document.getElementById('loading');
        let box_dados = document.getElementById('box-dados');
        let main = document.getElementById('main');
        main.style.justifyContent = 'center';
    
        let url = `https://viacep.com.br/ws/${cep}/json/`
    
        let ajax = new  XMLHttpRequest();
    
        ajax.open('GET', url); // DEFINE OS PARAMETROS PARA A REQUISICAO
        ajax.send(); // ENVIA A REQUISICAO AJAX
    
    
        // ARROW FUNCTION PARA VERIFICAR O ESTADO E STATUS DA REQUISICAO
        ajax.onreadystatechange = () => {
    
            // SE A REQUISICAO FOR BEM SUCEDIDA ENTAO EXECUTA
            if (ajax.readyState == 4 && ajax.status == 200){
    
            // FORMATA OS DADOS PARA A UTILIZACAO
    
                let dados = ajax.responseText;
                let dadosOBJ = JSON.parse(dados);
    
                logradouro.value = dadosOBJ['logradouro'];
                localidade.value = dadosOBJ['localidade'];
                bairro.value = dadosOBJ['bairro'];
                uf.value = dadosOBJ['uf'];
                ddd.value = dadosOBJ['ddd'];
    
                main.style.justifyContent = 'flex-start';
                loading.style.display = 'none';
                box_dados.style.display = 'block';
            } else {
                alert("Falha ao buscar endereço - ERRO: " + ajax.status);
                location.reload();
            }
        }        
    }


}