import styles from './main.module.css'
import { useEffect, useState } from 'react';
import axios from "axios";
const Main = () => {
  const [inputText, setInputText] = useState('');
  const [data, setData] = useState([]);
    // }  // this is for searching based on user name, if you want to search based on other properties you can modify the searchHandle function accordingly.  // As this is a simple example, I have added a console.log statement to display the user name.  // You can also add a search button or any other UI component to trigger the searchHandle function.  // Also, make sure to replace 'https://api.unsplash.com/photos/?client_id=8TEfCvRKvBMkxLg3jwbeRJGpWdhhb5FpDj6Ydr-J8YI' with your actual Unsplash API endpoint.  // For actual implementation
  // console.log(data.user)

  const searchHandle = (e,data) => {
    const txt = e.target.value;
    setInputText(txt);

    for(let i =0; i < data.length; i++) {
      if(inputText === data[i].user.name){
        console.log(data[i].user.name)
      }else{
        console.log("not found")
      }
    // console.log(data.user.name)
  }
}

  useEffect(() => {
    fetchImage();
  }, []); 
  

    async function fetchImage(){
      const res = await axios.get("https://api.unsplash.com/photos/?client_id=8TEfCvRKvBMkxLg3jwbeRJGpWdhhb5FpDj6Ydr-J8YI")
      console.log(res.data)
      setData(res.data);
    }

  return (
    <div>
      <div className={styles.main_container}>
      <div className={styles.container}>
        <h2>Image Generation App</h2>
      </div>
      <input onChange={searchHandle}  id='search' name='search' type="text" placeholder= "search" />
      <div className={styles.image_container}>
        {
        data.map(item => (
          <div key={item.id}>
            <img src={item.urls.regular} alt={item.alt_description} />
          </div>
        ))
      }
        </div>
      </div>
    </div>
  );
};

export default Main;


// import axios from 'axios';


  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

