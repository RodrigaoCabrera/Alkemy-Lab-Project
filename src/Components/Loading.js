import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const Loading = () => {
  return (
    <div align='center'>
      <Loader
        type="Oval"
        color="#9AC9FB"
        height={50}
        width={80}
        timeout={3000}
      />
    </div>
  );
};

export default Loading;
