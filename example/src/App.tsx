import { ToastContainer, Slide } from 'react-toastify';
import './index.scss';
import { Router } from "./Router";

export default function App() {
  return (
    <div>
      <Router />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        theme="colored"
        transition={Slide}
        icon={false}
        closeButton={false}
      />
    </div>
  );
}
