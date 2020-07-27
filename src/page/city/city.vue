<template>
    <div>
       <header-city></header-city>
       <search-city></search-city>
       <list-city 
       :hostCity="hotCities"
       :listCity="cities"
       :letter="letter"
       ></list-city>
       <alphabet-city 
       :alphabtList="cities"
       @change="handleLetterChange"
       ></alphabet-city>
    </div>
</template>
<script>
import HeaderCity from "./components/header"
import SearchCity from "./components/search"
import ListCity from "./components/list"
import AlphabetCity from './components/AhbNav'
const axios =require("axios")
export default {
    name:'City',
    components:{
        HeaderCity,
        SearchCity,
        ListCity,
        AlphabetCity
    },
    data(){
        return{
            hotCities:[],
            cities:{},
            letter:''
        }
    },
    methods:{
      getCityInfo(){
          axios.get("/api/city.json").then(this.getCityInfoSucc)
        
      },
        getCityInfoSucc(res){
            res=res.data;
            if(res.ret&&res.data){
                console.log(res.data);
                this.hotCities=res.data.hotCities;
                this.cities=res.data.cities;

            }

        },
        handleLetterChange(letter){
            this.letter=letter
        }

    },
    mounted(){

    this.getCityInfo()
    }
}
</script>