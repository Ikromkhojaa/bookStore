<template>
  <div class="signup rounded">
    <div class="close-box">
      <button class="btn bg-red-800 rounded px-4 py-2 text-white">X</button>
    </div>
    <h1 class="text-center">Ro'yxatdan o'tish!</h1>
    <form action="">
      <label for="ism">Ism <span class="text-red-600">*</span></label> <br>
      <input class="w-full border border-green-500 rounded mb-4 mt-2 outline-none px-4 py-2 " id="ism" type="text"
             placeholder="Ism">
      <br>
      <label for="familiya">Familiya <span class="text-red-600">*</span></label> <br>
      <input class="w-full border border-green-500 rounded mb-4 mt-2 outline-none px-4 py-2 " id="familiya" type="text"
             placeholder="Familiya">
      <br>
      <label for="email">Email <span class="text-red-600">*</span></label> <br>
      <input class="w-full border border-green-500 rounded mb-4 mt-2 outline-none px-4 py-2 " id="email" type="email"
             placeholder="Enter email">
      <br>
      <label for="password">Parol <span class="text-red-600">*</span></label> <br>
      <input id="password" class="w-full border border-green-500 rounded mb-4 mt-2 outline-none px-4 py-2 " type="password"
             placeholder="Enter password">
      <br>
      <button class="w-full bg-[#55B74C] py-3 text-white rounded mb-2">Ro'yxatdan o'tish!</button>
      <p class="inline-block">Agar siz Ro'yxatdan o'tgan bo'lsangiz -</p>
      <router-link class="text-[#55B74C] text-base" to="/sign-in">Kirish!</router-link>
    </form>
  </div>
</template>

<script>
export default {
name: "SignUp"
}
</script>

<style lang="scss" scoped>
.signup {
  max-width: 500px;
  margin: 30px auto;
  height: auto;
  border: 1px solid #55B74C;
  padding: 40px;

  .close-box {
    position: relative;
    .btn {
      position: absolute;
      right: -40px;
      top: -40px;
    }
  }
}
</style>
