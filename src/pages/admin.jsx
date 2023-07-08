import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../App';

const AdminPage = () => {
  const [raffle, setRaffle] = useState();
  const [Goods_url, setUrl] = useState('');
  const { contract, web3 } = useContext(AppContext);

  // await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/user`, {
  //   account: accounts[0],
  //   email,
  //   signedToken,
  // });

  // localStorage.setItem("signedToken", signedToken);

  // const get_R_data = async () => {
  //   try {
  //     const response = await axios.get(
  //       `${process.env.REACT_APP_BACKEND_URL}/raffle/${r_idx}`
  //     );

  //     const endchk = response.data.isEnd;

  //     if (endchk == true) {
  //       setChkScreen(2);
  //     } else {
  //       // console.log(response);
  //       const f_B = response.data.start_block; // fromBlock : 은 디비에서
  //       // console.log(f_B);
  //       const a = await contract.getPastEvents('Raffle', {
  //         filter: { _idx: r_idx },
  //         fromBlock: f_B,
  //         toBlock: 'latest',
  //       });

  //       for (const v of a) {
  //         const nowdata = v.returnValues._add.toLowerCase();
  //         if (nowdata === account) {
  //           setChkScreen(1);
  //           break; // 중지
  //         }
  //       }
  //     }

  //     setIsLoading(false);
  //     //console.log( 'chk_raffle!' ) ;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const create = async (e) => {
    try {
      e.preventDefault();

      console.log('create') ;
      let start_block = await web3.eth.getBlockNumber();
      start_block = Number(start_block);

      //console.log('f_s_b', start_block, typeof start_block);

      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/raffle/`, {
        URL: Goods_url,
        start_block,
      });
      
      get_Raffle_Data();
    } catch (error) {
      console.error(error);
    }
  };

  const RaffleEnd = async (key) => {
    try {
      // e.preventDefault();

      console.log( key ) ;

      let end_block = await web3.eth.getBlockNumber();
      end_block = Number(end_block);

      
      await axios.put(`${process.env.REACT_APP_BACKEND_URL}/raffle/:id/done`, {
         URL: Goods_url,
         end_block,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const get_Raffle_Data = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/raffle`
      );
      setRaffle(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get_Raffle_Data();
  }, []);

  return (
    <div className="w-[390px] h-[844px] rounded-[30px] relative text-white">
      <div className="flex flex-col justify-center items-center">
        <form onSubmit={create}>
          <input
            className="text-black"
            type="text"
            value={Goods_url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button className="p-2 m-2">래플 생성</button>
        </form>

        <div className="flex flex-col">
          {raffle?.map((v, i) => {
            if (v.isEnd === false) {
              return <button key={i} onClick={() => RaffleEnd(i+1)} >{v.id}번 래플 종료</button>;
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
