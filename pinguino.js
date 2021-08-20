//veasé en futuras actualizaciones
const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']

const message = document.getElementById('a-ver')

const msg = document.createElement('DIV') 



document.getElementById('button').addEventListener('click', function(e){
    message.appendChild(msg)
    message.innerHTML = '<span class="msg">Buenos días amor espero que estes mejor :3</span>'
})

