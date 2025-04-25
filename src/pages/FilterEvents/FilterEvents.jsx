import { useCallback, useState } from "react";
import FilterBox from "../../components/FilterBox/FilterBox";
import SearchEventList from "../../components/SerachEventList/SearchEventList";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import './FilterEvents.css';

const FilterEvents = () => {
  const [monthYear, setMonthYear] = useState({
    selectedMonth: "January",
    selectedYear: 2025
  });

  const getMonthYear = useCallback((selectedMonth, selectedYear) => {
    setMonthYear({ selectedYear, selectedMonth });
  }, []);

  return (
    <div className="page-wrapper">
      <Navigation />
      <div className="find-events-wrapper">
        <div className="find-events-container">
          <FilterBox getMonthYear={getMonthYear} />
          <div className="results-section">
            <div className="results-header">
              <h2>Events in {monthYear.selectedMonth} {monthYear.selectedYear}</h2>
              <p>Browse through events happening in your selected time period</p>
            </div>
            <SearchEventList monthYear={monthYear} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FilterEvents;