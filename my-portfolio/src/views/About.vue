<template>
  <div>
    <about-template :contactInformation="contactInformation" :lifeAbstractions="lifeAbstractions" />
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
      contactInformation: {
        img: require("@/assets/img/SunsetDock.jpg"),
        aspectRatio: 1.33,
        email: "Email: s.e.roberts0@gmail.com",
        mobilePhone: "Phone: 714) 833-7051"
      },
      lifeAbstractions: [
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
          title: "Health",
          paragraphs: [
            {
              text:
                "Health is an important factor of everyone’s life and should be highlighted. According to WellSteps, a blog dedicated providing education on employee wellness solutions, a healthy employee has: improved behavior, improved productivity, and less cost in medical coverage. I take personal pride in living a healthy, active lifestyle and follow the recommendations given in each of the sections below."
            },
            {
              text:
                "WellSteps Reference: https://www.wellsteps.com/blog/2018/01/06/workplace-wellness-statistics-wellness-stats/"
            },
            {
              subtitle: "Hydration",
              text:
                "The human body is around 60% water. That water is expelled from the body due to breathing, sweating urinating and bowel movements to perform important bodily functions such as: reducing internal temperature, removing waste from the body, and cushioning joints and tissues."
            },
            {
              text:
                '"Lack of water can lead to dehydration — a condition that occurs when you don\'t have enough water in your body to carry out normal functions. Even mild dehydration can drain your energy and make you tired." Therefore, it is important to drink water to replenish your internal supply of water and maintain regular energy levels. Water intake differs by region, sex, physical fitness, and overall health. Furthermore, 20% of water intake comes from food. In temperate regions, men and women are recommended to intake: Men: 3.7L (~1 gallon) of water, Women: 2.7L (~0.7 gallons) of water.'
            },
            {
              subtitle: "Sleep",
              text:
                "According to the Center for Disease Control (CDC), an adult (18 - 60 years old) is recommended to sleep seven or more hours a night. This sleep should also be a “good quality sleep” that allows you to fully rest. Lack of feeling rested, restlessness, and symptoms of sleep disorders all affect sleep and should resolved as quickly as possible to increase personal energy and mood."
            },
            {
              text:
                "CDC Reference: https://www.cdc.gov/sleep/about_sleep/how_much_sleep.html"
            },
            {
              subtitle: "Diet",
              text:
                "I like to follow guidelines on portion control to maintain a healthy diet. For brevity, all consumed foods should add to the nutritional value of the body and nothing more. The idiom “live to eat or eat to live” captures my point. Food, for many, is comfort and enjoyment when it should be a means to provide essential nutrients to the body. I can’t say that I follow this rule perfectly; there are many days when I eat fast-food or sugary desserts and overindulge. However, I strive to eat foods that benefit my body and provide energy to be “in the moment”."
            },
            {
              subtitle: "Exercise",
              text:
                "The World Health Organization (WHO) recommends the following for adults (18 - 64 years old) “in order to improve cardiorespiratory and muscular fitness, bone health, reduce the risk of NCDs and depression”:"
            },
            {
              text:
                '"Adults should do at least 150 minutes of moderate-intensity aerobic physical activity throughout the week or do at least 75 minutes of vigorous-intensity aerobic physical activity throughout the week or an equivalent combination of moderate- and vigorous-intensity activity."'
            },
            {
              text:
                "“Aerobic activity should be performed in bouts of at least 10 minutes duration.”"
            },
            {
              text:
                "“Muscle-strengthening activities should be done involving major muscle groups on 2 or more days a week.”"
            },
            {
              text:
                "WHO Reference: http://www.who.int/dietphysicalactivity/factsheet_adults/en/"
            }
          ]
        }
      ]
    };
  }
};
</script>
