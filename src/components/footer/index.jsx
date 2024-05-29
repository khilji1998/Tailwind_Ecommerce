import React from 'react'

function Footer() {
  return (
    <>
      <footer class="clip-path-footer pt-5 sm:pt-15 pb-0 sm:pb-10 mt-auto bg-gray-900 text-gray-200">
    <div class="container mx-auto px-5 mt-10">
        <div class="flex flex-wrap -mx-5">
            <div class="w-full lg:w-1/4 px-5 mb-5 lg:mb-0">
                <div class="text-2xl font-bold mb-2">FashVibe</div>
                <div class="flex space-x-4 mb-5">
                    <a class="text-gray-500 hover:text-gray-100" href="#!"><i class="fab fa-instagram"></i></a>
                    <a class="text-gray-500 hover:text-gray-100" href="#!"><i class="fab fa-facebook"></i></a>
                    <a class="text-gray-500 hover:text-gray-100" href="#!"><i class="fab fa-github"></i></a>
                    <a class="text-gray-500 hover:text-gray-100" href="#!"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
           
        </div>
        <hr class="my-5 border-gray-700"/>
        <div class="flex flex-wrap -mx-5 items-center justify-center">
            <div class="w-full md:w-1/2 px-5 text-sm">
                &copy; Your Website 2023
            </div>
            <div class="w-full md:w-1/2 px-5 text-sm ">
                <a href="#!" class="hover:underline">Privacy Policy</a> &middot; <a href="#!" class="hover:underline">Terms & Conditions</a>
            </div>
        </div>
    </div>
</footer>
    </>
  )
}

export default Footer