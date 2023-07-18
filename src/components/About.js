import React from "react";

const About = (props) => {

  // const firstName = diner?.firstName || "Unknown";
    const {dinerData, setDinerData} = props;


  return (
    <>
      <h1>About</h1>
      {
          dinerData && dinerData.length > 0 ?
          dinerData.map((d, idx) => (
            <div key={idx}>
                <p>first name: {d.firstName}</p>
                <p>last name: {d.lastName}</p>
                <p>email name: {d.email}</p>
                <p>phone number: {d.phoneNumber}</p>
                <p>date: {d.date}</p>
                <p>time: {d.time}</p>
                <p>occasion: {d.occasion}</p>

            </div>
          )):
          null
        }
    </>
  );
};

export default About;