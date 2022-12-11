import home from '../../assets/icones/home-ativo.png'
import maisCurtidas from '../../assets/icones/mais-curtidas-inativo.png'
import maisVistas from '../../assets/icones/mais-vistas-inativo.png'
import novas from '../../assets/icones/novas-inativo.png'
import surpeendaMe from '../../assets/icones/surpreenda-me-inativo.png'
import styles from './Menu.module.scss'
import itens from './itens.json'
import React from 'react'
import { Lista } from './Lista'

export default function Menu() {

    return (
   <nav className={styles.menu}>
    <ul className={styles.menu__lista}>
        {itens.map(item => (
            <Lista key={item.descricao} item={item.item} descricao={item.descricao}/>
        ))}
    </ul>
   </nav>
    )
}

