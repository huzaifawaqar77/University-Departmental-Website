import Styles from "./Location.module.css";
const LocationComponent = () => {
  return (
    <div className={Styles.location_component}>
      <h1>Location on Map (Garden Campus)</h1>
      <div className={Styles.location}>
        <img src="./background/awkum_location.png" alt="" />
      </div>
    </div>
  );
};

export default LocationComponent;
