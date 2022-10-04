// Captação das contantes com itens da area de formulários
const InsForm = document.querySelector('.form_inscricao');
const nome = document.querySelector('.full-name');
const email = document.querySelector('.email-address');
const btn = document.querySelector('.submit-form');
const not_mail = document.querySelector('.not-mail');
const not_name = document.querySelector('.not-name');
const invalid_mail = document.querySelector('.invalid-mail');
const inscricao = document.querySelector('.inscricao')
const agradecimento = document.querySelector('.agradecimento');
const leads = document.querySelector('#texto_leads');

// Função para validar o e-mail
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Ao clicar do botão o conteudo do formulario é adicionado ao firebase
btn.addEventListener("click", (e) => {
    e.preventDefault();
    if(!validateEmail(email.value)||!nome.value||!email.value){//testes para verifcar os dados
        if(!validateEmail(email.value)){
            invalid_mail.style.display = "flex";
        }
        if(!nome.value){
            not_name.style.display = "flex";
        }
        if(!email.value){
            not_mail.style.display = "flex";
            invalid_mail.style.display = "none";
        }
        if(validateEmail(email.value)){
            invalid_mail.style.display = "none";
        }
        if(nome.value){
            not_name.style.display = "none";
        }
        if(email.value){
            not_mail.style.display = "none";
        }
    }else{
        db.collection("contact").doc().set({//acrescentando os dados ao firebase
            data: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
            fullname: nome.value,
            mail: email.value,
        }).then(() => {
            InsForm.reset();
            inscricao.style.display = "none";
            agradecimento.style.display = "flex";
            invalid_mail.style.display = "none";
            not_name.style.display = "none";
            not_mail.style.display = "none";
        });
        
    }
    
});


//função do botão de "criar novo usuário"
function new_user(){
    inscricao.style.display = "flex";
    agradecimento.style.display = "none";
}

      
