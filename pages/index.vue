<template>
    <div>
        <div class="flex justify-between md:flex-row  flex-col-reverse items-center md:items-stretch mb-20 md:px-[12%] mt-20 ">
            <div class="flex flex-col h-[500px] md:mt-0 mt-14  md:w-[50%] md:px-0 px-[10%]  items-center  md:items-start justify-between">
                <p class="text-3xl  md:text-5xl text-white " ref="typewriterRef"></p>
                <p class="text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-br from-[#E58FFF] to-[#FFFFFF] font-bold"><span ref="p"></span> <br> <span ref="w"></span> <br> <span ref="d"></span> </p>
                <p class="text-white md:px-0 md:text-2xl text-lg font-thin" ref="finalText">
                  
                </p>
                <button class="button-gradient-2 z-20 ">Reach me</button>
            </div>
            <div class="flex w-[300px]    md:w-[350px] justify-center items-center">
                <img src="~/assets/imgs/hamza.jpg" class="rounded-full shadow-custom-purple border-2 border-violet-500" alt="">
            </div>
        </div>
        <div class="flex md:flex-row  flex-col relative justify-between md:px-[12%] py-10 items-center md:items-stretch mb-20  mt-40 ">
            
            <div class="flex    md:w-[90%] w-[70%]  justify-center items-center ">
                <img src="~/assets/imgs/hamza-2.jpg" class=" shadow-custom-purple border-2 border-violet-500" alt="">
            </div>
            <div class="flex flex-col justify-between md:mt-0 mt-20 items-center md:items-start px-8">
               <div class="flex flex-col items-center md:items-start  space-y-8">
                <p class="text-5xl  text-gradient font-bold  ">About Me</p>
                <p class="text-xl font-thin text-white ">As a professional web designer, I specialize in creating visually compelling, user friendly websites that enhance both functionality and aesthetic appeal.</p>
                <ul class=" text-white font-thin flex flex-col space-y-2">
                    <li class="flex items-center space-x-2"><p>●</p> <p>Design a custom, responsive website that works seamlessly on all devices.</p></li>
                    <li class="flex items-center space-x-2"><p>●</p> <p> Improve user experience (UX) by optimizing site navigation and layout.</p></li>
                        <li class="flex items-center space-x-2"><p>●</p> <p> Boost brand identity through tailored visual designs and consistent branding.</p></li>
                </ul>  
               </div>
                <button class="button-gradient-2 md:self-end md:mt-0 mt-10  z-20 ">See more</button>
            </div>
        </div>
        <div class="flex relative flex-col justify-between px-[10%] md:px-[400px] items-center mb-20  mt-40 ">
            <p class="text-5xl font-bold text-gradient">My Skills</p>
            <div class="w-full grid md:grid-cols-2 mt-28 gap-y-10 md:gap-x-20">
                <div class="w-full flex justify-between items-center">
                    <p class="text-xl w-40 md:w-80  text-white font-thin">UI design</p>
                    <div class="md:w-80 w-40 relative bg-white h-2 rounded-xl">
                        <div class="absolute h-2 w-[50%] bg-gradient-to-r from-violet-700 to-purple-500 rounded-full">

                        </div>
                    </div>
                </div>
                <div class="w-full flex justify-between items-center">
                    <p class="text-xl w-40 md:w-80  text-white font-thin">User Research</p>
                    <div class="md:w-80 w-40 relative bg-white h-2 rounded-xl">
                        <div class="absolute h-2 w-[50%] bg-gradient-to-r from-violet-700 to-purple-500 rounded-full">

                        </div>
                    </div>
                </div>
                <div class="w-full flex justify-between items-center">
                    <p class="text-xl w-40 md:w-80  text-white font-thin">UX Design</p>
                    <div class="md:w-80 w-40 relative bg-white h-2 rounded-xl">
                        <div class="absolute h-2 w-[50%] bg-gradient-to-r from-violet-700 to-purple-500 rounded-full">

                        </div>
                    </div>
                </div>
                <div class="w-full flex justify-between items-center">
                    <p class="text-xl w-40 md:w-80  text-white font-thin">Prototyping</p>
                    <div class="md:w-80 w-40 relative bg-white h-2 rounded-xl">
                        <div class="absolute h-2 w-[50%] bg-gradient-to-r from-violet-700 to-purple-500 rounded-full">

                        </div>
                    </div>
                </div>
                <div class="w-full flex justify-between items-center">
                    <p class="text-xl w-40 md:w-80  text-white font-thin">Responsive Design</p>
                    <div class="md:w-80 w-40 relative bg-white h-2 rounded-xl">
                        <div class="absolute h-2 w-[60%] bg-gradient-to-r from-violet-700 to-purple-500 rounded-full">

                        </div>
                    </div>
                </div>
                <div class="w-full flex justify-between items-center">
                    <p class="text-xl w-40 md:w-80  text-white font-thin">Creativity</p>
                    <div class="md:w-80 w-40 relative bg-white h-2 rounded-xl">
                        <div class="absolute h-2 w-[50%] bg-gradient-to-r from-violet-700 to-purple-500 rounded-full">

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex relative flex-col z-0 justify-between px-[10%] md:px-[300px] items-center mb-20  mt-40 ">
            <div class="absolute top-0 md:right-20 right-0 z-0 bg-custom-radial bg-20x20 w-80 h-28 pointer-events-none"></div>
            <div class="absolute bottom-20 md:right-40 right-0 rotate-90 z-0 bg-custom-radial bg-20x20 w-80 h-48 pointer-events-none"></div>
            <p class="text-5xl font-bold text-gradient z-20">My Projects</p>
            <div class="w-full grid z-0 md:grid-cols-3 px-10 gap-x-16 md:gap-y-0 gap-y-10 mt-20">
                <div class=" flex flex-col justify-between items-center">
                     <div class="w-full bg-black   border shadow-custom-purple border-violet-400 aspect-square rounded-2xl">

                     </div>
                     <div class="w-full flex justify-between items-center px-5 mt-5">
                        <p class="text-white">Akram fadel</p>
                        <p class="text-white">05-2024</p>
                     </div>
                     <p class="text-white font-thin px-5 mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni dolorem illo error labore </p>
                </div>
                <div class=" flex flex-col justify-between items-center">
                     <div class="w-full border bg-black shadow-custom-purple border-violet-400 aspect-square rounded-2xl">

                     </div>
                     <div class="w-full flex justify-between items-center px-5 mt-5">
                        <p class="text-white">Akram fadel</p>
                        <p class="text-white">09-2023</p>
                     </div>
                     <p class="text-white font-thin px-5 mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni dolorem illo error labore </p>
                
                </div>
                <div class=" flex flex-col justify-between items-center">
                     <div class="w-full bg-black border shadow-custom-purple border-violet-400 aspect-square rounded-2xl">

                     </div>
                     <div class="w-full flex justify-between items-center px-5 mt-5">
                        <p class="text-white">Akram fadel</p>
                        <p class="text-white">08-2024</p>
                     </div>
                     <p class="text-white font-thin px-5 mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni dolorem illo error labore </p>
                
                </div>
            </div>
            <button class="button-gradient-2 mt-20 "> See more</button>
        </div>
        <div class="flex relative py-2 flex-col z-0 justify-between md:px-[300px] items-center mb-20  mt-40 ">
            <p class="text-5xl font-bold text-gradient">Contact me</p>
            <div class="flex flex-col gap-4 justify-center items-center mt-20 md:w-[50%] w-[70%]">
                <div class="w-full gap-2 flex flex-col justify-center items-start">
                    <p class="md:text-3xl text-xl font-thin text-white">Full name</p>
                    <input type="text" placeholder="Enter your full name" class="w-full pl-5 text-white md:h-16 h-12 rounded-full  bg-[#5925c150] shadow-custom-violet  border-violet-300 border   ">
                </div>
                <div class="w-full gap-2 flex flex-col justify-center items-start">
                    <p class="md:text-3xl text-xl font-thin text-white">Email</p>
                    <input type="text" placeholder="Enter your Email" class="w-full  pl-5 md:h-16 h-12 text-white rounded-full shadow-custom-violet  bg-[#5925c150]  border-violet-300 border  ">
                </div>
                <div class="w-full gap-2 flex flex-col justify-center items-start">
                    <p class="md:text-3xl text-xl font-thin text-white">Message</p>
                    <input type="text" placeholder="Enter your Message" class="w-full  pl-5 md:h-20 h-16 text-white rounded-3xl shadow-custom-violet  bg-[#5925c150]  border-violet-300 border  ">
                </div>
            </div>
            <button class="button-gradient mt-10 z-20 ">Submit</button>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Typewriter from 'typewriter-effect/dist/core';
