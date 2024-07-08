import React from 'react';
import axios from 'axios';

const MusicDownload = () => {
  const handleDownload = async (fileName) => {
    try {
      const response = await axios.get(`/api/music/download/${fileName}`, {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error downloading file', error);
    }
  };

  return (
    <div>
      <button onClick={() => handleDownload('example.mp3')}>Download Example</button>
    </div>
  );
};

export default MusicDownload;
