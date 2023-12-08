import React from 'react';
import Webcam from 'react-webcam';

const WebcamComponent = () => {
  const webcamRef = React.useRef(null);

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
    </div>
  );
};

export default WebcamComponent;