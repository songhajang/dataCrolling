<template>
  <div class="mt-10">
    <hr>
    <h1 class="text-center text-3xl my-5 font-black">HOME</h1>
    <hr>
    <h3 class="text-center text-lg text-gray-400 mt-20">
      <img class="mx-auto my-10" src="../assets/logo.png" alt="">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis repellat eum perspiciatis a omnis. <br>
       Rem maxime a veniam fugiat, quibusdam consectetur adipisci quidem enim laboriosam est ut ipsam nam eligendi? <br>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolorum sequi adipisci repellendus iure, <br>
       optio nemo tempora aspernatur libero consectetur cupiditate consequatur, eos dolores! Quas laboriosam dolorem voluptatum maxime repellat!
    </h3>
      <h2 class="text-center my-20 text-xl ">
        <router-link 
        class="text-white ease-in bg-sky-700 border-2 p-5 transition delay-100
              hover:text-sky-700 hover:bg-white hover:border-sky-700" 
        :to="{name : 'user'}">USER LIST SHOW &#8640;</router-link>
      </h2>
  </div>
</template>

<script>

export default {

}
</script>

<style>

</style>