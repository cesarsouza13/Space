
import search from "./search.png"
import logo from "./logo.png"
import styles from "./Cabecalho.module.scss"

const Cabecalho = () => {
    return(
        <header className={styles.cabecalho}>
            <img src={logo} alt="logo Space"/>
            <div className={styles.cabecalho__container}>
                <input  className={styles.cabecalho__input} type="text" placeholder=" O que você procura"  />
                <img src={search} alt="icone Lupa"/>
            </div>
        </header>
    )
}

export {Cabecalho};