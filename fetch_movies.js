const fs = require('fs');
const path = require('path');
const https = require('https');

const POSTERS_DIR = path.join(__dirname, 'posters');
if (!fs.existsSync(POSTERS_DIR)) {
  fs.mkdirSync(POSTERS_DIR, { recursive: true });
}

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    if (!url || url === 'N/A') return resolve(false);
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close(() => resolve(true));
        });
      } else {
        file.close();
        fs.unlink(dest, () => resolve(false));
      }
    }).on('error', () => {
      fs.unlink(dest, () => resolve(false));
    });
  });
}

// Global YouTube Trailer Map
const TRAILERS = {
  "blade runner 2049": "gCcx85zbxz4",
  "interstellar": "zSWdZVtXT7E",
  "dune: part two": "Way9Dexny3w",
  "dune": "n9xhJrPqUio",
  "arrival": "tFMo3UJ4B4g",
  "the matrix": "vKQi3bBA1y8",
  "2001: a space odyssey": "oR_e9y-bka0",
  "alien": "LjLamj-b0I8",
  "aliens": "bTCaVp-d3w0",
  "terminator 2: judgment day": "CRRlbK5w8AE",
  "blade runner": "eogpIG53Cis",
  "children of men": "2VT2apoX90o",
  "star wars: episode v - the empire strikes back": "JNwNXF9Y6kY",
  "the thing": "5ftmr17M-a4",
  "minority report": "aGWQYgZZEEQ",
  "her": "dJTU48g7448",
  "ex machina": "EoQuVnKhxaM",
  "everything everywhere all at once": "wxN1T1uxQ2g",
  "district 9": "d65WG6185c",
  "wall-e": "alIq_wG9fnk",
  "avatar": "5PSNL1qE6VY",
  "avatar: the way of water": "d9MyW72ELq0",
  "gravity": "OiTiKOy59o4",
  "annihilation": "89OP78l9oSQ",
  "gattaca": "W_KruQhff4U",
  "dark city": "jSpaloL2504",
  "tenet": "LdOM0x0XD5w",
  "looper": "2iQuhs6iXA0",
  "star wars: episode iv - a new hope": "vZ734NWnAHA",
  "jurassic park": "QWBKEmWWL38",
  "back to the future": "qvsgGtivCgs",
  "inception": "YoHD9XEInc0",
  "shutter island": "5iaYLCiq5A8",
  "memento": "4CV41hoyS8A",
  "fight club": "qtRKDV93M2g",
  "the prestige": "RLtaA9fFNXU",
  "the sixth sense": "3-ZpM5m4Pvw",
  "mulholland drive": "jbZJ487oJlY",
  "se7en": "znmZoVkCjpI",
  "donnie darko": "bzLn8sOiMzA",
  "black swan": "5jaI1XOB-bs",
  "prisoners": "bpXfcTg6PnE",
  "zodiac": "yNncHPl1UXg",
  "gone girl": "2-_-1nJf8Vg",
  "oldboy": "vS3_72Gb-bI",
  "nightcrawler": "X8kY1srXxK4",
  "parasite": "5xH0HfJHsaY",
  "get out": "DzfpyUB60YY",
  "us": "hNCmb-4oUJA",
  "american psycho": "5YnGhW4UEeA",
  "vertigo": "Z5jvQwwHQNY",
  "psycho": "NG3-GlvKPcg",
  "taxi driver": "c8J6p_h1F3A",
  "mad max: fury road": "hEJnMQGLa48",
  "top gun: maverick": "giXco2jaZ_4",
  "john wick: chapter 4": "qEVUtrn864U",
  "the dark knight": "EXeTwQWrcwY",
  "die hard": "g4OBUUpicWg",
  "raiders of the lost ark": "XkkzJakiIMQ",
  "gladiator": "P5ieIbInF5s",
  "mission: impossible - fallout": "wb49-oV0F78",
  "john wick": "C0BMx-qxsP4",
  "casino royale": "36mnx8ybWIk",
  "heat": "0xbBLJ1WGwQ",
  "baby driver": "z2z897nUEN0",
  "spider-man: into the spider-verse": "g4Hbz2jLXvQ",
  "spider-man: across the spider-verse": "cqGjhVJWtEg",
  "avengers: endgame": "TcMBFSGVi1c",
  "kill bill: vol. 1": "7kSuas6mRpk",
  "kill bill: vol. 2": "tDC1AooOnHA",
  "crouching tiger, hidden dragon": "gLpZ_5bHmo8",
  "hero": "srFhXDZhUZI",
  "the raid: redemption": "PkULMOFpu4s",
  "the raid 2": "3E7rhJwJ_L0",
  "sicario": "G8tlEaoR8hU",
  "dunkirk": "F-eMt3SrfFU",
  "1917": "YqNYr7Ur2yg",
  "ford v ferrari": "I3h9Z8jZa-s",
  "hereditary": "V6wWKNij_Bw",
  "midsommar": "1Vnghdsjmd0",
  "a quiet place": "WR7cc5t7niU",
  "the witch": "iQXmlR3Sjfc",
  "it follows": "YHEXqSOyD0g",
  "talk to me": "aLAKJu9aJys",
  "the babadook": "k5WQZrbzhzw",
  "sinister": "_kbQAJR9YWQ",
  "the lighthouse": "Hyag7lR6CPA",
  "the shining": "S014449780M",
  "spirited away": "ByXuk9QqQkk",
  "princess mononoke": "4OiMOHRDs14",
  "your name": "xU47nhruN-k",
  "akira": "mA8B5145uY8",
  "ghost in the shell": "SvBVDibOrIM",
  "howl's moving castle": "iwROgK94zcM",
  "grave of the fireflies": "4vPeTSRd580",
  "the lord of the rings: the return of the king": "r5X-hFf6Bwo",
  "the lord of the rings: the fellowship of the ring": "V75dMMIW2B4",
  "the lord of the rings: the two towers": "LbfMDwc4yGo",
  "pan's labyrinth": "EqYiSlkvRgo",
  "harry potter and the deathly hallows: part 2": "mObK5XD8fGE",
  "pulp fiction": "s7EdQ4FqbhY",
  "no country for old men": "38A__WT3-o0",
  "drive": "CWX3B85l24E",
  "l.a. confidential": "6s-gu65o7qU",
  "chinatown": "N9C6cT5Z6sU",
  "scarface": "7pQQHnsRRvw",
  "goodfellas": "2ilzidi_J8s",
  "the godfather": "sY1S34973zA",
  "the godfather part ii": "9O1Iy9od7-A",
  "the departed": "iojhqm0JTW4",
  "fargo": "h2tY82z3VI8",
  "memories of murder": "0n_HBgHJ0d0",
  "knives out": "qGqiHJTsRkU",
  "glass onion": "vqFms92m6_M",
  "ip man": "1AJxXQ7xOjE",
  "apollo 13": "KtEIMC58sZo",
  "the martian": "ej3ioOneTy8",
  "first man": "PSoRx87OO6E",
  "sunshine": "hQYbXCPBFsk",
  "moon": "twuScTcDP_Q",
  "ad astra": "P6AaSMfXhbA",
  "groundhog day": "GocgluRv40E",
  "about time": "7OIFWr2VvpU",
  "source code": "Mn67vhJi1PU",
  "house of flying daggers": "zLke-Zvh1qA",
  "fearless": "y06D_sBfQ0M",
  "kung fu hustle": "-m3IB7N_yGY",
  "shaolin soccer": "bRBwuT2vsls",
  "ong-bak: the thai warrior": "nACSx6Vn71E"
};

