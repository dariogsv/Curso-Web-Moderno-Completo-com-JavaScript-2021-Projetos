document.forms[0].onsubmit = (event) => {
    event.preventDefault()

    form = event.target
    const formData = new FormData(form)
    for (item of formData){
        console.log(item)
    }   
    axios.post('activity', formData).then(resp => {
        if(resp.status == 200)
        // Coloca popup de sucesso
        // Atualiza tabela no topo
            alert('<p>Success!<p>')
        else
        // Coloca popup com erro
            alert('<p>Error!<p>')
    })
}
