<template>
  <v-app>
    <MainLayout>
      <router-view></router-view>
    </MainLayout>
  </v-app>
</template>

<script>
import MainLayout from "@/layouts/MainLayout";
export default {
  name: "App",
  
  components: {
    MainLayout,
  },
};
</script>
