import { useState } from "react";

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
  function playerHealthString() {
    return (
    <p
    className={
      player.health < 10
        ? "text-red-500"
        : player.health < 50
        ? "text-yellow-500"
        : "text-green-500"
    }
  >
    Health: {player.health}
  </p>
  )
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
            : "fixed bottom-0 left-0 flex-col w-[256px] h-[150px] gap-6 text-black bg-gray-200"
        }
        `}
        >
          <img
            className="w-24"
            src={`/images/classtypes/${player.class.toLowerCase()}.webp`}
            alt=""
          />

          <p>Name: {player.name}</p>
          <p>Class: {player.class}</p>
          <p>Level: {player.level}</p>
          <p>Exp: {player.exp}</p>
          <p>Gold: {player.inventory.gold}</p>
            {playerHealthString()}

          <div className="flex justify-around m-2 justify-self-end">
            <button
              onClick={() => setInventoryOpen(!inventoryOpen)}
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
              Inventory
            </button>

            <button
              onClick={() => setStatsOpen(!statsOpen)}
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
              Stats
            </button>
          </div>
        </div>
      ) : null}

      {inventoryOpen === true && playerCardVisibility === true ? (
        <div className="fixed bottom-0 flex-col w-[256px] h-[300px] gap-6 text-black bg-gray-200 left-64">
          <p>Gold: {player.inventory.gold}</p>
          <p>Items:</p>
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
          className={`fixed bottom-0 flex-col w-64 h-[300px] gap-6 text-black bg-gray-200 ${
            inventoryOpen ? "left-[512px]" : "left-[256px]"
          } position-fixed`}
        >
          <p>Skills: </p>
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
