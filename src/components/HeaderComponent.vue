<template>
<nav class="bg-blue-500">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-20">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </button>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex-shrink-0 flex items-center">
            <a href="#" class=" text-white px-3 py-2 rounded-md text-xl font-medium" >Pressory</a>
            </div>
            <div class="hidden sm:block sm:mx-auto">
            <div class="flex space-x-2 items-center">
                <div class="ml-3 relative">
                <div>
                    <button type="button" class="text-base text-black bg-white px-3 py-3 rounded  hover:shadow-lg hover:shadow-red-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    Article <i class="fas fa-chevron-down"></i>
                    </button>
                </div>
                <div class="origin-top-right absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> 
                    <!--absolute rounded shadow bg-white overflow-hidden peer-checked:flex flex-col w-full mt-1 border border-gray-200" -->
                     <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Article</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Author</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Publication</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">URL</a>
                </div>
                </div>
                <div>
                <div class="mt-1 relative rounded-md shadow-sm">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span class="text-gray-500 sm:text-sm"> <i class="fas fa-search"></i></span>
                    </div>
                    <div class="flex items-center">
                    <input type="text" name="price" id="price" class="focus:ring-indigo-500 focus:border-indigo-500 block  w-96 pl-7 text-lg px-3 py-3 pr-40 sm:text-sm border-2 border-white rounded-l" placeholder="Search here..">
                    <!-- <div class="absolute inset-y-0 right-0 flex items-center">
                        
                    </div> -->
                    <button type="button" class=" text-base text-white bg-black px-3 py-3 rounded  hover:shadow-lg hover:shadow-red-500">
                            <span class="md:inline-block tracking-widest uppercase">search</span>
                        </button>
                        </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div class="ml-3 relative">
                <div>
                    <button type="button" class=" text-black   px-2 py-3 " id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <i class="fas fa-ellipsis-v text-xl"></i>
                    </button>
                </div>
                <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                    <!-- Active: "bg-gray-100", Not Active: "" -->
                    <router-link to="/about" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">About</router-link>
                    <router-link to="/author" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Author</router-link>
                    <router-link to="/publication" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Publication</router-link>
                    <router-link to="/article" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Articles</router-link>
                    <router-link to="/fallacies" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Fallacies</router-link>
                    <router-link to="/Howto" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">How-to</router-link>
                    <router-link to="/contact" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Contact</router-link>
                    <router-link to="/faqs" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">FAQs</router-link>
                    <router-link to="/donate" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Donate</router-link>
                </div>
                </div>

            <!-- Profile dropdown -->
            <div class="ml-3 relative">
            <div class="text-base text-white bg-black px-3  rounded flex items-center">
                <i class="fas fa-user"></i>
                <router-link to="/logincomponent" class="block px-4 py-3 text-lg text-white" role="menuitem" tabindex="-1" id="user-menu-item-0">Login</router-link> | 
                <router-link to="/signupcomponent" class="block px-4 py-3 text-lg text-white" role="menuitem" tabindex="-1" id="user-menu-item-1">Signup</router-link>
            </div>
            </div>
        </div>
        </div>
    </div>
</nav>
</template>

<script>
export default {
  name: 'HeaderComponent'
  
}
</script>