import "./Card.css"
import Data from "./Data"
import relation from "../images/relation.png"
import career from "../images/career.png"
import group from "../images/group.png"
import financial from "../images/financial.png"
import addiction from "../images/addiction.png"
import stress from "../images/stress.png"

function Card(){
    return(


            <div className="services">
            <h3>We Bring To You </h3>
            <h1>Adult Therapy Services</h1>
            <p>Explore our wide array of online counseling solutions and therapeutic services tailored to address your current worries and stressors.</p>
            <span className="serviced" ></span>
            <div className="cardbody">
                <Data
                img={relation}
                heading="Relationship Counselling"
                text="Marriage or couples counseling enhances relationships by addressing communication, conflicts, and challenges, fostering understanding, and promoting healthier interaction patterns."
                />

                <Data
                img={career}
                heading="Career Counselling"
                text="Career counseling guides adults in defining goals, evaluating skills, and making informed career decisions. It's valuable for those contemplating a change or seeking professional development."
                />

                <Data
                img={group}
                heading="Group Counselling"
                text="Group therapy unites individuals with similar concerns for mutual support, shared experiences, and diverse perspectives, fostering effective connections and learning opportunities."
                />

                <Data
                img={financial}
                heading="Financial Counselling"
                text="Financial counselors support adults in enhancing financial well-being through budgeting, debt management, and future planning, including education on financial literacy."
                />

                <Data
                img={addiction}
                heading="Addiction Counselling"
                text="Addiction counseling addresses substance abuse, explores root causes, and develops personalized recovery plans with a focus on relapse prevention and support groups."
                />

                <Data
                img={stress}
                heading="Stress & Anxiety Counselling"
                text="Stress and anxiety counseling aims to reduce levels by identifying stressors, developing coping strategies, and promoting relaxation for improved mental well-being."
                />

            </div>
        </div>

    

    );
}

export default Card;