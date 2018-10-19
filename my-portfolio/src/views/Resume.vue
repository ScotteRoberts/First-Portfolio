<template>
  <div>
    <resume-template :resumeItems="resumeItems" />
  </div>
</template>

<script>
import ResumeTemplate from "@/templates/ResumeTemplate";
export default {
  components: {
    ResumeTemplate
  },
  data: function() {
    return {
      resumeItems: [
        {
          title: "Master Resume",
          img: require("@/assets/img/MasterResumeScreenshot.png"),
          height: "600px",
          width: "480px",
          aspectRatio: 0.8,
          downloadName: "ScottRoberts_MasterResume",
          downloadLink: require("@/assets/doc/MasterResume.pdf")
        },
        {
          title: "Software Engineering",
          img: require("@/assets/img/SoftwareEngineeringResumeScreenshot.png"),
          height: "400px",
          width: "320px",
          aspectRatio: 0.8,
          downloadName: "ScottRoberts_Resume",
          downloadLink: require("@/assets/doc/ScottRoberts_Resume.pdf")
        }
      ]
    };
  }
};
</script>
