import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/form";
import styles from "./screen2.module.css";

const Screen2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onScreen2ContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.screen2} onClick={onScreen2ContainerClick}>
      <img className={styles.bgIcon} alt="" src="/bg@2x.png" />
      <div className={styles.root}>
        <div className={styles.kathanFoodieParent}>
          <h1 className={styles.kathanFoodie}>
            <p className={styles.kathan}>KATHAN</p>
            <p className={styles.foodie}> FOODIE</p>
          </h1>
          <h1 className={styles.kathanFoodie1}>
            <p className={styles.kathan1}>KATHAN</p>
            <p className={styles.foodie1}> FOODIE</p>
          </h1>
        </div>
      </div>
      <Form />
    </div>
  );
};

export default Screen2;
