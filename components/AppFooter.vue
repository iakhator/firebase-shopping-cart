<template>
    <footer class="bg-gray-50 border-t border-gray-200 pt-12 pb-8">
        <div class="container-wrapper">
            <div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
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
                                    >support@mobileshop.com</span
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
import { h, defineComponent } from 'vue'
import { Location, Phone, Message, VideoPlay } from '@element-plus/icons-vue'

// Custom icons for social media
const IconFacebook = defineComponent({
    name: 'IconFacebook',
    render() {
        return h(
            'svg',
            {
                viewBox: '0 0 24 24',
                fill: 'currentColor',
                width: '1em',
                height: '1em',
            },
            [
                h('path', {
                    d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
                }),
            ],
        )
    },
})

const IconTwitter = defineComponent({
    name: 'IconTwitter',
    render() {
        return h(
            'svg',
            {
                viewBox: '0 0 24 24',
                fill: 'currentColor',
                width: '1em',
                height: '1em',
            },
            [
                h('path', {
                    d: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
                }),
            ],
        )
    },
})

const IconInstagram = defineComponent({
    name: 'IconInstagram',
    render() {
        return h(
            'svg',
            {
                viewBox: '0 0 24 24',
                fill: 'currentColor',
                width: '1em',
                height: '1em',
            },
            [
                h('path', {
                    d: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.897 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.897-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z',
                }),
            ],
        )
    },
})
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

.max-w-\[1600px\] {
    max-width: 1600px;
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

.bg-gray-50 {
    background-color: $white;
}

.gap-8 {
    gap: 2rem;
}

@media (min-width: 768px) {
    .md\:flex-row {
        flex-direction: row;
    }

    .md\:mt-0 {
        margin-top: 0;
    }
}
</style>
