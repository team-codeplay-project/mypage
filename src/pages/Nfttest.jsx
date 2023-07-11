import React, { useContext } from 'react';
import { AppContext } from "../App";
import '../style/rafflebox.css';

const Nfttest = () => {

  const { account, chkchainID, contract } = useContext(AppContext);

    return (<div className="tab2-container shadow-md"></div>)

}


export default Nfttest;