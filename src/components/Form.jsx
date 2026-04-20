function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault();
        alert(`O usuário foi cadastrado`);
        console.log(`O usuário foi cadastrado`);
    }

    return (
        <form onSubmit={cadastrarUsuario}>
            <div>
                <h1>Cadastre-se</h1>
                <input type="text" placeholder="Digite seu nome" />
            </div>
            <div>
                <button type="submit" value="Cadastrar">Enviar</button>
            </div>
        </form>
    );
}

export default Form;