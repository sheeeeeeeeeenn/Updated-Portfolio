type Job = {
  title: string;
  timeline: string;
  description: string;
  remark?: string;
  activities?: string[];
  techs?: string | string[];
  links?: any;
};

const work: Record<string, Job[]> = {
  Careers: [
    {
      title: "Social Media Committee",
      timeline: "2021 - Present",
      description: "Appointed live streamer for church masses and proficient in crafting graphic designs for posters, tarpaulins, and tickets during events.",
      remark: "Go to portfolio: $1",
      links: {
        $1: ["Designs", "https://sheeeeeeeeeenn.github.io/Shen/Works/index2.html"],
      },
    },
    {
      title: "Academic Commissions",
      timeline: "2019 - Present - Self- Employed",
      description: "Excellently handling school activities and projects such as outputs, drawing, video editing, coding, etc.",
      remark: "Go to portfolio: $1",
      links: {
        $1: ["Designs", "https://sheeeeeeeeeenn.github.io/Shen/Works/index2.html"],
      },
    },
    {
      title: "Digital Artist",
      timeline: "2019 - Present - Self- Employed",
      description: "Experienced in digital art commissions, specializing in transforming custom portraits and photos into unique own style of digital artworks.",
      remark: "Go to portfolio: $1",
      links: {
        $1: ["Digital Arts", "https://sheeeeeeeeeenn.github.io/Shen/Works/index2.html"],
      },
    },

  ],
  "Applications": [
    {
      title: "First Website Portfolio",
      timeline: "2023",
      description: "My first website portfolio -  2nd Place Best in Portfolio.",
      remark: "Link: $1",
      techs: "HTML, CSS, JAVASCRIPT,",
      links: {
        $1: ["Portfolio", "https://sheeeeeeeeeenn.github.io/Shen/index.html#home"],
      },
    }, 
    {
      title: "Shen Food App",
      timeline: "2024",
      description: "My first semester project in CC106",
      remark: "Link: $1",
      techs: "React Native, Supabase",
      links: {
        $1:["Github", "https://github.com/sheeeeeeeeeenn/Shen-Food-App"],
      },
    }, 
    {
      title: "Real-Estate ( Admin Dashboard )",
      timeline: "Latest",
      description: "Mini Thesis project in my second semester as a 3rd year. Integrated project ",
      remark: "Link: $1",
      techs: "Next.js 14,  App Router, React, Tailwind, Prisma, postgresql, and cockroachDB",
      links: {
        $1: ["Vercel", "https://admin-dashboard-indol-sigma.vercel.app"],
      },
    }, 
    {
      title: "Real-Estate ( Client Dashboard )",
      timeline: "Latest",
      description: "Mini Thesis project in my second semester as a 3rd year. Integrated project ",
      remark: "Link: $1",
      techs: "Next.js 14,  App Router, React, Tailwind, Prisma, postgresql, and cockroachDB",
      links: {
        $1: ["Vercel", "https://client-dashboard-eosin.vercel.app"],
      },
    }, 

    {
      title: "Word Per Minute Game",
      timeline: "Typing Speed · 2022 · Desktop · Mobile",
      description: "Number of words processed per minute, most commonly used to measure and denote the speed of typing or reading speed.",
      remark: "Link: $1",
      techs: "HTML, CSS, JS",
      links: {
        $1: ["Word Per Minute", "https://sheeeeeeeeeenn.github.io/Shen/Works/Typing%20Test%20By%20ShenPogi/index.html"],
      },
    },
    {
      title: "A 3D Rubiks-Cube Game!",
      timeline: "Game · 3D · Solving · 2022 · Desktop",
      description: "Simple game, easy to navigate enjoy!",
      remark:
         "Link: $1",
      techs: "HTML, CSS, JS",
      links: {
        $1: ["Rubiks Game", "https://sheeeeeeeeeenn.github.io/Shen/Works/Rubik's%20Cube%20Game%20By%20ShenPogi/index.html"],
      },
    },
    {
      title: "2048",
      timeline: "Math · Numbers · Interactive · Single-Player · 2022 · Desktop · Mobile",
      description: "Single-player sliding block puzzle game.",
      remark:
        "Link: $1",
      techs: "HTML, CSS, JS",
      links: {
        $1: ["2048", "https://sheeeeeeeeeenn.github.io/Shen/Works/2048%20Game%20by%20ShenPogi/index.html"],
      },
    },
    {
      title: "Memory Test",
      timeline: "Test · Interactive · Learning · 2023 · Desktop · Mobile",
      description: "Test your short term memory skills with this free memory game.",
      remark:
        "Link: $1",
      techs: "HTML, CSS, JS",
      links: {
        $1: ["Memory Test", "https://sheeeeeeeeeenn.github.io/Shen/Works/Memory%20Cards%20Game%20By%20ShenPogi/index.html"],
      },
    },
    {
      title: "Speech Text Reader App",
      timeline: "Interactive · Text Reader · 2022 · Desktop",
      description: "A technology that converts text into spoken audio. It can read aloud PDFs, websites, and books using natural AI voices.",
      remark:
        "Link: $1",
      techs: "HTML, CSS, JS",
      links: {
        $1: ["Speech Text Reader App", "https://sheeeeeeeeeenn.github.io/Shen/Works/Speech%20Text%20Reader%20By%20ShenPogi/index.html"],
      },
    },
    {
      title: "Drawing App",
      timeline: "Interactive · Design · Sketch · 2023 · Desktop · Mobile",
      description: "Help you create simple images called vector graphics.",
      remark:
        "Link: $1",
      techs: "HTML, CSS, JS",
      links: {
        $1: ["Drawing App", "https://sheeeeeeeeeenn.github.io/Shen/Works/Memory%20Cards%20Game%20By%20ShenPogi/index.html"],
      },
    },
    {
      title: "Exchange Rate App",
      timeline: "Money · Exchange · Real Time · 2023 · Desktop · Mobile",
      description: "Rate at which one currency will be exchanged for another currency.",
      remark:
        "Link: $1",
      techs: "HTML, CSS, JS",
      links: {
        $1: ["Exchange Rate App", "https://sheeeeeeeeeenn.github.io/Shen/Works/Exchange%20Rate%20Calculator%20By%20ShenPogi/index.html"],
      },
    },
    {
      title: "Catching Insects Game",
      timeline: "Game · Insects · Catching · 2023 · Desktop",
      description: "All you have to do is catch the insect on the screen.",
      remark:
        "Link: $1",
      techs: "HTML, CSS, JS",
      links: {
        $1: ["Catching Insects Game", "https://sheeeeeeeeeenn.github.io/Shen/Works/Insect%20Catch%20Game%20by%20ShenPogi/index.html"],
      },
    },
  ],
};

export default work;
