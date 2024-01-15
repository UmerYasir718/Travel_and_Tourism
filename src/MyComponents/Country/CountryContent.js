import React from "react";
import { useLocation } from "react-router-dom";
export default function CountryContent() {
  const location = useLocation();

  // const [loading, setLoading] = useState(false);

  // const fetchVisaInfo = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await fetch(`http://localhost:8000/home/${countryName}`);
  //     if (response.ok) {
  //       const data = await response.json();
  //       setVisaInfo(data);
  //     } else {
  //       console.error("Error fetching visa information:", response.statusText);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching visa information:", error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchVisaInfo();
  // }, [countryName]);
  return (
    <>
      <div className="container my-5 ">
        <h2>{location.state.countryData.country}</h2>
        <p>
          <ul>
            <li>
              <b>Visa Type:</b> {location.state.countryData.visa_type}
            </li>
            <li>
              <b>Entry Type:</b> {location.state.countryData.entry_type}
            </li>
            <li>
              <b>Processing Time:</b>{" "}
              {location.state.countryData.processing_time}
            </li>
          </ul>
          {location.state.countryData.country} visa from Pakistan is easy to
          acquire with{" "}
          <b className="text-danger">
            {location.state.countryData.visa_service_provider}
          </b>
          . {location.state.countryData.country} visitor visa from Pakistan
          takes a maximum of {location.state.countryData.processing_time} weeks
          to process. {location.state.countryData.visa_service_provider} also
          facilitates {location.state.countryData.country} visas.
        </p>
        {/* ---------------------------------------------------Cards section----------------------------------------------------------------- */}
        <div className="card">
          <h3 className="card-header ">Document Required </h3>
          <div className="card-body">
            <p>
              <b className="text-primary"> 1-NADRA </b>
              <h5>
                Documents Required for {location.state.countryData.country} Visa
                from Pakistan
              </h5>
              Below are the requirements for an{" "}
              {location.state.countryData.country} visa from Pakistan
              <div className="pasport">
                <h5 className="my-4">Passport:</h5>
                <ul>
                  <li>
                    {" "}
                    {location.state.countryData.visa_requirements.passport.requirements.map(
                      (requirement, index) => (
                        <li key={index}>{requirement}</li>
                      )
                    )}
                  </li>
                </ul>
              </div>
              <div className="requireDocument">
                <h5 className="my-4">
                  Required Documents for {location.state.countryData.country}{" "}
                  Visa from Pakistan
                </h5>
                <ul>
                  <li>
                    {" "}
                    {location.state.countryData.visa_requirements.documents_required.map(
                      (requirement, index) => (
                        <li key={index}>{requirement}</li>
                      )
                    )}
                  </li>
                </ul>
              </div>
            </p>
            <p>
              <b className="text-primary">2- Photographs:</b>
              <h5>
                Photographs for {location.state.countryData.country} Visa from
                Pakistan
              </h5>
              <ul>
                <li>
                  <li>
                    {" "}
                    {location.state.countryData.photographs.requirements.map(
                      (requirement, index) => (
                        <li key={index}>{requirement}</li>
                      )
                    )}
                  </li>
                </li>
              </ul>
            </p>
            <p>
              <b className="text-primary">3- Additional Documents</b>
              <h4>
                Financial Documents for {location.state.countryData.country}{" "}
                Visa from Pakistan
              </h4>
              <h5>If Employed: </h5>
              <ul>
                <li>
                  {" "}
                  {location.state.countryData.additional_documents.financial_documents.employed.map(
                    (requirement, index) => (
                      <li key={index}>{requirement}</li>
                    )
                  )}
                </li>
              </ul>
              <h5>If a Self-Employed Professional / Businessman </h5>
              <ul>
                <li>
                  {" "}
                  {location.state.countryData.additional_documents.financial_documents.self_employed.map(
                    (requirement, index) => (
                      <li key={index}>{requirement}</li>
                    )
                  )}
                </li>
              </ul>
              <div className="supportingDocument">
                <h4>
                  Supporting Documents for {location.state.countryData.country}{" "}
                  Visa from Pakistan
                </h4>
                <h5>If Employed:</h5>
                <ul>
                  <li>
                    {" "}
                    {location.state.countryData.additional_documents.supporting_documents.employed.map(
                      (requirement, index) => (
                        <li key={index}>{requirement}</li>
                      )
                    )}
                  </li>
                </ul>
              </div>
              <div className="selfEmployed">
                <h5>If a Self-Employed Professional / Businessman </h5>
                <ul>
                  <li>
                    {" "}
                    {location.state.countryData.additional_documents.supporting_documents.self_employed.map(
                      (requirement, index) => (
                        <li key={index}>{requirement}</li>
                      )
                    )}
                  </li>
                </ul>
              </div>
              <div className="student">
                <h5>If Student</h5>
                <ul>
                  <li>
                    {" "}
                    {location.state.countryData.additional_documents.supporting_documents.student.map(
                      (requirement, index) => (
                        <li key={index}>{requirement}</li>
                      )
                    )}
                  </li>
                </ul>
              </div>
              <div className="retired">
                <h5>If Retired</h5>
                <ul>
                  <li>
                    {" "}
                    {location.state.countryData.additional_documents.supporting_documents.retired.map(
                      (requirement, index) => (
                        <li key={index}>{requirement}</li>
                      )
                    )}
                  </li>
                </ul>
              </div>
            </p>
          </div>
        </div>
        {/* ---------------------------------------------------------Card#2---------------------------------------------- */}
        <div className="card my-5">
          <h3 className="card-header">Important Notes</h3>
          <div className="card-body">
            <div className="importantNotes">
              <h5>
                {" "}
                Important Note for {
                  location.state.countryData.country
                } Visa:{" "}
              </h5>
              <ul>
                <li>
                  {" "}
                  {location.state.countryData.important_notes.notes.map(
                    (requirement, index) => (
                      <li key={index}>{requirement}</li>
                    )
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
