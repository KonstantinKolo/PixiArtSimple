import { useState, useEffect } from "react";
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
import '../CSS/Register.css';

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    picCollection: [],
    profilePicture: '',
  })

  axios.defaults.baseURL = 'https://pixi-art-simple.onrender.com';

  const registerUser = async (e) => {
    e.preventDefault();
    const {name, email, password, picCollection, profilePicture} = data
    try{
      const {data} = await axios.post('/register', {
        name, email, password, picCollection, profilePicture
      })
      if(data.error){
        toast.error(data.error)
      } else {
        setData({})
        toast.success('Login successful. Welcome!')
        navigate('/login')
      }
    } catch(error) {
      console.log(error);
    }
  }




  const [selectedFile, setSelectedFile] = useState(null);
  const [iconUrl, setIconUrl] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    // Set the uploaded image as the icon
    displayCroppedImage(file);
  };

  const displayCroppedImage = (file) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;

      img.onload = async() => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        const size = Math.min(img.width, img.height);
        canvas.width = size;
        canvas.height = size;

        // Crop the image to a square
        context.drawImage(
          img,
          (img.width - size) / 2,
          (img.height - size) / 2,
          size,
          size,
          0,
          0,
          size,
          size
        );

        // Set the URL of the cropped image as the icon URL
        const icon = canvas.toDataURL();
        const compressedImage = await CompressAndResizeImage(file, 150, 150, 0.8);
        setIconUrl(compressedImage);

        // Post the pfp to the database
        setData((prevData) => ({ ...prevData, profilePicture: compressedImage }));
        // console.log(data);
      };
    };

    // Read the file as a data URL
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    console.log(data); // Log the updated state
  }, [data]);


  return (
    <div className="register">
      <label for="file" class="custum-file-upload">
        <div class="icon">
          {iconUrl ? (
            // Display the uploaded image as the icon
            <img
              src={iconUrl}
              alt="Uploaded Icon"
              style={{ maxWidth: '100px', maxHeight: '150px' }}
            />
          ) : (
          <svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">  <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" fill=""></path> </g></svg>
          )}
        </div>
        <div class="text">
            <span>Click to upload profile picture</span>
        </div>
        <input id="file" type="file" onChange={handleFileChange}/>
      </label>
      <h1 className='register-h1' style={{marginTop:'0', marginBottom:'70px'}}>REGISTER</h1>

      <form onSubmit={registerUser} className="form-holder">
        <input className='input' type='text' placeholder='enter name ...' value={data.name} onChange={(e) => setData({...data, name:e.target.value})}/>
        <p className="reg-pars"></p>
        <input className='input' type='email' placeholder='enter email ...' value={data.email} onChange={(e) => setData({...data, email:e.target.value})}/>
        <p className="reg-pars"></p>
        <input className="input" type='password' placeholder='enter password ...' value={data.password} onChange={(e) => setData({...data, password:e.target.value})}/>
        <p className="reg-pars"></p>
        <button className='submit-btn' type='submit'>Submit</button>
      </form>
    </div>
  )
}
