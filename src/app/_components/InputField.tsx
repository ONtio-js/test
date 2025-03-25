import React from 'react'

const InputField = ({label,type,name,onchange,placeholder}:{
    label:string;
    type:string;
    name: string;
    placeholder:string;
    onchange:(event: React.ChangeEvent<HTMLInputElement>) => void
}) => {
  return (
    <div className='w-full my-1'>
      <label className="block font-medium text-gray-700" htmlFor="">
        {label}
      </label>
      <div className='border-2 border-gray-200 bg-transparent py-3 rounded-lg mt-1 pl-5 w-full'>
        <input
          type={type}
          placeholder={placeholder}
          onChange={onchange}
          name={name}
          className="border-none bg-transparent outline-none w-full focus:border-none focus:outline-none"
        />
      </div>
    </div>
  );
}

export default InputField