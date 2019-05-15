<template lang="html">

  <nav id="nav-bar">
    <div class="nav">
      <router-link tag="span" :to="{ name:'home'}"><button>Home</button></router-link>
      <router-link tag="span" :to="{ name:'portfolio'}"><button>Portfolio</button></router-link>
    </div>
  </nav>

</template>

<script>
export default {
}
</script>

<style lang="css" scoped>

.nav {
  margin-left: 20px;
}



button {
  height: 30px;
  color: white;
  border: none;
  background-color: darkblue;
  width: 90px;
  font-size: 15px;
  font-weight: bold;
  margin-right: 3px;
  background-color: ;
}

button:hover {
  color: darkblue;
  background-color: white;
}

button:active {
  border: 1px solid #0c3f59;
  background-color: #4789a3;
}

button:focus {
    outline: none;
    border: 1px solid darkblue;
    color: #0c3f59;
    background-color: white;
}

#nav-bar {

  background-color: #5680e9;
  height: 30px;
  width: 100%;
}
</style>
