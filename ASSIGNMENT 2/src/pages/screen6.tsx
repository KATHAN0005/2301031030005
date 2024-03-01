import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ChickpeaFlourMix from "../components/chickpea-flour-mix";
import Menu from "../components/menu";
import styles from "./screen6.module.css";

const Screen6: FunctionComponent = () => {
  const navigate = useNavigate();

  const onMenuContainerClick = useCallback(() => {
    navigate("/screen-3");
  }, [navigate]);

  const onScreen6ContainerClick = useCallback(() => {
    navigate("/screen-4");
  }, [navigate]);

  return (
    <div className={styles.screen6} onClick={onScreen6ContainerClick}>
      <img
        className={styles.handrawnBarbecueElements1Icon}
        alt=""
        src="/bg@2x.png"
      />
      <section className={styles.circleWrapper}>
        <div className={styles.circle}>
          <div className={styles.wrapperUndhiyu}>
            <img
              className={styles.undhiyuIcon}
              loading="lazy"
              alt=""
              src="/undhiyu1@2x.png"
            />
          </div>
          <div className={styles.textFrame}>
            <div className={styles.u}>
              <div className={styles.uChild} />
              <h1 className={styles.undhiyu}>Undhiyu</h1>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.screen6Inner}>
        <div className={styles.instructionTextParent}>
          <ChickpeaFlourMix
            inAMixingBowlCombineChick="Cut the vegetables into large chunks."
            greaseADhoklaSteamerPlate="Heat oil in a pan, add mustard seeds and let them splutter."
            steamTheBatterForAbout152="Add asafoetida, ginger-green chili paste, and sauté for a minute."
            onceDoneLetItCoolSlightly="Add the vegetables, turmeric powder, coriander-cumin powder, and salt. Mix well."
            forTemperingHeatOilInASma="Cover and cook until the vegetables are tender."
            pourThisTemperingOverTheD="If using gram flour dumplings, add them now and cook for another 5 minutes."
            serveDhoklaWithGreenChutn="Garnish with fresh coriander leaves before serving."
          />
          <Menu onMenuContainerClick={onMenuContainerClick} />
        </div>
      </section>
    </div>
  );
};

export default Screen6;
