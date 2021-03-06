export const fruitMixin = {
  data() {
    return {
      fruits: ["Apple", "Bannana", "Mango", "Melon"],
      filterText: ""
    };
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter(element => {
        return element.match(this.filterText);
      });
    }
  }
}