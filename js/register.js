const form = document.querySelector('#formRegister');

form.addEventListener("submit", function(event){
    event.preventDefault();

    const emailRegister = document.querySelector('#emailRegister').value;
    const passwordRegister = document.querySelector('#passwordRegister').value;

    const erro = document.getElementById('mensagemDeErro'); 

            //mensagens de erro 
    if(!emailRegister.trim() || !passwordRegister.trim()){         
        erro.textContent = "Preencha todos os campos!"
        return; 
        };

    if(passwordRegister.trim().length <= 10){
        erro.textContent = "A senha precisa ter no mínimo 10 digitos!"
    };
    
     //busca os dados e salva na chave users, se n exisitr nada salva no array []        
     // .parse transforma objeto em array                      
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // verifica se o email ja ta salvo usando arrow function, 
    const existeUsers = users.some(user => user.email === emailRegister);

    if(existeUsers){
        erro.textContent = "Usuário já existe!"
    } else{
            users.push({
                email: emailRegister,
                senha: passwordRegister
            });
        }
    



});

