import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ChickpeaFlourMix from "../components/chickpea-flour-mix";
import Menu from "../components/menu";
import styles from "./screen5.module.css";

const Screen5: FunctionComponent = () => {
  const navigate = useNavigate();

  const onMenuContainerClick = useCallback(() => {
    navigate("/screen-3");
  }, [navigate]);

  const onScreen5ContainerClick = useCallback(() => {
    navigate("/screen-4");
  }, [navigate]);

  return (
    <div className={styles.screen5} onClick={onScreen5ContainerClick}>
      <img
        className={styles.handrawnBarbecueElements1Icon}
        alt=""
        src="/bg@2x.png"
      />
      <section className={styles.screen5Inner}>
        <div className={styles.wrapperDhoklaParent}>
          <div className={styles.wrapperDhokla}>
            <img
              className={styles.dhoklaIcon}
              loading="lazy"
              alt=""
              src="/dhokla1@2x.png"
            />
          </div>
          <div className={styles.dhWrapper}>
            <div className={styles.dh}>
              <div className={styles.dhChild} />
              <h1 className={styles.dhokla}>Dhokla</h1>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.secondaryFrame}>
        <div className={styles.menuBar}>
          <ChickpeaFlourMix
            inAMixingBowlCombineChick="In a mixing bowl, combine chickpea flour, yogurt, turmeric powder, ginger-green chili paste, and salt to make a smooth batter."
            greaseADhoklaSteamerPlate="Grease a dhokla steamer plate and pour the batter into it."
            steamTheBatterForAbout152="Steam the batter for about 15-20 minutes until cooked."
            onceDoneLetItCoolSlightly="Once done, let it cool slightly, then cut into pieces."
            forTemperingHeatOilInASma="For tempering, heat oil in a small pan, add mustard seeds, curry leaves, and green chilies. Let them splutter."
            pourThisTemperingOverTheD="Pour this tempering over the dhokla pieces."
            serveDhoklaWithGreenChutn="Serve dhokla with green chutney or tamarind chutney."
          />
          <Menu onMenuContainerClick={onMenuContainerClick} />
        </div>
      </section>
    </div>
  );
};

export default Screen5;
