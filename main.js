
const btn = document.querySelector('#btn')
const yey = document.querySelectorAll('#icon');
const duck = document.querySelectorAll('.duck');
const Np = document.querySelectorAll('#Np');
const form = document.getElementById('form')
const polis = document.getElementById('Polis');
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+([a-z]+)?$/i;

function Validatetrue(){
     Nameuser();
     lastName();
     emailConfirm();
     Setpassword();
     Confirmpassword();
     politic();

     // Verificar se todos os campos estão validados corretamente
     for (let i = 0; i < Np.length; i++) {
        if (Np[i].style.display === 'flex') {
            return false; // Se algum campo estiver inválido, retorna false
        }
    }
    return true; // Se todos os campos estiverem válidos, retorna true
}

form.addEventListener('submit', (event) => {
    // Prevenir a ação padrão do formulário
    event.preventDefault();

    // Verificar se todos os campos estão validados corretamente
    if (Validatetrue() && polis.checked) {
        // Se todos os campos estiverem validados, enviar o formulário
        form.submit();
        console.log('Formulário enviado com sucesso!');
        
        
    } else {
        // Se houver algum campo com erro, não enviar o formulário
        console.log('Por favor, preencha todos os campos corretamente.');
    }
});


/*  reponsavel por trocar o icon */ 
yey.forEach((yse)=>{
    /*  reponsavel por trocar o icon */ 
    yse.addEventListener('click', ()=>{
        
       if(yse.classList.contains('fa-eye-slash')){
        yse.classList.remove('fa-eye-slash')
        yse.classList.add('fa-eye')
        alter(3);
        alter(4);
        
       }else{
        yse.classList.add('fa-eye-slash')
        yse.classList.remove('fa-eye')
        alter(3);
        alter(4);  
       }

     /*Alterar o input */
    function alter(index){
        if(yse.classList.contains('fa-eye')){
            duck[index].type = 'text';
        }else{
            duck[index].type = 'password';
        }
    }   

     })
}) 
 
/* funçao resposavel por chama os erros */ 
function setError(index){
    Np[index].style.display = 'flex';
    duck[index].style.border = '2px solid red';
 }
 /* funçao resposavel por dar validação */ 
function validate(index){
    duck[index].style.border = '2px solid #3a0361';
    
    Np[index].style.display = 'none';
}      

/* Termos de politica */
function politic(){
    if(polis.checked){
        Np[5].style.display = 'none';
    }else{
        Np[5].style.display = 'flex';
    }
}
/* Responsavel por setar as funções */
function Nameuser(){
    
    if(duck[0].value.length <= 0 ){
        setError(0);
       
    }else{
        validate(0);
       
    }
}
function lastName(){
    if(duck[1].value.length <= 0 ){
      
        setError(1);
    }else{
      
        validate(1);
    }
}
function emailConfirm(){

    if(!emailRegex.test(duck[2].value)){
     
      setError(2)
       
    }else{
      validate(2);
    }
}
function Setpassword(){
    if(duck[3].value.length <= 0 ){
      
        
        setError(3);
    }else{
      
        validate(3);
    }
}
function Confirmpassword(){
    if(duck[4].value.length <= 0 || duck[4].value !== duck[3].value){
        setError(4);
      
    }else{
     
        validate(4);
    }
}
