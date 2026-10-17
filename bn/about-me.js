window.renderSection = function(container) {
    container.innerHTML = `
    <style>
        /* সেকশন ফেড-ইন এবং ফেড-আউট অ্যানিমেশন */
        @keyframes fadeInOut {
            0% {
                opacity: 0;
                transform: translateY(20px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .fade-section {
            animation: fadeInOut 0.8s ease-in-out forwards;
        }

        /* ফুল পেজ ভিডিও ব্যাকগ্রাউন্ড */
        .hero-video-container {
            position: relative;
            width: 100vw;
            height: 100vh;
            margin-left: calc(-50vw + 50%);
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 50px;
        }

        .hero-video {
            position: absolute;
            top: 50%;
            left: 50%;
            min-width: 100%;
            min-height: 100%;
            width: auto;
            height: auto;
            transform: translate(-50%, -50%);
            object-fit: cover;
            pointer-events: none;
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
            font-size: 2.8rem;
            font-weight: 800;
            color: #ffffff;
            margin-bottom: 15px;
            text-shadow: 0 4px 15px rgba(0,0,0,0.6);
        }

        /* তীর চিহ্ন এবং স্ক্রোল নির্দেশিকা বাটন */
        .scroll-down-hint {
            position: absolute;
            bottom: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #f8fafc;
            font-size: 0.9rem;
            font-weight: 600;
            gap: 8px;
            cursor: pointer;
            text-shadow: 0 2px 8px rgba(0,0,0,0.8);
            transition: transform 0.3s ease;
        }

        .scroll-down-hint:hover {
            transform: scale(1.05);
        }

        .scroll-down-hint i {
            font-size: 1.4rem;
            color: var(--primary-color);
            animation: bounce-arrow 1.5s infinite ease-in-out;
            background: rgba(255, 255, 255, 0.2);
            padding: 10px;
            border-radius: 50%;
            backdrop-filter: blur(5px);
        }

        @keyframes bounce-arrow {
            0%, 100% { transform: translateY(0); text-shadow: 0 0 5px var(--primary-color); }
            50% { transform: translateY(8px); text-shadow: 0 0 20px var(--primary-color); }
        }

        /* মূল কন্টেন্ট প্যাডিং ও ডিজাইন */
        .content-wrapper {
            padding: 0 40px;
            max-width: 1200px;
            margin: 0 auto;
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
            margin-bottom: 10px;
        }

        .testimonials-text {
            font-size: 0.88rem;
            color: var(--text-muted);
            line-height: 1.6;
        }

        .clients {
            margin-bottom: 40px;
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

        @media (max-width: 768px) {
            .hero-welcome-text {
                font-size: 1.8rem;
                padding: 0 10px;
            }
            .content-wrapper {
                padding: 0 15px;
            }
            .service-list, .testimonials-list {
                grid-template-columns: 1fr;
            }
        }
    </style>

    <article class="about active fade-section" data-page="about">

        <!-- ফুল স্ক্রিন ব্যাকগ্রাউন্ড ভিডিও সেকশন -->
        <div class="hero-video-container">
            <video class="hero-video" autoplay muted loop playsinline>
                <source src="../bg video.mp4" type="video/mp4">
                আপনার ব্রাউজার ভিডিও ট্যাগ সমর্থন করে না।
            </video>
            <div class="hero-video-overlay">
                <h1 class="hero-welcome-text">আমার জগতে আপনাকে স্বাগতম।</h1>
                <!-- তীর চিহ্ন বাটন যাতে ক্লিক করলে নিচের অংশে চলে যায় -->
                <div class="scroll-down-hint" id="scroll-to-about">
                    <span>শুরু করতে নিচে ক্লিক করুন</span>
                    <i class="fa-solid fa-chevron-down"></i>
                </div>
            </div>
        </div>

        <div class="content-wrapper">
            <header id="about-heading-target">
                <h2 class="h2 article-title">আমার সম্পর্কে[span_0](start_span)[span_0](end_span)</h2>
            </header>

            <section class="about-text">
                <p>
                    আমি <b>উৎসব সরকার</b>[span_1](start_span)[span_1](end_span), বর্তমানে ঢাকা, বাংলাদেশে বসবাস করছি। আমার বাবার নাম উত্তম কুমার সরকার এবং মায়ের নাম শিমা রানী প্রামাণিক। যদিও এখন আমি ঢাকায় থাকি, তবে আমার শিক্ষাজীবনের একটি দীর্ঘ সময় কেটেছে রাজশাহীতে; যেখানে আমি উচ্চ মাধ্যমিক (HSC) পর্যন্ত পড়াশোনা সম্পন্ন করেছি। এরপর উচ্চশিক্ষা অর্জন, অভিজ্ঞতা লাভ এবং পেশাগত দক্ষতা বৃদ্ধির জন্য আমি ঢাকায় আসি[span_2](start_span)[span_2](end_span)।
                </p>
                <p>
                    পেশাগত উন্নয়নের অংশ হিসেবে আমি SPSB, BDOSN এবং MASLAB-এর মতো প্রতিষ্ঠানে ইন্টার্ন হিসেবে কাজ করেছি। এই অভিজ্ঞতাগুলো আমাকে বাস্তবসম্মত জ্ঞান, দলগত কাজ করার দক্ষতা এবং প্রফেশনাল পরিবেশ সম্পর্কে ধারণা অর্জন করতে সহায়তা করেছে[span_3](start_span)[span_3](end_span)।
                </p>
                <p>
                    আমার সবচেয়ে বড় শখ ও ভালোলাগা হলো কোডিং, ওয়েব ডেভেলপমেন্ট, মোবাইল অ্যাপস তৈরি, ফটোগ্রাফি, লেখালেখি এবং ভ্রমণ। নতুন নতুন জায়গা ঘুরে দেখা এবং অজানা সব সৌন্দর্য এক্সপ্লোর করা আমার একটি নেশা; আমি ঘুরতে ভীষণ ভালোবাসি[span_4](start_span)[span_4](end_span)।
                </p>
                <p>
                    আমার মূল লক্ষ্য হলো একজন দক্ষ ডেভেলপার হওয়া। এই লক্ষ্য সামনে রেখে আমি নিয়মিত নতুন জিনিস শিখছি, আমার দক্ষতা উন্নত করছি এবং প্রযুক্তি জগতে সফল ক্যারিয়ার গড়ার জন্য কাজ করে যাচ্ছি[span_5](start_span)[span_5](end_span)।
                </p>
            </section>

            <!-- সার্ভিস বা আমি যা করছি সেকশন -->
            <section class="service">
                <h3 class="h3 service-title">আমি যা করছি</h3>
                <ul class="service-list">
                    <li class="service-item">
                        <div class="service-icon-box"><i class="fa-solid fa-laptop-code"></i></div>
                        <div>
                            <h4 class="h4 service-item-title">ওয়েব ডিজাইন</h4>
                            <p class="service-item-text">প্রফেশনাল লেভেলে সবচেয়ে আধুনিক এবং আকর্ষণীয় হাই-কোয়ালিটি ডিজাইন তৈরি।</p>
                        </div>
                    </li>
                    <li class="service-item">
                        <div class="service-icon-box"><i class="fa-solid fa-code"></i></div>
                        <div>
                            <h4 class="h4 service-item-title">ওয়েব ডেভেলপমেন্ট</h4>
                            <p class="service-item-text">প্রফেশনাল মান বজায় রেখে উচ্চমানের ওয়েবসাইট ডেভেলপমেন্ট।</p>
                        </div>
                    </li>
                    <li class="service-item">
                        <div class="service-icon-box"><i class="fa-solid fa-mobile-screen-button"></i></div>
                        <div>
                            <h4 class="h4 service-item-title">মোবাইল অ্যাপস[span_11](start_span)[span_11](end_span)</h4>
                            <p class="service-item-text">অ্যান্ড্রয়েড এবং আইওএসের জন্য প্রফেশনাল ও আধুনিক অ্যাপ্লিকেশন ডেভেলপমেন্ট.</p>
                        </div>
                    </li>
                    <li class="service-item">
                        <div class="service-icon-box"><i class="fa-solid fa-camera-retro"></i></div>
                        <div>
                            <h4 class="h4 service-item-title">ফটোগ্রাফি[span_13](start_span)[span_13](end_span)</h4>
                            <p class="service-item-text">প্রফেশনাল লেভেলে যেকোনো ক্যাটাগরির আকর্ষণীয় ও মানসম্মত ছবি ধারণ.</p>
                        </div>
                    </li>
                    <li class="service-item">
                        <div class="service-icon-box"><i class="fa-solid fa-pen-nib"></i></div>
                        <div>
                            <h4 class="h4 service-item-title">লেখালেখি (Writing)[span_15](start_span)[span_15](end_span)</h4>
                            <p class="service-item-text">সৃজনশীল গল্প, আর্টিকেল এবং আকর্ষণীয় কন্টেন্ট রাইটিং.</p>
                        </div>
                    </li>
                    <li class="service-item">
                        <div class="service-icon-box"><i class="fa-solid fa-plane-departure"></i></div>
                        <div>
                            <h4 class="h4 service-item-title">ভ্রমণ ও এক্সপ্লোরিং</h4>
                            <p class="service-item-text">নতুন নতুন জায়গা ঘুরে দেখা এবং প্রকৃতির কাছাকাছি থেকে নতুন অভিজ্ঞতা অর্জন করা.</p>
                        </div>
                    </li>
                </ul>
            </section>

            <!-- টেস্টিমোনিয়াল বা ক্লায়েন্ট রিভিউ সেকশন -->
            <section class="testimonials">
                <h3 class="h3 testimonials-title">টেস্টিমোনিয়াল (মতামত)[span_19](start_span)[span_19](end_span)</h3>
                <ul class="testimonials-list">
                    <li class="testimonials-item">
                        <figure class="testimonials-avatar-box">
                            <img src="./assets/images/avatar-1.png" alt="রেজা ইসলাম">
                        </figure>
                        <h4 class="h4 testimonials-item-title">রেজা ইসলাম[span_20](start_span)[span_20](end_span)</h4>
                        <div class="testimonials-text">
                            <p>উৎসবকে একটি কর্পোরেট আইডেন্টিটি তৈরির জন্য নিয়োগ করা হয়েছিল। তার কাজ দেখে আমরা অত্যন্ত সন্তুষ্ট। তার কাজের অনেক অভিজ্ঞতা রয়েছে এবং ক্লায়েন্টের চাহিদাকে সে খুব গুরুত্ব দেয়।</p>
                        </div>
                    </li>
                    <li class="testimonials-item">
                        <figure class="testimonials-avatar-box">
                            <img src="./assets/images/avatar-2.png" alt="আব্দুল্লাহ আল মামুন">
                        </figure>
                        <h4 class="h4 testimonials-item-title">আব্দুল্লাহ আল মামুন[span_22](start_span)[span_22](end_span)</h4>
                        <div class="testimonials-text">
                            <p>উৎসবের কাজের হাত খুবই চমৎকার এবং সে সময়মতো প্রজেক্ট ডেলিভারি দেয়। তার ডিজাইন সেন্স দুর্দান্ত!</p>
                        </div>
                    </li>
                    <li class="testimonials-item">
                        <figure class="testimonials-avatar-box">
                            <img src="./assets/images/avatar-3.png" alt="মো. মুরসালিন পারভেজ">
                        </figure>
                        <h4 class="h4 testimonials-item-title">মো. মুরসালিন পারভেজ</h4>
                        <div class="testimonials-text">
                            <p>খুবই প্রফেশনাল এবং ফ্রেন্ডলি আচরণ। যেকোনো কাজ খুব নিখুঁতভাবে করতে পারে। ভবিষ্যতে তার সাথে আবারও কাজ করার ইচ্ছা আছে।</p>
                        </div>
                    </li>
                </ul>
            </section>

            <!-- ক্লায়েন্ট লোগো সেকশন -->
            <section class="clients">
                <h3 class="h3 clients-title">ক্লায়েন্টবৃন্দ[span_26](start_span)[span_26](end_span)</h3>
                <ul class="clients-list">
                    <li class="clients-item">
                        <a href="#"><img src="./assets/images/logo-1-color.png" alt="ক্লেন্ট লোগো"></a>
                    </li>
                    <li class="clients-item">
                        <a href="#"><img src="./assets/images/logo-2-color.png" alt="ক্লেন্ট লোগো"></a>
                    </li>
                    <li class="clients-item">
                        <a href="#"><img src="./assets/images/logo-3-color.png" alt="ক্লেন্ট লোগো"></a>
                    </li>
                    <li class="clients-item">
                        <a href="#"><img src="./assets/images/logo-4-color.png" alt="ক্লেন্ট লোগো"></a>
                    </li>
                </ul>
            </section>
        </div>

    </article>

    <script>
        // তীর চিহ্নে ক্লিক করলে মসৃণভাবে 'আমার সম্পর্কে' সেকশনে চলে যাওয়ার অটো-স্ক্রোল লজিক
        document.getElementById("scroll-to-about").addEventListener("click", () => {
            document.getElementById("about-heading-target").scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    </script>
    `;
};
