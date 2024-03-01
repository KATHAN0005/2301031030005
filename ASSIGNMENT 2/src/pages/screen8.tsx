import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DhoklaUndhiyuFrame from "../components/dhokla-undhiyu-frame";
import KhandviEllipse from "../components/khandvi-ellipse";
import styles from "./screen8.module.css";

const Screen8: FunctionComponent = () => {
  const navigate = useNavigate();

  const onUndhiyuImageClick = useCallback(() => {
    navigate("/screen-10");
  }, [navigate]);

  const onUClick = useCallback(() => {
    navigate("/screen-10");
  }, [navigate]);

  const onKhandviImageClick = useCallback(() => {
    navigate("/screen-11");
  }, [navigate]);

  const onKhClick = useCallback(() => {
    navigate("/screen-11");
  }, [navigate]);

  const onMenuContainerClick = useCallback(() => {
    navigate("/screen-3");
  }, [navigate]);

  const onScreen8ContainerClick = useCallback(() => {
    navigate("/screen-3");
  }, [navigate]);

  const onDhoklaImageClick = useCallback(() => {
    navigate("/screen-9");
  }, [navigate]);

  const onDhContainerClick = useCallback(() => {
    navigate("/screen-9");
  }, [navigate]);

  return (
    <div className={styles.screen8} onClick={onScreen8ContainerClick}>
      <img
        className={styles.handrawnBarbecueElements1Icon}
        alt=""
        src="/bg@2x.png"
      />
      <section className={styles.maskGroupFrameWrapper}>
        <div className={styles.maskGroupFrame}>
          <div className={styles.wrapperMaskGroup}>
            <img
              className={styles.maskGroupIcon}
              loading="lazy"
              alt=""
              src="/mask-group2@2x.png"
            />
          </div>
          <h2 className={styles.punjabiDish}>Punjabi Dish</h2>
        </div>
      </section>
      <section className={styles.menuFrame}>
        <div className={styles.frames}>
          <div className={styles.frameUndhiyu}>
            <div className={styles.dhokla}>
              <div className={styles.wrapperDhokla}>
                <img
                  className={styles.dhoklaIcon}
                  loading="lazy"
                  alt=""
                  src="/dhokla2@2x.png"
                  onClick={onDhoklaImageClick}
                />
              </div>
            </div>
            <div className={styles.dh} onClick={onDhContainerClick}>
              <div className={styles.dhChild} />
              <div className={styles.palakPaneer}>Palak Paneer</div>
            </div>
          </div>
          <DhoklaUndhiyuFrame
            undhiyu="/undhiyu2@2x.png"
            undhiyu1="Aloo Gobi"
            propPadding="var(--padding-4xs) var(--padding-61xl) var(--padding-4xs) 66px"
            propHeight="90px"
            propWidth="318px"
            propDisplay="inline-block"
            onUndhiyuImageClick={onUndhiyuImageClick}
            onUClick={onUClick}
          />
          <KhandviEllipse
            khandvi="/khandvi2@2x.png"
            khandvi1="Dal Makhani"
            propPadding="var(--padding-4xs) var(--padding-xs) var(--padding-4xs) var(--padding-6xl)"
            propWidth="464px"
            propFlex="1"
            propDisplay="inline-block"
            onKhandviImageClick={onKhandviImageClick}
            onKhClick={onKhClick}
            onMenuContainerClick={onMenuContainerClick}
          />
        </div>
      </section>
    </div>
  );
};

export default Screen8;
