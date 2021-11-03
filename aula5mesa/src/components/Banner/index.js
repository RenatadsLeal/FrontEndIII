import "./style.css"

const Banner = ({children}) => {
    return(
        <section className="banner">
            <div id="bannerContent">
            <p>{children} Lorem croissant dolor sit, amet croissant consectetur adipisicing elit. Veritatis est, croissant omnis aliquid eos croissant, nam quibusdam ullam croissant illum qui? Croissant mollitia eum neque distinctio croissant, iusto perspiciatis croissant?
            Lorem croissant dolor sit amet croissant consectetur, adipisicing croissant. Facilis error ipsa, croissant pariatur croissant harum autem, ut maxime croissant odio nihil.<button>{children}</button></p>
            </div>
        </section>
    )
}

export default Banner