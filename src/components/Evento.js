function Evento() {
    function meuEvento() {
        console.log('Opa, fui ativado!');
    }
    return(
        <>
        <p>clique para disparar um evento:</p>
        <button onClick={meuEvento}>Ativar!</button>
        </>
    )
}

export default Evento;