import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../components/menu";
import styles from "./screen7.module.css";

const Screen7: FunctionComponent = () => {
  const navigate = useNavigate();

  const onMenuContainerClick = useCallback(() => {
    navigate("/screen-3");
  }, [navigate]);

  const onScreen7ContainerClick = useCallback(() => {
    navigate("/screen-4");
  }, [navigate]);

  return (
    <div className={styles.screen7} onClick={onScreen7ContainerClick}>
      <img
        className={styles.handrawnBarbecueElements1Icon}
        alt=""
        src="/bg@2x.png"
      />
      <section className={styles.screen7Inner}>
        <div className={styles.wrapperKhandviParent}>
          <div className={styles.wrapperKhandvi}>
            <img
              className={styles.khandviIcon}
              loading="lazy"
              alt=""
              src="/khandvi1@2x.png"
            />
          </div>
          <div className={styles.khWrapper}>
            <div className={styles.kh}>
              <div className={styles.khChild} />
              <h1 className={styles.khandvi}>Khandvi</h1>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.submenuFrame}>
        <div className={styles.bowlMix}>
          <div className={styles.bowlMixInner}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.inABowlContainer}>
                <ol className={styles.inABowlMixGramFlourYog}>
                  <li className={styles.inABowl}>
                    In a bowl, mix gram flour, yogurt, water, turmeric powder,
                    and salt to make a smooth batter.
                  </li>
                  <li className={styles.pourTheBatter}>
                    Pour the batter into a non-stick pan and cook over low heat,
                    stirring continuously, until it thickens.
                  </li>
                  <li className={styles.onceTheBatter}>
                    Once the batter is thick and cooked, quickly spread it
                    thinly onto a greased surface.
                  </li>
                  <li className={styles.letItCool}>
                    Let it cool for a few minutes, then cut into strips and roll
                    them tightly.
                  </li>
                  <li className={styles.forTemperingHeat}>
                    For tempering, heat oil in a small pan, add mustard seeds,
                    asafoetida, and curry leaves. Let them splutter.
                  </li>
                  <li className={styles.pourThisTempering}>
                    Pour this tempering over the rolled khandvi.
                  </li>
                  <li className={styles.garnishWithGrated}>
                    Garnish with grated coconut and chopped coriander leaves if
                    desired.
                  </li>
                  <li>Serve khandvi with green chutney.</li>
                </ol>
              </div>
            </div>
          </div>
          <Menu onMenuContainerClick={onMenuContainerClick} />
        </div>
      </section>
    </div>
  );
};

export default Screen7;
