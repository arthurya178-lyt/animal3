<!--顯示單個商品-->

<template>
  <div>
    <span>
      <h1>{{dataInfo[$route.params.id-1].title}}</h1>
      <h3>數量有{{dataInfo[$route.params.id-1].amount}}</h3>

      <button type="button" @click="addAmount($route.params.id-1)">Add</button>
      &nbsp;
      <button type="button" @click="deleteAmount($route.params.id-1)">Subtract</button>
      &nbsp;
      <button type="button" @click="backToMenu">返回目錄</button>
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
        backToMenu()
        {
          location.href = '/';
        }
        ,
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