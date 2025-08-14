   // Service details data
   const serviceDetails = {
    "computer-repair": {
        title: "Computer Repair & Maintenance",
        icon: "fas fa-laptop-medical",
        description: "Our computer repair and maintenance service provides comprehensive solutions to keep your systems running at peak performance. We diagnose and resolve both hardware and software issues to minimize downtime and maximize productivity.",
        image: "Images/WhatsApp Image 2025-08-14 at 11.22.04_99620884.jpg" ,
        features: [
            "Diagnosis and repair of hardware issues",
            "Operating system troubleshooting and repair",
            "Virus and malware removal",
            "Data backup and recovery",
            "Component upgrades and replacements",
            "Preventative maintenance plans",
            "On-site and remote support options"
        ],
        price: "R450/hour"
    },
    "network": {
        title: "Network Installation & Management",
        icon: "fas fa-network-wired",
        description: "We design, install, and maintain robust network infrastructures tailored to your business requirements. Our solutions ensure secure, high-speed connectivity for all your devices and applications.",
        image: "Images/network.jpg",
        features: [
            "Network design and planning",
            "Wired and wireless installation",
            "Network security configuration",
            "Performance monitoring and optimization",
            "VPN setup and management",
            "Network troubleshooting and support",
            "Cloud integration services"
        ],
        price: "From R1,500/month"
    },
    "cybersecurity": {
        title: "Cybersecurity Services",
        icon: "fas fa-shield-alt",
        description: "Protect your business from evolving cyber threats with our comprehensive security solutions. We implement multi-layered defenses to safeguard your data, systems, and reputation.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: [
            "Vulnerability assessments",
            "Firewall configuration and management",
            "Endpoint protection solutions",
            "Security awareness training",
            "Incident response planning",
            "Regular security audits",
            "Data encryption services"
        ],
        price: "Custom packages available"
    },
    "cloud": {
        title: "Cloud Computing Services",
        icon: "fas fa-cloud",
        description: "Migrate to the cloud with confidence. We provide seamless cloud solutions that enhance collaboration, scalability, and business continuity while reducing IT overhead.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: [
            "Cloud migration planning and execution",
            "Office 365 and G Suite implementation",
            "Cloud backup and disaster recovery",
            "Infrastructure-as-a-Service (IaaS)",
            "Software-as-a-Service (SaaS) solutions",
            "Cloud security management",
            "Ongoing cloud optimization"
        ],
        price: "From R800/month"
    },
    "consulting": {
        title: "IT Consulting",
        icon: "fas fa-chart-line",
        description: "Align your technology strategy with business objectives through our expert IT consulting services. We help you make informed decisions for sustainable growth and digital transformation.",
        image: "Images/consalt.jpg",
        features: [
            "Technology roadmap development",
            "IT infrastructure assessment",
            "Digital transformation strategy",
            "Vendor selection and management",
            "Budget planning and optimization",
            "Compliance and regulatory guidance",
            "IT project management"
        ],
        price: "R750/hour"
    },
    "webdev": {
        title: "Website Development & Maintenance",
        icon: "fas fa-code",
        description: "Establish a powerful online presence with our professional website services. From responsive design to ongoing maintenance, we create digital experiences that engage and convert.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: [
            "Custom website design and development",
            "E-commerce solutions",
            "Search engine optimization (SEO)",
            "Content management systems",
            "Website hosting and security",
            "Regular updates and maintenance",
            "Performance optimization"
        ],
        price: "From R3,500 one-time"
    }
};

// Animation on scroll functionality
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .zoom-in').forEach(el => {
        observer.observe(el);
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Counter animation for stats
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;
    
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-count');
            const count = +counter.innerText;
            
            const increment = target / speed;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target;
            }
        };
        
        // Start counter when element is in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCount();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(counter);
    });
    
    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Service modal functionality
    const serviceModal = new bootstrap.Modal(document.getElementById('serviceModal'));
    const modalTitle = document.querySelector('#serviceModalLabel');
    const modalDescription = document.querySelector('.service-description');
    const modalImage = document.querySelector('.modal-image');
    const modalFeatures = document.querySelector('.feature-list');
    const modalPrice = document.querySelector('.price-tag');
    
    document.querySelectorAll('.learn-more').forEach(button => {
        button.addEventListener('click', function() {
            const serviceKey = this.getAttribute('data-service');
            const service = serviceDetails[serviceKey];
            
            if (service) {
                // Populate modal with service details
                modalTitle.innerHTML = `<i class="${service.icon}"></i> ${service.title}`;
                modalDescription.textContent = service.description;
                modalImage.src = service.image;
                modalImage.alt = service.title;
                modalPrice.textContent = service.price;
                
                // Clear and repopulate features list
                modalFeatures.innerHTML = '';
                service.features.forEach(feature => {
                    const li = document.createElement('li');
                    li.textContent = feature;
                    modalFeatures.appendChild(li);
                });
                
                // Show the modal
                serviceModal.show();
            }
        });
    });
});

