import { useState } from 'react';

import userStore from '@/app/store/userStore';

import Dropdown from '../common/Dropdown';
import LabelInput from '../common/LabelInput';
import { Bolivia, countryList, USA } from './extraComponents/Lists';

function SetBillingInfo() {
  const buttonStyle = 'font-ropa bg-none text-2xl underline';
  const [selectedCountry, setSelectedCountry] = useState('');
  const { user } = userStore.getState();
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [streetAddress, setStreetAddress] = useState(user.streetAddress);
  const [building, setBuilding] = useState(user.building);
  const [zipCode, setZipCode] = useState(user.zipCode);
  const [city, setCity] = useState(user.city);
  const [country, setCountry] = useState(user.country);

  const handleUpdate = async () => {
    await fetch(`/api/user/${user.userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        streetAddress,
        building,
        zipCode,
        city,
        country,
      }),
    });
  };

  function handleAddress(address: string) {
    const [left, right] = address.split(',');

    setStreetAddress(left);
    setBuilding(right);
  }

  return (
    <form className='flex-col bg-[#DED9E1] p-5 h-max w-1/4'>
      <span className='text-3xl'>Enter your name and Address:</span>
      <div className='flex-col mt-5'>
        <LabelInput
          inputText={firstName}
          onChange={value => setFirstName(value)}
        >
          Name(s)
        </LabelInput>
        <LabelInput inputText={lastName} onChange={value => setLastName(value)}>
          Last Name(s)
        </LabelInput>
        <LabelInput
          inputText={`${streetAddress} , ${building}`}
          onChange={value => handleAddress(value)}
        >
          Street Address (Street, Building number)
        </LabelInput>
      </div>

      <div className='flex justify-between'>
        <LabelInput
          inputText={zipCode}
          onChange={value => setZipCode(value)}
          className='mr-3'
        >
          Zip code
        </LabelInput>
        <Dropdown
          defaultItem={city}
          items={selectedCountry === 'Bolivia' ? Bolivia : USA}
          onSelect={selectedItem => setCity(selectedItem)}
        >
          States
        </Dropdown>
      </div>

      <Dropdown
        items={countryList}
        defaultItem={country}
        onSelect={selectedItem => {
          setSelectedCountry(selectedItem);
          setCountry(selectedItem);
        }}
      >
        Country
      </Dropdown>
      <div className='flex justify-between mt-11'>
        <button type='button' className={buttonStyle}>
          Cancel
        </button>
        <button type='button' onClick={handleUpdate} className={buttonStyle}>
          Accept
        </button>
      </div>
    </form>
  );
}

export default SetBillingInfo;
