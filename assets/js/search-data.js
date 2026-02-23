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
        },{id: "news-participated-in-a-one-week-rakuten-summer-short-internship-2024-online-working-on-python-backend-processing-for-a-disaster-prevention-web-app",
          title: 'Participated in a one-week Rakuten Summer Short Internship 2024 (online), working on Python...',
          description: "",
          section: "News",},{id: "news-started-a-software-engineer-internship-at-freee-contributing-to-iam-services",
          title: 'Started a Software Engineer internship at freee, contributing to IAM services.',
          description: "",
          section: "News",},{id: "news-joined-mind-in-a-device-as-a-research-engineer-intern-to-build-reproducible-benchmarking-pipelines-for-3d-reconstruction-and-slam",
          title: 'Joined MinD in a Device as a Research Engineer Intern to build reproducible...',
          description: "",
          section: "News",},{id: "news-started-undergraduate-research-at-matsui-laboratory-focusing-on-prediction-preserving-pruning-for-decision-tree-ensembles",
          title: 'Started undergraduate research at Matsui Laboratory, focusing on prediction-preserving pruning for decision-tree ensembles....',
          description: "",
          section: "News",},{id: "news-scheduled-to-join-echizen-laboratory-the-university-of-tokyo-national-institute-of-informatics-as-an-m-s-student",
          title: 'Scheduled to join Echizen Laboratory (The University of Tokyo / National Institute of...',
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
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
