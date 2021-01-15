import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Home.scss";
// Configs
import { configNames, APIConfig } from "./configs/API_Config";
// Components
import SelectForm from "./Material-UI/SelectForm";
// Material UI
import { Button } from "@material-ui/core";

function Home() {
  const [selectedOptions, setSelectedOptions] = useState({
    amount: 5,
  });

  return (
    <div className="home">
      <div className="home__title">
        <h1>Welcome To Smart Quiz</h1>
      </div>
      <div className="home__body">
        <div className="home__body__leftContainer">
          <p>
            In The Quiz You Can Choose Number, Category, Type And Difficulty Of
            Questions. If You Do Not Choose, 5 Random Questions Will Be
            Generated. Once The Questions Are Exhausted You Will Get The Result
            And You Can Start Again.
          </p>
          <h3>Let’s See How Smart You Are</h3>
        </div>

        <div className="home__body__rightContainer">
          {configNames.map((config) => (
            <SelectForm
              key={config}
              selectName={config}
              selectOptions={APIConfig[config]}
              selectedOptions={selectedOptions}
              setSelectedOptions={setSelectedOptions}
            />
          ))}

          <Link to={{ pathname: "/questions", state: selectedOptions }}>
            <Button variant="contained" color="primary">
              Start Quiz
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
