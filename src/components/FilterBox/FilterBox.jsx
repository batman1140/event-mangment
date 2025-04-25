import { useState, useEffect } from "react";
import { generateDataOptions, months, years } from "../../utils/DataRender";
import { MdCalendarMonth } from "react-icons/md";
import "./FilterBox.css";

const FilterBox = ({ getMonthYear }) => {
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [selectedYear, setSelectedYear] = useState(2025);

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(Number(e.target.value));
  };

  useEffect(() => {
    getMonthYear(selectedMonth, selectedYear);
  }, [selectedMonth, selectedYear, getMonthYear]);

  return (
    <div className="filter-card">
      <div className="filter-header">
        <h2>Find Events</h2>
        <p>Select month and year to filter events</p>
      </div>
      
      <form className="filter-form">
        <div className="filter-group">
          <label htmlFor="month">
            <MdCalendarMonth className="icon" /> Month
          </label>
          <select
            id="month"
            value={selectedMonth}
            onChange={handleMonthChange}
          >
            {generateDataOptions(months)}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="year">
            <MdCalendarMonth className="icon" /> Year
          </label>
          <select
            id="year"
            value={selectedYear}
            onChange={handleYearChange}
          >
            {generateDataOptions(years)}
          </select>
        </div>
      </form>
    </div>
  );
};

export default FilterBox;