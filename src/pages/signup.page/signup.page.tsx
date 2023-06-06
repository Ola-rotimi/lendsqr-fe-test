import SignUp from "../../component/sign-up.component/sign-up.component";
import Image from "../../assets/pablo-sign-in 1image.svg";
import ImageLogo from "../../assets/Unionlogo.svg";
import TextLogo from "../../assets/lendsqrlogo.svg";
import "./sign-up.styles.scss";

const SignUpPage = () => {
  return (
    <main className="sign-up-container">
      <section className="logo-container">
        <img src={ImageLogo} alt="" />
        <img src={TextLogo} alt="" />
      </section>
      <section className="image-container">
        <img src={Image} alt="" />
      </section>
      <section className="form-container">
        <SignUp />
      </section>
    </main>
  );
};

export default SignUpPage;
