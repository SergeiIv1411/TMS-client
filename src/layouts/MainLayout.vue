<template>
    <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            TMS
          </v-list-item-title>
          <v-list-item-subtitle>
            Меню
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <img class="logoCompany" src="../../public/logo.svg" alt="logo">  
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
       <router-view/>
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: "Home",
  data: () => ({
    drawer: null,
    items: [
      { title: "Главная", icon: "mdi-view-dashboard", to: "/" },
      { title: "Список заявок", icon: "mdi-table", to: "/about" },
      { title: "События", icon: "mdi-view-list", to: "/categories" },
    ],
  }),
  components: {},
};
</script>

<style>
  .logoCompany{
     height: 60px;
  }
</style>