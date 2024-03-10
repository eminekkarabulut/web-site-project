<template>
  <header class="sticky-header">
    <div class="container-fluid app-header">
      <div v-if="company" class="row w-100">
        <div class="col-lg-3">
          <BootstrapIcon name="telephone" class="text-light" />
          <a :href="`tel:${company.companyPhone}`" class="link-style"> {{ company.companyPhone }} </a>
        </div>
        <div class="col-lg-6 text-center">
          <NuxtLink to="/" class="nav-brand">
            <img :src="company.companyLogo" class="mr-3 h-6 sm:h-9" :alt="company.companyName" :title="company.companyName" />
          </NuxtLink>
        </div>
        <div class="col-lg-3 ribbon-button">
          <BootstrapIcon name="envelope" class="mx-2" />
          <NuxtLink v-if="_isEnglish" to="/contact" class="link-style"> Contact </NuxtLink>
          <NuxtLink v-else to="/contact" class="link-style"> İletişim </NuxtLink>
        </div>
      </div>
      <hr text-align="center" width="50%" class="m-auto text-light" />
      <nav class="navbar navbar-expand-lg navbar-light">
        <button @click="NavbarToggle" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li v-if="pages" v-for="page in pages" :key="page.id" class="nav-item">
              <NuxtLink v-if="_isEnglish" :to="page.routeLink" class="nav-link text-light"> {{ page.pageDisplayName }}</NuxtLink>
              <NuxtLink v-else :to="page.routeLink" class="nav-link text-light"> {{ page.pageName }}</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink v-if="_isEnglish" @click="ChangeLang()" class="nav-link text-light"> ENG </NuxtLink>
              <NuxtLink v-else @click="ChangeLang()" class="nav-link text-light"> TR </NuxtLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useInit } from "../stores/initStore";
import { computed } from "vue";

const initStore = useInit();

const _isEnglish = computed(() => initStore._isEnglish);
const company = computed(() => initStore.companyData);
const pages = computed(() => initStore.headerMenus);

const ChangeLang = () => {
  initStore.ChangeLang();
};

const NavbarToggle = () => {
  const navbar = document.getElementById("navbarSupportedContent");
  if (navbar) {
    if (navbar.style.display === "block") {
      navbar.style.display = "none";
    } else {
      navbar.style.display = "block";
    }
  }
};
</script>
