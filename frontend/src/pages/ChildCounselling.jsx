import Hero from "../Components/Hero/Hero";
import ChildCard from "../Components/About/ChildCard";
import ChildTherapistCard from "../Components/About/ChildTherapistCard";
import DepressionCard from "../Components/Test/DepressionCard";
import RelationshipCard from "../Components/Test/RelationshipCard";
import AngerCard from "../Components/Test/AngerCard";
import Footer from "../Components/Footer/Footer";
import { FaHeart } from "react-icons/fa";
import { BsBookFill } from "react-icons/bs";
import { LiaStarSolid } from "react-icons/lia";
import { FaSmile } from "react-icons/fa";
import Banner from "../Components/images/banner.png";
import Child from "../Components/images/child.jpg"
import CounterUp from "../Components/CounterUp";




  function ChildCounselling() {

    const heartIconStyle = {
      color: '#EE7214',
      fontSize: '2em', // Adjust the size as needed
    };





    return (



      <>

      <style>{`
          

          /* Stats Section - Home Page
          ------------------------------*/
          .stats {
            --default-color: #ffffff;
            --default-color-rgb: 255, 255, 255;
            --background-color: #000000;
            --background-color-rgb: 0, 0, 0;
            position: relative;
            padding: 120px 0;
          }

          .stats img {
            position: absolute;
            inset: 0;
            display: block;
            width: 100%;
            height: 100%;
            -o-object-fit: cover;
            object-fit: cover;
            z-index: 1;
          }

          .stats:before {
            content: "";
            background: rgba(var(--background-color-rgb), 0.6);
            position: absolute;
            inset: 0;
            z-index: 2;
          }

          .stats .container {
            position: relative;
            z-index: 3;
          }

          .stats .stats-item {
            padding: 30px;
            width: 100%;
          }

          .stats .stats-item span {
            font-size: 48px;
            display: block;
            color: var(--default-color);
            font-weight: 700;
          }

          .stats .stats-item p {
            padding: 0;
            margin: 0;
            font-family: var(--heading-font);
            font-size: 16px;
            font-weight: 700;
            color: rgba(var(--default-color-rgb), 0.6);
          }
          
          `}
          </style>
        <Hero
          cName="hero"
          heroimg={Child}
          title="CHILD COUNSELLING"
          btnText="Connect Now"
          url="/contact"
          btnClass="show"
        />
        <ChildCard/>
        
        <h1 className="heading text-center" >
          LET US HELP YOU
        </h1>
        <h4 className='text-center' style={{color:'orangered'}} >TRY OUR FREE SELF ASSESSMENT</h4>
        <br /><br />

        <div className="row row-cols-1 row-cols-md-3 g-4">
        <RelationshipCard/>
        <DepressionCard/>
        <AngerCard/>
      </div>
        

        <ChildTherapistCard/><br/><br/>


        
        <section id="stats" className="stats">

          <img src={Banner} alt="" data-aos="fade-in"/>

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
                    <CounterUp start={0} end={4.6} decimal={1} duration={2} />*</span1>
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



        <Footer/>
      </>
      
    );
  }

export default ChildCounselling;