<template>
  <ul class="flex justify-center bg-gray-300 fixed top-0 w-full ">
    <li class="text-xl mx-5 text-white hover:text-sky-500 py-2">
      <router-link :to="{name : 'home'}">HOME</router-link>
    </li>
    <li class="text-xl mx-5 text-white hover:text-sky-500 py-2">
      <router-link :to="{name : 'user'}">USER</router-link>
    </li>
  </ul>
</template>

<script>
export default {

}
</script>

<style>

</style>