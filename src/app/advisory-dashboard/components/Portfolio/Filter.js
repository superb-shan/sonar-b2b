import React, { useEffect, useState } from 'react';
import CustomDropSelectField from './CustomDropSelectField';
import Image from 'next/image';
import clearFilter from '/public/clearFilter.svg';
import add from '/public/add.svg'
import subract from '/public/subract.svg'
import CustomSelectField from '@/app/b2b/components/InputFields';
import { CustomTextField } from '@/app/b2b/components/InputFields';
import SaveFilter from './SaveFilter';


function Filter({ filterDataOptions = [], handleFilterDataOptions, savedFilterData, setSavedFilterData, ...props }) {

    const { columns } = props
    const [CurrFilterState, setCurrFilterState] = useState({ ...props.FilterColumnOption });
    const [currentFilterDataOptions, setCurrentFilterDataOptions] = useState([...filterDataOptions]);
    const [Filter, setFilter] = useState("first");
    const [state, setState] = useState('');
    const [EnterValue, setEnterValue] = useState('');
    const [Subcategory, Setsubcategory] = useState("")
    const [category, Setcategory] = useState("")
    const [saved, setSaved] = useState(false)
    const [savedFilter, setSavedFilter] = useState([...savedFilterData]);

    const condition = ['<', '>', '=', "≠"];

    const handleStateChange = (event) => {

        let value = event.target.value
        setState(value);
    }

    const handleValueChange = (event) => {
        const value = event.target.value;
        setEnterValue(value);
    }

    const handleFilter2Change = (event) => {
        let value = event.target.value;
        Setsubcategory(value)
    }

    const handleFilter1Change = (event) => {
        let value = event.target.value;
        Setcategory(value)
    }


    const handleFilterChange = (data) => {
        setCurrFilterState(data);
    };

    const handleApplyFilter = () => {
        props.handleFilterColumnOption(CurrFilterState);
        if (Filter == 'second') {
            if (category != "" && Subcategory != "" && EnterValue != "" && state != "") // if all values are entered -> push into array and send
                handleFilterDataOptions([...currentFilterDataOptions, { category: category, subcategory: Subcategory, condition: state == '≠' ? "!=" : (state == '=') ? "==" : state, value: EnterValue }]);

            else if (category != "" || Subcategory != "" || EnterValue != "" || state != "") // if values are partially entered -> do nothing
                return;

            else handleFilterDataOptions(currentFilterDataOptions); // if values are not entered -> send added values
        }
        props.onBlur();
    };

    const handleClearFilter = () => {
        props.handleFilterColumnOption(props.columns);
        props.onBlur();
        setState('');
        setEnterValue('');
        Setcategory('');
        Setsubcategory('');
    };

    useEffect(() => {
        setSavedFilterData(savedFilter);
    }, [savedFilter])

    const handleSaveFilter = (event) => {
        event.preventDefault()
        if (category != "" && Subcategory != "" && EnterValue != "" && state != "") {
            let name = `filter ${savedFilter.length + 1}`;
            setSavedFilter([...savedFilter, { name, data: [...currentFilterDataOptions, { category: category, subcategory: Subcategory, condition: state == '≠' ? "!=" : (state == '=') ? "==" : state, value: EnterValue }] }]);
            console.log([...savedFilter, { name, data: [...currentFilterDataOptions, { category: category, subcategory: Subcategory, condition: state == '≠' ? "!=" : (state == '=') ? "==" : state, value: EnterValue }] }])
            setState('');
            setEnterValue('');
            Setcategory('');
            Setsubcategory('');
            setCurrentFilterDataOptions([])
        }
        else if (currentFilterDataOptions.length != 0) {
            let name = `filter ${savedFilter.length + 1}`;
            setSavedFilter([...savedFilter, { name, data: currentFilterDataOptions.map(e => { return ({ ...e }) }) }]);
            console.log([...savedFilter, { name, data: currentFilterDataOptions }])
            setCurrentFilterDataOptions([])
        }
    }

    const handleSavedFilterNameChange = (name, index) => {
        savedFilter[index].name = name;
        setSavedFilter(savedFilter)
    }

    const removeSavedFilter = (index) => {
        setSavedFilter(savedFilter.filter((_, i) => index != i));
    }

    const handleAddFilterData = () => {
        if (category != "" && Subcategory != "" && EnterValue != "" && state != "") {
            setCurrentFilterDataOptions([...currentFilterDataOptions, { category: category, subcategory: Subcategory, condition: state == '≠' ? "!=" : (state == '=') ? "==" : state, value: EnterValue }]);
            setState('');
            setEnterValue('');
            Setcategory('');
            Setsubcategory('');
        }
    }

    function handleCurrentFilterDataChange(value, field, index) {
        let newData = currentFilterDataOptions.map(e => { return ({ ...e }) });
        newData[index][field] = value;
        setCurrentFilterDataOptions(newData);
        console.log(savedFilter)
    }

    function handleDeleteCurrentFilter(index) {
        setCurrentFilterDataOptions(currentFilterDataOptions.filter((_, i) => index != i));
    }

    return (
        <div className='w-full pl-[25px] pr-[30px] bg-white rounded-[25px] p-[20px] flex flex-col gap-y-[20px] shadow-[0px_4px_20px_#0000001f]'>

            <p className='font-semibold text-[16px]'>Filters</p>
            <div className='flex gap-[10px]'>
                <div
                    className={`w-[141px] h-[33px] text-center font-semibold text-[14px] rounded-t-[10px] pt-[5px] cursor-pointer ${Filter === "first" ? "bg-[#DCEBFE] text-[#0071E7]" : "bg-[#F7F8FF] text-[#BEBEBE]"}`}
                    onClick={() => setFilter("first")}
                >
                    Display columns
                </div>
                <div
                    className={`w-[141px] h-[33px] text-center font-semibold text-[14px] rounded-t-[10px] pt-[5px] cursor-pointer ${Filter === "second" ? "bg-[#DCEBFE] text-[#0071E7]" : "bg-[#F7F8FF] text-[#BEBEBE]"}`}
                    onClick={() => setFilter("second")}
                >
                    Filters
                </div>
            </div>

            {Filter === "first" ? (
                <div className='w-full bg-white'>
                    <div className='grid grid-cols-3 gap-[17px]'>
                        {Object.keys(props.columns).map((ele) => (
                            <CustomDropSelectField
                                key={ele} // Add a unique key prop to the component
                                data={props.FilterColumnOption}
                                title={ele}
                                value={props.columns[ele]}
                                columns={props.columns}
                                handleChange={handleFilterChange}
                            />
                        ))}
                    </div>
                    <div className='pt-[50px] flex flex-row-reverse items-center gap-[30px]'>
                        <button
                            className='w-[108px] h-[40px] text-white flex justify-center items-center font-semibold text-[14px] bg-[#0071E7] rounded-[20px] cursor-pointer'
                            onClick={handleApplyFilter}
                        >
                            Apply Filter
                        </button>
                        <div
                            className='w-[108px] h-[40px] text-[#0071E7] flex gap-[5px] font-semibold justify-center align-middle text-[14px] pt-[10px] bg-white rounded-[20px] cursor-pointer'
                            onClick={handleClearFilter}
                        >
                            <Image src={clearFilter} className='mb-[12px]' />
                            Clear Filter
                        </div>
                    </div>
                </div>
            )

                :

                (
                    <div className={`w-full bg-white flex flex-col gap-y-[20px] `}>
                        <div className='flex gap-x-[10px]'>
                            {
                                savedFilter.map((filter, filterIndex) =>
                                    <SaveFilter filter={filter} filterIndex={filterIndex} setCurrentFilterDataOptions={setCurrentFilterDataOptions} handleSavedFilterNameChange={handleSavedFilterNameChange} removeSavedFilter={removeSavedFilter} />
                                )
                            }
                        </div>

                        <div className='flex flex-col gap-y-[20px] '>
                            <div className='flex gap-[10px]'>

                                <CustomSelectField
                                    width='260px'
                                    height='40px'
                                    label="Category"
                                    value={category}
                                    valueOptions={Object.keys(props.columns)}
                                    handleChange={handleFilter1Change}
                                />

                                <CustomSelectField
                                    width='260px'
                                    height='40px'
                                    label="Sub Category"
                                    value={Subcategory}
                                    valueOptions={columns[category] || []}
                                    handleChange={handleFilter2Change}
                                />

                                <CustomSelectField
                                    width='157px'
                                    label="condition"
                                    value={state}
                                    valueOptions={condition}
                                    handleChange={handleStateChange}
                                />

                                <CustomTextField
                                    width='190px'
                                    label="Enter Value"
                                    value={EnterValue}
                                    handleChange={handleValueChange}
                                />


                                <button onClick={handleAddFilterData}>
                                    <Image src={add} />
                                </button>

                            </div>

                            {
                                currentFilterDataOptions?.map((data, index) =>
                                    <div className='flex gap-[10px]'>

                                        <CustomSelectField
                                            width='260px'
                                            height='40px'
                                            label="Category"
                                            value={data.category}
                                            valueOptions={Object.keys(props.columns)}
                                            handleChange={(event) => handleCurrentFilterDataChange(event.target.value, "category", index)}
                                        />
                                        <CustomSelectField
                                            width='260px'
                                            height='40px'
                                            label="Sub Category"
                                            value={data.subcategory}
                                            valueOptions={columns[data.category] || []}
                                            handleChange={(event) => handleCurrentFilterDataChange(event.target.value, "subcategory", index)}
                                        />
                                        <CustomSelectField
                                            width='157px'
                                            label="condition"
                                            value={data.condition}
                                            valueOptions={condition}
                                            handleChange={(event) => handleCurrentFilterDataChange(event.target.value, "condition", index)}
                                        />

                                        <CustomTextField
                                            width='190px'
                                            height='40px'
                                            label="Enter Value"
                                            value={data.value}
                                            handleChange={(event) => handleCurrentFilterDataChange(event.target.value, "value", index)}
                                        />

                                        <button onClick={() => handleDeleteCurrentFilter(index)}>
                                            <Image src={subract} />
                                        </button>

                                    </div>
                                )
                            }
                        </div>

                        <div className='pt-[50px] flex justify-between items-center'>

                            <button

                                className={`w-[108px] h-[40px] font-semibold text-center text-[14px] bg-white border-[#0066CD] border-[1px]  text-[#0066CD] rounded-[20px] ${saved ? "opacity-[0.5]" : ""}`}
                                onClick={handleSaveFilter}
                            >
                                Save Filter
                            </button>

                            <div className='flex gap-[30px] items-center'>
                                <button
                                    className='w-[108px] h-[40px] text-[#0071E7] flex gap-[5px] font-semibold justify-center align-middle text-[14px] pt-[10px] '
                                    onClick={handleClearFilter}
                                >
                                    <Image src={clearFilter} className='mb-[12px]' />
                                    Clear Filter
                                </button>

                                <button
                                    className='w-[108px] h-[40px] text-white font-semibold text-[14px] flex justify-center items-center bg-[#0071E7] rounded-[20px] '
                                    onClick={handleApplyFilter}
                                >
                                    Apply Filter
                                </button>
                            </div>

                        </div>
                    </div>
                )}
        </div>
    );
}

export default Filter;