const MASTER_GENRES = [
  { id: "sci-fi", name: "Sci-Fi Masterpieces", icon: "🚀", description: "Visionary sci-fi epics that redefine cinematic storytelling, futuristic worlds, and existential exploration.", color: "#3b82f6" },
  { id: "mind-bending", name: "Mind-Bending Thrillers", icon: "🧠", description: "Psychological, mind-warping narrative mazes that keep you questioning reality until the final frame.", color: "#8b5cf6" },
  { id: "cyberpunk", name: "Cyberpunk & Dystopian", icon: "🏙️", description: "High tech, low life, neon-drenched dystopias, AI consciousness, and neon noir landscapes.", color: "#ec4899" },
  { id: "action-spectacle", name: "Action & Spectacle", icon: "💥", description: "Adrenaline-fueled, beautifully choreographed action cinema with legendary practical and visual effects.", color: "#f97316" },
  { id: "modern-horror", name: "Modern Horror & Suspense", icon: "👁️", description: "Atmospheric, dread-inducing modern horror and psychological suspense from contemporary masters.", color: "#ef4444" },
  { id: "anime-masterpieces", name: "Anime & Animated Classics", icon: "🎨", description: "Stunning hand-drawn and digital animated works of art with legendary narrative scope.", color: "#10b981" },
  { id: "fantasy-epics", name: "Fantasy & Mythic Epics", icon: "⚔️", description: "Grand fantasy realms, mythic quests, dark fairytales, and magical worldbuilding.", color: "#eab308" },
  { id: "neo-noir", name: "Neo-Noir & Crime", icon: "🕵️", description: "Gritty crime thrillers, moral ambiguity, shadowy underworlds, and atmospheric detective tales.", color: "#64748b" },
  { id: "space-exploration", name: "Space Exploration & Survival", icon: "🛸", description: "Vast cosmic journeys, NASA missions, interstellar voyages, and deep-space survival sagas.", color: "#06b6d4" },
  { id: "mystery-whodunit", name: "Mystery & Whodunit", icon: "🔍", description: "Intricate puzzles, murder mysteries, deceptive twists, and sharp detective masterclasses.", color: "#a855f7" },
  { id: "time-travel", name: "Time Travel & Multiverse", icon: "⏳", description: "Temporal paradoxes, timeline loops, wormholes, and multi-dimensional reality warps.", color: "#f43f5e" },
  { id: "post-apocalyptic", name: "Post-Apocalyptic & Survival", icon: "☣️", description: "Wasteland survival, civilization collapses, viral outbreaks, and desperate human endurance.", color: "#84cc16" },
  { id: "satire-dark-comedy", name: "Satire & Dark Comedy", icon: "🎭", description: "Razor-sharp social satire, cynical black humor, and subversive comedic masterpieces.", color: "#fbbf24" },
  { id: "biopic-epics", name: "Biopic & Historical Epics", icon: "🏛️", description: "Monumental historical sagas, biographical profiles, and world-shaping historical events.", color: "#d97706" },
  { id: "martial-arts", name: "Martial Arts & Wuxia", icon: "🐉", description: "Legendary combat choreography, martial artistry, ancient honor codes, and heroic mythos.", color: "#dc2626" }
];

