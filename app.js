// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');
const html = document.documentElement;

// Check for saved theme preference or default to 'dark'
const currentTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', currentTheme);

// Update icon visibility based on current theme
function updateThemeIcon() {
    const theme = html.getAttribute('data-theme');
    if (theme === 'light') {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }
}

// Initialize icon
updateThemeIcon();

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon();
});

// Static data structure - Ready to be replaced with API calls to Rust backend
const profileData = {
    name: "Atul Agarwal",
    title: "Quantitative Technologist | Data Engineering & ML",
    profileImage: "profile.jpg",
    contact: {
        email: "sampleatul11@gmail.com",
        phone: "+91 9359454977",
        github: "https://github.com/agarwalatul",
        linkedin: "https://linkedin.com/in/agarwalat"
    },
    summary: "Quantitative Technologist / Data Engineer with 7.5+ years building high-performance trading data systems and scalable ML platforms. Designed and operated real-time ingestion + distributed compute pipelines handling 1TB+ daily and 2M+ Kafka events, while improving efficiency and reducing infrastructure costs by 50%. Deep expertise in execution-critical backend infrastructure, resilient data architectures, and production-grade distributed systems. Strong foundation with an M.Tech (Computer Science) and hands-on delivery across Python, Rust, Kafka, distributed databases, and cloud.",
    experience: [
        {
            title: "Quantitative Technologist",
            company: "Qube Research & Technologies",
            location: "Mumbai",
            date: "December 2022 - Present",
            description: [
                "Designed, deployed, and operated batch + real-time ingestion pipelines for quantitative trading workflows, processing 1TB+ daily and 2M+ Kafka events/day",
                "Improved streaming pipeline efficiency, reducing memory usage by 50% and CPU by 80%, enabling higher throughput under production workloads",
                "Drove modernization of the platform storage layer via proof-of-concepts across ClickHouse, CockroachDB, and S3-based architectures, benchmarking performance and operational complexity",
                "Integrated existing systems with ClickHouse, building benchmarking and validation frameworks using Python, PyArrow, and Flask to quantify performance and operational tradeoffs",
                "Collaborated with quant researchers, trading, and platform teams to deliver scalable data solutions for production trading operations",
                "Partnered with stakeholders to identify operational pain points and ship features aligned with platform reliability and performance requirements"
            ]
        },
        {
            title: "Machine Learning Engineer",
            company: "Bright Money",
            location: "Bangalore",
            date: "May 2020 - November 2022",
            description: [
                "Developed and productionized scalable ML inference systems serving 10,000+ daily operations with 99.9% uptime",
                "Enhanced inference models (Minimum Due, APR, Grace Period) improving prediction accuracy by 15% through feature engineering",
                "Built app onboarding funnel monitoring, reducing user drop-off by 25% through data-driven A/B experiments",
                "Implemented real-time and batch model pipelines using Airflow, Django, and Celery",
                "Designed alerting systems with Prometheus, Grafana, and PagerDuty for service reliability"
            ]
        },
        {
            title: "Research Scientist",
            company: "Arya.ai",
            location: "Mumbai",
            date: "July 2018 - April 2020",
            description: [
                "Deployed end-to-end cheque clearance system processing 2M+ cheques daily with 95%+ accuracy for major private bank",
                "Engineered deep learning models for extracting key fields from bank cheques (amount, date, MICR, signature verification)",
                "Built health claim automation system reducing manual processing time by 60%"
            ]
        }
    ],
    skills: [
        {
            category: "Languages",
            items: ["Python", "Rust", "SQL"]
        },
        {
            category: "Streaming & Orchestration",
            items: ["Kafka", "Airflow", "Argo", "Celery"]
        },
        {
            category: "Databases",
            items: ["PostgreSQL", "ClickHouse"]
        },
        {
            category: "Data Systems",
            items: ["PyArrow", "Arrow Flight"]
        },
        {
            category: "Backend / RPC",
            items: ["gRPC", "Protocol Buffers", "FastAPI", "Django"]
        },
        {
            category: "Cloud & Infrastructure",
            items: ["AWS (S3, SQS, Timestream)", "Docker", "Kubernetes"]
        },
        {
            category: "Observability",
            items: ["Prometheus", "Grafana"]
        }
    ],
    projects: [
        {
            title: "Real-Time Trading Data Pipeline",
            description: "High-performance data ingestion system processing 1TB+ daily with real-time Kafka streaming handling 2M+ events. Optimized for low-latency quantitative trading workflows with distributed compute architecture.",
            technologies: ["Python", "Kafka", "ClickHouse", "Airflow"]
        },
        {
            title: "ML Inference Platform",
            description: "Production-grade machine learning inference system serving 10,000+ daily predictions with 99.9% uptime. Implemented real-time and batch pipelines for financial models with comprehensive monitoring.",
            technologies: ["Python", "Django", "Celery", "PostgreSQL"]
        },
        {
            title: "Cheque Processing System",
            description: "End-to-end deep learning system for automated cheque clearance processing 2M+ cheques daily with 95%+ accuracy. Deployed for major private bank with field extraction and signature verification.",
            technologies: ["Python", "Deep Learning", "Computer Vision", "OCR"]
        }
    ],
    education: [
        {
            degree: "Master of Technology in Computer Science",
            institution: "International Institute of Information Technology, Bangalore",
            date: "2016 - 2018",
            details: "GPA: 3.62/4.0 • Thesis: Very Deep CNN for Acoustic Modelling from Raw Speech Waveform"
        }
    ]
};

