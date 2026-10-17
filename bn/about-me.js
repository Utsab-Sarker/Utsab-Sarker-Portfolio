window.renderSection = function(container) {
    container.innerHTML = `
    <style>
        /* Hero Video Section */
        .hero-video-container {
            position: relative;
            width: 100%;
            height: 85vh;
            min-height: 400px;
            border-radius: 16px;
            overflow: hidden;
            margin-bottom: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 15px 35px rgba(0,0,0,0.2);
        }

        .hero-video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            pointer-events: none; /* ক্লিক বা ডাউনলোড প্রতিরোধ করতে */
        }

        .hero-video-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(7, 9, 19, 0.45);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 20px;
        }

        .hero-welcome-text {
            font-size: 2.5rem;
            font-weight: 800;
            color: #ffffff;
            margin-bottom: 15px;
            text-shadow: 0 4px 15px rgba(0,0,0,0.5);
        }

        .scroll-down-hint {
            position: absolute;
            bottom: 25px;
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #f8fafc;
            font-size: 0.9rem;
            font-weight: 600;
            gap: 8px;
            text-shadow: 0 2px 8px rgba(0,0,0,0.6);
        }

        .scroll-down-hint i {
            font-size: 1.2rem;
            color: #38bdf8;
            animation: bounce-arrow 1.5s infinite ease-in-out;
        }

        @keyframes bounce-arrow {
            0%, 100% { transform: translateY(0); text-shadow: 0 0 5px #38bdf8; }
            50% { transform: translateY(6px); text-shadow: 0 0 15px #38bdf8; }
        }

        /* Article & Section Styles */
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

        .service-title {
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
            transition: transform 0.3s ease;
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

        /* Responsive Design */
        @media (max-width: 768px) {
            .hero-welcome-text {
                font-size: 1.8rem;
            }
            .service-list {
                grid-template-columns: 1fr;
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
                <div class="scroll-down-hint">
                    <span>আমার জগৎটি এক্সপ্লোর করতে নিচের দিকে স্ক্রল করুন অথবা মেনুবার থেকে আপনার কাঙ্খিত সেকশনে যান।</span>
                    <i class="fa-solid fa-chevron-down"></i>
                </div>
            </div>
        </div>

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
                আমার সবচেয়ে বড় শখ ও ভালোলাগা হলো কোডিং এবং ওয়েব ডেভেলপমেন্ট। নতুন নতুন ওয়েবসাইট তৈরি, ডিজাইন এবং আধুনিক প্রযুক্তি নিয়ে কাজ করতে আমার ভীষণ ভালো লাগে। কোডিংয়ের পাশাপাশি ভ্রমণ করতে এবং নতুন জায়গা দেখতে আমার দারুণ লাগে। এছাড়া প্রকৃতির সৌন্দর্য ক্যামেরাবন্দি করা আমার আরেকটি প্রিয় শখ। লেখালেখি এবং গল্প পড়া নিয়েও আমার দারুণ আগ্রহ রয়েছে।
            </p>

            <p>
                আমার মূল লক্ষ্য হলো একজন দক্ষ ওয়েব ডেভেলপার হওয়া। এই লক্ষ্য সামনে রেখে আমি নিয়মিত নতুন জিনিস শিখছি, আমার দক্ষতা উন্নত করছি এবং প্রযুক্তি জগতে সফল ক্যারিয়ার গড়ার জন্য কাজ করে যাচ্ছি।
            </p>
        </section>

        <!-- সার্ভিস বা আমি যা করছি সেকশন -->
        <section class="service">
            <h3 class="h3 service-title">আমি যা করছি</h3>

            <ul class="service-list">
                <li class="service-item">
                    <div class="service-icon-box">
                        <i class="fa-solid fa-laptop-code" style="font-size: 22px; color: var(--primary-color);"></i>
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
                        <i class="fa-solid fa-code" style="font-size: 22px; color: var(--primary-color);"></i>
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
                        <i class="fa-solid fa-mobile-screen-button" style="font-size: 22px; color: var(--primary-color);"></i>
                    </div>
                    <div class="service-content-box">
                        <h4 class="h4 service-item-title">মোবাইল অ্যাপস</h4>
                        <p class="service-item-text">
                            আইওএস (iOS) এবং অ্যান্ড্রয়েডের জন্য প্রফেশনাল অ্যাপস তৈরি।
                        </p>
                    </div>
                </li>

                <li class="service-item">
                    <div class="service-icon-box">
                        <i class="fa-solid fa-camera-retro" style="font-size: 22px; color: var(--primary-color);"></i>
                    </div>
                    <div class="service-content-box">
                        <h4 class="h4 service-item-title">ফটোগ্রাফি</h4>
                        <p class="service-item-text">
                            প্রফেশনাল লেভেলে যেকোনো ক্যাটাগরির আকর্ষণীয় ও মানসম্মত ছবি ধারণ।
                        </p>
                    </div>
                </li>
            </ul>
        </section>

    </article>
    `;
};
