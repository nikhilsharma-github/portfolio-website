import company1 from "../../public/img/company-1.png";
import company2 from "../../public/img/company-2.png";
import project1 from "../../public/img/project-1.png";
import project2 from "../../public/img/project-2.png";
import project3 from "../../public/img/project-3.png";
import project4 from "../../public/img/project-4.png";
import certificate1 from "../../public/img/certificate-1.png";
import certificate2 from "../../public/img/certificate-2.png";
import certificate3 from "../../public/img/certificate-3.png";

export const HERO_CONTENT = `I am a passionate Full stack developer currently working in TCS Digital from past 1.5 year.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 year of professional experience, I have worked with a variety of technologies, including ReactJS, JavaScript, jQuery, Flask, Oracle DB, MS SQL Server, Python, HTML, CSS, Bootstrap, Ant Design, Redhat OpenShift, etc. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and solving DSA Problems.`;

export const EXPERIENCES = [
    {
        year: "Dec 2023 - Present",
        role: "System Engineer",
        company: "Tata Consultancy Services",
        description: [
            "Developed and maintained both Frontend and Backend components of Web Applications in an aglie environment, delivering web solutions within timeline while ensuring a seamless user experience and improved system performance.",
            "Created API endpoints, implemented functionalities like adding a drawer with DB and frontend validations using Ant Design and Formik, and handled major UI changes.",
            "Developed RESTful APIs using Python and Flask, improving application performance by 40%, making existing implementations leaner, and supporting multiple concurrent users. ",
            "Achieved a 25% reduction in loading time by implementing Flask caching, DB connection threading, and session storage.",
            "Managed deployment, Orchestration cycles and Version Control of Applications on RedHat OpenShift and Bitbucket.",
            "Also performed Data Analytics and Python Automation tasks using jupyter Notebook, various Python Packages, updating Tableau Dashboards for Forecasted Statistics,etc.",
            "Tech Used: ReactJS, Javascript, jQuery, Flask, Oracle DB, MS SQL Server, Python, HTML, CSS, Bootstrap, Ant Design, Redhat Openshift, etc",
        ],
        technologies: [
            "ReactJS",
            "JavaScript",
            "jQuery",
            "Flask",
            "Oracle DB",
            "MS SQL Server",
            "Python",
            "HTML",
            "CSS",
            "Bootstrap",
            "Ant Design",
            "Redhat OpenShift",
        ],
        company_logo: company1,
    },
    {
        year: "July 2022 - Aug 2022",
        role: "Utkrisht Summer Intern",
        company: "ACM USICT",
        description: [
            "An Idea to Build a platform for student community discussions named UDF-USICT Discuss Forum using MERN stack.",
            "Incorporated technologies like MERN Stack and implemented Features like categorizing posts according to different topics, Adding Images, and Comments below on Posts.",
            "Used MongoDB to store User Profiles and their authentication and Image Storage Express and Node.js to create Backend React.js and Material UI to develop Frontend libraries like axios multer nodemon bycrypt etc.",
            "Here Students can register using their email ID and password. After the login, there are multiple categories based on different topics like DSA projects Academics General discussions, etc.",
        ],
        technologies: [
            "ReactJS",
            "MongoDB",
            "ExpressJS",
            "NodeJS",
            "MaterialUI",
        ],
        company_logo: company2,
    },
];

export const EDUCATION = [
    {
        title: "B.Tech in Computer Science Engineering.",
        institute_name:
            "University School of Information and Communication Technology, GGSIPU, New Delhi.",
        year: "Batch 2019 - 2023",
        score: "CGPA: 8.8/10.0",
    },
    {
        title: "Senior Secondary Education (Class XI - Class XII) - CBSE, Delhi.",
        institute_name:
            "Rajkiya Pratibha Vikas Vidyalaya, Shalimar Bagh, New Delhi.",
        year: "Batch 2017 - 2019",
        score: "Class XII : 86%",
    },
];

