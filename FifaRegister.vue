<template>
  <div class="fifaRegister">
    
    <form> 
			
		<h1> Identity </h1>
			
		<label for="name"> Enter your <b> name </b>: </label>
			<input  v-model="name"> 
			<!-- call setLastUsed function when the text input is changed -->
			
		<br> <br>
			
		<label for="surname"> Enter your <b> surname </b>: </label>
		<input  v-model="surname"> 
			
		<br> <br>
			
		<label for="age"> Enter your <b> age </b>: </label>
		<input v-model="age"> 
			
		<br> <br>
			
			
		<label for="gender"> Select your <b> gender </b>: </label>
		<select v-model="gender">
			<option> Male </option>
			<option> Female </option>
			<option> Other </option>

		</select>
			
		<br> <br>
			
		<label for="education"> Select your <b> level of education </b>: </label>
		<select v-model="education">
			<option> Diplomas </option>
			<option> BTech </option>
			<option> Honors </option>
			<option> Master </option>
			<option> PHD </option>
		</select>
			
		<br> <br>
			
		<label for="citizenship"> Select your <b> citizenship </b>: </label>
		<select v-model="citizenship">
			<option> Angolan </option>
			<option> Comoros </option>
			<option> Egyptian </option>
			<option> English </option>
			<option> Ethiopian </option>
			<option> French </option>
			<option> Madagascan </option>
			<option> Motswana </option>
			<option> Nama </option>
			<option selected> South African </option>
			<option> Zimbabwean </option>
			<!-- selected is used to select to default value -->
			</select>
			
			<br> <br>
			
		<label for="country"> Select your <b> country of origin:</b> </label>
		<select v-model="country">
			<option> Angola </option>
			<option> Botswana </option>
			<option> Comoros </option>
			<option> Egyptian </option>
			<option> Ethiopian </option>
			<option> France </option>
			<option> Madagascar </option>
			<option> Namibia </option>
			<option selected> South Africa </option>
			<option> United Kingdom </option>
			<option> Zimbabwe </option>
		</select>
		
	</form>
		
	<br>
		
	<button id="submitButton" v-on:click=verifyAndSubmit()> SUBMIT </button>
		
	<br>
	
	<button id="deleteButton" v-on:click=deleteLine()> DELETE </button>
		
	<br>
		
	<button id="cancelButton" v-on:click=cancelForm()> CANCEL </button>
		
	<br> <br>
	
	<button id="logOut" v-on:click=launchLogin()> Log out </button> <!-- use router here -->
		
	<br> <br>
	
	<p> Display the database content here: <button id="listButton" v-on:click=listAll()> LIST users </button> </p>
	
	
	<div readonly id="allPeopleArea" v-for="item in my_displayed_table">
			{{item.name}} - {{item.surname}} - {{item.age}} - {{item.gender}} - {{item.education}} - {{item.citizenship}}  - {{item.country}}
	</div>
	
	<br> <br>
		
  </div>
</template>

<script>
	export default {
	  name: 'FifaRegister',
	  data () {
		return {
		  msg: 'la bienvenue',
		  name: '',
		  surname: '',
		  age: '',
		  gender: '',
		  education: '',
		  citizenship: '',
		  country: '',
		  my_table: [],
		  my_displayed_table: [],
		  lastUsed: '',
		  isLastUsed: false
		}
	  },
	  methods: {
		launchLogin: function (event) {
		  this.$router.push({ path: '/' })
		},
		submitForm: function () {
		  console.log("subForm working");
		  
		  this.my_table.push({name: this.name, surname: this.surname, age:this.age, 
		  gender: this.gender, education:this.education, citizenship:this.citizenship, country:this.country});
		  
		  this.isLastUsed=true;
		  this.cancelForm()
		},
		verifyAndSubmit: function (event) {
		  if (this.name != '' && this.surname != '' && this.age != '' && this.gender != '' 
				&& this.education != ''  && this.citizenship != ''  && this.country != '' ){
			console.log("No empty boxes");
			this.submitForm();
		  }
		  else{
			console.log("Info missing");
			alert("Info missing");
		  }
		},
		listAll: function(event){
			this.my_displayed_table = this.my_table;
		},
		deleteLine: function(event){ //TODO: can't delete multiple users
			if (this.isLastUsed){
				this.my_table.pop();
				this.isLastUsed=false;
			}
		},
		cancelForm: function(event){
			this.name = '';
			this.surname = '';
			this.age = '';
			this.gender = '';
			this.education = '';
			this.citizenship = '';
			this.country = '';
		}
	  }
	  
}
	  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
	.center{
		display: block;
		margin-left: auto;
		margin-right: auto;
	}

	.fifaRegister{
		text-align : center;
		background-color: #C0DFEF; /* IMPORTANT: white and blue backgrounds look smart */
		font-size: 150%;
		font-family: calibri;
	}

	h1{
		color: green;
	}


	p{
		text-align : center;
		text-justify : justify; /* IMPORTANT: justify the text */
		margin: 20px;
		
		color:black;
		font-size: 18px; /* IMPORTANT: text enough big to see clearly */
	}


	/* Linked to the LOGIN FORM*/

	#listButton:hover, #submitButton:hover, #deleteButton:hover, #cancelButton:hover {
			background-color: orange;
			color: white;
	}
	
	#logOut{
		color: #45103E;
		font-size: 80%;
		text-decoration: underline;
		
		padding: 0;
		border: none;
		background: none;	
	}
	
</style>
