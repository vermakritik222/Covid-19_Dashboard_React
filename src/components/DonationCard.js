import { Button } from "@material-ui/core";
import { ArrowRightAlt } from "@material-ui/icons";
import React from "react";
import "./sass/DonationCard.scss";

function DonationCard() {
  return (
    <div className="donationCard">
      <img src="/images/6660.jpg" alt="" className="donationCard__img" />
      <div className="donationCard__data">
        <div className="donationCard__title">
          Donate 3rd world counties which are suffering
        </div>

        <Button
          color="success"
          style={{
            backgroundColor: "#e3f5eb",
            fontWeight: "700",
            color: "#49a571",
            padding: "10px",
            marginLeft: "10px",
            marginBottom: "10px",
            width: "285px",
          }}
        >
          {" "}
          Donate
        </Button>
        {/* <div className="donationCard__donate">
          <h3>Donate Now</h3>
          <ArrowRightAlt className="donationCard__donate-arrow" />
        </div> */}
      </div>
    </div>
  );
}

export default DonationCard;
