import { FunctionComponent } from "react";
import styles from "./menu.module.css";

export type MenuType = {
  /** Action props */
  onMenuContainerClick?: () => void;
};

const Menu: FunctionComponent<MenuType> = ({ onMenuContainerClick }) => {
  return (
    <div className={styles.menu} onClick={onMenuContainerClick}>
      <div className={styles.rectangleElementParent}>
        <div className={styles.rectangleElement} />
        <h3 className={styles.menu1}>Menu</h3>
      </div>
    </div>
  );
};

export default Menu;
