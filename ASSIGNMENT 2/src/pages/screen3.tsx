import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./screen3.module.css";

const Screen3: FunctionComponent = () => {
  const navigate = useNavigate();

  const onScreen3ContainerClick = useCallback(() => {
    navigate("/screen-2");
  }, [navigate]);

  const onGujaratiContainerClick = useCallback(() => {
    navigate("/screen-4");
  }, [navigate]);

  const onPunjabiContainerClick = useCallback(() => {
    navigate("/screen-8");
  }, [navigate]);

  return (
    <div className={styles.screen3} onClick={onScreen3ContainerClick}>
      <img className={styles.bgIcon} alt="" src="/bg@2x.png" />
      <section className={styles.frameGroupKathanFoodie}>
        <div className={styles.kathanFoodie}>KATHAN FOODIE</div>
        <div className={styles.kathanFoodie1}>KATHAN FOODIE</div>
      </section>
      <section className={styles.frameGujaratiMasks}>
        <div className={styles.gujarati} onClick={onGujaratiContainerClick}>
          <div className={styles.wrapperMaskGroup}>
            <img
              className={styles.maskGroupIcon}
              loading="lazy"
              alt=""
              src="/mask-group@2x.png"
            />
          </div>
          <div className={styles.gujaratiDish}>Gujarati Dish</div>
        </div>
        <div className={styles.punjabi} onClick={onPunjabiContainerClick}>
          <div className={styles.wrapperMaskGroup1}>
            <img
              className={styles.maskGroupIcon1}
              loading="lazy"
              alt=""
              src="/mask-group-1@2x.png"
            />
          </div>
          <div className={styles.punjabiDish}>Punjabi Dish</div>
        </div>
      </section>
    </div>
  );
};

export default Screen3;
