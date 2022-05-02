let menu = document.querySelector('.button-menu');
let closeMenu = document.querySelector('#close-menu');
let openMenu = document.querySelector('.header-responsive');
let openForm = document.querySelector('#account-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let abrirConsulta = document.querySelector("#entrar-form");
let consulta = document.querySelector(".consulta");
menu.onclick = () => {
  openMenu.classList.add('active');
}

closeMenu.onclick = () => {
  openMenu.classList.remove('active');
}

openForm.onclick = () => {
  loginForm.classList.add('active');
}

formClose.onclick = () => {
  loginForm.classList.remove('active');
}


abrirConsulta.onclick = (ev) =>{
  ev.preventDefault();
  var email = document.querySelector("#email").value;
  var senha = document.querySelector("#senha").value;
  
  axios.post('https://reqres.in/api/login', {
    email: email, 
    password: senha
  })
  .then(function (response) {
    consulta.classList.add('active');
    loginForm.classList.remove('active');
  })
  .catch(function (error) {
    console.log(error);
  });
}

// Parte de consulta da API de Veiculo
 // nas linhas abaixo estou criando variaveis (let) e atribuindo a elas o que eu estou selecionando, é como se por exemplo
    // a variavel input_consultar fosse o meu campo de texto input_consultar, minha variavel Make_ID seria o elemento span 'Make_ID',...
        
    var btn_consultar = document.querySelector("#btn_consultar");

    var primeiro = document.querySelector("#paragrafo1");
    var segundo = document.querySelector("#paragrafo2");
    var terceiro = document.querySelector("#paragrafo3");
    var quarto = document.querySelector("#paragrafo4");

    async function criaElementos(){
      try{
        var query = document.querySelector('#input_consultar').value;
        let json = await axios.get("https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/" + query + "?format=json"); // aqui filtra a pesquisa
        var docs = json.data.Results;
        var pos = document.querySelector("#posicao").value;
  
        pos=parseInt(pos); // converti em numero pois estava como string

          var span1 = document.createElement('span'),
          span2 = document.createElement('span'),
          span3 = document.createElement('span'),
          span4 = document.createElement('span');

          span1.innerHTML = "Make_ID: "; // para escrever o 'Make_ID:' na tela
          span1.setAttribute("class","negrito1"); // para deixar em negrito e mexer no CSS
          span2.innerHTML = "Make_Name: ";
          span2.setAttribute("class","negrito2");
          span3.innerHTML = "Model_ID: ";
          span3.setAttribute("class","negrito3");
          span4.innerHTML = "Model_Name: ";
          span4.setAttribute("class","negrito4");

          var Make_ID = document.createElement('span'), // estou criando este elemento
              Make_Name = document.createElement('span'),
              Model_ID = document.createElement('span'),
              Model_Name = document.createElement('span');
                    
          Make_ID.setAttribute("id","Make_ID"); // para eu poder selecionar para remover depois
          Make_Name.setAttribute("id","Make_Name");
          Model_ID.setAttribute("id","Model_ID");
          Model_Name.setAttribute("id","Model_Name");

          Make_ID.innerHTML =  docs[pos].Make_ID;
          Make_Name.innerHTML = docs[pos].Make_Name;
          Model_ID.innerHTML = docs[pos].Model_ID;
          Model_Name.innerHTML = docs[pos].Model_Name;

          primeiro.appendChild(span1);
          primeiro.appendChild(Make_ID);
          segundo.appendChild(span2);
          segundo.appendChild(Make_Name);  
          terceiro.appendChild(span3);              
          terceiro.appendChild(Model_ID);    
          quarto.appendChild(span4);          
          quarto.appendChild(Model_Name);

          return 1;// se tudo deu certo
      }catch(error){
      // Validação dos campo de busca
        alert("Erro, os campos de busca de dados da API devem estar preenchidos e com valores válidos !!!");
      }
      
    }

    function removeElementos(){

        //Remove os elementos HTML
          var par1 = document.querySelector("#paragrafo1");
          var sp1 = document.querySelector("#paragrafo1 .negrito1");
          var sp2 = document.querySelector("#paragrafo1 #Make_ID");
          par1.removeChild(sp1);
          par1.removeChild(sp2);

          var par2 = document.querySelector("#paragrafo2");
          var sp1 = document.querySelector("#paragrafo2 .negrito2");
          var sp2 = document.querySelector("#paragrafo2 #Make_Name");
          par2.removeChild(sp1);
          par2.removeChild(sp2);

          var par3 = document.querySelector("#paragrafo3");
          var sp1 = document.querySelector("#paragrafo3 .negrito3");
          var sp2 = document.querySelector("#paragrafo3 #Model_ID");
          par3.removeChild(sp1);
          par3.removeChild(sp2);

          var par4 = document.querySelector("#paragrafo4");
          var sp1 = document.querySelector("#paragrafo4 .negrito4");
          var sp2 = document.querySelector("#paragrafo4 #Model_Name");
          par4.removeChild(sp1);
          par4.removeChild(sp2);
        
    }

    var contador = 0;

    btn_consultar.addEventListener('click',async()=>{
        criaElementos();
    });

    var btn_limpar = document.querySelector(".btn_limpar");
    
    btn_limpar.addEventListener('click',function(){
      removeElementos();
      document.querySelector('#input_consultar').value=""; // deixo em branco
      document.querySelector('#posicao').value="";
    });