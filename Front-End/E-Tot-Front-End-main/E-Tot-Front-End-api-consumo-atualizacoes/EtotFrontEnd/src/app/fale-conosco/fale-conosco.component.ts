import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fale-conosco',
  templateUrl: './fale-conosco.component.html',
  styleUrls: ['./fale-conosco.component.css']
})
export class FaleConoscoComponent implements OnInit {
 
  nome      : string[]
  nomeOk    : boolean = false

  email     : string
  emailOk   : boolean = false

  assunto   : string[] 
  assuntoOk : boolean = false

  
  
  

  constructor()
  { 
    
  }

  ngOnInit() {
    window.scroll(0,0)
   
  }

 enviar()
{
  if (this.nomeOk == true && this.emailOk == true && this.assuntoOk == true)
  {
      alert("Formulário enviado com sucesso!")
  }
  else
  {
      alert("Preencha o formulário corretamente antes de enviar.")
  }
}

validaNome()
{
  const txtNome = document.getElementById('txtNome')
  if (this.nome.length < 3)
  {
    txtNome.style.color = 'red'
    txtNome.innerHTML="Nome curto."
    
  }else{
    txtNome.style.color = 'green'
    txtNome.innerHTML='Nome válido.'
    this.nomeOk = true
  }
}

  validaEmail()
{
    const txtEmail = document.getElementById('txtEmail')

    if (this.email.indexOf('@') == -1 || this.email.indexOf('.') == -1) 
    {
        txtEmail.style.color = 'red'
        txtEmail.innerHTML = "Email inválido."
        this.emailOk = false
       
    }
    else
    {
        txtEmail.innerHTML = "Email válido."
        txtEmail.style.color = 'green'
        this.emailOk = true

    }
}
  validaAssunto()
{
   const txtAssunto = document.getElementById('txtAssunto')

    if (this.assunto.length < 3)
    {
        txtAssunto.innerHTML = "Sua mensagem é muito curta."
        txtAssunto.style.color = 'red' 
        txtAssunto.style.display = 'block' 
        this.assuntoOk = false
    }else
    {
        txtAssunto.innerHTML = '' 
        this.assuntoOk = true
    }

     if (this.assunto.length>100) 
    {
        txtAssunto.innerHTML = "Sua mensagem ultrapassa o limite de 100 caracteres."
        txtAssunto.style.color = 'red' 
        txtAssunto.style.display = 'block' 
        this.assuntoOk = false
    }
    
}

}