// Function to populate the page with data
// This function can be easily modified to fetch data from a Rust backend API
async function loadProfileData() {
    try {
        // TODO: Replace with actual API call to Rust backend
        // const response = await fetch('http://localhost:8080/api/profile');
        // const data = await response.json();

        // For now, use static data
        const data = profileData;

        // Populate header
        document.getElementById('name').textContent = data.name;
        document.getElementById('title').textContent = data.title;
        document.getElementById('profileImage').src = data.profileImage;

        // Populate contact info
        const emailLink = document.getElementById('email');
        emailLink.href = `mailto:${data.contact.email}`;
        emailLink.querySelector('span').textContent = data.contact.email;

        const phoneLink = document.getElementById('phone');
        phoneLink.href = `tel:${data.contact.phone}`;
        phoneLink.querySelector('span').textContent = data.contact.phone;

        const githubLink = document.getElementById('github');
        githubLink.href = data.contact.github;
        githubLink.querySelector('span').textContent = data.contact.github.replace('https://', '');

        const linkedinLink = document.getElementById('linkedin');
        linkedinLink.href = data.contact.linkedin;
        linkedinLink.querySelector('span').textContent = data.contact.linkedin.replace('https://', '');

        // Populate summary
        document.getElementById('summary').textContent = data.summary;

        // Populate experience
        const experienceContainer = document.getElementById('experienceContainer');
        experienceContainer.innerHTML = data.experience.map(exp => `
            <div class="experience-item">
                <div class="item-header">
                    <div>
                        <h3 class="item-title">${exp.title}</h3>
                        <p class="item-company">${exp.company}${exp.location ? `, ${exp.location}` : ''}</p>
                    </div>
                    <span class="item-date">${exp.date}</span>
                </div>
                <div class="item-description">
                    <ul>
                        ${exp.description.map(desc => `<li>${desc}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `).join('');

        // Populate skills
        const skillsContainer = document.getElementById('skillsContainer');
        skillsContainer.innerHTML = data.skills.map(skillGroup => `
            <div class="skill-category">
                <h3 class="skill-category-title">${skillGroup.category}</h3>
                <div class="skill-tags">
                    ${skillGroup.items.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>
        `).join('');

        // Populate projects
        const projectsContainer = document.getElementById('projectsContainer');
        projectsContainer.innerHTML = data.projects.map(project => `
            <div class="project-card">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        `).join('');

        // Populate education
        const educationContainer = document.getElementById('educationContainer');
        educationContainer.innerHTML = data.education.map(edu => `
            <div class="education-item">
                <div class="item-header">
                    <div>
                        <h3 class="item-title">${edu.degree}</h3>
                        <p class="item-institution">${edu.institution}</p>
                    </div>
                    <span class="item-date">${edu.date}</span>
                </div>
                <div class="item-description">
                    <p>${edu.details}</p>
                </div>
            </div>
        `).join('');

    } catch (error) {
        console.error('Error loading profile data:', error);
        // Handle error - could show error message to user
    }
}

// API integration helper for future Rust backend
const API_CONFIG = {
    baseURL: 'http://localhost:8080/api', // Update this when Rust backend is ready
    endpoints: {
        profile: '/profile',
        experience: '/experience',
        skills: '/skills',
        projects: '/projects',
        education: '/education'
    }
};

// Example function for fetching from Rust backend (ready to use)
async function fetchFromBackend(endpoint) {
    try {
        const response = await fetch(`${API_CONFIG.baseURL}${endpoint}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching from ${endpoint}:`, error);
        throw error;
    }
}

// Smooth scroll behavior for any future navigation
document.addEventListener('DOMContentLoaded', () => {
    loadProfileData();

    // Add intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections for scroll animations
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
});

// Print/Export functionality (bonus feature)
function exportToPDF() {
    window.print();
}

// Add keyboard shortcut for print (Ctrl/Cmd + P)
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        exportToPDF();
    }
});
