import { useNavigate } from 'react-router-dom';
import errorSvg from '../../assets/svg/404.svg'
function NotFound() {
        const navigate = useNavigate();
        const handleNoFound = () => {
          navigate('/');
        };
    
  return (
    <>
    <div className="w-full h-screen flex flex-col items-center justify-center">
    <img className='w-1/2 md:1/3 lg:w-1/4' src={errorSvg} alt="" />
    <button  onClick={handleNoFound} class="inline-block py-3 px-6 mt-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold">Go
            back to homepage</button>
   
    </div>
    </>
  )
}
export default NotFound