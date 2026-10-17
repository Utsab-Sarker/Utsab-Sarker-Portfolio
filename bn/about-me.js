window.renderSection = function(container) {
    container.innerHTML = `
    <style>
        /* Hero Video Section */
        .hero-video-container {
            position: relative;
            width: calc(100% + 80px);
            margin-left: -40px;
            margin-right: -40px;
            margin-top: -40px;
            height: calc(100vh - 80px);
            min-height: 500px;
            overflow: hidden;
            margin-bottom: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .hero-video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            pointer-events: none;
        }

        .hero-video-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(7, 9, 19, 0.5);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 20px;
            gap: 20px;
        }

        .hero-welcome-text {
            font-size: 2.8rem;
            font-weight: 800;
            color: #ffffff;
            text-shadow: 0 4px 20px rgba(0,0,0,0.6);
        }

        .scroll-down-hint {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #f8fafc;
            font-size: 0.95rem;
            font-weight: 600;
            gap: 6px;
            text-shadow: 0 2px 10px rgba(0,0,0,0.8);
            margin-top: 10px;
            cursor: pointer;
            transition: transform 0.2s ease;
        }

        .scroll-down-hint:hover {
            transform: scale(1.05);
        }

        .scroll-down-hint i {
            font-size: 1.3rem;
            color: var(--primary-color);
            animation: bounce-arrow 1.5s infinite ease-in-out;
        }

        @keyframes bounce-arrow {
            0%, 100% { transform: translateY(0); text-shadow: 0 0 5px var(--primary-color); }
            50% { transform: translateY(6px); text-shadow: 0 0 15px var(--primary-color); }
        }

        /* Fade In / Fade Out Animation Base Classes */
        .fade-section {
            opacity: 0;
            transform: translateY(40px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
            will-change: opacity, transform;
            scroll-margin-top: 90px; /* হেডার বা মেনুবারের পেছনে যাতে ঢাকা না পড়ে */
        }

        .fade-section.in-view {
            opacity: 1;
            transform: translateY(0);
        }

        .article-title {
            font-size: 1.8rem;
            font-weight: 800;
            color: var(--text-main);
            margin-bottom: 25px;
            position: relative;
            padding-bottom: 10px;
        }

        .article-title::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 50px;
            height: 4px;
            background: var(--primary-color);
            border-radius: 2px;
        }

        .about-text {
            color: var(--text-muted);
            font-size: 0.95rem;
            line-height: 1.7;
            margin-bottom: 40px;
            display: flex;
            flex-direction: column;
            gap: 15px;
            background: var(--card-bg);
            padding: 30px;
            border-radius: 16px;
            border: 1px solid var(--border-color);
        }

        .about-text b {
            color: var(--text-main);
        }

        /* Services Section */
        .service {
            margin-bottom: 40px;
        }

        .service-title, .testimonials-title, .clients-title {
            font-size: 1.4rem;
            font-weight: 700;
            color: var(--text-main);
            margin-bottom: 20px;
        }

        .service-list {
            list-style: none;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
        }

        .service-item {
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            padding: 25px;
            border-radius: 16px;
            display: flex;
            gap: 15px;
            align-items: flex-start;
            box-shadow: 0 4px 15px rgba(0,0,0,0.03);
            transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .service-item:hover {
            transform: translateY(-5px);
            border-color: var(--primary-color);
        }

        .service-icon-box {
            width: 50px;
            height: 50px;
            background: var(--accent-color);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            color: var(--primary-color);
            font-size: 1.2rem;
        }

        .service-item-title {
            font-size: 1.1rem;
            font-weight: 700;
            color: var(--text-main);
            margin-bottom: 8px;
        }

        .service-item-text {
            font-size: 0.85rem;
            color: var(--text-muted);
            line-height: 1.5;
        }

        /* Testimonials Section */
        .testimonials {
            margin-bottom: 40px;
        }

        .testimonials-list {
            list-style: none;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
        }

        .testimonials-item {
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            padding: 25px;
            border-radius: 16px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.03);
        }

        .testimonials-avatar-box img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 15px;
            border: 2px solid var(--primary-color);
        }

        .testimonials-item-title {
            font-size: 1.05rem;
            font-weight: 700;
            color: var(--text-main);
            margin-bottom: 2px;
        }

        .testimonials-designation {
            font-size: 0.78rem;
            color: var(--primary-color);
            font-weight: 600;
            margin-bottom: 12px;
            display: block;
        }

        .testimonials-text {
            font-size: 0.88rem;
            color: var(--text-muted);
            line-height: 1.6;
        }

        /* Clients Section */
        .clients {
            margin-bottom: 20px;
        }

        .clients-list {
            list-style: none;
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-wrap: wrap;
            gap: 20px;
            background: var(--card-bg);
            padding: 25px;
            border-radius: 16px;
            border: 1px solid var(--border-color);
        }

        .clients-item img {
            max-width: 100px;
            opacity: 0.7;
            transition: opacity 0.3s ease;
        }

        .clients-item img:hover {
            opacity: 1;
        }

        @media (max-width: 900px) {
            .hero-video-container {
                width: calc(100% + 40px);
                margin-left: -20px;
                margin-right: -20px;
                margin-top: -20px;
                height: 75vh;
            }
            .hero-welcome-text {
                font-size: 1.8rem;
            }
            .service-list, .testimonials-list {
                grid-template-columns: 1fr;
            }
            .fade-section {
                scroll-margin-top: 110px; /* মোবাইল হেডার স্পেসের জন্য */
            }
        }
    </style>

    <article class="about active" data-page="about">

        <!-- ব্যাকগ্রাউন্ড ভিডিও এবং ওভারলে সেকশন -->
        <div class="hero-video-container">
            <video class="hero-video" autoplay muted loop playsinline controlslist="nodownload nofullscreen noremoteplayback" disablepictureinpicture>
                <source src="../bg video.mp4" type="video/mp4">
                আপনার ব্রাউজার ভিডিও ট্যাগ সমর্থন করে না।
            </video>
            <div class="hero-video-overlay">
                <h1 class="hero-welcome-text">আমার জগতে আপনাকে স্বাগতম।</h1>
                <div class="scroll-down-hint" id="scroll-hint-btn">
                    <span>আমার জগৎটি এক্সপ্লোর করতে নিচের দিকে স্ক্রল করুন অথবা মেনুবার থেকে আপনার কাঙ্খিত সেকশনে যান।</span>
                    <i class="fa-solid fa-chevron-down"></i>
                </div>
            </div>
        </div>

        <!-- মূল সেকশন শুরু -->
        <div class="fade-section" id="target-about-section">
            <header>
                <h2 class="h2 article-title">আমার সম্পর্কে</h2>
            </header>

            <section class="about-text">
                <p>
                    আমি <b>উৎসব সরকার</b>, বর্তমানে ঢাকা, বাংলাদেশে বসবাস করছি। আমার বাবার নাম উত্তম কুমার সরকার এবং মায়ের নাম শিমা রানী প্রামাণিক। যদিও এখন আমি ঢাকায় থাকি, তবে আমার শিক্ষাজীবনের একটি দীর্ঘ সময় কেটেছে রাজশাহীতে; যেখানে আমি উচ্চ মাধ্যমিক (HSC) পর্যন্ত পড়াশোনা সম্পন্ন করেছি। এরপর উচ্চশিক্ষা অর্জন, অভিজ্ঞতা লাভ এবং পেশাগত দক্ষতা বৃদ্ধির জন্য আমি ঢাকায় আসি।
                </p>

                <p>
                    পেশাগত উন্নয়নের অংশ হিসেবে আমি SPSB, BDOSN এবং MASLAB-এর মতো প্রতিষ্ঠানে ইন্টার্ন হিসেবে কাজ করেছি। এই অভিজ্ঞতাগুলো আমাকে বাস্তবসম্মত জ্ঞান, দলগত কাজ করার দক্ষতা এবং প্রফেশনাল পরিবেশ সম্পর্কে ধারণা অর্জন করতে সহায়তা করেছে।
                </p>

                <p>
                    আমার সবচেয়ে বড় শখ ও ভালোলাগা হলো কোডিং, ওয়েব ডেভেলপমেন্ট, মোবাইল অ্যাপস তৈরি, ফটোগ্রাফি, লেখালেখি এবং ভ্রমণ। নতুন নতুন জায়গা ঘুরে দেখা এবং অজানা সব সৌন্দর্য এক্সপ্লোর করা আমার একটি নেশা; আমি ঘুরতে ভীষণ ভালোবাসি। ক্যামেরা ফ্রেমে প্রকৃতির বৈচিত্র্য বন্দি করা, সৃজনশীল লেখালেখি করা এবং নতুন প্রযুক্তি নিয়ে কাজ করার মাঝে আমি আনন্দ খুঁজে পাই।
                </p>

                <p>
                    আমার মূল লক্ষ্য হলো একজন দক্ষ ডেভেলপার হওয়া। এই লক্ষ্য সামনে রেখে আমি নিয়মিত নতুন জিনিস শিখছি, আমার দক্ষতা উন্নত করছি এবং প্রযুক্তি জগতে সফল ক্যারিয়ার গড়ার জন্য কাজ করে যাচ্ছি।
                </p>
            </section>
        </div>

        <!-- সার্ভিস বা আমি যা করছি সেকশন -->
        <div class="fade-section">
            <section class="service">
                <h3 class="h3 service-title">আমি যা করছি</h3>

                <ul class="service-list">
                    <li class="service-item">
                        <div class="service-icon-box">
                            <i class="fa-solid fa-laptop-code"></i>
                        </div>
                        <div class="service-content-box">
                            <h4 class="h4 service-item-title">ওয়েব ডিজাইন</h4>
                            <p class="service-item-text">
                                প্রফেশনাল লেভেলে সবচেয়ে আধুনিক এবং আকর্ষণীয় হাই-কোয়ালিটি ডিজাইন তৈরি।
                            </p>
                        </div>
                    </li>

                    <li class="service-item">
                        <div class="service-icon-box">
                            <i class="fa-solid fa-code"></i>
                        </div>
                        <div class="service-content-box">
                            <h4 class="h4 service-item-title">ওয়েব ডেভেলপমেন্ট</h4>
                            <p class="service-item-text">
                                প্রফেশনাল মান বজায় রেখে উচ্চমানের ওয়েবসাইট ডেভেলপমেন্ট।
                            </p>
                        </div>
                    </li>

                    <li class="service-item">
                        <div class="service-icon-box">
                            <i class="fa-solid fa-mobile-screen-button"></i>
                        </div>
                        <div class="service-content-box">
                            <h4 class="h4 service-item-title">মোবাইল অ্যাপস</h4>
                            <p class="service-item-text">
                                অ্যান্ড্রয়েড এবং আইওএসের জন্য প্রফেশনাল ও আধুনিক অ্যাপ্লিকেশন ডেভেলপমেন্ট।।
                            </p>
                        </div>
                    </li>

                    <li class="service-item">
                        <div class="service-icon-box">
                            <i class="fa-solid fa-calendar-check"></i>
                        </div>
                        <div class="service-content-box">
                            <h4 class="h4 service-item-title">ইভেন্ট অর্গানাইজার</h4>
                            <p class="service-item-text">
                                যে কোনো ছোট-বড় প্রোগ্রাম বা ইভেন্ট অত্যন্ত সুন্দর, আকর্ষণীয় ও সুশৃঙ্খলভাবে প্ল্যানিং ও আয়োজন করার দক্ষতা।
                            </p>
                        </div>
                    </li>

                    <li class="service-item">
                        <div class="service-icon-box">
                            <i class="fa-solid fa-users"></i>
                        </div>
                        <div class="service-content-box">
                            <h4 class="h4 service-item-title">সংগঠক</h4>
                            <p class="service-item-text">
                                বিভিন্ন সামাজিক ও স্বেচ্ছাসেবামূলক সংগঠনের সাথে সক্রিয়ভাবে যুক্ত থেকে সমাজ উন্নয়ন ও যুব সমাজ গঠনে কাজ করা।
                            </p>
                        </div>
                    </li>

                    <li class="service-item">
                        <div class="service-icon-box">
                            <i class="fa-solid fa-camera-retro"></i>
                        </div>
                        <div class="service-content-box">
                            <h4 class="h4 service-item-title">ফটোগ্রাফি</h4>
                            <p class="service-item-text">
                                প্রফেশনাল লেভেলে যেকোনো ক্যাটাগরির আকর্ষণীয় ও মানসম্মত ছবি ধারণ।
                            </p>
                        </div>
                    </li>

                    <li class="service-item">
                        <div class="service-icon-box">
                            <i class="fa-solid fa-pen-nib"></i>
                        </div>
                        <div class="service-content-box">
                            <h4 class="h4 service-item-title">লেখালেখি (Writing)</h4>
                            <p class="service-item-text">
                                সৃজনশীল গল্প, আর্টিকেল এবং আকর্ষণীয় কন্টেন্ট রাইটিং।
                            </p>
                        </div>
                    </li>

                    <li class="service-item">
                        <div class="service-icon-box">
                            <i class="fa-solid fa-plane-departure"></i>
                        </div>
                        <div class="service-content-box">
                            <h4 class="h4 service-item-title">ভ্রমণ ও এক্সপ্লোরিং</h4>
                            <p class="service-item-text">
                                নতুন নতুন জায়গা ঘুরে দেখা এবং প্রকৃতির কাছাকাছি থেকে নতুন অভিজ্ঞতা অর্জন করা।
                            </p>
                        </div>
                    </li>
                </ul>
            </section>
        </div>

        <!-- টেস্টিমোনিয়াল সেকশন -->
        <div class="fade-section">
            <section class="testimonials">
                <h3 class="h3 testimonials-title">টেস্টিমোনিয়াল (মতামত)</h3>

                <ul class="testimonials-list">
                    <li class="testimonials-item">
                        <figure class="testimonials-avatar-box">
                            <img src="./assets/images/avatar-3.png" alt="মো. মুরসালিন পারভেজ">
                        </figure>
                        <h4 class="h4 testimonials-item-title">মো. মুরসালিন পারভেজ</h4>
                        <span class="testimonials-designation">ইঞ্জিনিয়ার</span>
                        <div class="testimonials-text">
                            <p>উৎসবের প্রোগ্রামিং ও সফটওয়্যার ডেভেলপমেন্ট দক্ষতা অত্যন্ত চমৎকার। লজিক্যাল থিংকিং ও ক্লিন কোডিংয়ের মাধ্যমে কঠিন সমস্যা সহজেই সমাধান করতে পারে।</p>
                        </div>
                    </li>

                    <li class="testimonials-item">
                        <figure class="testimonials-avatar-box">
                            <img src="./assets/images/avatar-1.png" alt="রেজা ইসলাম">
                        </figure>
                        <h4 class="h4 testimonials-item-title">রেজা ইসলাম</h4>
                        <span class="testimonials-designation">সমন্বয়ক, এসপিএসবি</span>
                        <div class="testimonials-text">
                            <p>সংগঠক হিসেবে উৎসবের অবদান প্রশংসনীয়। যেকোনো সামাজিক কাজ বা টিমওয়ার্কে তার নেতৃত্ব দেওয়ার ক্ষমতা ও সমন্বয় করার দক্ষতা চমৎকার।</p>
                        </div>
                    </li>

                    <li class="testimonials-item">
                        <figure class="testimonials-avatar-box">
                            <img src="./assets/images/avatar-2.png" alt="আল মামুন">
                        </figure>
                        <h4 class="h4 testimonials-item-title">আল মামুন</h4>
                        <span class="testimonials-designation">সহকারী ব্যবস্থাপক, ইভেন্ট বিভাগ, প্রথম আলো</span>
                        <div class="testimonials-text">
                            <p>ইভেন্ট ম্যানেজমেন্টে উৎসবের কাজ অত্যন্ত সুশৃঙ্খল। যেকোনো বড় আয়োজন চাপ সামলে নিখুঁতভাবে শেষ করার চমৎকার সামর্থ্য রয়েছে তার।</p>
                        </div>
                    </li>
                </ul>
            </section>
        </div>

        <!-- ক্লায়েন্ট লোগো সেকশন -->
        <div class="fade-section">
            <section class="clients">
                <h3 class="h3 clients-title">ক্লায়েন্টবৃন্দ[span_4](start_span)[span_4](end_span)</h3>

                <ul class="clients-list">
                    <li class="clients-item">
                        <a href="#"><img src="./assets/images/logo-1-color.png" alt="Client Logo"></a>
                    </li>
                    <li class="clients-item">
                        <a href="#"><img src="./assets/images/logo-2-color.png" alt="Client Logo"></a>
                    </li>
                    <li class="clients-item">
                        <a href="#"><img src="./assets/images/logo-3-color.png" alt="Client Logo"></a>
                    </li>
                    <li class="clients-item">
                        <a href="#"><img src="./assets/images/logo-4-color.png" alt="Client Logo"></a>
                    </li>
                </ul>
            </section>
        </div>

    </article>
    `;

    // স্ক্রল এবং ক্লিক লজিক
    setTimeout(() => {
        const scrollHintBtn = document.getElementById('scroll-hint-btn');
        const targetSection = document.getElementById('target-about-section');

        if (scrollHintBtn && targetSection) {
            scrollHintBtn.addEventListener('click', () => {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        }

           // ফেড ইন ও ফেড আউট অবজার্ভার
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                } else {
                    entry.target.classList.remove('in-view');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-section').forEach(section => {
            observer.observe(section);
        });
    }, 100);
};
