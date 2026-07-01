import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ServicesData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: 'Frontend Development',
        description: "Building responsive, polished interfaces with React, Next.js, Tailwind CSS, and clean component structure."
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'Full Stack Development',
        description: "Creating scalable MERN applications with authentication, APIs, dashboards, product flows, and database-backed features."
    },
    {
        icon: <Gem size={72} strokeWidth={0.8} />,
        title: 'WordPress & E-commerce',
        description: "Designing business-ready WordPress and e-commerce experiences with modern layouts and practical user journeys."
    },
]

const Services = () => {
  return <section className="mb-12 xl:mb-36">
    <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">My Services</h2>
        {/* Grid items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
            {ServicesData.map((item, index)=>{
                return (
                    <Card className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative" key={index}>
                        <CardHeader className="text-primary absolute -top-[60px]">
                            <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">{item.icon}</div>
                        </CardHeader>
                        <CardContent className="text-center">
                            <CardTitle className="mb-4">
                                {item.title}
                            </CardTitle>
                            <CardDescription className="text-lg">
                                {item.description}
                            </CardDescription>
                        </CardContent>
                    </Card>
                )
            })}
        </div>
    </div>
  </section>;
};

export default Services;
