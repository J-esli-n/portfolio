import { motion } from "framer-motion";

function Experience() {
  const leadership = [
    {
      title: "Lead - CSE Department",
      desc: "VERTECHX 13.0 (2025)",
    },
    {
      title: "Event Coordinator",
      desc: "VERTECHX 12.0 (2024)",
    },
  ];

  return (
    <section className="section">
      <h2>Leadership</h2>

      <div className="grid">
        {leadership.map((item, i) => (
          <motion.div
            className="card"
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;