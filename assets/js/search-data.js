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
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "You can find my CV on the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-our-two-papers-were-accepted-to-cvpr-2025",
          title: 'Our two papers were accepted to CVPR 2025.',
          description: "",
          section: "News",},{id: "news-our-paper-on-language-guided-video-summarization-was-accepted-to-ijcv",
          title: 'Our paper on language-guided video summarization was accepted to IJCV.',
          description: "",
          section: "News",},{id: "news-our-paper-on-geospatial-domain-adaptation-was-accepted-to-grsl",
          title: 'Our paper on geospatial domain adaptation was accepted to GRSL.',
          description: "",
          section: "News",},{id: "news-our-two-papers-were-accepted-to-icml-2026",
          title: 'Our two papers were accepted to ICML 2026.',
          description: "",
          section: "News",},{id: "news-our-paper-on-vision-language-action-models-was-accepted-to-neurips-2026",
          title: 'Our paper on vision-language-action models was accepted to NeurIPS 2026.',
          description: "",
          section: "News",},{id: "news-dynamic-lab-dgist-is-now-open",
          title: 'DYNAMIC LAB @ DGIST is now open! 👏',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%75%6E%67%69%6E.%70%61%72%6B@%64%67%69%73%74.%61%63.%6B%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/park-jungin", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jungin-park-569aa1216", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Eqcge14AAAAJ", "_blank");
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
