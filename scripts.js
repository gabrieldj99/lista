function adicionarBotao(){
   let valor = document.getElementById("inserir").value
   valor = valor.charAt(0).toUpperCase() + valor.slice(1)

   let li = document.createElement("li")
   li.innerHTML = valor + '<span onclick="deletarTarefa(this)">✖</span>'

   document.getElementById("lista").appendChild(li)
   document.getElementById("inserir").value = ""

}

function deletarTarefa(li){
    li.parentElement.remove()
}