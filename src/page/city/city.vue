<template>
    <div>
       <header-city></header-city>
       <search-city></search-city>
       <list-city></list-city>
    </div>
</template>
<script>
import HeaderCity from "./components/header"
import SearchCity from "./components/search"
import ListCity from "./components/list"
export default {
    name:'City',
    components:{
        HeaderCity,
        SearchCity,
        ListCity
    }
}
</script>