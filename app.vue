<template>
    <div class="font-[Sora]">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </template>
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Sora:wght@100..800&display=swap');
  
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>