<template>
  <div>
    <div class="lg:container-lg">
      <div class="flex bg-center bg-no-repeat bg-cover">
        <div
          class="
            w-full
            md:w-3/12
            lg:w-6/12 lg:relative
            bg-full bg-no-repeat bg-cover bg-center
          "
          style="
            background-image: url(https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80);
          "
        >
          <div
            class="
              flex flex-col
              justify-aroun
              items-center
              justify-center
              h-full
              relative
            "
          >
            <div class="w-full absolute left-3 top-3">
              <i class="fas fa-tooth text-indigo-600 text-6xl"></i>
            </div>
            <div class="w-full md:w-3/4 mx-auto">
              <p class="text-white text-right text-2xl opacity-100 mt-3"></p>
            </div>
          </div>
        </div>
        <div
          class="
            w-full
            px-4
            md:px-8 md:py-0
            max-w-md
            mx-auto
            sm:max-w-xl
            lg:max-w-full lg:w-6/12 lg:py-0 lg:px-12
          "
        >
          <div
            class="
              min-h-screen
              flex
              items-center
              justify-center
              bg-white-50
              md:py-12 md:px-6
              lg:px-8
            "
          >
            <div class="max-w-sm w-full space-y-8">
              <div
                class="
                  relative
                  flex flex-col
                  min-w-0
                  break-words
                  w-full
                  mb-6
                  rounded-lg
                "
              >
                <div class="rounded-t bg-white mb-0 py-6">
                  <div class="text-left">
                    <h6 class="text-sky-500 text-4xl font-bold mb-6">
                      Pre<span class="bg-sky-500 text-white pr-2 pl-1 ml-1"
                        >ssory</span
                      >
                    </h6>
                    <h6 class="text-gray-900 text-3xl font-bold">
                      Login in to your account
                    </h6>
                  </div>
                </div>
                <div class="flex-auto">
                  <form @submit.prevent="login">
                    <div class="relative w-full mb-3">
                      <div class="col-md-4">
                        <label
                          class="block uppercase text-xs font-bold mb-2"
                          for="grid-password"
                          >Email
                        </label>
                        <input
                          type="email"
                          class="
                            border
                            px-3
                            py-2
                            placeholder-black
                            text-black
                            bg-white
                            rounded
                            text-lg
                            shadow-sm
                            focus:outline-none focus:ring
                            w-full
                            ease-linear
                            transition-all
                            duration-150
                            valid
                          "
                          name="email"
                          id="email"
                          aria-invalid="false"
                          v-model="email"
                        />
                        <p class="errormsg">
                          {{ email_error }}
                        </p>
                      </div>
                      <div class="col-md-4 mt-4">
                        <label
                          class="block uppercase text-xs font-bold mb-2"
                          for="grid-password"
                          >Password</label
                        >
                        <input
                          type="password"
                          class="
                            border
                            px-3
                            py-2
                            placeholder-black
                            text-black
                            bg-white
                            rounded
                            text-lg
                            shadow-sm
                            focus:outline-none focus:ring
                            w-full
                            ease-linear
                            transition-all
                            duration-150
                            valid
                          "
                          name="password"
                          id="password"
                          aria-invalid="false"
                          v-model="password"
                        />
                        <p>
                          {{ password_error }}
                        </p>
                      </div>
                    </div>
                    <br />

                    <button
                      type="submit"
                      class="
                        w-full
                        text-white
                        bg-black
                        focus:ring-4 focus:outline-none focus:ring-gray-900
                        font-medium
                        rounded
                        text-lg
                        px-5
                        py-2
                        text-center
                        mr-2
                        mb-2
                      "
                    >
                      Login
                    </button>
                    <div class="my-4"></div>
                    <div class="flex flex-wrap mt-3">
                      <div class="w-1/2">
                        <a href="" class="text-gray-400 hover:text-gray-800"
                          >Forgot password?</a
                        >
                      </div>
                      <div class="w-1/2 text-right">
                        <router-link
                          to="/signup"
                          class="text-gray-400 hover:text-gray-800"
                          >Create new account</router-link
                        >
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import axios from "axios";
export default {
  name: "PressoryLogin",
 
};
</script>