import classTypes from "../data/classtypes.json";

export const SelectClass = ({ handleClassClick, classType }) => {

  return (
    <div className="flex flex-col items-center justify-center h-full gap-24">
      
      <div className="flex flex-col items-center gap-8">
        <h4 className="text-3xl">Select your class:</h4>
        <div className="flex flex-wrap justify-center w-full gap-4">
          {classTypes.map((chosenClass) => (
            <>
              <button
                onClick={() => handleClassClick(chosenClass.name)}
                className=""
              >
                <img
                  className={`w-24 h-24 duration-500 border-4 ${classType === chosenClass.name ? "border-green-500" : "border-orange-900 rounded-lg hover:border"}  rounded-lg  hover:scale-110`}
                  src={chosenClass.image}
                  alt={chosenClass.name}
                />
              </button>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
