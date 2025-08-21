import { H as defineNuxtRouteMiddleware, k as useAuthStore, n as navigateTo } from './server.mjs';
import 'vue';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'firebase-admin/app';
import 'firebase-admin/auth';
import 'firebase-admin/firestore';
import 'ioredis';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';
import '@vueuse/core';
import '@vue/shared';
import 'lodash-unified';
import 'vue-sonner';

const guest = defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();
  if (authStore.isAuthenticated) {
    return navigateTo("/");
  }
});

export { guest as default };
//# sourceMappingURL=guest-BO-li-Fh.mjs.map
