import React from "react";
import styled from "styled-components";
const TopDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Divrow = styled.div`
  display: flex;
  flex-direction: column;
`;
const BorderSpan = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;
`;
const BorderHr = styled.div`
  width: 100px;
  height: 0;
  margin-top: 20px;
  border-bottom: 3px solid #f24f17;
`;
const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
`;

export default function FavoriteList() {
  return (
    <>
      <TopDiv>
        <Divrow>
          <BorderSpan>Favorites</BorderSpan>
          <BorderHr />
        </Divrow>
      </TopDiv>
      BACK BTN
      <FlexDiv>
        <FlexDiv>
          Folder Name
          <FlexDiv>pencil</FlexDiv>
          <FlexDiv>delte</FlexDiv>
        </FlexDiv>
        <FlexDiv>
          <FlexDiv>search</FlexDiv>
          <FlexDiv>selected</FlexDiv>
          <FlexDiv>
            Total <span>50</span>
          </FlexDiv>
        </FlexDiv>
      </FlexDiv>
      <FlexDiv>
        <div>
          Material & Items<span>50</span>
        </div>
        <div>View all</div>
      </FlexDiv>
      <div> {/* card container div */}
        <div>{/* product card div */}
          <div>
            checkbox
            <div>
              <span>cut</span>
              <span>cart</span>
              <span>star</span>
            </div>
          </div>
          <div>
            <span> Material Name </span>
            <span> Brand Name </span>
            save icon <span>1002</span>
          </div>
        </div>
      </div>
      <FlexDiv>
          <span>back</span> 
          <span>next</span> 
      </FlexDiv>
      < hr />
      <FlexDiv>
        <div>
          Material & Items<span>50</span>
        </div>
        <div>View all</div>
      </FlexDiv>
      <div> {/* card container div */}
        <div>{/* product card div */}
         card
        </div>
      </div>
      <FlexDiv>
          <span>back</span> 
          <span>next</span> 
      </FlexDiv>
    </>
  );
}
