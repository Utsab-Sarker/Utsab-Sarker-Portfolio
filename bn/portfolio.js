window.renderSection = function(container) {
    container.innerHTML = `
    <style>
        /* Fade In / Fade Out Animation Base Classes */
        .fade-section {
            opacity: 0;
            transform: translateY(40px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
            will-change: opacity, transform;
            scroll-margin-top: 100px;
        }

        .fade-section.in-view {
            opacity: 1;
            transform: translateY(0);
        }

        .article-title {
            font-size: 1.8rem;
            font-weight: 800;
            color: var(--text-main);
            margin-bottom: 20px;
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

        /* Quick Navigation Bar (Quick Scroll Options) */
        .resume-nav-bar {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-bottom: 35px;
            background: var(--card-bg);
            padding: 15px;
            border-radius: 14px;
            border: 1px solid var(--border-color);
            box-shadow: 0 4px 15px rgba(0,0,0,0.02);
        }

        .resume-nav-btn {
            background: var(--bg-color);
            color: var(--text-main);
            border: 1px solid var(--border-color);
            padding: 8px 16px;
            border-radius: 10px;
            font-size: 0.85rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .resume-nav-btn:hover {
            background: var(--primary-color);
            color: #ffffff;
            border-color: var(--primary-color);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px var(--shadow-color);
        }

        .resume-nav-btn i {
            font-size: 0.9rem;
        }

        /* Timeline / Resume Section Styling */
        .timeline {
            margin-bottom: 40px;
            background: var(--card-bg);
            padding: 30px;
            border-radius: 16px;
            border: 1px solid var(--border-color);
            box-shadow: 0 4px 15px rgba(0,0,0,0.03);
        }

        .title-wrapper {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 25px;
        }

        .title-wrapper .icon-box {
            width: 45px;
            height: 45px;
            background: var(--accent-color);
            border: 1px solid #bfdbfe;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--primary-color);
            font-size: 1.2rem;
            flex-shrink: 0;
        }

        .title-wrapper .h3 {
            font-size: 1.3rem;
            font-weight: 700;
            color: var(--text-main);
        }

        .timeline-list {
            list-style: none;
            position: relative;
            padding-left: 20px;
            border-left: 2px solid var(--border-color);
            display: flex;
            flex-direction: column;
            gap: 25px;
        }

        .timeline-item {
            position: relative;
        }

        .timeline-item::before {
            content: '';
            position: absolute;
            top: 5px;
            left: -27px;
            width: 12px;
            height: 12px;
            background: var(--card-bg);
            border: 2px solid var(--primary-color);
            border-radius: 50%;
            box-shadow: 0 0 0 4px var(--accent-color);
        }

        .timeline-item-title {
            font-size: 1.05rem;
            font-weight: 700;
            color: var(--text-main);
            margin-bottom: 5px;
        }

        .timeline-item-subtitle {
            font-size: 0.85rem;
            color: var(--text-muted);
            font-weight: 600;
            margin-bottom: 6px;
        }

        .grade-box {
            margin-bottom: 6px;
        }

        .grade-score {
            color: var(--primary-color);
            font-weight: 700;
        }

        .timeline-item span.time-badge {
            display: inline-block;
            font-size: 0.78rem;
            color: var(--primary-color);
            font-weight: 700;
            background: var(--accent-color);
            padding: 3px 10px;
            border-radius: 6px;
            margin-bottom: 10px;
            border: 1px solid #bfdbfe;
        }

        .timeline-text {
            font-size: 0.88rem;
            color: var(--text-muted);
            line-height: 1.6;
        }

        /* Skills Section Styling */
        .skill {
            background: var(--card-bg);
            padding: 30px;
            border-radius: 16px;
            border: 1px solid var(--border-color);
            box-shadow: 0 4px 15px rgba(0,0,0,0.03);
            margin-bottom: 40px;
        }

        .skills-title {
            font-size: 1.3rem;
            font-weight: 700;
            color: var(--text-main);
            margin-bottom: 20px;
        }

        .skills-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .skills-item .title-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;
        }

        .skills-item .title-wrapper .h5 {
            font-size: 0.95rem;
            font-weight: 700;
            color: var(--text-main);
        }

        .skills-item .title-wrapper data {
            font-size: 0.85rem;
            font-weight: 700;
            color: var(--primary-color);
        }

        .skill-progress-bg {
            background: var(--bg-color);
            width: 100%;
            height: 10px;
            border-radius: 5px;
            overflow: hidden;
            border: 1px solid var(--border-color);
        }

        .skill-progress-fill {
            background: var(--primary-color);
            height: 100%;
            border-radius: 5px;
            transition: width 1s ease-in-out;
        }

        /* My Tools Section (Grid Layout matching the screenshot) */
        .tools-section {
            background: var(--card-bg);
            padding: 30px;
            border-radius: 16px;
            border: 1px solid var(--border-color);
            box-shadow: 0 4px 15px rgba(0,0,0,0.03);
            margin-bottom: 40px;
        }

        .tools-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }

        .tool-card {
            background: #111827; /* ছবিটির ডার্ক নাইট থিমের ব্যাকগ্রাউন্ড */
            border: 1px solid #1f2937;
            border-radius: 14px;
            padding: 20px 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 12px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .tool-card:hover {
            transform: translateY(-5px);
            border-color: var(--primary-color);
            box-shadow: 0 8px 20px rgba(37, 99, 235, 0.25);
        }

        .tool-card i {
            font-size: 2.2rem;
            color: #9ca3af;
            transition: color 0.3s ease;
        }

        .tool-card img {
            width: 38px;
            height: 38px;
            object-fit: contain;
            filter: grayscale(80%) brightness(120%);
            transition: filter 0.3s ease;
        }

        .tool-card:hover i {
            color: #60a5fa;
        }

        .tool-card:hover img {
            filter: grayscale(0%) brightness(100%);
        }

        .tool-name {
            font-size: 0.78rem;
            font-weight: 600;
            color: #9ca3af;
            letter-spacing: 0.02em;
            text-align: center;
        }

        .tool-card:hover .tool-name {
            color: #f3f4f6;
        }

        /* Download Resume Action Section */
        .resume-download-box {
            background: var(--card-bg);
            padding: 40px 20px;
            border-radius: 16px;
            border: 1px solid var(--border-color);
            box-shadow: 0 4px 15px rgba(0,0,0,0.03);
            text-align: center;
            margin-bottom: 20px;
            scroll-margin-top: 120px;
        }

        .resume-download-btn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: var(--primary-color);
            color: #ffffff !important;
            font-size: 1rem;
            font-weight: 700;
            padding: 14px 32px;
            border-radius: 12px;
            text-decoration: none;
            box-shadow: 0 6px 20px var(--shadow-color);
            transition: all 0.3s ease;
            border: 1px solid transparent;
        }

        .resume-download-btn:hover {
            background: #1d4ed8;
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
        }

        @media (max-width: 900px) {
            .fade-section {
                scroll-margin-top: 120px;
            }
            .timeline, .skill, .tools-section, .resume-download-box {
                padding: 20px;
            }
            .tools-grid {
                grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
                gap: 12px;
            }
            .tool-card {
                padding: 15px 8px;
            }
            .tool-card i {
                font-size: 1.8rem;
            }
        }
    </style>

    <article class="resume active" data-page="resume">

        <!-- হেডার ও কুইক নেভিগেশন বার -->
        <div class="fade-section">
            <header>
                <h2 class="h2 article-title">জীবনবৃত্তান্ত (Resume)</h2>
            </header>

            <div class="resume-nav-bar">
                <button class="resume-nav-btn" data-target="section-experience">
                    <i class="fa-solid fa-briefcase"></i> কাজের অভিজ্ঞতা
                </button>
                <button class="resume-nav-btn" data-target="section-education">
                    <i class="fa-solid fa-graduation-cap"></i> শিক্ষাগত যোগ্যতা
                </button>
                <button class="resume-nav-btn" data-target="section-olympiads">
                    <i class="fa-solid fa-award"></i> অলিম্পিয়াড ও ইভেন্ট
                </button>
                <button class="resume-nav-btn" data-target="section-organizations">
                    <i class="fa-solid fa-users"></i> ক্লাব ও সংগঠনসমূহ
                </button>
                <button class="resume-nav-btn" data-target="section-skills">
                    <i class="fa-solid fa-chart-line"></i> আমার দক্ষতা
                </button>
                <button class="resume-nav-btn" data-target="section-tools">
                    <i class="fa-solid fa-screwdriver-wrench"></i> আমার টুলস
                </button>
                <button class="resume-nav-btn" data-target="section-download-resume">
                    <i class="fa-solid fa-file-arrow-down"></i> জীবনবৃত্তান্ত ডাউনলোড
                </button>
            </div>
        </div>

        <!-- ১. কাজের অভিজ্ঞতা (Work Experience) -->
        <div class="fade-section" id="section-experience">
            <section class="timeline">
                <div class="title-wrapper">
                    <div class="icon-box">
                        <i class="fa-solid fa-briefcase"></i>
                    </div>
                    <h3 class="h3">কাজের অভিজ্ঞতা</h3>
                </div>

                <ol class="timeline-list">
                    <li class="timeline-item">
                        <h4 class="h4 timeline-item-title" style="display: flex; align-items: center; gap: 8px;">
                            <a href="https://prothomalo.com/" target="_blank" style="display: flex; align-items: center; gap: 8px; text-decoration: none; color: inherit;">
                                <img src="https://media.prothomalo.com/prothomalo-bangla/2025-11-17/qix5skks/palo-bangla.svg" alt="Prothom Alo Logo" style="width: 22px; height: 22px; border-radius: 50%; object-fit: cover;">
                                প্রথম আলো
                            </a>
                        </h4>
                        <span class="time-badge">• ০১ জুলাই, ২০২৫ - বর্তমান</span>
                        <div class="grade-box">
                            <h5 class="h5 timeline-item-subtitle">প্রদায়ক, ইভেন্ট বিভাগ</h5>
                        </div>
                    </li>
                </ol>
            </section>
        </div>

        <!-- ২. শিক্ষাগত যোগ্যতা (Education) -->
        <div class="fade-section" id="section-education">
            <section class="timeline">
                <div class="title-wrapper">
                    <div class="icon-box">
                        <i class="fa-solid fa-graduation-cap"></i>
                    </div>
                    <h3 class="h3">শিক্ষাগত যোগ্যতা</h3>
                </div>

                <ol class="timeline-list">
                    <li class="timeline-item">
                        <h4 class="h4 timeline-item-title">🎓 উচ্চ মাধ্যমিক স্কুল সার্টিফিকেট (HSC)</h4>
                        <h5 class="h5 timeline-item-subtitle">𖠿 রাজশাহী গভঃ মডেল স্কুল অ্যান্ড কলেজ, রাজশাহী</h5>
                        <div class="grade-box">
                            <h5 class="h5 timeline-item-subtitle">
                                ✍︎ গ্রেড <span class="grade-score">৪.৮৩</span> (৫.০০ এর মধ্যে)
                            </h5>
                        </div>
                        <span class="time-badge">২০২২-২০২৪</span>
                        <p class="timeline-text">
                            নেমো এনিম্স ইপসাম ভলুপতাতেম, ব্ল্যান্ডিটিস প্রাইজেন্টিয়াম ভলুপতুম ডেলেনিত আতকে কর্রুপতি, কোস দোলোরেস এত কোয়াস মোলুসতিয়াস একসেপচুর।
                        </p>
                    </li>

                    <li class="timeline-item">
                        <h4 class="h4 timeline-item-title">🎓 মাধ্যমিক স্কুল সার্টিফিকেট (SSC)</h4>
                        <h5 class="h5 timeline-item-subtitle">𖠿 কালিগ্রাম দোদংগী উচ্চ বিদ্যালয়, মান্দা, নওগাঁ</h5>
                        <div class="grade-box">
                            <h5 class="h5 timeline-item-subtitle">
                                ✍︎ গ্রেড <span class="grade-score">৫.০০</span> (৫.০০ এর মধ্যে)
                            </h5>
                        </div>
                        <span class="time-badge">২০২০-২০২২</span>
                        <p class="timeline-text">
                            নেমো এনিম্স ইপসাম ভলুপতাতেম, ব্ল্যান্ডিটিস প্রাইজেন্টিয়াম ভলুপতুম ডেলেনিত আতকে কর্রুপতি, কোস দোলোরেস এত কোয়াস মোলুসতিয়াস একসেপচুর।
                        </p>
                    </li>

                    <li class="timeline-item">
                        <h4 class="h4 timeline-item-title">🎓 জুনিয়র স্কুল সার্টিফিকেট (JSC)</h4>
                        <h5 class="h5 timeline-item-subtitle">𖠿 কালিগ্রাম দোদংগী উচ্চ বিদ্যালয়, মান্দা, নওগাঁ</h5>
                        <div class="grade-box">
                            <h5 class="h5 timeline-item-subtitle">
                                ✍︎ গ্রেড <span class="grade-score">৫.০০</span> (৫.০০ এর মধ্যে)
                            </h5>
                        </div>
                        <span class="time-badge">২০১৭-২০১৯</span>
                        <p class="timeline-text">
                            আমার প্রাথমিক শিক্ষা সমাপনী (PSC) পরীক্ষা শেষ করার পরে, আমি ষষ্ঠ শ্রেণীতে কালিগ্রাম দোদংগী উচ্চ বিদ্যালয়ে ভর্তি হই। আমি অষ্টম শ্রেণী পর্যন্ত সেখানে পড়াশোনা চালিয়ে যাই। পরবর্তীতে, আমি জুনিয়র স্কুল সার্টিফিকেট (JSC) পরীক্ষায় অংশগ্রহণ করি এবং সফলভাবে পাস করি।
                        </p>
                    </li>

                    <li class="timeline-item">
                        <h4 class="h4 timeline-item-title">🎓 প্রাথমিক শিক্ষা সমাপনী (PSC)</h4>
                        <h5 class="h5 timeline-item-subtitle">𖠿 কালিগ্রাম কীর্ত্তলী সরকারি প্রাথমিক বিদ্যালয়, মান্দা, নওগাঁ</h5>
                        <div class="grade-box">
                            <h5 class="h5 timeline-item-subtitle">
                                ✍︎ গ্রেড <span class="grade-score">৫.০০</span> (৫.০০ এর মধ্যে)
                            </h5>
                        </div>
                        <span class="time-badge">২০১১-২০১৬</span>
                        <p class="timeline-text">
                            আমি ২০১১ সালে আমার নিজ গ্রামের বরমল্লুক সরকারি প্রাথমিক বিদ্যালয়ের প্রাক-প্রাথমিক শ্রেণীতে ভর্তি হয়ে আমার শিক্ষাজীবন শুরু করি। চতুর্থ শ্রেণী পর্যন্ত আমি সেখানেই পড়াশোনা করেছি। পরবর্তীতে, পঞ্চম শ্রেণীর জন্য পার্শ্ববর্তী গ্রামের কালিগ্রাম কীর্ত্তলী সরকারি প্রাথমিক বিদ্যালয়ে ভর্তি হই এবং সেখান থেকেই আমার প্রাথমিক শিক্ষা সমাপনী (PSC) পরীক্ষা সম্পন্ন করি।
                        </p>
                    </li>
                </ol>
            </section>
        </div>

        <!-- ৩. অলিম্পিয়াড ও ইভেন্ট অর্গানাইজেশন (নতুন শুরু হওয়াগুলো উপরে, পুরানগুলো নিচে) -->
        <div class="fade-section" id="section-olympiads">
            <section class="timeline">
                <div class="title-wrapper">
                    <div class="icon-box">
                        <i class="fa-solid fa-award"></i>
                    </div>
                    <h3 class="h3">অলিম্পিয়াড ও ইভেন্ট অর্গানাইজেশন</h3>
                </div>

                <ol class="timeline-list">

                    <!-- ১. বাংলাদেশ রোবট অলিম্পিয়াড (শুরু: ১ জুন ২০২৬) -->
                    <li class="timeline-item">
                        <h4 class="h4 timeline-item-title" style="display: flex; align-items: center; gap: 8px;">
                            <a href="https://bdro.org/" target="_blank" style="display: flex; align-items: center; gap: 8px; text-decoration: none; color: inherit;">
                                <img src="https://bdro.org/wp-content/uploads/2023/12/cropped-BDRO-logo-scaled-1536x427.png" alt="BDRO Logo" style="width: 22px; height: 22px; border-radius: 50%; object-fit: cover;">
                                বাংলাদেশ রোবট অলিম্পিয়াড
                            </a>
                        </h4>
                        <span class="time-badge">• ০১ জুন, ২০২৬ - বর্তমান</span>
                        <div class="grade-box">
                            <h5 class="h5 timeline-item-subtitle">ভলান্টিয়ার</h5>
                        </div>
                    </li>

                    <!-- ২. বাংলাদেশ আর্টিফিশিয়াল ইন্টেলিজেন্স অলিম্পিয়াড (শুরু: ১ এপ্রিল ২০২৬) -->
                    <li class="timeline-item">
                        <h4 class="h4 timeline-item-title" style="display: flex; align-items: center; gap: 8px;">
                            <a href="https://bdaio.org" target="_blank" style="display: flex; align-items: center; gap: 8px; text-decoration: none; color: inherit;">
                                <img src="https://i0.wp.com/bdaio.org/wp-content/uploads/2026/10/bdaio-logo.webp?fit=256%2C95&ssl=1" alt="BDAIO Logo" style="width: 22px; height: 22px; border-radius: 50%; object-fit: cover;">
                                বাংলাদেশ আর্টিফিশিয়াল ইন্টেলিজেন্স অলিম্পিয়াড
                            </a>
                        </h4>
                        <span class="time-badge">• ০১ এপ্রিল, ২০২৬ - বর্তমান</span>
                        <div class="grade-box">
                            <h5 class="h5 timeline-item-subtitle">সহ-সমন্বয়ক</h5>
                        </div>
                    </li>

                    <!-- ৩. বাংলাদেশ জুনিয়র সায়েন্স অলিম্পিয়াড (শুরু: ১ জুন ২০২৫) -->
                    <li class="timeline-item">
                        <h4 class="h4 timeline-item-title" style="display: flex; align-items: center; gap: 8px;">
                            <a href="https://bdjso.org" target="_blank" style="display: flex; align-items: center; gap: 8px; text-decoration: none; color: inherit;">
                                <img src="https://online.bdjso.org/img/logos/bdjso_logo.webp" alt="BDJSO Logo" style="width: 22px; height: 22px; border-radius: 50%; object-fit: cover;">
                                বাংলাদেশ জুনিয়র সায়েন্স অলিম্পিয়াড
                            </a>
                        </h4>
                        <span class="time-badge">• ০১ জুন, ২০২৫ - বর্তমান</span>
                        <div class="grade-box">
                            <h5 class="h5 timeline-item-subtitle">সহ-সমন্বয়ক</h5>
                        </div>
                    </li>

                    <!-- ৪. বাংলাদেশ গণিত এবং বিজ্ঞান অলিম্পিয়াড (শুরু: ১ জানুয়ারি ২০২৫) -->
                    <li class="timeline-item">
                        <h4 class="h4 timeline-item-title" style="display: flex; align-items: center; gap: 8px;">
                            <a href="https://bdmso.org/" target="_blank" style="display: flex; align-items: center; gap: 8px; text-decoration: none; color: inherit;">
                                <img src="https://bdmso.org/_astro/logo.B5mgOyZ5_1OJ0hF.avif" alt="BDMSO Logo" style="width: 22px; height: 22px; border-radius: 50%; object-fit: cover;">
                                বাংলাদেশ গণিত এবং বিজ্ঞান অলিম্পিয়াড
                            </a>
                        </h4>
                        <span class="time-badge">• ০১ জানুয়ারি, ২০২৫ - বর্তমান</span>
                        <div class="grade-box">
                            <h5 class="h5 timeline-item-subtitle">ভলান্টিয়ার</h5>
                        </div>
                    </li>

                    <!-- ৫. বাংলাদেশ ওয়াইল্ডলাইফ অলিম্পিয়াড ২০২৪ (শুরু: ১ মার্চ ২০২৪) -->
                    <li class="timeline-item">
                        <h4 class="h4 timeline-item-title" style="display: flex; align-items: center; gap: 8px;">
                            <a href="https://www.bfdwlo.org" target="_blank" style="display: flex; align-items: center; gap: 8px; text-decoration: none; color: inherit;">
                                <img src="https://www.facebook.com/share/19NLKi5BfN/" alt="Wildlife Olympiad Logo" style="width: 22px; height: 22px; border-radius: 50%; object-fit: cover;">
                                বাংলাদেশ ওয়াইল্ডলাইফ অলিম্পিয়াড ২০২৪
                            </a>
                        </h4>
                        <span class="time-badge">• ০১ মার্চ, ২০২৪ - ২০ ফেব্রুয়ারি, ২০২৫</span>
                        <div class="grade-box">
                            <h5 class="h5 timeline-item-subtitle">সহ-সমন্বয়ক</h5>
                        </div>
                    </li>

                    <!-- ৬. স্বাস্থ্য অলিম্পিয়াড ২০২৪ (শুরু: ৯ আগস্ট ২০২৩) -->
                    <li class="timeline-item">
                        <h4 class="h4 timeline-item-title" style="display: flex; align-items: center; gap: 8px;">
                            <a href="http://services.prothomalo.com/health-quiz/" target="_blank" style="display: flex; align-items: center; gap: 8px; text-decoration: none; color: inherit;">
                                <img src="https://services.prothomalo.com/health-quiz/images/mnemonic.png" alt="Health Olympiad Logo" style="width: 22px; height: 22px; border-radius: 50%; object-fit: cover;">
                                স্বাস্থ্য অলিম্পিয়াড ২০২৪
                            </a>
                        </h4>
                        <span class="time-badge">• ০৯ আগস্ট, ২০২৩ - ০৭ সেপ্টেম্বর, ২০২৪</span>
                        <div class="grade-box">
                            <h5 class="h5 timeline-item-subtitle">জেলা আয়োজক</h5>
                        </div>
                    </li>

                    <!-- ৭. শিখো প্রথম আলো জিপিএ ৫ প্রাপ্ত কৃতি সংবর্ধনা (শুরু: ১ ফেব্রুয়ারি ২০২৩) -->
                    <li class="timeline-item">
                        <h4 class="h4 timeline-item-title" style="display: flex; align-items: center; gap: 8px;">
                            <a href="https://www.gpa5reception.com/" target="_blank" style="display: flex; align-items: center; gap: 8px; text-decoration: none; color: inherit;">
                                <img src="https://www.gpa5reception.com/2026/assets/logo/gpa5-logo.svg" alt="GPA 5 Reception Logo" style="width: 22px; height: 22px; border-radius: 50%; object-fit: cover;">
                                শিখো প্রথম আলো জিপিএ ৫ প্রাপ্ত কৃতি সংবর্ধনা
                            </a>
                        </h4>
                        <span class="time-badge">• ০১ জুলাই, ২০২৫ - বর্তমান</span>
                        <div class="grade-box">
                            <h5 class="h5 timeline-item-subtitle">সমন্বয়ক (দেশব্যাপী)</h5>
                        </div>
                        <p style="color: var(--text-muted); font-size: 0.8rem; margin: 4px 0;">╰──────╮</p>
                        <span class="time-badge">• ০১ ফেব্রুয়ারি, ২০২৩ - ২০ অক্টোবর, ২০২৫</span>
                        <div class="grade-box">
                            <h5 class="h5 timeline-item-subtitle">জেলা আয়োজক (রাজশাহী জেলা)</h5>
                        </div>
                    </li>

                    <!-- ৮. বাংলাদেশ ফিজিক্স অলিম্পিয়াড (শুরু: ১ জানুয়ারি ২০২৩) -->
                    <li class="timeline-item">
                        <h4 class="h4 timeline-item-title" style="display: flex; align-items: center; gap: 8px;">
                            <a href="https://bdpho.org" target="_blank" style="display: flex; align-items: center; gap: 8px; text-decoration: none; color: inherit;">
                                <img src="https://admin.bdpho.org/assets/images/1639306091_bdphologo.jpg" alt="BdPhO Logo" style="width: 22px; height: 22px; border-radius: 50%; object-fit: cover;">
                                বাংলাদেশ ফিজিক্স অলিম্পিয়াড
                            </a>
                        </h4>
                        <span class="time-badge">• ০১ জানুয়ারি, ২০২৩ - ৩১ ডিসেম্বর, ২০২৫</span>
                        <div class="grade-box">
                            <h5 class="h5 timeline-item-subtitle">আঞ্চলিক আয়োজক (রাজশাহী অঞ্চল)</h5>
                        </div>
                    </li>

                    <!-- ৯. বাংলাদেশ গণিত অলিম্পিয়াড (শুরু: ১ জানুয়ারি ২০২৩) -->
                    <li class="timeline-item">
                        <h4 class="h4 timeline-item-title" style="display: flex; align-items: center; gap: 8px;">
                            <a href="https://matholympiad.org.bd" target="_blank" style="display: flex; align-items: center; gap: 8px; text-decoration: none; color: inherit;">
                                <img src="https://matholympiad.org.bd/img/logo-with-text.jpg" alt="Math Olympiad Logo" style="width: 22px; height: 22px; border-radius: 50%; object-fit: cover;">
                                বাংলাদেশ গণিত অলিম্পিয়াড
                            </a>
                        </h4>
                        <span class="time-badge">• ০১ নভেম্বর, ২০২৫ - বর্তমান</span>
                        <div class="grade-box">
                            <h5 class="h5 timeline-item-subtitle">মুভার্স</h5>
                        </div>
                        <p style="color: var(--text-muted); font-size: 0.8rem; margin: 4px 0;">╰──────╮</p>
                        <span class="time-badge">• ০১ জানুয়ারি, ২০২৩ - ৩১ অক্টোবর, ২০২৫</span>
                        <div class="grade-box">
                            <h5 class="h5 timeline-item-subtitle">আঞ্চলিক আয়োজক (রাজশাহী অঞ্চল)</h5>
                        </div>
                    </li>

                </ol>
            </section>
        </div>

        <!-- ৪. ক্লাব ও সংগঠনসমূহ (নতুন শুরু হওয়াগুলো উপরে, পুরানগুলো নিচে) -->
        <div class="fade-section" id="section-organizations">
            <section class="timeline">
                <div class="title-wrapper">
                    <div class="icon-box">
                        <i class="fa-solid fa-users"></i>
                    </div>
                    <h3 class="h3">ক্লাব ও সংগঠনসমূহ</h3>
                </div>

                <ol class="timeline-list">

                    <!-- ১. আগামীর সময় ক্যারিয়ার ক্লাব (শুরু: ২২ মে ২০২৬) -->
                    <li class="timeline-item">
                        <h4 class="h4 timeline-item-title" style="display: flex; align-items: center; gap: 8px;">
                            <a href="https://www.agamirsomoy.com/" target="_blank" style="display: flex; align-items: center; gap: 8px; text-decoration: none; color: inherit;">
                                <img src="https://www.agamirsomoy.com/_next/static/media/career-club.fa63c918.jpeg" alt="Carrier Club Logo" style="width: 22px; height: 22px; border-radius: 50%; object-fit: cover;">
                                আগামীর সময় ক্যারিয়ার ক্লাব (Agamir Shomoy Career Club)
                            </a>
                        </h4>
                        <span class="time-badge">• ২২ মে, ২০২৬ - বর্তমান</span>
                        <div class="grade-box">
                            <h5 class="h5 timeline-item-subtitle">সদস্য (Member)</h5>
                        </div>
                        <p class="timeline-text">
                            সম্প্রতি, আমি 'আগামীর সময় ক্যারিয়ার ক্লাব'-এ যুক্ত হয়েছি, যা ক্যারিয়ার-কেন্দ্রিক সেমিনার, প্রশিক্ষণ সেশন এবং দক্ষতা উন্নয়নমূলক কার্যক্রমের মাধ্যমে তরুণদের দিকনির্দেশনা ও ক্ষমতায়ন প্রদানে নিবেদিত একটি প্ল্যাটফর্ম। এই ক্লাবের মাধ্যমে আমি সঠিক ক্যারিয়ার গাইডেন্স অর্জন করতে, আমার যোগাযোগ ও নেতৃত্ব দেওয়ার ক্ষমতা বাড়াতে এবং ভবিষ্যতের জন্য একজন দক্ষ ও যোগ্য ব্যক্তি হিসেবে নিজেকে প্রস্তুত করতে আশা রাখি।
                        </p>
                    </li>

                    <!-- ২. রাজশাহী অলিম্পিয়াড সোসাইটি (শুরু: ১ এপ্রিল ২০২৬) -->
                    <li class="timeline-item">
                        <h4 class="h4 timeline-item-title" style="display: flex; align-items: center; gap: 8px;">
                            <a href="https://rosociety.vercel.app" target="_blank" style="display: flex; align-items: center; gap: 8px; text-decoration: none; color: inherit;">
                                <img src="https://rosociety.vercel.app/ros%20logo.png" alt="RO Society Logo" style="width: 22px; height: 22px; border-radius: 50%; object-fit: cover;">
                                রাজশাহী অলিম্পিয়াড সোসাইটি
                            </a>
                        </h4>
                        <span class="time-badge">• ০১ এপ্রিল, ২০২৬ - বর্তমান</span>
                        <div class="grade-box">
                            <h5 class="h5 timeline-item-subtitle">প্রতিষ্ঠাতা ও পরিচালক</h5>
                        </div>
                    </li>

                    <!-- ৩. প্রথম আলো বন্ধুসভা, ঢাকা মহানগর (শুরু: ১ জুলাই ২০২৫) -->
                    <li class="timeline-item">
                        <h4 class="h4 timeline-item-title" style="display: flex; align-items: center; gap: 8px;">
                            <a href="https://www.bondhushava.com/" target="_blank" style="display: flex; align-items: center; gap: 8px; text-decoration: none; color: inherit;">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYVoxdGE3XfP49zUA-AySViB1J1dc1CEkbMA&s" alt="Bondhushava Logo" style="width: 22px; height: 22px; border-radius: 50%; object-fit: cover;">
                                প্রথম আলো বন্ধুসভা, ঢাকা মহানগর
                            </a>
                        </h4>
                        <span class="time-badge">• ০১ জুলাই, ২০২৫ - বর্তমান</span>
                        <div class="grade-box">
                            <h5 class="h5 timeline-item-subtitle">সাধারণ সদস্য (General Member)</h5>
                        </div>
                        <p class="timeline-text">
                            ২০২৫ সালের মাঝামা সময়ে আমি ঢাকায় আসি এবং সরাসরি প্রথম আলো বন্ধুসভা, ঢাকা মহানগরের সাথে যুক্ত হই। তখন থেকেই আমি বিভিন্ন সাংগঠনিক, সাংস্কৃতিক ও সামাজিক কার্যক্রমে সক্রিয়ভাবে অংশগ্রহণ করে আসছি এবং স্বেচ্ছাসেবা, ইভেন্ট ম্যানেজমেন্ট ও সমাজ-কেন্দ্রিক উদ্যোগে আমার সম্পৃক্ততা অব্যাহত রেখেছি।
                        </p>
                    </li>

                    <!-- ৪. বাংলাদেশ বিজ্ঞান জনপ্রিয়করণ সমিতি (শুরু: ১ জুলাই ২০২৫) -->
                    <li class="timeline-item">
                        <h4 class="h4 timeline-item-title" style="display: flex; align-items: center; gap: 8px;">
                            <a href="https://spsb.org/" target="_blank" style="display: flex; align-items: center; gap: 8px; text-decoration: none; color: inherit;">
                                <img src="https://spsb.org/wp-content/uploads/2023/12/Unknown-removebg-preview.png" alt="SPSB Logo" style="width: 22px; height: 22px; border-radius: 50%; object-fit: cover;">
                                বাংলাদেশ বিজ্ঞান জনপ্রিয়করণ সমিতি (SPSB)
                            </a>
                        </h4>
                        <span class="time-badge">• ০১ জুলাই, ২০২৫ - বর্তমান</span>
                        <div class="grade-box">
                            <h5 class="h5 timeline-item-subtitle">স্বেচ্ছাসেবক (Volunteer)</h5>
                        </div>
                        <p class="timeline-text">
                            ঢাকায় আসার পর, আমি বন্ধুসভার পাশাপাশি এসপিএসবি (SPSB), বিডিওএসএন (BDOSN) এবং মাসল্যাব (MASLAB)-সহ বেশ কয়েকটি সংগঠনের সাথে স্বেচ্ছাসেবক হিসেবে যুক্ত হই। বিভিন্ন কার্যক্রম ও প্রোগ্রামে অংশগ্রহণের মাধ্যমে আমি যোগাযোগ, নেতৃত্ব, দলগত কাজ এবং সাংগঠনিক দক্ষতা উন্নয়নে কাজ করে যাচ্ছি।
                        </p>
                    </li>

                    <!-- ৫. বাংলাদেশ ওপেন সোর্স নেটওয়ার্ক (শুরু: ১ জুলাই ২০২৫) -->
                    <li class="timeline-item">
                        <h4 class="h4 timeline-item-title" style="display: flex; align-items: center; gap: 8px;">
                            <a href="https://www.bdosn.org/" target="_blank" style="display: flex; align-items: center; gap: 8px; text-decoration: none; color: inherit;">
                                <img src="https://www.bdosn.org/images/bdosn-logo-128.png" alt="BdOSN Logo" style="width: 22px; height: 22px; border-radius: 50%; object-fit: cover;">
                                বাংলাদেশ ওপেন সোর্স নেটওয়ার্ক (BdOSN)
                            </a>
                        </h4>
                        <span class="time-badge">• ০১ জুলাই, ২০২৫ - বর্তমান</span>
                        <div class="grade-box">
                            <h5 class="h5 timeline-item-subtitle">স্বেচ্ছাসেবক (Volunteer)</h5>
                        </div>
                    </li>

                    <!-- ৬. মাকসুদুল আলম সায়েন্স ল্যাবরেটরি (শুরু: ১ জুলাই ২০২৫) -->
                    <li class="timeline-item">
                        <h4 class="h4 timeline-item-title" style="display: flex; align-items: center; gap: 8px;">
                            <a href="https://maslab.org/" target="_blank" style="display: flex; align-items: center; gap: 8px; text-decoration: none; color: inherit;">
                                <img src="https://maslab.org/wp-content/uploads/2024/03/MASLab-Logo-1-1.png" alt="MASLab Logo" style="width: 22px; height: 22px; border-radius: 50%; object-fit: cover;">
                                মাকসুদুল আলম সায়েন্স ল্যাবরেটরি (MASLab)
                            </a>
                        </h4>
                        <span class="time-badge">• ০১ জুলাই, ২০২৫ - বর্তমান</span>
                        <div class="grade-box">
                            <h5 class="h5 timeline-item-subtitle">স্বেচ্ছাসেবক (Volunteer)</h5>
                        </div>
                    </li>

                    <!-- ৭. প্রথম আলো বন্ধুসভা, রাজশাহী (শুরু: ১ জানুয়ারি ২০২৩) -->
                    <li class="timeline-item">
                        <h4 class="h4 timeline-item-title" style="display: flex; align-items: center; gap: 8px;">
                            <a href="https://pabsraj.wordpress.com/" target="_blank" style="display: flex; align-items: center; gap: 8px; text-decoration: none; color: inherit;">
                                <img src="https://pabsraj.wordpress.com/wp-content/uploads/2024/09/cropped-picsart_24-06-13_12-40-57-801.png" alt="PABSRaj Logo" style="width: 22px; height: 22px; border-radius: 50%; object-fit: cover;">
                                প্রথম আলো বন্ধুসভা, রাজশাহী
                            </a>
                        </h4>
                        <span class="time-badge">• ০১ জানুয়ারি, ২০২৫ - ৩১ ডিসেম্বর, ২০২৫</span>
                        <div class="grade-box">
                            <h5 class="h5 timeline-item-subtitle">সহ-সভাপতি (Vice President)</h5>
                        </div>
                        <p style="color: var(--text-muted); font-size: 0.8rem; margin: 4px 0;">╰──────╮</p>
                        <span class="time-badge">• ০১ জানুয়ারি, ২০২৪ - ৩১ ডিসেম্বর, ২০২৪</span>
                        <div class="grade-box">
                            <h5 class="h5 timeline-item-subtitle">সাধারণ সম্পাদক (General Secretary)</h5>
                        </div>
                        <p style="color: var(--text-muted); font-size: 0.8rem; margin: 4px 0;">╰──────╮</p>
                        <span class="time-badge">• ০১ জানুয়ারি, ২০২৩ - ৩১ ডিসেম্বর, ২০২৩</span>
                        <div class="grade-box">
                            <h5 class="h5 timeline-item-subtitle">কার্যকরী সদস্য (Executive Member)</h5>
                        </div>
                        <p class="timeline-text" style="margin-top: 10px;">
                            ২০২৩ থেকে ২০২৫ সাল পর্যন্ত আমি প্রথম আলো বন্ধুসভা, রাজশাহীর সাথে বিভিন্ন মেয়াদে ও পদে সক্রিয়ভাবে কাজ করেছি, যা বিভিন্ন সাংগঠনিক ও সামাজিক কার্যক্রমের পরিকল্পনা ও বাস্তবায়নে অবদান রেখেছে। এই সময়ে আমি সাংস্কৃতিক অনুষ্ঠান, স্বেচ্ছাসেবা উদ্যোগ, সাহিত্য কার্যক্রম এবং সামাজিক সচেতনতামূলক ক্যাম্পেইন আয়োজনের অভিজ্ঞতা অর্জন করেছি। দলগত কাজ, নেতৃত্ব এবং সমন্বয়ের মাধ্যমে আমি সংগঠনের কার্যক্রমকে আরও আকর্ষণীয় ও প্রভাবশালী করে তুলতে ভূমিকা পালন করেছি।
                        </p>
                    </li>

                </ol>
            </section>
        </div>

        <!-- ৫. আমার দক্ষতা (My Skills - Canva & More Added) -->
        <div class="fade-section" id="section-skills">
            <section class="skill">
                <h3 class="h3 skills-title">আমার দক্ষতা (My Skills)</h3>

                <ul class="skills-list content-card">
                    <li class="skills-item">
                        <div class="title-wrapper">
                            <h5 class="h5">ওয়েব ডেভেলপমেন্ট (Web Development)</h5>
                            <data value="85">৮৫%</data>
                        </div>
                        <div class="skill-progress-bg">
                            <div class="skill-progress-fill" style="width: 85%;"></div>
                        </div>
                    </li>

                    <li class="skills-item">
                        <div class="title-wrapper">
                            <h5 class="h5">ক্যানভা ডিজাইন (Canva Design)</h5>
                            <data value="90">৯০%</data>
                        </div>
                        <div class="skill-progress-bg">
                            <div class="skill-progress-fill" style="width: 90%;"></div>
                        </div>
                    </li>

                    <li class="skills-item">
                        <div class="title-wrapper">
                            <h5 class="h5">গ্রাফিক ডিজাইন ও ব্র্যান্ডিং (Graphic Design & Branding)</h5>
                            <data value="80">৮০%</data>
                        </div>
                        <div class="skill-progress-bg">
                            <div class="skill-progress-fill" style="width: 80%;"></div>
                        </div>
                    </li>

                    <li class="skills-item">
                        <div class="title-wrapper">
                            <h5 class="h5">ইউআই / ইউএক্স ডিজাইন (UI/UX Design)</h5>
                            <data value="75">৭৫%</data>
                        </div>
                        <div class="skill-progress-bg">
                            <div class="skill-progress-fill" style="width: 75%;"></div>
                        </div>
                    </li>

                    <li class="skills-item">
                        <div class="title-wrapper">
                            <h5 class="h5">ওয়ার্ডপ্রেস (WordPress)</h5>
                            <data value="65">৬৫%</data>
                        </div>
                        <div class="skill-progress-bg">
                            <div class="skill-progress-fill" style="width: 65%;"></div>
                        </div>
                    </li>

                    <li class="skills-item">
                        <div class="title-wrapper">
                            <h5 class="h5">এসইও ও ডিজিটাল কন্টেন্ট (SEO & Content Writing)</h5>
                            <data value="70">৭০%</data>
                        </div>
                        <div class="skill-progress-bg">
                            <div class="skill-progress-fill" style="width: 70%;"></div>
                        </div>
                    </li>
                </ul>
            </section>
        </div>

        <!-- ৬. আমার টুলস (My Tools - Unique Grid matching Image) -->
        <div class="fade-section" id="section-tools">
            <section class="tools-section">
                <h3 class="h3 skills-title">আমার টুলস (My Tools & Technologies)</h3>

                <div class="tools-grid">
                    <div class="tool-card">
                        <i class="fa-brands fa-html5"></i>
                        <span class="tool-name">html-5</span>
                    </div>

                    <div class="tool-card">
                        <i class="fa-brands fa-css3-alt"></i>
                        <span class="tool-name">css3</span>
                    </div>

                    <div class="tool-card">
                        <i class="fa-brands fa-sass"></i>
                        <span class="tool-name">sass</span>
                    </div>

                    <div class="tool-card">
                        <i class="fa-brands fa-js"></i>
                        <span class="tool-name">JavaScript</span>
                    </div>

                    <div class="tool-card">
                        <i class="fa-brands fa-react"></i>
                        <span class="tool-name">reactjs</span>
                    </div>

                    <div class="tool-card">
                        <i class="fa-brands fa-node-js"></i>
                        <span class="tool-name">nodejs</span>
                    </div>

                    <div class="tool-card">
                        <i class="fa-brands fa-swift"></i>
                        <span class="tool-name">swift</span>
                    </div>

                    <div class="tool-card">
                        <i class="fa-brands fa-npm"></i>
                        <span class="tool-name">npm</span>
                    </div>

                    <div class="tool-card">
                        <i class="fa-solid fa-database"></i>
                        <span class="tool-name">sql-database</span>
                    </div>

                    <div class="tool-card">
                        <i class="fa-brands fa-aws"></i>
                        <span class="tool-name">aws</span>
                    </div>

                    <div class="tool-card">
                        <i class="fa-solid fa-fire"></i>
                        <span class="tool-name">firebase</span>
                    </div>

                    <div class="tool-card">
                        <i class="fa-brands fa-python"></i>
                        <span class="tool-name">python</span>
                    </div>

                    <div class="tool-card">
                        <i class="fa-brands fa-docker"></i>
                        <span class="tool-name">docker</span>
                    </div>

                    <div class="tool-card">
                        <i class="fa-solid fa-palette"></i>
                        <span class="tool-name">canva</span>
                    </div>

                    <div class="tool-card">
                        <i class="fa-brands fa-figma"></i>
                        <span class="tool-name">figma</span>
                    </div>

                    <div class="tool-card">
                        <i class="fa-brands fa-git-alt"></i>
                        <span class="tool-name">git</span>
                    </div>
                </div>
            </section>
        </div>

        <!-- ৭. জীবনবৃত্তান্ত ডাউনলোড বাটন সেকশন -->
        <div class="fade-section" id="section-download-resume">
            <section class="resume-download-box">
                <h3 class="h3" style="font-size: 1.2rem; margin-bottom: 15px; color: var(--text-main);">আমার সম্পূর্ণ জীবনবৃত্তান্ত সংগ্রহ করুন</h3>
                <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 25px;">নিচের বাটনে ক্লিক করে আমার আপডেট করা রেজুমে বা সিভি (PDF) ডাউনলোড করে নিন।</p>
                <a href="../Resume of Utsab Sarker.pdf" download class="resume-download-btn">
                    <i class="fa-solid fa-file-arrow-down"></i> জীবনবৃত্তান্ত ডাউনলোড করুন
                </a>
            </section>
        </div>

    </article>
    `;

    // জাভাস্ক্রিপ্ট ইন্টারঅ্যাকশন ও স্ক্রলিং লজিক
    setTimeout(() => {
        // ১. কুইক ফিল্টার/নেভিগেশন বাটনে ক্লিক করলে নির্দিষ্ট সেকশনে স্ক্রল করা
        const navBtns = document.querySelectorAll('.resume-nav-btn');
        navBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const targetId = this.getAttribute('data-target');
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // ২. ফেইড-ইন অ্যানিমেশনের জন্য ইন্টারসেকশন অবজার্ভার
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