export const PROJECTS = [
    {
        title: " MicroBlog- A Flask Powered Social Blogging App",
        image: project1,
        description:
            "Built a feature-rich social blogging app with login and signup support, multilingual posts, real-time messaging with notifications, andsecurepasswordresetvia emailusing JWTandFlask-MailService.  Implemented secure password reset using JWT,modular architecture with Blueprints, and translation with API integration.",
        technologies: [
            "Python Flask",
            "SQLAlchemy",
            "Jinja2",
            "WTForms",
            "JWT",
            "Flask-Mail",
            "AJAX",
            "Bootstrap",
            "HTML",
            "CSS",
            "Brevo SMTP",
            "Flask Babel",
            "PythonAnywhere",
        ],
        github_link: "https://github.com/nikhilsharma-github/MicroBlog",
        deployed_link: "https://nikhilsharmapa2.pythonanywhere.com/",
    },
    {
        title: "ShopSwap - An Ecommerce Marketplace",
        image: project2,
        description:
            "A Fullstack Based ECommerece Web Application. Added User Authentication and Registration, Listed Products with Dynamic sell and Buy Options. It utilizes WTF Forms for user input, Bootstrap for UI design, deployed on PythonAnywhere.",
        technologies: [
            "Python Flask",
            "Bootstrap",
            "HTML",
            "CSS",
            "Flask WTF Forms",
            "PythonAnywhere",
        ],
        github_link: "https://github.com/nikhilsharma-github/ShopSwap",
        deployed_link: "https://nikhilsharmapa.pythonanywhere.com/",
    },
    {
        title: "BuddyBook - Basic CRUD Application for Storing Professional Contacts",
        image: project3,
        description:
            "Basic Fullstack Web Application using the CRUD Operations for Contact Management",
        technologies: [
            "ReactJS",
            "ChakraUI",
            "Python Flask",
            "HTML",
            "CSS",
            "Javascript",
            "Render",
        ],
        github_link: "https://github.com/nikhilsharma-github/BuddyBook",
        deployed_link: "https://buddybook.onrender.com/",
    },
    {
        title: "You2ube - Youtube Clone ",
        image: project4,
        description:
            "Created a simple Youtube Clone UI Using ReactJS, Tailwind, Firebase",
        technologies: [
            "ReactJS",
            "Tailwind",
            "HTML",
            "CSS",
            "Javascript",
            "Firebase",
        ],
        github_link: "https://github.com/nikhilsharma-github/You2ube",
        deployed_link: "https://you2ube-a133c.web.app/",
    },
];

export const CERTIFICATIONS = [
    {
        title: "AWS Certified Cloud Practitioner (CLF-C02)",
        image: certificate1,
        description:
            "AWS Certified Cloud Practitioner (CLF-C02) is an entry-level certification that provides a foundational understanding of AWS cloud services.",
        technologies: ["Amazon Web Services (AWS)", "Cloud Computing"],
        date: "Dec 2024 - Dec 2027",
        credential_url:
            "https://www.credly.com/badges/4a086f4b-b2d5-49f3-8fdb-6ee1a9a2698b/public_url",
        credential_id: "4a086f4b-b2d5-49f3-8fdb-6ee1a9a2698b",
    },
    {
        title: "React Frontend Developer by Edureka",
        image: certificate2,
        description:
            "React Frontend Developer by Edureka is a certification that provides a foundational understanding of ReactJS. It was a one month live training program by Edureka for mastering ReactJS.",
        technologies: ["ReactJS", "Redux", "Bootstrap", "RESTful APIs"],
        date: "Dec 2024",
        credential_url:
            "https://www.edureka.co/lms/certificate/cce3864db1e5fa0de5f0c80a7684453c",
        credential_id: "GMXB7D8MB",
    },
    {
        title: "Problem Solving (Basic) Certificate",
        image: certificate3,
        description:
            "A DSA Certification by Hackerrank, It covers basic topics of Data Structures (such as Arrays, Strings, Hashing, etc) and Algorithms (such as Sorting and Searching).",
        technologies: ["Data Structures", "Algorithms", "C++"],
        date: "May 2025",
        credential_url: "https://www.hackerrank.com/certificates/12bf1dae7c3e",
        credential_id: "12bf1dae7c3e",
    },
];

export const CONTACT = {
    address: "North West Delhi, India",
    phoneNo: "+91-8929004546",
    email: "nikhilsharma.csgeek@gmail.com",
};
