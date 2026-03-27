document.addEventListener('DOMContentLoaded', function () {

    /* =============================================
       SEASON DATA (Full Bangladesh ষড়ঋতু)
    ============================================= */
    const seasons = {
        summer: {
            title: "Summer", titleBn: "গ্রীষ্ম",
            icon: "fa-sun",
            period: "Mid-April – Mid-June",
            periodBn: "বৈশাখ – জ্যৈষ্ঠ",
            temperature: "35°C",
            particleColor: "#ff9d00",
            description: "Summer in Bangladesh blazes with intense heat and humidity. Long, scorching days are occasionally broken by fierce Kalboishakhi storms (Nor'westers) that bring dramatic lightning and temporary relief. This season marks the joyful Bengali New Year — Pohela Boishakh.",
            descriptionBn: "বাংলাদেশের গ্রীষ্মকাল তীব্র গরম ও আর্দ্রতায় পূর্ণ। দীর্ঘ গরম দিনে মাঝে মাঝে কালবৈশাখী ঝড় সাময়িক স্বস্তি এনে দেয়। এই মৌসুমে বাংলা নববর্ষ পহেলা বৈশাখ পালিত হয়।",
            characteristics: ["Intense Heat", "Kalboishakhi Storms", "High Humidity", "Mango Season", "Pohela Boishakh"],
            foods: [
                { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><ellipse cx="32" cy="36" rx="20" ry="22" fill="#ff9500"/><ellipse cx="32" cy="34" rx="18" ry="20" fill="#ffb830"/><ellipse cx="26" cy="28" rx="6" ry="8" fill="#ffd060" opacity=".6"/><rect x="30" y="8" width="4" height="10" rx="2" fill="#3a7d1e"/><path d="M32 12 Q18 4 14 12" stroke="#3a7d1e" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>`, en: "Mango", bn: "আম" },
                { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><ellipse cx="32" cy="36" rx="18" ry="22" fill="#c8a800"/><ellipse cx="32" cy="35" rx="16" ry="20" fill="#e8c400"/><g fill="#b8940a"><ellipse cx="22" cy="25" rx="3" ry="4"/><ellipse cx="32" cy="21" rx="3" ry="4"/><ellipse cx="42" cy="25" rx="3" ry="4"/><ellipse cx="44" cy="35" rx="3" ry="4"/><ellipse cx="42" cy="45" rx="3" ry="4"/><ellipse cx="32" cy="49" rx="3" ry="4"/><ellipse cx="22" cy="45" rx="3" ry="4"/><ellipse cx="20" cy="35" rx="3" ry="4"/><ellipse cx="27" cy="31" rx="3" ry="4"/><ellipse cx="37" cy="31" rx="3" ry="4"/><ellipse cx="32" cy="39" rx="3" ry="4"/></g><rect x="30" y="7" width="4" height="10" rx="2" fill="#4a7c2f"/><path d="M32 11 Q20 4 16 11" stroke="#4a7c2f" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>`, en: "Jackfruit", bn: "কাঁঠাল" },
                { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><rect x="18" y="20" width="28" height="36" rx="4" fill="#f5e6c8"/><rect x="20" y="20" width="24" height="6" rx="3" fill="white" opacity=".9"/><ellipse cx="32" cy="20" rx="12" ry="4" fill="white"/><circle cx="24" cy="23" r="2" fill="white" opacity=".7"/><circle cx="32" cy="22" r="2.5" fill="white" opacity=".8"/><circle cx="40" cy="23" r="2" fill="white" opacity=".7"/><line x1="46" y1="22" x2="52" y2="14" stroke="#888" stroke-width="2" stroke-linecap="round"/><rect x="14" y="36" width="6" height="3" rx="1.5" fill="#d4c4a0"/></svg>`, en: "Lassi", bn: "লাস্সি" },
                { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><ellipse cx="32" cy="34" rx="16" ry="18" fill="#c0392b"/><ellipse cx="32" cy="33" rx="14" ry="16" fill="#e74c3c"/><path d="M20 26 Q32 18 44 26" stroke="#c0392b" stroke-width="1.5" fill="none"/><path d="M18 34 Q32 24 46 34" stroke="#c0392b" stroke-width="1.5" fill="none"/><path d="M20 42 Q32 36 44 42" stroke="#c0392b" stroke-width="1.5" fill="none"/><ellipse cx="28" cy="29" rx="3" ry="2" fill="#f1948a" opacity=".6"/><rect x="30" y="10" width="4" height="8" rx="2" fill="#27ae60"/></svg>`, en: "Litchi", bn: "লিচু" },
                { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><path d="M8 36 A24 24 0 0 1 56 36 Z" fill="#e74c3c"/><path d="M10 36 A22 22 0 0 1 54 36 Z" fill="#ff6b6b"/><path d="M12 36 A20 18 0 0 1 52 36 Z" fill="#2ecc71"/><path d="M14 36 A18 16 0 0 1 50 36 Z" fill="#27ae60"/><ellipse cx="32" cy="36" rx="18" ry="2" fill="#1e8449" opacity=".5"/><circle cx="22" cy="30" r="2" fill="#1a1a1a"/><circle cx="30" cy="26" r="2" fill="#1a1a1a"/><circle cx="40" cy="29" r="2" fill="#1a1a1a"/><circle cx="35" cy="33" r="2" fill="#1a1a1a"/></svg>`, en: "Watermelon", bn: "তরমুজ" },
                { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><rect x="20" y="22" width="24" height="30" rx="3" fill="#8b5e3c"/><rect x="18" y="20" width="28" height="5" rx="2" fill="#a0714f"/><rect x="22" y="27" width="3" height="20" rx="1" fill="#6b4226" opacity=".5"/><rect x="28" y="27" width="3" height="20" rx="1" fill="#6b4226" opacity=".5"/><rect x="34" y="27" width="3" height="20" rx="1" fill="#6b4226" opacity=".5"/><ellipse cx="32" cy="22" rx="12" ry="3" fill="#c8a882" opacity=".7"/><path d="M44 30 Q52 30 50 36 Q52 42 44 42" stroke="#a0714f" stroke-width="2.5" fill="none"/></svg>`, en: "Borhani", bn: "বোরহানি" }
            ],
            festivals: [
                { en: "Pohela Boishakh", bn: "পহেলা বৈশাখ", desc: "Bengali New Year celebrated on 14th April with Mongal Shobhajatra parade, traditional foods and music." },
                { en: "Rabindra Jayanti", bn: "রবীন্দ্র জয়ন্তী", desc: "Birth anniversary of Rabindranath Tagore, celebrated with cultural programs across Bangladesh." },
                { en: "May Day", bn: "মে দিবস", desc: "International Workers' Day observed with rallies and processions." }
            ],
            nature: {
                flowers: [{ emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><circle cx="32" cy="32" r="4" fill="#e8a020"/><g fill="#e74c3c"><path d="M32 32 Q20 18 18 8 Q26 12 28 24Z"/><path d="M32 32 Q44 18 46 8 Q38 12 36 24Z"/><path d="M32 32 Q16 28 8 20 Q14 28 26 30Z"/><path d="M32 32 Q48 28 56 20 Q50 28 38 30Z"/><path d="M32 32 Q22 44 20 54 Q28 48 30 36Z"/><path d="M32 32 Q42 44 44 54 Q36 48 34 36Z"/></g><circle cx="32" cy="32" r="3" fill="#ffd700"/></svg>`, en: "Krishnochura", bn: "কৃষ্ণচূড়া" }, { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><circle cx="32" cy="32" r="3" fill="#ffd700"/><g fill="#c0392b"><path d="M32 32 Q28 18 24 12 Q30 16 32 28Z"/><path d="M32 32 Q36 18 40 12 Q34 16 32 28Z"/><path d="M32 32 Q18 30 12 26 Q18 30 28 32Z"/><path d="M32 32 Q46 30 52 26 Q46 30 36 32Z"/><path d="M32 32 Q28 46 26 52 Q30 46 32 36Z"/></g><circle cx="32" cy="32" r="2" fill="#ff9500"/></svg>`, en: "Shimul", bn: "শিমুল" }, { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><rect x="30" y="8" width="4" height="14" rx="2" fill="#5a3010"/><g fill="#f5c842"><circle cx="22" cy="28" r="5"/><circle cx="32" cy="24" r="5"/><circle cx="42" cy="28" r="5"/><circle cx="18" cy="36" r="4"/><circle cx="28" cy="38" r="5"/><circle cx="38" cy="38" r="5"/><circle cx="48" cy="36" r="4"/><circle cx="24" cy="46" r="4"/><circle cx="32" cy="48" r="5"/><circle cx="40" cy="46" r="4"/></g></svg>`, en: "Sonalu", bn: "সোনালু" }],
                birds: [{ emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><ellipse cx="32" cy="34" rx="14" ry="10" fill="#1a1a1a"/><ellipse cx="32" cy="33" rx="12" ry="9" fill="#2d2d2d"/><ellipse cx="40" cy="30" rx="8" ry="6" fill="#1a1a1a"/><circle cx="44" cy="28" r="4" fill="#ff0000"/><circle cx="45" cy="27" r="1.5" fill="black"/><circle cx="45.5" cy="27" r=".5" fill="white"/><path d="M46 30 L52 28 L48 32Z" fill="#ffcc00"/><path d="M18 34 Q12 28 10 36 Q14 40 18 36Z" fill="#1a1a1a"/><path d="M32 44 L24 56 M32 44 L32 58 M32 44 L40 56" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round"/></svg>`, en: "Cuckoo", bn: "কোকিল" }, { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><ellipse cx="32" cy="30" rx="12" ry="9" fill="#1a1a1a"/><ellipse cx="40" cy="27" rx="7" ry="5" fill="#222"/><circle cx="44" cy="25" r="3.5" fill="#111"/><circle cx="45" cy="24" r="1.5" fill="white"/><path d="M46 28 L52 26 L48 30Z" fill="#333"/><path d="M20 30 Q14 26 12 32 Q16 36 20 32Z" fill="#1a1a1a"/><path d="M32 40 Q26 50 22 56 M32 40 Q38 50 42 56" stroke="#1a1a1a" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M22 56 Q24 60 28 56 M42 56 Q40 60 36 56" stroke="#1a1a1a" stroke-width="2" fill="none"/></svg>`, en: "Shyama", bn: "শ্যামা" }, { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><ellipse cx="34" cy="32" rx="14" ry="10" fill="#1a1a1a"/><ellipse cx="34" cy="34" rx="10" ry="6" fill="white"/><ellipse cx="42" cy="28" rx="8" ry="6" fill="#1a1a1a"/><circle cx="46" cy="26" r="4" fill="#1a1a1a"/><circle cx="47" cy="25" r="1.5" fill="white"/><path d="M48 28 L54 26 L50 30Z" fill="#555"/><path d="M20 32 Q14 26 12 34 Q16 38 20 34Z" fill="#1a1a1a"/><path d="M28 42 L22 54 M34 43 L34 56 M40 42 L46 54" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/></svg>`, en: "Doel", bn: "দোয়েল" }],
                other: [{ emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><path d="M8 20 Q20 10 36 16 Q50 10 58 20 Q54 28 46 26 Q50 34 42 36 Q46 44 36 44 Q28 50 20 44 Q10 46 8 38 Q14 32 10 26Z" fill="#4a4a6a"/><path d="M12 22 Q24 14 38 18 Q50 14 56 22 Q52 28 46 26 Q48 34 42 34 Q44 42 36 42 Q28 48 20 42 Q12 44 10 36 Q16 30 12 26Z" fill="#6a6a8a" opacity=".7"/><path d="M30 16 L24 32 L32 30 L26 48" stroke="#ffd700" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`, en: "Nor'wester", bn: "কালবৈশাখী" }, { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><rect x="28" y="10" width="8" height="36" rx="4" fill="#e0e0e0"/><rect x="30" y="14" width="4" height="28" rx="2" fill="#ff4444"/><circle cx="32" cy="48" r="8" fill="#ff4444"/><circle cx="32" cy="48" r="5" fill="#ff6666"/><rect x="36" y="22" width="6" height="2" rx="1" fill="#ccc"/><rect x="36" y="28" width="6" height="2" rx="1" fill="#ccc"/><rect x="36" y="34" width="6" height="2" rx="1" fill="#ccc"/><rect x="36" y="40" width="6" height="2" rx="1" fill="#ccc"/></svg>`, en: "40°C+ Peaks", bn: "৪০°C তাপমাত্রা" }]
            },
            poem: {
                bn: "এসো হে বৈশাখ, এসো এসো।\nতাপস নিঃশ্বাস বায়ে\nমুমূর্ষুরে দাও উড়ায়ে।",
                en: "Come, O Boishakh, come, come.\nOn the breath of the ascetic's sigh,\nBear the dying away in flight.",
                author: "— Rabindranath Tagore"
            },
            compareData: { rainfall: "Low", humidity: "Very High", sunlight: "Maximum", agriculture: "Mango, Jackfruit harvest" }
        },
        monsoon: {
            title: "Monsoon", titleBn: "বর্ষা",
            icon: "fa-cloud-rain",
            period: "Mid-June – Mid-August",
            periodBn: "আষাঢ় – শ্রাবণ",
            temperature: "28°C",
            particleColor: "#4d96ff",
            description: "The monsoon breathes life into Bangladesh, transforming the land into endless shades of green. Heavy rains swell the rivers, flooding the delta and making boats the lifeline of countless villages. Celebrated as the season of romance in Bengali poetry and song.",
            descriptionBn: "বর্ষা ঋতু বাংলাদেশে জীবন নিয়ে আসে। ভারী বৃষ্টিতে নদীগুলি ফুলে ওঠে, বন্যা নিয়ে আসে। বাংলা কবিতা ও গানে বর্ষা রোমাঞ্চের ঋতু হিসেবে বিখ্যাত।",
            characteristics: ["Heavy Rainfall", "Lush Greenery", "Flooded Rivers", "Paddy Planting", "Barsha Mangal"],
            foods: [
                { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><ellipse cx="32" cy="32" rx="22" ry="12" fill="#a0a8c0"/><ellipse cx="32" cy="32" rx="20" ry="10" fill="#b8c0d8"/><path d="M10 32 Q4 24 8 32 Q4 40 10 32" fill="#8890a8"/><path d="M32 22 Q38 16 44 22" stroke="#9098b0" stroke-width="2" fill="none"/><circle cx="46" cy="30" r="3" fill="#3a3a3a"/><circle cx="47" cy="29" r="1" fill="white"/><path d="M20 28 Q32 24 44 28" stroke="#9098b0" stroke-width="1" fill="none" opacity=".6"/></svg>`, en: "Ilish Bhaat", bn: "ইলিশ ভাত" },
                { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><path d="M32 50 Q20 40 16 26 Q20 14 32 18 Q44 14 48 26 Q44 40 32 50Z" fill="#27ae60"/><path d="M32 50 Q22 42 20 30 Q24 20 32 22 Q40 20 44 30 Q42 42 32 50Z" fill="#2ecc71"/><path d="M32 50 L32 18" stroke="#1e8449" stroke-width="2"/><path d="M24 36 Q32 32 40 36" stroke="#1e8449" stroke-width="1.5" fill="none"/><path d="M22 28 Q32 24 42 28" stroke="#1e8449" stroke-width="1.5" fill="none"/></svg>`, en: "Saag Bhaji", bn: "শাক ভাজি" },
                { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><rect x="20" y="24" width="24" height="28" rx="4" fill="#e8a020"/><rect x="22" y="26" width="20" height="24" rx="3" fill="#f0b830" opacity=".8"/><rect x="18" y="20" width="28" height="6" rx="3" fill="#8b6914"/><circle cx="26" cy="34" r="3" fill="#c0392b"/><circle cx="38" cy="34" r="3" fill="#27ae60"/><circle cx="32" cy="40" r="3" fill="#e67e22"/><circle cx="27" cy="44" r="2.5" fill="#8e44ad"/><circle cx="37" cy="44" r="2.5" fill="#c0392b"/><rect x="18" y="20" width="28" height="4" rx="2" fill="#6b4f0f"/></svg>`, en: "Achaar", bn: "আচার" },
                { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><ellipse cx="32" cy="44" rx="22" ry="8" fill="#d4a849"/><ellipse cx="32" cy="38" rx="22" ry="12" fill="#e8c060"/><ellipse cx="32" cy="36" rx="20" ry="10" fill="#f0d080"/><ellipse cx="32" cy="34" rx="18" ry="8" fill="#f5e09a"/><circle cx="24" cy="33" r="2" fill="#c8a849"/><circle cx="32" cy="30" r="2" fill="#c8a849"/><circle cx="40" cy="33" r="2" fill="#c8a849"/><circle cx="28" cy="36" r="1.5" fill="#e07020"/><circle cx="36" cy="36" r="1.5" fill="#e07020"/></svg>`, en: "Khichuri", bn: "খিচুড়ি" },
                { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><ellipse cx="32" cy="38" rx="16" ry="18" fill="#6c3483"/><ellipse cx="32" cy="36" rx="14" ry="16" fill="#8e44ad"/><ellipse cx="26" cy="30" rx="4" ry="6" fill="#a569bd" opacity=".5"/><rect x="30" y="12" width="4" height="12" rx="2" fill="#27ae60"/><path d="M32 16 Q22 8 18 16" stroke="#27ae60" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M32 16 Q42 8 46 16" stroke="#27ae60" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>`, en: "Neem Begun", bn: "নিম বেগুন" },
                { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><ellipse cx="32" cy="40" rx="24" ry="14" fill="#f5f0e0"/><ellipse cx="32" cy="38" rx="22" ry="12" fill="#fffde8"/><circle cx="32" cy="36" rx="10" ry="10" fill="#f5c518"/><circle cx="32" cy="36" r="8" fill="#f9d71c"/><circle cx="29" cy="33" r="2" fill="white" opacity=".5"/></svg>`, en: "Dim Bhaji", bn: "ডিম ভাজি" }
            ],
            festivals: [
                { en: "Barsha Mangal", bn: "বর্ষামঙ্গল", desc: "A traditional celebration welcoming the monsoon season with music, dance and Tagore songs." },
                { en: "Ilish Utsav", bn: "ইলিশ উৎসব", desc: "Hilsa fish festival celebrated in riverside communities when the fish swim upstream to spawn." },
                { en: "Eid ul-Adha", bn: "ঈদুল আযহা", desc: "Festival of Sacrifice, often falling in this season with prayers and community feasts." }
            ],
            nature: {
                flowers: [{ emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><circle cx="32" cy="32" r="16" fill="#e8a020"/><circle cx="32" cy="32" r="13" fill="#f0b830"/><g fill="#ff8c00"><circle cx="32" cy="16" r="2.5"/><circle cx="40" cy="18" r="2.5"/><circle cx="46" cy="24" r="2.5"/><circle cx="48" cy="32" r="2.5"/><circle cx="46" cy="40" r="2.5"/><circle cx="40" cy="46" r="2.5"/><circle cx="32" cy="48" r="2.5"/><circle cx="24" cy="46" r="2.5"/><circle cx="18" cy="40" r="2.5"/><circle cx="16" cy="32" r="2.5"/><circle cx="18" cy="24" r="2.5"/><circle cx="24" cy="18" r="2.5"/></g><circle cx="32" cy="32" r="5" fill="#ffd700"/></svg>`, en: "Kadamba", bn: "কদম" }, { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><path d="M32 52 L24 30 Q20 16 28 12 Q32 10 32 20Z" fill="#27ae60"/><path d="M32 52 L40 30 Q44 16 36 12 Q32 10 32 20Z" fill="#2ecc71"/><path d="M32 52 L20 40 Q12 28 16 20 Q20 14 24 24Z" fill="#27ae60" opacity=".8"/><path d="M32 52 L44 40 Q52 28 48 20 Q44 14 40 24Z" fill="#2ecc71" opacity=".8"/><path d="M32 20 L32 52" stroke="#1e8449" stroke-width="2.5"/></svg>`, en: "Keya", bn: "কেয়া" }, { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><ellipse cx="32" cy="38" rx="20" ry="8" fill="#1a6b9a" opacity=".4"/><g fill="#e8f4f8"><path d="M32 14 Q36 24 32 34 Q28 24 32 14Z"/><path d="M32 14 Q44 20 40 32 Q34 22 32 14Z" transform="rotate(60 32 32)"/><path d="M32 14 Q44 20 40 32 Q34 22 32 14Z" transform="rotate(120 32 32)"/><path d="M32 14 Q44 20 40 32 Q34 22 32 14Z" transform="rotate(180 32 32)"/><path d="M32 14 Q44 20 40 32 Q34 22 32 14Z" transform="rotate(240 32 32)"/><path d="M32 14 Q44 20 40 32 Q34 22 32 14Z" transform="rotate(300 32 32)"/></g><circle cx="32" cy="32" r="6" fill="#f5c842"/><circle cx="32" cy="32" r="4" fill="#ffd700"/></svg>`, en: "Water Lily", bn: "শাপলা" }],
                birds: [{ emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><ellipse cx="32" cy="32" rx="13" ry="9" fill="#2d2d2d"/><ellipse cx="32" cy="34" rx="10" ry="6" fill="white"/><ellipse cx="40" cy="28" rx="7" ry="5" fill="#2d2d2d"/><path d="M34 22 Q36 16 40 18 Q38 20 36 22Z" fill="#2d2d2d"/><circle cx="44" cy="26" r="3.5" fill="#1a1a1a"/><circle cx="45" cy="25" r="1.5" fill="white"/><path d="M46 28 L52 26 L48 30Z" fill="#444"/><path d="M18 32 Q12 26 10 34 Q14 38 18 34Z" fill="#2d2d2d"/><path d="M30 42 L24 54 M34 43 L34 56 M38 42 L44 54" stroke="#2d2d2d" stroke-width="2.5" stroke-linecap="round"/></svg>`, en: "Chataka", bn: "চাতক" }, { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><ellipse cx="32" cy="32" rx="12" ry="9" fill="#1a6b9a"/><ellipse cx="32" cy="34" rx="9" ry="6" fill="#e07020"/><ellipse cx="40" cy="28" rx="7" ry="5" fill="#1a6b9a"/><circle cx="44" cy="26" r="4" fill="#1a6b9a"/><circle cx="45" cy="25" r="1.5" fill="white"/><path d="M48 28 L58 26 L52 31Z" fill="#2d2d2d"/><path d="M18 32 Q12 26 10 34 Q14 38 18 34Z" fill="#1a6b9a"/><path d="M30 42 L26 54 M34 43 L34 56 M38 42 L42 54" stroke="#1a6b9a" stroke-width="2.5" stroke-linecap="round"/></svg>`, en: "Kingfisher", bn: "মাছরাঙা" }, { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><line x1="32" y1="56" x2="32" y2="30" stroke="#9090a0" stroke-width="4"/><ellipse cx="32" cy="26" rx="8" ry="10" fill="#c8c8d8"/><ellipse cx="32" cy="24" rx="7" ry="8" fill="#e0e0f0"/><ellipse cx="38" cy="20" rx="7" ry="5" fill="#c8c8d8"/><circle cx="42" cy="18" r="4" fill="#c8c8d8"/><circle cx="43" cy="17" r="1.5" fill="#1a1a1a"/><path d="M46 20 L54 18 L50 22Z" fill="#ffd700"/><path d="M24 30 Q16 22 14 28 Q18 34 24 30Z" fill="#c8c8d8"/><line x1="28" y1="56" x2="24" y2="62" stroke="#ffd700" stroke-width="3"/><line x1="32" y1="56" x2="32" y2="63" stroke="#ffd700" stroke-width="3"/><line x1="36" y1="56" x2="40" y2="62" stroke="#ffd700" stroke-width="3"/></svg>`, en: "Heron", bn: "বক" }],
                other: [{ emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><ellipse cx="32" cy="36" rx="16" ry="12" fill="#27ae60"/><ellipse cx="32" cy="34" rx="14" ry="10" fill="#2ecc71"/><ellipse cx="32" cy="36" rx="10" ry="6" fill="#a8d5a2" opacity=".5"/><circle cx="24" cy="26" r="6" fill="#2ecc71"/><circle cx="40" cy="26" r="6" fill="#2ecc71"/><circle cx="24" cy="25" r="4" fill="#1a1a1a"/><circle cx="40" cy="25" r="4" fill="#1a1a1a"/><circle cx="24" cy="24" r="2" fill="white"/><circle cx="40" cy="24" r="2" fill="white"/><path d="M26 38 Q32 42 38 38" stroke="#1e8449" stroke-width="2" fill="none"/><path d="M14 46 Q16 40 20 44 M50 46 Q48 40 44 44" stroke="#27ae60" stroke-width="3" stroke-linecap="round"/></svg>`, en: "Frogs Chorus", bn: "ব্যাঙের ডাক" }, { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><path d="M8 38 Q14 30 20 38 Q26 46 32 38 Q38 30 44 38 Q50 46 56 38" stroke="#1a6b9a" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M8 46 Q14 38 20 46 Q26 54 32 46 Q38 38 44 46 Q50 54 56 46" stroke="#2980b9" stroke-width="3" fill="none" stroke-linecap="round"/><rect x="24" y="10" width="8" height="28" rx="2" fill="#8b4513"/><rect x="16" y="10" width="6" height="4" rx="1" fill="#8b4513"/><rect x="16" y="16" width="6" height="4" rx="1" fill="#8b4513"/><path d="M24 10 Q20 6 16 8" stroke="#5a3010" stroke-width="2"/></svg>`, en: "Flooded Haors", bn: "হাওরে বন্যা" }]
            },
            poem: {
                bn: "আজি বরষার রূপ হেরি অবাক হয়ে যাই,\nধরণী বিছায়েছে শ্যামলিমার থাই।",
                en: "Today, beholding the form of monsoon, I am stunned,\nThe earth has spread out her green verdant lap.",
                author: "— Jibanananda Das"
            },
            compareData: { rainfall: "Highest", humidity: "Extreme", sunlight: "Low (cloudy)", agriculture: "Paddy planting, Jute growing" }
        },
        autumn: {
            title: "Autumn", titleBn: "শরৎ",
            icon: "fa-leaf",
            period: "Mid-August – Mid-October",
            periodBn: "ভাদ্র – আশ্বিন",
            temperature: "26°C",
            particleColor: "#ff6b00",
            description: "Autumn in Bangladesh is a vision of white — pure skies, cotton-soft clouds, and sweeping fields of Kash grass swaying in the gentle breeze. After the monsoon's drama, nature exhales. The most celebrated festival, Durga Puja, illuminates the season with colour and devotion.",
            descriptionBn: "বাংলাদেশের শরৎকাল সাদার রং — নীলাকাশ, সাদা মেঘ এবং মাঠভরা কাশফুল। বর্ষার পর প্রকৃতি স্বস্তির নিঃশ্বাস ফেলে। দুর্গাপূজার আলোয় মেতে ওঠে সারাদেশ।",
            characteristics: ["Clear Blue Skies", "Kash Flowers", "Mild Weather", "Durga Puja", "Harvest Begins"],
            foods: [
                { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><ellipse cx="32" cy="44" rx="22" ry="7" fill="#c8b060"/><ellipse cx="32" cy="38" rx="22" ry="12" fill="#d4be70"/><ellipse cx="32" cy="34" rx="20" ry="10" fill="#f5f0d8"/><ellipse cx="32" cy="32" rx="18" ry="8" fill="white"/><circle cx="24" cy="31" r="1.5" fill="#e0d090"/><circle cx="32" cy="29" r="1.5" fill="#e0d090"/><circle cx="40" cy="31" r="1.5" fill="#e0d090"/><circle cx="28" cy="33" r="1.5" fill="#e0d090"/><circle cx="36" cy="33" r="1.5" fill="#e0d090"/></svg>`, en: "Narkeli Bhat", bn: "নারকেলি ভাত" },
                { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><ellipse cx="32" cy="44" rx="18" ry="8" fill="#d4a849"/><rect x="16" y="30" width="32" height="16" rx="4" fill="#f5c842"/><ellipse cx="32" cy="30" rx="16" ry="8" fill="#f9e08a"/><ellipse cx="32" cy="28" rx="12" ry="6" fill="#fff3c0"/><path d="M24 26 Q32 20 40 26" stroke="#e8b020" stroke-width="2" fill="none"/><circle cx="32" cy="22" r="3" fill="#e74c3c"/></svg>`, en: "Sandesh", bn: "সন্দেশ" },
                { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><ellipse cx="32" cy="46" rx="18" ry="6" fill="#c8a060"/><rect x="16" y="24" width="32" height="24" rx="6" fill="#d4a849"/><rect x="18" y="26" width="28" height="20" rx="5" fill="#f5d070"/><ellipse cx="32" cy="26" rx="14" ry="5" fill="#fff8e0"/><ellipse cx="32" cy="26" rx="12" ry="4" fill="white"/><path d="M24 32 Q32 28 40 32" stroke="#c8a060" stroke-width="1.5" fill="none" opacity=".6"/></svg>`, en: "Mishti Doi", bn: "মিষ্টি দই" },
                { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><ellipse cx="32" cy="46" rx="20" ry="7" fill="#c8a060"/><ellipse cx="32" cy="40" rx="20" ry="10" fill="#d4a849"/><ellipse cx="32" cy="36" rx="18" ry="9" fill="#f5d88a"/><ellipse cx="32" cy="33" rx="16" ry="7" fill="#fff8e0"/><circle cx="24" cy="32" r="2" fill="#e8b020" opacity=".7"/><circle cx="32" cy="30" r="2" fill="#e8b020" opacity=".7"/><circle cx="40" cy="32" r="2" fill="#e8b020" opacity=".7"/><path d="M28 34 Q32 36 36 34" stroke="#c8a060" stroke-width="1.5" fill="none"/></svg>`, en: "Payesh", bn: "পায়েশ" },
                { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><rect x="14" y="30" width="36" height="20" rx="4" fill="#d4a849"/><rect x="16" y="32" width="32" height="16" rx="3" fill="#f5c842"/><path d="M14 36 Q32 28 50 36" fill="#f9e08a"/><path d="M14 36 Q32 30 50 36 L50 38 Q32 30 14 38Z" fill="#f0d060"/><circle cx="32" cy="26" r="6" fill="#f5c842"/><circle cx="32" cy="26" r="4" fill="#fff3c0"/><circle cx="32" cy="26" r="2" fill="#e8a020"/></svg>`, en: "Nabanna Cake", bn: "নবান্নের পিঠা" },
                { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><line x1="16" y1="56" x2="20" y2="20" stroke="#c8b890" stroke-width="2.5" stroke-linecap="round"/><line x1="26" y1="56" x2="28" y2="16" stroke="#d4c4a0" stroke-width="2.5" stroke-linecap="round"/><line x1="36" y1="56" x2="36" y2="14" stroke="#c8b890" stroke-width="2.5" stroke-linecap="round"/><line x1="46" y1="56" x2="44" y2="18" stroke="#d4c4a0" stroke-width="2.5" stroke-linecap="round"/><ellipse cx="20" cy="18" rx="5" ry="10" fill="#e8dcc0" transform="rotate(-10 20 18)"/><ellipse cx="28" cy="14" rx="5" ry="11" fill="#f0e4cc" transform="rotate(5 28 14)"/><ellipse cx="36" cy="12" rx="5" ry="11" fill="#e8dcc0"/><ellipse cx="44" cy="16" rx="5" ry="10" fill="#f0e4cc" transform="rotate(-5 44 16)"/></svg>`, en: "Fried Paddy", bn: "মুড়ি" }
            ],
            festivals: [
                { en: "Durga Puja", bn: "দুর্গাপূজা", desc: "The grandest Hindu festival of Bengal, celebrated with elaborate pandals, rituals and community gatherings over five days." },
                { en: "Mahalaya", bn: "মহালয়া", desc: "The dawn ritual marking the arrival of Goddess Durga, awakening to Chandipath recitations." },
                { en: "Laxmi Puja", bn: "লক্ষ্মীপূজা", desc: "Worship of the goddess of wealth and prosperity, celebrated on the full moon after Durga Puja." }
            ],
            nature: {
                flowers: [{ emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><line x1="16" y1="56" x2="20" y2="20" stroke="#c8b890" stroke-width="2.5" stroke-linecap="round"/><line x1="26" y1="56" x2="28" y2="16" stroke="#d4c4a0" stroke-width="2.5" stroke-linecap="round"/><line x1="36" y1="56" x2="36" y2="14" stroke="#c8b890" stroke-width="2.5" stroke-linecap="round"/><line x1="46" y1="56" x2="44" y2="18" stroke="#d4c4a0" stroke-width="2.5" stroke-linecap="round"/><ellipse cx="20" cy="18" rx="5" ry="10" fill="#e8dcc0" transform="rotate(-10 20 18)"/><ellipse cx="28" cy="14" rx="5" ry="11" fill="#f0e4cc" transform="rotate(5 28 14)"/><ellipse cx="36" cy="12" rx="5" ry="11" fill="#e8dcc0"/><ellipse cx="44" cy="16" rx="5" ry="10" fill="#f0e4cc" transform="rotate(-5 44 16)"/></svg>`, en: "Kash Grass", bn: "কাশফুল" }, { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><rect x="30" y="10" width="4" height="20" rx="2" fill="#8b4513"/><g fill="white"><path d="M32 32 Q26 22 22 18 Q28 22 32 30Z"/><path d="M32 32 Q38 22 42 18 Q36 22 32 30Z"/><path d="M32 32 Q20 30 16 26 Q22 28 30 32Z"/><path d="M32 32 Q44 30 48 26 Q42 28 34 32Z"/><path d="M32 32 Q28 42 26 48 Q30 42 32 36Z"/><path d="M32 32 Q36 42 38 48 Q34 42 32 36Z"/></g><circle cx="32" cy="32" r="4" fill="#f97316"/></svg>`, en: "Shiuli", bn: "শিউলি" }, { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><circle cx="32" cy="32" r="3" fill="#ffd700"/><g fill="#3498db"><path d="M32 32 Q22 18 20 10 Q28 16 30 28Z"/><path d="M32 32 Q42 18 44 10 Q36 16 34 28Z"/><path d="M32 32 Q16 28 10 22 Q16 28 28 32Z"/><path d="M32 32 Q48 28 54 22 Q48 28 36 32Z"/></g><g fill="#5dade2" opacity=".7"><path d="M32 32 Q24 38 22 46 Q28 40 32 36Z"/><path d="M32 32 Q40 38 42 46 Q36 40 32 36Z"/></g></svg>`, en: "Aparajita", bn: "অপরাজিতা" }],
                birds: [{ emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><line x1="32" y1="54" x2="32" y2="28" stroke="white" stroke-width="3.5"/><ellipse cx="32" cy="24" rx="7" ry="9" fill="white"/><ellipse cx="38" cy="19" rx="6" ry="4.5" fill="white"/><circle cx="42" cy="17" r="3.5" fill="white"/><circle cx="43" cy="16" r="1.5" fill="#1a1a1a"/><path d="M45 19 L52 17 L49 21Z" fill="#ffd700"/><path d="M24 28 Q16 20 14 26 Q18 32 24 28Z" fill="white"/><path d="M32 36 Q20 40 14 48" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round"/><line x1="28" y1="54" x2="24" y2="60" stroke="#ffd700" stroke-width="2.5"/><line x1="32" y1="54" x2="32" y2="61" stroke="#ffd700" stroke-width="2.5"/><line x1="36" y1="54" x2="40" y2="60" stroke="#ffd700" stroke-width="2.5"/></svg>`, en: "White Egret", bn: "সাদা বক" }, { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><ellipse cx="32" cy="32" rx="12" ry="9" fill="#1a6b9a"/><ellipse cx="32" cy="34" rx="9" ry="6" fill="#e07020"/><ellipse cx="40" cy="28" rx="7" ry="5" fill="#1a6b9a"/><circle cx="44" cy="26" r="4" fill="#1a6b9a"/><circle cx="45" cy="25" r="1.5" fill="white"/><path d="M48 28 L58 26 L52 31Z" fill="#2d2d2d"/><path d="M18 32 Q12 26 10 34 Q14 38 18 34Z" fill="#1a6b9a"/><path d="M30 42 L26 54 M34 43 L34 56 M38 42 L42 54" stroke="#1a6b9a" stroke-width="2.5" stroke-linecap="round"/></svg>`, en: "Kingfisher", bn: "মাছরাঙা" }, { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><ellipse cx="30" cy="34" rx="14" ry="10" fill="#d0c8c0"/><ellipse cx="30" cy="33" rx="12" ry="8" fill="#e8e0d8"/><ellipse cx="38" cy="28" rx="8" ry="6" fill="#d0c8c0"/><circle cx="42" cy="26" r="4" fill="#d0c8c0"/><circle cx="43" cy="25" r="1.5" fill="#1a1a1a"/><path d="M46 28 L52 26 L48 30Z" fill="#c8a060"/><path d="M16 34 Q10 28 8 36 Q12 40 16 36Z" fill="#c8c0b8"/><path d="M26 44 L20 54 M30 45 L30 56 M34 44 L40 54" stroke="#d0c8c0" stroke-width="2.5" stroke-linecap="round"/></svg>`, en: "Dove", bn: "ঘুঘু" }],
                other: [{ emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><circle cx="24" cy="32" r="12" fill="#e0e8f0"/><circle cx="36" cy="28" r="14" fill="#eef4f8"/><circle cx="48" cy="32" r="10" fill="#e0e8f0"/><rect x="14" y="32" width="40" height="10" fill="#eef4f8"/><circle cx="20" cy="20" r="8" fill="#f5f8fa"/><circle cx="32" cy="16" r="10" fill="#f8fafc"/><circle cx="44" cy="20" r="8" fill="#f5f8fa"/><rect x="12" y="20" width="40" height="12" fill="#f5f8fa"/></svg>`, en: "Cumulus Clouds", bn: "সাদা মেঘ" }, { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><circle cx="32" cy="32" r="20" fill="#ffd54f"/><circle cx="32" cy="32" r="18" fill="#ffe082"/><circle cx="26" cy="26" r="4" fill="#ffc107" opacity=".4"/><circle cx="38" cy="30" r="6" fill="#ffb300" opacity=".3"/><circle cx="28" cy="40" r="5" fill="#ffc107" opacity=".3"/></svg>`, en: "Full Moon Nights", bn: "পূর্ণিমার রাত" }]
            },
            poem: {
                bn: "আজি শরতের আলোয় কেন মন ভরে যায়,\nশিউলি ঝরা পথে স্বপ্ন ভেসে আসে।",
                en: "Why does my heart fill with the light of autumn today,\nDreams drift along the path strewn with shiuli blooms.",
                author: "— Folk verse, Bengal"
            },
            compareData: { rainfall: "Moderate", humidity: "Moderate", sunlight: "Bright & clear", agriculture: "Early harvest, Jute retting" }
        },
        "late-autumn": {
            title: "Hemanta", titleBn: "হেমন্ত",
            icon: "fa-tree",
            period: "Mid-October – Mid-December",
            periodBn: "কার্তিক – অগ্রহায়ণ",
            temperature: "22°C",
            particleColor: "#c0724a",
            description: "Hemanta is the harvest season, wrapped in dewy mornings and golden fields. Known as the season of Nobanno — the celebration of new rice — farmers bring home the fruits of the year's toil. Fog begins to settle in the evenings, announcing winter's quiet approach.",
            descriptionBn: "হেমন্ত ফসল কাটার ঋতু — শিশিরভেজা সকাল এবং সোনালি ধানক্ষেত নিয়ে। 'নবান্ন' উৎসবে নতুন ধানের আনন্দে মেতে ওঠে কৃষক পরিবার। সন্ধ্যায় কুয়াশা নামে, শীতের আগমনের ইঙ্গিত দেয়।",
            characteristics: ["Harvest Season", "Dewy Mornings", "Nobanno Festival", "Mild & Pleasant", "Rice Harvest"],
            foods: [
                { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><ellipse cx="32" cy="44" rx="22" ry="7" fill="#c8b060"/><ellipse cx="32" cy="38" rx="22" ry="12" fill="#d4be70"/><ellipse cx="32" cy="34" rx="20" ry="10" fill="#f5f0d8"/><ellipse cx="32" cy="32" rx="18" ry="8" fill="white"/><circle cx="24" cy="31" r="1.5" fill="#e0d090"/><circle cx="32" cy="29" r="1.5" fill="#e0d090"/><circle cx="40" cy="31" r="1.5" fill="#e0d090"/><circle cx="28" cy="33" r="1.5" fill="#e0d090"/><circle cx="36" cy="33" r="1.5" fill="#e0d090"/></svg>`, en: "Naya Chal", bn: "নতুন চাল" },
                { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><ellipse cx="32" cy="40" rx="20" ry="8" fill="#e8d0a0"/><ellipse cx="32" cy="36" rx="18" ry="10" fill="#f5e8c0"/><ellipse cx="32" cy="33" rx="16" ry="8" fill="white"/><path d="M18 34 Q32 28 46 34" stroke="#c8a060" stroke-width="1.5" fill="none"/><path d="M22 30 Q32 24 42 30" stroke="#d4b070" stroke-width="1.5" fill="none"/><path d="M26 22 Q28 14 30 18 M32 20 Q32 12 34 16 M36 22 Q38 14 38 18" stroke="#aaaaaa" stroke-width="1.5" fill="none" opacity=".6"/></svg>`, en: "Puli Pitha", bn: "পুলি পিঠা" },
                { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><ellipse cx="32" cy="46" rx="18" ry="6" fill="#8b4513"/><rect x="16" y="26" width="32" height="22" rx="8" fill="#a0522d"/><rect x="18" y="28" width="28" height="18" rx="7" fill="#cd853f"/><ellipse cx="32" cy="28" rx="14" ry="5" fill="#daa520" opacity=".8"/><path d="M28 18 L32 12 L36 18 L38 24 L26 24Z" fill="#a0522d"/><rect x="30" y="20" width="4" height="6" rx="1" fill="#8b4513"/></svg>`, en: "Date Jaggery", bn: "খেজুর গুড়" },
                { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><ellipse cx="32" cy="44" rx="22" ry="7" fill="#c8b060"/><ellipse cx="32" cy="38" rx="22" ry="12" fill="#d4be70"/><ellipse cx="32" cy="34" rx="20" ry="10" fill="#f5f0d8"/><ellipse cx="32" cy="32" rx="18" ry="8" fill="white"/><circle cx="24" cy="31" r="1.5" fill="#e0d090"/><circle cx="32" cy="29" r="1.5" fill="#e0d090"/><circle cx="40" cy="31" r="1.5" fill="#e0d090"/><circle cx="28" cy="33" r="1.5" fill="#e0d090"/><circle cx="36" cy="33" r="1.5" fill="#e0d090"/></svg>`, en: "Nabanna Rice", bn: "নবান্নের ভাত" },
                { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><ellipse cx="22" cy="38" rx="12" ry="16" fill="#c8a060" transform="rotate(-30 22 38)"/><ellipse cx="22" cy="38" rx="10" ry="14" fill="#d4b070" transform="rotate(-30 22 38)"/><ellipse cx="42" cy="36" rx="12" ry="16" fill="#c8a060" transform="rotate(20 42 36)"/><ellipse cx="42" cy="36" rx="10" ry="14" fill="#d4b070" transform="rotate(20 42 36)"/><path d="M28 36 Q32 32 36 36" stroke="#a08040" stroke-width="2" fill="none"/><path d="M20 34 Q22 30 24 34" stroke="#a08040" stroke-width="1.5" fill="none"/><path d="M40 34 Q42 30 44 34" stroke="#a08040" stroke-width="1.5" fill="none"/></svg>`, en: "Roasted Peanuts", bn: "বাদাম ভাজা" },
                { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><path d="M32 54 L28 40 L16 30 Q20 18 28 22 L32 30 L36 22 Q44 18 48 30 L36 40Z" fill="#27ae60"/><path d="M32 54 L32 30" stroke="#1e8449" stroke-width="2.5"/><path d="M28 40 Q32 36 36 40" stroke="#1e8449" stroke-width="1.5" fill="none"/><path d="M22 32 Q28 28 34 32" stroke="#1e8449" stroke-width="1.5" fill="none"/><path d="M30 32 Q36 28 42 32" stroke="#1e8449" stroke-width="1.5" fill="none"/></svg>`, en: "Mustard Greens", bn: "সরিষা শাক" }
            ],
            festivals: [
                { en: "Nobanno", bn: "নবান্ন", desc: "The ancient festival of new rice, when farmers offer freshly harvested paddy to the gods and hold communal feasts." },
                { en: "Kali Puja", bn: "কালীপূজা", desc: "Worship of Goddess Kali on the new moon night, with lamps and firecrackers lighting the darkness." },
                { en: "Kartik Puja", bn: "কার্তিক পূজা", desc: "Devotion to the god Kartik, protector and warrior deity, observed in rural Bengal." }
            ],
            nature: {
                flowers: [{ emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><circle cx="32" cy="32" r="10" fill="#f5c842"/><g fill="#e8a020"><path d="M32 20 Q35 26 32 32 Q29 26 32 20Z"/><path d="M32 44 Q35 38 32 32 Q29 38 32 44Z"/><path d="M20 32 Q26 29 32 32 Q26 35 20 32Z"/><path d="M44 32 Q38 29 32 32 Q38 35 44 32Z"/><path d="M22 22 Q27 27 32 32 Q26 28 22 22Z"/><path d="M42 42 Q37 37 32 32 Q38 36 42 42Z"/><path d="M42 22 Q37 27 32 32 Q38 28 42 22Z"/><path d="M22 42 Q27 37 32 32 Q26 36 22 42Z"/></g><g fill="#ffd700"><path d="M32 22 Q34 27 32 32 Q30 27 32 22Z"/><path d="M32 42 Q34 37 32 32 Q30 37 32 42Z"/><path d="M22 32 Q27 30 32 32 Q27 34 22 32Z"/><path d="M42 32 Q37 30 32 32 Q37 34 42 32Z"/></g><circle cx="32" cy="32" r="5" fill="#e07020"/></svg>`, en: "Gaada Phool", bn: "গাঁদা ফুল" }, { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><circle cx="32" cy="32" r="4" fill="#ffd700"/><g fill="#e91e8c"><path d="M32 32 Q28 18 26 10 Q32 16 32 28Z"/><path d="M32 32 Q36 18 38 10 Q32 16 32 28Z"/><path d="M32 32 Q18 28 10 26 Q16 32 28 32Z"/><path d="M32 32 Q46 28 54 26 Q48 32 36 32Z"/><path d="M32 32 Q28 46 26 54 Q32 48 32 36Z"/><path d="M32 32 Q36 46 38 54 Q32 48 32 36Z"/><path d="M32 32 Q20 20 14 14 Q20 20 28 28Z"/><path d="M32 32 Q44 20 50 14 Q44 20 36 28Z"/></g><circle cx="32" cy="32" r="3" fill="#fff176"/></svg>`, en: "Cosmos", bn: "কসমস" }, { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><circle cx="32" cy="32" r="5" fill="#ffd700"/><g fill="#f5f5f5"><path d="M32 32 Q30 20 30 12 Q32 18 32 28Z"/><path d="M32 32 Q34 20 34 12 Q32 18 32 28Z"/><path d="M32 32 Q20 30 12 30 Q18 32 28 32Z"/><path d="M32 32 Q44 30 52 30 Q46 32 36 32Z"/><path d="M32 32 Q30 44 30 52 Q32 46 32 36Z"/><path d="M32 32 Q34 44 34 52 Q32 46 32 36Z"/><path d="M32 32 Q22 22 16 16 Q22 22 28 28Z"/><path d="M32 32 Q42 22 48 16 Q42 22 36 28Z"/><path d="M32 32 Q22 42 16 48 Q22 42 28 36Z"/><path d="M32 32 Q42 42 48 48 Q42 42 36 36Z"/></g><circle cx="32" cy="32" r="4" fill="#ffc107"/></svg>`, en: "Chandramallika", bn: "চন্দ্রমল্লিকা" }],
                birds: [{ emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><ellipse cx="22" cy="38" rx="11" ry="7" fill="#5a3a1a"/><ellipse cx="30" cy="34" rx="11" ry="7" fill="#6a4a2a"/><ellipse cx="22" cy="36" rx="9" ry="5" fill="#7a5a3a"/><circle cx="30" cy="30" r="5" fill="#2d6a1a"/><circle cx="31" cy="29" r="2" fill="white"/><circle cx="31.5" cy="29" r="1" fill="#1a1a1a"/><path d="M34 31 L40 30 L36 33Z" fill="#f5c842"/><path d="M10 38 Q6 32 10 38 Q6 44 10 38Z" fill="#5a3a1a"/><ellipse cx="46" cy="28" rx="9" ry="6" fill="#3a5a8a" opacity=".7"/><ellipse cx="54" cy="24" rx="7" ry="5" fill="#4a6a9a" opacity=".6"/></svg>`, en: "Migratory Ducks", bn: "পরিযায়ী হাঁস" }, { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><ellipse cx="32" cy="34" rx="14" ry="10" fill="#1a1a1a"/><ellipse cx="32" cy="33" rx="12" ry="9" fill="#2d2d2d"/><ellipse cx="40" cy="30" rx="8" ry="6" fill="#1a1a1a"/><circle cx="44" cy="28" r="4" fill="#ff0000"/><circle cx="45" cy="27" r="1.5" fill="black"/><circle cx="45.5" cy="27" r=".5" fill="white"/><path d="M46 30 L52 28 L48 32Z" fill="#ffcc00"/><path d="M18 34 Q12 28 10 36 Q14 40 18 36Z" fill="#1a1a1a"/><path d="M32 44 L24 56 M32 44 L32 58 M32 44 L40 56" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round"/></svg>`, en: "Koel", bn: "কোয়েল" }, { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><ellipse cx="32" cy="34" rx="12" ry="9" fill="#27ae60"/><ellipse cx="32" cy="35" rx="10" ry="7" fill="#2ecc71"/><ellipse cx="40" cy="29" rx="7" ry="5" fill="#27ae60"/><circle cx="44" cy="27" r="4" fill="#1e8449"/><circle cx="45" cy="26" r="1.5" fill="white"/><circle cx="45.5" cy="26" r=".7" fill="#1a1a1a"/><path d="M46 29 L52 28 L48 31Z" fill="#e74c3c"/><path d="M18 34 Q12 28 10 36 Q14 40 18 36Z" fill="#27ae60"/><path d="M26 44 L20 56 M32 45 L32 58 M38 44 L44 56" stroke="#27ae60" stroke-width="2.5" stroke-linecap="round"/><path d="M28 30 Q32 26 36 30" stroke="#1e8449" stroke-width="1.5" fill="none"/></svg>`, en: "Parakeet", bn: "টিয়া" }],
                other: [{ emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><ellipse cx="32" cy="42" rx="10" ry="14" fill="#a0d8f0" opacity=".85"/><ellipse cx="32" cy="40" rx="8" ry="10" fill="#c0e8f8"/><path d="M32 28 L22 42 Q22 54 32 56 Q42 54 42 42Z" fill="#a0d8f0" opacity=".5"/><circle cx="28" cy="38" r="2" fill="white" opacity=".7"/><path d="M30 10 Q32 6 34 10 Q36 14 34 18 Q32 20 30 18 Q28 14 30 10Z" fill="#27ae60"/></svg>`, en: "Morning Dew", bn: "শিশিরবিন্দু" }, { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><rect x="8" y="24" width="48" height="5" rx="2.5" fill="#c0c8d0" opacity=".7"/><rect x="12" y="32" width="44" height="5" rx="2.5" fill="#d0d8e0" opacity=".6"/><rect x="6" y="40" width="52" height="5" rx="2.5" fill="#c0c8d0" opacity=".7"/><rect x="14" y="48" width="40" height="5" rx="2.5" fill="#d0d8e0" opacity=".5"/><line x1="28" y1="8" x2="28" y2="22" stroke="#5a5a6a" stroke-width="2" stroke-linecap="round"/><line x1="36" y1="6" x2="36" y2="22" stroke="#5a5a6a" stroke-width="2" stroke-linecap="round"/></svg>`, en: "Evening Mist", bn: "সন্ধ্যার কুয়াশা" }]
            },
            poem: {
                bn: "আবার আসিব ফিরে ধান্যশ্যামল বাংলায়,\nজলের কাছাকাছি — ভাটার কিনারে।",
                en: "I shall return to this paddy-green Bengal once more,\nClose to the water — along the tidal shore.",
                author: "— Jibanananda Das"
            },
            compareData: { rainfall: "Low", humidity: "Low-Moderate", sunlight: "Mild, golden", agriculture: "Major rice harvest (Aman)" }
        },
        winter: {
            title: "Winter", titleBn: "শীত",
            icon: "fa-snowflake",
            period: "Mid-December – Mid-February",
            periodBn: "পৌষ – মাঘ",
            temperature: "15°C",
            particleColor: "#a0c4ff",
            description: "Winter drapes Bangladesh in cool, crisp mornings thick with fog. The northern plains see temperatures plunge near 5°C. This is the season of Pitha — the beloved rice-flour cakes made from date palm jaggery — shared over fires while the smell of fresh mustard blossoms fills the countryside.",
            descriptionBn: "শীতকাল বাংলাদেশকে ঢেকে দেয় কুয়াশায়। উত্তরের মাঠে তাপমাত্রা ৫°C-এর কাছে নামে। পিঠা-পুলির এই মৌসুমে খেজুর গুড়ের মিষ্টি গন্ধে মেতে ওঠে গ্রামবাংলা।",
            characteristics: ["Cool & Crisp", "Dense Fog", "Pitha Festival", "Mustard Fields", "Poush Parbon"],
            foods: [
                { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><ellipse cx="32" cy="40" rx="20" ry="8" fill="#e8d0a0"/><ellipse cx="32" cy="36" rx="18" ry="10" fill="#f5e8c0"/><ellipse cx="32" cy="33" rx="16" ry="8" fill="white"/><path d="M18 34 Q32 28 46 34" stroke="#c8a060" stroke-width="1.5" fill="none"/><path d="M22 30 Q32 24 42 30" stroke="#d4b070" stroke-width="1.5" fill="none"/><path d="M26 22 Q28 14 30 18 M32 20 Q32 12 34 16 M36 22 Q38 14 38 18" stroke="#aaaaaa" stroke-width="1.5" fill="none" opacity=".6"/></svg>`, en: "Bhapa Pitha", bn: "ভাপা পিঠা" },
                { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><path d="M10 36 Q10 20 32 20 Q54 20 54 36 Q54 52 32 52 Q10 52 10 36Z" fill="#f5e090"/><path d="M16 36 Q16 26 32 26 Q48 26 48 36 Q48 46 32 46 Q16 46 16 36Z" fill="#fff8d0"/><path d="M20 36 Q22 30 32 30 Q42 30 44 36" stroke="#d4a849" stroke-width="2" fill="none"/><ellipse cx="32" cy="36" rx="8" ry="4" fill="#c8702a" opacity=".7"/></svg>`, en: "Patishapta", bn: "পাটিসাপটা" },
                { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><ellipse cx="32" cy="46" rx="18" ry="6" fill="#8b4513"/><rect x="16" y="26" width="32" height="22" rx="8" fill="#a0522d"/><rect x="18" y="28" width="28" height="18" rx="7" fill="#cd853f"/><ellipse cx="32" cy="28" rx="14" ry="5" fill="#daa520" opacity=".8"/><path d="M28 18 L32 12 L36 18 L38 24 L26 24Z" fill="#a0522d"/><rect x="30" y="20" width="4" height="6" rx="1" fill="#8b4513"/></svg>`, en: "Khejur Gur", bn: "খেজুর গুড়" },
                { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><path d="M32 14 L38 40 Q36 52 32 54 Q28 52 26 40Z" fill="#e07020"/><path d="M32 14 L36 38 Q34 50 32 52 Q30 50 28 38Z" fill="#f08030" opacity=".7"/><path d="M32 14 Q24 8 20 14 Q24 20 32 14Z" fill="#27ae60"/><path d="M32 14 Q40 8 44 14 Q40 20 32 14Z" fill="#27ae60"/><path d="M32 14 Q28 6 32 10 Q36 6 32 14Z" fill="#2ecc71"/></svg>`, en: "Gajar Halwa", bn: "গাজরের হালুয়া" },
                { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><rect x="16" y="28" width="32" height="24" rx="4" fill="#8b4513"/><rect x="18" y="30" width="28" height="20" rx="3" fill="#a0522d"/><ellipse cx="32" cy="30" rx="14" ry="5" fill="#c87941"/><path d="M48 36 Q56 36 54 44 Q56 48 48 48" stroke="#a0522d" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M22 20 Q24 12 26 16 M30 18 Q30 10 32 14 M36 20 Q38 12 38 16" stroke="#888" stroke-width="1.5" fill="none" opacity=".7" stroke-linecap="round"/></svg>`, en: "Masala Cha", bn: "মশলা চা" },
                { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><path d="M32 54 L28 40 L16 30 Q20 18 28 22 L32 30 L36 22 Q44 18 48 30 L36 40Z" fill="#27ae60"/><path d="M32 54 L32 30" stroke="#1e8449" stroke-width="2.5"/><path d="M28 40 Q32 36 36 40" stroke="#1e8449" stroke-width="1.5" fill="none"/><path d="M22 32 Q28 28 34 32" stroke="#1e8449" stroke-width="1.5" fill="none"/><path d="M30 32 Q36 28 42 32" stroke="#1e8449" stroke-width="1.5" fill="none"/></svg>`, en: "Sarisha Shaak", bn: "সরিষা শাক" }
            ],
            festivals: [
                { en: "Poush Parbon", bn: "পৌষ পার্বণ", desc: "The mid-winter harvest festival when families gather to make dozens of varieties of pitha from new rice and date palm jaggery." },
                { en: "Shab-e-Barat", bn: "শবে বরাত", desc: "Night of forgiveness in Islamic tradition, observed with prayers, fireworks and distribution of halwa." },
                { en: "Saraswati Puja", bn: "সরস্বতী পূজা", desc: "Worship of the goddess of learning, celebrated by students who offer books and pray for wisdom." }
            ],
            nature: {
                flowers: [{ emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><rect x="30" y="40" width="4" height="16" rx="2" fill="#5a3010"/><g fill="#ffd700"><circle cx="22" cy="28" r="5"/><circle cx="32" cy="22" r="5"/><circle cx="42" cy="28" r="5"/><circle cx="18" cy="36" r="4"/><circle cx="46" cy="36" r="4"/><circle cx="28" cy="38" r="4"/><circle cx="36" cy="38" r="4"/></g><g fill="#f5c842" opacity=".6"><path d="M20 26 Q22 20 26 24 Q22 24 20 26Z"/><path d="M30 20 Q32 14 34 20 Q32 18 30 20Z"/><path d="M40 26 Q42 20 44 24 Q40 24 40 26Z"/></g></svg>`, en: "Mustard Flowers", bn: "সরিষা ফুল" }, { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><circle cx="32" cy="32" r="10" fill="#f5c842"/><g fill="#e8a020"><path d="M32 20 Q35 26 32 32 Q29 26 32 20Z"/><path d="M32 44 Q35 38 32 32 Q29 38 32 44Z"/><path d="M20 32 Q26 29 32 32 Q26 35 20 32Z"/><path d="M44 32 Q38 29 32 32 Q38 35 44 32Z"/><path d="M22 22 Q27 27 32 32 Q26 28 22 22Z"/><path d="M42 42 Q37 37 32 32 Q38 36 42 42Z"/><path d="M42 22 Q37 27 32 32 Q38 28 42 22Z"/><path d="M22 42 Q27 37 32 32 Q26 36 22 42Z"/></g><g fill="#ffd700"><path d="M32 22 Q34 27 32 32 Q30 27 32 22Z"/><path d="M32 42 Q34 37 32 32 Q30 37 32 42Z"/><path d="M22 32 Q27 30 32 32 Q27 34 22 32Z"/><path d="M42 32 Q37 30 32 32 Q37 34 42 32Z"/></g><circle cx="32" cy="32" r="5" fill="#e07020"/></svg>`, en: "Marigold", bn: "গাঁদা" }, { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><circle cx="32" cy="32" r="6" fill="#c0392b"/><g fill="#e74c3c"><path d="M32 32 Q29 20 28 12 Q32 18 32 28Z"/><path d="M32 32 Q35 20 36 12 Q32 18 32 28Z"/><path d="M32 32 Q20 29 12 28 Q18 32 28 32Z"/><path d="M32 32 Q44 29 52 28 Q46 32 36 32Z"/><path d="M32 32 Q29 44 28 52 Q32 46 32 36Z"/><path d="M32 32 Q35 44 36 52 Q32 46 32 36Z"/><path d="M32 32 Q21 21 14 14 Q20 20 28 28Z"/><path d="M32 32 Q43 21 50 14 Q44 20 36 28Z"/></g><g fill="#f1948a"><path d="M32 32 Q30 22 30 16 Q32 20 32 28Z"/><path d="M32 32 Q34 22 34 16 Q32 20 32 28Z"/><path d="M32 32 Q22 30 16 30 Q20 32 28 32Z"/><path d="M32 32 Q42 30 48 30 Q44 32 36 32Z"/></g></svg>`, en: "Dahlia", bn: "ডালিয়া" }],
                birds: [{ emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><path d="M10 28 Q14 22 18 28" stroke="#5a3a1a" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M22 22 Q26 16 30 22" stroke="#5a3a1a" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M34 18 Q38 12 42 18" stroke="#5a3a1a" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M46 22 Q50 16 54 22" stroke="#5a3a1a" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M14 38 Q18 32 22 38" stroke="#7a5a3a" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M38 32 Q42 26 46 32" stroke="#7a5a3a" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`, en: "Migratory Birds", bn: "পরিযায়ী পাখি" }, { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><ellipse cx="32" cy="34" rx="14" ry="16" fill="#c8b890"/><ellipse cx="32" cy="32" rx="12" ry="13" fill="#e8d8b0"/><ellipse cx="32" cy="30" rx="10" ry="11" fill="#f5edd0"/><path d="M22 22 Q26 14 30 20 Q28 16 24 18Z" fill="#c8b890"/><path d="M42 22 Q38 14 34 20 Q36 16 40 18Z" fill="#c8b890"/><ellipse cx="27" cy="28" rx="4" ry="5" fill="white"/><ellipse cx="37" cy="28" rx="4" ry="5" fill="white"/><circle cx="27" cy="29" r="2.5" fill="#1a1a1a"/><circle cx="37" cy="29" r="2.5" fill="#1a1a1a"/><circle cx="27.5" cy="28.5" r="1" fill="white"/><circle cx="37.5" cy="28.5" r="1" fill="white"/><path d="M29 33 L32 36 L35 33 Q32 35 29 33Z" fill="#e07020"/></svg>`, en: "Barn Owl", bn: "প্যাঁচা" }, { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><ellipse cx="30" cy="34" rx="14" ry="10" fill="#d0c8c0"/><ellipse cx="30" cy="33" rx="12" ry="8" fill="#e8e0d8"/><ellipse cx="38" cy="28" rx="8" ry="6" fill="#d0c8c0"/><circle cx="42" cy="26" r="4" fill="#d0c8c0"/><circle cx="43" cy="25" r="1.5" fill="#1a1a1a"/><path d="M46 28 L52 26 L48 30Z" fill="#c8a060"/><path d="M16 34 Q10 28 8 36 Q12 40 16 36Z" fill="#c8c0b8"/><path d="M26 44 L20 54 M30 45 L30 56 M34 44 L40 54" stroke="#d0c8c0" stroke-width="2.5" stroke-linecap="round"/></svg>`, en: "Grey Pigeon", bn: "পায়রা" }],
                other: [{ emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><rect x="4" y="20" width="56" height="6" rx="3" fill="#b0b8c0" opacity=".8"/><rect x="8" y="30" width="52" height="6" rx="3" fill="#c0c8d0" opacity=".7"/><rect x="4" y="40" width="56" height="6" rx="3" fill="#b0b8c0" opacity=".8"/><rect x="10" y="50" width="48" height="6" rx="3" fill="#c0c8d0" opacity=".6"/><circle cx="20" cy="14" r="6" fill="#c0c8d0" opacity=".5"/><circle cx="32" cy="11" r="8" fill="#d0d8e0" opacity=".5"/><circle cx="46" cy="14" r="6" fill="#c0c8d0" opacity=".5"/></svg>`, en: "Thick Fog", bn: "ঘন কুয়াশা" }, { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><circle cx="32" cy="44" r="14" fill="#f5c842"/><circle cx="32" cy="44" r="12" fill="#ffd700"/><path d="M4 44 L60 44" stroke="#f0a020" stroke-width="2" opacity=".5"/><path d="M32 10 L32 20 M14 16 L20 22 M50 16 L44 22 M8 34 L18 34 M46 34 L56 34" stroke="#ffd700" stroke-width="2.5" stroke-linecap="round"/><path d="M4 50 Q20 44 36 50 Q52 56 60 50" stroke="#e07020" stroke-width="2" fill="none" opacity=".6"/></svg>`, en: "Late Sunrise", bn: "দেরিতে সূর্যোদয়" }]
            },
            poem: {
                bn: "পৌষ তোদের ডাক দিয়েছে, আয় রে চলে আয়,\nআয় রে ছুটে আয়।",
                en: "Poush has called you, come, come running,\nCome dashing now.",
                author: "— Rabindranath Tagore"
            },
            compareData: { rainfall: "Minimal", humidity: "Low", sunlight: "Short days, weak sun", agriculture: "Mustard, Wheat, Vegetables" }
        },
        spring: {
            title: "Spring", titleBn: "বসন্ত",
            icon: "fa-seedling",
            period: "Mid-February – Mid-April",
            periodBn: "ফাল্গুন – চৈত্র",
            temperature: "25°C",
            particleColor: "#6bcf7f",
            description: "Spring — the king of seasons in Bengali tradition — arrives in an explosion of colour. Krishnochura and Shimul trees burst into red flame against the blue sky. Pohela Falgun is celebrated with yellow sarees and flowers. The warm breeze carries the Cuckoo's call and the fragrance of wild blossoms.",
            descriptionBn: "বসন্ত — ঋতুরাজ — এসে পড়ে বর্ণময় বিস্ফোরণে। কৃষ্ণচূড়া আর শিমুলের লাল আগুন জ্বলে। পহেলা ফাল্গুনে হলুদ শাড়ি আর ফুলের সাজে সেজে ওঠে বাংলা। বাতাসে কোকিলের ডাক আর ফুলের সুবাস।",
            characteristics: ["Blooming Flowers", "Warming Breeze", "Pohela Falgun", "Holi Festival", "Krishnochura Blooms"],
            foods: [
                { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><rect x="20" y="24" width="24" height="28" rx="4" fill="#f9a8d4" opacity=".9"/><ellipse cx="32" cy="24" rx="12" ry="4" fill="#f472b6"/><rect x="22" y="24" width="20" height="4" rx="2" fill="#ec4899" opacity=".7"/><circle cx="26" cy="30" r="3" fill="#fbbf24" opacity=".8"/><circle cx="32" cy="34" r="3" fill="#34d399" opacity=".8"/><circle cx="38" cy="30" r="3" fill="#f472b6" opacity=".8"/><line x1="46" y1="22" x2="52" y2="14" stroke="#9ca3af" stroke-width="2" stroke-linecap="round"/></svg>`, en: "Flower Sherbet", bn: "ফুলের শরবত" },
                { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><ellipse cx="32" cy="38" rx="20" ry="16" fill="#f5c842"/><ellipse cx="32" cy="36" rx="18" ry="14" fill="#f9d860"/><ellipse cx="32" cy="34" rx="14" ry="10" fill="#fff3c0"/><circle cx="24" cy="32" r="3" fill="#e74c3c" opacity=".8"/><circle cx="32" cy="30" r="3" fill="#27ae60" opacity=".8"/><circle cx="40" cy="32" r="3" fill="#3498db" opacity=".8"/><ellipse cx="32" cy="34" rx="8" ry="5" fill="#f9c842" opacity=".5"/></svg>`, en: "Mishti", bn: "মিষ্টি" },
                { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><rect x="20" y="16" width="24" height="36" rx="4" fill="#84cc16" opacity=".9"/><rect x="22" y="18" width="20" height="32" rx="3" fill="#a3e635" opacity=".8"/><ellipse cx="32" cy="18" rx="10" ry="3.5" fill="#65a30d"/><path d="M26 24 Q32 20 38 24" stroke="#4d7c0f" stroke-width="1.5" fill="none"/><path d="M26 30 Q32 26 38 30" stroke="#4d7c0f" stroke-width="1.5" fill="none"/><line x1="44" y1="14" x2="50" y2="8" stroke="#9ca3af" stroke-width="2" stroke-linecap="round"/></svg>`, en: "Sugarcane Juice", bn: "আখের রস" },
                { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><ellipse cx="32" cy="44" rx="20" ry="8" fill="#c8a060"/><ellipse cx="32" cy="38" rx="20" ry="12" fill="#d4a849"/><ellipse cx="32" cy="33" rx="18" ry="9" fill="#e8c070"/><ellipse cx="32" cy="30" rx="16" ry="7" fill="#f5d890"/><path d="M22 29 Q32 24 42 29" stroke="#c8a060" stroke-width="1.5" fill="none"/></svg>`, en: "Chhatu", bn: "ছাতু" },
                { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><ellipse cx="32" cy="46" rx="22" ry="7" fill="#c8b060"/><ellipse cx="32" cy="40" rx="22" ry="10" fill="#d4c070"/><ellipse cx="32" cy="36" rx="20" ry="8" fill="#f0f0e0"/><ellipse cx="32" cy="33" rx="18" ry="6" fill="white" opacity=".9"/><ellipse cx="44" cy="30" rx="10" ry="5" fill="#a0a8c0" transform="rotate(-20 44 30)"/><ellipse cx="44" cy="30" rx="8" ry="4" fill="#b8c0d8" transform="rotate(-20 44 30)"/><circle cx="50" cy="28" r="2" fill="#3a3a3a"/></svg>`, en: "Paanta Ilish", bn: "পান্তা ইলিশ" },
                { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><ellipse cx="32" cy="42" rx="20" ry="10" fill="#f5c842"/><ellipse cx="32" cy="36" rx="18" ry="12" fill="#f9d860"/><circle cx="22" cy="32" r="5" fill="#e74c3c"/><circle cx="32" cy="28" r="5" fill="#9b59b6"/><circle cx="42" cy="32" r="5" fill="#3498db"/><circle cx="28" cy="38" r="4" fill="#27ae60"/><circle cx="38" cy="38" r="4" fill="#e67e22"/></svg>`, en: "Holi Sweets", bn: "হোলির মিষ্টি" }
            ],
            festivals: [
                { en: "Pohela Falgun", bn: "পহেলা ফাল্গুন", desc: "First day of spring, celebrated with yellow and orange clothes, flowers, music and Tagore songs on February 13/14." },
                { en: "Holi", bn: "হোলি", desc: "Festival of colours, celebrated with coloured powder, water and community joy marking the victory of good over evil." },
                { en: "Shab-e-Qadr", bn: "শবে কদর", desc: "The Night of Power in Ramadan, one of the holiest nights in Islam, falls in this season in many years." }
            ],
            nature: {
                flowers: [{ emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><circle cx="32" cy="32" r="4" fill="#e8a020"/><g fill="#e74c3c"><path d="M32 32 Q20 18 18 8 Q26 12 28 24Z"/><path d="M32 32 Q44 18 46 8 Q38 12 36 24Z"/><path d="M32 32 Q16 28 8 20 Q14 28 26 30Z"/><path d="M32 32 Q48 28 56 20 Q50 28 38 30Z"/><path d="M32 32 Q22 44 20 54 Q28 48 30 36Z"/><path d="M32 32 Q42 44 44 54 Q36 48 34 36Z"/></g><circle cx="32" cy="32" r="3" fill="#ffd700"/></svg>`, en: "Krishnochura", bn: "কৃষ্ণচূড়া" }, { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><circle cx="32" cy="32" r="3" fill="#ffd700"/><g fill="#c0392b"><path d="M32 32 Q28 18 24 12 Q30 16 32 28Z"/><path d="M32 32 Q36 18 40 12 Q34 16 32 28Z"/><path d="M32 32 Q18 30 12 26 Q18 30 28 32Z"/><path d="M32 32 Q46 30 52 26 Q46 30 36 32Z"/><path d="M32 32 Q28 46 26 52 Q30 46 32 36Z"/></g><circle cx="32" cy="32" r="2" fill="#ff9500"/></svg>`, en: "Shimul", bn: "শিমুল" }, { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><circle cx="32" cy="32" r="3" fill="#e07020"/><g fill="#e67e22"><path d="M32 32 Q24 16 22 8 Q30 14 30 26Z"/><path d="M32 32 Q40 16 42 8 Q34 14 34 26Z"/><path d="M32 32 Q14 26 8 18 Q16 24 26 30Z"/><path d="M32 32 Q50 26 56 18 Q48 24 38 30Z"/><path d="M32 32 Q24 44 22 52 Q30 46 30 36Z"/><path d="M32 32 Q40 44 42 52 Q34 46 34 36Z"/></g><circle cx="32" cy="32" r="2" fill="#ffd700"/></svg>`, en: "Palash", bn: "পলাশ" }],
                birds: [{ emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><ellipse cx="32" cy="34" rx="14" ry="10" fill="#1a1a1a"/><ellipse cx="32" cy="33" rx="12" ry="9" fill="#2d2d2d"/><ellipse cx="40" cy="30" rx="8" ry="6" fill="#1a1a1a"/><circle cx="44" cy="28" r="4" fill="#ff0000"/><circle cx="45" cy="27" r="1.5" fill="black"/><circle cx="45.5" cy="27" r=".5" fill="white"/><path d="M46 30 L52 28 L48 32Z" fill="#ffcc00"/><path d="M18 34 Q12 28 10 36 Q14 40 18 36Z" fill="#1a1a1a"/><path d="M32 44 L24 56 M32 44 L32 58 M32 44 L40 56" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round"/></svg>`, en: "Asian Koel", bn: "কোকিল" }, { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><ellipse cx="32" cy="34" rx="12" ry="9" fill="#27ae60"/><ellipse cx="32" cy="35" rx="10" ry="7" fill="#2ecc71"/><ellipse cx="40" cy="29" rx="7" ry="5" fill="#27ae60"/><circle cx="44" cy="27" r="4" fill="#1e8449"/><circle cx="45" cy="26" r="1.5" fill="white"/><circle cx="45.5" cy="26" r=".7" fill="#1a1a1a"/><path d="M46 29 L52 28 L48 31Z" fill="#e74c3c"/><path d="M18 34 Q12 28 10 36 Q14 40 18 36Z" fill="#27ae60"/><path d="M26 44 L20 56 M32 45 L32 58 M38 44 L44 56" stroke="#27ae60" stroke-width="2.5" stroke-linecap="round"/><path d="M28 30 Q32 26 36 30" stroke="#1e8449" stroke-width="1.5" fill="none"/></svg>`, en: "Parakeet", bn: "টিয়া" }, { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><ellipse cx="32" cy="34" rx="12" ry="9" fill="#8b6914"/><ellipse cx="32" cy="33" rx="10" ry="7" fill="#a07820"/><ellipse cx="32" cy="35" rx="8" ry="5" fill="#f5f0e0"/><ellipse cx="40" cy="29" rx="7" ry="5" fill="#8b6914"/><circle cx="44" cy="27" r="4" fill="#1a1a1a"/><path d="M36 22 Q38 16 42 18 Q40 20 38 22Z" fill="#1a1a1a"/><circle cx="45" cy="26" r="1.5" fill="white"/><path d="M46 29 L52 27 L48 31Z" fill="#888"/><path d="M18 34 Q12 28 10 36 Q14 40 18 36Z" fill="#8b6914"/><path d="M28 44 L22 54 M32 45 L32 56 M36 44 L42 54" stroke="#6b5010" stroke-width="2" stroke-linecap="round"/></svg>`, en: "Bulbul", bn: "বুলবুলি" }],
                other: [{ emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><ellipse cx="32" cy="34" rx="4" ry="10" fill="#1a1a1a"/><path d="M32 28 Q20 14 10 20 Q8 32 20 34 Q24 38 32 36Z" fill="#e8a020"/><path d="M32 28 Q44 14 54 20 Q56 32 44 34 Q40 38 32 36Z" fill="#f5c842"/><path d="M32 36 Q20 40 12 48 Q14 54 22 50 Q28 46 32 44Z" fill="#e07020"/><path d="M32 36 Q44 40 52 48 Q50 54 42 50 Q36 46 32 44Z" fill="#f0b830"/><circle cx="30" cy="26" r="1.5" fill="#1a1a1a"/><circle cx="34" cy="26" r="1.5" fill="#1a1a1a"/><path d="M30 24 Q28 18 26 14 M34 24 Q36 18 38 14" stroke="#1a1a1a" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`, en: "Butterflies", bn: "প্রজাপতি" }, { emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.4em" height="1.4em" style="vertical-align:middle;display:inline-block"><ellipse cx="32" cy="34" rx="12" ry="10" fill="#f5c842"/><path d="M24 28 Q32 24 40 28 M22 34 Q32 30 42 34 M24 40 Q32 36 40 40" stroke="#1a1a1a" stroke-width="2" fill="none"/><circle cx="32" cy="24" r="7" fill="#1a1a1a"/><circle cx="29" cy="22" r="2" fill="#333"/><circle cx="35" cy="22" r="2" fill="#333"/><path d="M18 26 Q12 18 16 26Z" fill="#a0d8f0" opacity=".8"/><path d="M46 26 Q52 18 48 26Z" fill="#a0d8f0" opacity=".8"/><path d="M30 34 L28 44 M34 34 L36 44" stroke="#1a1a1a" stroke-width="1.5" stroke-linecap="round"/></svg>`, en: "Honeybees", bn: "মৌমাছি" }]
            },
            poem: {
                bn: "ফুলে ফুলে ঢলে ঢলে বহে কিবা মৃদু বায়,\nতটিনী-হিল্লোল তুলে কল্লোলে চলিয়া যায়।",
                en: "Flower upon flower sways as the gentle breeze flows,\nRippling the river's surface as it melodiously goes.",
                author: "— Rabindranath Tagore"
            },
            compareData: { rainfall: "Low-Moderate", humidity: "Moderate, rising", sunlight: "Long & warm days", agriculture: "Boro rice, Vegetables" }
        }
    };

    const seasonOrder = ["summer", "monsoon", "autumn", "late-autumn", "winter", "spring"];

    /* =============================================
       STATE
    ============================================= */
    let currentSeason = "summer";
    let isBangla = false;
    let isNight = true;
    let soundOn = false;
    let autoCycling = false;
    let autoCycleTimer = null;
    let audioCtx = null;
    let ambientNodes = [];
    let quizScore = 0;
    let quizTotal = 0;
    let currentQuizSeason = null;

    /* =============================================
       DOM REFS
    ============================================= */
    const seasonBtns        = document.querySelectorAll('.season-btn');
    const wheelSegments     = document.querySelectorAll('.wheel-segment');
    const seasonDisplay     = document.getElementById('seasonDisplay');
    const seasonDescription = document.getElementById('seasonDescription');
    const temperatureDisplay= document.getElementById('temperatureDisplay');
    const visualElement     = document.getElementById('visualElement');
    const currentSeasonText = document.getElementById('current-season-text');
    const countdownText     = document.getElementById('countdown-text');
    const weatherText       = document.getElementById('weather-text');
    const foodsGrid         = document.getElementById('foodsGrid');
    const festivalTimeline  = document.getElementById('festivalTimeline');
    const natureGrid        = document.getElementById('natureGrid');
    const poetrySection     = document.getElementById('poetrySection');
    const compareGrid       = document.getElementById('compareGrid');
    const compareSelect     = document.getElementById('compareSelect');
    const wheelCenterIcon   = document.querySelector('.wheel-center-icon i');

    const langToggle        = document.getElementById('langToggle');
    const soundToggle       = document.getElementById('soundToggle');
    const themeToggle       = document.getElementById('themeToggle');
    const autoCycleToggle   = document.getElementById('autoCycleToggle');
    const shareBtn          = document.getElementById('shareBtn');

    const quizClues         = document.getElementById('quizClues');
    const quizOptions       = document.getElementById('quizOptions');
    const quizResult        = document.getElementById('quizResult');
    const quizNextBtn       = document.getElementById('quizNextBtn');
    const quizScoreEl       = document.getElementById('quizScore');
    const quizTotalEl       = document.getElementById('quizTotal');

    /* =============================================
       PARTICLES.JS INIT
    ============================================= */
    function initParticles(color) {
        if (window.pJSDom && window.pJSDom.length > 0) {
            window.pJSDom[0].pJS.fn.vendors.destroypJS();
            window.pJSDom = [];
        }
        particlesJS('particles-js', {
            particles: {
                number: { value: 60, density: { enable: true, value_area: 900 } },
                color: { value: color || "#00d4ff" },
                shape: { type: "circle" },
                opacity: { value: 0.4, random: true },
                size: { value: 2.5, random: true },
                line_linked: { enable: true, distance: 140, color: color || "#00d4ff", opacity: 0.25, width: 1 },
                move: { enable: true, speed: 1.5, direction: "none", random: true, straight: false, out_mode: "out", bounce: false }
            },
            interactivity: {
                detect_on: "canvas",
                events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true }
            },
            retina_detect: true
        });
    }

    /* =============================================
       SEASON DETECTION
    ============================================= */
    function detectCurrentSeason() {
        const now = new Date();
        const m = now.getMonth() + 1;
        const d = now.getDate();
        if ((m===4&&d>=16)||m===5||(m===6&&d<=15))  return "summer";
        if ((m===6&&d>=16)||m===7||(m===8&&d<=15))  return "monsoon";
        if ((m===8&&d>=16)||m===9||(m===10&&d<=15)) return "autumn";
        if ((m===10&&d>=16)||m===11||(m===12&&d<=15)) return "late-autumn";
        if ((m===12&&d>=16)||m===1||(m===2&&d<=15)) return "winter";
        if ((m===2&&d>=16)||m===3||(m===4&&d<=15)) return "spring";
        return "summer";
    }

    /* =============================================
       COUNTDOWN TO NEXT SEASON
    ============================================= */
    function getSeasonStartDate(season, year) {
        const map = {
            summer: [3, 16], monsoon: [5, 16], autumn: [7, 16],
            "late-autumn": [9, 16], winter: [11, 16], spring: [1, 16]
        };
        const [m, d] = map[season];
        return new Date(year, m, d);
    }

    function updateCountdown() {
        const now = new Date();
        const idx = seasonOrder.indexOf(currentSeason);
        const nextSeason = seasonOrder[(idx + 1) % seasonOrder.length];
        const nextData = seasons[nextSeason];

        let nextStart = getSeasonStartDate(nextSeason, now.getFullYear());
        if (nextStart <= now) nextStart = getSeasonStartDate(nextSeason, now.getFullYear() + 1);

        const diff = nextStart - now;
        const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

        const name = isBangla ? nextData.titleBn : nextData.title;
        const text = isBangla
            ? `${name} আসতে ${days} দিন বাকি`
            : `${days} days until ${name}`;
        countdownText.textContent = text;
    }

    /* =============================================
       WEATHER (Open-Meteo — free, no key)
    ============================================= */
    async function fetchWeather() {
        try {
            // Dhaka coordinates default; try geolocation first
            let lat = 23.8103, lon = 90.4125, locName = "Dhaka";
            try {
                const pos = await new Promise((res, rej) =>
                    navigator.geolocation.getCurrentPosition(res, rej, { timeout: 4000 })
                );
                lat = pos.coords.latitude.toFixed(4);
                lon = pos.coords.longitude.toFixed(4);
                locName = "Your location";
            } catch { /* use Dhaka defaults */ }

            const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=relativehumidity_2m&forecast_days=1`;
            const res = await fetch(url);
            const data = await res.json();
            const cw = data.current_weather;
            const temp = Math.round(cw.temperature);
            const windspeed = Math.round(cw.windspeed);
            const humidity = data.hourly?.relativehumidity_2m?.[new Date().getHours()] || '--';

            weatherText.textContent = isBangla
                ? `${locName}: ${temp}°C, আর্দ্রতা ${humidity}%, বায়ু ${windspeed}km/h`
                : `${locName}: ${temp}°C, Humidity ${humidity}%, Wind ${windspeed}km/h`;
        } catch {
            weatherText.textContent = isBangla ? "আবহাওয়া পাওয়া যায়নি" : "Weather unavailable";
        }
    }

    /* =============================================
       BACKGROUND ANIMATIONS
    ============================================= */
    function createBackgroundAnimations(season) {
        document.querySelectorAll('.bg-animation-element').forEach(el => el.remove());
        const bg = document.getElementById(`${season}-bg`);
        if (!bg) return;

        const create = (cls, count, setup) => {
            for (let i = 0; i < count; i++) {
                const el = document.createElement('div');
                el.className = `bg-animation-element ${cls}`;
                setup(el, i);
                bg.appendChild(el);
            }
        };

        if (season === 'spring') {
            create('spring-flower', 18, (el) => {
                el.style.left = `${Math.random()*100}%`;
                el.style.animationDelay = `${Math.random()*20}s`;
                const s = (10+Math.random()*22)+'px';
                el.style.width = s; el.style.height = s;
            });
        } else if (season === 'summer') {
            const sun = document.createElement('div');
            sun.className = 'bg-animation-element sun';
            bg.appendChild(sun);
        } else if (season === 'monsoon') {
            create('bg-rain-drop', 60, (el) => {
                el.style.left = `${Math.random()*100}%`;
                el.style.animationDelay = `${Math.random()*5}s`;
                el.style.animationDuration = `${0.6+Math.random()*0.8}s`;
                el.style.height = (20+Math.random()*20)+'px';
            });
            const lt = document.createElement('div');
            lt.className = 'bg-animation-element bg-lightning';
            bg.appendChild(lt);
        } else if (season === 'autumn') {
            create('bg-leaf', 35, (el) => {
                el.style.left = `${Math.random()*100}%`;
                el.style.animationDelay = `${Math.random()*12}s`;
                el.style.animationDuration = `${8+Math.random()*10}s`;
                const s = (14+Math.random()*22)+'px';
                el.style.width = s; el.style.height = s;
            });
        } else if (season === 'late-autumn') {
            create('bg-late-autumn-leaf', 28, (el) => {
                el.style.left = `${Math.random()*100}%`;
                el.style.animationDelay = `${Math.random()*15}s`;
                el.style.animationDuration = `${12+Math.random()*12}s`;
                const s = (10+Math.random()*16)+'px';
                el.style.width = s; el.style.height = s;
            });
            const fog = document.createElement('div');
            fog.className = 'bg-animation-element bg-fog';
            bg.appendChild(fog);
        } else if (season === 'winter') {
            create('bg-snowflake', 70, (el) => {
                el.style.left = `${Math.random()*100}%`;
                el.style.animationDelay = `${Math.random()*12}s`;
                el.style.animationDuration = `${6+Math.random()*10}s`;
                const s = (4+Math.random()*8)+'px';
                el.style.width = s; el.style.height = s;
            });
        }
    }

    /* =============================================
       VISUAL ELEMENT
    ============================================= */
    function buildVisualElement(season) {
        visualElement.className = `visual-element ${season.replace('-','_').replace('_','')}-animation`;
        visualElement.className = 'visual-element';
        visualElement.classList.add(`${seasons[season].animation || season.replace('-','')}-animation`);
        visualElement.innerHTML = '';

        const makeEls = (cls, count, setup) => {
            for (let i = 0; i < count; i++) {
                const el = document.createElement('div');
                el.className = cls;
                setup(el);
                visualElement.appendChild(el);
            }
        };

        if (season === 'monsoon') {
            makeEls('rain-drop', 25, el => {
                el.style.left = `${Math.random()*100}%`;
                el.style.animationDelay = `${Math.random()*3}s`;
                el.style.animationDuration = `${0.4+Math.random()*0.6}s`;
            });
            const lt = document.createElement('div');
            lt.className = 'lightning';
            lt.style.cssText = 'left:50%;top:20%;transform:translateX(-50%);';
            visualElement.appendChild(lt);
        } else if (season === 'autumn') {
            makeEls('leaf', 12, el => {
                el.style.left = `${Math.random()*100}%`;
                el.style.animationDelay = `${Math.random()*4}s`;
                el.style.animationDuration = `${2.5+Math.random()*2}s`;
                const colors = ['#ff6b00','#ff9d00','#e55a00','#ffd93d'];
                el.style.background = colors[Math.floor(Math.random()*colors.length)];
            });
        } else if (season === 'late-autumn') {
            makeEls('late-autumn-leaf', 14, el => {
                el.style.left = `${Math.random()*100}%`;
                el.style.animationDelay = `${Math.random()*5}s`;
                el.style.animationDuration = `${3+Math.random()*3}s`;
            });
        } else if (season === 'winter') {
            makeEls('snowflake', 35, el => {
                el.style.left = `${Math.random()*100}%`;
                el.style.animationDelay = `${Math.random()*5}s`;
                el.style.animationDuration = `${3+Math.random()*3}s`;
                const s = (4+Math.random()*7)+'px';
                el.style.width = s; el.style.height = s;
            });
        }

        // Fix class
        visualElement.className = 'visual-element';
        const animMap = {
            summer: 'summer-animation', monsoon: 'monsoon-animation', autumn: 'autumn-animation',
            'late-autumn': 'late-autumn-animation', winter: 'winter-animation', spring: 'spring-animation'
        };
        visualElement.classList.add(animMap[season] || 'summer-animation');

        // Update glow color
        const s = seasons[season];
        visualElement.style.boxShadow = `0 0 40px ${s.particleColor}55, inset 0 0 30px rgba(0,0,0,0.4)`;
    }

    /* =============================================
       TABS
    ============================================= */
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(`tab-${btn.dataset.tab}`).classList.add('active');
        });
    });

    /* =============================================
       RENDER TABS
    ============================================= */
    function renderFoods(season) {
        const s = seasons[season];
        foodsGrid.innerHTML = s.foods.map(f => `
            <div class="food-card">
                <span class="food-emoji">${f.emoji}</span>
                <span class="food-name-en">${f.en}</span>
                <span class="food-name-bn">${f.bn}</span>
            </div>
        `).join('');
    }

    function renderFestivals(season) {
        const s = seasons[season];
        festivalTimeline.innerHTML = s.festivals.map(f => `
            <div class="festival-item">
                <div>
                    <span class="festival-name-en">${f.en}</span>
                    <span class="festival-name-bn">${f.bn}</span>
                </div>
                <div class="festival-desc">${f.desc}</div>
            </div>
        `).join('');
    }

    function renderNature(season) {
        const n = seasons[season].nature;
        const cats = [
            { title: '🌸 Flowers', titleBn: 'ফুল', items: n.flowers },
            { title: '🐦 Birds', titleBn: 'পাখি', items: n.birds },
            { title: '🌍 Elements', titleBn: 'প্রকৃতি', items: n.other }
        ];
        natureGrid.innerHTML = cats.map(cat => `
            <div class="nature-category">
                <div class="nature-category-title">${cat.title}</div>
                <div class="nature-items">
                    ${cat.items.map(it => `
                        <span class="nature-item">
                            <span class="nature-item-emoji">${it.emoji}</span>
                            <span>${isBangla ? it.bn : it.en}</span>
                        </span>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    function renderPoetry(season) {
        const p = seasons[season].poem;
        poetrySection.innerHTML = `
            <div class="poem-block">
                <span class="poem-text-bn">${p.bn.replace(/\n/g,'<br>')}</span>
                <span class="poem-text-en">${p.en.replace(/\n/g,'<br>')}</span>
                <span class="poem-author">${p.author}</span>
            </div>
        `;
    }

    function renderCompare(season) {
        const s1 = seasons[season];
        const s2Key = compareSelect.value === season
            ? seasonOrder[(seasonOrder.indexOf(season)+1) % seasonOrder.length]
            : compareSelect.value;
        const s2 = seasons[s2Key];

        const rows = [
            { label: isBangla ? 'তাপমাত্রা' : 'Temperature', v1: s1.temperature, v2: s2.temperature },
            { label: isBangla ? 'সময়কাল' : 'Period', v1: isBangla ? s1.periodBn : s1.period, v2: isBangla ? s2.periodBn : s2.period },
            { label: isBangla ? 'বৃষ্টিপাত' : 'Rainfall', v1: s1.compareData.rainfall, v2: s2.compareData.rainfall },
            { label: isBangla ? 'আর্দ্রতা' : 'Humidity', v1: s1.compareData.humidity, v2: s2.compareData.humidity },
            { label: isBangla ? 'সূর্যালোক' : 'Sunlight', v1: s1.compareData.sunlight, v2: s2.compareData.sunlight },
            { label: isBangla ? 'কৃষি' : 'Agriculture', v1: s1.compareData.agriculture, v2: s2.compareData.agriculture }
        ];

        compareGrid.innerHTML = `
            <div class="compare-card current-card">
                <h3>${isBangla ? s1.titleBn : s1.title}</h3>
                ${rows.map(r => `<div class="compare-row"><span class="compare-label">${r.label}</span><span class="compare-value">${r.v1}</span></div>`).join('')}
            </div>
            <div class="compare-card">
                <h3>${isBangla ? s2.titleBn : s2.title}</h3>
                ${rows.map(r => `<div class="compare-row"><span class="compare-label">${r.label}</span><span class="compare-value">${r.v2}</span></div>`).join('')}
            </div>
        `;
    }

    compareSelect.addEventListener('change', () => renderCompare(currentSeason));

    /* =============================================
       MAIN CHANGE SEASON
    ============================================= */
    function changeSeason(season, isAuto) {
        currentSeason = season;
        const s = seasons[season];

        document.body.setAttribute('data-season', season);

        // Buttons
        seasonBtns.forEach(b => b.classList.toggle('active', b.dataset.season === season));
        wheelSegments.forEach(b => b.classList.toggle('active', b.dataset.season === season));

        // Header
        document.querySelector('.season-title').innerHTML =
            `<i class="season-icon fas ${s.icon}"></i>
             <span>${s.title} <span class="bangla-name">(${s.titleBn})</span></span>`;

        document.querySelector('.season-period').innerHTML =
            `${s.period}<br><span class="bangla-period">${s.periodBn}</span>`;

        seasonDescription.textContent = isBangla ? s.descriptionBn : s.description;
        temperatureDisplay.textContent = s.temperature;

        // Characteristics
        document.getElementById('seasonCharacteristics').innerHTML =
            s.characteristics.map(c => `<span class="characteristic">${c}</span>`).join('');

        // Season indicator
        currentSeasonText.textContent = isAuto
            ? `${s.title} (${s.titleBn})`
            : `${s.title} (${s.titleBn}) — Selected`;

        // Backgrounds
        document.querySelectorAll('.season-bg').forEach(bg => {
            bg.classList.toggle('active', bg.id === `${season}-bg`);
        });

        createBackgroundAnimations(season);
        buildVisualElement(season);
        initParticles(s.particleColor);

        // Wheel center icon
        if (wheelCenterIcon) {
            wheelCenterIcon.className = `fas ${s.icon}`;
        }

        // Tabs
        renderFoods(season);
        renderFestivals(season);
        renderNature(season);
        renderPoetry(season);
        renderCompare(season);

        updateCountdown();

        // Ambient sound
        if (soundOn) stopAmbient();
        if (soundOn) startAmbient(season);

        // compareSelect default
        const nextIdx = (seasonOrder.indexOf(season) + 1) % seasonOrder.length;
        compareSelect.value = seasonOrder[nextIdx];
        renderCompare(season);
    }

    /* =============================================
       SEASON BUTTONS
    ============================================= */
    seasonBtns.forEach(btn => btn.addEventListener('click', () => changeSeason(btn.dataset.season, false)));
    wheelSegments.forEach(seg => seg.addEventListener('click', () => changeSeason(seg.dataset.season, false)));

    /* =============================================
       KEYBOARD NAVIGATION
    ============================================= */
    document.addEventListener('keydown', e => {
        if (e.key === 'ArrowRight') {
            const idx = seasonOrder.indexOf(currentSeason);
            changeSeason(seasonOrder[(idx+1) % seasonOrder.length], false);
        } else if (e.key === 'ArrowLeft') {
            const idx = seasonOrder.indexOf(currentSeason);
            changeSeason(seasonOrder[(idx - 1 + seasonOrder.length) % seasonOrder.length], false);
        }
    });

    /* =============================================
       AUTO CYCLE
    ============================================= */
    autoCycleToggle.addEventListener('click', () => {
        autoCycling = !autoCycling;
        autoCycleToggle.classList.toggle('active', autoCycling);
        autoCycleToggle.querySelector('i').className = autoCycling ? 'fas fa-pause' : 'fas fa-play';

        if (autoCycling) {
            autoCycleTimer = setInterval(() => {
                const idx = seasonOrder.indexOf(currentSeason);
                changeSeason(seasonOrder[(idx+1) % seasonOrder.length], false);
            }, 4000);
        } else {
            clearInterval(autoCycleTimer);
        }
    });

    /* =============================================
       LANGUAGE TOGGLE
    ============================================= */
    langToggle.addEventListener('click', () => {
        isBangla = !isBangla;
        document.body.classList.toggle('lang-bn', isBangla);
        langToggle.querySelector('.lang-en').classList.toggle('active-lang', !isBangla);
        langToggle.querySelector('.lang-bn').classList.toggle('active-lang', isBangla);

        // Update translatable static elements
        document.querySelectorAll('[data-en]').forEach(el => {
            if (el.tagName === 'SPAN' || el.tagName === 'P' || el.tagName === 'LABEL') {
                el.textContent = isBangla ? el.dataset.bn : el.dataset.en;
            }
        });

        changeSeason(currentSeason, false);
        fetchWeather();
    });

    /* =============================================
       DAY/NIGHT TOGGLE
    ============================================= */
    themeToggle.addEventListener('click', () => {
        isNight = !isNight;
        document.body.classList.toggle('day-mode', !isNight);
        themeToggle.querySelector('i').className = isNight ? 'fas fa-moon' : 'fas fa-sun';
        themeToggle.classList.toggle('active', !isNight);
    });

    /* =============================================
       AMBIENT SOUND (Web Audio API)
    ============================================= */
    function getAudioContext() {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        return audioCtx;
    }

    function stopAmbient() {
        ambientNodes.forEach(n => { try { n.stop(); } catch(e){} });
        ambientNodes = [];
    }

    function createNoise(ctx, duration) {
        const bufferSize = ctx.sampleRate * duration;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
        return buffer;
    }

    function startAmbient(season) {
        const ctx = getAudioContext();
        const gain = ctx.createGain();
        gain.gain.value = 0.04;
        gain.connect(ctx.destination);

        if (season === 'monsoon') {
            // Rain: filtered noise loop
            const src = ctx.createBufferSource();
            src.buffer = createNoise(ctx, 2);
            src.loop = true;
            const filter = ctx.createBiquadFilter();
            filter.type = 'bandpass';
            filter.frequency.value = 800;
            filter.Q.value = 0.5;
            src.connect(filter);
            filter.connect(gain);
            src.start();
            ambientNodes.push(src);

            // Thunder: occasional low rumble
            const thunderInterval = setInterval(() => {
                if (!soundOn) { clearInterval(thunderInterval); return; }
                const t = ctx.createBufferSource();
                t.buffer = createNoise(ctx, 1);
                const tf = ctx.createBiquadFilter();
                tf.type = 'lowpass'; tf.frequency.value = 120;
                const tg = ctx.createGain();
                tg.gain.setValueAtTime(0, ctx.currentTime);
                tg.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.1);
                tg.gain.linearRampToValueAtTime(0, ctx.currentTime + 1);
                t.connect(tf); tf.connect(tg); tg.connect(ctx.destination);
                t.start();
                ambientNodes.push(t);
            }, 8000 + Math.random() * 12000);

        } else if (season === 'winter') {
            // Wind: filtered noise with slow modulation
            const src = ctx.createBufferSource();
            src.buffer = createNoise(ctx, 3);
            src.loop = true;
            const filter = ctx.createBiquadFilter();
            filter.type = 'bandpass';
            filter.frequency.value = 300;
            filter.Q.value = 1;
            const lfo = ctx.createOscillator();
            const lfoGain = ctx.createGain();
            lfo.frequency.value = 0.2;
            lfoGain.gain.value = 200;
            lfo.connect(lfoGain);
            lfoGain.connect(filter.frequency);
            lfo.start();
            src.connect(filter);
            filter.connect(gain);
            src.start();
            ambientNodes.push(src, lfo);

        } else if (season === 'spring' || season === 'autumn') {
            // Birds: sine oscillators in bird-like patterns
            const playBird = () => {
                if (!soundOn) return;
                const osc = ctx.createOscillator();
                const g = ctx.createGain();
                const baseFreq = 800 + Math.random() * 600;
                osc.frequency.setValueAtTime(baseFreq, ctx.currentTime);
                osc.frequency.linearRampToValueAtTime(baseFreq * 1.3, ctx.currentTime + 0.15);
                osc.frequency.linearRampToValueAtTime(baseFreq, ctx.currentTime + 0.3);
                g.gain.setValueAtTime(0, ctx.currentTime);
                g.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.05);
                g.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.3);
                osc.connect(g); g.connect(ctx.destination);
                osc.start(); osc.stop(ctx.currentTime + 0.35);
                ambientNodes.push(osc);
                setTimeout(playBird, 1000 + Math.random() * 3000);
            };
            playBird();

        } else if (season === 'summer') {
            // Cicadas: high freq oscillating noise
            const src = ctx.createBufferSource();
            src.buffer = createNoise(ctx, 2);
            src.loop = true;
            const filter = ctx.createBiquadFilter();
            filter.type = 'bandpass';
            filter.frequency.value = 3500;
            filter.Q.value = 5;
            const g2 = ctx.createGain(); g2.gain.value = 0.06;
            src.connect(filter); filter.connect(g2); g2.connect(ctx.destination);
            src.start();
            ambientNodes.push(src);

        } else {
            // Default: gentle ambient hum
            const osc = ctx.createOscillator();
            osc.type = 'sine';
            osc.frequency.value = 60;
            gain.gain.value = 0.02;
            osc.connect(gain);
            osc.start();
            ambientNodes.push(osc);
        }
    }

    soundToggle.addEventListener('click', async () => {
        soundOn = !soundOn;
        soundToggle.classList.toggle('active', soundOn);
        soundToggle.querySelector('i').className = soundOn ? 'fas fa-volume-high' : 'fas fa-volume-mute';
        if (soundOn) {
            const ctx = getAudioContext();
            if (ctx.state === 'suspended') await ctx.resume();
            startAmbient(currentSeason);
        } else {
            stopAmbient();
        }
    });

    /* =============================================
       QUIZ
    ============================================= */
    const quizPool = Object.keys(seasons);

    function startQuiz() {
        const correctSeason = quizPool[Math.floor(Math.random() * quizPool.length)];
        currentQuizSeason = correctSeason;
        const s = seasons[correctSeason];

        // Pick 3 random clues
        const cluePool = [
            `🌡️ ${s.temperature}`,
            `📅 ${s.period}`,
            ...s.characteristics.slice(0,3),
            s.foods[0].en,
            s.festivals[0].en
        ];
        const clues = cluePool.sort(() => Math.random()-0.5).slice(0,3);

        quizClues.innerHTML = clues.map(c => `<span class="quiz-clue">${c}</span>`).join('');

        // 6 options: all seasons shuffled
        const options = [...quizPool].sort(() => Math.random()-0.5);
        quizOptions.innerHTML = options.map(opt => {
            const os = seasons[opt];
            return `<button class="quiz-option" data-answer="${opt}">
                <i class="fas ${os.icon}"></i> ${os.title}<br>
                <small style="opacity:0.7;font-family:var(--font-bangla)">${os.titleBn}</small>
            </button>`;
        }).join('');

        quizResult.textContent = '';
        quizResult.className = 'quiz-result';
        quizNextBtn.style.display = 'none';

        document.querySelectorAll('.quiz-option').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.quiz-option').forEach(b => b.disabled = true);
                const isCorrect = this.dataset.answer === correctSeason;
                quizTotal++;
                if (isCorrect) {
                    quizScore++;
                    this.classList.add('correct');
                    quizResult.textContent = isBangla ? '✅ সঠিক উত্তর!' : '✅ Correct!';
                    quizResult.className = 'quiz-result correct-result';
                } else {
                    this.classList.add('wrong');
                    quizResult.textContent = isBangla
                        ? `❌ ভুল! সঠিক উত্তর: ${seasons[correctSeason].titleBn}`
                        : `❌ Wrong! It was ${seasons[correctSeason].title}`;
                    quizResult.className = 'quiz-result wrong-result';
                    // Highlight correct
                    document.querySelectorAll('.quiz-option').forEach(b => {
                        if (b.dataset.answer === correctSeason) b.classList.add('correct');
                    });
                }
                quizScoreEl.textContent = quizScore;
                quizTotalEl.textContent = quizTotal;
                quizNextBtn.style.display = 'inline-flex';
            });
        });
    }

    quizNextBtn.addEventListener('click', startQuiz);
    startQuiz();

    /* =============================================
       SHARE CARD (Canvas)
    ============================================= */
    shareBtn.addEventListener('click', () => {
        const s = seasons[currentSeason];
        const canvas = document.getElementById('shareCanvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 800; canvas.height = 450;

        // Background gradient per season
        const gradMap = {
            summer: ['#1a2a3a','#2d4a5a','#ff9d0055'],
            monsoon: ['#0e0e2a','#1a1a4a','#4d96ff55'],
            autumn: ['#3a1a1a','#5a2d2d','#ff6b0055'],
            'late-autumn': ['#1e1212','#2e1a1a','#c0724a55'],
            winter: ['#101020','#1a1a30','#a0c4ff55'],
            spring: ['#0a2010','#12301a','#6bcf7f55']
        };
        const [c1, c2] = gradMap[currentSeason] || ['#0d0d14','#16161f','#00d4ff55'];

        const bg = ctx.createLinearGradient(0, 0, 800, 450);
        bg.addColorStop(0, c1);
        bg.addColorStop(1, c2);
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, 800, 450);

        // Decorative circle
        ctx.beginPath();
        ctx.arc(700, 80, 150, 0, Math.PI*2);
        ctx.fillStyle = s.particleColor + '22';
        ctx.fill();

        // Top line accent
        const line = ctx.createLinearGradient(0,0,800,0);
        line.addColorStop(0,'transparent');
        line.addColorStop(0.4, s.particleColor);
        line.addColorStop(0.6,'#00ff95');
        line.addColorStop(1,'transparent');
        ctx.strokeStyle = line;
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(0,4); ctx.lineTo(800,4); ctx.stroke();

        // Title
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 52px Georgia, serif';
        ctx.fillText(s.title, 50, 100);

        // Bangla name
        ctx.fillStyle = '#00ff95';
        ctx.font = '36px Georgia, serif';
        ctx.fillText(s.titleBn, 50, 148);

        // Period
        ctx.fillStyle = 'rgba(240,240,240,0.6)';
        ctx.font = '18px Arial, sans-serif';
        ctx.fillText(s.period, 50, 185);
        ctx.fillText(s.periodBn, 50, 210);

        // Temperature
        ctx.fillStyle = s.particleColor;
        ctx.font = 'bold 72px Georgia, serif';
        ctx.fillText(s.temperature, 50, 310);

        // Characteristics
        let cx = 50, cy = 360;
        s.characteristics.forEach((ch, i) => {
            ctx.fillStyle = 'rgba(255,255,255,0.08)';
            const w = ctx.measureText(ch).width + 20;
            ctx.beginPath();
            ctx.roundRect(cx, cy - 18, w, 28, 14);
            ctx.fill();
            ctx.fillStyle = 'rgba(240,240,240,0.75)';
            ctx.font = '14px Arial, sans-serif';
            ctx.fillText(ch, cx + 10, cy);
            cx += w + 8;
        });

        // Branding
        ctx.fillStyle = 'rgba(240,240,240,0.3)';
        ctx.font = '14px Arial, sans-serif';
        ctx.fillText('Sororitu ষড়ঋতু | Bangladesh Seasons Explorer', 50, 430);

        // Right side emoji decoration
        ctx.font = '80px serif';
        // SVG icons cannot render on canvas — skip emoji decoration

        // Download
        const link = document.createElement('a');
        link.download = `${currentSeason}-season-card.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    });

    /* =============================================
       INIT
    ============================================= */
    // Wheel segment angles
    wheelSegments.forEach(seg => {
        const angle = parseInt(seg.dataset.angle);
        seg.style.setProperty('--angle', `${angle}deg`);
    });

    // Translatable initial pass
    document.querySelectorAll('[data-en]').forEach(el => {
        if (!el.textContent.trim() && el.dataset.en) {
            el.textContent = el.dataset.en;
        }
    });

    const detectedSeason = detectCurrentSeason();
    changeSeason(detectedSeason, true);
    fetchWeather();
    setInterval(fetchWeather, 5 * 60 * 1000); // refresh every 5 min

});