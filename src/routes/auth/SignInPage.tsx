import facebookIcon from "../../assets/auth/sign-in/icon-FB.svg";
import googleIcon from "../../assets/auth/sign-in/icon-google.svg";
import xIcon from "../../assets/auth/sign-in/icon-x.svg";
import emailIcon from "../../assets/auth/sign-in/sign-in-icon-email.svg";
import illustrationImage from "../../assets/auth/sign-in/sign-in-illustration.png";
import lockIcon from "../../assets/auth/sign-in/sign-in-icon-lock.svg";
import visualBackground from "../../assets/auth/sign-in/sign-in-visual-bg.svg";
import { AuthLayout } from "../../components/layouts/AuthLayout";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import styles from "./SignInPage.module.css";

export default function SignInPage() {
  return (
    <AuthLayout
      visualSlot={
        <div className={styles.signIn__visual}>
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
        </div>
      }
    >
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

        <form className={styles.signIn__form} aria-labelledby="sign-in-title">
          <Input
            id="sign-in-email"
            label="Email"
            type="email"
            name="email"
            defaultValue="john.doe@gmail.com"
            rightSlot={<img src={emailIcon} alt="" aria-hidden="true" />}
          />

          <Input
            id="sign-in-password"
            label="Password"
            type="password"
            name="password"
            placeholder="Start typing..."
            rightSlot={<img src={lockIcon} alt="" aria-hidden="true" />}
          />

          <div className={styles.signIn__options}>
            <label className={styles.signIn__remember}>
              <input type="checkbox" name="remember" />
              <span>Remember me</span>
            </label>
            <a className={styles.signIn__link} href="/recover">
              Recover password
            </a>
          </div>

          <div className={styles.signIn__actions}>
            <Button variant="primary" type="submit">
              Sign In
            </Button>
            <Button variant="outline" as="a" href="/sign-up">
              Sign Up
            </Button>
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
    </AuthLayout>
  );
}
