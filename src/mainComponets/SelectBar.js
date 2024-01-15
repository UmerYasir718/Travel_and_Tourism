import React, { useEffect, useState } from "react";

export default function SelectBar() {
  const [countryData, setCountryData] = useState("");
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://travelandtourismapis-production.up.railway.app/home/countries"
      );
      const json = await response.json();
      setCountryData(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="row SelectSetting">
        <div className="col- col-sm-12 col-md-6 col-lg-6 SelectBar">
          <select
            className="form-select form-select-lg "
            aria-label="Large select example"
          >
            <option key="default" defaultValue>
              Select Country
            </option>
            {Array.isArray(countryData) ? (
              countryData.map((country) => (
                <option key={country._id} value={country.countryName}>
                  {country.countryName}
                </option>
              ))
            ) : (
              <option key="noCountry" disabled>
                No Country Found
              </option>
            )}
          </select>
        </div>
        <div className="col- col-sm-12 col-md-6 col-lg-6 SelectBtn">
          <button type="button" className="btn btn-primary btn-lg">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
