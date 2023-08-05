import React from 'react'
import DataRendering from '../../component/DataRendering/DataRendering';

import { useLocation } from 'react-router-dom';

const AllProduct = () => {
  const location = useLocation();
  // const { product, selectedCompanies } = location.state;
  const product=location.state.product;
  const selectedCompanies = location.state.companies;
  // console.log(selectedCompanies)
  return (
   <>

      <DataRendering product={product} selectedCompanies={selectedCompanies} />   
   </>
    

  )
}

export default AllProduct
