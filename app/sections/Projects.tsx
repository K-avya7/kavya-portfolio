import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 px-8 md:px-20 border-t border-zinc-900 overflow-hidden"
    >
      <div className="wave-bg" />

      <div className="relative z-10 max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-semibold mb-20 text-white">
        Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <ProjectCard
            title="Sewa Mitra"
            stack="RAG Pipeline · FAISS · FastAPI · Node.js"
            description="Built a dual-portal medical report management system using FAISS vector search and an open-source HuggingFace LLM. Designed retrieval-augmented generation pipeline for structured clinical data analysis."
            highlight="Special Recognition Prize — Cavista Hackathon 2025"
            github="https://github.com/BarhateManthan/cavista"
          />

          <ProjectCard
            title="Dronalyze"
            stack="CNN · TensorFlow · Python · OpenCV"
            description="Developed a CNN-based classifier achieving 97% accuracy in distinguishing drones from birds using 1600+ micro-Doppler signatures. Focused on signal preprocessing and model optimization."
            github="https://github.com/yourusername/dronalyze"
          />

          <ProjectCard
            title="Portfolio Website"
            stack="Next.js · Tailwind · Framer Motion"
            description="Designed and developed a dynamic developer portfolio featuring animated ombre backgrounds, scroll-triggered transitions, and Vercel deployment."
            github="https://github.com/yourusername/portfolio-website"
          />

          <ProjectCard
            title="BYE OR BUY"
            stack="Flask · Logistic Regression · JavaScript"
            description="Designed and built a vehicle purchase prediction system using Logistic Regression integrated with Flask. Implemented responsive frontend for real-time recommendation outputs."
            github="https://github.com/K-avya7/Car_predict"
          />

          <ProjectCard
            title="Autism Support Website"
            stack="Django · SQLite · Bootstrap"
            description="Developed a structured resource platform for autism-related content using Django and SQLite. Focused on accessibility and structured content delivery."
            github="https://github.com/K-avya7/autism-project"
          />

          <ProjectCard
            title="Hisab Kitab"
            stack="Golang"
            description="Built a lightweight expense tracking application using Go, focusing on performance, simplicity, and structured financial logging."
            github="https://github.com/K-avya7/Hisab-Kitab"
          />
        </div>
      </div>
    </section>
  );
}