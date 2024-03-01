import { FunctionComponent } from "react";
import styles from "./chickpea-flour-mix.module.css";

export type ChickpeaFlourMixType = {
  inAMixingBowlCombineChick?: string;
  greaseADhoklaSteamerPlate?: string;
  steamTheBatterForAbout152?: string;
  onceDoneLetItCoolSlightly?: string;
  forTemperingHeatOilInASma?: string;
  pourThisTemperingOverTheD?: string;
  serveDhoklaWithGreenChutn?: string;
};

const ChickpeaFlourMix: FunctionComponent<ChickpeaFlourMixType> = ({
  inAMixingBowlCombineChick,
  greaseADhoklaSteamerPlate,
  steamTheBatterForAbout152,
  onceDoneLetItCoolSlightly,
  forTemperingHeatOilInASma,
  pourThisTemperingOverTheD,
  serveDhoklaWithGreenChutn,
}) => {
  return (
    <div className={styles.chickpeaFlourMix}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.inAMixingContainer}>
          <ol className={styles.inAMixingBowlCombineChic}>
            <li className={styles.inAMixing}>{inAMixingBowlCombineChick}</li>
            <li className={styles.greaseADhokla}>
              {greaseADhoklaSteamerPlate}
            </li>
            <li className={styles.steamTheBatter}>
              {steamTheBatterForAbout152}
            </li>
            <li className={styles.onceDoneLet}>{onceDoneLetItCoolSlightly}</li>
            <li className={styles.forTemperingHeat}>
              {forTemperingHeatOilInASma}
            </li>
            <li className={styles.pourThisTempering}>
              {pourThisTemperingOverTheD}
            </li>
            <li>{serveDhoklaWithGreenChutn}</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ChickpeaFlourMix;
