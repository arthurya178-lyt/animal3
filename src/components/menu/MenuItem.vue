<!--顯示單個商品-->

<template>
  <div>
    <span>
      <h3>{{dataInfo[$route.params.id-1].title}}</h3>
      <h3>數量有{{dataInfo[$route.params.id-1].amount}}</h3>

      <button type="button" @click="addAmount($route.params.id-1)">Add</button>
      <button type="button" @click="deleteAmount($route.params.id-1)">Subtract</button>
    </span>
  </div>
</template>
<script>
import dataInfo  from '../../../menu-list-data.json';
import axios from 'axios';
//上方可以放入menuItem的鍵做使用
export default {
  name: "MenuItem",
  data()
  {
    return {
      dataInfo
    }
  },
  methods:
      {
        addAmount(DataId){
          let data = {'id' : parseInt(DataId)};
           axios.post(`/api/addCart/`,data);

        },
         deleteAmount(DataId){
          let data = {"id" : parseInt(DataId)};
          axios.post(`/api/removeCart/`,data).then((response)=>{
            console.log(response);
          });
        },
      },
}
</script>

<style scoped>

</style>