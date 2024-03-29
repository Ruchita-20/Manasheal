import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-body-tertiary text-center">
      {/* Grid container */}
      <div className="container p-4 pb-0" >
        {/* Section: Social media */}
        <section className="mb-4">
          {/* Facebook */}
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#3b5998' }}
            href="#!"
            role="button"
          >
            <FaFacebookSquare/>
          </a>

          {/* Twitter */}
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#55acee' }}
            href="#!"
            role="button"
          >
            <FaTwitterSquare/>
          </a>

          {/* Google */}
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#dd4b39' }}
            href="#!"
            role="button"
          >
            <FaGoogle/>
          </a>

          {/* Instagram */}
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#ac2bac' }}
            href="#!"
            role="button"
          >
            <FaInstagram/>
          </a>

        </section>
      </div>

      <div className="text-center p-3" style={{backgroundColor:'#333d55', color:'white'}} >
        © 2023 Copyright:
        <a className="text-body" href="#" class="link-light" >
          Manasheal.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
