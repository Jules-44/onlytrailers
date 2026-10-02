// Traylaz Curated "Best-Of 15-20" Movie Taxonomy Database (Expanded)

window.TRAYLAZ_DATA = {
  genres: [
    {
      id: "sci-fi",
      name: "Sci-Fi Masterpieces",
      icon: "🚀",
      description: "Visionary sci-fi epics that redefine cinematic storytelling, futuristic worlds, and existential exploration.",
      color: "#3b82f6"
    },
    {
      id: "mind-bending",
      name: "Mind-Bending Thrillers",
      icon: "🧠",
      description: "Psychological, mind-warping narrative mazes that keep you questioning reality until the final frame.",
      color: "#8b5cf6"
    },
    {
      id: "cyberpunk",
      name: "Cyberpunk & Dystopian",
      icon: "🏙️",
      description: "High tech, low life, neon-drenched dystopias, AI consciousness, and neon noir landscapes.",
      color: "#ec4899"
    },
    {
      id: "action-spectacle",
      name: "Action & Spectacle",
      icon: "💥",
      description: "Adrenaline-fueled, beautifully choreographed action cinema with legendary practical and visual effects.",
      color: "#f97316"
    },
    {
      id: "modern-horror",
      name: "Modern Horror & Suspense",
      icon: "👁️",
      description: "Atmospheric, dread-inducing modern horror and psychological suspense from contemporary masters.",
      color: "#ef4444"
    },
    {
      id: "anime-masterpieces",
      name: "Anime & Animated Classics",
      icon: "🎨",
      description: "Stunning hand-drawn and digital animated works of art with legendary narrative scope.",
      color: "#10b981"
    },
    {
      id: "fantasy-epics",
      name: "Fantasy & Mythic Epics",
      icon: "⚔️",
      description: "Grand fantasy realms, mythic quests, dark fairytales, and magical worldbuilding.",
      color: "#eab308"
    },
    {
      id: "neo-noir",
      name: "Neo-Noir & Crime",
      icon: "🕵️",
      description: "Gritty crime thrillers, moral ambiguity, shadowy underworlds, and atmospheric detective tales.",
      color: "#64748b"
    },
    {
      id: "indie-a24",
      name: "Indie & A24 Gems",
      icon: "💎",
      description: "Art-house masterpieces, intimate character studies, bold auteur visions, and indie triumphs.",
      color: "#a855f7"
    },
    {
      id: "time-travel",
      name: "Time-Travel Paradoxes",
      icon: "⏳",
      description: "Temporal loops, cause-and-effect paradoxes, timeline rewriting, and time-warp adventures.",
      color: "#06b6d4"
    }
  ],

  // Expanded Taxonomy Tags System
  tags: [
    // Vibe & Atmosphere
    { id: "mind-bending", label: "#mind-bending", color: "#8b5cf6", category: "Vibe" },
    { id: "psychological", label: "#psychological", color: "#a855f7", category: "Vibe" },
    { id: "gothic-dread", label: "#gothic-dread", color: "#991b1b", category: "Vibe" },
    { id: "existential", label: "#existential", color: "#84cc16", category: "Vibe" },
    { id: "surreal", label: "#surreal", color: "#f43f5e", category: "Vibe" },
    { id: "dark-and-gritty", label: "#dark-and-gritty", color: "#475569", category: "Vibe" },

    // Acclaim & Prestige
    { id: "oscar-winner", label: "#oscar-winner", color: "#eab308", category: "Acclaim" },
    { id: "cult-classic", label: "#cult-classic", color: "#f97316", category: "Acclaim" },
    { id: "palme-dor", label: "#cannes-winner", color: "#d97706", category: "Acclaim" },
    { id: "masterpiece", label: "#all-time-masterpiece", color: "#fbbf24", category: "Acclaim" },

    // Style & Aesthetic
    { id: "visual-spectacle", label: "#visual-spectacle", color: "#06b6d4", category: "Style" },
    { id: "neo-noir", label: "#neo-noir", color: "#334155", category: "Style" },
    { id: "a24-style", label: "#indie-a24", color: "#10b981", category: "Style" },
    { id: "hand-drawn", label: "#hand-drawn", color: "#059669", category: "Style" },
    { id: "cinematic-score", label: "#iconic-score", color: "#818cf8", category: "Style" },

    // Tropes & Sub-Genres
    { id: "cyberpunk", label: "#cyberpunk", color: "#ec4899", category: "Sub-Genre" },
    { id: "dystopian", label: "#dystopian", color: "#64748b", category: "Sub-Genre" },
    { id: "time-travel", label: "#time-travel", color: "#3b82f6", category: "Sub-Genre" },
    { id: "space-epic", label: "#space-epic", color: "#6366f1", category: "Sub-Genre" },
    { id: "ai-synth", label: "#ai-and-synth", color: "#14b8a6", category: "Sub-Genre" },
    { id: "post-apocalyptic", label: "#post-apocalyptic", color: "#ea580c", category: "Sub-Genre" },
    { id: "dark-fantasy", label: "#dark-fantasy", color: "#7c3aed", category: "Sub-Genre" },
    { id: "crime-saga", label: "#crime-saga", color: "#b91c1c", category: "Sub-Genre" },

    // Craft & Technique
    { id: "practical-fx", label: "#practical-fx", color: "#f43f5e", category: "Craft" },
    { id: "unreliable-narrator", label: "#unreliable-narrator", color: "#d97706", category: "Craft" },
    { id: "non-linear", label: "#non-linear", color: "#c084fc", category: "Craft" }
  ],

  movies: [
    // ==========================================
    // 🚀 SCI-FI MASTERPIECES (Top 15)
    // ==========================================
    {
      id: "sf-1", genreId: "sci-fi", rank: 1, title: "Blade Runner 2049", year: 2017, director: "Denis Villeneuve", rating: 8.7, rottenTomatoes: "88%", runtime: "2h 44m", trailerYoutubeId: "gCcx85zbxz4",
      poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      synopsis: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
      tags: ["cyberpunk", "visual-spectacle", "neo-noir", "oscar-winner", "ai-synth", "existential", "masterpiece"]
    },
    {
      id: "sf-2", genreId: "sci-fi", rank: 2, title: "Interstellar", year: 2014, director: "Christopher Nolan", rating: 8.7, rottenTomatoes: "73%", runtime: "2h 49m", trailerYoutubeId: "zSWdZVtXT7E",
      poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      synopsis: "When Earth becomes uninhabitable, a team of ex-NASA astronauts travels through a wormhole near Saturn to find a new home for humanity.",
      tags: ["space-epic", "mind-bending", "oscar-winner", "time-travel", "existential", "cinematic-score"]
    },
    {
      id: "sf-3", genreId: "sci-fi", rank: 3, title: "Dune: Part Two", year: 2024, director: "Denis Villeneuve", rating: 8.6, rottenTomatoes: "92%", runtime: "2h 46m", trailerYoutubeId: "Way9Dexny3w",
      poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      synopsis: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
      tags: ["space-epic", "visual-spectacle", "oscar-winner", "dystopian", "cinematic-score"]
    },
    {
      id: "sf-4", genreId: "sci-fi", rank: 4, title: "Arrival", year: 2016, director: "Denis Villeneuve", rating: 7.9, rottenTomatoes: "94%", runtime: "1h 56m", trailerYoutubeId: "tFMo3UJ4B4g",
      poster: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=800&q=80",
      synopsis: "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.",
      tags: ["mind-bending", "existential", "oscar-winner", "non-linear"]
    },
    {
      id: "sf-5", genreId: "sci-fi", rank: 5, title: "The Matrix", year: 1999, director: "The Wachowskis", rating: 8.7, rottenTomatoes: "83%", runtime: "2h 16m", trailerYoutubeId: "vKQi3bBA1y8",
      poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      synopsis: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      tags: ["cyberpunk", "cult-classic", "oscar-winner", "ai-synth", "visual-spectacle", "masterpiece"]
    },
    {
      id: "sf-6", genreId: "sci-fi", rank: 6, title: "Children of Men", year: 2006, director: "Alfonso Cuarón", rating: 7.9, rottenTomatoes: "92%", runtime: "1h 49m", trailerYoutubeId: "2VT2apoX90o",
      poster: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=800&q=80",
      synopsis: "In 2027, in a chaotic world in which women have become infertile, a former activist agrees to help transport a miraculously pregnant woman.",
      tags: ["dystopian", "visual-spectacle", "cult-classic", "existential", "dark-and-gritty"]
    },
    {
      id: "sf-7", genreId: "sci-fi", rank: 7, title: "Ex Machina", year: 2014, director: "Alex Garland", rating: 7.7, rottenTomatoes: "92%", runtime: "1h 48m", trailerYoutubeId: "EoQuVnKhxaM",
      poster: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      synopsis: "A programmer is selected to evaluate the human qualities of a highly advanced humanoid A.I.",
      tags: ["ai-synth", "psychological", "a24-style", "oscar-winner"]
    },
    {
      id: "sf-8", genreId: "sci-fi", rank: 8, title: "2001: A Space Odyssey", year: 1968, director: "Stanley Kubrick", rating: 8.3, rottenTomatoes: "92%", runtime: "2h 29m", trailerYoutubeId: "oR_e9y-bka0",
      poster: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80",
      synopsis: "After uncovering a mysterious artifact buried beneath the Lunar surface, a spacecraft is sent to Jupiter manned by two humans and HAL 9000.",
      tags: ["space-epic", "cult-classic", "existential", "visual-spectacle", "ai-synth", "masterpiece"]
    },
    {
      id: "sf-9", genreId: "sci-fi", rank: 9, title: "Gattaca", year: 1997, director: "Andrew Niccol", rating: 7.8, rottenTomatoes: "82%", runtime: "1h 46m", trailerYoutubeId: "W_KruQhff4U",
      poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      synopsis: "A genetically inferior man assumes the identity of a superior one in order to pursue his lifelong dream of space travel.",
      tags: ["dystopian", "cult-classic", "existential", "neo-noir"]
    },
    {
      id: "sf-10", genreId: "sci-fi", rank: 10, title: "Her", year: 2013, director: "Spike Jonze", rating: 8.0, rottenTomatoes: "94%", runtime: "2h 6m", trailerYoutubeId: "ne6p6h632i8",
      poster: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      synopsis: "A lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
      tags: ["ai-synth", "existential", "oscar-winner", "surreal"]
    },
    {
      id: "sf-11", genreId: "sci-fi", rank: 11, title: "District 9", year: 2009, director: "Neill Blomkamp", rating: 7.9, rottenTomatoes: "90%", runtime: "1h 52m", trailerYoutubeId: "VjihaK7HeFc",
      poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      synopsis: "Violence ensues after an extraterrestrial race forced to live in slum-like conditions on Earth finds an ally in a government agent.",
      tags: ["dystopian", "cult-classic", "action-spectacle", "practical-fx"]
    },
    {
      id: "sf-12", genreId: "sci-fi", rank: 12, title: "Solaris", year: 1972, director: "Andrei Tarkovsky", rating: 8.0, rottenTomatoes: "96%", runtime: "2h 47m", trailerYoutubeId: "R4vSP32T6Bw",
      poster: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=800&q=80",
      synopsis: "A psychologist is sent to a space station orbiting a mysterious ocean planet to investigate the unexplained madness of the crew.",
      tags: ["space-epic", "psychological", "existential", "masterpiece"]
    },

    // ==========================================
    // 🧠 MIND-BENDING THRILLERS (Top 15)
    // ==========================================
    {
      id: "mb-1", genreId: "mind-bending", rank: 1, title: "Inception", year: 2010, director: "Christopher Nolan", rating: 8.8, rottenTomatoes: "87%", runtime: "2h 28m", trailerYoutubeId: "YoHD9XEInc0",
      poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      synopsis: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      tags: ["mind-bending", "oscar-winner", "visual-spectacle", "psychological", "masterpiece"]
    },
    {
      id: "mb-2", genreId: "mind-bending", rank: 2, title: "Everything Everywhere All at Once", year: 2022, director: "The Daniels", rating: 8.8, rottenTomatoes: "94%", runtime: "2h 19m", trailerYoutubeId: "wxN1T1uxQ2g",
      poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
      synopsis: "A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes.",
      tags: ["mind-bending", "oscar-winner", "a24-style", "visual-spectacle", "existential", "surreal"]
    },
    {
      id: "mb-3", genreId: "mind-bending", rank: 3, title: "Memento", year: 2000, director: "Christopher Nolan", rating: 8.4, rottenTomatoes: "93%", runtime: "1h 53m", trailerYoutubeId: "4CV41hjh05Y",
      poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      synopsis: "A man with short-term memory loss attempts to track down his wife's murderer using notes and body tattoos.",
      tags: ["mind-bending", "unreliable-narrator", "psychological", "cult-classic", "non-linear"]
    },
    {
      id: "mb-4", genreId: "mind-bending", rank: 4, title: "Shutter Island", year: 2010, director: "Martin Scorsese", rating: 8.2, rottenTomatoes: "69%", runtime: "2h 18m", trailerYoutubeId: "5iaYLCiq5A8",
      poster: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=800&q=80",
      synopsis: "Two U.S. marshals are sent to an asylum on a remote island to investigate the disappearance of a patient.",
      tags: ["psychological", "unreliable-narrator", "mind-bending", "gothic-dread", "neo-noir"]
    },
    {
      id: "mb-5", genreId: "mind-bending", rank: 5, title: "The Prestige", year: 2006, director: "Christopher Nolan", rating: 8.5, rottenTomatoes: "76%", runtime: "2h 10m", trailerYoutubeId: "o4gHCmTQDVI",
      poster: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      synopsis: "After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion.",
      tags: ["mind-bending", "psychological", "unreliable-narrator", "masterpiece"]
    },
    {
      id: "mb-6", genreId: "mind-bending", rank: 6, title: "Coherence", year: 2013, director: "James Ward Byrkit", rating: 7.2, rottenTomatoes: "88%", runtime: "1h 29m", trailerYoutubeId: "sEceDz1Rodc",
      poster: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=800&q=80",
      synopsis: "Strange things happen when a group of friends gather for a dinner party on the night a celestial comet passes overhead.",
      tags: ["mind-bending", "cult-classic", "psychological", "existential"]
    },
    {
      id: "mb-7", genreId: "mind-bending", rank: 7, title: "Mulholland Drive", year: 2001, director: "David Lynch", rating: 7.9, rottenTomatoes: "84%", runtime: "2h 27m", trailerYoutubeId: "XQPE36566dM",
      poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      synopsis: "An amnesiac woman and a hopeful Hollywood aspiring actress search for clues across Los Angeles in a surreal dreamscape.",
      tags: ["mind-bending", "surreal", "psychological", "cult-classic", "neo-noir", "masterpiece"]
    },

    // ==========================================
    // ⚔️ FANTASY & MYTHIC EPICS (Top 12)
    // ==========================================
    {
      id: "fan-1", genreId: "fantasy-epics", rank: 1, title: "The Lord of the Rings: The Return of the King", year: 2003, director: "Peter Jackson", rating: 9.0, rottenTomatoes: "94%", runtime: "3h 21m", trailerYoutubeId: "r5X-hFf6Bwo",
      poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      synopsis: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom.",
      tags: ["oscar-winner", "visual-spectacle", "masterpiece", "practical-fx", "cinematic-score"]
    },
    {
      id: "fan-2", genreId: "fantasy-epics", rank: 2, title: "Pan's Labyrinth", year: 2006, director: "Guillermo del Toro", rating: 8.2, rottenTomatoes: "95%", runtime: "1h 58m", trailerYoutubeId: "EqYiSlkvRgo",
      poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      synopsis: "In 1944 Spain, the young stepdaughter of a sadistic army officer escapes into an eerie but captivating fantasy world.",
      tags: ["dark-fantasy", "oscar-winner", "gothic-dread", "practical-fx", "surreal", "masterpiece"]
    },
    {
      id: "fan-3", genreId: "fantasy-epics", rank: 3, title: "The Green Knight", year: 2021, director: "David Lowery", rating: 6.6, rottenTomatoes: "89%", runtime: "2h 10m", trailerYoutubeId: "sS6ksY8xWCY",
      poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
      synopsis: "A fantasy retelling of the Arthurian legend of Sir Gawain embarking on a daring quest to confront the enigmatic Green Knight.",
      tags: ["dark-fantasy", "a24-style", "existential", "visual-spectacle", "surreal"]
    },
    {
      id: "fan-4", genreId: "fantasy-epics", rank: 4, title: "The Princess Bride", year: 1987, director: "Rob Reiner", rating: 8.0, rottenTomatoes: "97%", runtime: "1h 38m", trailerYoutubeId: "WNNUcHRiPS8",
      poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      synopsis: "A bedridden boy's grandfather reads him the story of a farmboy-turned-pirate who must rescue his true love.",
      tags: ["cult-classic", "masterpiece"]
    },

    // ==========================================
    // 🕵️ NEO-NOIR & CRIME (Top 12)
    // ==========================================
    {
      id: "nn-1", genreId: "neo-noir", rank: 1, title: "Pulp Fiction", year: 1994, director: "Quentin Tarantino", rating: 8.9, rottenTomatoes: "92%", runtime: "2h 34m", trailerYoutubeId: "s7EdQ4FqbhY",
      poster: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=800&q=80",
      synopsis: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      tags: ["crime-saga", "neo-noir", "oscar-winner", "cult-classic", "non-linear", "masterpiece"]
    },
    {
      id: "nn-2", genreId: "neo-noir", rank: 2, title: "Se7en", year: 1995, director: "David Fincher", rating: 8.6, rottenTomatoes: "83%", runtime: "2h 7m", trailerYoutubeId: "znmZoVkCjpI",
      poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      synopsis: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
      tags: ["neo-noir", "dark-and-gritty", "psychological", "crime-saga", "cult-classic", "masterpiece"]
    },
    {
      id: "nn-3", genreId: "neo-noir", rank: 3, title: "No Country for Old Men", year: 2007, director: "Joel & Ethan Coen", rating: 8.2, rottenTomatoes: "93%", runtime: "2h 2m", trailerYoutubeId: "38A__WT3-o0",
      poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      synopsis: "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars near the Rio Grande.",
      tags: ["neo-noir", "oscar-winner", "crime-saga", "dark-and-gritty", "masterpiece"]
    },
    {
      id: "nn-4", genreId: "neo-noir", rank: 4, title: "Drive", year: 2011, director: "Nicolas Winding Refn", rating: 7.8, rottenTomatoes: "93%", runtime: "1h 40m", trailerYoutubeId: "KBiOF3y1W0Y",
      poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      synopsis: "A mysterious Hollywood stuntman and getaway driver gets into trouble when he helps his neighbor's ex-convict husband.",
      tags: ["neo-noir", "cult-classic", "cannes-winner", "cinematic-score", "dark-and-gritty"]
    },

    // ==========================================
    // 💎 INDIE & A24 GEMS (Top 12)
    // ==========================================
    {
      id: "a24-1", genreId: "indie-a24", rank: 1, title: "The Lighthouse", year: 2019, director: "Robert Eggers", rating: 7.4, rottenTomatoes: "90%", runtime: "1h 49m", trailerYoutubeId: "Hyag7lR6660",
      poster: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=800&q=80",
      synopsis: "Two lighthouse keepers try to maintain their sanity while living on a remote and mysterious New England island in the 1890s.",
      tags: ["a24-style", "psychological", "surreal", "gothic-dread", "unreliable-narrator"]
    },
    {
      id: "a24-2", genreId: "indie-a24", rank: 2, title: "Uncut Gems", year: 2019, director: "Josh & Benny Safdie", rating: 7.4, rottenTomatoes: "91%", runtime: "2h 15m", trailerYoutubeId: "vTfJp2Ts9X8",
      poster: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      synopsis: "With his debts mounting and angry collectors closing in, a fast-talking New York City jeweler risks everything in hopes of staying afloat.",
      tags: ["a24-style", "crime-saga", "dark-and-gritty", "cult-classic"]
    },
    {
      id: "a24-3", genreId: "indie-a24", rank: 3, title: "Aftersun", year: 2022, director: "Charlotte Wells", rating: 7.7, rottenTomatoes: "96%", runtime: "1h 42m", trailerYoutubeId: "vTfJp2Ts9X8",
      poster: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=800&q=80",
      synopsis: "Sophie reflects on the shared joy and private melancholy of a holiday she took with her father twenty years earlier.",
      tags: ["a24-style", "existential", "masterpiece"]
    },

    // ==========================================
    // ⏳ TIME-TRAVEL PARADOXES (Top 12)
    // ==========================================
    {
      id: "tt-1", genreId: "time-travel", rank: 1, title: "Back to the Future", year: 1985, director: "Robert Zemeckis", rating: 8.5, rottenTomatoes: "93%", runtime: "1h 56m", trailerYoutubeId: "qvsgGtivCgs",
      poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      synopsis: "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by Doc Brown.",
      tags: ["time-travel", "oscar-winner", "cult-classic", "masterpiece"]
    },
    {
      id: "tt-2", genreId: "time-travel", rank: 2, title: "Looper", year: 2012, director: "Rian Johnson", rating: 7.4, rottenTomatoes: "93%", runtime: "1h 59m", trailerYoutubeId: "2iQuhsmtfHw",
      poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      synopsis: "In 2074, when the mob wants to get rid of someone, the target is sent 30 years into the past, where a hired gun await to finish the job.",
      tags: ["time-travel", "cyberpunk", "mind-bending", "neo-noir"]
    },
    {
      id: "tt-3", genreId: "time-travel", rank: 3, title: "Predestination", year: 2014, director: "The Spierig Brothers", rating: 7.4, rottenTomatoes: "84%", runtime: "1h 37m", trailerYoutubeId: "UVn9x2Z_2J4",
      poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      synopsis: "For his final assignment, a top temporal agent must pursue the one criminal that has eluded him throughout time.",
      tags: ["time-travel", "mind-bending", "unreliable-narrator", "cult-classic"]
    }
  ]
};
