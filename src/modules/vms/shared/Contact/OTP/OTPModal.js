import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styled from "styled-components";
import "./OTPModal.css";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const EmailBox = styled(Box)`
    width: 42.5rem !important;
    height: 21.813rem;
    border: none !important;
    font-family: 'Inter' !important;
    font-style: normal !important;
    font-weight: 500 !important;
    font-size: 20px !important;
    line-height: 24px !important;

    color: #1F1F1F !important;
`;

export default function EmailBasicModal(props) {
  const [emailOpen, setEmailOpen] = useState(false);
  const handleEmailOpen = (event) => {
    event.preventDefault();  
    setEmailOpen(true)
};
  const handleEmailClose = (event) => {
    event.preventDefault();
    setEmailOpen(false);
};

const {item} = props;
  return (
    <div>
      <Button className='verify-button' onClick={handleEmailOpen}>Verify</Button>
      <Modal
        open={emailOpen}
        onClose={handleEmailClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <EmailBox sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
         {props.item}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          An OTP is sent to the provided email. Please input that OTP here. If you did not recieve it then click resend button.
          </Typography>
          <div className="email-OtpInput">
            <input className="email-inputOtp" type="text" maxLength={1} />
            <input className="email-inputOtp" type="text" maxLength={1} />
            <input className="email-inputOtp" type="text" maxLength={1} />
            <input className="email-inputOtp" type="text" maxLength={1} />
        </div>
        <div className="email-verifyButtons">
            <button className='Emailverify-resendbutton'>RESEND OTP</button>
            <button className='Emailverify-verifybutton'>VERIFY</button>

        </div>
        </EmailBox>
      </Modal>
    </div>
  );
}
