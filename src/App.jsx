import { useState, useRef } from "react";

import "./App.css";
import { Calender } from "./components/Date";
import { DashBoard } from "./components/Dashboard";
import { PlayerCard } from "./components/Playercard";

function App() {
  const [day, setDay] = useState(1);
  const [week, setWeek] = useState(1);
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(1);
  const [classType, setClassType] = useState("");
  const [name, setName] = useState("");
  const [playerCardVisibility, setPlayerCardVisibility] = useState(false);
  const [health, setHealth] = useState(10);
  const [gold, setGold] = useState(0);
  const [exp, setExp] = useState(0);
  const [level, setLevel] = useState(1);
  const [skillPoints, setSkillPoints] = useState(10);
  
  let player = {
    name: `${name}`,
    class: `${classType}`,
    health: `${health}`,
    level: `${level}`,
    exp: `${exp}`,
    skills: [
      {
        name:"Strength",
        level: 1,
      },
      {
        name:"Dexterity",
        level: 1,
      },
      {
        name:"Intelligence",
        level: 1,
      },
      {
        name:"Endurance",
        level: 1,
      }
    ],
    inventory: {
      gold: `${gold}`,
      items: [
        {
          name: "Beginner Sword",
          damage: 10,
          type: "weapon",
          quantity: 1,
          durability: 100,
          description: "This is a sword",
          itemlevel: 1,
        },
        {
          name: "Beginner Shield",
          defense: 10,
          type: "armor",
          quantity: 1,
          durability: 100,
          description: "This is a shield",
          itemlevel: 1,
        },
        {
          name: "Beginner Potion",
          heal: 10,
          type: "consumable",
          quantity: 3,
          description: "This is a potion",
          itemlevel: 1,
        },
      ],
    },
  };

  const incrementDays = () => {
    if (day < 7) {
      setDay(day + 1);
    } else {
      setDay(1);
      incrementWeek();
    }
  };

  const dayString = (day) => {
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    return days[day - 1];
  };

  const incrementWeek = () => {
    if (week < 4) {
      setWeek(week + 1);
    } else {
      setWeek(1);
      incrementMonth();
    }
  };

  const incrementMonth = () => {
    if (month < 12) {
      setMonth(month + 1);
    } else {
      setMonth(1);
      incrementYear();
    }
  };

  const monthString = (month) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[month - 1];
  };

  const incrementYear = () => {
    setYear(year + 1);
  };

  return (
    <>
      <main className="grid items-center justify-center min-h-screen grid-cols-12 grid-rows-6 bg-dark">
        <Calender
          day={dayString(day)}
          week={week}
          month={monthString(month)}
          year={year}
        />
        <DashBoard
          setPlayerCardVisibility={setPlayerCardVisibility}
          incrementDays={incrementDays}
          classType={classType}
          setClassType={setClassType}
          name={name}
          setName={setName}
          player={player}
        />
        <PlayerCard
          playerCardVisibility={playerCardVisibility}
          player={player}
          setHealth={setHealth}
          health={health}
          setGold={setGold}
          gold={gold}
          level={level}
          setLevel={setLevel}
          skillPoints={skillPoints}
          setSkillPoints={setSkillPoints}
          exp={exp}
          setExp={setExp}
        />
      </main>
    </>
  );
}

export default App;
