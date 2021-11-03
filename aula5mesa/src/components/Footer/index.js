import "./style.css"

const Footer = ({empresa}) => {
    return(
        <footer className="footer">
            <p>{empresa.nome}</p>
        </footer>
    )
}

export default Footer