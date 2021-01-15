import { useState } from "react";
// Configs
import { APIConfig } from "../configs/API_Config";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function SelectForm({
  selectName,
  selectOptions,
  selectedOptions,
  setSelectedOptions,
}) {
  const classes = useStyles();
  const [option, setOption] = useState("");

  const handleChange = (e) => {
    setOption(e.target.value);

    if (selectName === "category") {
      setSelectedOptions({
        ...selectedOptions,
        [selectName]: APIConfig.categoryWithNumber[e.target.value],
      });
    } else {
      setSelectedOptions({ ...selectedOptions, [selectName]: e.target.value });
    }
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">{selectName}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name={selectName}
          value={option}
          onChange={handleChange}
          defaultValue={selectOptions[0]}
        >
          {selectOptions.map((option) => (
            <MenuItem key={option} value={option} required>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectForm;
