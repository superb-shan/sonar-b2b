import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Checkbox, FormControlLabel, OutlinedInput } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

export default function CustomDropSelectField(props) {
    console.log(props)
    console.log(props.columns[props.title].length, props.data[props.title].length, "length")

    const array = props.columns[props.title].map((ele) => {
        if (ele == "All" && props.columns[props.title].length != props.data[props.title].length) {
            return false
        }
        return props.data[props.title].includes(ele)
    })

    const [state, setState] = React.useState(array);



    React.useEffect(() => {
        const allSelected = state.every((value, index) => {
            return props.value[index] === "All" || value;
        });

        if (allSelected && !state[0]) {
            // If all options are selected (except "All") and "All" is not selected, update the state
            setState((prevState) => {
                const updatedState = [...prevState];
                updatedState[0] = true; // Assuming "All" is at index 0
                return updatedState;
            });
        }
    }, [state, props.value]);
    const handleChanges = (event, index) => {
        if (event.target.name === "All") {
            setState((prevState) => {
                const updatedState = prevState.map(() => event.target.checked);
                return updatedState;
            });
            if (event.target.checked) {
                props.data[props.title] = props.columns[props.title];
            } else {
                props.data[props.title] = [];
            }
        } else {
            setState((prevState) => {
                const updatedState = [...prevState];
                updatedState[index] = event.target.checked;
                return updatedState;
            });

            if (event.target.checked) {
                if (!props.data[props.title].includes(event.target.name)) {
                    if (!props.data[props.title].includes("All")) {
                        props.data[props.title].push("All");
                    }
                    props.data[props.title].push(event.target.name);
                }


            } else {
                if (props.data[props.title].includes(event.target.name)) {
                    const index = props.data[props.title].indexOf(event.target.name);
                    props.data[props.title].splice(index, 1);
                }
                const indexOfAll = props.data[props.title].indexOf("All");

                setState((prevState) => {
                    const newState = [...prevState];
                    newState[indexOfAll] = false;
                    return newState;
                });
            }
        }

        props.handleChange(props.data);
        console.log(props.data, "filterData");
        console.log(state, "state of check");
    }



    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label" className=' text-center pt-[5px] text-[#707070] text-[14px]'>{props.title}</InputLabel>
            <Select
                variant={'outlined'}
                sx={{
                    width: "300px",
                    height: "40px",
                    borderRadius: "10px"
                }}
                labelId="demo-select-small-label"
                id="demo-select-small"
                value=""
                label="Age"
                input={<OutlinedInput className='pl-[100px]' label={props.title} />}
                IconComponent={(props) => {
                    if (props.className.includes('MuiSelect-iconOpen'))
                        return <KeyboardArrowDownIcon sx={{ color: "#0171E7", marginRight: "15px" }} />
                    return <KeyboardArrowUpIcon sx={{ color: "#0171E7", marginRight: "15px" }} />
                }}
                MenuProps={{
                    sx: {},
                    PaperProps: {
                        sx: {
                            backgroundColor: '#F8F8F8',
                            borderRadius: '15px',
                            boxShadow: '0px 8px 15px #00000026',
                        }
                    }
                }}
            >
                <FormGroup className='pl-[10px] '>

                    {props.value.map((ele, index) => (
                        <FormControlLabel
                            control={


                                <Checkbox
                                    checked={state[index]}
                                    onChange={(event) => handleChanges(event, index)}
                                    name={ele}
                                    icon={<RadioButtonUncheckedIcon />}
                                    checkedIcon={<CheckCircleIcon />}
                                />
                            }
                            label={ele}
                        />
                    ))}
                </FormGroup>
            </Select>
        </FormControl>
    );
}