const typewriterRef = ref(null);
const finalPhrase = "I design modern, responsive websites that focus on aesthetics and usability, helping businesses create a strong online presence.";

const p = ref(null);
const w = ref(null);
const d = ref(null);
const finalText = ref(null);
onMounted(() => {
  const typewriter = new Typewriter(typewriterRef.value, { loop: false, delay: 75 });
  const Tp = new Typewriter(p.value, { loop: false, delay: 75 });
  const Tw = new Typewriter(w.value, { loop: false, delay: 75 });
  const Td = new Typewriter(d.value, { loop: false, delay: 75 });
  finalText.value.innerHTML = finalPhrase
        .split('')
        .map(char => `<span class="text-gray-400">${char}</span>`)
        .join('');  
  // Sequential Typing for Initial Words
  typewriter
    .typeString("Hi I'm Hamza Berbar!")
    .callFunction(() => Tp.start())
    .start();

  Tp
    .typeString("Professional")
    .callFunction(() => Tw.start());

  Tw
    .typeString("Web")
    .callFunction(() => Td.start());

  Td
    .typeString("Designer")
    .callFunction(() => {
      // Prepare the final sentence
      finalText.value.innerHTML = finalPhrase
        .split('')
        .map(char => `<span class="text-gray-400">${char}</span>`)
        .join('');
      
      // Start typing effect for final text
      let i = 0;
      const spans = finalText.value.querySelectorAll('span');
      const interval = setInterval(() => {
        if (i < spans.length) {
          spans[i].classList.remove('text-gray-400');
          spans[i].classList.add('text-white');
          i++;
        } else {
          clearInterval(interval);
        }
      }, 50); // Typing speed
    });
});
</script>