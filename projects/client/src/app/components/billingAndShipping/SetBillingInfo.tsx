import { useState } from 'react';

import userStore from '@/app/store/userStore';

import Dropdown from '../common/Dropdown';
import LabelInput from '../common/LabelInput';
import { Bolivia, countryList, USA } from './extraComponents/Lists';

function SetBillingInfo() {
  const buttonStyle = 'font-ropa bg-none text-2xl underline';
  const [selectedCountry, setSelectedCountry] = useState('');
  const { user } = userStore.getState();

  return (
    <form className='flex-col bg-[#DED9E1] p-5 h-max w-1/4'>
      <span className='text-3xl'>Enter your name and Address:</span>
      <div className='flex-col mt-5'>
        <LabelInput inputText={user.firstName}>Name(s)</LabelInput>
        <LabelInput inputText={user.lastName}>Last Name(s)</LabelInput>
        <LabelInput inputText={`${user.streetAddress} , ${user.building}`}>
          Street Address (Street, Building number)
        </LabelInput>
      </div>

      <div className='flex justify-between'>
        <LabelInput inputText={user.zipCode} className='mr-3'>
          Zip code
        </LabelInput>
        <Dropdown
          defaultItem={user.city}
          items={selectedCountry === 'Bolivia' ? Bolivia : USA}
        >
          States
        </Dropdown>
      </div>

      <Dropdown
        items={countryList}
        defaultItem={user.country}
        onSelect={selectedItem => setSelectedCountry(selectedItem)}
      >
        Country
      </Dropdown>
      <div className='flex justify-between mt-11'>
        <button type='button' className={buttonStyle}>
          Cancel
        </button>
        <button type='submit' className={buttonStyle}>
          Accept
        </button>
      </div>
    </form>
  );
}

export default SetBillingInfo;
