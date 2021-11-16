import './style.scss';
import { Component } from 'react';

export default class Footer extends Component {

    render() {
        return (
            <>
                <div id="footer">
                    <div className="container">
                        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
                            <div className="col-md-4 d-flex align-items-center">
                                <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                                    {/* <svg className="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg> */}
                                </a>
                                <span className="text-muted">Renata Leal</span>
                            </div>

                            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                                <li className="ms-3"><a className="text-muted" href="https://github.com/RenatadsLeal"><img  className="bi" width="24" height="24" src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" alt="" /></a></li>
                                <li className="ms-3"><a className="text-muted" href="https://www.linkedin.com/in/renata-dsleal/"><img  className="bi" width="24" height="24" src="https://cdn-icons-png.flaticon.com/512/2111/2111532.png" alt="" /></a></li>
                                <li className="ms-3"><a className="text-muted" href="mailto:renata.dsleal@gmail.com"><img  className="bi" width="24" height="24" src="https://cdn-icons-png.flaticon.com/512/2111/2111710.png" alt="" /></a></li>
                            </ul>
                        </footer>
                    </div>
                </div>
            </>
        )
    }
}