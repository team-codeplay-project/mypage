import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Rafflelist = () => {
  const [raffle, setRaffle] = useState();
  const [toggle, setToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const ing = () => {
    setToggle(false);
  };

  const end = () => {
    setToggle(true);
  };

  const get_Raffle_Data = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/raffle`
      );
      setRaffle(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    get_Raffle_Data();
  }, []);

  return (
    <div className="w-[390px] h-[844px] rounded-[30px] relative text-white">
      {isLoading === false ? (
        <div className="flex flex-col justify-center items-center">
          <div>
            <button
              className={`p-2 rounded ${!toggle ? "bg-yellow-400" : ""}`}
              onClick={ing}>
              진행 중
            </button>
            <button
              className={`p-2 rounded ${toggle ? "bg-red-400" : ""}`}
              onClick={end}>
              완료
            </button>

            <div className="flex flex-col">
              {raffle?.map((v, i) => {
                if (v.isEnd === toggle) {
                  return (
                    <Link key={i} to={`/test/${i + 1}`}>
                      {v.id}번 래플
                    </Link>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      ) : (
        <div>Loading </div>
      )}
    </div>
  );
};

export default Rafflelist;
