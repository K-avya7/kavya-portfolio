import ExperienceCard from "../components/ExperienceCard";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-32 px-8 md:px-20 overflow-hidden"
    >
      <div className="wave-bg" />

      <div className="relative z-10 max-w-5xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-semibold mb-20 text-slate-900">
          Internship Experience
        </h2>

        <div className="space-y-16">
        <ExperienceCard
        company="PTC Software"
        role="Backend Engineering Intern"
        points={[
            "Developed and maintained Golang microservices responsible for data flow between PTC products.",
            "Optimized GitLab CI/CD pipelines to prevent unnecessary runner executions and reduce wasted compute resources.",
            "Built a custom Go tool to dynamically generate Datadog and Prometheus alert links for PagerDuty-based incident analysis.",
            "Improved internal data workflows and backend reliability.",
        ]}
        />

        <ExperienceCard
        company="AITECH Solutions"
        role="Project Intern"
        points={[
            "Collaborated in a team of 3 to design and implement a uterine fibroid detection model.",
            "Performed preprocessing of ultrasound images to enhance training accuracy.",
            "Evaluated CNN, DETR, R-CNN, and YOLO architectures to determine the most accurate and efficient model.",
        ]}
        />
        </div>
      </div>
    </section>
  );
}