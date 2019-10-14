import React from "react";
import styled from "styled-components";

import Switch from "./Switch";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
class Options extends React.Component {
  // state = {
  //     vitamin: "",
  //     vitamin: "",
  //     vitamin: "",
  //     vitamin: "",
  //     vitamin: "",

  // }
  render() {
    return (
      <StyledContainer>
        {/* <Form onSubmit={this.handleSubmit}>
            <div className="form-section">
              <div className="input-sect">
                <h5>Select Starting Point</h5>
                <div className="input-field">
                  <label htmlFor="type">
                    <input
                      ref={this.startRef}
                      list="types"
                      name="myType"
                      type="text"
                      id="start"
                      placeholder="Select Station:"
                      onChange={this.handleChange}
                    />
                  </label>
                  <Dropdown />
                </div>
              </div>
              <div className="input-sect">
                <h5>Select Destination</h5>
                <div className="input-field">
                  <label htmlFor="type">
                    <input
                      ref={this.endRef}
                      list="types"
                      name="myType"
                      type="text"
                      id="end"
                      placeholder="Select Station:"
                    />
                  </label>
                  <Dropdown />
                </div>
              </div>
            </div>
      
            <div className="input-field">
              <button className="waves-effect btn">Show Info</button>
            </div>
          </Form> */}
        <div>
          <span>Vitamin</span>
          <Switch />
        </div>
        <div>
          <span>Mineral</span>
          <Switch />
        </div>
        <div>
          <span>Fat</span>
          <Switch />
        </div>
        <div>
          <span>Fiber</span>
          <Switch />
        </div>
        <div>
          <span>Protien</span>
          <Switch />
        </div>
        <div>
          <span>Carbohydrates</span>
          <Switch />
        </div>
      </StyledContainer>
    );
  }
}

export default Options;
