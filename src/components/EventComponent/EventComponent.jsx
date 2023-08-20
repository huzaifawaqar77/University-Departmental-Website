import Styles from "./EventComponent.module.css";
const EventComponent = () => {
  return (
    <div className={Styles.event_component_container}>
      <h1>Events & News</h1>
      <div className={Styles.event_component}>
        <div className={Styles.event}>
          <img
            src="./background/univesity_event1.png"
            alt="university event 1"
          />
          <div className={Styles.text_container}>
            <h2>Inaugration of TechnoFest 2022 </h2>
            <p>
              Abdul Wali Khan University Mardan buzzed with excitement as it
              hosted the grand inauguration of TechnoFest 2022. The campus was
              transformed into a vibrant hub of innovation, where students from
              diverse disciplines showcased their technological prowess. The
              event featured a series of workshops, exhibitions, and
              competitions that highlighted the cutting-edge advancements in
              fields like robotics, artificial intelligence, and renewable
              energy. Distinguished guest speakers from renowned tech companies
              shared insights, inspiring the young minds to embrace the
              limitless possibilities of the digital age. TechnoFest not only
              fostered a spirit of healthy competition but also encouraged
              interdisciplinary collaboration, reaffirming the university's
              commitment to nurturing a tech-savvy generation ready to shape the
              future.
            </p>
            <span className={Styles.date}>
              <img src="./icons/icons8-date-50.png" alt="date" />
              <p>12/09/2022</p>
            </span>
          </div>
        </div>
        <div className={Styles.event}>
          <img
            src="./background/univesity_event2.png"
            alt="university event 2"
          />
          <div className={Styles.text_container}>
            <h2>Unity Day Celebration 2023 </h2>
            <p>
              Abdul Wali Khan University Mardan reverberated with cultural
              diversity during its much-anticipated Unity Day Celebration 2023.
              The campus was adorned with colorful decorations representing the
              multitude of cultures that coexist within the university
              community. Students from various ethnic backgrounds collaborated
              to organize a captivating cultural parade, showcasing traditional
              attire, music, and dance. Thought-provoking discussions on unity
              and diversity were held, encouraging dialogue on mutual respect
              and understanding. The event culminated in a global food fair,
              where tantalizing aromas and flavors from around the world united
              everyone in a gastronomic journey. Unity Day Celebration once
              again underscored the institution's commitment to nurturing a
              harmonious environment that celebrates differences and promotes a
              sense of belonging for all.
            </p>
            <span className={Styles.date}>
              <img src="./icons/icons8-date-50.png" alt="date" />
              <p>01/03/2023</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventComponent;
