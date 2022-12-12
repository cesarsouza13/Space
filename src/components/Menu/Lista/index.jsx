import styles from '../Menu.module.scss'




const Lista = (props) => {
    const {key, item, descricao} = props;
    return(
        <li key={key} className={styles.menu__item}>
        <img src={item} alt=''/>
        <a href=''>{descricao}</a>
        </li>
    )
}


export {Lista}