function Login(){

  let senha = document.getElementById('senha').value;
  let user = document.getElementById('user').value;

  if ( user == 'mimi' && senha == 'mimigay'){

    alert('Bem vinda Mimi linda.');

    window.location.replace('eu-amo-a-maria.html')

  }

  else{
    alert('vc não o meu amor Mimi.')
  }



}