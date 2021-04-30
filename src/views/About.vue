<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :options.sync="options"
      :server-items-length="totalDesserts"
      :loading="loading"
      class="elevation-1 pa-6"
    ></v-data-table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        totalDesserts: 0,
        desserts: [],
        loading: true,
        options: {},
        headers: [
          // {
          //   text: 'Dessert (100g serving)',
          //   align: 'start',
          //   sortable: false,
          //   value: 'name',
          // },
          { text: 'Номер документа', value: 'docNumber' },
          { text: 'Дата прибытия', value: 'arivalDate' },
          { text: 'Контрагент', value: 'contragent' },
          { text: 'Номер пломбы', value: 'plombNumber' },
          { text: 'гос. номер', value: 'gosNumber' },
          { text: 'Номер контейнер', value: 'conNum' },
          { text: 'Склад', value: 'warehouse' },
          { text: 'Водитель', value: 'driver' },
          { text: 'тел. водителя', value: 'driverPhone' },
          { text: 'Описаниние', value: 'description' },
          { text: 'Автор', value: 'author' },
          { text: 'Событие', value: 'author' },
          { text: 'Дата события', value: 'factDate' }
        ],
      }
    },
    watch: {
      options: {
        handler () {
          this.getDataFromApi()
        },
        deep: true,
      },
    },
    mounted () {
      this.getDataFromApi()
    },
    methods: {
      async getDataFromApi () {
        this.loading = true
        const { sortBy, sortDesc, page, itemsPerPage } = this.options
        const {totalItems, tutorials} = await this.$store.dispatch('fetchCarsList', {page: page, size: itemsPerPage, sortBy, sortDesc})
        this.desserts = tutorials
        this.totalDesserts = totalItems
        this.loading = false
      },
    },
  }
</script>