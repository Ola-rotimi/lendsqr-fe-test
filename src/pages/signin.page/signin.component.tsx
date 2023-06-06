import SignIn from "../../component/login.component/login.component";
import Image from "../../assets/pablo-sign-in 1image.svg";
import ImageLogo from "../../assets/Unionlogo.svg";
import TextLogo from "../../assets/lendsqrlogo.svg";
import "./signin.styles.scss";

const SignInPage = () => {
  return (
    <main className="sign-in-container">
        <section className="logo-container">
          <img src={ImageLogo} alt="" />
          <img src={TextLogo} alt="" />
        </section>
      <section className="image-container">
        <img src={Image} alt="" />
      </section>
      <section className="form-container">
        <SignIn />
      </section>
    </main>
  );
};

export default SignInPage;
