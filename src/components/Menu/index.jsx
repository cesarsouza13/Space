
import styles from './Menu.module.scss'
import itens from './itens.json'
import React from 'react'
import { Lista } from './Lista'

export default function Menu() {

    return (
   <nav className={styles.menu}>
    <ul className={styles.menu__lista}>
        {itens.map(item => (
            <Lista key={item.id} item={item.item} descricao={item.descricao}/>
        ))}
    </ul>
   </nav>
    )
}

