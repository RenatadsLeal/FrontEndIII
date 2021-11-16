/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.scss';
import { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="fixed-top">
        <nav className="navbar navbar-expand-sm navbar-dark" aria-label="Third navbar example">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Renata Leal</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarsExample03">
              <ul className="navbar-nav mb-2 mb-sm-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#footer">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}