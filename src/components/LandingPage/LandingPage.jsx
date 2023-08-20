import Styles from "./LandingPage.module.css";
const LandingPage = () => {
  const scrollToBottom = () => {
    let height = document.body.scrollHeight;
    window.scroll(0, height);
  };
  return (
    <div className={Styles.landing_page}>
      <div className={Styles.landing_page_image_component}>
        <img src="./University_image.png" alt="university department" />
        <div className={Styles.landing_page_text}>
          <h1>Abdul Wali Khan University Garden Campus</h1>
          <h2>Computer Science Department</h2>
          <button className={Styles.landing_page_button}>Read More</button>
        </div>
      </div>
      <h2>Subjects Offered at Computer Science Department</h2>
      <div className={Styles.landing_page_courses}>
        <div className={Styles.course}>
          <img
            src="./icons/icons8-science-fiction-50.png"
            alt=""
            height={80}
            width={80}
          />
          <h3>Artificial Intelligence</h3>
        </div>
        <div className={Styles.course}>
          <img
            src="./icons/icons8-imac-settings-50.png"
            alt=""
            height={80}
            width={80}
          />
          <h3>Software Engineering</h3>
        </div>
        <div className={Styles.course}>
          <img
            src="././icons/icons8-management-50.png"
            alt=""
            height={80}
            width={80}
          />
          <h3>Computer Science</h3>
        </div>
        <div className={Styles.course}>
          <img
            src="./icons/icons8-privacy-50.png"
            alt=""
            height={80}
            width={80}
          />
          <h3>Cyber Security</h3>
        </div>
      </div>
      <img
        src="./icons/arrow-next.svg"
        alt="arrow next"
        className={Styles.arrow_next}
        onClick={scrollToBottom}
      />
    </div>
  );
};

export default LandingPage;
