<template>
  <div class="card-container"
  :class="{
            'card-dark-theme': $vuetify.theme.dark,
          }"
  >
    <div class="card-body">
      <p>
        {{ item.gosNumber }} / {{ item.conNum }}
      </p>
      <p>
        {{ item.contragent }}
      </p>
      <p>
        <a 
        v-bind:href="`tel:${item.driverPhone}`"
        class="telephoneNumber"
        >{{ item.driverPhone }}</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    item: Object,
  },
};
</script>

<style scoped>
.card-container {
  background: #fff;
  
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  max-width: 200px;
  /* width: 100%; */
  border-radius: 10px;
  border: 1px solid #E5E5E5;
  cursor: pointer;
  margin-bottom: 1rem;
}
.card-dark-theme {
  background: #363636;
}
.card-body {
  padding: 1rem 2rem;
}
p {
  /* font-size: 1.6rem; */
  font-size: 10px;
}
.telephoneNumber {

  text-decoration: none;
  color:cadetblue

}
</style>