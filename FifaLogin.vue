<template>
  <div class="divLogin">
		
		<br>
		
		<h1 class="h1Login"> Login Website </h1>
		
		<form id="loginForm">
				
			<input type="text" placeholder="Username: " id="username" required>
			<br> <br>
			<input type="password" placeholder="Password: " id="password">
				
			<br> <br>
			
			<button id="goToMenu" v-on:click=launchMain()> LOGIN </button>  <!-- use router here -->
			
			
		</form>
			
		<br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> 

    
  </div>
</template>

<script>
export default {
  name: 'FifaLogin',
  data () {
	return{}
  },
  methods: {
    launchMain: function (event) {
      this.$router.push({ path: '/FifaMain' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.h1Login{
		color: white;
	}
	
	.divLogin{
		text-align : center;
		background-color: #C0DFEF;
		font-size: 150%;
		font-family: calibri;
		
		background-image: url("../assets/loginLock.jpeg");
		background-size: 1500px 600px;
		background-repeat: no-repeat;
	}


	/* Linked to the LOGIN FORM */

	#loginForm{
	font-size: 250%;
	}

	#goToMenu:hover{
			background-color: orange;
			color: white;
	}
</style>
