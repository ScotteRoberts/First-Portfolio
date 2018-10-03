<template>
  <div>
    <about-template :lifeAbstractions="lifeAbstractions" />
  </div>
</template>

<script>
import AboutTemplate from "@/templates/AboutTemplate";
export default {
  components: {
    AboutTemplate
  },
  data: function() {
    return {
      lifeAbstractions: [
        {
          title: "Personal",
          paragraphs: [
            {
              subtitle: "The Silly",
              text:
                "I am an avid gamer, beach goer, and internet consumer. Gaming has been a core focus since I could reason about my surroundings. The games are not just video-based. I love all games and treat life as the ultimate game. Like many of my friends, family, and colleages, the internet has molded my knowledge of the world (it is difficult to imagine a world now without it). My goal is to contribute my knowledge to make a happy, healthy internet environment for all to learn from and embrace. My personal hobby is tapping (drums, bongos, cajons, cowbells) and if I can get my hands on it, it's going to make some noise."
            },
            {
              subtitle: "The Serious",
              text:
                "Any work I have contributed to has been to help others. My first job was a freelance mathematics tutor. I knew that I excelled in math and saw that many of my friends struggled with their homework. So, I offered to help them with any homework or lessons they could not understand. Working with others helped improve my self-esteem and sparked my interest to learn through teaching. Most of my clients improved by at least one letter grade in their math classes while studying with me, which proved I did something correct and worthwhile. Many clients were confused with wording and explanations. Even though it was difficult to not give them the answer, I knew that would rob them the quality of learning themselves the compromise my integrity as a tutor. Through teaching others, I learned to translate jargon into common sense language. By re-explaining the examples in words they understood, without giving them the answer, they built the foundational knowledge to move onto more advanced classes."
            },
            {
              text:
                "There are no shortcuts to quality. Quality requires constant attention, data gathering, reassurance from clients, and a strong will to be the best so others benefit from your work. Children require high quality care to learn and grow. At CAJG, we nurtured children, age six to thirteen, with educational lessons, group activities, and physical exercise. Many lessons included fundamental tasks, such as applying sunscreen properly. Instructors used pictures, modeling and supervised practice to ensure younger children fully understood the procedures. Alternatively, older children participated in discussions about skin cancer and the need to increase sunscreen usage with a thinning ozone layer. Each participant had individual needs that the instructors balanced with group attention. For example, if someone struggled applying sunscreen on their face, an instructor would pair up two participants together or help the struggling participant directly to ensure they could perform the task themselves. Group activities and exercise balanced the typical lecture-based lessons. Instructors provided the rules of games and acted as referee while the participants worked together. Participants left CAJG with quality experience that motivated them to accept challenges and share their knowledge with their communities."
            },
            {
              text:
                "I helped people on a daily basis while at CAJG. One participant that comes to mind is a young male participant that was stung by a stingray. As the supervisor on staff, it was my job to ensure that the participant was medically safe by the time his parents arrived. Luckily, the stingray barb did not lodge itself into his foot but grazed his ankle. However, the panic of being stung was well apparent. Having been stung myself, I knew this injury was painful because the toxin coating the stingray barb burns and radiates out from the inflicted area minutes after the sting. The wound was my primary concern, but just as important was treating the emotional trauma of being stung. So, I explained how I was stung before and the procedure to treat a sting. It took some time for him to calm down, but eventually he did. His parents arrived, I explained the situation to them and to watch out for any latent allergic reactions. Two days later the young man was his same happy self and continued to play with the rest of the participants."
            }
          ]
        },
        {
          title: "Work",
          paragraphs: [
            {
              text:
                "My background supports my ability to contribute. As a quality-oriented college student (3.8 cumulative GPA, computer science) I recently graduated from California State University, Long Beach. In addition, I worked seven full-time summers for the California Junior Lifeguard Programs (CAJG), dedication to the program, as a Lifeguard Instructor and for two of those summers as the Managing Director. Valuable professional skills I learned that will apply to my role at Roth Staffing include: assessing customer needs, resolving immediate issues, planning and implementing program tasks. In both my academic and professional life, I have been continuously praised as responsible and reliable by my professors and peers. Whether working on academic, extracurricular, or professional projects, I apply proven leadership, problem solving, and planning skills, which I plan to leverage into the Junior Software Developer role at your company."
            },
            {
              text:
                "Many of the applications used by modern companies are web-based or are migrating toward web-based solutions. My senior project was a web application that enabled users to read online articles in a personalized environment without wasting time filtering through other websites. During development, we learned organizational project structures and code comments create long-lasting, testable and maintainable software. A clean project structure describes where everything should exist in a project. Code production and maintainability increases when developers know and understand where code exists. Code commenting, a vastly underused skill, allows for you and other developers to summarize code bodies without needing to understand the implementation details. Well documented code is readable to any developer and some non-technical professionals. My knowledge of project design cycles, and their setbacks enable me to immediately contribute to a team across projects. Furthermore, I have been in leadership and support positions on software teams. This enables me to understand both perspectives of project management and how to closely follow directions from a supervisor."
            }
          ]
        },
        {
          title: "Health",
          paragraphs: [
            {
              text: "To be continued..."
            }
          ]
        }
      ]
    };
  }
};
</script>
