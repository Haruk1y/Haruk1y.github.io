// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "Resume, education, research, and experience.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Selected projects and experiments.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Publication list.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-i-have-joined-the-supercell-ai-innovation-lab",
          title: 'I have joined the Supercell AI Innovation Lab!',
          description: "",
          section: "News",},{id: "news-my-first-author-paper-has-been-accepted-to-icml-2026",
          title: 'My first-author paper has been accepted to ICML 2026!',
          description: "",
          section: "News",},{id: "projects-prompdojo-gemini-3-tokyo-hackathon",
          title: 'PrompDojo (Gemini 3 Tokyo Hackathon)',
          description: "Realtime multiplayer prompt game, awarded 3rd out of 70 teams",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gemini-hackathon/";
            },},{id: "projects-labspeak",
          title: 'LabSpeak',
          description: "Full-stack app for research-lab conversation practice with LLM, STT, and TTS",
          section: "Projects",handler: () => {
              window.location.href = "/projects/labspeak/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%61%6A%69%6D%61.%63%6F%64%65@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Haruk1y", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/haruki-yajima", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },];
