import React, { useState } from 'react';
import logoImage from "../images/MainLogoTrans1.png"

function DropdownExample() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedSport, setSelectedSport] = useState('');

  const handleChangeCategory = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedCategory(e.target.value);
    setSelectedItem('');
    setSelectedSport('');
  };

  const handleChangeItem = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedItem(e.target.value);
  };

  const handleChangeSport = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedSport(e.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl mb-4">Dropdown Example</h1>

      {/* Category dropdown box */}
      <select
        value={selectedCategory}
        onChange={handleChangeCategory}
        className="p-2 rounded-md border-gray-300 mb-4"
      >
        <option value="">Select a category</option>
        <option value="general">General</option>
        <option value="sports">Sports</option>
        <option value="type">Exercise Type</option>
        <option value="muscle_g">Muscle Group</option>
      </select>

      {/* Item dropdown box */}
      {selectedCategory && (
        <select
          value={selectedItem}
          onChange={handleChangeItem}
          className="p-2 rounded-md border-gray-300 mb-4"
        >
          <option value="">Select an item</option>
          {selectedCategory === 'general' && (
            <>
              <option value="BenchPress">Bench Press</option>
              <option value="BarbellSquat">Barbell Squat</option>
              <option value="Deadlift">Deadlift</option>
            </>
          )}
          {selectedCategory === 'sports' && (
            <>
              <option value="basketball">Basketball</option>
              <option value="football">Football</option>
              <option value="baseball">Baseball</option>
            </>
          )}
          {selectedCategory === 'type' && (
            <>
              <option value="Endurance">Endurance</option>
              <option value="General">General</option>
              <option value="Power">Power</option>
              <option value="Speed">Speed</option>
            </>
          )}
          {selectedCategory === 'muscle_g' && (
            <>
              <option value="chest">Chest</option>
              <option value="back">Back</option>
              <option value="legs">Legs</option>
              <option value="arms">Arms</option>
            </>
          )}
        </select>
      )}

      {/* Sport-specific dropdown box */}
      {selectedItem && (
        <select
          value={selectedSport}
          onChange={handleChangeSport}
          className="p-2 rounded-md border-gray-300"
        >
          <option value="">Select an option</option>
          {selectedItem === 'basketball' && (
            <>
              <option value="DumbbellStepUps">Dumbbell Step Ups</option>
              <option value="BoxJumps">Box Jumps</option>
              <option value="Lines">Lines</option>
              <option value="LongDistanceRun">Long Distance Running</option>
              <option value="MountainClimbers">Mountain Climbers</option>
              <option value="BarbellSquat">Barbell Squat</option>
              <option value="BenchPress">Bench Press</option>
              <option value="CalfRaises">Calf Raises</option>
            </>
          )}
          {selectedItem === 'baseball' && (
            <>
              <option value="SkullCrushers">Skull Crushers</option>
              <option value="BenchPress">Bench Press</option>
              <option value="BarbellRows">Barbell Rows</option>
              <option value="DumbbellHammerCurls">Dumbbell Hammer Curls</option>
              <option value="BarbellSquat">Barbell Squat</option>
              <option value="MountainClimbers">Mountain Climbers</option>
              <option value="LongDistanceRunning">Long Distance Running</option>
            </>
          )}
          {selectedItem === 'football' && (
            <>
              <option value="DumbbellStepUps">Dumbbell Step Ups</option>
              <option value="BoxJumps">Box Jumps</option>
              <option value="DumbbellHammerCurls">Dumbbell Hammer Curls</option>
              <option value="LongDistanceRun">Long Distance Running</option>
              <option value="MountainClimbers">Mountain Climbers</option>
              <option value="Deadlift">Deadlift</option>
              <option value="BarbellSquat">Barbell Squat</option>
              <option value="BenchPress">Bench Press</option>
              <option value="BarbellRows">Barbell Rows</option>
            </>
          )}
        </select>
      )}
      <p className="mt-4">Selected category: {selectedCategory}</p>
      <p className="mt-2">Selected item: {selectedItem}</p>
      {selectedItem && <p className="mt-2">Selected option: {selectedSport}</p>}
    </div>
  );
}

//------------------------------------------------------------------------------------------------------
// Standard page header
function Header() {
  return (
    <div className="flex flex-row bg-darkRed pl-4 pr-4 w-screen justify-between items-center">
      <div className="flex flex-row gap-4">
        <h1>Shop</h1>
      </div>
      <div>
        <img src={logoImage} style={{ width: '300px', height: '120px' }} />
      </div>

    </div>
  )
}

function Exercise() {
  return (
    <div className="flex flex-col gap-4">
      <Header />
      <DropdownExample />
    </div>
  )
}
export default Exercise