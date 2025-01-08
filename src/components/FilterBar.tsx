import React from 'react';

interface FilterBarProps {
//   filter: string;
  setFilter: (filter: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ setFilter }) => {
  return (
    <div>
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('completed')}>Completed</button>
      <button onClick={() => setFilter('active')}>Uncompleted</button>
    </div>
  );
};

export default FilterBar;
