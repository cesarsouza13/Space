import styles from '../Menu.module.scss'




const Lista = (props) => {
    const {item, descricao} = props;
    return(
        <li className={styles.menu__item}>
        <img src={item} alt=''/>
        <a href=''>{descricao}</a>
        </li>
    )
}


export {Lista}