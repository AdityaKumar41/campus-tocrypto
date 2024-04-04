import React, { useEffect, useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notification = ({ message, onClose }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const handleNotificationOpen = () => {
      // Play sound
      audioRef.current.play().catch(error => {
        console.error('Failed to play audio:', error);
      });
    };

    const toastId = toast.info(message, {
      position: 'bottom-right',
      autoClose: false,
      closeButton: false,
      closeOnClick: false,
      draggable: false,
      hideProgressBar: true,
      pauseOnHover: false,
      render: () => (
        <div>
          <div>{message}</div>
          <button className="notification-close-btn" onClick={handleClose}>
            &times;
          </button>
        </div>
      ),
      onOpen: handleNotificationOpen,
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      toast.dismiss(toastId);
    };
  }, []);

  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <audio ref={audioRef} src="https://campus-crypto.s3.eu-north-1.amazonaws.com/audio/facebookchatone.mp3" />
      <ToastContainer />
    </>
  );
};

export default Notification;
