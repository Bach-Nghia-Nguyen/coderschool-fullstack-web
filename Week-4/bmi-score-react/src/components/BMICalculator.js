import React, { useState } from "react";

const BMICalculator = () => {
  // const [result, setResult] = useState("Result:");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [history, setHistory] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.dir(e.target);
    // console.log(e.target.elements.height.value);
    // console.log(e.target.elements.weight.value);
    // let weight = e.target.elements.weight.value;
    // let height = e.target.elements.height.value;
    let bmiScore = weight / (height / 100) ** 2;
    let bmiType = "";
    if (bmiScore < 18.5) {
      bmiType = "underweight";
    } else if (bmiScore >= 18.5 && bmiScore < 25) {
      bmiType = "normal";
    } else if (bmiScore >= 25 && bmiScore < 30) {
      bmiType = "overweight";
    } else {
      bmiType = "obese";
    }
    // setResult(`Result: ${bmiScore} - ${bmiType}`);
    // don't do this
    // history.push(`Result: ${bmiScore} - ${bmiType}`);
    setHistory([...history, `Result: ${bmiScore} - ${bmiType}`]);
    // console.log(history);
  };

  const handleHeightChange = (e) => {
    // console.log(e.target.value);
    const inputHeight = Number(e.target.value);
    // console.log(inputHeight);

    // the height must be positive and less than or euqal to 250 cm, otherwise it is invalid
    if (inputHeight > 0 && inputHeight <= 250) {
      setHeight(inputHeight);
    }
  };

  const handleWeightChange = (e) => {
    // console.log(e.target.value)
    const inputWeight = Number(e.target.value);
    // console.log(inputWeight);

    // the weight must be positive and less than or equal to 400 kg, othewise it is invalid
    if (inputWeight > 0 && inputWeight <= 400) {
      setWeight(inputWeight);
    }
  };

  return (
    <div>
      <h1>BMI Calculator</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="weight">Weight (kg)</label>
        <input
          className="form-control"
          id="weight"
          type="number"
          name="weight"
          placeholder="Weight (kg)"
          value={weight}
          onChange={handleWeightChange}
        />

        <label htmlFor="height">Height (cm)</label>
        <input
          className="form-control"
          id="height"
          type="number"
          name="height"
          placeholder="Height (cm)"
          value={height}
          onChange={handleHeightChange}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <ul>
          {history.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default BMICalculator;
