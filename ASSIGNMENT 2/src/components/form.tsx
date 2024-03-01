import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./form.module.css";

const Form: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButton2Click = useCallback(() => {
    navigate("/screen-3");
  }, [navigate]);

  return (
    <form className={styles.form}>
      <button className={styles.firstFrame}>
        <div className={styles.welcomeBack}>Welcome back</div>
        <div className={styles.title}>Log in</div>
      </button>
      <div className={styles.loginFrames}>
        <div className={styles.orCondition}>
          <button className={styles.button}>
            <img
              className={styles.icongoogleOriginal}
              alt=""
              src="/icongoogle--original.svg"
            />
            <div className={styles.loginNow}>Google</div>
          </button>
          <button className={styles.button1}>
            <img
              className={styles.iconfacebookOriginal}
              alt=""
              src="/iconfacebook--original.svg"
            />
            <div className={styles.loginNow1}>Facebook</div>
          </button>
        </div>
        <div className={styles.or}>Or</div>
      </div>
      <div className={styles.emailFrame}>
        <div className={styles.passwordFrame}>
          <div className={styles.parentFrame}>
            <div className={styles.email}>Email</div>
          </div>
          <div className={styles.inputTextWrapper}>
            <div className={styles.inputText}>
              <input
                className={styles.inputField}
                placeholder="balamia@gmail.com"
                type="text"
              />
              <div className={styles.iconeyeWrapper}>
                <img className={styles.iconeye} alt="" src="/iconeye.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.passwordFrame1}>
          <div className={styles.passwordParent}>
            <div className={styles.password}>Password</div>
            <div className={styles.forgot}>Forgot？</div>
          </div>
          <div className={styles.input}>
            <div className={styles.inputText1}>
              <input
                className={styles.context}
                placeholder="Enter your password"
                type="text"
              />
              <div className={styles.iconeyeContainer}>
                <img className={styles.iconeye1} alt="" src="/iconeye.svg" />
              </div>
            </div>
          </div>
        </div>
        <button className={styles.button2} onClick={onButton2Click}>
          <div className={styles.loginNow2}>Log in</div>
        </button>
      </div>
      <div className={styles.signUpLink}>
        <div className={styles.accountLabel}>
          <div className={styles.alreadyHaveAn}>Already have an account ?</div>
          <div className={styles.logIn}>Create an account</div>
        </div>
      </div>
    </form>
  );
};

export default Form;