// Initialize carousel with custom settings
        document.addEventListener('DOMContentLoaded', function() {
            const myCarousel = new bootstrap.Carousel(document.getElementById('testimonialCarousel'), {
                interval: 6000, // Rotate every 6 seconds
                wrap: true,
                pause: 'hover',
                keyboard: true,
                ride: 'carousel'
            });
            
            // Add custom animation to indicators
            const indicators = document.querySelectorAll('.carousel-indicators button');
            indicators.forEach(indicator => {
                indicator.addEventListener('click', function() {
                    indicators.forEach(ind => ind.classList.remove('active'));
                    this.classList.add('active');
                });
            });
            
            // Add hover effect to testimonial cards
            const testimonialItems = document.querySelectorAll('.testimonial-item');
            testimonialItems.forEach(item => {
                item.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px)';
                    this.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.15)';
                });
                
                item.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                    this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.08)';
                });
            });
        });

        document.addEventListener('DOMContentLoaded', function() {
            const slides = document.querySelectorAll('.testimonial-slide');
            const dots = document.querySelectorAll('.nav-dot');
            const prevBtn = document.querySelector('.prev-btn');
            const nextBtn = document.querySelector('.next-btn');
            let currentIndex = 0;
            let autoSlideInterval;
            
            // Function to update carousel
            function updateCarousel() {
                slides.forEach((slide, index) => {
                    slide.classList.remove('active', 'prev', 'next');
                    
                    if (index === currentIndex) {
                        slide.classList.add('active');
                    } else if (index === (currentIndex + 1) % slides.length) {
                        slide.classList.add('next');
                    } else if (index === (currentIndex - 1 + slides.length) % slides.length) {
                        slide.classList.add('prev');
                    }
                });
                
                // Update dots
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentIndex);
                });
            }
            
            // Function to go to next slide
            function nextSlide() {
                currentIndex = (currentIndex + 1) % slides.length;
                updateCarousel();
            }
            
            // Function to go to previous slide
            function prevSlide() {
                currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                updateCarousel();
            }
            
            // Auto slide every 5 seconds
            function startAutoSlide() {
                autoSlideInterval = setInterval(nextSlide, 5000);
            }
            
            // Stop auto sliding
            function stopAutoSlide() {
                clearInterval(autoSlideInterval);
            }
            
            // Event listeners
            nextBtn.addEventListener('click', () => {
                stopAutoSlide();
                nextSlide();
                startAutoSlide();
            });
            
            prevBtn.addEventListener('click', () => {
                stopAutoSlide();
                prevSlide();
                startAutoSlide();
            });
            
            dots.forEach(dot => {
                dot.addEventListener('click', () => {
                    stopAutoSlide();
                    currentIndex = parseInt(dot.getAttribute('data-index'));
                    updateCarousel();
                    startAutoSlide();
                });
            });
            
            // Initialize the carousel
            updateCarousel();
            startAutoSlide();
            
            // Add hover effect to slides
            slides.forEach(slide => {
                slide.addEventListener('mouseenter', () => {
                    stopAutoSlide();
                });
                
                slide.addEventListener('mouseleave', () => {
                    startAutoSlide();
                });
            });
            
            // Add parallax effect to decorations
            window.addEventListener('mousemove', (e) => {
                const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
                const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
                
                const decorElements = document.querySelectorAll('.testimonial-decor');
                decorElements.forEach((el, index) => {
                    const speed = 0.5 + (index * 0.1);
                    el.style.transform = `translate(${xAxis * speed}px, ${yAxis * speed}px)`;
                });
            });
        });      