import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Opti-Blink",
      desc: "Eye Blink Controlled Keyboard for paralysed patients",
      link: "https://github.com/J-esli-n/vOptiBlink.git"
    },
    {
      title: "Weather Now",
      desc: "Application to know weather predictions across cities",
      link: "#" // add your repo or live link here
    }
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="grid">
        {projects.map((p, i) => (
          <motion.div
            className="card"
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3>{p.title}</h3>
            <p>{p.desc}</p>

            <a 
              href={p.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
