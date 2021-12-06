import { FcDoughnutChart, FcMindMap, FcWorkflow } from "react-icons/fc";

export const GridItemsData = [
  {
    id: 1,
    title: "Web Development",
    desc: "Corporate websites that build trust. E-Commerce and marketing websites that drive sales. With experience working on few many projects, I am to talk to about your web design goals.",
    button: "Learn More ..",
    icon: <FcDoughnutChart />,
    reverseX: true,
    reverseY: false,
  },

  {
    id: 2,
    title: "UI/UX Designs",
    desc: "I value simple content structure, clean design patterns, and thoughtful interactions. Build to web standards, proofread rigorously and test regularly for problems with speed or functionality",
    button: "Learn More ..",
    icon: <FcMindMap />,
    reverseX: true,
    reverseY: false,
  },

  {
    id: 3,
    title: "App Development ",
    desc: "You want to stand out in a noisy marketplace. You want your business to be perceived the right way. We have helped hundreds of businesses achieve this, and would be happy to discuss how we can help you.",
    button: "Learn More ..",
    icon: <FcWorkflow />,
    reverseX: true,
    reverseY: false,
  },
];

export default GridItemsData;
