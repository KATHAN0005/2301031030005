import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../components/menu";
import styles from "./screen10.module.css";

const Screen10: FunctionComponent = () => {
  const navigate = useNavigate();

  const onMenuContainerClick = useCallback(() => {
    navigate("/screen-3");
  }, [navigate]);

  const onScreen10ContainerClick = useCallback(() => {
    navigate("/screen-8");
  }, [navigate]);

  return (
    <div className={styles.screen10} onClick={onScreen10ContainerClick}>
      <img
        className={styles.handrawnBarbecueElements1Icon}
        alt=""
        src="/bg@2x.png"
      />
      <section className={styles.screen10Inner}>
        <div className={styles.wrapperUndhiyuParent}>
          <div className={styles.wrapperUndhiyu}>
            <img
              className={styles.undhiyuIcon}
              loading="lazy"
              alt=""
              src="/undhiyu3@2x.png"
            />
          </div>
          <div className={styles.uWrapper}>
            <div className={styles.u}>
              <div className={styles.uChild} />
              <h1 className={styles.alooGobi}>Aloo Gobi</h1>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.screen10Child}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.heatOilOrContainer}>
                <ol className={styles.heatOilOrGheeInAPanAdd}>
                  <li className={styles.heatOilOr}>
                    Heat oil or ghee in a pan. Add cumin seeds and let them
                    splutter.
                  </li>
                  <li className={styles.addChoppedOnions}>
                    Add chopped onions and sauté until translucent.
                  </li>
                  <li className={styles.addGingerGarlicPaste}>
                    Add ginger-garlic paste and sauté for a minute.
                  </li>
                  <li className={styles.addChoppedTomatoes}>
                    Add chopped tomatoes and cook until they turn soft and
                    mushy.
                  </li>
                  <li className={styles.addTurmericPowder}>
                    Add turmeric powder, coriander powder, and salt. Mix well.
                  </li>
                  <li className={styles.addCubedPotatoes}>
                    Add cubed potatoes and cauliflower florets. Mix until well
                    coated with spices.
                  </li>
                  <li className={styles.coverAndCook}>
                    Cover and cook until the vegetables are tender, stirring
                    occasionally.
                  </li>
                  <li className={styles.sprinkleGaramMasala}>
                    Sprinkle garam masala on top and mix well.
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

export default Screen10;
