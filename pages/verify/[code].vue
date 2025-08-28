<template>
    <div class="verify-container">
        <div class="verify-card">
            <h2 class="verify-title briscolade">Email Verification</h2>
            <p class="verify-desc mb-4">
                Please enter the 6-digit code sent to your email to verify your
                account.
            </p>
            <div v-if="errorMessage" class="verify-error">
                {{ errorMessage }}
            </div>
            <div v-if="successMessage" class="verify-success">
                {{ successMessage }}
            </div>
            <form v-if="!successMessage" @submit.prevent="submitPin">
                <div class="pin-input-group">
                    <template v-for="(digit, idx) in pinDigits" :key="idx">
                        <el-input
                            ref="elPinInputs"
                            v-model="pinDigits[idx]"
                            maxlength="1"
                            inputmode="numeric"
                            type="text"
                            class="pin-input"
                            :autofocus="idx === 0"
                            style="
                                width: 2.5rem;
                                margin: 0 0.25rem;
                                text-align: center;
                            "
                            @input="onInput(idx)"
                            @keydown.backspace="onBackspace(idx)"
                            @focus="onFocus(idx)"
                        />
                        <span v-if="idx < 5" class="pin-dash">-</span>
                    </template>
                </div>
                <UIButton
                    label="Verify Email"
                    size="large"
                    class="primary"
                    native-type="submit"
                    :loading="loading"
                    :disabled="loading || pinDigits.join('').length !== 6"
                />
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import UIButton from '~/components/ui/UIButton.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const code = route.params.code

const pinDigits = ref(['', '', '', '', '', ''])
const elPinInputs = ref([])
const errorMessage = ref('')
const successMessage = ref('')
const loading = ref(false)
const userId = ref('')

const { $toast, $auth, $signInWithCustomToken } = useNuxtApp()

onMounted(async () => {
    if (!code || typeof code !== 'string' || code.length < 16) {
        errorMessage.value = 'Invalid or missing verification code.'
        return
    }
    try {
        const res = await $fetch('/api/verify/validate-code', {
            method: 'POST',
            body: { code },
        })
        if (!res.success && res.message) {
            $toast.info(res.message)
            // setTimeout(() => {
            //     navigateTo('/auth/register')
            // }, 2000)

            return
        }

        userId.value = res.userId
    } catch (err) {
        console.error(err)
        errorMessage.value = 'Unable to validate verification link.'
    }
})

function onInput(idx) {
    const val = pinDigits.value[idx]
    if (val.length > 1) {
        pinDigits.value[idx] = val.slice(-1)
    }
    if (val && idx < 5) {
        nextTick(() => {
            if (elPinInputs.value[idx + 1]) {
                elPinInputs.value[idx + 1].focus()
            }
        })
    }
}

function onBackspace(idx, _) {
    if (!pinDigits.value[idx] && idx > 0) {
        nextTick(() => {
            if (elPinInputs.value[idx - 1]) {
                elPinInputs.value[idx - 1].focus()
            }
        })
    }
}

function onFocus(idx) {
    pinDigits.value[idx] = ''
}

async function submitPin() {
    errorMessage.value = ''
    successMessage.value = ''
    loading.value = true
    const pin = pinDigits.value.join('')

    try {
        const res = await $fetch('/api/verify/pin', {
            method: 'POST',
            body: {
                code,
                userId: userId.value,
                enteredPin: pin,
            },
        })

        const customToken = res.customToken
        if (res.success) {
            const userCredential = await $signInWithCustomToken(
                $auth,
                customToken,
            )
            const idToken = await userCredential.user.getIdToken()
            const refreshToken = userCredential.user.refreshToken

            // Send tokens to your session API to set cookies
            await $fetch('/api/auth/session', {
                method: 'POST',
                body: {
                    idToken,
                    refreshToken,
                },
            })

            navigateTo('/')
        } else {
            errorMessage.value = res.message || 'Verification failed.'
        }
    } catch (err) {
        console.log(err, 'err')
        errorMessage.value = 'Verification failed. Please try again.'
    }
    loading.value = false
}
</script>

<style scoped lang="scss">
.verify-container {
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.verify {
    &-title {
        text-align: center;
    }
}
.pin-input-group {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;
}
.pin-input {
    width: 2.5rem;
    height: 2.5rem;
    text-align: center;
    margin: 0 0.25rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-family: 'Bricolage Grotesque', Arial, sans-serif;
}
.pin-dash {
    font-size: 2rem;
    color: #888;
    margin: 0 0.1rem;
    user-select: none;
}
</style>
