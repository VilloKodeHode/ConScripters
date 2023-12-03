export const Calender = ({day, week, month, year}) => {
  return (
    <div className="p-8 bg-light w-fit">
      <p>Year: {year}</p>
      <p>{month}</p>
      <p>Week: {week}</p>
      <p>{day}</p>
    </div>
  );
};
