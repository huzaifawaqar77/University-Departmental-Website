import Styles from "./StudentResource.module.css";
const StudentResource = () => {
  return (
    <div className={Styles.student_resources_component}>
      <h1>Student Resources</h1>
      <div className={Styles.student_resources}>
        <div className={Styles.student_resource}>
          <img
            src="./icons/icons8-management-50.png"
            alt=""
            height={64}
            width={64}
          />
          <h2>Learning Management System</h2>
        </div>
        <div className={Styles.student_resource}>
          <img
            src="./icons/icons8-youtube-50.png"
            alt=""
            height={64}
            width={64}
          />
          <h2>Youtube Channel</h2>
        </div>
        <div className={Styles.student_resource}>
          <img
            src="./icons/icons8-woman-at-computer-50.png"
            alt=""
            height={64}
            width={64}
          />
          <h2>AWKUM Help Desk</h2>
        </div>
        <div className={Styles.student_resource}>
          <img
            src="./icons/icons8-evaluation-50.png"
            alt=""
            height={64}
            width={64}
          />
          <h2>Teacher Evaluation</h2>
        </div>
        <div className={Styles.student_resource}>
          <img
            src="./icons/icons8-more-details-50.png"
            alt=""
            height={64}
            width={64}
          />
          <h2>Semester Details</h2>
        </div>
        <div className={Styles.student_resource}>
          <img
            src="./icons/icons8-facebook-50.png"
            alt=""
            height={64}
            width={64}
          />
          <h2>Facebook Channel</h2>
        </div>
      </div>
    </div>
  );
};

export default StudentResource;
