<template>

	<div class="fifaFeedback">
		
		<br> 
		
		<p> Some examples of our customers review </p>
			
		<br> 
		
		<video width="740" height="490" controls>
			<source src="@/assets/WebsiteReview.mp4" type="video/mp4">
			<source src="@/assets/WebsiteReview.mp4" type="video/webm">
		  Your browser does not support the video tag.
    </video>
		
		<br> <br> <br> <br> <br> <br> 
		
		<p> Thanks for your feedbacks ;) </p>
		
		<br> <br> 
		
		<p> Go back to the  <button id="mainButton" v-on:click=launchMain()> main page </button>  </p> <!-- use router here -->
		
		<br> <br> 
	
  </div>

</template>

<script>
export default {
  name: 'FifaFeedback',
  data () {
    return {
      video: ""
    }
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

	.fifaFeedback{
		text-align : center;
		background-color: #C0DFEF; /* IMPORTANT: white and blue backgrounds look smart */
		font-family: calibri;
		font-weight: bold;
	}
	
	#mainButton{
		color: #45103E;
		font-size: 85%;
		text-decoration: underline;
		
		padding: 0;
		border: none;
		background: none;	
	}

</style>
