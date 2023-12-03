import { useEffect, useState } from "react";
import { SelectClass } from "./SelectClass";

export const DashBoard = ({classType, setClassType, name, setName, setPlayerCardVisibility}) => {
  const [greeting, setGreeting] = useState("");
  const [currentForm, setCurrentForm] = useState(1);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const updateGreeting = (e) => {
    e.preventDefault();
    setGreeting(
      name && classType
        ? `Hello ${name}! I see you are a ${classType}`
        : "Please write in all fields"
    );
    setPlayerCardVisibility(true);
    setCurrentForm((prevForm) => prevForm + 1);
  };

  const handleClassClick = (selectedClass) => {
    setClassType(selectedClass);
  };

  const advanceToNextForm = () => {
    setCurrentForm((prevForm) => prevForm + 1);
  };

  return (
    <div className="h-full col-start-3 col-end-11 row-start-2 row-end-6 bg-orange-100">
      <div className="flex flex-col items-center justify-center h-full gap-8 py-8">
        {currentForm === 1 && (
          <>
            <h1 className="text-4xl">Dungeons and dragons: ConScriptors</h1>
            <section className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-12">
                <label htmlFor="name" className="text-lg font-semibold text-orange-800" title="Name">
                  Character name:
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                  className="p-2 font-semibold bg-orange-300 border-2 border-orange-900 rounded-md hover:bg-orange-200 hover:border-orange-800"
                />
              </div>
              <SelectClass classType={classType} handleClassClick={handleClassClick} />

              <button onClick={updateGreeting} className="px-4 py-2 my-4 transition bg-orange-300 border-2 border-orange-900 rounded-md hover:bg-orange-200 hover:border-orange-800 w-fit">Create character</button>
            </section>
          </>
        )}

        {currentForm === 2 && (
          <>
            <h3 className="text-3xl">{greeting}</h3>
          </>
        )}
      </div>
    </div>
  );
};
