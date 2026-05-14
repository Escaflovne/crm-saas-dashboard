import facebookIcon from "../../assets/auth/sign-in/icon-FB.svg";
import googleIcon from "../../assets/auth/sign-in/icon-google.svg";
import xIcon from "../../assets/auth/sign-in/icon-x.svg";
import illustrationImage from "../../assets/auth/sign-in/sign-in-illustration.png";
import visualBackground from "../../assets/auth/sign-in/sign-in-visual-bg.svg";
import styles from "./SignInPage.module.css";

export default function SignInPage() {
  return (
    <main className={styles.signIn} aria-labelledby="sign-in-title">
      <section className={styles.signIn__panel} aria-label="Sign in form">
        <div className={styles.signIn__content}>
          <header className={styles.signIn__intro}>
            <h1 className={styles.signIn__title} id="sign-in-title">
              Welcome to our CRM.
              <br />
              Sign In to see latest updates.
            </h1>
            <p className={styles.signIn__subtitle}>
              Enter your details to proceed further
            </p>
          </header>

          <form className={styles.signIn__form}>
            <div className={styles.signIn__field}>
              <label className={styles.signIn__label} htmlFor="sign-in-email">
                Email
              </label>
              <div className={styles.signIn__inputShell}>
                <input
                  className={styles.signIn__input}
                  defaultValue="john.doe@gmail.com"
                  id="sign-in-email"
                  name="email"
                  placeholder=" "
                  type="email"
                />
                <span
                  className={`${styles.signIn__inputIcon} ${styles["signIn__inputIcon--email"]}`}
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className={styles.signIn__field}>
              <label
                className={styles.signIn__label}
                htmlFor="sign-in-password"
              >
                Password
              </label>
              <div className={styles.signIn__inputShell}>
                <input
                  className={styles.signIn__input}
                  id="sign-in-password"
                  name="password"
                  placeholder="Start typing..."
                  type="password"
                />
                <span
                  className={`${styles.signIn__inputIcon} ${styles["signIn__inputIcon--lock"]}`}
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className={styles.signIn__options}>
              <label className={styles.signIn__remember}>
                <input
                  className={styles.signIn__checkbox}
                  name="remember"
                  type="checkbox"
                />
                <span>Remember me</span>
              </label>
              <a className={styles.signIn__link} href="/recover">
                Recover password
              </a>
            </div>

            <div className={styles.signIn__actions}>
              <button
                className={`${styles.signIn__button} ${styles["signIn__button--primary"]}`}
                type="submit"
              >
                Sign In
              </button>
              <a
                className={`${styles.signIn__button} ${styles["signIn__button--secondary"]}`}
                href="/sign-up"
              >
                Sign Up
              </a>
            </div>
          </form>

          <div className={styles.signIn__social} aria-label="Social sign in">
            <p className={styles.signIn__socialText}>Or sign in with</p>
            <div className={styles.signIn__socialButtons}>
              <button
                className={styles.signIn__socialButton}
                type="button"
                aria-label="Sign in with Twitter"
              >
                <img
                  className={styles.signIn__socialIcon}
                  src={xIcon}
                  alt=""
                  aria-hidden="true"
                />
              </button>
              <button
                className={styles.signIn__socialButton}
                type="button"
                aria-label="Sign in with Google"
              >
                <img
                  className={styles.signIn__socialIcon}
                  src={googleIcon}
                  alt=""
                  aria-hidden="true"
                />
              </button>
              <button
                className={styles.signIn__socialButton}
                type="button"
                aria-label="Sign in with Facebook"
              >
                <img
                  className={styles.signIn__socialIcon}
                  src={facebookIcon}
                  alt=""
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        className={styles.signIn__visual}
        aria-label="Sign in illustration area"
      >
        <img
          className={styles.signIn__visualBg}
          src={visualBackground}
          alt=""
          aria-hidden="true"
        />
        <img
          className={styles.signIn__illustration}
          src={illustrationImage}
          alt=""
          aria-hidden="true"
        />
      </section>
    </main>
  );
}
