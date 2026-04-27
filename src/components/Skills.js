function Skills() {
  const skills = [
    "Python",
    "Java",
    "C",
    "Spring Boot",
    "Machine Learning",
    "MySQL",
    "Power BI",
    "Tableau",
  ];

  return (
    <section className="section">
      <h2>Skills</h2>

      <div className="grid skills-grid">
        {skills.map((skill, i) => (
          <div className="card" key={i}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;