import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { thunkLogin } from "../../redux/session";
import musichaze_logo from "/musichaze_logo_edit.jpg"
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import './LandingPage.css'

function LandingPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [modalIsActive, setModalIsActive] = useState(false)

  const loginDemoUser = async (e) => {
    e.preventDefault();

    await dispatch(
      thunkLogin({
        email: "demo@aa.io",
        password: "password",
      })
    );
    await navigate('/discover')
  }

const toggleLPButtons = () => {
  if (modalIsActive === true){
    setModalIsActive(false)
  } else {
    setModalIsActive(false)
  }
}

  return (
    <div className="landing-page-background">
      <div className="background-video">
        <video autoPlay={true} loop={true} muted={true}>
          <source src="/landing-video-bg.mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='landing-page-container'>
        <img id="landing-page-logo" src={musichaze_logo} alt="music-haze-logo" />
        <div className={modalIsActive ? 'LP-button-container hidden' : 'LP-button-container'}>
          <OpenModalButton
              buttonText="Log In"
              onButtonClick={toggleLPButtons}
              onModalClose={toggleLPButtons}
              modalComponent={<LoginFormModal />}
              />
          <OpenModalButton
                buttonText="Sign Up"
                onButtonClick={toggleLPButtons}
                onModalClose={toggleLPButtons}
                modalComponent={<SignupFormModal />}
                />
          <button className='entry' onClick={loginDemoUser}>Demo User</button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;
