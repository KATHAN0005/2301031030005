import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../components/menu";
import styles from "./screen9.module.css";

const Screen9: FunctionComponent = () => {
  const navigate = useNavigate();

  const onMenuContainerClick = useCallback(() => {
    navigate("/screen-3");
  }, [navigate]);

  const onScreen9ContainerClick = useCallback(() => {
    navigate("/screen-8");
  }, [navigate]);

  return (
    <div className={styles.screen9} onClick={onScreen9ContainerClick}>
      <img
        className={styles.handrawnBarbecueElements1Icon}
        alt=""
        src="/bg@2x.png"
      />
      <section className={styles.rootFrame}>
        <div className={styles.parentFrame}>
          <div className={styles.wrapperDhokla}>
            <img
              className={styles.dhoklaIcon}
              loading="lazy"
              alt=""
              src="/dhokla3@2x.png"
            />
          </div>
          <div className={styles.innerFrame}>
            <div className={styles.dh}>
              <div className={styles.dhChild} />
              <h1 className={styles.palakPaneer}>Palak Paneer</h1>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.menuBar}>
        <div className={styles.menuFrame}>
          <div className={styles.instructionText}>
            <div className={styles.heatArea}>
              <div className={styles.heatAreaChild} />
              <div className={styles.heatOilOrContainer}>
                <ol className={styles.heatOilOrGheeInAPanAdd}>
                  <li className={styles.heatOilOr}>
                    Heat oil or ghee in a pan. Add cumin seeds and let them
                    splutter.
                  </li>
                  <li className={styles.addChoppedOnions}>
                    Add chopped onions and sauté until golden brown.
                  </li>
                  <li className={styles.addGingerGarlicPaste}>
                    Add ginger-garlic paste and green chili (if using). Sauté
                    for a minute.
                  </li>
                  <li className={styles.addChoppedTomatoes}>
                    Add chopped tomatoes and cook until they turn soft and
                    mushy.
                  </li>
                  <li className={styles.addTurmericPowder}>
                    Add turmeric powder, coriander powder, and salt. Mix well.
                  </li>
                  <li className={styles.addChoppedSpinach}>
                    Add chopped spinach and cook until wilted.
                  </li>
                  <li className={styles.blendTheMixture}>
                    Blend the mixture into a smooth paste.
                  </li>
                  <li className={styles.returnTheMixture}>
                    Return the mixture to the pan, add paneer cubes and garam
                    masala. Simmer for a few minutes.
                  </li>
                  <li>Serve hot with roti or rice.</li>
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

export default Screen9;
