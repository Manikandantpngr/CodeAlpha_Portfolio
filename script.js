 document.addEventListener('DOMContentLoaded', function() {
            
            const themeToggleBtn = document.getElementById('themeToggle');
            const themeIcon = themeToggleBtn.querySelector('i');
            
            
            if (localStorage.getItem('theme') === 'dark' || 
                (window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem('theme'))) {
                document.body.classList.add('dark-mode');
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
            
            themeToggleBtn.addEventListener('click', () => {
                document.body.classList.toggle('dark-mode');
                
                if (document.body.classList.contains('dark-mode')) {
                    localStorage.setItem('theme', 'dark');
                    themeIcon.classList.remove('fa-moon');
                    themeIcon.classList.add('fa-sun');
                } else {
                    localStorage.setItem('theme', 'light');
                    themeIcon.classList.remove('fa-sun');
                    themeIcon.classList.add('fa-moon');
                }
            });

            
            const skillBars = document.querySelectorAll('.skill-progress');
            
            function animateSkillBars() {
                skillBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width;
                });
            }
            
            
            const skillsSection = document.getElementById('skills');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateSkillBars();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            if (skillsSection) {
                observer.observe(skillsSection);
            }

            
            const contactForm = document.querySelector('.contact-form');
            
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    
                    
                    alert('Thanks for your message! In a real application, this would be sent to a server.');
                    contactForm.reset();
                });
            }

            
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        const headerHeight = document.querySelector('header').offsetHeight;
                        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            
            const header = document.querySelector('header');
            
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    header.style.boxShadow = '0 2px 10px var(--shadow-color)';
                } else {
                    header.style.boxShadow = 'none';
                }
            });

            
            const buttons = document.querySelectorAll('.btn');
            
            buttons.forEach(button => {
                button.addEventListener('mousemove', function(e) {
                    const x = e.pageX - this.getBoundingClientRect().left;
                    const y = e.pageY - this.getBoundingClientRect().top;
                    
                    this.style.setProperty('--x', x + 'px');
                    this.style.setProperty('--y', y + 'px');
                });
            });
        });
