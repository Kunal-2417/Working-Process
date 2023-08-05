import React from "react"
import "./DataRendering.css"
import Cards from "../Cardfeature/Cards"
// import Portfolio_data from "./Portfolio_data"
import { useNavigate } from 'react-router-dom';
import { useEffect, useState,useContext } from "react";
import PropTypes from 'prop-types';
import { ResultsContext } from '../../context/ResultContext';
import { BrandContext } from '../../context/BrandContext';
import FilterMenu from "../Filtermenu/FilterMenu";
import Sidebar from "../Filtermenu/FilterMenu";
import Header from "../Navbar/Header";

const Portfolio = (props) => {
  // console.log(props.selectedCompanies)
  const [filters, setFilters] = useState({
    reviewFilter: 'all',
    minPriceFilter: '',
    maxPriceFilter: '',
    companyNameFilter: ''
  });

  const { brand, setBrand } = useContext(BrandContext);

  const [companies, setCompanies] = useState({
    Daantwale: false,
    Dentalstall: false,
    Dentalworld: false,
    Libraltraders: false,
    Medikabazaar: false,
    Mydentalstock: false,
    Pinkblue: false,
    Thedentaldealer: false,
  });

  const {
    result,
    setResult,
    result2,
    setResult2,
    result3,
    setResult3,
    result4,
    setResult4,
    result5,
    setResult5,
    result6,
    setResult6,
    result7,
    setResult7,
    result8,
    setResult8,
    result9,
    setResult9,
    result10,
    setResult10,
    result11,
    setResult11,
    tempResult,
    setTempResult,
    tempResult2,
    setTempResult2,
    tempResult3,
    setTempResult3,
    tempResult4,
    setTempResult4,
    tempResult5,
    setTempResult5,
    tempResult6,
    setTempResult6,
    tempResult7,
    setTempResult7,
    tempResult8,
    setTempResult8,
    tempResult9,
    setTempResult9,
    tempResult10,
    setTempResult10,
    tempResult11,
    setTempResult11,
  } = useContext(ResultsContext);


  const [sortOrder, setSortOrder] = useState("asc");
  //useeffect syntax?
  const submitChannel = async () => {
    let allFalse = true;

    for (let i = 0; i < props.selectedCompanies.length; i++) {
      if (props.selectedCompanies[i][1] !== false) {
        allFalse = false;
        break;
      }
    }

    if (allFalse) {
      for (let i = 0; i < props.selectedCompanies.length; i++) {
        props.selectedCompanies[i][1] = true;
      }
    }
    // const ProductInput=document.querySelector('.channel-input');x
    console.log(props.selectedCompanies);
    const product = props.product
    if (props.selectedCompanies[0][1]) {
      const startTime = performance.now();
      const res = await fetch('http://localhost:3000/creators', {
        method: 'POST',
        body: JSON.stringify({ product }),
        headers: { 'Content-Type': 'application/json' }
      });
      const endTime = performance.now();
      const elapsedTime = endTime - startTime; 
      const data = await res.json();
      setResult(data.Data1.list1)
      setTempResult(data.Data1.list1)
      data.Data1.list1.map((value, index) => {
          setBrand((prevBrand) => [...prevBrand, value.name]);
        })
      const elapsedTimeInSeconds = elapsedTime / 1000; 
      console.log(`API request took ${elapsedTimeInSeconds} seconds`);
      
    }
    if (props.selectedCompanies[1][1]) {

      const res2 = await fetch('http://localhost:3000/creator2', {
        method: 'POST',
        body: JSON.stringify({ product }),
        headers: { 'Content-Type': 'application/json' }
      });
      const data2 = await res2.json();
      setResult2(data2.Data2.list2)
      setTempResult2(data2.Data2.list2)
      console.log(data2.Data2.list2.image)

      data2.Data2.list2.map((value, index) => {
        setBrand((prevBrand) => [...prevBrand, value.name]);
      })
    }
    if (props.selectedCompanies[2][1]) {

      const res3 = await fetch('http://localhost:3000/creator3', {
        method: 'POST',
        body: JSON.stringify({ product }),
        headers: { 'Content-Type': 'application/json' }
      });
      const data3 = await res3.json();
      setResult3(data3.Data3.list3)
      setTempResult3(data3.Data3.list3)
      data3.Data3.list3.map((value, index) => {
        setBrand((prevBrand) => [...prevBrand, value.name]);
      })
    }
    if (props.selectedCompanies[3][1]) {

      const res4 = await fetch('http://localhost:3000/creator4', {
        method: 'POST',
        body: JSON.stringify({ product }),
        headers: { 'Content-Type': 'application/json' }
      });
      const data4 = await res4.json();
      setResult4(data4.Data4.list4)
      setTempResult4(data4.Data4.list4)
      data4.Data4.list4.map((value, index) => {
        setBrand((prevBrand) => [...prevBrand, value.name]);
      })
    }
    if (props.selectedCompanies[4][1]) {
      const res5 = await fetch('http://localhost:3000/creator5', {
        method: 'POST',
        body: JSON.stringify({ product }),
        headers: { 'Content-Type': 'application/json' }
      });
      const data5 = await res5.json();
      setResult5(data5.Data5.list5)
      setTempResult5(data5.Data5.list5)
      data5.Data5.list5.map((value, index) => {
        setBrand((prevBrand) => [...prevBrand, value.name]);
      })
    }
    if (props.selectedCompanies[5][1]) {
      const res6 = await fetch('http://localhost:3000/creator6', {
        method: 'POST',
        body: JSON.stringify({ product }),
        headers: { 'Content-Type': 'application/json' }
      });
      const data6 = await res6.json();
      setResult6(data6.Data6.list6)
      setTempResult6(data6.Data6.list6)
      data6.Data6.list6.map((value, index) => {
        setBrand((prevBrand) => [...prevBrand, value.name]);
      })
    }
    if (props.selectedCompanies[6][1]) {
      const res7 = await fetch('http://localhost:3000/creator7', {
        method: 'POST',
        body: JSON.stringify({ product }),
        headers: { 'Content-Type': 'application/json' }
      });
      const data7 = await res7.json();
      setResult7(data7.Data7.list7)
      setTempResult7(data7.Data7.list7)
      data7.Data7.list7.map((value, index) => {
        setBrand((prevBrand) => [...prevBrand, value.name]);
      })
    }
    if (props.selectedCompanies[7][1]) {
      const res8 = await fetch('http://localhost:3000/creator8', {
        method: 'POST',
        body: JSON.stringify({ product }),
        headers: { 'Content-Type': 'application/json' }
      });
      const data8 = await res8.json();
      setResult8(data8.Data8.list8)
      setTempResult8(data8.Data8.list8)
      data8.Data8.list8.map((value, index) => {
        setBrand((prevBrand) => [...prevBrand, value.name]);
      })
    }
    if (props.selectedCompanies[8][1]) {
      const res9 = await fetch('http://localhost:3000/creator9', {
        method: 'POST',
        body: JSON.stringify({ product }),
        headers: { 'Content-Type': 'application/json' }
      });
      const data9 = await res9.json();
      setResult9(data9.Data9.list9)
      setTempResult9(data9.Data9.list9)
      data9.Data9.list9.map((value, index) => {
        setBrand((prevBrand) => [...prevBrand, value.name]);
      })
    }
    if (props.selectedCompanies[9][1]) {
      const res10 = await fetch('http://localhost:3000/creator10', {
        method: 'POST',
        body: JSON.stringify({ product }),
        headers: { 'Content-Type': 'application/json' }
      });
      const data10 = await res10.json();
      setResult10(data10.Data10.list10)
      setTempResult10(data10.Data10.list10)
      data10.Data10.list10.map((value, index) => {
        setBrand((prevBrand) => [...prevBrand, value.name]);
      })
    }
    if (props.selectedCompanies[10][1]) {
      const res11 = await fetch('http://localhost:3000/creator11', {
        method: 'POST',
        body: JSON.stringify({ product }),
        headers: { 'Content-Type': 'application/json' }
      });
      const data11 = await res11.json();
      setResult11(data11.Data11.list11)
      setTempResult11(data11.Data11.list11)
      data11.Data11.list11.map((value, index) => {
        setBrand((prevBrand) => [...prevBrand, value.name]);
      })
    }
    // return data;

  }
  // console.log(brand)
  useEffect(() => {
    submitChannel();
    console.log("Current sortOrder:", sortOrder);
    handleSortByPrice();
  }, [sortOrder])
  const navigate = useNavigate();     //Navigate hook
  const handleCompanyChange = (companyName) => {
    setCompanies((prevCompanies) => ({
      ...prevCompanies,
      [companyName]: !prevCompanies[companyName],
    }));
  };
  console.log(companies)
  const handleSearch = () => {
    const productInput = document.querySelector('.channel-input');
    const product = productInput.value;
    // console.log(product)

    const selectedCompanies = Object.entries(companies)
      .map(([company, isSelected]) => [company, isSelected]);
    navigate("/allproducts", {
      state: { product, companies:selectedCompanies },
    });
    window.location.reload()
  }

  const sortalpha=async()=>{
    const sortedData = [...tempResult].sort((a, b) => {
      const nameA = a.name.toUpperCase(); // Convert names to uppercase for case-insensitive sorting
      const nameB = b.name.toUpperCase();

      if (nameA < nameB) {
        return -1; // a should come before b in the sorted order
      }
      if (nameA > nameB) {
        return 1; // a should come after b in the sorted order
      }
      return 0; // names are equal
    });
    const sortedData2 = [...tempResult2].sort((a, b) => {
      const nameA = a.name.toUpperCase(); // Convert names to uppercase for case-insensitive sorting
      const nameB = b.name.toUpperCase();

      if (nameA < nameB) {
        return -1; // a should come before b in the sorted order
      }
      if (nameA > nameB) {
        return 1; // a should come after b in the sorted order
      }
      return 0; // names are equal
    });
    const sortedData3 = [...tempResult3].sort((a, b) => {
      const nameA = a.name.toUpperCase(); // Convert names to uppercase for case-insensitive sorting
      const nameB = b.name.toUpperCase();

      if (nameA < nameB) {
        return -1; // a should come before b in the sorted order
      }
      if (nameA > nameB) {
        return 1; // a should come after b in the sorted order
      }
      return 0; // names are equal
    });
    const sortedData4 = [...tempResult4].sort((a, b) => {
      const nameA = a.name.toUpperCase(); // Convert names to uppercase for case-insensitive sorting
      const nameB = b.name.toUpperCase();

      if (nameA < nameB) {
        return -1; // a should come before b in the sorted order
      }
      if (nameA > nameB) {
        return 1; // a should come after b in the sorted order
      }
      return 0; // names are equal
    });
    const sortedData5 = [...tempResult5].sort((a, b) => {
      const nameA = a.name.toUpperCase(); // Convert names to uppercase for case-insensitive sorting
      const nameB = b.name.toUpperCase();

      if (nameA < nameB) {
        return -1; // a should come before b in the sorted order
      }
      if (nameA > nameB) {
        return 1; // a should come after b in the sorted order
      }
      return 0; // names are equal
    });
    const sortedData6 = [...tempResult6].sort((a, b) => {
      const nameA = a.name.toUpperCase(); // Convert names to uppercase for case-insensitive sorting
      const nameB = b.name.toUpperCase();

      if (nameA < nameB) {
        return -1; // a should come before b in the sorted order
      }
      if (nameA > nameB) {
        return 1; // a should come after b in the sorted order
      }
      return 0; // names are equal
    });
    const sortedData7 = [...tempResult7].sort((a, b) => {
      const nameA = a.name.toUpperCase(); // Convert names to uppercase for case-insensitive sorting
      const nameB = b.name.toUpperCase();

      if (nameA < nameB) {
        return -1; // a should come before b in the sorted order
      }
      if (nameA > nameB) {
        return 1; // a should come after b in the sorted order
      }
      return 0; // names are equal
    });
    const sortedData8 = [...tempResult8].sort((a, b) => {
      const nameA = a.name.toUpperCase(); // Convert names to uppercase for case-insensitive sorting
      const nameB = b.name.toUpperCase();

      if (nameA < nameB) {
        return -1; // a should come before b in the sorted order
      }
      if (nameA > nameB) {
        return 1; // a should come after b in the sorted order
      }
      return 0; // names are equal
    });
    const sortedData9 = [...tempResult9].sort((a, b) => {
      const nameA = a.name.toUpperCase(); // Convert names to uppercase for case-insensitive sorting
      const nameB = b.name.toUpperCase();

      if (nameA < nameB) {
        return -1; // a should come before b in the sorted order
      }
      if (nameA > nameB) {
        return 1; // a should come after b in the sorted order
      }
      return 0; // names are equal
    });
    const sortedData10 = [...tempResult10].sort((a, b) => {
      const nameA = a.name.toUpperCase(); // Convert names to uppercase for case-insensitive sorting
      const nameB = b.name.toUpperCase();

      if (nameA < nameB) {
        return -1; // a should come before b in the sorted order
      }
      if (nameA > nameB) {
        return 1; // a should come after b in the sorted order
      }
      return 0; // names are equal
    });
    const sortedData11 = [...tempResult11].sort((a, b) => {
      const nameA = a.name.toUpperCase(); // Convert names to uppercase for case-insensitive sorting
      const nameB = b.name.toUpperCase();

      if (nameA < nameB) {
        return -1; // a should come before b in the sorted order
      }
      if (nameA > nameB) {
        return 1; // a should come after b in the sorted order
      }
      return 0; // names are equal
    });
    setTempResult(sortedData);
    setTempResult2(sortedData2)
    setTempResult3(sortedData3)
    setTempResult4(sortedData4)
    setTempResult5(sortedData5)
    setTempResult6(sortedData6)
    setTempResult7(sortedData7)
    setTempResult8(sortedData8)
    setTempResult9(sortedData9)
    setTempResult10(sortedData10)
  }

  const sortByRelevance = () => {
    const sortedArray = [...tempResult].sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      // Check if either name contains the keyword
      const containsKeywordA = nameA.includes(props.product.toUpperCase());
      const containsKeywordB = nameB.includes(props.product.toUpperCase());

      if (containsKeywordA && !containsKeywordB) {
        return -1; // a should come before b if it contains the keyword
      }
      if (!containsKeywordA && containsKeywordB) {
        return 1; // b should come before a if it contains the keyword
      }

      // If both names contain the keyword or neither of them does, sort alphabetically
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    const sortedArray2 = [...tempResult2].sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      // Check if either name contains the keyword
      const containsKeywordA = nameA.includes(props.product.toUpperCase());
      const containsKeywordB = nameB.includes(props.product.toUpperCase());

      if (containsKeywordA && !containsKeywordB) {
        return -1; // a should come before b if it contains the keyword
      }
      if (!containsKeywordA && containsKeywordB) {
        return 1; // b should come before a if it contains the keyword
      }

      // If both names contain the keyword or neither of them does, sort alphabetically
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    const sortedArray3 = [...tempResult3].sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      // Check if either name contains the keyword
      const containsKeywordA = nameA.includes(props.product.toUpperCase());
      const containsKeywordB = nameB.includes(props.product.toUpperCase());

      if (containsKeywordA && !containsKeywordB) {
        return -1; // a should come before b if it contains the keyword
      }
      if (!containsKeywordA && containsKeywordB) {
        return 1; // b should come before a if it contains the keyword
      }

      // If both names contain the keyword or neither of them does, sort alphabetically
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    const sortedArray4 = [...tempResult4].sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      // Check if either name contains the keyword
      const containsKeywordA = nameA.includes(props.product.toUpperCase());
      const containsKeywordB = nameB.includes(props.product.toUpperCase());

      if (containsKeywordA && !containsKeywordB) {
        return -1; // a should come before b if it contains the keyword
      }
      if (!containsKeywordA && containsKeywordB) {
        return 1; // b should come before a if it contains the keyword
      }

      // If both names contain the keyword or neither of them does, sort alphabetically
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    const sortedArray5 = [...tempResult5].sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      // Check if either name contains the keyword
      const containsKeywordA = nameA.includes(props.product.toUpperCase());
      const containsKeywordB = nameB.includes(props.product.toUpperCase());

      if (containsKeywordA && !containsKeywordB) {
        return -1; // a should come before b if it contains the keyword
      }
      if (!containsKeywordA && containsKeywordB) {
        return 1; // b should come before a if it contains the keyword
      }

      // If both names contain the keyword or neither of them does, sort alphabetically
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    const sortedArray6 = [...tempResult6].sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      // Check if either name contains the keyword
      const containsKeywordA = nameA.includes(props.product.toUpperCase());
      const containsKeywordB = nameB.includes(props.product.toUpperCase());

      if (containsKeywordA && !containsKeywordB) {
        return -1; // a should come before b if it contains the keyword
      }
      if (!containsKeywordA && containsKeywordB) {
        return 1; // b should come before a if it contains the keyword
      }

      // If both names contain the keyword or neither of them does, sort alphabetically
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    const sortedArray7 = [...tempResult7].sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      // Check if either name contains the keyword
      const containsKeywordA = nameA.includes(props.product.toUpperCase());
      const containsKeywordB = nameB.includes(props.product.toUpperCase());

      if (containsKeywordA && !containsKeywordB) {
        return -1; // a should come before b if it contains the keyword
      }
      if (!containsKeywordA && containsKeywordB) {
        return 1; // b should come before a if it contains the keyword
      }

      // If both names contain the keyword or neither of them does, sort alphabetically
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    const sortedArray8 = [...tempResult8].sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      // Check if either name contains the keyword
      const containsKeywordA = nameA.includes(props.product.toUpperCase());
      const containsKeywordB = nameB.includes(props.product.toUpperCase());

      if (containsKeywordA && !containsKeywordB) {
        return -1; // a should come before b if it contains the keyword
      }
      if (!containsKeywordA && containsKeywordB) {
        return 1; // b should come before a if it contains the keyword
      }

      // If both names contain the keyword or neither of them does, sort alphabetically
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    const sortedArray9 = [...tempResult9].sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      // Check if either name contains the keyword
      const containsKeywordA = nameA.includes(props.product.toUpperCase());
      const containsKeywordB = nameB.includes(props.product.toUpperCase());

      if (containsKeywordA && !containsKeywordB) {
        return -1; // a should come before b if it contains the keyword
      }
      if (!containsKeywordA && containsKeywordB) {
        return 1; // b should come before a if it contains the keyword
      }

      // If both names contain the keyword or neither of them does, sort alphabetically
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    const sortedArray10 = [...tempResult10].sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      // Check if either name contains the keyword
      const containsKeywordA = nameA.includes(props.product.toUpperCase());
      const containsKeywordB = nameB.includes(props.product.toUpperCase());

      if (containsKeywordA && !containsKeywordB) {
        return -1; // a should come before b if it contains the keyword
      }
      if (!containsKeywordA && containsKeywordB) {
        return 1; // b should come before a if it contains the keyword
      }

      // If both names contain the keyword or neither of them does, sort alphabetically
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    setTempResult(sortedArray);
    setTempResult2(sortedArray2);
    setTempResult3(sortedArray3);
    setTempResult4(sortedArray4);
    setTempResult5(sortedArray5);
    setTempResult6(sortedArray6);
    setTempResult7(sortedArray7);
    setTempResult8(sortedArray8);
    setTempResult9(sortedArray9);
    setTempResult10(sortedArray10);

   
  };

  // const sortedData2 = sortByRelevance(tempResult2, props.product);
  // const sortedData3 = sortByRelevance(tempResult2, props.product);
  // const sortedData4 = sortByRelevance(tempResult2, props.product);
  // const sortedData5 = sortByRelevance(tempResult2, props.product);
  // const sortedData6 = sortByRelevance(tempResult2, props.product);
  // const sortedData7 = sortByRelevance(tempResult2, props.product);
  // const sortedData8 = sortByRelevance(tempResult2, props.product);
  // const sortedData9 = sortByRelevance(tempResult2, props.product);
  // const sortedData10 = sortByRelevance(tempResult2, props.product);

  // setTempResult(sortedData);
  // setTempResult2(sortedData2);
  

  const onderfixhl = () => {
    setSortOrder("des", () => {
      console.log("Current sortOrder:", "des");
      handleSortByPrice();
    });
  }

  const onderfixlh = () => {
    setSortOrder("asc", () => {
      console.log("Current sortOrder:", "asc");
      handleSortByPrice();
    });
  }
  const handleSortByPrice = () => {
    const sortedResult = [...tempResult].sort((a, b) => {
      // const priceA = parseFloat(a.price.split("₹")[1]);
      // const priceB = parseFloat(b.price.split("₹")[1]);

      // if (sortOrder === "asc") {
      //   return priceA - priceB;
      // } else {
      //   return priceB - priceA;
      // }
    });

    setTempResult(sortedResult);

    const sortedResult2 = [...tempResult2].sort((a, b) => {
      const priceA = getPriceValue2(a.price);
      const priceB = getPriceValue2(b.price);
      if (priceA === null && priceB === null) {
        return 0;
      } else if (priceA === null) {
        return 1;
      } else if (priceB === null) {
        return -1;
      }

      if (sortOrder === "asc") {
        return priceA - priceB;
      } else {
        return priceB - priceA;
      }
    });
    setTempResult2(sortedResult2);

    const sortedResult3 = [...tempResult3].sort((a, b) => {
      const priceA = getPriceValue3(a.price);
      const priceB = getPriceValue3(b.price);
      if (priceA === null && priceB === null) {
        return 0;
      } else if (priceA === null) {
        return 1;
      } else if (priceB === null) {
        return -1;
      }

      if (sortOrder === "asc") {
        return priceA - priceB;
      } else {
        return priceB - priceA;
      }
    });
    setTempResult3(sortedResult3);

    // result4

    // result5
    const sortedResult5 = [...tempResult5].sort((a, b) => {
      const priceA = getPriceValue5(a.price);
      const priceB = getPriceValue5(b.price);
      if (priceA === null && priceB === null) {
        return 0;
      } else if (priceA === null) {
        return 1;
      } else if (priceB === null) {
        return -1;
      }

      if (sortOrder === "asc") {
        return priceA - priceB;
      } else {
        return priceB - priceA;
      }
    });
    setTempResult5(sortedResult5);

    // result6
    const sortedResult6 = [...tempResult6].sort((a, b) => {
      const priceA = getPriceValue6(a.price);
      const priceB = getPriceValue6(b.price);
      if (priceA === null && priceB === null) {
        return 0;
      } else if (priceA === null) {
        return 1;
      } else if (priceB === null) {
        return -1;
      }

      if (sortOrder === "asc") {
        return priceA - priceB;
      } else {
        return priceB - priceA;
      }
    });
    setTempResult6(sortedResult6);

    // setResult5(sortedResult5);

    // result6
    const sortedResult7 = [...tempResult7].sort((a, b) => {
      const priceA = getPriceValue7(a.price);
      const priceB = getPriceValue7(b.price);
      if (priceA === null && priceB === null) {
        return 0;
      } else if (priceA === null) {
        return 1;
      } else if (priceB === null) {
        return -1;
      }

      if (sortOrder === "asc") {
        return priceA - priceB;
      } else {
        return priceB - priceA;
      }
    });
    setTempResult7(sortedResult7);

    // result8
    const sortedResult8 = [...tempResult8].sort((a, b) => {
      const priceA = getPriceValue8(a.price);
      const priceB = getPriceValue8(b.price);
      if (priceA === null && priceB === null) {
        return 0;
      } else if (priceA === null) {
        return 1;
      } else if (priceB === null) {
        return -1;
      }

      if (sortOrder === "asc") {
        return priceA - priceB;
      } else {
        return priceB - priceA;
      }
    });
    setTempResult8(sortedResult8);

    // reslut9
    const sortedResult9 = [...tempResult9].sort((a, b) => {
      const priceA = getPriceValue9(a.price);
      const priceB = getPriceValue9(b.price);
      if (priceA === null && priceB === null) {
        return 0;
      } else if (priceA === null) {
        return 1;
      } else if (priceB === null) {
        return -1;
      }

      if (sortOrder === "asc") {
        return priceA - priceB;
      } else {
        return priceB - priceA;
      }
    });
    setTempResult9(sortedResult9);

    // result10
    const sortedResult10 = [...tempResult10].sort((a, b) => {
      const priceA = getPriceValue10(a.price);
      const priceB = getPriceValue10(b.price);
      if (priceA === null && priceB === null) {
        return 0;
      } else if (priceA === null) {
        return 1;
      } else if (priceB === null) {
        return -1;
      }

      if (sortOrder === "asc") {
        return priceA - priceB;
      } else {
        return priceB - priceA;
      }
    });
    setTempResult10(sortedResult10);

    // setSortOrder(sortOrder === "asc" ? "desc" : "asc");

  };
  const getPriceValue2 = (price) => {
    if (!price) {
      return null;
    }

    const priceParts = price.split("₹");
    const priceValue = priceParts.length > 1 ? parseFloat(priceParts[1]) : null;

    return priceValue;
  };
  const getPriceValue3 = (price) => {
    if (!price) {
      return null;
    }

    const priceParts = price.split("₹");
    const priceValue = priceParts.length > 1 ? parseFloat(priceParts[1].replace(/,/g, "")) : null;

    return priceValue;
  };

  const getPriceValue5 = (price) => {
    if (!price) {
    return null;
  }

    let numericalValue = null;
    // Sale price Rs. 180.00
    // Check if the price is in the format "SALE PRICE RS. XXX.XX"
    const regex3 = /Sale price[\r\n]+Rs\.\s*(\d+\.\d+)/i;
    const match3 = price.match(regex3);
    if (match3) {
      numericalValue = parseFloat(match3[1]);
    }
    return numericalValue;
  };
  const getPriceValue6 = (price) => {
    if (!price) {
      return null;
    }
    let numericalValue = null;

    // Check if the price is in the format "RSX,XXX.XXRSX,XXX.XX"
    const regex = /Rs(\d{1,3}(?:,\d{3})*\.\d+)/g;
    const matches = price.match(regex);
    if (matches) {
      const firstMatch = matches[0];
      const priceValue = firstMatch.split("Rs")[1].replace(/,/g, "");
      numericalValue = parseFloat(priceValue);
    }
    return numericalValue;
  };
  const getPriceValue7 = (price) => {
    if (!price) {
      return null;
    }

    let numericalValue = null;

    // Check if the price is in the format "RSX,XXX.XX RSX,XXX.XX"
    const regex = /Rs\.(\d{1,3}(?:,\d{3})*\.\d+)/g;
    const matches = price.match(regex);
    if (matches) {
      const firstMatch = matches[0];
      const priceValue = firstMatch.split("Rs.")[1].replace(/,/g, "");
      numericalValue = parseFloat(priceValue);
    }
    return numericalValue;
  };
  const getPriceValue8 = (price) => {
    if (!price) {
      return null;
    }

    let numericalValue = null;

    // Check if the price is in the format "Rs.X,XXX.XX"
    const regex = /Rs\.(\d{1,3}(?:,\d{3})*\.\d+)/g;
    const matches = price.match(regex);
    if (matches) {
      const firstMatch = matches[0];
      const priceValue = firstMatch.split("Rs.")[1].replace(/,/g, "");
      numericalValue = parseFloat(priceValue);
    }
    
    return numericalValue;
  };
  const getPriceValue9 = (price) => {
    if (!price) {
      return null;
    }

    let numericalValue = null;

    // Check if the price is in the format "Rs.X,XXX.XX"
    const regex = /Rs\.(\d{1,3}(?:,\d{3})*\.\d+)/g;
    const matches = price.match(regex);
    if (matches) {
      const firstMatch = matches[0];
      const priceValue = firstMatch.split("Rs.")[1].replace(/,/g, "");
      numericalValue = parseFloat(priceValue);
    }

    return numericalValue;
  };
  const getPriceValue10 = (price) => {
    if (!price) {
      return null;
    }
    
    let numericalValue = null;
    
    // Check if the price is in the format "₹ X.XX"
    const regex = /₹ (\d{1,3}(,\d{3})*(\.\d+)?)/g;
    const matches = price.match(regex);
    if (matches) {
      const firstMatch = matches[0];
      const priceValue = firstMatch.replace("₹ ", "").replace(",", "");
      numericalValue = parseFloat(priceValue);
    }
    // console.log(numericalValue)
    return numericalValue;
  };
  

  const handleApplyFilters =async (filters,isClear) => {
      const filteredResults = result.filter((item) => {
      console.log(filters.minPriceFilter);
      // Apply the review filter
      if (filters.reviewFilter !== 'all' && item.review !== filters.reviewFilter) {
        return false;
      }
      // Apply the min price filter
      if (filters.minPriceFilter !== 0) {
        const price = getPriceValue(item.price);
        if (price < filters.minPriceFilter) {
      // if (filters.minPriceFilter !== '' && parseFloat(item.price.split('₹')[1]) < parseFloat(filters.minPriceFilter)) {
        return false;
      }
    }
      // Apply the max price filter
      if (filters.maxPriceFilter !== 0) {
        const price = getPriceValue(item.price);
        if(price>filters.maxPriceFilter)
      // if (filters.maxPriceFilter !== '' && parseFloat(item.price.split('₹')[1]) > parseFloat(filters.maxPriceFilter)) {
        return false;
      }
      // Apply the company name filter
        // Apply the company name filter
        if (filters.companyNameFilter.length > 0) {
          const companyNameWords = item.name.split(' ');
          const firstCompanyNameWord = companyNameWords[0].toLowerCase();
          if (!filters.companyNameFilter.some(filter => filter.toLowerCase() === firstCompanyNameWord)) {
            return false;
          }
        }
        return true;


       // Include the item in the filtered results
    });
    console.log(filteredResults)
    setTempResult(filteredResults);

    const filteredResults2 = result2.filter((item) => {
      console.log(filters.minPriceFilter);
      // Apply the review filter
      if (filters.reviewFilter !== 'all' && item.review !== filters.reviewFilter) {
        return false;
      }
      // Apply the min price filter
      if (filters.minPriceFilter !== 0) {
        const price = getPriceValue2(item.price);
        if (price < filters.minPriceFilter) {
          // if (filters.minPriceFilter !== '' && parseFloat(item.price.split('₹')[1]) < parseFloat(filters.minPriceFilter)) {
          return false;
        }
      }
      // Apply the max price filter
      if (filters.maxPriceFilter !== 0) {
        const price = getPriceValue2(item.price);
        if (price > filters.maxPriceFilter)
          // if (filters.maxPriceFilter !== '' && parseFloat(item.price.split('₹')[1]) > parseFloat(filters.maxPriceFilter)) {
          return false;
      }
      // Apply the company name filter
      if (filters.companyNameFilter.length > 0) {
        const companyNameWords = item.name.split(' ');
        const firstCompanyNameWord = companyNameWords[0].toLowerCase();
        if (!filters.companyNameFilter.some(filter => filter.toLowerCase() === firstCompanyNameWord)) {
          return false;
        }
      }
      return true;
      // Include the item in the filtered results
    });
    console.log(filteredResults2)
    setTempResult2(filteredResults2);

    const filteredResults3 = result3.filter((item) => {
      console.log(filters.minPriceFilter);
      // Apply the review filter
      if (filters.reviewFilter !== 'all' && item.review !== filters.reviewFilter) {
        return false;
      }
      // Apply the min price filter
      if (filters.minPriceFilter !== 0) {
        const price = getPriceValue3(item.price);
        if (price < filters.minPriceFilter) {
          // if (filters.minPriceFilter !== '' && parseFloat(item.price.split('₹')[1]) < parseFloat(filters.minPriceFilter)) {
          return false;
        }
      }
      // Apply the max price filter
      if (filters.maxPriceFilter !== 0) {
        const price = getPriceValue3(item.price);
        if (price > filters.maxPriceFilter)
          // if (filters.maxPriceFilter !== '' && parseFloat(item.price.split('₹')[1]) > parseFloat(filters.maxPriceFilter)) {
          return false;
      }
      // Apply the company name filter
      if (filters.companyNameFilter.length > 0) {
        const companyNameWords = item.name.split(' ');
        const firstCompanyNameWord = companyNameWords[0].toLowerCase();
        if (!filters.companyNameFilter.some(filter => filter.toLowerCase() === firstCompanyNameWord)) {
          return false;
        }
      }
      return true;
      // Include the item in the filtered results
    });
    console.log(filteredResults3)
    // {setResult`${3}`(filteredResults3)}
    setTempResult3(filteredResults3);

    const filteredResults4 = result4.filter((item) => {
      console.log(filters.minPriceFilter);
      // Apply the review filter
      if (filters.reviewFilter !== 'all' && item.review !== filters.reviewFilter) {
        return false;
      }
      // Apply the min price filter
    
      // Apply the company name filter
      if (filters.companyNameFilter.length > 0) {
        const companyNameWords = item.name.split(' ');
        const firstCompanyNameWord = companyNameWords[0].toLowerCase();
        if (!filters.companyNameFilter.some(filter => filter.toLowerCase() === firstCompanyNameWord)) {
          return false;
        }
      }
      return true;
      // Include the item in the filtered results
    });
    console.log(filteredResults4)
    // {setResult`${3}`(filteredResults3)}
    setTempResult4(filteredResults4);


    const filteredResults5 = result5.filter((item) => {
      console.log(filters.minPriceFilter);
      // Apply the review filter
      if (filters.reviewFilter !== 'all' && item.review !== filters.reviewFilter) {
        return false;
      }
      // Apply the min price filter
      if (filters.minPriceFilter !== 0) {
        const price = getPriceValue5(item.price);
        if (price < filters.minPriceFilter) {
          // if (filters.minPriceFilter !== '' && parseFloat(item.price.split('₹')[1]) < parseFloat(filters.minPriceFilter)) {
          return false;
        }
      }
      // Apply the max price filter
      if (filters.maxPriceFilter !== 0) {
        const price = getPriceValue5(item.price);
        if (price > filters.maxPriceFilter)
          // if (filters.maxPriceFilter !== '' && parseFloat(item.price.split('₹')[1]) > parseFloat(filters.maxPriceFilter)) {
          return false;
      }
      // Apply the company name filter
      if (filters.companyNameFilter.length > 0) {
        const companyNameWords = item.name.split(' ');
        const firstCompanyNameWord = companyNameWords[0].toLowerCase();
        if (!filters.companyNameFilter.some(filter => filter.toLowerCase() === firstCompanyNameWord)) {
          return false;
        }
      }
      return true;
      // Include the item in the filtered results
    });
    console.log(filteredResults5)
    setTempResult5(filteredResults5);

    const filteredResults6 = result6.filter((item) => {
      console.log(filters.minPriceFilter);
      // Apply the review filter
      if (filters.reviewFilter !== 'all' && item.review !== filters.reviewFilter) {
        return false;
      }
      // Apply the min price filter
      if (filters.minPriceFilter !== 0) {
        const price = getPriceValue6(item.price);
        if (price < filters.minPriceFilter) {
          // if (filters.minPriceFilter !== '' && parseFloat(item.price.split('₹')[1]) < parseFloat(filters.minPriceFilter)) {
          return false;
        }
      }
      // Apply the max price filter
      if (filters.maxPriceFilter !== 0) {
        const price = getPriceValue6(item.price);
        if (price > filters.maxPriceFilter)
          // if (filters.maxPriceFilter !== '' && parseFloat(item.price.split('₹')[1]) > parseFloat(filters.maxPriceFilter)) {
          return false;
      }
      // Apply the company name filter
      if (filters.companyNameFilter.length > 0) {
        const companyNameWords = item.name.split(' ');
        const firstCompanyNameWord = companyNameWords[0].toLowerCase();
        if (!filters.companyNameFilter.some(filter => filter.toLowerCase() === firstCompanyNameWord)) {
          return false;
        }
      }
      return true;
      // Include the item in the filtered results
    });
    console.log(filteredResults6)
    setTempResult6(filteredResults6);

    const filteredResults7 = result7.filter((item) => {
      console.log(filters.minPriceFilter);
      // Apply the review filter
      if (filters.reviewFilter !== 'all' && item.review !== filters.reviewFilter) {
        return false;
      }
      // Apply the min price filter
      if (filters.minPriceFilter !== 0) {
        const price = getPriceValue7(item.price);
        if (price < filters.minPriceFilter) {
          // if (filters.minPriceFilter !== '' && parseFloat(item.price.split('₹')[1]) < parseFloat(filters.minPriceFilter)) {
          return false;
        }
      }
      // Apply the max price filter
      if (filters.maxPriceFilter !== 0) {
        const price = getPriceValue7(item.price);
        if (price > filters.maxPriceFilter)
          // if (filters.maxPriceFilter !== '' && parseFloat(item.price.split('₹')[1]) > parseFloat(filters.maxPriceFilter)) {
          return false;
      }
      // Apply the company name filter
      if (filters.companyNameFilter.length > 0) {
        const companyNameWords = item.name.split(' ');
        const firstCompanyNameWord = companyNameWords[0].toLowerCase();
        if (!filters.companyNameFilter.some(filter => filter.toLowerCase() === firstCompanyNameWord)) {
          return false;
        }
      }
      return true;
      // Include the item in the filtered results
    });
    console.log(filteredResults7)
    setTempResult7(filteredResults7);

    const filteredResults8 = result8.filter((item) => {
      console.log(filters.minPriceFilter);
      // Apply the review filter
      if (filters.reviewFilter !== 'all' && item.review !== filters.reviewFilter) {
        return false;
      }
      // Apply the min price filter
      if (filters.minPriceFilter !== 0) {
        const price = getPriceValue8(item.price);
        if (price < filters.minPriceFilter) {
          // if (filters.minPriceFilter !== '' && parseFloat(item.price.split('₹')[1]) < parseFloat(filters.minPriceFilter)) {
          return false;
        }
      }
      // Apply the max price filter
      if (filters.maxPriceFilter !== 0) {
        const price = getPriceValue8(item.price);
        if (price > filters.maxPriceFilter)
          // if (filters.maxPriceFilter !== '' && parseFloat(item.price.split('₹')[1]) > parseFloat(filters.maxPriceFilter)) {
          return false;
      }
      // Apply the company name filter
      if (filters.companyNameFilter.length > 0) {
        const companyNameWords = item.name.split(' ');
        const firstCompanyNameWord = companyNameWords[0].toLowerCase();
        if (!filters.companyNameFilter.some(filter => filter.toLowerCase() === firstCompanyNameWord)) {
          return false;
        }
      }
      return true;
      // Include the item in the filtered results
    });
    console.log(filteredResults8)
    setTempResult8(filteredResults8);
    
    const filteredResults9 = result9.filter((item) => {
      console.log(filters.minPriceFilter);
      // Apply the review filter
      if (filters.reviewFilter !== 'all' && item.review !== filters.reviewFilter) {
        return false;
      }
      // Apply the min price filter
      if (filters.minPriceFilter !== 0) {
        const price = getPriceValue9(item.price);
        if (price < filters.minPriceFilter) {
          // if (filters.minPriceFilter !== '' && parseFloat(item.price.split('₹')[1]) < parseFloat(filters.minPriceFilter)) {
          return false;
        }
      }
      // Apply the max price filter
      if (filters.maxPriceFilter !== 0) {
        const price = getPriceValue9(item.price);
        if (price > filters.maxPriceFilter)
          // if (filters.maxPriceFilter !== '' && parseFloat(item.price.split('₹')[1]) > parseFloat(filters.maxPriceFilter)) {
          return false;
      }
      // Apply the company name filter
      if (filters.companyNameFilter.length > 0) {
        const companyNameWords = item.name.split(' ');
        const firstCompanyNameWord = companyNameWords[0].toLowerCase();
        if (!filters.companyNameFilter.some(filter => filter.toLowerCase() === firstCompanyNameWord)) {
          return false;
        }
      }
      return true;
      // Include the item in the filtered results
    });
    console.log(filteredResults9)
    setTempResult9(filteredResults9);

  const filteredResults10 = result10.filter((item) => {
    console.log(filters.minPriceFilter);
    // Apply the review filter
    if (filters.reviewFilter !== 'all' && item.review !== filters.reviewFilter) {
      return false;
    }
    // Apply the min price filter
    if (filters.minPriceFilter !== 0) {
      const price = getPriceValue10(item.price);
      if (price < filters.minPriceFilter) {
        // if (filters.minPriceFilter !== '' && parseFloat(item.price.split('₹')[1]) < parseFloat(filters.minPriceFilter)) {
        return false;
      }
    }
    // Apply the max price filter
    if (filters.maxPriceFilter !== 0) {
      const price = getPriceValue10(item.price);
      if (price > filters.maxPriceFilter)
        // if (filters.maxPriceFilter !== '' && parseFloat(item.price.split('₹')[1]) > parseFloat(filters.maxPriceFilter)) {
        return false;
    }
    // Apply the company name filter
    if (filters.companyNameFilter.length > 0) {
      const companyNameWords = item.name.split(' ');
      const firstCompanyNameWord = companyNameWords[0].toLowerCase();
      if (!filters.companyNameFilter.some(filter => filter.toLowerCase() === firstCompanyNameWord)) {
        return false;
      }
    }
    return true;
    // Include the item in the filtered results
  });
  console.log(filteredResults10)
  setTempResult10(filteredResults10);
  };

  
  const getPriceValue = (price) => {
    if (!price) {
      return null;
    }

    const priceParts = price.split("₹");
    const priceValue = priceParts.length > 1 ? parseFloat(priceParts[1].replace(/,/g, "")) : null;

    return priceValue;
  };


  window.addEventListener('scroll', function () {
    const upperbar = document.querySelector('.upperbar');
    const scrollPosition = window.pageYOffset;

    if (scrollPosition > 0) {
      upperbar.classList.add('fixed');
    } else {
      upperbar.classList.remove('fixed');
    }
  });

  return (
    <>
    <Header/>
    <div className="upperbar">
      <div className="searchbar2">
        <div className="bartile">
          <input
            placeholder={props.product}
            className="form-control channel-input"
          />
          <button className="btn btn1" onClick={handleSearch}>
            <i className="fa fa-search"></i>
          </button>
            <div className='search-title'>
              {/* <h4>SEE OUR SITE POPULAR PRODUCTS</h4> */}
              <h4>Search results for "{props.product}".</h4>
            </div>
        </div>
            <div className="companiesboxes">
              <h3>Websites Filter</h3>
              <div className="grid-containers">
                {Object.entries(companies).map(([company, isSelected]) => (
                  <div className="boxses" key={company}>
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
      
      <hr />
      
      </div>
      <div className="Againsearch">
          <div className="filter-area">
            <div className="innerfilter">
            {brand.length > 0 &&
            <Sidebar brand={brand} onApplyFilters={handleApplyFilters} />
            }
            </div>

          </div>
        <div className="searchpage data">
          {brand.length > 0 && <div className="sorting">
            <div className="sort-buttons">
              Sort By
              <div className="sort-btn btn-primary" onClick={onderfixlh}>
                Price Low to high ▲
              </div>
              <div className="sort-btn btn-primary" onClick={onderfixhl}>
                Price High to low ▼
              </div>
              <div className="sort-btn btn-primary" onClick={sortalpha}>
                A-Z ▼
              </div>
              <div className="sort-btn btn-primary" onClick={sortByRelevance}>
                Relevance ▼
              </div>
            </div>
          </div>}
      <section className='Portfolio' id='portfolio'>
        
        <div className=''>
          
          <hr />
          {tempResult.length > 0 && <div className="website-title">
            Dentalstall
          </div>}
          <div className='content card-grid '>
            {tempResult.map((value, index) => {
              const webname1 = "Dentalstall";
              // setBrand((prevBrand) => [...prevBrand, value.name]);
              return <Cards key={index} image={value.image} category={webname1} totalLike={value.price} title={value.name} link={value.link} />
            })}
          </div>
          {tempResult2.length > 0 && <div className="website-title">
            Pinkblue
          </div>}
          <div className='content card-grid '>
            {tempResult2.map((value, index) => {
            // {console.log(value.image)}
              const webname2 = "Pinkblue";
              // setBrand((prevBrand) => [...prevBrand, value.name]);
              return <Cards key={index} image={"data:image/png;base64,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"} category={webname2} totalLike={value.price} title={value.name} link={value.link} />
            })}
          </div>
          {tempResult3.length > 0 && <div className="website-title">
            Libraltraders
          </div>}
          <div className='content card-grid '>
            {tempResult3.map((value, index) => {
              const webname3 = "Libraltrader";
              // setBrand((prevBrand) => [...prevBrand, value.name]);
              return <Cards key={index} image={value.image} category={webname3} totalLike={value.price} title={value.name} link={value.link} />
            })}
          </div>
          {tempResult4.length > 0 && <div className="website-title">
            Medikabazaar
          </div>}
          <div className='content card-grid '>
            {tempResult4.map((value, index) => {
              const webname4 = "Medikabazaar";
              // setBrand((prevBrand) => [...prevBrand, value.name]);
              return <Cards key={index} image={value.image} category={webname4} totalLike={value.price} title={value.name} link={value.link} />
            })}
          </div>
          {tempResult5.length > 0 && <div className="website-title">
            Daantwale
          </div>}
          <div className='content card-grid '>
            {tempResult5.map((value, index) => {
              const webname5 = "Daantwale";
              // setBrand((prevBrand) => [...prevBrand, value.name]);
              return <Cards key={index} image={value.image} category={webname5} totalLike={value.price} title={value.name} link={value.link} />
            })}
          </div>
          {tempResult6.length > 0 && <div className="website-title">
            Dentalworld
          </div>}
          <div className='content card-grid '>
            {tempResult6.map((value, index) => {
              const webname6 = "Dentalworld";
              // setBrand((prevBrand) => [...prevBrand, value.name]);
              return <Cards key={index} image={value.image} category={webname6} totalLike={value.price} title={value.name} link={value.link} />
            })}
          </div>
          {tempResult7.length > 0 && <div className="website-title">
            Amplemeds
          </div>}
          <div className='content card-grid '>
            {tempResult7.map((value, index) => {
              const webname7 = "Amplemeds";
              // setBrand((prevBrand) => [...prevBrand, value.name]);
              return <Cards key={index} image={value.image} category={webname7} totalLike={value.price} title={value.name} link={value.link} />
            })}
          </div>
          {tempResult8.length > 0 && <div className="website-title">
            Mydentalstock
          </div>}
          <div className='content card-grid '>
            {tempResult8.map((value, index) => {
              const webname8 = "Mydentalstock";
              // setBrand((prevBrand) => [...prevBrand, value.name]);
              return <Cards key={index} image={value.image} category={webname8} totalLike={value.price} title={value.name} link={value.link} />
            })}
          </div>
          {tempResult9.length > 0 && <div className="website-title">
            Greenguava
          </div>}
          <div className='content card-grid '>
            {tempResult9.map((value, index) => {
              const webname9 = "Greenguava";
              // setBrand((prevBrand) => [...prevBrand, value.name]);
              return <Cards key={index} image={value.image} category={webname9} totalLike={value.price} title={value.name} link={value.link} />
            })}
          </div>
          {tempResult10.length > 0 && <div className="website-title">
            Thedentaldealer
          </div>}
          <div className='content card-grid '>

            {tempResult10.map((value, index) => {
              const webname10="ThedentalDealer";
              // setBrand((prevBrand) => [...prevBrand, value.name]);
              return <Cards key={index} image={value.image} category={webname10} totalLike={value.price} title={value.name} link={value.link} />
            })}
          </div>
          {tempResult11.length > 0 && <div className="website-title">
            Dentaltix
          </div>}
          <div className='content card-grid '>
            {tempResult11.map((value, index) => {
              const webname11 = "Dentaltix";
              // setBrand((prevBrand) => [...prevBrand, value.name]);
              return <Cards key={index} image={value.image} category={webname11} totalLike={value.price} title={value.name} link={value.link} />
            })}
          </div>
        </div>

      </section>
        </div>

        </div>
    </>
  )
}
Portfolio.propTypes = {
  product: PropTypes.string,
  selectedCompanies: PropTypes.array,
  result: PropTypes.array
}
export default Portfolio
