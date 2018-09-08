<template>
    <!-- This is the container that holds many different Projects. -->
    <div class="container is-fluid">
        <div class="columns is-multiline">
            <!-- These items are hard-coded for now. -->
            <div class="column is-one-third">
                <router-link class="box" to="/projects/senior-project">
                    <h3 class="title">
                        Extracurricular Schooling
                    </h3>
                    <h5 class="subtitle">
                        Senior Project Web Application
                    </h5>
                </router-link>
            </div>
            <div class="column is-one-third">
                <router-link class="box" to="/projects/unity-tactics">
                    <h3 class="title">
                        Unity Tactics
                    </h3>
                    <h5 class="subtitle">
                        Turn-based Tactical RPG
                    </h5>
                </router-link>
            </div>
            <div class="column is-one-third">
                <router-link class="box" to="/projects/swim-mill">
                
                    <h3 class="title">
                        Swim Mill
                    </h3>
                    <h5 class="subtitle">
                        Multi-threading Console Application
                    </h5>
                </router-link>
            </div>
            <div class="column is-one-third">
                <router-link class="box" to="/projects/malware">
                    <h3 class="title">
                        Malware
                    </h3>
                    <h5 class="subtitle">
                        Simple Demonstration of Malware Attacks
                    </h5>
                </router-link>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.box {
  text-align: center;
}
</style>
