import React, { useEffect, useState } from "react";

export default function TopVisaDestination() {
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
      alert(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container topVisaDestination mb-3">
      <div className="row">
        <h2 className="fw-bold mb-4">Top Visa Destination</h2>

        {Array.isArray(countryData) ? (
          countryData.map((country) => (
            <div className="col-md-6 mb-3">
              <div className="smallCard">
                <div className="smallCardTitle">
                  <div
                    className="title"
                    key={country._id}
                    value={country.countryName}
                  >
                    {country.countryName}
                    <br />
                    <span className="smallCardPrice">
                      PKR_{country.countryPrice}
                    </span>
                  </div>
                </div>
                <div className="CardLink">&gt;</div>
              </div>
            </div>
          ))
        ) : (
          <option key="noCountry" disabled>
            No Country Found
          </option>
        )}
      </div>
    </div>
  );
}
