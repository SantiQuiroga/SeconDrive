import { useState } from 'react';

import userStore from '@/app/store/userStore';

import Dropdown from '../common/Dropdown';
import LabelInput from '../common/LabelInput';
import { Bolivia, countryList, USA } from './extraComponents/Lists';

function SetBillingInfo() {
  const buttonStyle = 'font-ropa bg-none text-2xl underline';
  const [selectedCountry, setSelectedCountry] = useState('');
  const { user, setUser } = userStore.getState();
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [streetAddress, setStreetAddress] = useState(user.streetAddress);
  const [building, setBuilding] = useState(user.building);
  const [zipCode, setZipCode] = useState(user.zipCode);
  const [city, setCity] = useState(user.city);
  const [country, setCountry] = useState('');
  const [streetBuilding, setStreetBuilding] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function handleAddress(address: string) {
    const [left, right] = address.split(',');

    setStreetAddress(left);
    setBuilding(right);
    setStreetBuilding(address);
  }

  function validateData() {
    const regexLettersAndSpaces = /^[A-Za-z\s]+$/;
    const regexFiveNumbers = /^\d{5}$/;
    const regexLettersNumbersCommaFourNumbers = /^[a-zA-Z0-9\s]+,\s\d{4}$/;

    if (!regexLettersAndSpaces.test(firstName)) {
      setErrorMessage('Name must contain only letters and spaces');
      return false;
    }
    if (!regexLettersAndSpaces.test(lastName)) {
      setErrorMessage('LastName must contain only letters and spaces');
      return false;
    }
    if (!regexFiveNumbers.test(zipCode)) {
      setErrorMessage('Zip code must contain 5 numbers');
      return false;
    }

    if (!regexLettersNumbersCommaFourNumbers.test(streetBuilding)) {
      setErrorMessage(
        `Pls follow the format 'Street name, 4numbers(building)'`
      );
      return false;
    }

    setErrorMessage('');
    return true;
  }
  const handleUpdate = async () => {
    if (validateData()) {
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
    }

    userStore.setState(prevState => {
      const updatedUser = {
        ...prevState.user,
        firstName,
        lastName,
        streetAddress,
        building,
        zipCode,
        city,
        country,
      };

      setUser(updatedUser);
      return prevState;
    });
  };

  return (
    <form className='flex-col bg-[#DED9E1] p-5 h-max w-1/4'>
      <span className='text-3xl'>Enter your name and Address:</span>
      <div className='flex-col mt-5'>
        <LabelInput
          inputText={firstName}
          onChange={value => setFirstName(value)}
          maxLength={25}
        >
          Name(s)
        </LabelInput>
        <LabelInput
          inputText={lastName}
          onChange={value => setLastName(value)}
          maxLength={25}
        >
          Last Name(s)
        </LabelInput>
        <LabelInput
          inputText={`${streetAddress} , ${building}`}
          onChange={value => handleAddress(value)}
          maxLength={50}
        >
          Street Address (Street, Building number)
        </LabelInput>
      </div>

      <div className='flex justify-between'>
        <LabelInput
          inputText={zipCode}
          onChange={value => setZipCode(value)}
          className='mr-3'
          maxLength={5}
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
      <p className='flex justify-center w-full'>{errorMessage}&nbsp;</p>
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