const CANDIDATES = [
  // --- SCI-FI MASTERPIECES ---
  { title: "Blade Runner 2049", genres: ["sci-fi", "cyberpunk", "neo-noir"], tags: ["atmospheric", "hyper-stylized", "oscar-winner", "neon-noir", "visual-spectacle", "ai-consciousness"] },
  { title: "Interstellar", genres: ["sci-fi", "space-exploration", "time-travel"], tags: ["philosophical", "visual-spectacle", "oscar-winner", "space-opera", "time-loop"] },
  { title: "Dune: Part Two", genres: ["sci-fi", "action-spectacle", "fantasy-epics"], tags: ["visual-spectacle", "critics-masterpiece", "box-office-smash", "space-opera"] },
  { title: "Arrival", genres: ["sci-fi", "mind-bending", "time-travel"], tags: ["philosophical", "existential-dread", "oscar-winner", "atmospheric"] },
  { title: "The Matrix", genres: ["sci-fi", "cyberpunk", "action-spectacle", "post-apocalyptic", "martial-arts"], tags: ["hyper-stylized", "cybernetic", "cult-classic", "oscar-winner", "dystopian"] },
  { title: "2001: A Space Odyssey", genres: ["sci-fi", "space-exploration"], tags: ["philosophical", "atmospheric", "critics-masterpiece", "cult-classic", "ai-consciousness"] },
  { title: "Alien", genres: ["sci-fi", "modern-horror", "space-exploration"], tags: ["survival-horror", "gothic-dread", "atmospheric", "cult-classic"] },
  { title: "Aliens", genres: ["sci-fi", "action-spectacle", "modern-horror", "space-exploration"], tags: ["survival-horror", "practical-fx", "box-office-smash", "oscar-winner"] },
  { title: "Terminator 2: Judgment Day", genres: ["sci-fi", "action-spectacle", "cyberpunk", "post-apocalyptic", "time-travel"], tags: ["practical-fx", "cyborg-rebellion", "oscar-winner", "box-office-smash"] },
  { title: "Blade Runner", genres: ["sci-fi", "cyberpunk", "neo-noir"], tags: ["neon-noir", "atmospheric", "cult-classic", "philosophical", "ai-consciousness"] },
  { title: "Children of Men", genres: ["sci-fi", "cyberpunk", "post-apocalyptic"], tags: ["dystopian", "gritty-realism", "critics-masterpiece", "atmospheric"] },
  { title: "Star Wars: Episode V - The Empire Strikes Back", genres: ["sci-fi", "fantasy-epics", "space-exploration"], tags: ["space-opera", "critics-masterpiece", "box-office-smash", "cult-classic"] },
  { title: "The Thing", genres: ["sci-fi", "modern-horror", "post-apocalyptic"], tags: ["practical-fx", "survival-horror", "gothic-dread", "cult-classic"] },
  { title: "Minority Report", genres: ["sci-fi", "cyberpunk", "mystery-whodunit"], tags: ["dystopian", "neo-noir", "hyper-stylized", "box-office-smash"] },
  { title: "Her", genres: ["sci-fi", "mind-bending"], tags: ["philosophical", "oscar-winner", "ai-consciousness", "atmospheric"] },
  { title: "Ex Machina", genres: ["sci-fi", "mind-bending", "cyberpunk"], tags: ["ai-consciousness", "psychological", "oscar-winner", "philosophical"] },
  { title: "Everything Everywhere All at Once", genres: ["sci-fi", "time-travel", "satire-dark-comedy", "martial-arts"], tags: ["oscar-winner", "multiverse", "hyper-stylized", "mind-bending"] },
  { title: "District 9", genres: ["sci-fi", "action-spectacle", "post-apocalyptic"], tags: ["dystopian", "practical-fx", "gritty-realism", "critics-masterpiece"] },
  { title: "WALL-E", genres: ["sci-fi", "anime-masterpieces", "post-apocalyptic", "space-exploration"], tags: ["oscar-winner", "dystopian", "philosophical", "critics-masterpiece"] },
  { title: "Avatar", genres: ["sci-fi", "action-spectacle", "fantasy-epics"], tags: ["visual-spectacle", "box-office-smash", "oscar-winner", "worldbuilding"] },
  { title: "Gravity", genres: ["sci-fi", "space-exploration"], tags: ["oscar-winner", "survival-horror", "visual-spectacle", "atmospheric"] },
  { title: "Gattaca", genres: ["sci-fi", "cyberpunk"], tags: ["philosophical", "dystopian", "cult-classic", "atmospheric"] },
  { title: "Tenet", genres: ["sci-fi", "time-travel", "action-spectacle"], tags: ["mind-bending", "time-loop", "hyper-stylized", "oscar-winner"] },
  { title: "Jurassic Park", genres: ["sci-fi", "action-spectacle"], tags: ["practical-fx", "oscar-winner", "box-office-smash", "all-time-masterpiece"] },
  { title: "Back to the Future", genres: ["sci-fi", "time-travel"], tags: ["cult-classic", "oscar-winner", "box-office-smash", "time-loop"] },
  { title: "Rogue One: A Star Wars Story", genres: ["sci-fi", "action-spectacle", "space-exploration"], tags: ["space-opera", "gritty-realism", "box-office-smash"] },
  { title: "Solaris", genres: ["sci-fi", "mind-bending", "space-exploration"], tags: ["philosophical", "atmospheric", "critics-masterpiece"] },
  { title: "Stalker", genres: ["sci-fi", "mind-bending", "post-apocalyptic"], tags: ["philosophical", "atmospheric", "critics-masterpiece", "existential-dread"] },
  { title: "Contact", genres: ["sci-fi", "space-exploration"], tags: ["philosophical", "space-opera", "critics-masterpiece"] },
  { title: "Prometheus", genres: ["sci-fi", "space-exploration", "modern-horror"], tags: ["gothic-dread", "space-opera", "visual-spectacle"] },
  { title: "Annihilation", genres: ["sci-fi", "mind-bending", "modern-horror"], tags: ["surreal", "existential-dread", "atmospheric"] },
  { title: "Dark City", genres: ["sci-fi", "cyberpunk", "neo-noir"], tags: ["neo-noir", "cult-classic", "dystopian"] },
  { title: "Twelve Monkeys", genres: ["sci-fi", "time-travel", "mind-bending", "post-apocalyptic"], tags: ["time-loop", "cult-classic", "dystopian"] },
  { title: "The Fifth Element", genres: ["sci-fi", "cyberpunk", "action-spectacle"], tags: ["hyper-stylized", "cult-classic", "visual-spectacle"] },
  { title: "Star Wars: Episode IV - A New Hope", genres: ["sci-fi", "fantasy-epics", "space-exploration"], tags: ["space-opera", "all-time-masterpiece", "oscar-winner"] },
  { title: "Star Wars: Episode VI - Return of the Jedi", genres: ["sci-fi", "fantasy-epics"], tags: ["space-opera", "box-office-smash"] },
  { title: "Cloverfield", genres: ["sci-fi", "modern-horror", "post-apocalyptic"], tags: ["found-footage", "creature-feature", "high-tension"] },
  { title: "Snowpiercer", genres: ["sci-fi", "cyberpunk", "post-apocalyptic"], tags: ["dystopian", "social-commentary", "critics-masterpiece"] },
  { title: "A.I. Artificial Intelligence", genres: ["sci-fi", "cyberpunk"], tags: ["ai-consciousness", "philosophical", "critics-masterpiece"] },
  { title: "Men in Black", genres: ["sci-fi", "satire-dark-comedy", "action-spectacle"], tags: ["box-office-smash", "cult-classic", "sci-fi-comedy"] },
  { title: "Signs", genres: ["sci-fi", "modern-horror"], tags: ["atmospheric", "high-tension", "box-office-smash"] },
  { title: "Tron: Legacy", genres: ["sci-fi", "cyberpunk"], tags: ["synthwave", "hyper-stylized", "visual-spectacle"] },

  // --- MIND BENDING THRILLERS ---
  { title: "Inception", genres: ["mind-bending", "sci-fi", "action-spectacle"], tags: ["mind-bending", "hyper-stylized", "oscar-winner", "box-office-smash", "philosophical"] },
  { title: "Shutter Island", genres: ["mind-bending", "mystery-whodunit", "neo-noir"], tags: ["psychological", "existential-dread", "gothic-dread", "atmospheric"] },
  { title: "Memento", genres: ["mind-bending", "neo-noir", "mystery-whodunit"], tags: ["non-linear", "neo-noir", "critics-masterpiece", "psychological"] },
  { title: "Fight Club", genres: ["mind-bending", "satire-dark-comedy", "neo-noir"], tags: ["cult-classic", "psychological", "anarchic", "hyper-stylized"] },
  { title: "The Prestige", genres: ["mind-bending", "mystery-whodunit", "biopic-epics"], tags: ["obsession", "mind-bending", "gothic-dread", "critics-masterpiece"] },
  { title: "The Sixth Sense", genres: ["mind-bending", "modern-horror", "mystery-whodunit"], tags: ["supernatural", "box-office-smash", "cult-classic", "psychological"] },
  { title: "Mulholland Drive", genres: ["mind-bending", "neo-noir", "mystery-whodunit"], tags: ["surreal", "critics-masterpiece", "neo-noir", "existential-dread"] },
  { title: "Se7en", genres: ["mind-bending", "neo-noir", "mystery-whodunit"], tags: ["dark-and-gritty", "gothic-dread", "critics-masterpiece", "neo-noir"] },
  { title: "Donnie Darko", genres: ["mind-bending", "time-travel", "sci-fi"], tags: ["cult-classic", "time-loop", "surreal", "psychological"] },
  { title: "Black Swan", genres: ["mind-bending", "modern-horror"], tags: ["psychological", "oscar-winner", "obsession", "hyper-stylized"] },
  { title: "Prisoners", genres: ["mind-bending", "mystery-whodunit", "neo-noir"], tags: ["dark-and-gritty", "moral-ambiguity", "critics-masterpiece", "atmospheric"] },
  { title: "Zodiac", genres: ["mind-bending", "mystery-whodunit", "neo-noir", "biopic-epics"], tags: ["obsession", "procedural", "critics-masterpiece", "dark-and-gritty"] },
  { title: "Gone Girl", genres: ["mind-bending", "mystery-whodunit", "neo-noir"], tags: ["psychological", "cynical-noir", "box-office-smash", "critics-masterpiece"] },
  { title: "Oldboy", genres: ["mind-bending", "action-spectacle", "neo-noir", "martial-arts"], tags: ["cult-classic", "dark-and-gritty", "vengeance", "critics-masterpiece"] },
  { title: "Nightcrawler", genres: ["mind-bending", "satire-dark-comedy", "neo-noir"], tags: ["cynical-noir", "hyper-stylized", "critics-masterpiece", "psychological"] },
  { title: "Parasite", genres: ["mind-bending", "satire-dark-comedy", "neo-noir"], tags: ["oscar-winner", "palme-dor", "critics-masterpiece", "social-commentary"] },
  { title: "Get Out", genres: ["mind-bending", "modern-horror", "satire-dark-comedy"], tags: ["oscar-winner", "social-commentary", "psychological", "critics-masterpiece"] },
  { title: "American Psycho", genres: ["mind-bending", "satire-dark-comedy", "neo-noir"], tags: ["cult-classic", "cynical-noir", "psychological", "hyper-stylized"] },
  { title: "Vertigo", genres: ["mind-bending", "mystery-whodunit", "neo-noir"], tags: ["critics-masterpiece", "obsession", "classic-noir", "all-time-masterpiece"] },
  { title: "The Game", genres: ["mind-bending", "mystery-whodunit"], tags: ["paranoia", "cult-classic", "high-tension"] },
  { title: "Coherence", genres: ["mind-bending", "sci-fi", "time-travel"], tags: ["quantum-multiverse", "cult-classic", "mind-bending"] },
  { title: "The Butterfly Effect", genres: ["mind-bending", "time-travel"], tags: ["time-loop", "cult-classic", "chaos-theory"] },
  { title: "Jacob's Ladder", genres: ["mind-bending", "modern-horror"], tags: ["hallucination", "cult-classic", "psychological"] },
  { title: "Triangle", genres: ["mind-bending", "time-travel", "modern-horror"], tags: ["time-loop", "cult-classic", "survival"] },
  { title: "Primer", genres: ["mind-bending", "sci-fi", "time-travel"], tags: ["time-loop", "indie-masterpiece", "mind-bending"] },
  { title: "The Machinist", genres: ["mind-bending", "neo-noir"], tags: ["insomnia", "psychological", "dark-and-gritty"] },
  { title: "Split", genres: ["mind-bending", "modern-horror"], tags: ["psychological", "box-office-smash", "multi-personality"] },
  { title: "Nocturnal Animals", genres: ["mind-bending", "neo-noir"], tags: ["hyper-stylized", "revenge", "critics-masterpiece"] },

  // --- CYBERPUNK & DYSTOPIAN ---
  { title: "RoboCop", genres: ["cyberpunk", "sci-fi", "action-spectacle", "satire-dark-comedy"], tags: ["cyborg-rebellion", "satire", "cult-classic", "practical-fx"] },
  { title: "Total Recall", genres: ["cyberpunk", "sci-fi", "action-spectacle"], tags: ["memory-wipe", "cult-classic", "practical-fx", "box-office-smash"] },
  { title: "Dredd", genres: ["cyberpunk", "action-spectacle", "sci-fi", "post-apocalyptic"], tags: ["hyper-stylized", "dark-and-gritty", "cult-classic"] },
  { title: "Upgrade", genres: ["cyberpunk", "action-spectacle", "sci-fi", "martial-arts"], tags: ["ai-consciousness", "gun-fu", "body-horror"] },
  { title: "Alita: Battle Angel", genres: ["cyberpunk", "action-spectacle", "sci-fi", "post-apocalyptic", "martial-arts"], tags: ["cyborg-rebellion", "visual-spectacle", "anime-adaptation"] },
  { title: "V for Vendetta", genres: ["cyberpunk", "action-spectacle", "sci-fi"], tags: ["anarchic", "dystopian", "cult-classic"] },
  { title: "Ready Player One", genres: ["cyberpunk", "sci-fi", "action-spectacle"], tags: ["virtual-reality", "box-office-smash", "pop-culture"] },
  { title: "Brazil", genres: ["cyberpunk", "satire-dark-comedy", "sci-fi"], tags: ["surreal", "dystopian", "critics-masterpiece"] },
  { title: "Equilibrium", genres: ["cyberpunk", "action-spectacle", "sci-fi", "martial-arts"], tags: ["gun-kata", "dystopian", "cult-classic"] },
  { title: "Elysium", genres: ["cyberpunk", "sci-fi", "action-spectacle", "post-apocalyptic"], tags: ["dystopian", "social-commentary", "visual-spectacle"] },
  { title: "A Clockwork Orange", genres: ["cyberpunk", "mind-bending", "satire-dark-comedy"], tags: ["all-time-masterpiece", "anarchic", "dystopian", "cult-classic"] },

  // --- ACTION & SPECTACLE ---
  { title: "Mad Max: Fury Road", genres: ["action-spectacle", "post-apocalyptic", "cyberpunk"], tags: ["practical-fx", "hyper-stylized", "oscar-winner", "critics-masterpiece", "relentless"] },
  { title: "Top Gun: Maverick", genres: ["action-spectacle"], tags: ["box-office-smash", "practical-fx", "oscar-winner", "high-octane"] },
  { title: "John Wick: Chapter 4", genres: ["action-spectacle", "neo-noir", "martial-arts"], tags: ["hyper-stylized", "neo-noir", "martial-arts", "gun-fu"] },
  { title: "The Dark Knight", genres: ["action-spectacle", "neo-noir", "sci-fi"], tags: ["oscar-winner", "critics-masterpiece", "dark-and-gritty", "box-office-smash"] },
  { title: "Die Hard", genres: ["action-spectacle"], tags: ["cult-classic", "practical-fx", "high-octane", "action-pioneer"] },
  { title: "Raiders of the Lost Ark", genres: ["action-spectacle", "fantasy-epics"], tags: ["oscar-winner", "cult-classic", "adventure", "practical-fx"] },
  { title: "Gladiator", genres: ["action-spectacle", "biopic-epics", "fantasy-epics"], tags: ["oscar-winner", "box-office-smash", "heroic-epic", "vengeance"] },
  { title: "Mission: Impossible - Fallout", genres: ["action-spectacle"], tags: ["practical-fx", "critics-masterpiece", "high-octane", "box-office-smash"] },
  { title: "John Wick", genres: ["action-spectacle", "neo-noir", "martial-arts"], tags: ["cult-classic", "gun-fu", "hyper-stylized", "vengeance"] },
  { title: "Casino Royale", genres: ["action-spectacle", "neo-noir"], tags: ["gritty-realism", "high-octane", "critics-masterpiece", "box-office-smash"] },
  { title: "Heat", genres: ["action-spectacle", "neo-noir"], tags: ["cult-classic", "procedural", "dark-and-gritty", "critics-masterpiece"] },
  { title: "Baby Driver", genres: ["action-spectacle", "neo-noir"], tags: ["hyper-stylized", "rhythm-action", "critics-masterpiece", "high-octane"] },
  { title: "Avengers: Endgame", genres: ["action-spectacle", "sci-fi", "fantasy-epics", "time-travel"], tags: ["box-office-smash", "visual-spectacle", "superhero-epic"] },
  { title: "Kill Bill: Vol. 1", genres: ["action-spectacle", "martial-arts", "neo-noir"], tags: ["hyper-stylized", "vengeance", "martial-arts", "cult-classic"] },
  { title: "Kill Bill: Vol. 2", genres: ["action-spectacle", "martial-arts", "neo-noir"], tags: ["hyper-stylized", "vengeance", "martial-arts"] },
  { title: "The Bourne Identity", genres: ["action-spectacle", "neo-noir"], tags: ["gritty-realism", "espionage", "high-octane"] },
  { title: "The Bourne Ultimatum", genres: ["action-spectacle"], tags: ["oscar-winner", "espionage", "high-octane"] },
  { title: "Logan", genres: ["action-spectacle", "neo-noir", "sci-fi", "post-apocalyptic"], tags: ["dark-and-gritty", "oscar-winner", "heroic-epic"] },
  { title: "Speed", genres: ["action-spectacle"], tags: ["high-octane", "90s-classic", "box-office-smash"] },
  { title: "Dunkirk", genres: ["action-spectacle", "biopic-epics"], tags: ["oscar-winner", "practical-fx", "non-linear", "survival"] },
  { title: "1917", genres: ["action-spectacle", "biopic-epics"], tags: ["oscar-winner", "one-shot-take", "visual-spectacle"] },
  { title: "Ford v Ferrari", genres: ["action-spectacle", "biopic-epics"], tags: ["oscar-winner", "racing-epic", "box-office-smash"] },
  { title: "Kingsman: The Secret Service", genres: ["action-spectacle", "satire-dark-comedy", "martial-arts"], tags: ["hyper-stylized", "espionage", "high-octane"] },
  { title: "Edge of Tomorrow", genres: ["action-spectacle", "sci-fi", "time-travel", "post-apocalyptic"], tags: ["time-loop", "exosuit", "critics-masterpiece"] },
  { title: "Pacific Rim", genres: ["action-spectacle", "sci-fi", "post-apocalyptic"], tags: ["kaiju", "mech-combat", "visual-spectacle"] },
  { title: "Django Unchained", genres: ["action-spectacle", "neo-noir", "satire-dark-comedy"], tags: ["oscar-winner", "western", "revenge"] },
  { title: "Inglourious Basterds", genres: ["action-spectacle", "satire-dark-comedy", "biopic-epics"], tags: ["oscar-winner", "critics-masterpiece", "alternate-history"] },

  // --- MODERN HORROR & SUSPENSE ---
  { title: "Hereditary", genres: ["modern-horror", "mind-bending"], tags: ["gothic-dread", "psychological", "existential-dread", "critics-masterpiece"] },
  { title: "Midsommar", genres: ["modern-horror", "mind-bending"], tags: ["folk-horror", "surreal", "psychological", "hyper-stylized"] },
  { title: "Us", genres: ["modern-horror", "mind-bending"], tags: ["doppelganger", "social-commentary", "atmospheric", "hyper-stylized"] },
  { title: "A Quiet Place", genres: ["modern-horror", "post-apocalyptic", "sci-fi"], tags: ["survival-horror", "box-office-smash", "atmospheric"] },
  { title: "The Witch", genres: ["modern-horror"], tags: ["gothic-dread", "folk-horror", "atmospheric", "critics-masterpiece"] },
  { title: "It Follows", genres: ["modern-horror"], tags: ["retro-synth", "atmospheric", "cult-classic", "existential-dread"] },
  { title: "Talk to Me", genres: ["modern-horror"], tags: ["supernatural", "possession", "critics-masterpiece", "high-tension"] },
  { title: "The Babadook", genres: ["modern-horror"], tags: ["psychological", "gothic-dread", "critics-masterpiece"] },
  { title: "The Lighthouse", genres: ["modern-horror", "mind-bending", "satire-dark-comedy"], tags: ["surreal", "black-and-white", "psychological"] },
  { title: "The Shining", genres: ["modern-horror", "mind-bending"], tags: ["cult-classic", "gothic-dread", "psychological", "critics-masterpiece"] },
  { title: "X", genres: ["modern-horror"], tags: ["slasher", "retro-70s", "hyper-stylized"] },
  { title: "Pearl", genres: ["modern-horror"], tags: ["technicolor-madness", "psychological", "critics-masterpiece"] },
  { title: "Longlegs", genres: ["modern-horror", "mystery-whodunit"], tags: ["occult-procedural", "gothic-dread", "high-tension"] },
  { title: "Barbarian", genres: ["modern-horror", "mind-bending"], tags: ["subverted-expectations", "high-tension", "creature"] },
  { title: "The Invisible Man", genres: ["modern-horror", "sci-fi"], tags: ["tech-thriller", "high-tension", "box-office-smash"] },
  { title: "Insidious", genres: ["modern-horror"], tags: ["astral-projection", "supernatural", "box-office-smash"] },
  { title: "Smile", genres: ["modern-horror"], tags: ["curse-thriller", "jump-scares", "box-office-smash"] },
  { title: "Nope", genres: ["modern-horror", "sci-fi"], tags: ["ufo-horror", "visual-spectacle", "critics-masterpiece"] },
  { title: "Saw", genres: ["modern-horror", "mystery-whodunit"], tags: ["torture-puzzle", "cult-classic", "twist-ending"] },
  { title: "The Cabin in the Woods", genres: ["modern-horror", "satire-dark-comedy"], tags: ["meta-horror", "satire", "cult-classic"] },
  { title: "Don't Breathe", genres: ["modern-horror"], tags: ["home-invasion", "high-tension", "suspense"] },
  { title: "The Ring", genres: ["modern-horror", "mystery-whodunit"], tags: ["curse", "j-horror-remake", "box-office-smash"] },
  { title: "The Silence of the Lambs", genres: ["modern-horror", "neo-noir", "mystery-whodunit"], tags: ["oscar-winner", "all-time-masterpiece", "psychological"] },
  { title: "28 Days Later", genres: ["modern-horror", "post-apocalyptic"], tags: ["fast-zombies", "digital-grain", "cult-classic"] },
  { title: "Train to Busan", genres: ["modern-horror", "action-spectacle", "post-apocalyptic"], tags: ["zombie-express", "high-octane", "critics-masterpiece"] },

  // --- ANIME & ANIMATED CLASSICS ---
  { title: "Spirited Away", genres: ["anime-masterpieces", "fantasy-epics"], tags: ["oscar-winner", "studio-ghibli", "hand-drawn", "critics-masterpiece"] },
  { title: "Princess Mononoke", genres: ["anime-masterpieces", "fantasy-epics"], tags: ["studio-ghibli", "environmental-epic", "hand-drawn", "cult-classic"] },
  { title: "Your Name", genres: ["anime-masterpieces", "fantasy-epics", "time-travel"], tags: ["visual-masterpiece", "body-swap", "box-office-smash"] },
  { title: "Akira", genres: ["anime-masterpieces", "cyberpunk", "sci-fi", "post-apocalyptic"], tags: ["cyberpunk", "hand-drawn", "cult-classic", "hyper-stylized"] },
  { title: "Ghost in the Shell", genres: ["anime-masterpieces", "cyberpunk", "sci-fi"], tags: ["cyberpunk", "philosophical", "ai-consciousness", "cult-classic"] },
  { title: "Howl's Moving Castle", genres: ["anime-masterpieces", "fantasy-epics"], tags: ["studio-ghibli", "hand-drawn", "romantic-fantasy"] },
  { title: "Spider-Man: Into the Spider-Verse", genres: ["anime-masterpieces", "action-spectacle", "sci-fi", "time-travel"], tags: ["oscar-winner", "multiverse", "hyper-stylized"] },
  { title: "Spider-Man: Across the Spider-Verse", genres: ["anime-masterpieces", "action-spectacle", "sci-fi", "time-travel"], tags: ["visual-masterpiece", "multiverse", "critics-masterpiece"] },
  { title: "Grave of the Fireflies", genres: ["anime-masterpieces", "biopic-epics"], tags: ["studio-ghibli", "critics-masterpiece"] },
  { title: "Nausicaä of the Valley of the Wind", genres: ["anime-masterpieces", "fantasy-epics", "post-apocalyptic"], tags: ["studio-ghibli", "hand-drawn", "environmental-epic"] },
  { title: "Paprika", genres: ["anime-masterpieces", "mind-bending", "sci-fi"], tags: ["dream-logic", "surreal", "critics-masterpiece"] },
  { title: "A Silent Voice", genres: ["anime-masterpieces"], tags: ["emotional-drama", "critics-masterpiece"] },
  { title: "Neon Genesis Evangelion: The End of Evangelion", genres: ["anime-masterpieces", "sci-fi", "mind-bending", "post-apocalyptic"], tags: ["mech-existential", "cult-classic", "mind-bending"] },
  { title: "The Boy and the Heron", genres: ["anime-masterpieces", "fantasy-epics"], tags: ["oscar-winner", "studio-ghibli", "critics-masterpiece"] },
  { title: "Suzume", genres: ["anime-masterpieces", "fantasy-epics"], tags: ["visual-masterpiece", "box-office-smash"] },
  { title: "Castle in the Sky", genres: ["anime-masterpieces", "fantasy-epics"], tags: ["studio-ghibli", "steampunk", "adventure"] },
  { title: "My Neighbor Totoro", genres: ["anime-masterpieces", "fantasy-epics"], tags: ["studio-ghibli", "whimsical", "all-time-masterpiece"] },
  { title: "Kiki's Delivery Service", genres: ["anime-masterpieces", "fantasy-epics"], tags: ["studio-ghibli", "coming-of-age"] },
  { title: "Redline", genres: ["anime-masterpieces", "action-spectacle", "sci-fi"], tags: ["hand-drawn-madness", "high-octane", "cult-classic"] },
  { title: "Weathering With You", genres: ["anime-masterpieces", "fantasy-epics"], tags: ["visual-masterpiece", "box-office-smash"] },
  { title: "The Iron Giant", genres: ["anime-masterpieces", "sci-fi"], tags: ["cult-classic", "emotional-epic", "critics-masterpiece"] },
  { title: "Fantastic Mr. Fox", genres: ["anime-masterpieces", "satire-dark-comedy"], tags: ["stop-motion", "oscar-nominee", "hyper-stylized"] },

  // --- FANTASY & MYTHIC EPICS ---
  { title: "The Lord of the Rings: The Return of the King", genres: ["fantasy-epics", "action-spectacle"], tags: ["oscar-winner", "box-office-smash", "worldbuilding", "all-time-masterpiece"] },
  { title: "The Lord of the Rings: The Fellowship of the Ring", genres: ["fantasy-epics", "action-spectacle"], tags: ["worldbuilding", "critics-masterpiece", "oscar-winner", "all-time-masterpiece"] },
  { title: "The Lord of the Rings: The Two Towers", genres: ["fantasy-epics", "action-spectacle"], tags: ["worldbuilding", "critics-masterpiece", "oscar-winner"] },
  { title: "Pan's Labyrinth", genres: ["fantasy-epics", "modern-horror"], tags: ["oscar-winner", "practical-fx", "critics-masterpiece"] },
  { title: "The Hobbit: An Unexpected Journey", genres: ["fantasy-epics", "action-spectacle"], tags: ["middle-earth", "box-office-smash"] },
  { title: "Stardust", genres: ["fantasy-epics"], tags: ["romantic-fairytale", "cult-classic"] },
  { title: "The Green Knight", genres: ["fantasy-epics", "mind-bending"], tags: ["arthurian-myth", "surreal", "critics-masterpiece"] },
  { title: "Pirates of the Caribbean: The Curse of the Black Pearl", genres: ["fantasy-epics", "action-spectacle"], tags: ["swashbuckler", "box-office-smash", "cult-classic"] },
  { title: "Big Fish", genres: ["fantasy-epics", "satire-dark-comedy"], tags: ["tall-tales", "visual-spectacle", "emotional"] },
  { title: "Life of Pi", genres: ["fantasy-epics", "space-exploration"], tags: ["oscar-winner", "survival", "visual-spectacle"] },
  { title: "Doctor Strange", genres: ["fantasy-epics", "action-spectacle", "time-travel"], tags: ["psychedelic-magic", "visual-spectacle"] },
  { title: "Thor: Ragnarok", genres: ["fantasy-epics", "action-spectacle", "satire-dark-comedy"], tags: ["cosmic-comedy", "box-office-smash"] },
  { title: "The Princess Bride", genres: ["fantasy-epics", "satire-dark-comedy"], tags: ["cult-classic", "all-time-masterpiece", "swashbuckler"] },

  // --- NEO-NOIR & CRIME ---
  { title: "Pulp Fiction", genres: ["neo-noir", "satire-dark-comedy"], tags: ["palme-dor", "oscar-winner", "cult-classic", "non-linear"] },
  { title: "No Country for Old Men", genres: ["neo-noir", "mind-bending"], tags: ["oscar-winner", "dark-and-gritty", "existential-dread", "critics-masterpiece"] },
  { title: "Drive", genres: ["neo-noir", "action-spectacle"], tags: ["hyper-stylized", "cult-classic", "neo-noir"] },
  { title: "L.A. Confidential", genres: ["neo-noir", "mystery-whodunit"], tags: ["oscar-winner", "critics-masterpiece"] },
  { title: "Chinatown", genres: ["neo-noir", "mystery-whodunit"], tags: ["oscar-winner", "critics-masterpiece"] },
  { title: "Scarface", genres: ["neo-noir", "action-spectacle"], tags: ["cult-classic", "hyper-stylized"] },
  { title: "Goodfellas", genres: ["neo-noir", "biopic-epics"], tags: ["oscar-winner", "critics-masterpiece", "all-time-masterpiece"] },
  { title: "The Godfather", genres: ["neo-noir", "biopic-epics"], tags: ["oscar-winner", "all-time-masterpiece", "critics-masterpiece"] },
  { title: "The Godfather Part II", genres: ["neo-noir", "biopic-epics"], tags: ["oscar-winner", "all-time-masterpiece", "critics-masterpiece"] },
  { title: "The Departed", genres: ["neo-noir", "action-spectacle"], tags: ["oscar-winner", "dark-and-gritty", "box-office-smash"] },
  { title: "Fargo", genres: ["neo-noir", "satire-dark-comedy", "mystery-whodunit"], tags: ["oscar-winner", "critics-masterpiece"] },
  { title: "Casino", genres: ["neo-noir", "biopic-epics"], tags: ["mob-epic", "critics-masterpiece"] },
  { title: "Catch Me If You Can", genres: ["neo-noir", "biopic-epics"], tags: ["con-artist", "box-office-smash", "catchy"] },
  { title: "American Gangster", genres: ["neo-noir", "biopic-epics"], tags: ["crime-kingpin", "box-office-smash"] },
  { title: "Donnie Brasco", genres: ["neo-noir", "biopic-epics"], tags: ["undercover-mob", "critics-masterpiece"] },
  { title: "Wind River", genres: ["neo-noir", "mystery-whodunit"], tags: ["snow-western", "gritty-realism"] },
  { title: "Hell or High Water", genres: ["neo-noir", "action-spectacle"], tags: ["bank-heist", "modern-western", "critics-masterpiece"] },
  { title: "Reservoir Dogs", genres: ["neo-noir", "action-spectacle"], tags: ["heist-aftermath", "cult-classic", "indie-legend"] },
  { title: "The Usual Suspects", genres: ["neo-noir", "mystery-whodunit"], tags: ["oscar-winner", "twist-ending", "cult-classic"] },
  { title: "Training Day", genres: ["neo-noir", "action-spectacle"], tags: ["oscar-winner", "corrupt-cop", "dark-and-gritty"] },
  { title: "City of God", genres: ["neo-noir", "biopic-epics"], tags: ["favela-saga", "critics-masterpiece", "hyper-stylized"] },

  // --- SPACE EXPLORATION & SURVIVAL ---
  { title: "Apollo 13", genres: ["space-exploration", "biopic-epics"], tags: ["oscar-winner", "nasa-history", "box-office-smash"] },
  { title: "The Martian", genres: ["space-exploration", "sci-fi"], tags: ["oscar-winner", "box-office-smash", "survival"] },
  { title: "First Man", genres: ["space-exploration", "biopic-epics"], tags: ["oscar-winner", "nasa-history", "atmospheric"] },
  { title: "Sunshine", genres: ["space-exploration", "sci-fi", "modern-horror"], tags: ["cult-classic", "visual-spectacle", "atmospheric"] },
  { title: "Moon", genres: ["space-exploration", "sci-fi", "mind-bending"], tags: ["cult-classic", "philosophical", "ai-consciousness"] },
  { title: "Ad Astra", genres: ["space-exploration", "sci-fi"], tags: ["atmospheric", "philosophical", "visual-spectacle"] },
  { title: "Europa Report", genres: ["space-exploration", "sci-fi", "modern-horror"], tags: ["found-footage", "deep-space"] },
  { title: "Hidden Figures", genres: ["space-exploration", "biopic-epics"], tags: ["nasa-history", "oscar-nominee", "inspiring"] },
  { title: "Life", genres: ["space-exploration", "modern-horror", "sci-fi"], tags: ["alien-organism", "survival", "high-tension"] },
  { title: "Star Trek", genres: ["space-exploration", "sci-fi", "action-spectacle"], tags: ["reboot-epic", "box-office-smash"] },
  { title: "Guardians of the Galaxy", genres: ["space-exploration", "sci-fi", "action-spectacle"], tags: ["cosmic-comedy", "box-office-smash", "retro-mix"] },

  // --- MYSTERY & WHODUNIT ---
  { title: "Knives Out", genres: ["mystery-whodunit", "satire-dark-comedy"], tags: ["box-office-smash", "critics-masterpiece"] },
  { title: "Glass Onion", genres: ["mystery-whodunit", "satire-dark-comedy"], tags: ["critics-masterpiece", "hyper-stylized"] },
  { title: "Clue", genres: ["mystery-whodunit", "satire-dark-comedy"], tags: ["cult-classic", "ensemble-slapstick"] },
  { title: "Murder on the Orient Express", genres: ["mystery-whodunit"], tags: ["agatha-christie", "ensemble-cast"] },
  { title: "Death on the Nile", genres: ["mystery-whodunit"], tags: ["agatha-christie", "exotic-mystery"] },
  { title: "The Girl with the Dragon Tattoo", genres: ["mystery-whodunit", "neo-noir"], tags: ["fincher-procedural", "dark-and-gritty"] },
  { title: "Missing", genres: ["mystery-whodunit"], tags: ["screen-life", "twist-ending"] },
  { title: "Mystic River", genres: ["mystery-whodunit", "neo-noir"], tags: ["oscar-winner", "tragic-mystery"] },

  // --- TIME TRAVEL & MULTIVERSE ---
  { title: "Groundhog Day", genres: ["time-travel", "satire-dark-comedy"], tags: ["cult-classic", "all-time-masterpiece", "time-loop"] },
  { title: "About Time", genres: ["time-travel"], tags: ["emotional-epic", "time-loop"] },
  { title: "Source Code", genres: ["time-travel", "sci-fi", "mind-bending"], tags: ["time-loop", "high-octane"] },
  { title: "Palm Springs", genres: ["time-travel", "satire-dark-comedy"], tags: ["time-loop", "indie-comedy"] },
  { title: "Harry Potter and the Prisoner of Azkaban", genres: ["time-travel", "fantasy-epics"], tags: ["time-turner", "dark-fairytale", "critics-masterpiece"] },

  // --- MARTIAL ARTS & WUXIA ---
  { title: "Crouching Tiger, Hidden Dragon", genres: ["martial-arts", "fantasy-epics", "action-spectacle"], tags: ["oscar-winner", "wuxia-legend", "visual-spectacle", "critics-masterpiece"] },
  { title: "Hero", query: "Hero", imdbId: "tt0299977", genres: ["martial-arts", "fantasy-epics", "action-spectacle"], tags: ["wuxia-legend", "hyper-stylized", "visual-spectacle", "critics-masterpiece"] },
  { title: "House of Flying Daggers", genres: ["martial-arts", "fantasy-epics", "action-spectacle"], tags: ["wuxia-legend", "visual-spectacle", "hyper-stylized"] },
  { title: "Fearless", genres: ["martial-arts", "biopic-epics"], tags: ["wuxia-legend", "martial-arts"] },
  { title: "Kung Fu Hustle", genres: ["martial-arts", "satire-dark-comedy", "action-spectacle"], tags: ["cult-classic", "hyper-stylized", "wuxia-legend"] },
  { title: "Shaolin Soccer", genres: ["martial-arts", "satire-dark-comedy"], tags: ["cult-classic", "hyper-stylized"] },
  { title: "Ong-Bak: The Thai Warrior", genres: ["martial-arts", "action-spectacle"], tags: ["practical-fx", "cult-classic", "high-octane"] },
  { title: "Ip Man", genres: ["martial-arts", "biopic-epics", "action-spectacle"], tags: ["heroic-epic", "martial-arts", "cult-classic"] },
  { title: "Enter the Dragon", genres: ["martial-arts", "action-spectacle"], tags: ["bruce-lee", "all-time-masterpiece", "cult-classic"] },
  { title: "Fist of Legend", genres: ["martial-arts", "action-spectacle"], tags: ["jet-li", "martial-arts-legend"] },
  { title: "Shadow", genres: ["martial-arts", "fantasy-epics", "neo-noir"], tags: ["yin-yang-palette", "wuxia-legend", "visual-masterpiece"] },
  { title: "The Grandmaster", genres: ["martial-arts", "biopic-epics", "neo-noir"], tags: ["wong-kar-wai", "poetic-combat", "oscar-nominee"] },
  { title: "Police Story", genres: ["martial-arts", "action-spectacle"], tags: ["jackie-chan", "death-defying-stunts", "cult-classic"] }
];

