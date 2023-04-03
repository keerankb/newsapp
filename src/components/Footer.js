import React, { Component } from 'react'

export class Footer extends Component {

  render() {
    return (
      <div>
        <footer className="text-center text-white w-100" style={{backgroundColor: "#f1f1f1", position: "sticky", bottom: "0"}}>
            <div className="text-center text-dark p-1" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                <section className="mb-1">
                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark">
                        <i className="fab fa-google"></i>
                    </a>
                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark">
                        <i className="fab fa-github"></i>
                    </a>
                    © 2020 Copyright:
                    <a className="text-dark" href="/">NewMonkey.com</a>
                </section>
            </div>
        </footer>
      </div>
    )
  }
}

export default Footer
