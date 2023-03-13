import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const SingleAbout = () => {
    const navigate = useNavigate();
  const moveToSingleAbout1 = (i) => {
    navigate(`/singleabout1/${i}`);
}
  const params = useParams();
  return(
 <>
          <div className="text-center">Images 1 to 5 Click Image</div>

  <> 
  <div className="text-center"onClick={() => moveToSingleAbout1()}>
  <img className="m-2" src='https://www.kindpng.com/picc/m/7-78774_ya-allah-png-transparent-ya-allah-ya-rasool.png' width="100px" alt="" />
          <img className="m-2" src='https://www.kindpng.com/picc/m/7-78774_ya-allah-png-transparent-ya-allah-ya-rasool.png' width="100px" alt="" />
        </div>
</></>
)};

export default SingleAbout;