async function main() {
  console.log(`Fetching metadata and posters for ${CANDIDATES.length} films...`);
  const finalMovies = [];
  const processedTitles = new Set();

  for (let i = 0; i < CANDIDATES.length; i++) {
    const cand = CANDIDATES[i];
    const key = cand.imdbId || cand.title.toLowerCase();
    if (processedTitles.has(key)) continue;
    processedTitles.add(key);

    const slug = cand.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const posterFilename = `${slug}.jpg`;
    const posterLocalPath = `./posters/${posterFilename}`;
    const posterAbsPath = path.join(POSTERS_DIR, posterFilename);

    process.stdout.write(`[${i + 1}/${CANDIDATES.length}] Fetching ${cand.title}... `);

    try {
      let omdbUrl;
      if (cand.imdbId) {
        omdbUrl = `https://www.omdbapi.com/?apikey=trilogy&i=${cand.imdbId}`;
      } else {
        omdbUrl = `https://www.omdbapi.com/?apikey=trilogy&t=${encodeURIComponent(cand.title)}`;
      }
      const res = await fetchJson(omdbUrl);

      let posterUrl = res.Poster;
      let rating = parseFloat(res.imdbRating) || 8.0;
      let year = parseInt(res.Year) || 2020;
      let director = res.Director !== 'N/A' && res.Director ? res.Director : 'Unknown Director';
      let synopsis = res.Plot !== 'N/A' && res.Plot ? res.Plot : 'No detailed synopsis available.';
      let runtime = res.Runtime !== 'N/A' && res.Runtime ? res.Runtime : '2h 00m';

      let hasLocalPoster = false;
      if (posterUrl && posterUrl !== 'N/A') {
        const success = await downloadImage(posterUrl, posterAbsPath);
        if (success) {
          hasLocalPoster = true;
        }
      }

      const youtubeId = TRAILERS[cand.title.toLowerCase()] || "gCcx85zbxz4";

      finalMovies.push({
        id: slug,
        title: res.Title || cand.title,
        year: year,
        director: director,
        rating: rating,
        rank: finalMovies.length + 1,
        runtime: runtime,
        genreIds: cand.genres,
        synopsis: synopsis,
        tags: cand.tags,
        trailerYoutubeId: youtubeId,
        poster: hasLocalPoster ? posterLocalPath : (posterUrl && posterUrl !== 'N/A' ? posterUrl : 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80')
      });
      console.log(`✓ (Year: ${year}, IMDb: ${rating}, Director: ${director}, Genres: [${cand.genres.join(', ')}])`);
    } catch (err) {
      console.log(`✗ Error: ${err.message}`);
    }
  }

  let existingTags = [];
  try {
    global.window = {};
    require('./data.js');
    existingTags = global.window.CINEVAULT_DATA.tags;
  } catch (e) {
    console.log("Using default tags list.");
  }

  const masterData = {
    genres: MASTER_GENRES,
    tags: existingTags,
    movies: finalMovies
  };

  const code = `// CineVault Master Database (Strict 1 Movie Record Per Real Film with Official Local Posters)\nwindow.CINEVAULT_DATA = ${JSON.stringify(masterData, null, 2)};\n`;

  fs.writeFileSync(path.join(__dirname, 'data.js'), code, 'utf8');
  console.log(`\nDONE! Updated data.js with ${finalMovies.length} real movies!`);
}

main();
