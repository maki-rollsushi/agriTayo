
import { useState } from "react"

import Authentication from "./Authentication"
import Modal from "./Modal"

export default function Layout(props){
    const {children} = props

    const [showModal, setShowModal] = useState(false)
    const header = (
        <header>
        </header>
    )

    const footer = (
        <footer>
        </footer>
    )
    return (
        <>
            {showModal && (
            <Modal>
                <Authentication />
            </Modal>)}
            {header}
            <main>
                {children}
            </main>
            {footer}
        </>
    )
}