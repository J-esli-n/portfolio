import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Opti-Blink",
      desc: "Eye Blink Controlled Keyboard for paralysed patients",
    },
    {
      title: "E-Commerce Platform",
      desc: "Microservices + ML recommendation system",
    },
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
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;