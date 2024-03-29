import React, { useEffect } from 'react';
import './Home.css';

import DepressionCard from '../Components/Test/DepressionCard';
import { BiCheckboxChecked } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { BsBookFill } from "react-icons/bs";
import { LiaStarSolid } from "react-icons/lia";
import { FaSmile } from "react-icons/fa";
import Footer from '../Components/Footer/Footer';
import Hero from '../Components/Hero/Hero';
import RelationshipCard from '../Components/Test/RelationshipCard';
import AngerCard from '../Components/Test/AngerCard';
import CounterUp from '../Components/CounterUp';
import bgmn2 from '../Components/images/bgmn2.jpeg'
import Banner from '../Components/images/banner.png'


const Home = () => {
 

  const heartIconStyle = {
    color: '#EE7214',
    fontSize: '2em', // Adjust the size as needed
  };


  const TypeForm = () => {
    useEffect(() => {
      // Load Typeform embed script
      const script = document.createElement('script');
      script.src = '//embed.typeform.com/next/embed.js';
      script.async = true;
      document.body.appendChild(script);

      // Cleanup script on component unmount
      return () => {
        document.body.removeChild(script);
      };
    }, []); // Run effect only once on component mount

    return (
      <div data-tf-live="01HHJKZWD2ST89SEYYG6A8V0T1"></div>
    );
  };

  


  return (
    <div>

      <Hero
          cName="hero"
          heroimg={bgmn2}
          title="Take Your First Step Towards A Better Tomorrow "
          text = "India’s #1 Organization For Mental Health And Holistic Wellness"
          btnText="BOOK AN APPOINTMENT"
          url="/book"
          btnClass="show"
        />
      
      <br/><br/>




      {/* Features Section - Home Page */}
      <section id="features" className="features">
        <h1 className="heading flex-fill text-center"  >
        "Your mental health is an investment, not an expense."
        </h1><br/>

        <div className="container">
            {/* First Features Item */}
            <div className="row gy-4 align-items-center features-item flex-fill ">
                  <div class="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start mx-4 flex-fill " id="home" data-aos="fade-up" data-aos-delay="200">
                    <h4 style={{color:'orangered'}} >THERAPIST RECOMMENDATION GUIDE</h4>
                    <h3>Find the right therapist</h3><br/>
                    <p style={{ textAlign: 'justify' }}>
                        Exploring <strong>mental well-being</strong> and finding the <strong>ideal therapist</strong> are crucial steps. However, this journey can be challenging for many individuals.
                        <br /><br/>
                        In scenarios like these, Trijog – Know Your Mind is here to connect you with <strong>highly qualified licensed psychologists</strong> in India, guiding you towards a path of mental wellness.
                        <br /><br/>
                        Whether you seek <strong>online</strong> or <strong>face-to-face</strong> therapy for <strong>adults, children, or corporate settings</strong>, we provide tailored solutions to meet your needs.
                    </p>

                    <p style={{ textAlign: 'justify' }} >
                        <BiCheckboxChecked size={30} color="#333" /> Leading Mental Wellness Organization in India
                        <br />
                        <BiCheckboxChecked size={30} color="#333" /> Over 120 Certified Mental Health Professionals
                        <br />
                        <BiCheckboxChecked size={30} color="#333" /> Therapists Registered with Recognized Authorities
                        <br />
                        <BiCheckboxChecked size={30} color="#333" /> More Than 35 Years of Expertise in the Field
                    </p>
                    
                    <div className='matching'>
                      <TypeForm/>
                    </div>
                  </div>
                <div style={{  overflow: 'hidden', width:'600px', height:'500px', marginLeft:'80px' }} className="col-lg-5 order-1 order-lg-2 text-center text-lg-start mx-4 flex-fill" data-aos="fade-left" data-aos-delay="200">
                  <img src='https://plus.unsplash.com/premium_photo-1664378616928-dc6842677183?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHRoZXJhcHl8ZW58MHx8MHx8fDA%3D' style={{height:'400px', width:'600px'}} ></img>
                </div>
            </div>
        </div>
      </section><br/><br/>

      <section className="test" id="test">
        <h1 className="heading text-center" >
          LET US HELP YOU
        </h1>

        <h4 className='text-center' style={{color:'orangered'}}  >TRY OUR FREE SELF ASSESSMENT</h4>
        <br /><br />

        <section id="vision" className="vision d-flex align-items-center section-bg" >
          <div className="row row-cols-1 row-cols-md-3 g-4 ">
            <RelationshipCard/>
            <DepressionCard/>
            <AngerCard/>
            
            </div>
        </section>
    </section><br/><br/>

    <section id="stats" className="stats">

          <img src={Banner}alt="" data-aos="fade-in"/>

          <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <div className="rounded-circle">
                    <FaHeart style={heartIconStyle} />
                  </div>
                  <span1 className="purecounter" style={{fontSize:'48px', display:'flex',color:'var(--default-color)', fontWeight:'700', textAlign:'center',justifyContent:'center' }} >
                    
                  < CounterUp start={0} end={95} duration={2} />%</span1>
                  <p>HAPPY CLIENTS</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <div className="rounded-circle">
                    <BsBookFill style={heartIconStyle} />
                  </div>
                  <span1 className="purecounter" style={{fontSize:'48px', display:'flex',color:'var(--default-color)', fontWeight:'700', textAlign:'center',justifyContent:'center' }}  >
                    < CounterUp start={0} end={150} duration={2} />+
                  </span1>
                  <p>CONSULTANTS</p>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <div className="rounded-circle">
                    <LiaStarSolid style={heartIconStyle} />
                  </div>
                  <span1  className="purecounter" style={{fontSize:'48px', display:'flex',color:'var(--default-color)', fontWeight:'700', textAlign:'center',justifyContent:'center' }} >
                  < CounterUp start={0} end={4.6} decimal={1} duration={2} />*</span1>
                  <p>GOOGLE RATINGS</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <div className="rounded-circle">
                    <FaSmile style={heartIconStyle} />
                  </div>
                  <span1 className="purecounter" style={{fontSize:'48px', display:'flex',color:'var(--default-color)', fontWeight:'700', textAlign:'center',justifyContent:'center' }} >
                    < CounterUp start={0} end={10} duration={2} /> mil*</span1>
                  <p>LIVES IMPACTED</p>
                </div>
              </div>
            </div>
          </div>
          </section>


      <div className='footer'>
        <Footer/>
      </div>




    </div>
  );
};


export default Home;
