<template>
    <footer class="footer-container">
        <div class="footer-inner">
            <el-row :gutter="20" class="footer-top">
                <el-col :xs="24" :md="12">
                    <div class="brand-section">
                        <h2 class="brand-name">BRAND</h2>
                        <p class="brand-description">
                            Your one-stop destination for quality products and
                            exceptional service.
                        </p>
                        <div class="social-icons">
                            <el-link
                                :underline="false"
                                href="#"
                                class="social-link"
                            >
                                <!-- <el-icon><IconTwitter /></el-icon> -->
                            </el-link>
                            <el-link
                                :underline="false"
                                href="#"
                                class="social-link"
                            >
                                <!-- <el-icon><IconFacebook /></el-icon> -->
                            </el-link>
                            <el-link
                                :underline="false"
                                href="#"
                                class="social-link"
                            >
                                <!-- <el-icon><IconInstagram /></el-icon> -->
                            </el-link>
                            <el-link
                                :underline="false"
                                href="#"
                                class="social-link"
                            >
                                <!-- <el-icon><IconYoutube /></el-icon> -->
                            </el-link>
                        </div>
                    </div>
                </el-col>
                <el-col :xs="24" :md="12">
                    <div class="newsletter-section">
                        <h3 class="section-title">
                            Subscribe to our newsletter
                        </h3>
                        <p class="section-description">
                            Stay updated with the latest products, offers and
                            news
                        </p>
                        <el-form @submit.native.prevent="subscribeToNewsletter">
                            <el-row :gutter="10">
                                <el-col :xs="24" :sm="16">
                                    <el-input
                                        v-model="email"
                                        placeholder="Your email address"
                                        size="large"
                                        class="newsletter-input"
                                    />
                                </el-col>
                                <el-col :xs="24" :sm="8">
                                    <el-button
                                        type="primary"
                                        size="large"
                                        @click="subscribeToNewsletter"
                                        class="newsletter-button"
                                    >
                                        Subscribe
                                    </el-button>
                                </el-col>
                            </el-row>
                        </el-form>
                    </div>
                </el-col>
            </el-row>

            <el-divider class="footer-divider" />

            <el-row :gutter="20" class="footer-links">
                <el-col :xs="24" :sm="12" :md="6">
                    <h3 class="section-title">Shop</h3>
                    <ul class="link-list">
                        <li>
                            <el-link
                                :underline="false"
                                href="#"
                                class="footer-link"
                                >New Arrivals</el-link
                            >
                        </li>
                        <li>
                            <el-link
                                :underline="false"
                                href="#"
                                class="footer-link"
                                >Best Sellers</el-link
                            >
                        </li>
                        <li>
                            <el-link
                                :underline="false"
                                href="#"
                                class="footer-link"
                                >Sale</el-link
                            >
                        </li>
                        <li>
                            <el-link
                                :underline="false"
                                href="#"
                                class="footer-link"
                                >Collections</el-link
                            >
                        </li>
                    </ul>
                </el-col>
                <el-col :xs="24" :sm="12" :md="6">
                    <h3 class="section-title">Help</h3>
                    <ul class="link-list">
                        <li>
                            <el-link
                                :underline="false"
                                href="#"
                                class="footer-link"
                                >FAQ</el-link
                            >
                        </li>
                        <li>
                            <el-link
                                :underline="false"
                                href="#"
                                class="footer-link"
                                >Shipping & Returns</el-link
                            >
                        </li>
                        <li>
                            <el-link
                                :underline="false"
                                href="#"
                                class="footer-link"
                                >Store Policy</el-link
                            >
                        </li>
                        <li>
                            <el-link
                                :underline="false"
                                href="#"
                                class="footer-link"
                                >Payment Methods</el-link
                            >
                        </li>
                    </ul>
                </el-col>
                <el-col :xs="24" :sm="12" :md="6">
                    <h3 class="section-title">About</h3>
                    <ul class="link-list">
                        <li>
                            <el-link
                                :underline="false"
                                href="#"
                                class="footer-link"
                                >Our Story</el-link
                            >
                        </li>
                        <li>
                            <el-link
                                :underline="false"
                                href="#"
                                class="footer-link"
                                >Sustainability</el-link
                            >
                        </li>
                        <li>
                            <el-link
                                :underline="false"
                                href="#"
                                class="footer-link"
                                >Careers</el-link
                            >
                        </li>
                        <li>
                            <el-link
                                :underline="false"
                                href="#"
                                class="footer-link"
                                >Press</el-link
                            >
                        </li>
                    </ul>
                </el-col>
                <el-col :xs="24" :sm="12" :md="6">
                    <h3 class="section-title">Contact</h3>
                    <ul class="contact-list">
                        <li class="contact-item">
                            <!-- <el-icon><IconLocation /></el-icon> -->
                            <span>123 Commerce St, City, Country</span>
                        </li>
                        <li class="contact-item">
                            <!-- <el-icon><IconPhone /></el-icon> -->
                            <span>+1 (555) 123-4567</span>
                        </li>
                        <li class="contact-item">
                            <!-- <el-icon><IconMessage /></el-icon> -->
                            <span>support@yourbrand.com</span>
                        </li>
                        <li class="contact-item">
                            <!-- <el-icon><IconClock /></el-icon> -->
                            <span>Mon-Fri: 9AM-6PM</span>
                        </li>
                    </ul>
                </el-col>
            </el-row>

            <el-divider class="footer-divider" />

            <el-row class="footer-bottom">
                <el-col :xs="24" :md="12" class="copyright">
                    <p>
                        &copy; {{ new Date().getFullYear() }} Your Brand. All
                        rights reserved.
                    </p>
                </el-col>
                <el-col :xs="24" :md="12" class="payment-methods">
                    <img
                        src="https://via.placeholder.com/40x25"
                        alt="Visa"
                        class="payment-icon"
                    />
                    <img
                        src="https://via.placeholder.com/40x25"
                        alt="Mastercard"
                        class="payment-icon"
                    />
                    <img
                        src="https://via.placeholder.com/40x25"
                        alt="American Express"
                        class="payment-icon"
                    />
                    <img
                        src="https://via.placeholder.com/40x25"
                        alt="PayPal"
                        class="payment-icon"
                    />
                    <img
                        src="https://via.placeholder.com/40x25"
                        alt="Apple Pay"
                        class="payment-icon"
                    />
                </el-col>
            </el-row>
        </div>
    </footer>
