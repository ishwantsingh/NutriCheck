import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
`;
class Options extends React.Component {
  render() {
    return (
      <StyledContainer>
        <div>
          <span>Vitamin</span>
          <input placeholder="amount" />
        </div>
        <div>
          <span>Mineral</span>
          <input placeholder="amount" />
        </div>
        <div>
          <span>Fat</span>
          <input placeholder="amount" />
        </div>
        <div>
          <span>Fiber</span>
          <input placeholder="amount" />
        </div>
        <div>
          <span>Protien</span>
          <input placeholder="amount" />
        </div>
        <div>
          <span>Carbohydrates</span>
          <input placeholder="amount" />
        </div>
      </StyledContainer>
    );
  }
}

export default Options;
