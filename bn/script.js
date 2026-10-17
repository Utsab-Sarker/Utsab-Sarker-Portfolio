document.addEventListener("DOMContentLoaded", () => {
    
    // ১. টাইপিং এফেক্ট (প্রোনাউন রোটেটর)
    const words = ["Web Developer", "Writer", "Traveler", "Photographer"];
    let i = 0;
    let timer;
    const typingElement = document.getElementById("typing-text");

    function typingEffect() {
        let word = words[i];
        let j = 0;
        
        function type() {
            if (j < word.length) {
                typingElement.textContent += word.charAt(j);
                j++;
                timer = setTimeout(type, 100);
            } else {
                setTimeout(deleteEffect, 2000);
            }
        }
        type();
    }

    function deleteEffect() {
        let word = words[i];
        let j = word.length;
        
        function del() {
            if (j >= 0) {
                typingElement.textContent = word.substring(0, j);
                j--;
                timer = setTimeout(del, 50);
            } else {
                i = (i + 1) % words.length;
                setTimeout(typingEffect, 500);
            }
        }
        del();
    }
    typingEffect();

    // ২. লাইভ ক্লক (বাংলাদেশ সময় অনুযায়ী)
    function updateClock() {
        const options = { timeZone: 'Asia/Dhaka', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
        const formatter = new Intl.DateTimeFormat([], options);
        const timeStr = formatter.format(new Date());

        // সময় পার্স করা
        const parts = timeStr.match(/(\d+):(\d+):(\d+)\s*(AM|PM)/i);
        if (parts) {
            document.getElementById("hours").textContent = parts[1].padStart(2, '0');
            document.getElementById("minutes").textContent = parts[2].padStart(2, '0');
            document.getElementById("seconds").textContent = parts[3].padStart(2, '0');
            document.getElementById("ampm").textContent = parts[4].toUpperCase();
        }

        // তারিখ পার্স করা
        const dateOptions = { timeZone: 'Asia/Dhaka', year: 'numeric', month: 'long', day: 'numeric' };
        const dateStr = new Intl.DateTimeFormat('bn-BD', dateOptions).format(new Date());
        
        const dateParts = dateStr.split(' ');
        if(dateParts.length >= 3) {
            document.getElementById("day").textContent = dateParts[0];
            document.getElementById("month").textContent = dateParts[1];
            document.getElementById("year").textContent = dateParts[2];
        }
    }
    setInterval(updateClock, 1000);
    updateClock();

    // ৩. মোবাইল ড্রপডাউন টগল (নাম ও ছবির সেকশন বড়/ছোট করা)
    const dropdownToggleBtn = document.getElementById("mobile-dropdown-toggle");
    const collapsibleInfo = document.getElementById("collapsible-info");

    if (dropdownToggleBtn) {
        dropdownToggleBtn.addEventListener("click", () => {
            collapsibleInfo.classList.toggle("show");
            const icon = dropdownToggleBtn.querySelector("i");
            if (collapsibleInfo.classList.contains("show")) {
                icon.classList.remove("fa-chevron-down");
                icon.classList.add("fa-chevron-up");
            } else {
                icon.classList.remove("fa-chevron-up");
                icon.classList.add("fa-chevron-down");
            }
        });
    }

    // ৪. মোবাইল সাইডবার মেনু টগল
    const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
    const mobileSidebar = document.getElementById("mobile-sidebar");
    const sidebarClose = document.getElementById("sidebar-close");

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener("click", () => mobileSidebar.classList.add("open"));
        sidebarClose.addEventListener("click", () => mobileSidebar.classList.remove("open"));
    }

    // ৫. ডায়নামিক সেকশন লোডার (js ফাইল থেকে সেকশন লোড করা)
    const navItems = document.querySelectorAll(".nav-item");
    const sectionContainer = document.getElementById("dynamic-section-container");

    function loadSection(sectionName) {
        // নেভবারের অ্যাক্টিভ ক্লাস আপডেট
        navItems.forEach(item => {
            if (item.getAttribute("data-section") === sectionName) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });

        // মোবাইল সাইডবার খোলা থাকলে ক্লোড করা
        if (mobileSidebar) mobileSidebar.classList.remove("open");

        // নির্দিষ্ট সেকশন জেএস ফাইল ডাইনামিকালি ইনজেক্ট করা
        sectionContainer.innerHTML = `<div class="loading">লোড হচ্ছে...</div>`;
        
        // পুরানো সেকশন স্ক্রিপ্ট রিমুভ করা
        const oldScript = document.getElementById("dynamic-section-script");
        if (oldScript) oldScript.remove();

        const script = document.createElement("script");
        script.id = "dynamic-section-script";
        script.src = `sections/${sectionName}.js`;
        script.onload = () => {
            if (typeof window.renderSection === "function") {
                window.renderSection(sectionContainer);
            }
        };
        script.onerror = () => {
            sectionContainer.innerHTML = `<h2>দুঃখিত! সেকশনটি লোড করা যায়নি।</h2>`;
        };
        document.body.appendChild(script);
    }

    // নেভবার ক্লিকের ইভেন্ট হ্যান্ডলার
    navItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const section = item.getAttribute("data-section");
            loadSection(section);
        });
    });

    // প্রথম লোডে ডিফল্ট সেকশন (About Me) লোড করা
    loadSection("about-me");

    // ৬. পপআপ হ্যান্ডলার (popup.json থেকে ডেটা লোড)
    const popupModal = document.getElementById("popup-modal");
    const popupClose = document.getElementById("popup-close");
    const popupContentArea = document.getElementById("popup-content-area");

    fetch("../popup.json")
        .then(res => res.json())
        .then(data => {
            if (!data.active) return;

            const now = new Date().getTime();
            const startTime = new Date(data.startTime).getTime();
            const endTime = new Date(data.endTime).getTime();

            if (now >= startTime && now <= endTime) {
                let htmlContent = "";
                data.content.forEach(item => {
                    if (item.type === "media") {
                        if(item.src.includes(".mp4")) {
                            htmlContent += `<video src="${item.src}" controls autoplay muted></video>`;
                        } else {
                            htmlContent += `<img src="${item.src}" alt="${item.alt || ''}">`;
                        }
                    } else if (item.type === "heading") {
                        htmlContent += `<h3>${item.text}</h3>`;
                    } else if (item.type === "paragraph") {
                        htmlContent += `<p>${item.text}</p>`;
                    } else if (item.type === "button") {
                        htmlContent += `<a href="${item.link}" class="popup-btn" onclick="document.getElementById('popup-modal').style.display='none'">${item.text}</a>`;
                    }
                });

                popupContentArea.innerHTML = htmlContent;
                popupModal.style.display = "flex";
            }
        })
        .catch(err => console.log("Popup load error:", err));

    if (popupClose) {
        popupClose.addEventListener("click", () => {
            popupModal.style.display = "none";
        });
    }

    window.addEventListener("click", (e) => {
        if (e.target === popupModal) {
            popupModal.style.display = "none";
        }
    });

});