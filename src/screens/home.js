import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const moveToSingleAbout = (i) => {
      navigate(`/singleabout/${i}`);
    }
    return (
        <>
        <div className="text-center">Images 1 to 5 Click Image</div>

      <div>
          <img onClick={() => moveToSingleAbout()}className="mx-2" src='https://www.kindpng.com/picc/m/7-78774_ya-allah-png-transparent-ya-allah-ya-rasool.png' width="100px" alt="" />

     
       
        
      </div>
    </>
  );
  }
  
  export default Home;