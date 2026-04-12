# 🌿 Sororitu ষড়ঋতু — Bangladesh's Six Seasons Explorer

An interactive, bilingual web experience celebrating the six sacred seasons of Bangladesh — *গ্রীষ্ম, বর্ষা, শরৎ, হেমন্ত, শীত, বসন্ত* — with rich cultural content, seasonal poetry, nature guides, and more.

---

![image](sororitu-banner.jpg)

---

## ✨ Features

- **Six Seasons** — Detailed profiles for each of Bangladesh's six seasons: Summer, Monsoon, Autumn, Hemanta, Winter, and Spring
- **Bilingual (EN / বাং)** — Toggle between English and Bengali across all content with a single click
- **Season Wheel Navigation** — An interactive circular wheel for navigating between seasons
- **Live Weather** — Fetches real-time weather data for your location and refreshes every 5 minutes
- **Auto-detect Current Season** — Automatically highlights the season you're currently in based on the Bangla calendar
- **Ambient Sound Toggle** — Background sounds suited to each season
- **Day / Night Theme** — Toggle between light and dark mode
- **Auto-cycle Mode** — Automatically cycles through all six seasons
- **Particle Background** — Dynamic particle effects themed to each season
- **Season Tabs** — Each season includes:
  - 🍚 Traditional foods with custom SVG illustrations
  - 🎉 Cultural festivals with descriptions
  - 🌸 Flora, fauna, and natural phenomena
  - 📜 Poetry by Rabindranath Tagore and other poets
  - 📊 Side-by-side season comparison tool
- **Season Quiz** — Guess the season from contextual clues, with score tracking
- **Shareable Season Cards** — Download a beautifully generated PNG card for any season
- **Keyboard Navigation** — Use `←` `→` arrow keys to move between seasons

---

## 🗂️ Project Structure

```
sororitu/
├── index.html       # Main HTML structure and layout
├── style.css        # All styles, themes, animations, and responsive design
├── script.js        # Season data, interactivity, quiz, weather, and card generation
└── asset/
    └── season.png   # Favicon and branding asset
```

---

## 🚀 Getting Started

No build tools or dependencies required. This is a fully static site.

**1. Clone the repository**
```bash
git clone https://github.com/your-username/sororitu.git
cd sororitu
```

**2. Open in your browser**
```bash
# Simply open index.html directly, or serve locally:
npx serve .
# or
python -m http.server 8080
```

**3. Visit** `http://localhost:8080`

---

## 🌐 CDN Dependencies

These are loaded from CDN and require an internet connection:

| Library | Purpose |
|---|---|
| [Google Fonts](https://fonts.google.com/) | Playfair Display, DM Sans, Noto Serif Bengali |
| [Font Awesome 6](https://fontawesome.com/) | Icons throughout the UI |
| [Particles.js](https://vincentgarreau.com/particles.js/) | Animated particle backgrounds |

---

## 🌦️ The Six Seasons

| Season | Bengali | Months | Symbol |
|---|---|---|---|
| Summer | গ্রীষ্ম | Mid-April – Mid-June | ☀️ |
| Monsoon | বর্ষা | Mid-June – Mid-August | 🌧️ |
| Autumn | শরৎ | Mid-August – Mid-October | 🍂 |
| Hemanta | হেমন্ত | Mid-October – Mid-December | 🌾 |
| Winter | শীত | Mid-December – Mid-February | ❄️ |
| Spring | বসন্ত | Mid-February – Mid-April | 🌸 |

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve content accuracy, add new season data, fix bugs, or enhance the UI:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [Apache-2.0 License](LICENSE).

---

## 🙏 Acknowledgements

- Poetry by **Rabindranath Tagore** and other Bengali poets
- Inspired by the timeless rhythms of the Bengali calendar and the cultural richness of Bangladesh
- Season icons and SVG illustrations hand-crafted for this project

---

> *"Sororitu ষড়ঋতু | Celebrating the beauty of Bangladesh's six seasons"*
