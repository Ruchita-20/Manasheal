import "./Card.css"
import Data from "./Data"
import play from "../images/play.png"
import family from "../images/family.png"
import CBT from "../images/CBT.png"
import art from "../images/art.png"
import narative from "../images/narative.png"
import social from "../images/social.png"

function ChildCard(){
    return(


            <div className="services">
            <h3>We Bring To You </h3>
            <h1>Child Therapy Services</h1>
            <p>Utilizing practice-based therapeutic methods, our psychologists assist in overcoming challenges or delays experienced by your child or adolescent.</p>
            <span className="serviced" ></span>
            <div className="cardbody">
                <Data
                img={play}
                heading="Play Counselling"
                text="Play therapy involves using toys, games, and creative activities as a medium for children to express themselves and communicate their thoughts and emotions in a safe and supportive environment."
                />

                <Data
                img={family}
                heading="Family Counselling"
                text="Family therapy involves working with the entire family unit to enhance communication, understanding, and relationships. It aims to address and resolve conflicts that may be impacting the child's emotional well-being."
                />

                <Data
                img={CBT}
                heading="CBT Counselling"
                text="CBT tailored for children focuses on identifying and addressing negative thought patterns and behaviors. It helps children develop coping strategies and positive thinking to manage various challenges."
                />

                <Data
                img={art}
                heading="Art Counselling"
                text="Art therapy utilizes creative processes such as drawing, painting, and sculpting to help children express themselves non-verbally. It can be particularly effective for those who may find it challenging to articulate their feelings verbally."
                />

                <Data
                img={narative}
                heading="Narative Counselling"
                text="Narrative therapy involves helping children reshape and reconstruct their personal narratives. It assists them in understanding their experiences, strengths, and abilities, fostering a more positive and empowering self-perception."
                />

                <Data
                img={social}
                heading="Social - Skills COunselling"
                text="Social skills training aids children in improving communication, empathy, and cooperation. Therapists employ interactive activities and role-playing exercises to boost social competence and confidence in various situations."
                />

            </div>
        </div>

    

    );
}

export default ChildCard;