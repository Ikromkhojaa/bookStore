<template>
  <div class="signin rounded">
    <div class="close-box">
      <button class="btn bg-red-800 rounded px-4 py-2 text-white">X</button>
    </div>
    <h1 class="text-center text-3xl">Kirish!</h1>
    <form action="">
      <label class="text-sm "  for="emailAddress">Email pochta kiriting!</label>
      <input id="emailAddress" class="border my-2 border-green-600 outline-none px-3 py-2 rounded w-full" type="email"
             placeholder="Email">
      <br>
      <label class="text-sm" for="passwordAddress">Parolni kiriting!</label>
      <input  id="passwordAddress" class="border my-2 border-green-600 outline-none px-3 py-2 rounded w-full"
              type="password" placeholder="Enter Password"> <br>
      <div>
        <button class="bg-[#55B74C] px-8 w-full mt-5 text-white  py-3 rounded" >Kirish</button>
        <p class="inline-block mt-5 mr-4">Agar sizda hali ham account bo'lmasa.</p>
        <router-link class="text-[#55B74C]" to="/sign-up">Registratsiyadan o'tish!</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
name: "SiginIn"
}
</script>

<style lang="scss" scoped>

.signin {
  max-width: 600px;
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
