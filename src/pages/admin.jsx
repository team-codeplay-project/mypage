import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../App';
import { useNavigate } from 'react-router-dom';

const chk = {} ;
const AdminPage = ( { admin } ) => {
  const [raffle, setRaffle] = useState();
  const [Goods_url, setUrl] = useState();
  const [Goods_name , setName ] = useState('상품 이름') ;
  const [ winner , setWinner ] = useState([]);
  const [ n , setN ] = useState() ;
  const [ E , setE ] = useState() ;
  const { token_c , web3 , account } = useContext(AppContext);
  const navigate = useNavigate() ;

  const create = async (e) => {
    try {
      e.preventDefault();

      let start_block = await web3.eth.getBlockNumber();
      start_block = Number(start_block);

      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/raffle/`, {
        name : Goods_name,  
        url: Goods_url,
        start_block,
      }, { headers: {
        "ngrok-skip-browser-warning":"any"
      } });


      console.log( 'create' , e ) ;

      get_Raffle_Data();
    } catch (error) {
      console.error(error);
    }
  };

  const RaffleEnd = async (key) => {
    try {
      
      setN( key ) ;
      let end_block = await web3.eth.getBlockNumber();
      end_block = Number(end_block);
      setE( end_block ) ;

      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/raffle/${key}`,
{ headers: {
        "ngrok-skip-browser-warning":"any"
      } }
      );

      const f_B = response.data.start_block; // fromBlock : 은 디비에서
      const e_B = end_block ;
        
      const a = await token_c.getPastEvents('Raffle', {
          filter: { _idx: key },
          fromBlock: f_B,
          toBlock: e_B ,
      });

      initializeChk() ;
      console.log( 'a!' , a ) ;

      a.map((v)=>{
        const nowdata = v.returnValues._add.toLowerCase() ;
        if (chk[nowdata] !== true ){
          chk[ nowdata ] = true ;
          setWinner(prev => [...prev, nowdata]);  
        }
      });

    } catch (error) {
      console.error(error);
    }
  };

  const getwinner = async() => {

    let idx = await token_c.methods.Raffle_End( n , winner.length ).call() ;
    idx = Number( idx ) ;
    // console.log( idx , ( typeof idx ) ) ; 

    await axios.put(`${process.env.REACT_APP_BACKEND_URL}/raffle/${n}}/done`, {
      end_block : E,
      winner : winner[ idx ],
   },{ headers: {
        "ngrok-skip-browser-warning":"any"
      } });

    // console.log(winner) ;
    // console.log( idx , winner[idx]) ;
    console.log( 'Raffle_' , n , ' is End' ) ;

  }

  useEffect( () => {
    const length = winner.length ;
    if( length !== 0 ){
      setWinner([]);
      getwinner() ;
    } 
  } , [winner] ) ;

  const initializeChk = () => {
    for (const key in chk) {
      if (chk.hasOwnProperty(key)) {
        delete chk[key];
      }
    }
  };

  const get_Raffle_Data = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/raffle`
      , { headers: {
        "ngrok-skip-browser-warning":"any"
      } });
      setRaffle(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    if( account !== admin ){
      //  navigate("/");
    }
    get_Raffle_Data();
  }, []);

  return (
    <div className="w-[390px] h-[844px] rounded-[30px] relative text-black">
      <div className="flex flex-col justify-center items-center">
        <form onSubmit={create}>
          <input
            className="text-black"
            type="text"
            value={Goods_url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <input
            className="text-black"
            type="text"
            value={Goods_name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="p-2 m-2">래플 생성</button>
        </form>

        <div className="flex flex-col">
          {raffle?.map((v, i) => {
            if (v.isEnd === false) {
              return <button key={i} onClick={() => RaffleEnd(v.id)} >{v.id}번 래플 종료</button>;
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
