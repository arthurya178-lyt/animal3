<template>

</template>

<script>
import stock from "in-stock-list.json"
export default {
  name: "addData",
  methods:
      {
        addData(id)
        {
          stock[id].amount++;
        }
      }
}
</script>

<style scoped>

</style>