import React from "react";
import styled from "styled-components";

import Switch from "./Switch";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
`;

class Options extends React.Component {
  state = {
    fiber: "low",
    fat: "low",
    carbohydrate: "low",
    protein: "low",
    mineral: "low"
  };
  handleChange = e => {
    console.log("boo", e);
    // this.state[e.target.id] == "low"
    //   ? this.setState({
    //       [e.target.id]: "high"
    //     })
    //   : this.setState({
    //       [e.target.id]: "low"
    //     });
    // console.log("boo");
  };

  handleSubmit = e => {};

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
        <Form>
          <div>
            <Switch id={"fat"} name={"Fat"} func={this.handleChange} />
          </div>
          <div>
            <Switch id={"mineral"} name={"Mineral"} func={this.handleChange} />
          </div>
          <div>
            <Switch id={"fiber"} name={"Fiber"} func={this.handleChange} />
          </div>
          <div>
            <Switch id={"protein"} name={"Protein"} func={this.handleChange} />
          </div>
          <div>
            <Switch
              id={"carbohydrates"}
              name={"Carbohydrates"}
              func={this.handleChange}
            />
          </div>
        </Form>
      </StyledContainer>
    );
  }
}

export default Options;
