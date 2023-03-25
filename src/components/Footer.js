import React, { Component } from 'react'

export class Footer extends Component {

  render() {
    return (
      <div>
        <footer class="text-center text-white w-100" style={{backgroundColor: "#f1f1f1", position: "fixed", bottom: "0"}}>
            <div class="text-center text-dark p-1" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                <section class="mb-1">
                    <a class="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a class="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark">
                        <i class="fab fa-google"></i>
                    </a>
                    <a class="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a class="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a class="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark">
                        <i class="fab fa-github"></i>
                    </a>
                    © 2020 Copyright:
                    <a class="text-dark" href="/">NewMonkey.com</a>
                </section>
            </div>
        </footer>
      </div>
    )
  }
}

export default Footer
