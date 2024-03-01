import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../components/menu";
import styles from "./screen11.module.css";

const Screen11: FunctionComponent = () => {
  const navigate = useNavigate();

  const onMenuContainerClick = useCallback(() => {
    navigate("/screen-3");
  }, [navigate]);

  const onScreen11ContainerClick = useCallback(() => {
    navigate("/screen-8");
  }, [navigate]);

  return (
    <div className={styles.screen11} onClick={onScreen11ContainerClick}>
      <img
        className={styles.handrawnBarbecueElements1Icon}
        alt=""
        src="/bg@2x.png"
      />
      <section className={styles.handrawnBarbecueElementWrapper}>
        <div className={styles.handrawnBarbecueElement}>
          <div className={styles.wrapperKhandvi}>
            <img
              className={styles.khandviIcon}
              loading="lazy"
              alt=""
              src="/khandvi3@2x.png"
            />
          </div>
          <div className={styles.dalMakhaniLabel}>
            <div className={styles.kh}>
              <div className={styles.khChild} />
              <h1 className={styles.dalMakhani}>Dal Makhani</h1>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.secondaryFrame}>
        <div className={styles.rinseInstructions}>
          <div className={styles.rinseInstructionsInner}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.rinseBlackLentilsContainer}>
                <ol className={styles.rinseBlackLentilsAndKidney}>
                  <li className={styles.rinseBlackLentils}>
                    Rinse black lentils and kidney beans and soak them
                    overnight.
                  </li>
                  <li className={styles.pressureCookSoaked}>
                    Pressure cook soaked lentils and beans until soft and mushy.
                  </li>
                  <li className={styles.heatButterOr}>
                    Heat butter or ghee in a pan. Add cumin seeds and let them
                    splutter.
                  </li>
                  <li className={styles.addChoppedOnions}>
                    Add chopped onions and sauté until golden brown.
                  </li>
                  <li className={styles.addGingerGarlicPaste}>
                    Add ginger-garlic paste and green chili. Sauté for a minute.
                  </li>
                  <li className={styles.addChoppedTomatoes}>
                    Add chopped tomatoes and cook until they turn soft and
                    mushy.
                  </li>
                  <li className={styles.addTurmericPowder}>
                    Add turmeric powder, red chili powder, garam masala, and
                    salt. Mix well.
                  </li>
                  <li className={styles.addCookedLentils}>
                    Add cooked lentils and beans along with some water. Simmer
                    for 10-15 minutes.
                  </li>
                  <li className={styles.addCreamIf}>
                    Add cream (if using) and mix well.
                  </li>
                  <li>Serve hot with rice or naan.</li>
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

export default Screen11;
