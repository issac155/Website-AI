import React from "react";

const Leadership = () => {
  const leadershipTeam = [
    {
      name: "Alya Al Yaqdhan",
      position: "Managing Director",
      experience: "18+ years in MEP & ELV Industry",
      email: "alyaqdhan@almawaridoman.com",
      bio: "With extensive experience in engineering services and business development, leading the company's strategic direction and client relationships.",
    },
    {
      name: "Vignesh Potti",
      position: "Technical Director",
      experience: "15+ years in Project Management",
      email: "vignesh.potti@almawaridoman.com",
      bio: "Specialized in MEP systems design, project execution, and quality assurance with expertise across healthcare, commercial, and government sectors.",
    },
    {
      name: "Operational Team",
      position: "Engineering Excellence",
      experience: "50+ Combined Years of Experience",
      email: "operations@almawaridoman.com",
      bio: "Our team of certified engineers, technicians, and project managers bring diverse expertise across MEP, ELV, and facility management domains.",
    },
  ];

  return (
    <section className="leadership" id="leadership">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">MEET THE TEAM</div>
          <h2 className="section-title">Leadership & Expertise</h2>
          <p className="section-desc">
            Backed by industry veterans with decades of combined experience, our
            leadership team ensures excellence in every project.
          </p>
        </div>

        <div className="leadership-grid">
          {leadershipTeam.map((member, index) => (
            <div className="leadership-card animate-on-scroll" key={index}>
              <div className="leadership-image">
                <div className="leadership-initials">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              </div>
              <div className="leadership-content">
                <h3>{member.name}</h3>
                <div className="leadership-position">{member.position}</div>
                <div className="leadership-experience">
                  <i className="fas fa-briefcase"></i> {member.experience}
                </div>
                <div className="leadership-email">
                  <i className="fas fa-envelope"></i> {member.email}
                </div>
                <p className="leadership-bio">{member.bio}</p>
                <div className="leadership-skills">
                  {member.skills &&
                    member.skills.map((skill, idx) => (
                      <span className="skill-tag" key={idx}>
                        {skill}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="team-stats animate-on-scroll">
          <div className="team-stat">
            <div className="team-stat-number">18+</div>
            <div className="team-stat-text">Years Industry Experience</div>
          </div>
          <div className="team-stat">
            <div className="team-stat-number">15+</div>
            <div className="team-stat-text">Certified Professionals</div>
          </div>
          <div className="team-stat">
            <div className="team-stat-number">50+</div>
            <div className="team-stat-text">Combined Team Experience</div>
          </div>
          <div className="team-stat">
            <div className="team-stat-number">100%</div>
            <div className="team-stat-text">Omani Staff Compliance</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
