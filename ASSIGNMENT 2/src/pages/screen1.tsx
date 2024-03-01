import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./screen1.module.css";

const Screen1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onScreen1ContainerClick = useCallback(() => {
    navigate("/screen-2");
  }, [navigate]);

  return (
    <div className={styles.screen1} onClick={onScreen1ContainerClick}>
      <img className={styles.bgIcon} alt="" src="/bg@2x.png" />
      <section className={styles.rectangleShape}>
        <div className={styles.kathanFoodie}>KATHAN FOODIE</div>
        <div className={styles.kathanFoodie1}>KATHAN FOODIE</div>
      </section>
    </div>
  );
};

export default Screen1;
