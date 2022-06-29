<template>
  <div>
      <h3 class="text-center font-normal bg-green-100 mt-8 py-4 text-green-700  text-lg ">Istalgan kitobingizni buyurtma
        qilling!</h3>
    <div class="container">
      <div class=" container-form p-6 px-10 rounded border border-green-500">
        <form  class="form-group" action="">
          <input required class="border px-3 py-2 rounded my-4  w-full outline-none border-green-500" type="text"
                 placeholder="Ism Familiya*">
          <br>
          <input required class="border  px-3 py-2 rounded my-4 w-full outline-none border-green-500" type="text"
                 placeholder="Telefon raqam*">
          <br>
          <textarea dir="auto" placeholder="Salom"  class="border outline-none rounded border-green-500" rows="4"
                    cols="58.5">
        </textarea> <br>

          <div class="flex-center-between">
            <button  class="btn-file text-green-800 border mt-4 border-green-600 rounded py-2 px-8">+ Fayl
              yuklash!</button>
            <button class="btn mt-4 py-2 text-white px-16 rounded ">Yuborish</button>
          </div>
        </form>
        <img class="img"   src="../assets/photos/rasm.jpg" alt="Photo not found!">
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "UnicalType"
}
</script>

<style lang="scss" scoped>
.container-form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: 30px auto;

  .img {
    width: 40%;
    height: 320px;
    border-radius: 5px;
    object-fit: cover;
  }
}
.form-group {
  width: 50%;
}
.btn {
  background-color: #55B74C;
  transition: all .3s linear;
  border: 1px solid #55B74C;

  &:hover {
    background-color: white;
    color: #55B74C;
    border: 1px solid #55B74C;
  }
}
.btn-file {
  transition: all .2s linear;
  &:hover {
    background-color: #55B74C;
    color: white;
  }
}
</style>
