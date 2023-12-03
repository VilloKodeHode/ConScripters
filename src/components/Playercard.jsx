import { useState, useEffect } from "react";

export const PlayerCard = ({
  playerCardVisibility,
  player,
  setHealth,
  health,
  setGold,
  gold,
  level,
  setLevel,
  skillPoints,
  setSkillPoints,
  exp,
  setExp,
}) => {
  const [inventoryOpen, setInventoryOpen] = useState(false);
  const [statsOpen, setStatsOpen] = useState(false);
  const [playerCardBig, setPlayerCardBig] = useState(true);

  function handleItemClick(item) {
    if (item.type === "consumable") {
      let newHealth = health + 10;
      if (newHealth > 100) {
        setHealth(100);
      } else {
        setHealth(newHealth);
      }
      item.quantity = item.quantity - 1;
      if (item.quantity === 0) {
        // remove item
      }
    }
  }


// function handleKeyDown(event) {
//   if (event.key === "i" || event.key === "I") {
//     setInventoryOpen(!inventoryOpen);
//   }
// }
// document.addEventListener("keydown", handleKeyDown);

  function playerHealth() {
    return (
      <div
        className={`${
          player.health < 10
            ? "text-red-500"
            : player.health < 50
            ? "text-yellow-500"
            : "text-green-500"
        }
            `}
      >
        <p>Health: {player.health}</p>
        <div className="w-full h-1 border-l-dark bg-black">
          <div
            style={{ width: `${player.health}%` }}
            className={`h-1 ${
              player.health < 10
                ? "bg-red-500"
                : player.health < 50
                ? "bg-yellow-500"
                : "bg-green-500"
            }
            
            
            `}
          ></div>
        </div>
      </div>
    );
  }
  function handleSkillClick(skill) {}

  return (
    <div>
      {playerCardVisibility === true ? (
        <div
          className={`
          ${
            playerCardBig
              ? "fixed bottom-0 left-0 flex-col w-[256px] h-[300px] gap-6 text-black bg-gray-200"
              : "fixed bottom-0 left-0 flex w-[256px] h-[96px] text-black bg-gray-200"
          }
          
          
          `}
        >
          <img
            onClick={() => setPlayerCardBig(!playerCardBig)}
            className="w-[96px] h-[96px] cursor-pointer"
            src={`/images/classtypes/${player.class.toLowerCase()}.webp`}
            alt=""
          />

          {playerCardBig ? (
            <>
              <p>Name: {player.name}</p>
              <p>Class: {player.class}</p>
              <p>Level: {player.level}</p>
              <p>Exp: {player.exp}</p>
              {playerHealth()}
            </>
          ) : (
            <>
              <div className="flex flex-col w-full">
                <p>Level: {player.level}</p>
                <p>Exp: {player.exp}</p>
                {playerHealth()}
              </div>
            </>
          )}

          <div
            className={`
          ${
            playerCardBig
              ? "flex justify-around m-2 justify-self-end"
              : "hidden"
          }
          `}
          >
            <button
              onClick={() => setInventoryOpen(!inventoryOpen)}
              className={`
              ${
                playerCardBig
                  ? "px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                  : "hidden"
              }
              
              `}
            >
              {playerCardBig ? "[I]nventory" : "[I]"}
            </button>
            <button
              onClick={() => setStatsOpen(!statsOpen)}
              className={`
              ${
                playerCardBig
                  ? "px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                  : "hidden"
              }
              
              `}
            >
              {playerCardBig ? "[S]tats" : "[S]"}
            </button>
          </div>
        </div>
      ) : null}

      {inventoryOpen === true && playerCardVisibility === true ? (
        <div className="fixed bottom-0 flex-col w-[256px] h-[300px] gap-6 text-black bg-gray-200 left-64">
          <p>Gold: {player.inventory.gold}</p>
          <div className="flex-col w-full h-full bg-gray-600 ">
            {player.inventory.items.map((item) => (
              <p
                key={item.name}
                onClick={() => handleItemClick(item)}
                className={`
              ${item.type === "consumable" ? "text-red-500" : ""}
              ${item.type === "weapon" ? "text-blue-500" : ""}
              ${item.type === "armor" ? "text-green-500" : ""}
              noselect
              hover:cursor-pointer
              `}
              >
                {item.name} x {item.quantity}
              </p>
            ))}
          </div>
        </div>
      ) : null}

      {statsOpen === true && playerCardVisibility === true ? (
        <div
          className={`fixed bottom-0 flex-col w-64 h-fit max-h-[300px] gap-6 text-black bg-gray-200 ${
            inventoryOpen ? "left-[512px]" : "left-[256px]"
          } position-fixed`}
        >
          <p>Skillpoints available: {skillPoints}</p>
          <div className="flex-col w-full h-[fit-content] bg-gray-500 hover:cursor-pointer gap-2">
            {player.skills.map((skills) => (
              <h1 onClick={() => handleSkillClick(skills)}>
                {skills.name}: {skills.level}
              </h1>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};
