import React, { useContext , useState } from "react";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../../context/authContext";
function SignInForm() {
  // const {handleLoginSuccess} = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  function handleInputChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value, 
    });
  }

  function handleLogin(event) {
    event.preventDefault();
    const storedData = JSON.parse(localStorage.getItem('userData'))
    if (storedData.email === formData.email && storedData.password === formData.password) {
      localStorage.setItem("loggedin" ,true);
      goToHome()
      console.log('Login successful!');
    } else {
      alert('Invalid email or password');
    }
  }

    const navigate = useNavigate();
    const toSignUp= () => {
        navigate('/');
      };
      const goToHome= () => {
        navigate('/home');
      };
  return (
    <>
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            class="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  id="loginEmail"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div class="text-sm">
                  <a
                    href="#"
                    class="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div class="mt-2">
                <input
                  type="password"
                  id="loginPassword"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Sign in
              </button>
            </div>
          </form>
          <div class="text-center">
            <a
              class="mt-2 inline-block text-md font-bold text-indigo-700 align-baseline hover:text-indigo-800"
              href="#"
            >
               <button onClick={toSignUp}>Create an Account!</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignInForm;
