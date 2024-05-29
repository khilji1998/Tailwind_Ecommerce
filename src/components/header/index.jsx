import {Link}  from 'react-router-dom'
function Header() {
  return (
<>
<header class="bg-black lg:px-16  px-4 flex text-white flex-wrap items-center py-4 shadow-md">
        <div class="flex-1 flex justify-between items-center">
          <a href="#" class="text-xl font-bold">
          FashVibe
          </a>
        </div>

        <div
          class="hidden md:flex md:items-center md:w-auto  w-full "
          id="menu"
        >
          <nav>
            <ul class="md:flex items-center justify-between text-base text-white pt-4 md:pt-0">
              <li>
                <Link class="md:p-4 py-3 px-0 block" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link class="md:p-4 py-3 px-0 block" to="about">
                  About Us
                </Link>
              </li>
              <li>
                <Link class="md:p-4 py-3 px-0 block md:mb-0 mb-2" to="contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
</>
  )
}

export default Header