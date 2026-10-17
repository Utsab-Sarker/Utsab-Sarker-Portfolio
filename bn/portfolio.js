window.renderSection = function(container) {
    container.innerHTML = `
    <style>
        /* Fade In / Fade Out Animation Base Classes */
        .fade-section {
            opacity: 0;
            transform: translateY(40px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
            will-change: opacity, transform;
            scroll-margin-top: 90px;
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

        .timeline-item span {
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
            margin-bottom: 30px;
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

        @media (max-width: 900px) {
            .fade-section {
                scroll-margin-top: 110px;
            }
            .timeline, .skill {
                padding: 20px;
            }
        }
    </style>

    <article class="resume active" data-page="resume">

        <div class="fade-section">
            <header>
                <h2 class="h2 article-title">জীবনবৃত্তান্ত (Resume)</h2>
            </header>
        </div>

        <!-- শিক্ষা জীবন (Education) -->
        <div class="fade-section">
            <section class="timeline">
                <div class="title-wrapper">
                    <div class="icon-box">
                        <i class="fa-solid fa-book-open"></i>
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
                        <span>২০২২-২০২৪</span>
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
                        <span>২০২০-২০২২</span>
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
                        <span>২০১৭-২০১৯</span>
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
                        <span>২০১১-২০১৬</span>
                        <p class="timeline-text">
                            আমি ২০১১ সালে আমার নিজ গ্রামের বরমল্লুক সরকারি প্রাথমিক বিদ্যালয়ের প্রাক-প্রাথমিক শ্রেণীতে ভর্তি হয়ে আমার শিক্ষাজীবন শুরু করি। চতুর্থ শ্রেণী পর্যন্ত আমি সেখানেই পড়াশোনা করেছি। পরবর্তীতে, পঞ্চম শ্রেণীর জন্য পার্শ্ববর্তী গ্রামের কালিগ্রাম কীর্ত্তলী সরকারি প্রাথমিক বিদ্যালয়ে ভর্তি হই এবং সেখান থেকেই আমার প্রাথমিক শিক্ষা সমাপনী (PSC) পরীক্ষা সম্পন্ন করি।
                        </p>
                    </li>
                </ol>
            </section>
        </div>

        <!-- ক্লাব এবং সংগঠনসমূহ (Clubs & Organizations) -->
        <div class="fade-section">
            <section class="timeline">
                <div class="title-wrapper">
                    <div class="icon-box">
                        <i class="fa-solid fa-users-rectangle"></i>
                    </div>
                    <h3 class="h3">ক্লাব ও সংগঠনসমূহ</h3>
                </div>

                <ol class="timeline-list">
                    <li class="timeline-item">
                        <h4 class="h4 timeline-item-title" style="display: flex; align-items: center; gap: 8px;">
                            <a href="https://www.agamirsomoy.com/" target="_blank" style="display: flex; align-items: center; gap: 8px; text-decoration: none; color: inherit;">
                                <img src="https://www.agamirsomoy.com/_next/static/media/career-club.fa63c918.jpeg" alt="Carrier Club Logo" style="width: 22px; height: 22px; border-radius: 50%; object-fit: cover;">
                                আগামীর সময় ক্যারিয়ার ক্লাব (Agamir Shomoy Career Club)
                            </a>
                        </h4>
                        <span>• ২২ মে, ২০২৬ - বর্তমান</span>
                        <div class="grade-box">
                            <h5 class="h5 timeline-item-subtitle">সদস্য (Member)</h5>
                        </div>
                        <p class="timeline-text">
                            সম্প্রতি, আমি 'আগামীর সময় ক্যারিয়ার ক্লাব'-এ যুক্ত হয়েছি, যা ক্যারিয়ার-কেন্দ্রিক সেমিনার, প্রশিক্ষণ সেশন এবং দক্ষতা উন্নয়নমূলক কার্যক্রমের মাধ্যমে তরুণদের দিকনির্দেশনা ও ক্ষমতায়ন প্রদানে নিবেদিত একটি প্ল্যাটফর্ম। এই ক্লাবের মাধ্যমে আমি সঠিক ক্যারিয়ার গাইডেন্স অর্জন করতে, আমার যোগাযোগ ও নেতৃত্ব দেওয়ার ক্ষমতা বাড়াতে এবং ভবিষ্যতের জন্য একজন দক্ষ ও যোগ্য ব্যক্তি হিসেবে নিজেকে প্রস্তুত করতে আশা রাখি।
                        </p>
                    </li>

                    <li class="timeline-item">
                        <h4 class="h4 timeline-item-title" style="display: flex; align-items: center; gap: 8px;">
                            <a href="https://maslab.org/" target="_blank" style="display: flex; align-items: center; gap: 8px; text-decoration: none; color: inherit;">
                                <img src="https://maslab.org/wp-content/uploads/2024/03/MASLab-Logo-1-1.png" alt="MASLab Logo" style="width: 22px; height: 22px; border-radius: 50%; object-fit: cover;">
                                মাকসুদুল আলম সায়েন্স ল্যাবরেটরি (MASLab)
                            </a>
                        </h4>
                        <span>• ০১ জুলাই, ২০২৫ - বর্তমান</span>
                        <div class="grade-box">
                            <h5 class="h5 timeline-item-subtitle">স্বেচ্ছাসেবক (Volunteer)</h5>
                        </div>
                    </li>

                    <li class="timeline-item">
                        <h4 class="h4 timeline-item-title" style="display: flex; align-items: center; gap: 8px;">
                            <a href="https://www.bdosn.org/" target="_blank" style="display: flex; align-items: center; gap: 8px; text-decoration: none; color: inherit;">
                                <img src="https://www.bdosn.org/images/bdosn-logo-128.png" alt="BdOSN Logo" style="width: 22px; height: 22px; border-radius: 50%; object-fit: cover;">
                                বাংলাদেশ ওপেন সোর্স নেটওয়ার্ক (BdOSN)
                            </a>
                        </h4>
                        <span>• ০১ জুলাই, ২০২৫ - বর্তমান</span>
                        <div class="grade-box">
                            <h5 class="h5 timeline-item-subtitle">স্বেচ্ছাসেবক (Volunteer)</h5>
                        </div>
                    </li>

                    <li class="timeline-item">
                        <h4 class="h4 timeline-item-title" style="display: flex; align-items: center; gap: 8px;">
                            <a href="https://spsb.org/" target="_blank" style="display: flex; align-items: center; gap: 8px; text-decoration: none; color: inherit;">
                                <img src="https://spsb.org/wp-content/uploads/2023/12/Unknown-removebg-preview.png" alt="SPSB Logo" style="width: 22px; height: 22px; border-radius: 50%; object-fit: cover;">
                                বাংলাদেশ বিজ্ঞান জনপ্রিয়করণ সমিতি (SPSB)
                            </a>
                        </h4>
                        <span>• ০১ জুলাই, ২০২৫ - বর্তমান</span>
                        <div class="grade-box">
                            <h5 class="h5 timeline-item-subtitle">স্বেচ্ছাসেবক (Volunteer)</h5>
                        </div>
                        <p class="timeline-text">
                            ঢাকায় আসার পর, আমি বন্ধুসভার পাশাপাশি এসপিএসবি (SPSB), বিডিওএসএন (BDOSN) এবং মাসল্যাব (MASLAB)-সহ বেশ কয়েকটি সংগঠনের সাথে স্বেচ্ছাসেবক হিসেবে যুক্ত হই। বিভিন্ন কার্যক্রম ও প্রোগ্রামে অংশগ্রহণের মাধ্যমে আমি যোগাযোগ, নেতৃত্ব, দলগত কাজ এবং সাংগঠনিক দক্ষতা উন্নয়নে কাজ করে যাচ্ছি।
                        </p>
                    </li>

                    <li class="timeline-item">
                        <h4 class="h4 timeline-item-title" style="display: flex; align-items: center; gap: 8px;">
                            <a href="https://www.bondhushava.com/" target="_blank" style="display: flex; align-items: center; gap: 8px; text-decoration: none; color: inherit;">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYVoxdGE3XfP49zUA-AySViB1J1dc1CEkbMA&s" alt="Bondhushava Logo" style="width: 22px; height: 22px; border-radius: 50%; object-fit: cover;">
                                প্রথম আলো বন্ধুসভা, ঢাকা মহানগর
                            </a>
                        </h4>
                        <span>• ০১ জুলাই, ২০২৫ - বর্তমান</span>
                        <div class="grade-box">
                            <h5 class="h5 timeline-item-subtitle">সাধারণ সদস্য (General Member)</h5>
                        </div>
                        <p class="timeline-text">
                            ২০২৫ সালের মাঝামা সময়ে আমি ঢাকায় আসি এবং সরাসরি প্রথম আলো বন্ধুসভা, ঢাকা মহানগরের সাথে যুক্ত হই। তখন থেকেই আমি বিভিন্ন সাংগঠনিক, সাংস্কৃতিক ও সামাজিক কার্যক্রমে সক্রিয়ভাবে অংশগ্রহণ করে আসছি এবং স্বেচ্ছাসেবা, ইভেন্ট ম্যানেজমেন্ট ও সমাজ-কেন্দ্রিক উদ্যোগে আমার সম্পৃক্ততা অব্যাহত রেখেছি।
                        </p>
                    </li>

                    <li class="timeline-item">
                        <h4 class="h4 timeline-item-title" style="display: flex; align-items: center; gap: 8px;">
                            <a href="https://pabsraj.wordpress.com/" target="_blank" style="display: flex; align-items: center; gap: 8px; text-decoration: none; color: inherit;">
                                <img src="https://pabsraj.wordpress.com/wp-content/uploads/2024/09/cropped-picsart_24-06-13_12-40-57-801.png" alt="PABSRaj Logo" style="width: 22px; height: 22px; border-radius: 50%; object-fit: cover;">
                                প্রথম আলো বন্ধুসভা, রাজশাহী
                            </a>
                        </h4>
                        <span>• ০১ জানুয়ারি, ২০২৫ - ৩১ ডিসেম্বর, ২০২৫</span>
                        <div class="grade-box">
                            <h5 class="h5 timeline-item-subtitle">সহ-সভাপতি (Vice President)</h5>
                        </div>
                        <p style="color: var(--text-muted); font-size: 0.8rem; margin: 4px 0;">╰──────╮</p>
                        <span>• ০১ জানুয়ারি, ২০২৪ - ৩১ ডিসেম্বর, ২০২৪</span>
                        <div class="grade-box">
                            <h5 class="h5 timeline-item-subtitle">সাধারণ সম্পাদক (General Secretary)</h5>
                        </div>
                        <p style="color: var(--text-muted); font-size: 0.8rem; margin: 4px 0;">╰──────╮</p>
                        <span>• ০১ জানুয়ারি, ২০২৩ - ৩১ ডিসেম্বর, ২০২৩</span>
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

        <!-- আমার দক্ষতা (My Skills) -->
        <div class="fade-section">
            <section class="skill">
                <h3 class="h3 skills-title">আমার দক্ষতা</h3>

                <ul class="skills-list content-card">
                    <li class="skills-item">
                        <div class="title-wrapper">
                            <h5 class="h5">ওয়েব ডিজাইন</h5>
                            <data value="80">৮০%</data>
                        </div>
                        <div class="skill-progress-bg">
                            <div class="skill-progress-fill" style="width: 80%;"></div>
                        </div>
                    </li>

                     <li class="skills-item">
                        <div class="title-wrapper">
                            <h5 class="h5">গ্রাফিক ডিজাইন</h5>
                            <data value="70">৭০%</data>
                        </div>
                        <div class="skill-progress-bg">
                            <div class="skill-progress-fill" style="width: 70%;"></div>
                        </div>
                    </li>

                    <li class="skills-item">
                        <div class="title-wrapper">
                            <h5 class="h5">ব্র্যান্ডিং</h5>
                            <data value="90">৯০%</data>
                        </div>
                        <div class="skill-progress-bg">
                            <div class="skill-progress-fill" style="width: 90%;"></div>
                        </div>
                    </li>

                    <li class="skills-item">
                        <div class="title-wrapper">
                            <h5 class="h5">ওয়ার্ডপ্রেস</h5>
                            <data value="50">৫০%</data>
                        </div>
                        <div class="skill-progress-bg">
                            <div class="skill-progress-fill" style="width: 50%;"></div>
                        </div>
                    </li>
                </ul>
            </section>
        </div>

    </article>
    `;

    // ফেইড-ইন অ্যানিমেশনের জন্য ইন্টারসেকশন অবজার্ভার
    setTimeout(() => {
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
