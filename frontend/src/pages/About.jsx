import React from 'react';
import Mission from '../Components/images/mission.png';
import Vision from '../Components/images/vision.png';
import Value from '../Components/images/value.png';
import C1 from '../Components/images/c1.jpg';
import C2 from '../Components/images/c2.jpg';
import C3 from '../Components/images/c3.jpg';
import C4 from '../Components/images/c4.jpg';
import Hero from '../Components/Hero/Hero';
import Footer from '../Components/Footer/Footer';
import Aboutimg from '../Components/images/aboutbgf.jpg'


const aboutStyle = {
  backgroundSize: 'cover',
  position: 'relative',
  minHeight: '90vh',
  padding: '50px 0 50px 0',
  backgroundColor: 'rgb(235, 245, 251, 1.2)',
};

const h2Style = {
  fontSize: '64px',
  fontWeight: 700,
  marginBottom: '20px',
  color: '#333d55',
  fontFamily: 'sans-serif', 
};

const pStyle = {
  color: '#4f4f5a',
  fontWeight: 400,
  marginBottom: '30px',
  fontSize:'16px',
  textAlign: 'justify',
};

const buttonStyle = {
  fontWeight: 500,
  fontSize: '14px',
  letterSpacing: '1px',
  display: 'inline-block',
  padding: '12px 36px',
  borderRadius: '50px',
  transition: '0.5s',
  color: '#fff7f7',
  background: '#333d55',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
};


const imageStyle = {
  borderRadius: '15px',
  height:'500px',
};

const aboutVision = {
 textAlign:'center',
 padding: '50px 50px 20px 50px',
};

const imgWidth = {
  padding: '10px 20px 10px 20px',
  margin: 'auto',
  objectFit: 'cover',
  width: '21vw',
  height: '20vw',
};

const cardText = {
  fontSize: 'large',
  fontFamily: 'Hedvig Letters Serif',
};

const cardTitle = {
  fontSize: 'xx-large',
  fontFamily: 'Dhurjati',
  backgroundColor: '#333d55',
};

const cardShadow = {
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
};

const titleTwo = {
  fontSize: '56px',
  fontFamily: ' "Lato", sans-serif',
};


