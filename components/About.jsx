import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User2, Mail, HomeIcon, PhoneCall, GraduationCap, Briefcase } from "lucide-react";
import Image from "next/image";

const infoData = [
  {
    icon: <User2 size={20} />,
    name: "Maryam Fatima",
  },
  {
    icon: <PhoneCall size={20} />,
    name: "Available on request",
  },
  {
    icon: <Mail size={20} />,
    name: "Open for collaboration",
  },
  {
    icon: <GraduationCap size={20} />,
    name: "Full Stack Developer",
  },
  {
    icon: <HomeIcon size={20} />,
    name: "Pakistan",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Self-led Development Practice",
        qualification: "Full Stack, MERN, and WordPress Development",
        years: "Ongoing",
      },
      {
        university: "Project-Based Learning",
        qualification: "Web, mobile, e-commerce, and management systems",
        years: "Recent work",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Freelance",
        role: "Full Stack and WordPress Developer",
        years: "Present",
      },
      // {
      //   company: "Boson Studio",
      //   role: "Frontend Developer",
      //   years: "October 2022 - July 2024",
      // },
      {
        company: "Personal Projects",
        role: "Frontend, Backend, and Mobile App Developer",
        years: "2024 - Present",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS, Tailwind CSS",
      },
      {
        name: "JavaScript, React, Next.js",
      },
      {
        name: "Node.js, Express.js",
      },
      {
        name: "MongoDB, REST APIs",
      },
      {
        name: "WordPress, E-commerce"
      },
      {
        name: "Freelancing, UI Implementation",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
      {
        imgPath: "/about/mongodb.svg",
      },
      {
        imgPath: "/about/express.svg",
      },
{
        imgPath: "/about/aws.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* Image */}
          {/* <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative overflow-hidden"
              imgStyles="object-contain"
              imgSrc="/about/blueprofile.png"
            />
          </div> */}
          {/* Tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">Personal Info</TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="qualifications">Qualifications</TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">Skills</TabsTrigger>
              </TabsList>
              {/* Tabs Content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* Personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">Clean digital products for web and mobile</h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">I am a passionate Full Stack Developer with expertise in frontend, backend, and WordPress development. I build clean, scalable, and user-friendly applications for real business needs.</p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => (
                        <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                          <div className="text-primary">{item.icon}</div>
                          <div>{item.name}</div>
                        </div>
                      ))}
                    </div>
                    {/* Languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skills</div>
                      <div className="border-b border-border">
                        <div>English & Urdu</div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* Qualifications */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">My Development Journey</h3>
                    {/* Experience and Education Wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* Experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        {/* List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map((item, index) => {
                            const { company, role, years } = item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">{company}</div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">{role}</div>
                                  <div className="text-base font-medium">{years}</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      {/* Education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        {/* List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map((item, index) => {
                            const { university, qualification, years } = item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">{university}</div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">{qualification}</div>
                                  <div className="text-base font-medium">{years}</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* Skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Tools and technologies I use</h3>
                    {/* Skills */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4">
                        {/* Skill List */}
                        <div>
                          {getData(skillData, "skills").data.map((item, index)=>{
                            const {name} = item
                            return (
                              <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                                <div className="font-medium">{name}</div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                    {/* Tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">Tools</h4>
                      <div className="border-b border-border mb-4">
                        {/* Tools List */}
                        <div className="flex gap-x-8 justify-center xl:justify-start ">
                          {getData(skillData, "tools").data.map((item, index)=>{
                            const {imgPath} = item
                            return(
                              <div key={index}>
                                <Image src={imgPath} width={48} height={48} alt='' priorty/>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
