import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DhoklaUndhiyuFrame from "../components/dhokla-undhiyu-frame";
import KhandviEllipse from "../components/khandvi-ellipse";
import styles from "./screen4.module.css";

const Screen4: FunctionComponent = () => {
  const navigate = useNavigate();

  const onUndhiyuImageClick = useCallback(() => {
    navigate("/screen-6");
  }, [navigate]);

  const onUClick = useCallback(() => {
    navigate("/screen-6");
  }, [navigate]);

  const onKhandviImageClick = useCallback(() => {
    navigate("/screen-7");
  }, [navigate]);

  const onKhClick = useCallback(() => {
    navigate("/screen-7");
  }, [navigate]);

  const onMenuContainerClick = useCallback(() => {
    navigate("/screen-3");
  }, [navigate]);

  const onScreen4ContainerClick = useCallback(() => {
    navigate("/screen-3");
  }, [navigate]);

  const onDhoklaImageClick = useCallback(() => {
    navigate("/screen-5");
  }, [navigate]);

  const onDhClick = useCallback(() => {
    navigate("/screen-5");
  }, [navigate]);

  return (
    <div className={styles.screen4} onClick={onScreen4ContainerClick}>
      <img
        className={styles.handrawnBarbecueElements1Icon}
        alt=""
        src="/bg@2x.png"
      />
      <section className={styles.fRAME}>
        <div className={styles.maskGroupFrame}>
          <div className={styles.wrapperMaskGroup}>
            <img
              className={styles.maskGroupIcon}
              loading="lazy"
              alt=""
              src="/mask-group1@2x.png"
            />
          </div>
          <h2 className={styles.gujaratiDish}>Gujarati Dish</h2>
        </div>
      </section>
      <section className={styles.firstFrame}>
        <div className={styles.secondFrame}>
          <div className={styles.dhoklaUndhiyuFrame}>
            <div className={styles.undhiyuFrame}>
              <div className={styles.wrapperDhokla}>
                <img
                  className={styles.dhoklaIcon}
                  loading="lazy"
                  alt=""
                  src="/dhokla@2x.png"
                  onClick={onDhoklaImageClick}
                />
              </div>
            </div>
            <button className={styles.dh} onClick={onDhClick}>
              <div className={styles.dhChild} />
              <div className={styles.dhokla}>Dhokla</div>
            </button>
          </div>
          <DhoklaUndhiyuFrame
            undhiyu="/undhiyu@2x.png"
            undhiyu1="Undhiyu"
            onUndhiyuImageClick={onUndhiyuImageClick}
            onUClick={onUClick}
          />
          <KhandviEllipse
            khandvi="/khandvi@2x.png"
            khandvi1="Khandvi"
            onKhandviImageClick={onKhandviImageClick}
            onKhClick={onKhClick}
            onMenuContainerClick={onMenuContainerClick}
          />
        </div>
      </section>
    </div>
  );
};

export default Screen4;
