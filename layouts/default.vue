<template>
    <div :dir="$i18n.localeProperties.dir" class="h-20">
        <nav class="fixed flex justify-between py-6 w-full lg:px-48 md:px-12 px-4 content-center bg-secondary z-10">
            <NuxtLink :to="localePath('index')" class="flex items-center">
            <img src="~/assets/Logo_black.svg" alt="Logo" class="h-4">
            </NuxtLink>
            <ul class="items-center hidden md:flex">
            <li class="mx-3 ">
                <NuxtLink :to="localePath('/')" class="growing-underline">
                {{ $t('home') }}
                </NuxtLink>
            </li>
            <li class="mx-3 ">
                <NuxtLink :to="localePath('contact-us')" class="growing-underline">
                {{ $t('contact_us') }}
                </NuxtLink>
            </li>
            <li class="growing-underline mx-3">
                <NuxtLink :to="localePath('services')" class="growing-underline">
                {{ $t('services') }}
                </NuxtLink>            </li>
            <li class="growing-underline mx-3">
                <NuxtLink :to="localePath('products')" class="growing-underline">
                {{ $t('products') }}
                </NuxtLink>
            </li>
            </ul>
            <div class="hidden md:block">
            <LangSwitch />
            </div>
            <div id="showMenu" class="md:hidden">
            <img src="~/assets/Menu.svg" alt="Menu icon">
            </div>
        </nav>
    </div>
</template>