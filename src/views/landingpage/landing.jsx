import Form from "../../components/form/Form";
import "./landing.css";

function LandingPage({login}) {
  return (
    <div className="landing-container">
      <Form login={login} />
    </div>
  );
}

export default LandingPage;
