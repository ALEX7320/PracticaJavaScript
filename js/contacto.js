
const fr_nombre = document.getElementById('form_nombre');
const fr_correo = document.getElementById('form_correo');
const fr_comentario = document.getElementById('form_comentario');

const fr_nombre_snd = document.getElementById('form_nombre_enviado');
const fr_correo_snd = document.getElementById('form_correo_enviado');
const fr_comentario_snd = document.getElementById('form_comentario_enviado');

const btn_evniar = document.getElementById('boton_enviar_mensaje');


function validacion_formulario() {

    correcto = true;
    if (fr_nombre.value == "") { correcto = false }
    else if (fr_correo.value == "") { correcto = false }
    else if (fr_comentario.value == "") { correcto = false }


    return correcto

}

function limpiar_formulario(){

    fr_nombre.value="";
    fr_correo.value="";
    fr_comentario.value = "";

}


btn_evniar.onclick = function (e) {
    
    if(validacion_formulario()){

        fr_nombre_snd.setAttribute("value", fr_nombre.value)
        fr_correo_snd.setAttribute("value", fr_correo.value)
        fr_comentario_snd.value = fr_comentario.value

        limpiar_formulario();

        modal_mensaje = new bootstrap.Modal(document.getElementById('modal_mensaje_html'))
        modal_mensaje.show()
   
    }
    else{
        modal_mensaje = new bootstrap.Modal(document.getElementById('modal_error_html'))
        modal_mensaje.show()
    }

};