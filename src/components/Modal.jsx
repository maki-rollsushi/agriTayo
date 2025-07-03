import ReactDom from 'react-dom'

export default function Modal(props)  {
    const { children } = props
    return ReactDom.createPortal(
        <div>
            <button/>
            <div>
                {children}
            </div>
        </div>,
        document.getElementById('portal')
    )
}