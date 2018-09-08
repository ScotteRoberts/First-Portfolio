<template>
    <div>
        <single-project/>
        <h3 class="title has-text-centered">
           {{ pageTitle }}
        </h3>
        <div class="container">
          <div class="box">
            <div class="content">
              <p>
                This project was the first web-based project any of our team members worked on. 
                Therefore, many of the jobs were shared because most of us stumbled through our 
                way figuring out how to help the project as a whole. That being said, my main 
                role on the team was being the team lead. Some of the requirements of that role were:
              </p>
              <ul>
                <li>
                  Wassup
                </li>
                <ul>
                  <li>
                    Dude
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import SingleProject from "@/templates/SingleProject";
export default {
  components: {
    SingleProject
  },
  data: function() {
    return {
      pageTitle: "Extracurricular Schooling"
    };
  }
};
</script>

<style>
</style>
