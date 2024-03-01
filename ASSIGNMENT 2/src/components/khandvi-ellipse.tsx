import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./khandvi-ellipse.module.css";

export type KhandviEllipseType = {
  khandvi?: string;
  khandvi1?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
  propDisplay?: CSSProperties["display"];

  /** Action props */
  onKhandviImageClick?: () => void;
  onKhClick?: () => void;
  onMenuContainerClick?: () => void;
};

const KhandviEllipse: FunctionComponent<KhandviEllipseType> = ({
  khandvi,
  khandvi1,
  propPadding,
  propWidth,
  propFlex,
  propDisplay,
  onKhandviImageClick,
  onKhClick,
  onMenuContainerClick,
}) => {
  const khStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      width: propWidth,
    };
  }, [propPadding, propWidth]);

  const khandviStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      display: propDisplay,
    };
  }, [propFlex, propDisplay]);

  return (
    <div className={styles.khandviEllipse}>
      <div className={styles.fifthFrame}>
        <div className={styles.wrapperKhandvi}>
          <img
            className={styles.khandviIcon}
            loading="lazy"
            alt=""
            src={khandvi}
            onClick={onKhandviImageClick}
          />
        </div>
      </div>
      <div className={styles.khFrame}>
        <div className={styles.khandviText}>
          <button className={styles.kh} onClick={onKhClick} style={khStyle}>
            <div className={styles.khChild} />
            <div className={styles.khandvi} style={khandviStyle}>
              {khandvi1}
            </div>
          </button>
        </div>
        <div className={styles.menu} onClick={onMenuContainerClick}>
          <div className={styles.menuFrame}>
            <div className={styles.rectangleShape} />
            <div className={styles.menu1}>Menu</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KhandviEllipse;
