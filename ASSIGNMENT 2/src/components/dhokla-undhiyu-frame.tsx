import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./dhokla-undhiyu-frame.module.css";

export type DhoklaUndhiyuFrameType = {
  undhiyu?: string;
  undhiyu1?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];

  /** Action props */
  onUndhiyuImageClick?: () => void;
  onUClick?: () => void;
};

const DhoklaUndhiyuFrame: FunctionComponent<DhoklaUndhiyuFrameType> = ({
  undhiyu,
  undhiyu1,
  propPadding,
  propHeight,
  propWidth,
  propDisplay,
  onUndhiyuImageClick,
  onUClick,
}) => {
  const uStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const undhiyuStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      display: propDisplay,
    };
  }, [propHeight, propWidth, propDisplay]);

  return (
    <div className={styles.dhoklaUndhiyuFrame}>
      <div className={styles.wrapperUndhiyu}>
        <img
          className={styles.undhiyuIcon}
          loading="lazy"
          alt=""
          src={undhiyu}
          onClick={onUndhiyuImageClick}
        />
      </div>
      <button className={styles.u} onClick={onUClick} style={uStyle}>
        <div className={styles.uChild} />
        <div className={styles.undhiyu} style={undhiyuStyle}>
          {undhiyu1}
        </div>
      </button>
    </div>
  );
};

export default DhoklaUndhiyuFrame;