function About() {
  return (
    <>
    <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Alice&family=Aref+Ruqaa+Ink:wght@700&family=Kanit&family=Merriweather&family=Noto+Serif+Balinese&family=Noto+Serif:ital,wght@1,900&family=Nova+Square&family=Playfair+Display:ital,wght@1,900&family=Playpen+Sans:wght@700&family=Potta+One&family=Roboto+Condensed&family=Roboto+Slab:wght@700&family=Roboto:wght@300;700&family=Russo+One&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Alice&family=Aref+Ruqaa+Ink:wght@700&family=Dhurjati&family=Hedvig+Letters+Serif:opsz@12..24&family=Kanit&family=Merriweather&family=Noto+Serif+Balinese&family=Noto+Serif:ital,wght@1,900&family=Nova+Square&family=Playfair+Display:ital,wght@1,900&family=Playpen+Sans:wght@700&family=Potta+One&family=Roboto+Condensed&family=Roboto+Slab:wght@700&family=Roboto:wght@300;700&family=Russo+One&display=swap');
          .btn-book-a-table {
            transition: transform 0.3s ease-in-out;
          }

          .btn-book-a-table:hover {
            transform: scale(1.1);
          }

          .card {
            transition: transform 0.3s ease-in-out;
          }

          .card:hover {
            transform: scale(1.1);
          }

          .card:hover:not(:hover) {
            transform: scale(1);
          }
          
          @media (max-width: 768px) {
            #im1 {
              padding: '0px 50px 0px 50px';
            }
          }
          /* Adjustments for smaller screens */
          @media (max-width: 768px) {
            .carousel-inner img {
              max-width: 100%;
              height: auto;
            }
          }

          /* Add these styles to your existing CSS */

          /* Styles for Carousel */
          #carouselExampleIndicators {
            background: skyblue;
            border-radius: 10px; /* Add border-radius */
            overflow: hidden; /* Hide overflowing content */
          }
          
          .carousel-inner {
            border-radius: 15px; /* Add border-radius to the inner content */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add shadow */
            overflow: hidden; /* Hide overflowing content */
          }
          
          .carousel-item img {
            width: 100%;
            border-radius: 15px; /* Add border-radius to images */
            filter: brightness(80%); /* Optional: Adjust brightness for a subtle glow effect */
          }
          
          /* Optional: Add a glow effect on hover */
          #carouselExampleIndicators:hover {
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          }
          



          
        `}
      </style>


      <Hero
          cName="hero"
          heroimg={Aboutimg}
          title="ABOUT US"
          btnText="Connect Now"
          url="/contact"
          btnClass="show"
        /><br/><br/>



      <section id="hero2" className="hero2 d-flex align-items-center section-bg" style={{ ...aboutStyle, marginTop: 0, marginBottom: 0 }}>
        <div className="flex-fill">
          <div className="row justify-content-between gy-5">
            <div className="col-lg-5 order-2 mx-auto p-3 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start" id="home">
              <h2 data-aos="fade-up" style={h2Style}>Find joy in the journey to wellness.</h2>
              <p data-aos="fade-up" data-aos-delay="100" style={pStyle}>We understand that Mental Health is an <b>integral part</b> of our overall well-being. We aim to provide a <b>safe and supportive space</b> where individuals can find <b>resources, information, and a community</b> to help navigate the complexities of mental health.<br /><br />
                We are a team of passionate <b>mental health professionals, advocates, and individuals</b> who have experienced the impact of mental health challenges firsthand.<br /><br /> Our collective goal is to break down the <b>stigma surrounding</b> mental health, foster understanding, and empower individuals to prioritize their mental well-being.</p>
              <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
                <a href="https://youtu.be/FpYblKqq6ig?si=EAKjeNS6rLA97eI-" className="btn-book-a-table" style={buttonStyle}>More Details</a>
              </div>
            </div>
            <div className="col-lg-5 mx-auto p-2 order-1 order-lg-2 text-center text-lg-start" style={{marginTop:'85px'}} >
              <img id="im1" src="https://images.unsplash.com/photo-1584367369853-8b966cf223f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGpveXxlbnwwfHwwfHx8MA%3D%3D" className="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="300" style={imageStyle} />
            </div>
          </div>
        </div>
      </section>

<section id="heading" className="heading d-flex align-items-center text-center section-bg" style={aboutVision}>
<div className="flex-fill" style={titleTwo}>
            <h1 style={{color:'orangered'}} >Guiding Lights </h1>
              <p style={{color:'#333d55'}} >"Our Vision and Mission for a Healthier Tomorrow"</p>
          </div>
</section>
      <section id="vision" className="vision d-flex align-items-center section-bg" style={aboutVision}>
          <div class="row row-cols-1 row-cols-md-3 g-5">
            <div class="col">
              <div class="card h-100" style={cardShadow}>
                <div className="coverimg">
                <img src={Mission} class="card-img-top" alt="..." style={imgWidth}/></div>
                <div class="card-body">
                  <p class="card-text border-top border-dark pt-4" style={cardText}>Empower individuals on their mental health journey through accessible resources, community support, and stigma reduction.</p>
                </div>
                <div class="card-footer" style={cardTitle}>
                <small className="text-white">Mission</small>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100" style={cardShadow}>
                <div className="coverimg">
                <img src={Vision} class="card-img-top" alt="..." style={imgWidth}/></div>
                <div class="card-body">
                  <p class="card-text border-top border-dark pt-4" style={cardText}>Create a world where mental health is prioritized, stigma is dismantled, and everyone has the resources for a fulfilling life.</p>
                </div>
                <div class="card-footer"  style={cardTitle}>
                  <small class="text-white">Vision</small>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100" style={cardShadow}>
              <div className="coverimg">
                <img src={Value} class="card-img-top" alt="..." style={imgWidth}/>
              </div>
                <div class="card-body">
                  <p class="card-text border-top border-dark pt-4" style={cardText}>Promote compassion, inclusivity, and empowerment in providing mental health support and information.</p>
                </div>
                <div class="card-footer"  style={cardTitle}>
                  <small class="text-white">Value</small>
                </div>
              </div>
            </div>
          </div>
      </section><br/><br/><br/>
      <section id="campaigns" className="d-flex-column justify-content-center text-center" style={titleTwo}>
        <h1>Our Campaign</h1>
        <div className="d-flex justify-content-center" >
          
          <div id="carouselExampleIndicators" className="carousel slide d-flex justify-content-center align-items-center"  style={{padding:'30px'}}>
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={C1} className="d-block w-100" alt="Campaign 1"/>
              </div>
              <div className="carousel-item">
                <img src={C2} className="d-block w-100" alt="Campaign 2"/>
              </div>
              <div className="carousel-item">
                <img src={C3} className="d-block w-100" alt="Campaign 3"/>
              </div>
              <div className="carousel-item">
                <img src={C4} className="d-block w-100" alt="Campaign 4"/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
</section>

    <Footer/>

    </>
  );
}
export default About;