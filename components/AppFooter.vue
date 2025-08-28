<template>
    <footer class="bg-gray-50 border-t border-gray-200 pt-12 pb-8">
        <div class="container-wrapper">
            <div class="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    <div>
                        <h3 class="font-bold text-lg mb-4 footer-h">
                            RingCart
                        </h3>
                        <p class="text-gray-600 mb-4">
                            Your one-stop destination for the latest smartphones
                            and accessories at competitive prices.
                        </p>
                        <div class="flex space-x-4">
                            <a href="#" class="text-gray-600 hover:text-black">
                                <el-icon :size="20"><IconFacebook /></el-icon>
                            </a>
                            <a href="#" class="text-gray-600 hover:text-black">
                                <el-icon :size="20"><IconTwitter /></el-icon>
                            </a>
                            <a href="#" class="text-gray-600 hover:text-black">
                                <el-icon :size="20"><IconInstagram /></el-icon>
                            </a>
                            <a href="#" class="text-gray-600 hover:text-black">
                                <el-icon :size="20"><VideoPlay /></el-icon>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 class="font-bold text-lg mb-4 footer-h">
                            Quick Links
                        </h3>
                        <ul class="space-y-2">
                            <li>
                                <NuxtLink
                                    to="/about"
                                    class="text-gray-600 hover:text-black"
                                >
                                    About Us
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink
                                    to="/blog"
                                    class="text-gray-600 hover:text-black"
                                >
                                    Blog
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink
                                    to="/faq"
                                    class="text-gray-600 hover:text-black"
                                >
                                    FAQs
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink
                                    to="/shipping"
                                    class="text-gray-600 hover:text-black"
                                >
                                    Shipping & Returns
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="font-bold text-lg mb-4 footer-h">
                            Categories
                        </h3>
                        <ul class="space-y-2">
                            <li>
                                <NuxtLink
                                    to="/category/smartphones"
                                    class="text-gray-600 hover:text-black"
                                >
                                    Smartphones
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink
                                    to="/category/tablets"
                                    class="text-gray-600 hover:text-black"
                                >
                                    Tablets
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink
                                    to="/category/accessories"
                                    class="text-gray-600 hover:text-black"
                                >
                                    Accessories
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink
                                    to="/category/wearables"
                                    class="text-gray-600 hover:text-black"
                                >
                                    Wearables
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink
                                    to="/category/refurbished"
                                    class="text-gray-600 hover:text-black"
                                >
                                    Refurbished
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="font-bold text-lg mb-4 footer-h">
                            Contact Us
                        </h3>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <el-icon
                                    :size="20"
                                    class="mr-2 text-gray-600 shrink-0 mt-0.5"
                                    ><Location
                                /></el-icon>
                                <span class="text-gray-600">
                                    123 Tech Street, Digital City, 10001
                                </span>
                            </li>
                            <li class="flex items-center">
                                <el-icon :size="20" class="mr-2 text-gray-600"
                                    ><Phone
                                /></el-icon>
                                <span class="text-gray-600"
                                    >+1 (555) 123-4567</span
                                >
                            </li>
                            <li class="flex items-center">
                                <el-icon :size="20" class="mr-2 text-gray-600"
                                    ><Message
                                /></el-icon>
                                <span class="text-gray-600"
                                    >support@ringcart.app</span
                                >
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="border-t border-gray-200 mt-12 pt-8">
                    <div
                        class="flex flex-col md:flex-row justify-between items-center"
                    >
                        <p class="text-gray-600 text-sm">
                            &copy; {{ new Date().getFullYear() }} RingCart. All
                            rights reserved.
                        </p>
                        <div class="flex space-x-4 mt-4 md:mt-0">
                            <NuxtLink
                                to="/privacy"
                                class="text-gray-600 hover:text-black text-sm"
                            >
                                Privacy Policy
                            </NuxtLink>
                            <NuxtLink
                                to="/terms"
                                class="text-gray-600 hover:text-black text-sm"
                            >
                                Terms of Service
                            </NuxtLink>
                            <NuxtLink
                                to="/cookies"
                                class="text-gray-600 hover:text-black text-sm"
                            >
                                Cookie Policy
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { Location, Phone, Message, VideoPlay } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.container-wrapper {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    font-size: $text-sm;
}

.footer-h {
    font-family: $font-stack-brand;
}

.max-w-\[1400px\] {
    max-width: 1400px;
}

.mx-auto {
    margin-left: auto;
    margin-right: auto;
}

.px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
}

@media (min-width: 640px) {
    .sm\:px-6 {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }
}

@media (min-width: 1024px) {
    .lg\:px-8 {
        padding-left: 2rem;
        padding-right: 2rem;
    }
}

.grid-cols-1 {
    grid-template-columns: 1fr;
}

@media (min-width: 768px) {
    .md\:grid-cols-2 {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .lg\:grid-cols-4 {
        grid-template-columns: repeat(4, 1fr);
    }
}

.space-y-2 > * + * {
    margin-top: 0.5rem;
}

.space-y-3 > * + * {
    margin-top: 0.75rem;
}

.space-y-4 > * + * {
    margin-top: 1rem;
}

.space-x-4 > * + * {
    margin-left: 1rem;
}

.mb-4 {
    margin-bottom: 1rem;
}

.mt-4 {
    margin-top: 1rem;
}

.mt-12 {
    margin-top: 3rem;
}

.pt-8 {
    padding-top: 2rem;
}

.pt-12 {
    padding-top: 3rem;
}

.pb-8 {
    padding-bottom: 2rem;
}

.mr-2 {
    margin-right: 0.5rem;
}

.mt-0\.5 {
    margin-top: 0.125rem;
}

.text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
}

.text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
}

.font-bold {
    font-weight: 700;
}

.text-gray-600 {
    color: #666666;
}

.hover\:text-black:hover {
    color: #000000;
}

.flex {
    display: flex;
}

.flex-col {
    flex-direction: column;
}

.justify-between {
    justify-content: space-between;
}

.shrink-0 {
    flex-shrink: 0;
}

.border-t {
    border-top-width: 1px;
}

.border-gray-200 {
    border-color: #e5e5e5;
}

.gap-8 {
    gap: 2rem;
}

/* Responsive adjustments */

@media (min-width: 768px) {
    .md\:flex-row {
        flex-direction: row;
    }

    .md\:mt-0 {
        margin-top: 0;
    }
}
</style>
