<template>
    <div class="w-screen relative z-0 bg-[#080C08]  ">
        <div class="absolute z-0   w-72 h-72 rotate-45 bg-[#9914C1] blur-2xl scale-125 opacity-55 bg-animate-1"></div>
        <div class="absolute z-0  right-56 -top-20 w-56 h-56 rotate-45 md:block hidden bg-[#9914C1] blur-2xl scale-125 opacity-55 bg-animate-2"></div>
        <div class="absolute z-0  top-80 rounded-3xl w-64 h-80 md:block hidden -rotate-45 bg-[#5825C1] blur-3xl scale-150 bg-animate-3"></div>
        <div class="absolute z-0  md:top-40 top-80 -right-40 rounded-3xl w-72 h-96 -rotate-45 bg-[#5825C1] blur-3xl scale-150 bg-animate-4"></div>



        <div class="absolute z-0 top-[250vh]   w-80 h-80 rounded-full  rotate-45 bg-[#9914C1] blur-2xl scale-125 opacity-55 bg-animate-1"></div>
        <div class="absolute z-0  -right-20 top-[150vh] w-72 h-72 rounded-full rotate-45 bg-[#9914C1] blur-2xl scale-125 opacity-55 bg-animate-2"></div>
        <div class="absolute z-0  top-[300vh] rounded-3xl w-64 h-80 -rotate-45 bg-[#5825C1] blur-[80px] scale-150 bg-animate-3"></div>
        <div class="absolute z-0  top-[110vh] -right-20 rounded-3xl w-72 h-96 -rotate-45 bg-[#5825C1] blur-3xl scale-150 bg-animate-4"></div>


        <!-- <div class="absolute z-0  top-[250vh] -right-20 rounded-3xl  w-72 h-96 -rotate-45 bg-[#5825C1] blur-3xl scale-150 bg-animate-4"></div> -->
        <div class="absolute z-0 bottom-[50vh]   w-80 h-80 rounded-full  rotate-45 bg-[#9914C1] blur-[70px] scale-100 opacity-55 bg-animate-5"></div>

        <div class="absolute z-0  bottom-[10vh] -right-20 rounded-3xl  w-40 h-96 rotate-45 bg-[#5825C1] blur-3xl scale-150 bg-animate-4"></div>
        <NavBar  />
        <div class="z-20 relative">
            <slot  />
        </div>
    </div>
</template>
<script setup> 
import { onMounted } from 'vue'
import gsap from 'gsap'
onMounted(() => {
  gsap.to('.bg-animate-1', {
    x: '+=100', // Move right
    y: '+=30', // Move down
    repeat: -1, // Infinite loop
    yoyo: true, // Go back to the start
    duration: 2, // Animation duration
    ease: 'power1.inOut'
  })

  gsap.to('.bg-animate-2', {
    x: '-=40', // Move left
    y: '+=50', // Move down
    repeat: -1,
    yoyo: true,
    duration: 2,
    ease: 'power1.inOut'
  })

  gsap.to('.bg-animate-3', {
    x: '+=30',
    y: '-=50', // Move up
    repeat: -1,
    yoyo: true,
    duration: 2,
    ease: 'power1.inOut'
  })
  gsap.to('.bg-animate-5', {
    x: '+=10',
    y: '+=200', // Move up
    repeat: -1,
    yoyo: true,
    duration: 2,
    ease: 'power1.inOut'
  })
  gsap.to('.bg-animate-4', {
    x: '-=50',
    y: '-=30',
    repeat: -1,
    yoyo: true,
    duration: 2,
    ease: 'power1.inOut'
  })
})
</script>
<style>
/* Ensure the background is covered properly */
.relative {
  overflow: hidden;
}
</style>