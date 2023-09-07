import Button from './evento/Button';

function Evento() {
    function meuEvento() {
        console.log('Ativando primeiro Evento!');
    }

    function segundoEvento() {
        console.log("Ativando segundo evento!");
    }
    return(
        <>
        <p>clique para disparar um evento:</p>
        <Button event={meuEvento} text="Primeiro Evento" />
        <Button event={segundoEvento} text="Segundo Evento" />
        </>
    )
}

export default Evento;