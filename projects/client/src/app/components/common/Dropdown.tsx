import { ChangeEvent, useState } from 'react';

function Dropdown({ children, items, className, onSelect }: DropDownProps) {
  const [selectedItem, setSelectedItem] = useState('');

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedItem(selectedValue);
    if (onSelect) {
      onSelect(selectedValue);
    }
  };

  return (
    <div className={`${className} flex flex-col font-ropa w-full text-2xl`}>
      <span>{children}</span>
      <select
        id='countryDropdown'
        value={selectedItem}
        onChange={handleSelectChange}
        className='w-full bg-white text-black text-opacity-50 rounded-md p-3'
      >
        {items.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
