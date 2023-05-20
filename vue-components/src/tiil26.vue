<script>
export default {
  name: "App",
  data(){
    return {
      formValues:{
        name :"",
        profile: "",
        country:"",
        jobLocation:[],
        remote: false,
        skills:[],
      }
    }
  },
  methods:{
   
    submitForm(event){
      event.preventDefault()
      console.log(this.formValues)
    }
  }
}
</script>

<template>
  <div>
    <pre>
      {{ JSON.stringify(formValues) }}
    </pre>
  </div>
  <form @submit="submitForm">
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" v-model.trim="formValues.name">
    </div>
    <div>
      <label for="profile">Profile Summary</label>
      <input type="text" id="profile" v-model="formValues.profile">
    </div>
    <div>
      <label for="country">Country</label>
      <select id="country"  v-model="formValues.country">
        <!-- <option value="">Select Country...</option> -->
        <option value="India">India</option>
        <option value="Vietnam">Vietnam</option>
        <option value="Japan">Japan</option>
      </select>
    </div>

    <div>
      <label for="job-location">Job Location</label>
      <select id="job-location" multiple v-model="formValues.jobLocation">
        <option value="">Select Country...</option>
        <option value="India">India</option>
        <option value="Vietnam">Vietnam</option>
        <option value="Japan">Japan</option>
      </select>
    </div>
    <div>
      <input type="checkbox" name="remote" id="remote" v-model="formValues.remote" />
      <label for="remote">Open to remote work</label>
    </div>

    <div>
      <label for="skills">Skill Set</label>
      <input type="checkbox" id="html" value="html" v-model="formValues.skills">
      <label for="html">HTML</label>
      <input type="checkbox" id="css" value="css" v-model="formValues.skills">
      <label for="css">css</label>
      <input type="checkbox" id="javascript" value="javascript" v-model="formValues.skills">
      <label for="javascript">javascript</label>
    </div>
    <!-- @keyup.enter -->
    <!-- <div>
      <button type="submit">Submit</button>
    </div> -->
  </form>

</template>

<style >

</style>