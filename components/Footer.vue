<template>
    <div class="md:px-[15%] px-10">
        <div
            class="flex justify-between md:flex-row  flex-col  items-center md:items-start mb-10 md:px-0 px-10  mt-20  md:h-[250px]">
            <div class="h-full flex justify-between md:flex-row  flex-col items-center md:items-start  w-full ">
                <div
                    class="md:w-[44%]  flex flex-col justify-between  space-y-5 md:space-y-0 items-center md:items-start h-full">
                    <img src="~/assets/imgs/hamza_logo.png" class=" z-20 " alt="">
                    <p class="text-md font-thin md:text-left text-center text-white">I’m here to craft a stunning,
                        user-friendly website that
                        elevates your business and leaves a lasting impression.</p>
                    <div class="flex items-center gap-2 ">
                        <img src="~/assets/imgs/position.svg" class="w-6" alt="">
                        <p class="text-white">Algiers, Algeria</p>
                    </div>
                    <div class="flex items-center gap-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>

                        <p class="text-gray-100">hamzaberbar@gmail.com</p>
                    </div>
                </div>
                <div class="md:w-[29%] w-full  h-full">
                    <p class="text-gradient font-bold mt-10 text-lg">Navigation</p>
                    <div class="grid grid-cols-2 mt-5 gap-y-2">
                        <p class=" text-violet-100 text-sm font-light">Home</p>
                        <p class=" text-violet-100 text-sm font-light">About</p>
                        <p class=" text-violet-100 text-sm font-light">Skills</p>
                        <p class=" text-violet-100 text-sm font-light">Projects</p>
                        <p class=" text-violet-100 text-sm font-light">Contact</p>
                    </div>
                </div>
                <div class="md:w-[29%] w-full md:px-5  h-full">
                    <p class="text-gradient font-bold mt-10 text-lg">Get creative with us</p>
                    <div class="flex  w-full mt-5">
                        <input type="text" value="Email"
                            class="bg-gradient-to-t pl-1 w-full shadow-custom-purple  text-gray-700 text-sm from-violet-400 to-violet-50 rounded-l-md">
                        <button class="bg-violet-600 p-1 w-fit rounded-r-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="white" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                            </svg>

                        </button>
                    </div>
                    <div class="flex justify-between px-5 mt-5">
                        <img src="~/assets/imgs/facebook.svg" class="w-6" alt="">
                        <img src="~/assets/imgs/insta.svg" class="w-6" alt="">
                        <img src="~/assets/imgs/whatsapp.svg" class="w-6" alt="">
                        <img src="~/assets/imgs/telegram.svg" class="w-6" alt="">
                        <img src="~/assets/imgs/twitter.svg" class="w-6" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full h-1 rounded-full bg-gradient-to-r from-[#5825C1] via-[#E58FFF] to-[#e58fff6d] ">

        </div>
        <div class="flex w-full md:flex-row flex-col items-center my-2 justify-between">
            <p class="text-violet-100">Copyright © 2024 - Hamza Berbar</p>
            <p class="text-violet-100 font-thin">Developed by <a href="https://github.com/afadel151"
                    class="text-gradient hover:text-gray-50">Akram Fadel</a></p>
        </div>
    </div>
</template>

<script setup>
</script>