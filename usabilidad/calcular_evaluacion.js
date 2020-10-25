function ()
  window.onload = function() {
      var btn_radio = document.getElementById("btn-radio");
      btn_radio.onclick = function()
      {
        var input_radio= document.encuesta.resultado1;
        for (x=0; x < resultado1.lenght; x++) 
          {
            if (input_radio[x].checked)
              {
                console.log (input_radio[x].value);
              }
          }
      }
    }