import { useEffect, useState } from "react";
import '../style/style.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Confirmation from "./Confirmation";
import ReservationForm from "./ReservationForm";

const Reservations = (props) => {

    const [percent, setPercent] = useState(0)
    // const [isSubmitted, setIsSubmitted] = useState(false)
    console.log(percent)

    const [isSubmitted, setIsSubmitted] = useState(false)
    console.log(isSubmitted)



    const {dinerData, setDinerData} = props;

    //use in a button
  // const progress = () => {
  //   setPercent(percent + 50)
  // }

  const [showPercent, setShowPercent] = useState(percent);

  useEffect(() => {
    setShowPercent(showPercent)
  }, [showPercent])


  return (
    <>
    <div className="container">
      <div className="color1">
        <h1>Little Lemon Reservations</h1>
      </div>
    <div className="container">
      <div className="main">
        <div className="main-content">

          {
            isSubmitted ?
              <Confirmation
                dinerData={dinerData}
                setDinerData={setDinerData}
              />
              :
              <ReservationForm
                isSubmitted={isSubmitted}
                setIsSubmitted={setIsSubmitted}
                dinerData={dinerData}
                setDinerData={setDinerData}
                percent={percent}
                setPercent={setPercent}
              />
          }


            {/* <ReservationForm isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} dinerData={dinerData} setDinerData={setDinerData}/>
            {isSubmitted && <Confirmation dinerData={dinerData} setDinerData={setDinerData}/>} */}


            <div className="progress-bar-container" style={{paddingTop:'20px'}}>
              <ProgressBar animated now={percent} />
            </div>

        </div>
    </div>
  </div>
    </div>
  </>
  )
}

export default Reservations;