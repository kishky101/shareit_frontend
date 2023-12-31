import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';
import { createOrGetUser } from '../utils';

const Login = () => {
    const navigate = useNavigate();

  return (
    <div className='flex justify-start items-center flex-col h-screen'>
        <div className='relative w-full h-full'>
            <video 
                src={shareVideo}
                type='video/mp4'
                loop
                controls={false}
                muted 
                autoPlay
                className='w-full h-full object-cover'
            />

            <div className='absolute flex flex-col justify-center items-center top-0 bottom-0 left-0 right-0 bg-blackOverlay'>
                <div className='p-5'>
                    <img src={logo} width='130px' alt='logo' />
                </div>

                <div className='shadow-2xl'>
                    <GoogleLogin 
                        onSuccess={credentialResponse => {
                        createOrGetUser(credentialResponse, navigate);
                        }}
                        onError={() => {
                        console.log('Login Failed');
                        }}
                        shape='pill'
                        type='standard'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login