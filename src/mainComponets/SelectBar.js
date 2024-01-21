/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SelectBar() {
  const navigate = useNavigate();
  const [countryData, setCountryData] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [countryReord, setCountryRecord] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const handleSelectedCountry = async (e) => {
    setSelectedCountry(e.target.value);
  };
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
  const handleCountryRecord = async (selectedCountry) => {
    try {
      const response = await fetch(
        `https://travelandtourismapis-production.up.railway.app/find/${selectedCountry}`
      );
      const json = await response.json();
      setCountryRecord(json);
      console.log("Before navigate");
      navigate("/country", {
        state: {
          countryData: json,
        },
      });
      console.log("After navigate");
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
            onChange={handleSelectedCountry}
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
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={handleCountryRecord(selectedCountry)}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
