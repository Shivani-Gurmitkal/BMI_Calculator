import { useState } from "react";
import { useForm } from "react-hook-form";

function App(){
  let [value,setValue] = useState("");
  let [range, setRange] = useState("");
  let {register, handleSubmit,reset} = useForm();
  function submitHandler(data){
    let height = data.height;
    let weight = data.weight;

    let total = ((weight / (height * height)).toFixed(1));
    setValue(total);
    let rangeValue = '';
    if( total < 18.5 ){
      rangeValue = 'Underweight';
    }
    else if( total >= 18.5 && total <= 24.9){
      rangeValue = 'Normal weight';
    }
    else if( total >= 25 && total <= 29.9){
      rangeValue = 'Overweight';
    }
    else if(total >= 30 && total <= 35){
      rangeValue ='Obesity';
    }
    else{
      rangeValue = 'Severe obesity';
    }
    setRange(rangeValue);
    reset();
  }
  return (
    <>
    <div className="mx-auto flex h-screen w-full items-center justify-center">
      <form action="" className="w-[400px]" onSubmit={handleSubmit(submitHandler)}>
        <h1 className="text-xl font-medium text-center">BMI Calculator</h1>
        <div className="flex mt-2 gap-3">
          <input type="text" {...register('height')} className="w-1/2 border p-3 rounded-md outline-none" placeholder="Enter your Height"/>
          <input type="text" {...register('weight')} className="border p-3 rounded-md outline-none" placeholder="Enter your Weight"/>
        </div>
        <div className="border mt-4 p-3 rounded-md outline-none text-xl">Your BMI: <span className="">{value}</span></div>
        <div className="border mt-4 p-3 rounded-md outline-none text-xl">Range: <span className="">{range}</span></div>
        <input type="submit" className="bg-black text-white w-full mt-3 p-3 rounded-md" />
      </form>
    </div>
    </>
  )
}

export default App;