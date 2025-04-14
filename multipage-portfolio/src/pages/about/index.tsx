import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

const aboutData = [
    {
      title: 'skills',
      info: [
        {
          title: 'Web Development',
          icons: [
            <FaHtml5 key={1} />,
            <FaCss3 key={2} />,
            <FaJs key={3} />,
            <FaReact key={4} />,
            <SiNextdotjs key={5} />,
            <SiFramer key={6} />,
            <FaWordpress key={7} />,
          ],
        },
        {
          title: 'UI/UX Design',
          icons: [<FaFigma key={1} />, <SiAdobexd key={2} />, <SiAdobephotoshop key={3} />],
        },
      ],
    },
    {
      title: 'awards',
      info: [
        {
          title: 'Webby Awards - Honoree',
          stage: '2011 - 2012',
        },
        {
          title: 'Adobe Design Achievement Awards - Finalist',
          stage: '2009 - 2010',
        },
      ],
    },
    {
      title: 'experience',
      info: [
        {
          title: 'UX/UI Designer - XYZ Company',
          stage: '2012 - 2023',
        },
        {
          title: 'Web Developer - ABC Agency',
          stage: '2010 - 2012',
        },
        {
          title: 'Intern - DEF Corporation',
          stage: '2008 - 2010',
        },
      ],
    },
    {
      title: 'credentials',
      info: [
        {
          title: 'Web Development - ABC University, LA, CA',
          stage: '2011',
        },
        {
          title: 'Computer Science Diploma - AV Technical Institute',
          stage: '2009',
        },
        {
          title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
          stage: '2006',
        },
      ],
    },
  ];

export default function index() {
  return <div>About</div>;
}
