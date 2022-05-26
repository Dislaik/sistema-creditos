// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
})()

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if ( (charCode > 31 && charCode < 48) || charCode > 57) {
        return false;
    }
    return true;
}

function isNumberWithDot(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if ((charCode != 46 && charCode > 31 && charCode < 48) || charCode > 57) {
        console.log(charCode)
        return false;
    }
    return true;
}

function isNumberWithDotAndStripe(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if ((charCode != 45 && charCode != 46 && charCode > 31 && charCode < 48) || charCode > 57) {
        console.log(charCode)
        return false;
    }
    return true;
}

function checkRun(rut) {
  var firstValue = rut.value.slice(0,1);

  // Formatear RUN
  if (isNaN(firstValue) === false) {
      // Despejar Puntos y Guión
      var valor = rut.value.replace(/^0+|[^0-9kK]+/g, "");
      rut.value = valor;

      // Aislar Cuerpo del numero y Dígito Verificador
      number = valor.slice(0,-1);
      dv = valor.slice(-1);

      // Si el valor del numero está vacío, deja el valor tal cual (vacío, asi se evita que quede un '-' cuando el input está vacio), sino, lo formatea
      if(number === '') {
          rut.value = valor
      }else{
          rut.value = parseInt(number).toLocaleString('es') + '-' + dv;
      }
  }
}

function checkDocument(rut) {
  var firstValue = rut.value.slice(0,1);

  // Formatear RUN
  if (isNaN(firstValue) === false) {
      // Despejar Puntos y Guión
      var valor = rut.value.replace(/^0+|[^0-9kK]+/g, "");
      //rut.value = valor;

      //number = valor.slice(0,-1);
      
      //console.log(parseInt(rut.value).toLocaleString('es-CL'))

      if (valor === '') {
        rut.value = valor
      } else {
        rut.value = parseInt(valor).toLocaleString('es-CL')
      }

      // Aislar Cuerpo del numero y Dígito Verificador
      //number = valor.slice(0,-1);
      //dv = valor.slice(-1);

      // Si el valor del numero está vacío, deja el valor tal cual (vacío, asi se evita que quede un '-' cuando el input está vacio), sino, lo formatea
      /*if(number === '') {
          rut.value = valor
      }else{
          rut.value = parseInt(number).toLocaleString('es') + dv;
      }*/
  }
}