import { useState } from 'react';

import Dropdown from '../common/Dropdown';
import LabelInput from '../common/LabelInput';
import { Bolivia, countryList, USA } from './extraComponents/Lists';

function SetBillingInfo() {
  const buttonStyle = 'font-ropa bg-none text-2xl underline';
  const [selectedCountry, setSelectedCountry] = useState('');
  return (
    <div className='flex-col bg-[#DED9E1] p-5 h-max w-1/4'>
      <span className='text-3xl'>Enter your name and Address:</span>
      <div className='flex-col mt-5'>
        <LabelInput inputText=''>Name(s)</LabelInput>
        <LabelInput inputText=''>Last Name(s)</LabelInput>
        <LabelInput inputText=''>Postal Address</LabelInput>
      </div>

      <div className='flex justify-between'>
        <LabelInput inputText='' className='mr-3'>
          Zip code
        </LabelInput>
        <Dropdown items={selectedCountry === 'Bolivia' ? Bolivia : USA}>
          States
        </Dropdown>{' '}
      </div>

      <Dropdown
        items={countryList}
        onSelect={selectedItem => setSelectedCountry(selectedItem)}
      >
        Country
      </Dropdown>
      <div className='flex justify-between mt-11'>
        <button type='button' className={buttonStyle}>
          Cancel
        </button>
        <button type='button' className={buttonStyle}>
          Accept
        </button>
      </div>
    </div>
  );
}

export default SetBillingInfo;
