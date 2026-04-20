import styles from './Frase.module.css';

function Frase() {
    return (
        <div className={styles.fraseContainer}>
            <h2 className={styles.fraseContent }>O rato 🐭 roeu a roupa do rei de Roma.</h2>
        </div>
    );
}

export default Frase;