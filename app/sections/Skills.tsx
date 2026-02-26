import SkillRow from "../components/SkillRow";
import {
  SiGo,
  SiDjango,
  SiJavascript,
  SiMysql,
  SiSqlite,
  SiGitlab,
  SiDocker,
  SiPrometheus,
  SiLinux,
  SiPython,
  SiFlask,
  SiCplusplus,
  SiTensorflow,
  SiGit,
  SiGithub,
  SiDatadog,
  SiGrafana,
} from "react-icons/si";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 overflow-hidden border-t border-zinc-900"
    >
      <div className="wave-bg" />

      <div className="relative z-10 text-center">

        <h2 className="text-3xl md:text-4xl font-semibold mb-20 text-white">
        Skills
        </h2>

        {/* Row 1 */}
        <SkillRow
          direction="left"
          skills={[
            { name: "Golang", icon: <SiGo /> },
            { name: "Django", icon: <SiDjango /> },
            { name: "JavaScript", icon: <SiJavascript /> },
            { name: "REST APIs" },
            { name: "Microservices" },
            { name: "MySQL", icon: <SiMysql /> },
            { name: "SQLite", icon: <SiSqlite /> },
            { name: "Unit Testing" },
            { name: "Debugging" },
          ]}
        />

        {/* Row 2 */}
        <SkillRow
          direction="right"
          skills={[
            { name: "GitLab CI/CD", icon: <SiGitlab /> },
            { name: "Docker", icon: <SiDocker /> },
            { name: "Prometheus", icon: <SiPrometheus /> },
            { name: "Linux", icon: <SiLinux /> },
            { name: "Python", icon: <SiPython /> },
            { name: "Flask", icon: <SiFlask /> },
            { name: "Faiss" },
            { name: "C++", icon: <SiCplusplus /> },
            { name: "TensorFlow", icon: <SiTensorflow /> },
          ]}
        />

        {/* Row 3 */}
        <SkillRow
          direction="right"
          skills={[
            { name: "Git", icon: <SiGit /> },
            { name: "GitHub", icon: <SiGithub /> },
            { name: "GitLab", icon: <SiGitlab /> },
            { name: "Bruno" },
            { name: "Prometheus", icon: <SiPrometheus /> },
            { name: "Datadog", icon: <SiDatadog /> },
            { name: "Grafana", icon: <SiGrafana /> },
          ]}
        />
      </div>
    </section>
  );
}