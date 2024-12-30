<template>
    <div class="z-0">


        <div class="w-screen hidden md:flex h-48  z-10 justify-between px-[210px] items-center">
            <img src="~/assets/imgs/hamza_logo.png" class=" z-20 " alt="">
            <div class="flex justify-center text-2xl  z-20   space-x-8 items-center">
                <p class="text-gradient ">Home
                </p>
                <p class="text-gradient ">About me</p>
                <p class="text-gradient">Skills</p>
                <p class="text-gradient">Projects</p>
                <p class="text-gradient">Contact</p>
            </div>

            <button class="button-gradient z-20 ">Hire me !</button>
        </div>
        <div class="md:hidden px-10  shadow-md flex  justify-between  items-center space-x-1     mt-10  w-screen">
            <img src="~/assets/imgs/hamza_logo.png" class=" z-20 " alt="">
            <button class="button-gradient z-20 " @click="$('#menu').slideToggle()">Menu</button>
        </div>
        <div id="menu"
            class="w-screen text-2xl font-bold  md:hidden flex flex-col space-y-3 md:space-y-0 justify-center items-center h-fit">
            <p class="text-gradient  z-20">Home
            </p>
            <p class="text-gradient  z-20">About me</p>
            <p class="text-gradient  z-20">Skills</p>
            <p class="text-gradient  z-20">Projects</p>
            <p class="text-gradient  z-20">Contact</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import $ from "jquery";
</script>