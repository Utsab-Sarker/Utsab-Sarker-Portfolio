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

        /* Sub Tabs Styling */
        .contact-tabs {
            display: flex;
            gap: 12px;
            margin-bottom: 25px;
        }

        .contact-tab-btn {
            flex: 1;
            padding: 12px 16px;
            background: var(--card-bg);
            color: var(--text-muted);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            cursor: pointer;
            font-weight: 700;
            font-size: 0.9rem;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(0,0,0,0.02);
        }

        .contact-tab-btn.active {
            background: var(--primary-color);
            color: #ffffff;
            border-color: var(--primary-color);
            box-shadow: 0 4px 15px var(--shadow-color);
        }

        /* Two Column Layout Container */
        .contact-grid-layout {
            display: grid;
            grid-template-columns: 320px 1fr;
            gap: 30px;
            align-items: start;
        }

        /* Left Profile & Info Card */
        .contact-sidebar-card {
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: 25px 20px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.03);
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .contact-profile-box {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 12px;
        }

        .contact-profile-img {
            width: 85px;
            height: 85px;
            border-radius: 16px;
            object-fit: cover;
            border: 2px solid var(--primary-color);
            box-shadow: 0 4px 12px var(--shadow-color);
        }

        .contact-profile-name {
            font-size: 1.2rem;
            font-weight: 800;
            color: var(--text-main);
        }

        .contact-info-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .contact-info-item {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 0.85rem;
        }

        .contact-icon-box {
            width: 36px;
            height: 36px;
            border-radius: 10px;
            background: var(--accent-color);
            border: 1px solid #bfdbfe;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--primary-color);
            font-size: 0.9rem;
            flex-shrink: 0;
        }

        .contact-info-text-box span {
            display: block;
            font-size: 0.68rem;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .contact-info-text-box a, .contact-info-text-box p {
            color: var(--text-main);
            text-decoration: none;
            font-weight: 600;
            word-break: break-all;
            margin: 0;
        }

        .contact-info-text-box a:hover {
            color: var(--primary-color);
        }

        /* Google Map Embedded Container */
        .map-container {
            width: 100%;
            height: 160px;
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid var(--border-color);
        }

        .map-container iframe {
            width: 100%;
            height: 100%;
            border: 0;
        }

        /* Right Form / Search Panel Card */
        .contact-main-card {
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: 30px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.03);
        }

        .contact-main-desc {
            font-size: 0.95rem;
            color: var(--text-muted);
            margin-bottom: 25px;
            line-height: 1.6;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            color: var(--text-main);
            font-size: 0.88rem;
            font-weight: 600;
        }

        .form-group input, 
        .form-group textarea {
            width: 100%;
            padding: 12px 15px;
            background: var(--bg-color);
            border: 1px solid var(--border-color);
            border-radius: 10px;
            color: var(--text-main);
            font-size: 0.9rem;
            box-sizing: border-box;
            outline: none;
            transition: border-color 0.3s ease;
        }

        .form-group input:focus, 
        .form-group textarea:focus {
            border-color: var(--primary-color);
            box-shadow: 0 0 0 3px var(--shadow-color);
        }

        .submit-btn {
            width: 100%;
            padding: 14px;
            background: var(--primary-color);
            border: none;
            border-radius: 10px;
            color: #ffffff;
            font-size: 1rem;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px var(--shadow-color);
        }

        .submit-btn:hover {
            background: #1d4ed8;
            transform: translateY(-2px);
        }

        /* Result Box Styling */
        .search-result-box {
            background: var(--bg-color);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 20px;
            margin-top: 25px;
            text-align: left;
        }

        .status-badge {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 6px;
            font-size: 0.75rem;
            font-weight: 700;
            background: #d1fae5;
            color: #065f46;
        }

        /* Success Popup Modal */
        .modal-overlay {
            display: none;
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.6);
            justify-content: center;
            align-items: center;
            z-index: 2000;
            backdrop-filter: blur(4px);
        }

        .modal-box {
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 18px;
            padding: 30px;
            max-width: 450px;
            width: 90%;
            text-align: center;
            box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }

        .inquiry-display-box {
            background: var(--bg-color);
            border: 1px dashed var(--primary-color);
            padding: 15px;
            margin: 20px 0;
            border-radius: 12px;
        }

        @media (max-width: 900px) {
            .contact-grid-layout {
                grid-template-columns: 1fr;
            }
            .fade-section {
                scroll-margin-top: 110px;
            }
            .contact-main-card, .contact-sidebar-card {
                padding: 20px;
            }
        }
    </style>

    <article class="contact-article active" data-page="contact">

        <div class="fade-section">
            <header>
                <h2 class="h2 article-title">যোগাযোগ করুন</h2>
            </header>

            <!-- সাব সেকশন বা ট্যাব বাটন -->
            <div class="contact-tabs">
                <button class="contact-tab-btn active" id="btnContactTab" onclick="switchContactTab('contact')">যোগাযোগ করুন</button>
                <button class="contact-tab-btn" id="btnSearchTab" onclick="switchContactTab('search')">তথ্য অনুসন্ধান করুন</button>
            </div>
        </div>

        <div class="fade-section">
            <div class="contact-grid-layout">
                
                <!-- বাম দিকের ইনফো এবং ম্যাপ সেকশন -->
                <aside class="contact-sidebar-card">
                    <div class="contact-profile-box">
                        <img src="../Utsab Sarker.png" alt="উৎসব সরকার" class="contact-profile-img">
                        <h3 class="contact-profile-name">উৎসব সরকার</h3>
                    </div>

                    <hr class="divider" style="margin: 0;">

                    <ul class="contact-info-list">
                        <li class="contact-info-item">
                            <div class="contact-icon-box"><i class="fa-solid fa-envelope"></i></div>
                            <div class="contact-info-text-box">
                                <span>ইমেইল এড্রেস</span>
                                <a href="mailto:us.arup100@gmail.com">us.arup100@gmail.com</a>
                            </div>
                        </li>
                        <li class="contact-info-item">
                            <div class="contact-icon-box"><i class="fa-solid fa-phone"></i></div>
                            <div class="contact-info-text-box">
                                <span>মোবাইল নাম্বার</span>
                                <a href="tel:+8801745668545">+880 1745-668545</a>
                            </div>
                        </li>
                        <li class="contact-info-item">
                            <div class="contact-icon-box"><i class="fa-solid fa-location-dot"></i></div>
                            <div class="contact-info-text-box">
                                <span>ঠিকানা</span>
                                <p>ঢাকা, বাংলাদেশ</p>
                            </div>
                        </li>
                    </ul>

                    <div class="map-container">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.0097782672!2d90.33728804005886!3d23.780777445441584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5m1!1s2f!2sbn!4v1647000000000!5m1!2s2f!2sbn" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </aside>

                <!-- ডান দিকের ফর্ম বা সার্চ প্যানেল -->
                <main class="contact-main-card">
                    
                    <!-- যোগাযোগ ফর্ম সেকশন -->
                    <div id="contactFormSection">
                        <p class="contact-main-desc">কোন কিছু জানার বা জানানোর আছে? নির্বিধায় লিখে ফেলুন নিচের ফর্মে।</p>
                        
                        <form id="contactForm">
                            <div class="form-group">
                                <label>নাম *</label>
                                <input type="text" id="c_name" placeholder="আপনার নাম লিখুন" required>
                            </div>
                            <div class="form-group">
                                <label>মোবাইল নাম্বার *</label>
                                <input type="text" id="c_phone" placeholder="মোবাইল নম্বর লিখুন" required>
                            </div>
                            <div class="form-group">
                                <label>ই-মেইল এড্রেস *</label>
                                <input type="email" id="c_email" placeholder="আপনার ইমেইল লিখুন" required>
                            </div>
                            <div class="form-group">
                                <label>বিস্তারিত তথ্য *</label>
                                <textarea id="c_details" rows="4" placeholder="আপনার বিস্তারিত বার্তা লিখুন..." required></textarea>
                            </div>
                            <button type="submit" class="submit-btn" id="contactSubmitBtn">সাবমিট করুন</button>
                        </form>
                    </div>

                    <!-- তথ্য অনুসন্ধান সেকশন -->
                    <div id="searchSection" style="display: none;">
                        <p class="contact-main-desc">আপনার জমাকৃত তথ্যের বর্তমান অবস্থা বা আপডেট জানতে নিচের ঘরে আপনার মোবাইল ও অনুসন্ধান নম্বর প্রদান করুন।</p>
                        
                        <div class="form-group">
                            <label>মোবাইল নাম্বার *</label>
                            <input type="text" id="s_phone" placeholder="আপনার মোবাইল নম্বর লিখুন">
                        </div>
                        <div class="form-group">
                            <label>অনুসন্ধান নম্বর *</label>
                            <input type="text" id="s_inquiry" placeholder="১২ ডিজিটের অনুসন্ধান নম্বর লিখুন">
                        </div>
                        <button class="submit-btn" id="searchSubmitBtn" onclick="searchInquiryData()">খুঁজুন</button>

                        <div id="searchResultArea"></div>
                    </div>

                </main>

            </div>
        </div>

    </article>

    <!-- Success Popup Modal -->
    <div id="successModal" class="modal-overlay">
        <div class="modal-box">
            <h3 style="color: var(--text-main); margin-bottom: 10px;">ধন্যবাদ!</h3>
            <p style="color: var(--text-muted); font-size: 0.9rem;">আপনার তথ্য সফলভাবে জমা হয়েছে। খুব শীঘ্রই আপনার সঙ্গে যোগাযোগ করা হবে।</p>
            
            <div class="inquiry-display-box">
                <span style="font-size: 0.8rem; color: var(--text-muted); display: block;">আপনার অনুসন্ধান নম্বর:</span>
                <h3 id="popInquiryId" style="color: var(--primary-color); display: inline-block; margin: 8px 0; font-size: 1.3rem; letter-spacing: 0.05em;"></h3>
                <i class="fa-regular fa-copy" onclick="copyInquiryIdText()" style="cursor: pointer; margin-left: 10px; color: var(--primary-color); font-size: 1.1rem;" title="কপি করুন"></i>
            </div>

            <p style="font-size: 0.78px; color: var(--text-muted); margin-bottom: 20px;">আপনার তথ্যের সর্বশেষ অবস্থা জানতে অনুসন্ধান নম্বরটি সংরক্ষণ করুন।</p>
            
            <button class="submit-btn" onclick="document.getElementById('successModal').style.display='none'; location.reload();">মূল পাতায় ফিরে যান</button>
        </div>
    </div>
    `;

    // জাভাস্ক্রিপ্ট লজিক ও ফাংশনসমূহ
    setTimeout(() => {
        const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzJYOT1NYO4uO2vgBt9hi8fMOtXlmyuDlS6AGct-aVXyDJGoXg8vpyVOjhYWfL9U8QeuA/exec";

        // ১. সাব ট্যাব সুইচিং লজিক
        window.switchContactTab = function(tabName) {
            const contactSec = document.getElementById('contactFormSection');
            const searchSec = document.getElementById('searchSection');
            const btnContact = document.getElementById('btnContactTab');
            const btnSearch = document.getElementById('btnSearchTab');

            if (tabName === 'contact') {
                contactSec.style.display = 'block';
                searchSec.style.display = 'none';
                btnContact.classList.add('active');
                btnSearch.classList.remove('active');
            } else {
                contactSec.style.display = 'none';
                searchSec.style.display = 'block';
                btnSearch.classList.add('active');
                btnContact.classList.remove('active');
            }
        };

        // ২. ফরম সাবমিট লজিক (লোডিন অ্যানিমেশনসহ)
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const btn = document.getElementById('contactSubmitBtn');
                const originalText = btn.innerHTML;
                btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> সাবমিট হচ্ছে...`;
                btn.disabled = true;

                const payload = {
                    action: "submitForm",
                    name: document.getElementById('c_name').value,
                    phone: document.getElementById('c_phone').value,
                    email: document.getElementById('c_email').value,
                    details: document.getElementById('c_details').value
                };

                fetch(SCRIPT_URL, {
                    method: 'POST',
                    body: JSON.stringify(payload)
                })
                .then(res => res.json())
                .then(res => {
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                    if(res.success) {
                        document.getElementById('popInquiryId').innerText = res.inquiryId;
                        document.getElementById('successModal').style.display = 'flex';
                        contactForm.reset();
                    } else {
                        alert("ত্রুটি: " + res.message);
                    }
                })
                .catch(err => {
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                    alert("নেটওয়ার্ক সমস্যা। আবার চেষ্টা করুন।");
                });
            });
        }

        // ৩. অনুসন্ধান নম্বর কপি করার ফাংশন
        window.copyInquiryIdText = function() {
            const text = document.getElementById('popInquiryId').innerText;
            navigator.clipboard.writeText(text).then(() => {
                alert("অনুসন্ধান নম্বরটি সফলভাবে কপি করা হয়েছে!");
            }).catch(err => {
                alert("কপি করতে সমস্যা হয়েছে।");
            });
        };

        // ৪. তথ্য অনুসন্ধান লজিক (তারিখ ও সময় কনভার্টারসহ)
        window.searchInquiryData = function() {
            const phone = document.getElementById('s_phone').value.trim();
            const inquiryId = document.getElementById('s_inquiry').value.trim();
            const resContainer = document.getElementById('searchResultArea');
            const searchBtn = document.getElementById('searchSubmitBtn');

            if(!phone || !inquiryId) {
                alert("দয়া করে মোবাইল নম্বর এবং অনুসন্ধান নম্বর দুটিই প্রদান করুন!");
                return;
            }

            const originalBtnText = searchBtn.innerHTML;
            searchBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> খোঁজা হচ্ছে...`;
            searchBtn.disabled = true;
            resContainer.innerHTML = "";

            fetch(SCRIPT_URL, {
                method: 'POST',
                body: JSON.stringify({
                    action: "searchInquiry",
                    phone: phone,
                    inquiryId: inquiryId
                })
            })
            .then(res => res.json())
            .then(res => {
                searchBtn.innerHTML = originalBtnText;
                searchBtn.disabled = false;

                if(res.success) {
                    const d = res.data;

                    // তারিখ ও সময় কনভার্টার লজিক (ISO string থেকে লোকাল ফরম্যাট)
                    let formattedDate = d.date;
                    let formattedTime = d.time;

                    try {
                        if (d.date && d.date.includes('T')) {
                            const dateObj = new Date(d.date);
                            if (!isNaN(dateObj.getTime())) {
                                formattedDate = dateObj.toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' });
                            }
                        }
                    } catch (e) { console.log("Date parse err:", e); }

                    try {
                        if (d.time && (d.time.includes('T') || d.time.includes('1899'))) {
                            const timeObj = new Date(d.time);
                            if (!isNaN(timeObj.getTime())) {
                                formattedTime = timeObj.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
                            }
                        }
                    } catch (e) { console.log("Time parse err:", e); }

                    resContainer.innerHTML = `
                        <div class="search-result-box">
                            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 10px;">
                                <strong style="color: var(--primary-color); font-size: 1.05rem;">${d.inquiryId}</strong>
                                <span class="status-badge">${d.status || 'প্রক্রিয়াদীন'}</span>
                            </div>
                            <div style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 12px;">
                                <i class="fa-regular fa-calendar"></i> তারিখ: ${formattedDate} &nbsp;|&nbsp; <i class="fa-regular fa-clock"></i> সময়: ${formattedTime}
                            </div>
                            <hr style="border: 0; height: 1px; background: var(--border-color); margin: 12px 0;">
                            <p style="margin: 6px 0; font-size: 0.88rem;"><strong>নাম:</strong> ${d.name}</p>
                            <p style="margin: 6px 0; font-size: 0.88rem;"><strong>মোবাইল:</strong> ${d.phone} &nbsp;|&nbsp; <strong>ইমেইল:</strong> ${d.email}</p>
                            <p style="margin: 6px 0; font-size: 0.88rem;"><strong>বিস্তারিত:</strong> ${d.details}</p>
                            <p style="margin: 6px 0; font-size: 0.88rem; color: var(--primary-color);"><strong>এডমিন নোট:</strong> ${d.adminNote || 'কোনো নোট নেই'}</p>
                        </div>
                    `;
                } else {
                    resContainer.innerHTML = `<p style="color:#ef4444; margin-top: 15px; font-size: 0.9rem; text-align:center;">${res.message || 'কোনো তথ্য পাওয়া যায়নি।'}</p>`;
                }
            })
            .catch(err => {
                searchBtn.innerHTML = originalBtnText;
                searchBtn.disabled = false;
                resContainer.innerHTML = `<p style="color:#ef4444; margin-top: 15px; font-size: 0.9rem; text-align:center;">নেটওয়ার্ক সমস্যা। দয়া করে আবার চেষ্টা করুন।</p>`;
            });
        };

        // ৫. ফেইড-ইন অ্যানিমেশন অবজার্ভার
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
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