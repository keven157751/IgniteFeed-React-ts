import { PencilLine } from '@phosphor-icons/react'
import { Avatar } from './Avatar'

import styles from './Sidebar.module.css';



export function Sidebar() {
    return (
        <aside
            className={styles.Sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/keven157751.png" />

                <strong> Keven Willian </strong>
                <span> Web Developer </span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil:
                </a>
            </footer>
        </aside>
    );
}