import React, { useState } from 'react';
import axios from 'axios';

const UserPhotoUpload = () => {
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('photo', photo);
    try {
      const response = await axios.post('/api/user/uploadphoto', formData);
      console.log('Photo uploaded successfully', response.data);
    } catch (error) {
      console.error('Error uploading photo', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handlePhotoChange} />
      <button onClick={handleUpload}>Upload Photo</button>
    </div>
  );
};

export default UserPhotoUpload;
