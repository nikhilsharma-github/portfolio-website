import project1 from "../../public/img/project-1.jpg";
import certificate1 from "../../public/img/certificate-1.png";
import certificate2 from "../../public/img/certificate-2.png";

export const HERO_CONTENT = `I am a passionate Full stack developer currently working in TCS Digital from past 1 year.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 year of professional experience, I have worked with a variety of technologies, including ReactJS, JavaScript, jQuery, Flask, Oracle DB, MS SQL Server, Python, HTML, CSS, Bootstrap, Ant Design, Redhat OpenShift, etc. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and solving DSA Problems.`;

export const EXPERIENCES = [
    {
        year: "Dec 2023 - Present",
        role: "System Engineer",
        company: "Tata Consultancy Services",
        description: [
            "Currently, working as a Full Stack Engineer in TCS Digital as a System Engineer in Hyderabad.",
            "During My 1year+ professional journey, I have worked on technologies like ReactJS, JavaScript, jQuery, Flask, Oracle DB, MS SQL Server, Python, HTML, CSS, Bootstrap, Ant Design, Redhat OpenShift, etc. ",
            "Now, I am looking for better Full Time Job Opportunities in the IT domain for job roles like Software Engineering, Software Development, Frontend Development, MERN Stack development, and more.",
            "Meanwhile, I am improving my Problem-solving skills by regularly doing LeetCode and solved 500+ problems overall on the platform and improving my development skills by creating Personal projects in other technologies like MERN Stack.",
        ],
        technologies: ["ReactJS", "JavaScript", "jQuery", "Flask", "Oracle DB", "MS SQL Server", "Python", "HTML", "CSS", "Bootstrap", "Ant Design", "Redhat OpenShift"],
    },
    {
        year: "July 2022 - August 2022",
        role: "Utkrisht Summer Intern",
        company: "ACM USICT",
        description: [
            "An Idea to Build a platform for student community discussions named UDF-USICT Discuss Forum using MERN stack.",
            "Incorporated Features like categorizing posts according to different topics, Adding Images, and Comments below on Posts.",
        ],
        technologies: ["ReactJS", "MongoDB", "ExpressJS", "NodeJS", "MaterialUI"],
    },
];

export const PROJECTS = [
    {
        title: "Blogging Platform",
        image: project1,
        description:
            "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
        technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
    },
];

export const CERTIFICATIONS = [
    {
        title: "AWS Certified Cloud Practitioner (CLF-C02)",
        image: certificate1,
        description:
            "AWS Certified Cloud Practitioner (CLF-C02) is an entry-level certification that provides a foundational understanding of AWS cloud services.",
        technologies: ["Amazon Web Services (AWS)","Cloud Computing"],
        date:"Dec 2024 - Dec 2027",
        credential_url:"https://www.credly.com/badges/4a086f4b-b2d5-49f3-8fdb-6ee1a9a2698b/public_url",
        credential_id:"4a086f4b-b2d5-49f3-8fdb-6ee1a9a2698b"
    },
    {
        title: "React Frontend Developer by Edureka",
        image: certificate2,
        description:
            "React Frontend Developer by Edureka is a certification that provides a foundational understanding of ReactJS. It was a one month live training program by Edureka for mastering ReactJS.",
        technologies: ["ReactJS","Redux","Bootstrap","RESTful APIs"],
        date:"Dec 2024",
        credential_url:"https://www.edureka.co/lms/certificate/cce3864db1e5fa0de5f0c80a7684453c",
        credential_id:"GMXB7D8MB"
    },
];


export const CONTACT = {
    address: "North West Delhi, India",
    phoneNo: "+91-8929004546",
    email: "nikhilsharma.csgeek@gmail.com",
};
