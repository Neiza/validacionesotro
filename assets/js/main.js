  var numero=0;
  var baseDatos=[];
window.addEventListener('load',function() {
  var enviar=document.getElementById("login");
  var nombre=document.getElementById("nombre");
  var apellido=document.getElementById("apellido");
  var edad=document.getElementById("edad");
//<input type="number" id="edad" min="1" max="150" />

//para evitar hacer para cada id su propia funcion ,
//se crea una funcion general y la asignamos a una variable
  /*nombre.onkeypress=function(e){
    var codigoTecla=e.keyCode;
    if((codigoTecla>=97 && codigoTecla<=122)||(codigoTecla>=65 && codigoTecla<=90)||codigoTecla==39 || codigoTecla==32){
      return true;
    } else{
      return false;
    }
  }
  */
//Es equivalente a lo anterior
  var soloLetras=function(e){
    var codigoTecla=e.keyCode;
    if((codigoTecla>=97 && codigoTecla<=122)||(codigoTecla>=65 && codigoTecla<=90)||codigoTecla==39 || codigoTecla==32){
      return true;
    } else{
      return false;
    }
  }

  var soloNumeros=function(e){
    var codigoNum=e.keyCode;

    if(codigoNum>=48 && codigoNum<=57&& this.value.length<2)
      {return true;
    }
    else {
      return false;
    }

  }
  nombre.onkeypress=soloLetras;
  apellido.onkeypress=soloLetras;
  edad.onkeypress=soloNumeros;
  var inputs=document.getElementsByClassName("input-registro");
  console.log(inputs);
  /*
  inputs[0].onblur=function(e){
    if(this.value.trim().length==0){
      this.value="";
      this.nextElementSibling.nextElementSibling.innerText="*Este campo es obligatorio";
    }
  }
*/
  var validacionInput=function(){
    if(this.value.trim().length==0){
      this.value="";
      this.nextElementSibling.nextElementSibling.innerText="*Este campo es obligatorio";
    }
    else{
      this.nextElementSibling.nextElementSibling.innerText="";
    }
    var arrDato=this.value.split(" ");
    var mensaje="";
    console.log(arrDato);
    arrDato.forEach(function(e){
      var datoCorrecto=e.charAt(0).toUpperCase()+e.substring(1).toLowerCase();
      mensaje+=datoCorrecto+" ";
    });
    this.value=mensaje;
  }
  for(var i=0;i<inputs.length;i++){
    inputs[i].onblur=validacionInput;
  }

//

  enviar.addEventListener('click',function(e) {
    e.preventDefault();
    var postParent = e.target.parent; // Devuelve el padre
    var nombre=document.getElementById("nombre").value;
    var apellido=document.getElementById("apellido").value;
    var edad=document.getElementById("edad").value;
    var genero=document.getElementById("genero").value;
    var ciudad=document.getElementById("ciudad").value;
    var pais=document.getElementById("pais").value;

  paciente=new alldatos (nombre,apellido,edad,genero,ciudad,pais);
  baseDatos.push(paciente);//arreglo donde esta todos los pacientes
//Objeto donde se gurdara los datos de cada paciente
  function alldatos(nombre,apellido,edad,genero,ciudad,pais){
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
    this.genero=genero;
    this.ciudad=ciudad;
    this.pais=pais;
  };

  function createPost(paciente,numero) {
    var post = document.createElement('div');
    var texto0 = document.createElement('h3');
    var texto1 = document.createElement('p');
    var texto2= document.createElement('p');
    var texto3 = document.createElement('p');
    var texto4 = document.createElement('p');
    var   post;

    post.className="Paciente";//+numero;
    texto0.innerHTML= "Paciente "+ numero;
    post.appendChild(texto0);
    texto1.innerHTML= "Nombre:"+ paciente.nombre;
    post.appendChild(texto1);
    texto2.innerHTML="Apellido: "+paciente.apellido;
    post.appendChild(texto2);
    texto3.innerHTML="Edad: "+paciente.edad;
    post.appendChild(texto3);
    texto4.innerHTML="Pais: "+paciente.pais;
    post.appendChild(texto4);
    return post;
  }
  var pacientes = document.getElementById('pacientes');
      numero++;//Numero de Paciente
  pacientes.appendChild(createPost(paciente,numero));//Asi cada paciente se guarda en un div con su id = Paciente numero
      });

    document.getElementById("fichaDatos").reset();


});
