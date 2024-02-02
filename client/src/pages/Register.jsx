import { useState, useEffect } from "react";
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
import '../CSS/Register.css';
import '../App.css'
import pfp from '../../public/profilePicture.png'
import Modal from 'react-modal'

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    picCollection: [],
    profilePicture: '',
  })
  const [pfpBase64, setPfpBase64] = useState('');
  const [loading, setLoading] = useState(false); // Added loading state


  const registerUser = async (e) => {
    e.preventDefault();
    
    if(!data.profilePicture){
      const convertToBase64 = async () => {
        try {
          const response = await fetch(pfp);
          const blob = await response.blob();
          const reader = new FileReader();
          reader.onloadend = () => {
            setPfpBase64(reader.result);
          };
          reader.readAsDataURL(blob);
        } catch (error) {
          console.error('Error converting image to base64:', error);
        }
      };
      convertToBase64();
      console.log(pfpBase64);
      setData((data) => ({ ...data, profilePicture: pfpBase64 }));
      console.log(data);
    }

    const {name, email, password, picCollection, profilePicture} = data


    try{
      setLoading(true);
      const {data} = await axios.post('/register', {
        name, email, password, picCollection, profilePicture
      })
      if(data.error){
        toast.error(data.error)
      } else {
        setData({})
        toast.success('Register successful. Welcome!')
        navigate('/login')
      }
    } catch(error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }




  const [selectedFile, setSelectedFile] = useState(null);
  const [iconUrl, setIconUrl] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
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

         // Calculate the square size
         const size = Math.min(img.width, img.height, '150px');
         canvas.width = size;
         canvas.height = size;
        // Set the URL of the cropped image as the icon URL
        
        const aspectRatio = img.width / img.height;
        let newWidth = 150;
        let newHeight = 150;
        
        if (aspectRatio > 1) {
          newHeight = Math.min(150, img.height);
          newWidth = Math.round(newHeight * aspectRatio);
        } else {
          newWidth = Math.min(150, img.width);
          newHeight = Math.round(newWidth / aspectRatio);
        }

        canvas.width = newWidth;
        canvas.height = newHeight;
        context.drawImage(img, 0, 0, newWidth, newHeight);
        // Convert the canvas to a base64-encoded string
        canvas.toBlob(
          (blob) => {
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            
            reader.onloadend = () => {
              resolve(reader.result);
            };
          },
          file.type,
          0.8
        );


        const icon = canvas.toDataURL();
        setIconUrl(icon);
        
        // Post the pfp to the database
        setData((prevData) => ({ ...prevData, profilePicture: icon }));
        };
      };
      
      // Read the file as a data URL
      reader.readAsDataURL(file);
  };

  return (
    <div className="register">
      <label for="file" class="custum-file-upload">
        <div class="icon">
          {iconUrl ? (
            // Display the uploaded image as the icon
            <img
              src={iconUrl}
              alt="Uploaded Icon"
              style={{ maxWidth: '150px', maxHeight: '150px' }}
            />
          ) : (
            <img
            src={pfp}
            alt="Uploaded Icon"
            style={{ maxWidth: '150px', maxHeight: '150px' }}
            />
          )}
        </div>
        <div class="text">
            <span>Click to upload profile picture</span>
        </div>
        <input id="file" type="file" onChange={handleFileChange} />
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

      <Modal
        isOpen={loading}
        contentLabel="Loading Modal"
        className="loading-modal"
        overlayClassName="loading-overlay"
      >
        <h2 style={{color:'black'}}>Loading...</h2>
      </Modal>
    </div>
  )
}
