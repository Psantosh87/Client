
import React, { useState } from 'react'
import styled from "styled-components";
import { Column, Row } from "simple-flexbox";
import MuiPhoneNumber from 'material-ui-phone-number';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import CustomDropdown from "../signIn/Dropdown";


const SignUpDiv = styled.div`
width: 1152px;
height: 100%;
background: #FFFFFF;
`
const ImageDiv = styled.div`
width: 100%;
height: 100%;

background: #E9E9E9;
`
const NameDiv = styled.div`
// width: 188px;
// height: 61px;
// left: 185px;
// top: 152px;

font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 50px;
line-height: 61px;
/* identical to box height */


color: #1F1F1F;
`
const TitleDiv= styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 21px;
padding-bottom: 80px;
`
const EmailDiv = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;

color: #1F1F1F;
`
const EmailInput = styled.input`
width: 100%;
height: 55px;
left: 185px;
top: 353px;

background: #FFFFFF;
border: 1px solid rgba(31, 31, 31, 0.5);
box-sizing: border-box;
border-radius: 5px;
`
const PhoneDiv = styled.div`
display:flex;
margin-top: 40px;
`
const PhnDiv = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;

color: #1F1F1F;`
const PhnInput = styled(MuiPhoneNumber)`
background: #FFFFFF !important;
    border: 1px solid rgba(31, 31, 31, 0.5) !important;
    box-sizing: border-box !important;
    border-radius: 5px !important;
    width: 100%;
height: 55px;
}
`

const MarginDiv = styled.div`
width:100%;
margin-right:20px;
`
const UserDiv = styled.div`
width:100%;
`
const PassDiv = styled.div`
width: 100%;
    padding-right: 20px;
    `;

    const ConfirmDiv = styled.div`
    width: 100%;
    `
    const RemeberDiv= styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 100px;`

    const Inputbox = styled.input`
    background: #FFFFFF;
    border: 1px solid #1F1F1F;
    box-sizing: border-box;
    border-radius: 2px;
    width:30px;
    height:30px;
    margin-right:15px`

    const RemeberPara = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
/* identical to box height */


color: #1F1F1F;
margin-bottom:0px !important;`

const RemeberDivPri= styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 13px;`

const BtnContinue = styled.button`
width: 100%;
    height: 50px;
    left: 185px;
    top: 897px;
    background: #101010;
    border-radius: 5px;
    color: white;
    margin-top:30px;
    `;
    const LastDiv = styled.div`
    text-align-last: center;
    margin-top: 30px;`

    const SignPara = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;

    color: #1F1F1F;`

const ButtonSign = styled.button`
color: #F24F17;
background-color: transparent;
border: none;
`
const ImgSrc = styled.img`
width: 100%;
    height: 100%;`



 
export default function SignUpComponent(props) {
  const [phone, setPhone] = useState("")
  const [values, setValues] = React.useState({password: '',showPassword: false,});
  const [show, setShowP] = React.useState(false)
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const changeIcon = () => {
    setShowP(!show)
  }




  function handleBlur(e) {
    console.log(e);
  }
  
  const handlePhoneChange =(phone) => {
    if (phone) {
      setPhone(phone);
    }
  }
  
  return (
    // <MainComponent>
    <>
    <div>
      <Row>
        <Column>
        <SignUpDiv>
          <div className='container-sm signup-cont'>
            <NameDiv>Sign Up</NameDiv>
            <TitleDiv>Join our community now. Please enter your details below. </TitleDiv>
            <EmailDiv>Email*</EmailDiv>
            <EmailInput placeholder='Email'></EmailInput>
            <PhoneDiv>
              <MarginDiv>
              <PhnDiv>Phone*</PhnDiv>
              <PhnInput
                    name="phone"
                    data-cy="user-phone"
                    defaultCountry={"in"}
                    value={phone}
                    onChange={handlePhoneChange}
                    className="phn-input"
                  />
                  </MarginDiv>
                  <UserDiv>
            <PhnDiv>User Role*</PhnDiv>
            <CustomDropdown/>
                  </UserDiv>
            </PhoneDiv>
            <PhoneDiv>
              <PassDiv>
              <PhnDiv>Choose Password*</PhnDiv>
              <OutlinedInput
              className='password-out'
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            
          />
                  </PassDiv>
                  <ConfirmDiv>
            <PhnDiv>Confirm Password*</PhnDiv>
            <input id="password-field" type={show ? "text" : "password"} className="form-control" name="password"  />
              <span toggle="#password-field" className="field-icon toggle-password" onClick={changeIcon}>{show ? <Visibility /> : <VisibilityOff />}</span>
                  
                  </ConfirmDiv>
            </PhoneDiv>
          <div><p className='valid-msg'>Min 8 characters. Atleast one capital & one small letter, one numeric, and one special character. Eg: Ab123@567</p></div>
          <RemeberDiv>
            <Inputbox type="checkbox"/>
            <RemeberPara>Remember Me</RemeberPara>
          </RemeberDiv>
          <RemeberDivPri>
            <Inputbox type="checkbox"/>
            <RemeberPara>I agree all Terms & Conditions and our Privacy Policy</RemeberPara>
          </RemeberDivPri>
          <div><BtnContinue>Continue</BtnContinue></div>
          <LastDiv><SignPara>Already have an account? <ButtonSign>SignIn</ButtonSign> </SignPara></LastDiv>
          </div>
        </SignUpDiv>
        </Column>
        <Column>
        <ImageDiv><ImgSrc src="signup.jpg"/></ImageDiv>
        </Column>
      </Row>
      </div>
   {/* </MainComponent> */}
    </>
  )
}



