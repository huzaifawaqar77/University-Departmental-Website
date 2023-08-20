import Styles from "./Faculty.module.css";
const Faculty = () => {
  return (
    <div className={Styles.faculty_component}>
      <h1>Faculty Staff</h1>
      <div className={Styles.chairman_card}>
        <img src="./Faculty/Chairman.png" alt="" />
        <div className={Styles.chairman_text_holder}>
          <h2>
            Chair Person{" "}
            <span className={Styles.chairman_name}>Dr. Nadeem Iqbal</span>
          </h2>
          <p>
            Dr. Nadeem Iqbal, a distinguished figure in academia, serves as the
            esteemed Chairman at our institution. With a profound commitment to
            education and a wealth of experience in his field, Dr. Iqbal brings
            a visionary leadership style that inspires both faculty and students
            alike. His academic journey is adorned with numerous accolades and
            scholarly contributions, reflecting his passion for advancing
            knowledge and fostering intellectual growth. Dr. Iqbal's dynamic
            approach to education resonates through his dedication to innovation
            and excellence, making him a guiding light for the entire academic
            community. Under his stewardship, our institution continues to
            thrive as a center of transformative learning and cutting-edge
            research, shaping future leaders and contributing to the advancement
            of society as a whole.
          </p>
          <button className={Styles.button}>Read More</button>
        </div>
      </div>
      <h1>Faculty Tree Of Computer Science</h1>
      <div className={Styles.faculty_tree}>
        <div className={Styles.faculty_person}>
          <img src="./Faculty/faculty1.png" alt="" />
          <div className={Styles.faculty_person_text_box}>
            <h2>Professor Luther</h2>
            <img src="./icons/Arrow 8.svg" alt="" />
          </div>
        </div>
        <div className={Styles.faculty_person}>
          <img src="./Faculty/faculty2.png" alt="" />
          <div className={Styles.faculty_person_text_box}>
            <h2>Professor Rosie</h2>
            <img src="./icons/Arrow 8.svg" alt="" />
          </div>
        </div>
        <div className={Styles.faculty_person}>
          <img src="./Faculty/faculty3.png" alt="" />
          <div className={Styles.faculty_person_text_box}>
            <h2>Professor Marrisa</h2>
            <img src="./icons/Arrow 8.svg" alt="" />
          </div>
        </div>
        <div className={Styles.faculty_person}>
          <img src="./Faculty/faculty4.png" alt="" />
          <div className={Styles.faculty_person_text_box}>
            <h2>Professor Jason</h2>
            <img src="./icons/Arrow 8.svg" alt="" />
          </div>
        </div>
        <div className={Styles.faculty_person}>
          <img src="./Faculty/faculty5.png" alt="" />
          <div className={Styles.faculty_person_text_box}>
            <h2>Professor John</h2>
            <img src="./icons/Arrow 8.svg" alt="" />
          </div>
        </div>
        <div className={Styles.faculty_person}>
          <img src="./Faculty/faculty6.png" alt="" />
          <div className={Styles.faculty_person_text_box}>
            <h2>Professor Bob</h2>
            <img src="./icons/Arrow 8.svg" alt="" />
          </div>
        </div>
        <div className={Styles.faculty_person}>
          <img src="./Faculty/faculty7.png" alt="" />
          <div className={Styles.faculty_person_text_box}>
            <h2>Professor Grey</h2>
            <img src="./icons/Arrow 8.svg" alt="" />
          </div>
        </div>
        <div className={Styles.faculty_person}>
          <img src="./Faculty/faculty8.png" alt="" />
          <div className={Styles.faculty_person_text_box}>
            <h2>Professor Arthur</h2>
            <img src="./icons/Arrow 8.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
