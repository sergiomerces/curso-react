import Button from "./Button";

function Evento() {

    function meuEvento() {
        alert('Opa, fui ativado!');
        console.log(`Opa, fui ativado!`);
    }

    return (
        <div>
            <p>Clique para disparar um evento</p>
            <Button event={meuEvento} text="Primeiro Evento" />
        </div>
    );
}

export default Evento;