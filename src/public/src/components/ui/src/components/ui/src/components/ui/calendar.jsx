import React from "react";

export const Calendar = ({ selected, onSelect, mode, className, ...props }) => {
  // This is a simplified calendar component
  // In a real app, you would use a date picker library
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  // Generate dates for the current month
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className={className}>
      <div className="grid grid-cols-7 gap-1">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(day => (
          <div key={day} className="text-center font-medium">
            {day}
          </div>
        ))}
        
        {/* Fill in empty cells for days before the 1st of the month */}
        {Array.from({ length: new Date(year, month, 1).getDay() }, (_, i) => (
          <div key={`empty-${i}`} />
        ))}
        
        {/* Render all days */}
        {days.map(day => {
          const date = new Date(year, month, day);
          const isSelected = selected && 
            selected.getDate() === day && 
            selected.getMonth() === month && 
            selected.getFullYear() === year;
            
          return (
            <button
              key={day}
              type="button"
              onClick={() => onSelect(date)}
              className={`
                rounded-md w-8 h-8 text-center 
                ${isSelected ? 'bg-blue-500 text-white' : 'hover:bg-gray-800'}
              `}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
