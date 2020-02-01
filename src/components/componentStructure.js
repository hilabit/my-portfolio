import About from "./about";
import Skills from "./skillsContainer";
import Contact from "./contact";
import GitHub from "./GitHub/GitHub";

export default [
  {
    component: About,
    label: "About me",
    href: "about"
  },
  {
    component: Skills,
    label: "Skills",
    href: "skills"
  },
  {
    component: GitHub,
    label: "GitHub Commits",
    href: "github-commits"
  },
  {
    component: Contact,
    label: "Contact",
    href: "contact",
    props: {
      phoneNumber: "+23423049203",
      email: "test@mail.com"
    }
  }
];
