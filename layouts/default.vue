<template>
    <div class="h-20">
        <nav class="fixed flex justify-between py-6 w-full lg:px-48 md:px-12 px-4 content-center bg-secondary z-10">
            <div class="flex items-center">
            <img src="~/assets/Logo_black.svg" alt="Logo" class="h-4">
            </div>
            <ul class="items-center hidden md:flex">
            <li class="mx-3 ">
                <a class="growing-underline" href="howitworks">
                How it works
                </a>
            </li>
            <li class="growing-underline mx-3">
                <a href="features">Features</a>
            </li>
            <li class="growing-underline mx-3">
                <a href="pricing">Pricing</a>
            </li>
            </ul>
            <div class="hidden md:block">
            <button class="mr-6">Login</button>
            <button class="py-2 px-4 text-white bg-black rounded-3xl">
                Signup
            </button>
            </div>
            <div id="showMenu" class="md:hidden">
            <img src="~/assets/Menu.svg" alt="Menu icon">
            </div>
        </nav>
    </div>
</template>