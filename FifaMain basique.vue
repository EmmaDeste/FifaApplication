<template>
  <div>
    <h1>Olivier vous souhaite {{ msg }} !</h1>
    <button v-on:click=pushEmma()>Go to see what Emma has to say</button>
  </div>
</template>

<script>
export default {
  name: 'FifaMain',
  data () {
    return {
      msg: 'la bienvenue'
    }
  },
  methods: {
    pushEmma: function (event) {
      this.$router.push({ path: '/Emma' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
