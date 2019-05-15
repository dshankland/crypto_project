<template lang="html">
 <div id="main">
   <NavBar/>
   <Greeting text="Whatever We Want"/>
   <router-view id="view"/>
 </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import Greeting from '@/components/Greeting';

export default {
  components: { NavBar, Greeting}
}
</script>

<style lang="css" scoped>
/* @import url('https://fonts.googleapis.com/css?family=Gugi'); */

#view {
    }
</style>