import React from 'react'
import { useState } from "react";
import { useForm } from "react-hook-form";

function BMIForm() {
    let [value,setValue] = useState("");
    let [range, setRange] = useState("");
    let {register, handleSubmit, reset, formState: { errors }} = useForm();

    const getBMICategory = (bmi) => {
      if (bmi < 18.5) return "Underweight";
      if (bmi >= 18.5 && bmi <= 24.9) return "Normal weight";
      if (bmi >= 25 && bmi <= 29.9) return "Overweight";
      if (bmi >= 30 && bmi <= 35) return "Obesity";
      return "Severe obesity";
    };
    
    function submitHandler(data){
    let height = parseFloat(data.height);
    let weight = parseFloat(data.weight);
    
    if (height <= 0 || weight <= 0) {
      alert("Please enter valid positive values for height and weight.");
      return;
    }

    let total = ((weight / (height * height)).toFixed(1));
    setValue(total);
    setRange(getBMICategory(total));

    reset();
  }

  return (
    <>

    <form onSubmit={handleSubmit(submitHandler)} className="p-4 bg-white shadow-md rounded-lg" >
        <h1 className="text-xl font-medium text-center">BMI Calculator</h1>
        <div className="flex mt-6 gap-3">
          <div className="w-1/2">
            <input type="number" step="any" {...register('height', { required: true, min: 0.1 })} className="w-full border p-3 rounded-md outline-none" placeholder="Height in meters"/>
            {errors.height && <p className="text-red-500 text-sm">Enter a valid height</p>}
          </div>
          <div className="w-1/2">
            <input type="number" step="any"  {...register('weight', { required: true, min: 0.1 })} className="w-full border p-3 rounded-md outline-none" placeholder="Weight in kg"/>
            {errors.weight && <p className="text-red-500 text-sm">Enter a valid weight</p>}
          </div>
        </div>
        <div className="border mt-4 p-3 rounded-md outline-none text-xl">Your BMI: <span>{value}</span></div>
        <div className="border mt-4 p-3 rounded-md outline-none text-xl">Range: <span>{range}</span></div>
        <input type="submit" className="bg-black text-white w-full mt-3 p-3 rounded-md cursor-pointer" />
    </form>
      
    </>
  )
}

export default BMIForm