</template>

<script setup>
// import {
//   Location as IconLocation,
//   Phone as IconPhone,
//   Message as IconMessage,
//   Clock as IconClock,
//   Twitter as IconTwitter,
//   Facebook as IconFacebook,
//   Instagram as IconInstagram,
//   Youtube as IconYoutube
// } from '@element-plus/icons-vue';

const email = ref('')

const subscribeToNewsletter = () => {
    // Here you would implement the newsletter subscription logic
    alert(`Subscribed with email: ${email.value}`)
    email.value = ''
}
</script>

<style scoped>
.footer-container {
    background-color: #1a1a1a;
    color: #a0a0a0;
    padding: 48px 24px;
    width: 100%;
    margin-top: auto; /* This pushes the footer to the bottom when using flex layout */
}

.footer-inner {
    max-width: 1600px; /* Set the inner container to 1600px max-width */
    margin: 0 auto; /* Center the inner container */
    width: 100%;
}

.brand-name {
    color: #ffffff;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
}

.brand-description {
    margin-bottom: 16px;
    font-size: 14px;
}

.social-icons {
    display: flex;
    gap: 16px;
}

.social-link {
    color: #a0a0a0;
}

.social-link:hover {
    color: #ffffff;
}

.section-title {
    color: #ffffff;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 16px;
}

.section-description {
    margin-bottom: 16px;
    font-size: 14px;
}

.newsletter-input {
    width: 100%;
    margin-bottom: 10px;
}

.newsletter-button {
    width: 100%;
}

.footer-divider {
    border-color: #333333;
    margin: 24px 0;
}

.link-list,
.contact-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.link-list li,
.contact-list li {
    margin-bottom: 10px;
}

.footer-link {
    color: #a0a0a0;
    font-size: 14px;
}

.footer-link:hover {
    color: #ffffff;
}

.contact-item {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    font-size: 14px;
    margin-bottom: 12px;
}

.contact-item .el-icon {
    margin-top: 3px;
}

.footer-bottom {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}

.copyright {
    font-size: 14px;
    margin-bottom: 16px;
}

.payment-methods {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: flex-end;
}

.payment-icon {
    height: 24px;
}

@media (max-width: 768px) {
    .payment-methods {
        justify-content: center;
    }

    .copyright {
        text-align: center;
    }
}

/* Override Element Plus default styles for dark theme */
:deep(.el-input__wrapper) {
    background-color: #333333;
}

:deep(.el-input__inner) {
    color: #ffffff;
}

:deep(.el-button--primary) {
    background-color: #409eff;
}
</style>
