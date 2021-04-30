<template>
  <div class="card-list-container">
    <Container
      v-for="(dashboardItem, $indexList) in dashBoardList"
      :key="$indexList"
      drag-class="card-ghost"
      drop-class="card-ghost-drop"
      :drop-placeholder="dropPlaceholderOptions"
      :get-child-payload="getCardPayload(dashboardItem.id)"
      group-name="1"
      @drop="onDrop(dashboardItem, $event)"
    >
      <div class="card-column-header">
        {{ dashboardItem.name }}
      </div>

      <Draggable
        v-for="(item, $index) in dashboardItem.carsInEvent"
        :key="$index"
      >
        <Card :item="item" />
      </Draggable>
    </Container>
  </div>
</template>

<script>
import { Container, Draggable } from "vue-smooth-dnd";
import { applyDrag } from "../utils/applyDrag";
import Card from "./Card";
export default {
  name: "CardList",
  components: {
    Card,
    Container,
    Draggable,
  },
  data() {
    return {
      dropPlaceholderOptions: {
        className: "drop-preview",
        animationDuration: "150",
        showOnTop: false,
      },
      dashBoardList: [],
    };
  },
  async mounted() {
    this.dashBoardList = await this.$store.dispatch("fetchCategories");
  },
  methods: {
    async onDrop(dashboardItem, dropResult) {
      const columnIndex = this.dashBoardList.indexOf(dashboardItem);
      const { removedIndex, addedIndex, payload } = dropResult;
      if (addedIndex !== null) {
        let itemToAdd = payload;
        const carFromDB = await this.$store.dispatch('changeCarCategory', {payload, eventId: dashboardItem.id});
      }
      this.dashBoardList[columnIndex].carsInEvent = applyDrag(
        this.dashBoardList[columnIndex].carsInEvent,
        dropResult,
        dashboardItem.id
      );
    },
    getCardPayload(columnId) {
      return (index) => {
        return this.dashBoardList.filter((p) => p.id === columnId)[0]
          .carsInEvent[index - 1];
      };
    },
  },
};
</script>

<style scoped>
.card-list-container {
  display: flex;
}
.card-column-header {
  padding-bottom: 10px;
}
.smooth-dnd-container {
  display: flex;
  flex-direction: column;
  text-align: center;
  /* width: 40%; */
  max-width: 210px;
  flex: 0 0 40%;
  height: 100%;
  border: 1px solid #dcebf4;
  border-radius: 10px;
  padding: 1rem 1rem 0 1rem;
  margin-top: 1rem;
  margin-right: 2px;
  margin-left: 1rem;
  background-color: #e5e5e5;
}
.dnd-container-dark-theme {
  background: #666666;
}
.card-ghost {
  transition: transform 0.18s ease;
  transform: rotateZ(5deg);
}
.card-ghost-drop {
  transition: transform 0.18s ease-in-out;
  transform: rotateZ(0deg);
}
</style>