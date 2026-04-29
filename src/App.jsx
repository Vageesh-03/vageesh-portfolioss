import React, { useState } from "react";
import "./App.css";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoOptions, setVideoOptions] = useState(null);

  const videos = [
    {
      type: "multiple",
      title: "Restaurant Promotional Video",
      desc: "Creative promotional video editing for restaurants and food brands.",
      thumbnail: "/videos/restaurant-thumb.jpg",
      options: [
        {
          type: "single",
          title: "Restaurant Video 1",
          desc: "Promotional restaurant video with creative editing.",
          file: "/videos/restaurant1.mp4",
          thumbnail: "/videos/restaurant-thumb1.jpg",
        },
        {
          type: "single",
          title: "Restaurant Video 2",
          desc: "Food brand promotional video with smooth transitions.",
          file: "/videos/restaurant2.mp4",
          thumbnail: "/videos/restaurant-thumb2.jpg",
        },
      ],
    },
    {
      type: "single",
      title: "Product Showcase Video",
      desc: "Professional product highlight video with clean transitions and branding.",
      file: "/videos/product1.mp4",
      thumbnail: "/videos/product-thumb.jpg",
    },
    {
      type: "multiple",
      title: "Social Media Reels",
      desc: "Short-form reels and engaging social media content for business growth.",
      thumbnail: "/videos/reel-thumb.jpg",
      options: [
        {
          type: "single",
          title: "Social Media Reel 1",
          desc: "Creative reel editing for social media engagement.",
          file: "/videos/reel1.mp4",
          thumbnail: "/videos/reel-thumb1.jpg",
        },
        {
          type: "single",
          title: "Social Media Reel 2",
          desc: "Short-form reel with smooth transitions and branding.",
          file: "/videos/reel2.mp4",
          thumbnail: "/videos/reel-thumb2.jpg",
        },
      ],
    },
  ];

  const openVideo = (video) => {
    if (video.type === "multiple") {
      setVideoOptions(video);
      setSelectedVideo(null);
    } else {
      setSelectedVideo(video);
      setVideoOptions(null);
    }
  };

  const closeAll = () => {
    setSelectedVideo(null);
    setVideoOptions(null);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <h2>VAGEESH JM</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#videos">Videos</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-left fade-left">
          <span className="welcome">Welcome to My Portfolio</span>

          <h1>VAGEESH JM</h1>
          <h3>Digital Editor & Content Creator</h3>

          <p>
            Creative and detail-oriented Digital Editor with experience in video
            editing, promotional content, reels, product showcases, and brand
            storytelling.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="primary-btn">Contact Me</a>
            <a href="#videos" className="outline-btn">View Videos</a>
          </div>

          <div className="hero-contact">
            <p>📞 9164472555</p>
            <p>✉️ jmvageesh13@gmail.com</p>
            <p>📍 Ballari</p>
          </div>
        </div>

        <div className="hero-card fade-right">
          <img src="/profile.jpg" alt="Vageesh JM" />
          <h2>VAGEESH JM</h2>
          <p>Digital Editor & Content Creator</p>

          <div className="social-buttons">
            <a href="mailto:jmvageesh13@gmail.com">Email</a>
            <a
              href="https://drive.google.com/drive/folders/1lsDBQYSgjatYIMhIO88RnuwpTcBdWGOc"
              target="_blank"
              rel="noreferrer"
            >
              Portfolio
            </a>
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <h2 className="section-heading">About Me</h2>

        <div className="about-intro reveal">
          <p>
            Creative and detail-oriented Digital Editor with 2 years of
            experience in video editing and content creation. Skilled in
            delivering engaging promotional content for restaurants, shops,
            products, and businesses. Passionate about storytelling through
            visuals and helping brands grow through impactful content.
          </p>
        </div>

        <div className="stats-grid">
          <div className="stat-card reveal delay-1">
            <h3>2+</h3>
            <p>Years Experience</p>
          </div>

          <div className="stat-card reveal delay-2">
            <h3>20+</h3>
            <p>Projects</p>
          </div>

          <div className="stat-card reveal delay-3">
            <h3>3+</h3>
            <p>Certifications</p>
          </div>

          <div className="stat-card reveal delay-4">
            <h3>100%</h3>
            <p>Dedication</p>
          </div>
        </div>

        <div className="about-bottom">
          <div className="about-card reveal delay-1">
            <h3>Achievements</h3>
            <ul>
              <li>Worked as Digital Editor Intern at Spherenex.</li>
              <li>Created promotional videos for businesses and brands.</li>
              <li>Produced reels, short videos, and product showcase content.</li>
              <li>Worked on social media content and marketing visuals.</li>
            </ul>
          </div>

          <div className="about-card reveal delay-2">
            <h3>Personal Profile</h3>

            <p>
              <b>Tools Known:</b> Filmora, CapCut, VN Editor, Canva, Adobe
              Photoshop, Adobe Premiere Pro, DaVinci Resolve
            </p>

            <p>
              <b>Interests:</b> Video Editing, Photography, Cinematography,
              Social Media Content Creation
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="skills">
        <h2 className="section-heading">Skills</h2>

        <div className="grid">
          {[
            "Video Editing",
            "Motion Graphics",
            "Color Grading",
            "Reels Editing",
            "Social Media Content",
            "Photography",
            "Cinematography",
            "Content Strategy",
            "Communication Skills",
          ].map((skill, index) => (
            <div className={`box reveal delay-${(index % 4) + 1}`} key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="section light" id="education">
        <h2 className="section-heading">Education</h2>

        <div className="single-card reveal">
          <h3>Electrical and Electronics Engineering</h3>
          <p>Ballari Institute Of Technology and Management</p>
          <p><b>Expected Graduation:</b> 2026</p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-heading">Work Experience</h2>

        <div className="experience-grid">
          <div className="experience-card reveal delay-1">
            <h3>Spherenex</h3>
            <h4>Digital Editor Intern</h4>
            <p>Feb 2024 – July 2024</p>

            <ul>
              <li>Edited promotional videos and social media content.</li>
              <li>Created product showcases and marketing visuals.</li>
              <li>Worked with Filmora, CapCut, and VN Editor.</li>
              <li>Enhanced brand presence through creative content.</li>
            </ul>
          </div>

          <div className="experience-card reveal delay-2">
            <h3>Freelance Video Editor</h3>
            <h4>Video Editor</h4>
            <p>2023 – 2024</p>

            <ul>
              <li>Created promotional videos for shops and restaurants.</li>
              <li>Produced reels, shorts, and social media creatives.</li>
              <li>Helped brands improve visibility and engagement.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section light">
        <h2 className="section-heading">Tools & Software</h2>

        <div className="grid">
          {[
            "Filmora Pro",
            "Adobe Premiere Pro",
            "Adobe After Effects",
            "CapCut Pro",
            "VN Editor",
            "Adobe Photoshop",
            "Canva",
            "Adobe Podcast",
            "DaVinci Resolve",
            "Insta Edits",
            "Dolby ON",
            "Shortcut Editor",
          ].map((tool, index) => (
            <div className={`box reveal delay-${(index % 4) + 1}`} key={tool}>
              {tool}
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="videos">
        <h2 className="section-heading">Portfolio Videos</h2>

        <p className="section-text reveal">
          Click any thumbnail to open it in a full-page video player.
        </p>

        <div className="video-grid">
          {videos.map((video, index) => (
            <div className={`video-card reveal delay-${index + 1}`} key={index}>
              <div className="video-thumbnail" onClick={() => openVideo(video)}>
                <img src={video.thumbnail} alt={video.title} />
                <div className="overlay"></div>
                <div className="play-icon">▶</div>
              </div>

              <h3>{video.title}</h3>
              <p>{video.desc}</p>

              <button onClick={() => openVideo(video)}>
                {video.type === "multiple" ? "Choose Video" : "Open Video"}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="section light">
        <h2 className="section-heading">Certification</h2>

        <div className="single-card reveal">
          <h3>SPHERENEX Bangalore</h3>
          <p>Experience Certificate as Trainee Digital Editor.</p>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <h2 className="section-heading">Contact</h2>

        <div className="contact-grid">
          <div className="contact-box reveal delay-1">
            <h3>Get in Touch</h3>
            <p>📞 9164472555</p>
            <p>✉️ jmvageesh13@gmail.com</p>
            <p>📍 Ballari</p>
          </div>

          <div className="contact-box reveal delay-2">
            <h3>Professional Links</h3>

            <p>
              🔗{" "}
              <a
                href="https://drive.google.com/drive/folders/1IsDBQYSgiatY1Mh1O88RnuwpTcBdWGOc"
                target="_blank"
                rel="noreferrer"
              >
                Portfolio Drive
              </a>
            </p>

            <p>
              💼{" "}
              <a
                href="https://www.linkedin.com/in/vageesh-jm-92a670263"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn Profile
              </a>
            </p>

            <p>
              ✉️<a
                    href="mailto:jmvageesh13@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Email Profile
                </a>
            </p>
          </div>
        </div>
      </section>

      <footer>
        <h2>VAGEESH JM</h2>
        <p>Digital Editor & Content Creator</p>
      </footer>

      {videoOptions && (
        <div className="video-page">
          <button className="close-btn" onClick={closeAll}>×</button>

          <div className="video-player-box">
            <h1>{videoOptions.title}</h1>
            <p>Select one video to play</p>

            <div className="reels-select-grid">
              {videoOptions.options.map((item, index) => (
                <div
                  className="reel-option-card"
                  key={index}
                  onClick={() => openVideo(item)}
                >
                  <div className="reel-thumb">
                    <img src={item.thumbnail} alt={item.title} />
                    <div className="overlay"></div>
                    <div className="play-icon">▶</div>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedVideo && (
        <div className="video-page">
          <button className="close-btn" onClick={closeAll}>×</button>

          <div className="video-player-box">
            <h1>{selectedVideo.title}</h1>
            <p>{selectedVideo.desc}</p>

            <video controls autoPlay className="main-video">
              <source src={selectedVideo.file} type="video/mp4" />
              Your browser does not support video.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;