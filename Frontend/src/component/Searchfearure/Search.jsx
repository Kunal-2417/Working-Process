import React, { useState } from 'react';
import "./1.css";
import { useNavigate } from 'react-router-dom';
import Header from '../Navbar/Header';

const Search = () => {
  const navigate = useNavigate(); // Navigate hook
  const [companies, setCompanies] = useState({
    // Amplemeds: false,
    Daantwale: false,
    Dentalstall: false,
    // Dentaltix: false,
    Dentalworld: false,
    // Greenguava: false,
    Libraltraders: false,
    Medikabazaar: false,
    Mydentalstock: false,
    Pinkblue: false,
    Thedentaldealer: false,
  });

  const handleCompanyChange = (companyName) => {
    setCompanies((prevCompanies) => ({
      ...prevCompanies,
      [companyName]: !prevCompanies[companyName],
    }));
  };
  
  const handleSearch = () => {
    const productInput = document.querySelector('.channel-input');
    const product = productInput.value;
    console.log(product)

    const selectedCompanies = Object.entries(companies)
      .map(([company, isSelected]) => [company, isSelected]);
    // console.log(selectedCompanies);
    navigate("/allproducts", {
      state: { product, companies: selectedCompanies },
    });
  };

  return (
    <>
    <Header/>
      <div className="outer">
        <div className="searchbox">
          <div className="text1 mt-5">
            <h1>Dental Product Comparator <br /> New Experience</h1>
          </div>
          <div className="text2 mt-3">
            <span>What are you looking for? <br /></span>
          </div>
          <div className=" d-flex justify-content-center mt-5 bar">
            <div className="input-field">
              <input
                placeholder="Search"
                className="form-control channel-input"
              />
              <button className="btn btn1" onClick={handleSearch}>
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
          <div className="companiesbox">
            <h3>Websites Filter</h3>
            <div className="grid-container">
              {Object.entries(companies).map(([company, isSelected]) => (
                <div className="boxse" key={company}>
                  <div className="item">
                    <div className="checkbox-circle2">
                      <input
                        type="checkbox"
                        id={`checkbox-${company}`}
                        name="check"
                        checked={isSelected}
                        onChange={() => handleCompanyChange(company)}
                      />
                      <label htmlFor={`checkbox-${company}`}>{company}</label>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
