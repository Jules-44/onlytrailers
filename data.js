// CineVault Master Database (Strict 1 Movie Record Per Real Film with Local Posters)
window.CINEVAULT_DATA = {
  "genres": [
    {
      "id": "sci-fi",
      "name": "Sci-Fi Masterpieces",
      "icon": "\ud83d\ude80",
      "description": "Visionary sci-fi epics that redefine cinematic storytelling, futuristic worlds, and existential exploration.",
      "color": "#3b82f6"
    },
    {
      "id": "mind-bending",
      "name": "Mind-Bending Thrillers",
      "icon": "\ud83e\udde0",
      "description": "Psychological, mind-warping narrative mazes that keep you questioning reality until the final frame.",
      "color": "#8b5cf6"
    },
    {
      "id": "cyberpunk",
      "name": "Cyberpunk & Dystopian",
      "icon": "\ud83c\udfd9\ufe0f",
      "description": "High tech, low life, neon-drenched dystopias, AI consciousness, and neon noir landscapes.",
      "color": "#ec4899"
    },
    {
      "id": "action-spectacle",
      "name": "Action & Spectacle",
      "icon": "\ud83d\udca5",
      "description": "Adrenaline-fueled, beautifully choreographed action cinema with legendary practical and visual effects.",
      "color": "#f97316"
    },
    {
      "id": "modern-horror",
      "name": "Modern Horror & Suspense",
      "icon": "\ud83d\udc41\ufe0f",
      "description": "Atmospheric, dread-inducing modern horror and psychological suspense from contemporary masters.",
      "color": "#ef4444"
    },
    {
      "id": "anime-masterpieces",
      "name": "Anime & Animated Classics",
      "icon": "\ud83c\udfa8",
      "description": "Stunning hand-drawn and digital animated works of art with legendary narrative scope.",
      "color": "#10b981"
    },
    {
      "id": "fantasy-epics",
      "name": "Fantasy & Mythic Epics",
      "icon": "\u2694\ufe0f",
      "description": "Grand fantasy realms, mythic quests, dark fairytales, and magical worldbuilding.",
      "color": "#eab308"
    },
    {
      "id": "neo-noir",
      "name": "Neo-Noir & Crime",
      "icon": "\ud83d\udd75\ufe0f",
      "description": "Gritty crime thrillers, moral ambiguity, shadowy underworlds, and atmospheric detective tales.",
      "color": "#64748b"
    },
    {
      "id": "space-exploration",
      "name": "Space Exploration & Survival",
      "icon": "\ud83d\udef8",
      "description": "Vast cosmic journeys, NASA missions, interstellar voyages, and deep-space survival sagas.",
      "color": "#06b6d4"
    },
    {
      "id": "mystery-whodunit",
      "name": "Mystery & Whodunit",
      "icon": "\ud83d\udd0d",
      "description": "Intricate puzzles, murder mysteries, deceptive twists, and sharp detective masterclasses.",
      "color": "#a855f7"
    },
    {
      "id": "time-travel",
      "name": "Time Travel & Multiverse",
      "icon": "\u23f3",
      "description": "Temporal paradoxes, timeline loops, wormholes, and multi-dimensional reality warps.",
      "color": "#f43f5e"
    },
    {
      "id": "post-apocalyptic",
      "name": "Post-Apocalyptic & Survival",
      "icon": "\u2623\ufe0f",
      "description": "Wasteland survival, civilization collapses, viral outbreaks, and desperate human endurance.",
      "color": "#84cc16"
    },
    {
      "id": "satire-dark-comedy",
      "name": "Satire & Dark Comedy",
      "icon": "\ud83c\udfad",
      "description": "Razor-sharp social satire, cynical black humor, and subversive comedic masterpieces.",
      "color": "#fbbf24"
    },
    {
      "id": "biopic-epics",
      "name": "Biopic & Historical Epics",
      "icon": "\ud83c\udfdb\ufe0f",
      "description": "Monumental historical sagas, biographical profiles, and world-shaping historical events.",
      "color": "#d97706"
    },
    {
      "id": "martial-arts",
      "name": "Martial Arts & Wuxia",
      "icon": "\ud83d\udc09",
      "description": "Legendary combat choreography, martial artistry, ancient honor codes, and heroic mythos.",
      "color": "#dc2626"
    }
  ],
  "tags": [
    {
      "id": "mind-bending",
      "label": "#mind-bending",
      "category": "Vibe",
      "color": "#8b5cf6"
    },
    {
      "id": "existential-dread",
      "label": "#existential-dread",
      "category": "Vibe",
      "color": "#ec4899"
    },
    {
      "id": "atmospheric",
      "label": "#atmospheric",
      "category": "Vibe",
      "color": "#3b82f6"
    },
    {
      "id": "hyper-stylized",
      "label": "#hyper-stylized",
      "category": "Vibe",
      "color": "#f97316"
    },
    {
      "id": "psychological",
      "label": "#psychological",
      "category": "Vibe",
      "color": "#a855f7"
    },
    {
      "id": "dark-and-gritty",
      "label": "#dark-and-gritty",
      "category": "Vibe",
      "color": "#64748b"
    },
    {
      "id": "surreal",
      "label": "#surreal",
      "category": "Vibe",
      "color": "#10b981"
    },
    {
      "id": "philosophical",
      "label": "#philosophical",
      "category": "Vibe",
      "color": "#06b6d4"
    },
    {
      "id": "oscar-winner",
      "label": "#oscar-winner",
      "category": "Acclaim",
      "color": "#eab308"
    },
    {
      "id": "cult-classic",
      "label": "#cult-classic",
      "category": "Acclaim",
      "color": "#f43f5e"
    },
    {
      "id": "critics-masterpiece",
      "label": "#critics-masterpiece",
      "category": "Acclaim",
      "color": "#8b5cf6"
    },
    {
      "id": "box-office-smash",
      "label": "#box-office-smash",
      "category": "Acclaim",
      "color": "#10b981"
    },
    {
      "id": "neon-noir",
      "label": "#neon-noir",
      "category": "Style",
      "color": "#ec4899"
    },
    {
      "id": "practical-fx",
      "label": "#practical-fx",
      "category": "Style",
      "color": "#f97316"
    },
    {
      "id": "visual-spectacle",
      "label": "#visual-spectacle",
      "category": "Style",
      "color": "#3b82f6"
    },
    {
      "id": "hand-drawn",
      "label": "#hand-drawn",
      "category": "Style",
      "color": "#10b981"
    },
    {
      "id": "slow-burn",
      "label": "#slow-burn",
      "category": "Style",
      "color": "#64748b"
    },
    {
      "id": "ai-consciousness",
      "label": "#ai-consciousness",
      "category": "Sub-Genre",
      "color": "#06b6d4"
    },
    {
      "id": "time-loop",
      "label": "#time-loop",
      "category": "Sub-Genre",
      "color": "#14b8a6"
    },
    {
      "id": "space-opera",
      "label": "#space-opera",
      "category": "Sub-Genre",
      "color": "#3b82f6"
    },
    {
      "id": "cosmic-horror",
      "label": "#cosmic-horror",
      "category": "Sub-Genre",
      "color": "#ef4444"
    },
    {
      "id": "cyberpunk-core",
      "label": "#cyberpunk-core",
      "category": "Sub-Genre",
      "color": "#ec4899"
    },
    {
      "id": "whodunit",
      "label": "#whodunit",
      "category": "Sub-Genre",
      "color": "#a855f7"
    },
    {
      "id": "wuxia-legend",
      "label": "#wuxia-legend",
      "category": "Sub-Genre",
      "color": "#dc2626"
    }
  ],
  "movies": [
    {
      "id": "blade-runner-2049",
      "title": "Blade Runner 2049",
      "year": 2017,
      "director": "Denis Villeneuve",
      "rating": 8,
      "rank": 1,
      "runtime": "164 min",
      "genreIds": [
        "sci-fi",
        "cyberpunk",
        "neo-noir"
      ],
      "synopsis": "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
      "tags": [
        "atmospheric",
        "hyper-stylized",
        "oscar-winner",
        "neon-noir",
        "visual-spectacle",
        "ai-consciousness"
      ],
      "trailerYoutubeId": "gCcx85zbxz4",
      "poster": "./posters/blade-runner-2049.jpg"
    },
    {
      "id": "interstellar",
      "title": "Interstellar",
      "year": 2014,
      "director": "Christopher Nolan",
      "rating": 8.7,
      "rank": 2,
      "runtime": "169 min",
      "genreIds": [
        "sci-fi",
        "space-exploration",
        "time-travel"
      ],
      "synopsis": "In a dystopian future where Earth has become near-uninhabitable, a team of astronauts embark on a mission to find a new home for humanity.",
      "tags": [
        "philosophical",
        "visual-spectacle",
        "oscar-winner",
        "space-opera",
        "time-loop"
      ],
      "trailerYoutubeId": "zSWdZVtXT7E",
      "poster": "./posters/interstellar.jpg"
    },
    {
      "id": "dune-part-two",
      "title": "Dune: Part Two",
      "year": 2024,
      "director": "Denis Villeneuve",
      "rating": 8.4,
      "rank": 3,
      "runtime": "166 min",
      "genreIds": [
        "sci-fi",
        "action-spectacle",
        "fantasy-epics"
      ],
      "synopsis": "Paul Atreides unites with the Fremen while on a warpath of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he endeavors to prevent a terrible fu...",
      "tags": [
        "visual-spectacle",
        "critics-masterpiece",
        "box-office-smash",
        "space-opera"
      ],
      "trailerYoutubeId": "Way9Dexny3w",
      "poster": "./posters/dune-part-two.jpg"
    },
    {
      "id": "arrival",
      "title": "Arrival",
      "year": 2016,
      "director": "Denis Villeneuve",
      "rating": 7.9,
      "rank": 4,
      "runtime": "116 min",
      "genreIds": [
        "sci-fi",
        "mind-bending",
        "time-travel"
      ],
      "synopsis": "Linguist Louise Banks leads a team of investigators when gigantic spaceships touch down around the world. As nations teeter on the verge of global war, Banks and her crew must find a way to communicate with the extraterrestrial vi...",
      "tags": [
        "philosophical",
        "existential-dread",
        "oscar-winner",
        "atmospheric"
      ],
      "trailerYoutubeId": "tFMo3UJ4B4g",
      "poster": "./posters/arrival.jpg"
    },
    {
      "id": "the-matrix",
      "title": "The Matrix",
      "year": 1999,
      "director": "Lana Wachowski, Lilly Wachowski",
      "rating": 8.7,
      "rank": 5,
      "runtime": "136 min",
      "genreIds": [
        "sci-fi",
        "cyberpunk",
        "action-spectacle",
        "post-apocalyptic",
        "martial-arts"
      ],
      "synopsis": "A computer hacker discovers that his life is nothing more than an elaborate simulation run by an evil AI.",
      "tags": [
        "hyper-stylized",
        "cybernetic",
        "cult-classic",
        "oscar-winner",
        "dystopian"
      ],
      "trailerYoutubeId": "vKQi3bBA1y8",
      "poster": "./posters/the-matrix.jpg"
    },
    {
      "id": "2001-a-space-odyssey",
      "title": "2001: A Space Odyssey",
      "year": 1968,
      "director": "Stanley Kubrick",
      "rating": 8.3,
      "rank": 6,
      "runtime": "149 min",
      "genreIds": [
        "sci-fi",
        "space-exploration"
      ],
      "synopsis": "When a mysterious artifact is uncovered on the Moon, a spacecraft manned by two scientists and one supercomputer is dispatched to Jupiter to find its origins.",
      "tags": [
        "philosophical",
        "atmospheric",
        "critics-masterpiece",
        "cult-classic",
        "ai-consciousness"
      ],
      "trailerYoutubeId": "oR_e9y-bka0",
      "poster": "./posters/2001-a-space-odyssey.jpg"
    },
    {
      "id": "alien",
      "title": "Alien",
      "year": 1979,
      "director": "Ridley Scott",
      "rating": 8.4,
      "rank": 7,
      "runtime": "117 min",
      "genreIds": [
        "sci-fi",
        "modern-horror",
        "space-exploration"
      ],
      "synopsis": "After investigating a mysterious transmission of unknown origin, the crew of a commercial spacecraft encounters a deadly lifeform.",
      "tags": [
        "survival-horror",
        "gothic-dread",
        "atmospheric",
        "cult-classic"
      ],
      "trailerYoutubeId": "jQ5lPt9edzQ",
      "poster": "./posters/alien.jpg"
    },
    {
      "id": "aliens",
      "title": "Aliens",
      "year": 1986,
      "director": "James Cameron",
      "rating": 8.4,
      "rank": 8,
      "runtime": "137 min",
      "genreIds": [
        "sci-fi",
        "action-spectacle",
        "modern-horror",
        "space-exploration"
      ],
      "synopsis": "Decades after surviving the Nostromo incident, Ellen Ripley is sent out to re-establish contact with a terraforming colony but finds herself battling the Alien Queen and her offspring.",
      "tags": [
        "survival-horror",
        "practical-fx",
        "box-office-smash",
        "oscar-winner"
      ],
      "trailerYoutubeId": "oSeQQlaCZgU",
      "poster": "./posters/aliens.jpg"
    },
    {
      "id": "terminator-2-judgment-day",
      "title": "Terminator 2: Judgment Day",
      "year": 1991,
      "director": "James Cameron",
      "rating": 8.6,
      "rank": 9,
      "runtime": "137 min",
      "genreIds": [
        "sci-fi",
        "action-spectacle",
        "cyberpunk",
        "post-apocalyptic",
        "time-travel"
      ],
      "synopsis": "A cyborg from the future, identical to the one who failed to kill Sarah Connor, must now protect her ten-year-old son John from an even more advanced and powerful cyborg.",
      "tags": [
        "practical-fx",
        "cyborg-rebellion",
        "oscar-winner",
        "box-office-smash"
      ],
      "trailerYoutubeId": "CRRlbK5w8AE",
      "poster": "./posters/terminator-2-judgment-day.jpg"
    },
    {
      "id": "blade-runner",
      "title": "Blade Runner",
      "year": 1982,
      "director": "Ridley Scott",
      "rating": 8.1,
      "rank": 10,
      "runtime": "117 min",
      "genreIds": [
        "sci-fi",
        "cyberpunk",
        "neo-noir"
      ],
      "synopsis": "A blade runner must pursue and terminate four replicants who stole a ship in space and have returned to Earth to find their creator.",
      "tags": [
        "neon-noir",
        "atmospheric",
        "cult-classic",
        "philosophical",
        "ai-consciousness"
      ],
      "trailerYoutubeId": "eogpIG53Cis",
      "poster": "./posters/blade-runner.jpg"
    },
    {
      "id": "children-of-men",
      "title": "Children of Men",
      "year": 2007,
      "director": "Alfonso Cuar\u00f3n",
      "rating": 7.9,
      "rank": 11,
      "runtime": "109 min",
      "genreIds": [
        "sci-fi",
        "cyberpunk",
        "post-apocalyptic"
      ],
      "synopsis": "In 2027, in a chaotic world in which women have somehow become infertile, a former activist agrees to help transport a miraculously pregnant woman to a sanctuary at sea.",
      "tags": [
        "dystopian",
        "gritty-realism",
        "critics-masterpiece",
        "atmospheric"
      ],
      "trailerYoutubeId": "2VT2apoX90o",
      "poster": "./posters/children-of-men.jpg"
    },
    {
      "id": "star-wars-episode-v-the-empire-strikes-back",
      "title": "Star Wars: Episode V - The Empire Strikes Back",
      "year": 1980,
      "director": "Irvin Kershner",
      "rating": 8.7,
      "rank": 12,
      "runtime": "124 min",
      "genreIds": [
        "sci-fi",
        "fantasy-epics",
        "space-exploration"
      ],
      "synopsis": "After the Empire overpowers the Rebel Alliance, Luke Skywalker begins training with Jedi Master Yoda, while Darth Vader and bounty hunter Boba Fett pursue his friends across the galaxy.",
      "tags": [
        "space-opera",
        "critics-masterpiece",
        "box-office-smash",
        "cult-classic"
      ],
      "trailerYoutubeId": "JNwNXF9Y6kY",
      "poster": "./posters/star-wars-episode-v-the-empire-strikes-back.jpg"
    },
    {
      "id": "the-thing",
      "title": "The Thing",
      "year": 1982,
      "director": "John Carpenter",
      "rating": 8.2,
      "rank": 13,
      "runtime": "109 min",
      "genreIds": [
        "sci-fi",
        "modern-horror",
        "post-apocalyptic"
      ],
      "synopsis": "A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.",
      "tags": [
        "practical-fx",
        "survival-horror",
        "gothic-dread",
        "cult-classic"
      ],
      "trailerYoutubeId": "5ftmr17M-a4",
      "poster": "./posters/the-thing.jpg"
    },
    {
      "id": "minority-report",
      "title": "Minority Report",
      "year": 2002,
      "director": "Steven Spielberg",
      "rating": 7.6,
      "rank": 14,
      "runtime": "145 min",
      "genreIds": [
        "sci-fi",
        "cyberpunk",
        "mystery-whodunit"
      ],
      "synopsis": "The chief of a police unit that can accurately predict and prevent crimes goes on the run after he's accused of a future murder himself.",
      "tags": [
        "dystopian",
        "neo-noir",
        "hyper-stylized",
        "box-office-smash"
      ],
      "trailerYoutubeId": "lG7DGMgfOb8",
      "poster": "./posters/minority-report.jpg"
    },
    {
      "id": "her",
      "title": "Her",
      "year": 2014,
      "director": "Spike Jonze",
      "rating": 7.9,
      "rank": 15,
      "runtime": "126 min",
      "genreIds": [
        "sci-fi",
        "mind-bending"
      ],
      "synopsis": "In the near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
      "tags": [
        "philosophical",
        "oscar-winner",
        "ai-consciousness",
        "atmospheric"
      ],
      "trailerYoutubeId": "dJTU48_yghs",
      "poster": "./posters/her.jpg"
    },
    {
      "id": "ex-machina",
      "title": "Ex Machina",
      "year": 2015,
      "director": "Alex Garland",
      "rating": 7.7,
      "rank": 16,
      "runtime": "108 min",
      "genreIds": [
        "sci-fi",
        "mind-bending",
        "cyberpunk"
      ],
      "synopsis": "A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a highly advanced humanoid A.I.",
      "tags": [
        "ai-consciousness",
        "psychological",
        "oscar-winner",
        "philosophical"
      ],
      "trailerYoutubeId": "sNExF5WYMaA",
      "poster": "./posters/ex-machina.jpg"
    },
    {
      "id": "everything-everywhere-all-at-once",
      "title": "Everything Everywhere All at Once",
      "year": 2022,
      "director": "Daniel Kwan, Daniel Scheinert",
      "rating": 7.7,
      "rank": 17,
      "runtime": "139 min",
      "genreIds": [
        "sci-fi",
        "time-travel",
        "satire-dark-comedy",
        "martial-arts"
      ],
      "synopsis": "A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led.",
      "tags": [
        "oscar-winner",
        "multiverse",
        "hyper-stylized",
        "mind-bending"
      ],
      "trailerYoutubeId": "wxN1T1uxQ2g",
      "poster": "./posters/everything-everywhere-all-at-once.jpg"
    },
    {
      "id": "district-9",
      "title": "District 9",
      "year": 2009,
      "director": "Neill Blomkamp",
      "rating": 7.9,
      "rank": 18,
      "runtime": "112 min",
      "genreIds": [
        "sci-fi",
        "action-spectacle",
        "post-apocalyptic"
      ],
      "synopsis": "In a future Earth in which aliens are isolated in a remote ghetto, a government agent finds himself banished there.",
      "tags": [
        "dystopian",
        "practical-fx",
        "gritty-realism",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "DyLUwOcR5pk",
      "poster": "./posters/district-9.jpg"
    },
    {
      "id": "wall-e",
      "title": "WALL-E: Treasures and Trinkets",
      "year": 2008,
      "director": "Andrew Stanton",
      "rating": 8.3,
      "rank": 19,
      "runtime": "5 min",
      "genreIds": [
        "sci-fi",
        "anime-masterpieces",
        "post-apocalyptic",
        "space-exploration"
      ],
      "synopsis": "A robot named WALL-E is on a uninhabitable earth by itself but when the human space ship comes and drops of a new robot named Eva on search for a plant. Eva meets WALL-E witch WALL-E shows Eva a plant. the humans come back to take...",
      "tags": [
        "oscar-winner",
        "dystopian",
        "philosophical",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "CZ1CATNbXg0",
      "poster": "./posters/wall-e.jpg"
    },
    {
      "id": "avatar",
      "title": "Avatar",
      "year": 2009,
      "director": "James Cameron",
      "rating": 7.9,
      "rank": 20,
      "runtime": "162 min",
      "genreIds": [
        "sci-fi",
        "action-spectacle",
        "fantasy-epics"
      ],
      "synopsis": "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "tags": [
        "visual-spectacle",
        "box-office-smash",
        "oscar-winner",
        "worldbuilding"
      ],
      "trailerYoutubeId": "5PSNL1qE6VY",
      "poster": "./posters/avatar.jpg"
    },
    {
      "id": "gravity",
      "title": "Gravity",
      "year": 2013,
      "director": "Alfonso Cuar\u00f3n",
      "rating": 7.7,
      "rank": 21,
      "runtime": "91 min",
      "genreIds": [
        "sci-fi",
        "space-exploration"
      ],
      "synopsis": "Two astronauts must survive in space after their shuttle is hit by debris during a spacewalk.",
      "tags": [
        "oscar-winner",
        "survival-horror",
        "visual-spectacle",
        "atmospheric"
      ],
      "trailerYoutubeId": "OiTiKOy59o4",
      "poster": "./posters/gravity.jpg"
    },
    {
      "id": "gattaca",
      "title": "Gattaca",
      "year": 1997,
      "director": "Andrew Niccol",
      "rating": 7.7,
      "rank": 22,
      "runtime": "106 min",
      "genreIds": [
        "sci-fi",
        "cyberpunk"
      ],
      "synopsis": "Vincent, an \"In-Valid,\" assumes the identity of a member of the genetic elite to pursue his goal of traveling into space with the Gattaca Aerospace Corporation. However, a week before his mission, a murder marks Vincent as a suspect.",
      "tags": [
        "philosophical",
        "dystopian",
        "cult-classic",
        "atmospheric"
      ],
      "trailerYoutubeId": "NIIZ2P-fiyI",
      "poster": "./posters/gattaca.jpg"
    },
    {
      "id": "tenet",
      "title": "Tenet",
      "year": 2020,
      "director": "Christopher Nolan",
      "rating": 7.3,
      "rank": 23,
      "runtime": "150 min",
      "genreIds": [
        "sci-fi",
        "time-travel",
        "action-spectacle"
      ],
      "synopsis": "Armed with only the word \"Tenet,\" and fighting for the survival of the entire world, CIA operative, The Protagonist, journeys through a twilight world of international espionage on a global mission that unfolds beyond real time.",
      "tags": [
        "mind-bending",
        "time-loop",
        "hyper-stylized",
        "oscar-winner"
      ],
      "trailerYoutubeId": "LdOM0x0XDMo",
      "poster": "./posters/tenet.jpg"
    },
    {
      "id": "jurassic-park",
      "title": "Jurassic Park",
      "year": 1993,
      "director": "Steven Spielberg",
      "rating": 8.2,
      "rank": 24,
      "runtime": "127 min",
      "genreIds": [
        "sci-fi",
        "action-spectacle"
      ],
      "synopsis": "An industrialist invites some experts to visit his theme park of cloned dinosaurs. After a power failure, the creatures run loose, putting everyone's lives, including his grandchildren's, in danger.",
      "tags": [
        "practical-fx",
        "oscar-winner",
        "box-office-smash",
        "all-time-masterpiece"
      ],
      "trailerYoutubeId": "bx46tthKXmc",
      "poster": "./posters/jurassic-park.jpg"
    },
    {
      "id": "back-to-the-future",
      "title": "Back to the Future",
      "year": 1985,
      "director": "Robert Zemeckis",
      "rating": 8.5,
      "rank": 25,
      "runtime": "116 min",
      "genreIds": [
        "sci-fi",
        "time-travel"
      ],
      "synopsis": "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
      "tags": [
        "cult-classic",
        "oscar-winner",
        "box-office-smash",
        "time-loop"
      ],
      "trailerYoutubeId": "qvsgGtivCgs",
      "poster": "./posters/back-to-the-future.jpg"
    },
    {
      "id": "rogue-one-a-star-wars-story",
      "title": "Rogue One: A Star Wars Story",
      "year": 2016,
      "director": "Gareth Edwards",
      "rating": 7.8,
      "rank": 26,
      "runtime": "133 min",
      "genreIds": [
        "sci-fi",
        "action-spectacle",
        "space-exploration"
      ],
      "synopsis": "In a time of conflict, a group of unlikely heroes band together on a mission to steal the plans to the Death Star, the Empire's ultimate weapon of destruction.",
      "tags": [
        "space-opera",
        "gritty-realism",
        "box-office-smash"
      ],
      "trailerYoutubeId": "frdj1zb9sMY",
      "poster": "./posters/rogue-one-a-star-wars-story.jpg"
    },
    {
      "id": "solaris",
      "title": "Solaris",
      "year": 1972,
      "director": "Andrei Tarkovsky",
      "rating": 7.9,
      "rank": 27,
      "runtime": "167 min",
      "genreIds": [
        "sci-fi",
        "mind-bending",
        "space-exploration"
      ],
      "synopsis": "A psychologist is sent to a station orbiting a distant planet in order to discover what has caused the crew to go insane.",
      "tags": [
        "philosophical",
        "atmospheric",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "wT8Y7DGQn7M",
      "poster": "./posters/solaris.jpg"
    },
    {
      "id": "stalker",
      "title": "Stalker",
      "year": 1980,
      "director": "Andrei Tarkovsky",
      "rating": 8,
      "rank": 28,
      "runtime": "162 min",
      "genreIds": [
        "sci-fi",
        "mind-bending",
        "post-apocalyptic"
      ],
      "synopsis": "A guide leads two men through an area known as the Zone to find a room that grants wishes.",
      "tags": [
        "philosophical",
        "atmospheric",
        "critics-masterpiece",
        "existential-dread"
      ],
      "trailerYoutubeId": "YuOnfQd-aTw",
      "poster": "./posters/stalker.jpg"
    },
    {
      "id": "contact",
      "title": "Contact",
      "year": 1997,
      "director": "Robert Zemeckis",
      "rating": 7.5,
      "rank": 29,
      "runtime": "150 min",
      "genreIds": [
        "sci-fi",
        "space-exploration"
      ],
      "synopsis": "Dr. Ellie Arroway, after years of searching, finds conclusive radio proof of extraterrestrial intelligence, sending plans for a mysterious machine.",
      "tags": [
        "philosophical",
        "space-opera",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "Q399v-pMG30",
      "poster": "./posters/contact.jpg"
    },
    {
      "id": "prometheus",
      "title": "Prometheus",
      "year": 2012,
      "director": "Ridley Scott",
      "rating": 7,
      "rank": 30,
      "runtime": "124 min",
      "genreIds": [
        "sci-fi",
        "space-exploration",
        "modern-horror"
      ],
      "synopsis": "Following clues to the origin of mankind, a team finds a structure on a distant moon, but they soon realize they are not alone.",
      "tags": [
        "gothic-dread",
        "space-opera",
        "visual-spectacle"
      ],
      "trailerYoutubeId": "yA6OKoW30Pk",
      "poster": "./posters/prometheus.jpg"
    },
    {
      "id": "annihilation",
      "title": "Annihilation",
      "year": 2018,
      "director": "Alex Garland",
      "rating": 6.8,
      "rank": 31,
      "runtime": "115 min",
      "genreIds": [
        "sci-fi",
        "mind-bending",
        "modern-horror"
      ],
      "synopsis": "A biologist signs up for a dangerous, secret expedition in which the laws of nature don't apply.",
      "tags": [
        "surreal",
        "existential-dread",
        "atmospheric"
      ],
      "trailerYoutubeId": "89OP78l9oF0",
      "poster": "./posters/annihilation.jpg"
    },
    {
      "id": "dark-city",
      "title": "Dark City",
      "year": 1998,
      "director": "Alex Proyas",
      "rating": 7.5,
      "rank": 32,
      "runtime": "100 min",
      "genreIds": [
        "sci-fi",
        "cyberpunk",
        "neo-noir"
      ],
      "synopsis": "A man struggles with memories of his past, which include a wife he cannot remember and a nightmarish world no one else ever seems to wake up from.",
      "tags": [
        "neo-noir",
        "cult-classic",
        "dystopian"
      ],
      "trailerYoutubeId": "gt9HkO-cGGo",
      "poster": "./posters/dark-city.jpg"
    },
    {
      "id": "twelve-monkeys",
      "title": "The Hamster Factor and Other Tales of Twelve Monkeys",
      "year": 1996,
      "director": "Keith Fulton, Louis Pepe",
      "rating": 7.6,
      "rank": 33,
      "runtime": "88 min",
      "genreIds": [
        "sci-fi",
        "time-travel",
        "mind-bending",
        "post-apocalyptic"
      ],
      "synopsis": "A documentary following Terry Gilliam through the creation of \"12 Monkeys\" (1995)",
      "tags": [
        "time-loop",
        "cult-classic",
        "dystopian"
      ],
      "trailerYoutubeId": "Xwh1xBzsc1Q",
      "poster": "./posters/twelve-monkeys.jpg"
    },
    {
      "id": "the-fifth-element",
      "title": "The Fifth Element",
      "year": 1997,
      "director": "Luc Besson",
      "rating": 7.6,
      "rank": 34,
      "runtime": "126 min",
      "genreIds": [
        "sci-fi",
        "cyberpunk",
        "action-spectacle"
      ],
      "synopsis": "When a supreme being crashes into his taxi, a former commando turned 23rd-century cabbie must help her retrieve four elemental stones to destroy an ancient evil\u2014before a ruthless industrialist and human nature undo them all.",
      "tags": [
        "hyper-stylized",
        "cult-classic",
        "visual-spectacle"
      ],
      "trailerYoutubeId": "fQ9RqgcR24g",
      "poster": "./posters/the-fifth-element.jpg"
    },
    {
      "id": "star-wars-episode-iv-a-new-hope",
      "title": "Star Wars: Episode IV - A New Hope",
      "year": 1977,
      "director": "George Lucas",
      "rating": 8.6,
      "rank": 35,
      "runtime": "121 min",
      "genreIds": [
        "sci-fi",
        "fantasy-epics",
        "space-exploration"
      ],
      "synopsis": "A farmboy joins forces with various allies to save their galaxy from the evil Empire's planet-destroying battle station, while also rescuing the princess leading the rebellion against them.",
      "tags": [
        "space-opera",
        "all-time-masterpiece",
        "oscar-winner"
      ],
      "trailerYoutubeId": "vZ734NWnAHA",
      "poster": "./posters/star-wars-episode-iv-a-new-hope.jpg"
    },
    {
      "id": "star-wars-episode-vi-return-of-the-jedi",
      "title": "Star Wars: Episode VI - Return of the Jedi",
      "year": 1983,
      "director": "Richard Marquand",
      "rating": 8.3,
      "rank": 36,
      "runtime": "131 min",
      "genreIds": [
        "sci-fi",
        "fantasy-epics"
      ],
      "synopsis": "After rescuing Han Solo from Jabba the Hutt, the Rebel Alliance attempts to destroy the second Death Star while Luke struggles to help Darth Vader back from the dark side.",
      "tags": [
        "space-opera",
        "box-office-smash"
      ],
      "trailerYoutubeId": "p4vIFhk621Q",
      "poster": "./posters/star-wars-episode-vi-return-of-the-jedi.jpg"
    },
    {
      "id": "cloverfield",
      "title": "Cloverfield",
      "year": 2008,
      "director": "Matt Reeves",
      "rating": 7,
      "rank": 37,
      "runtime": "85 min",
      "genreIds": [
        "sci-fi",
        "modern-horror",
        "post-apocalyptic"
      ],
      "synopsis": "A group of friends venture deep into the streets of New York on a rescue mission during a rampaging monster attack.",
      "tags": [
        "found-footage",
        "creature-feature",
        "high-tension"
      ],
      "trailerYoutubeId": "_afPFLvh2qg",
      "poster": "./posters/cloverfield.jpg"
    },
    {
      "id": "snowpiercer",
      "title": "Snowpiercer",
      "year": 2014,
      "director": "Bong Joon Ho",
      "rating": 7.1,
      "rank": 38,
      "runtime": "126 min",
      "genreIds": [
        "sci-fi",
        "cyberpunk",
        "post-apocalyptic"
      ],
      "synopsis": "In a future where a failed climate change experiment has killed all life except for the survivors who boarded the Snowpiercer (a train that travels around the globe), a new class system emerges.",
      "tags": [
        "dystopian",
        "social-commentary",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "nX5PwfEMBM0",
      "poster": "./posters/snowpiercer.jpg"
    },
    {
      "id": "a-i-artificial-intelligence",
      "title": "A.I. Artificial Intelligence",
      "year": 2001,
      "director": "Steven Spielberg",
      "rating": 7.2,
      "rank": 39,
      "runtime": "146 min",
      "genreIds": [
        "sci-fi",
        "cyberpunk"
      ],
      "synopsis": "A highly advanced robotic boy longs to become \"real\" so that he can regain the love of his human mother.",
      "tags": [
        "ai-consciousness",
        "philosophical",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "_19pRsZRiz4",
      "poster": "./posters/a-i-artificial-intelligence.jpg"
    },
    {
      "id": "men-in-black",
      "title": "Men in Black",
      "year": 1997,
      "director": "Barry Sonnenfeld",
      "rating": 7.3,
      "rank": 40,
      "runtime": "98 min",
      "genreIds": [
        "sci-fi",
        "satire-dark-comedy",
        "action-spectacle"
      ],
      "synopsis": "An agent from a secret organization that monitors alien activity on Earth recruits a street-smart NYPD cop to help him recover an item that has been stolen by an intergalactic criminal.",
      "tags": [
        "box-office-smash",
        "cult-classic",
        "sci-fi-comedy"
      ],
      "trailerYoutubeId": "UxUTTrU6PA4",
      "poster": "./posters/men-in-black.jpg"
    },
    {
      "id": "signs",
      "title": "Signs",
      "year": 2002,
      "director": "M. Night Shyamalan",
      "rating": 6.8,
      "rank": 41,
      "runtime": "106 min",
      "genreIds": [
        "sci-fi",
        "modern-horror"
      ],
      "synopsis": "A widowed former reverend living with his children and brother on a Pennsylvania farm finds mysterious crop circles in their fields, which suggests something more frightening to come.",
      "tags": [
        "atmospheric",
        "high-tension",
        "box-office-smash"
      ],
      "trailerYoutubeId": "dUw26F0WfLg",
      "poster": "./posters/signs.jpg"
    },
    {
      "id": "tron-legacy",
      "title": "Tron: Legacy",
      "year": 2010,
      "director": "Joseph Kosinski",
      "rating": 6.8,
      "rank": 42,
      "runtime": "125 min",
      "genreIds": [
        "sci-fi",
        "cyberpunk"
      ],
      "synopsis": "The son of a computer programmer goes looking for his father and ends up inside the digital world that his father designed. He meets his father's corrupted creation and a unique ally who was born inside the digital world.",
      "tags": [
        "synthwave",
        "hyper-stylized",
        "visual-spectacle"
      ],
      "trailerYoutubeId": "P78pl1FUXfA",
      "poster": "./posters/tron-legacy.jpg"
    },
    {
      "id": "inception",
      "title": "Inception",
      "year": 2010,
      "director": "Christopher Nolan",
      "rating": 8.8,
      "rank": 43,
      "runtime": "148 min",
      "genreIds": [
        "mind-bending",
        "sci-fi",
        "action-spectacle"
      ],
      "synopsis": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO, but his tragic past may doom the project and his team to disaster.",
      "tags": [
        "mind-bending",
        "hyper-stylized",
        "oscar-winner",
        "box-office-smash",
        "philosophical"
      ],
      "trailerYoutubeId": "YoHD9XEInc0",
      "poster": "./posters/inception.jpg"
    },
    {
      "id": "shutter-island",
      "title": "Shutter Island",
      "year": 2010,
      "director": "Martin Scorsese",
      "rating": 8.2,
      "rank": 44,
      "runtime": "138 min",
      "genreIds": [
        "mind-bending",
        "mystery-whodunit",
        "neo-noir"
      ],
      "synopsis": "Two US marshals are sent to a mental institution on an inhospitable island in order to investigate the disappearance of a patient.",
      "tags": [
        "psychological",
        "existential-dread",
        "gothic-dread",
        "atmospheric"
      ],
      "trailerYoutubeId": "v8yrZSkKxTA",
      "poster": "./posters/shutter-island.jpg"
    },
    {
      "id": "memento",
      "title": "Memento",
      "year": 2001,
      "director": "Christopher Nolan",
      "rating": 8.4,
      "rank": 45,
      "runtime": "113 min",
      "genreIds": [
        "mind-bending",
        "neo-noir",
        "mystery-whodunit"
      ],
      "synopsis": "A former insurance investigator who now suffers from anterograde amnesia uses notes and tattoos to hunt down his wife's murderer.",
      "tags": [
        "non-linear",
        "neo-noir",
        "critics-masterpiece",
        "psychological"
      ],
      "trailerYoutubeId": "4CV41hoyS8A",
      "poster": "./posters/memento.jpg"
    },
    {
      "id": "fight-club",
      "title": "Fight Club",
      "year": 1999,
      "director": "David Fincher",
      "rating": 8.8,
      "rank": 46,
      "runtime": "139 min",
      "genreIds": [
        "mind-bending",
        "satire-dark-comedy",
        "neo-noir"
      ],
      "synopsis": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
      "tags": [
        "cult-classic",
        "psychological",
        "anarchic",
        "hyper-stylized"
      ],
      "trailerYoutubeId": "qtRKdVHc-cE",
      "poster": "./posters/fight-club.jpg"
    },
    {
      "id": "the-prestige",
      "title": "The Prestige",
      "year": 2006,
      "director": "Christopher Nolan",
      "rating": 8.5,
      "rank": 47,
      "runtime": "130 min",
      "genreIds": [
        "mind-bending",
        "mystery-whodunit",
        "biopic-epics"
      ],
      "synopsis": "Two magicians dismantle their lives to outmaneuver each other following a shared tragedy. They chase the ultimate illusion across Victorian London, sacrificing sanity and safety to master a teleportation feat that defies all logic.",
      "tags": [
        "obsession",
        "mind-bending",
        "gothic-dread",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "RLtaA9fFNXU",
      "poster": "./posters/the-prestige.jpg"
    },
    {
      "id": "the-sixth-sense",
      "title": "The Sixth Sense",
      "year": 1999,
      "director": "M. Night Shyamalan",
      "rating": 8.2,
      "rank": 48,
      "runtime": "107 min",
      "genreIds": [
        "mind-bending",
        "modern-horror",
        "mystery-whodunit"
      ],
      "synopsis": "After being shot by a resentful former patient whom he failed to help, a Philadelphia child psychologist seeks redemption by treating a young boy with a disturbing secret.",
      "tags": [
        "supernatural",
        "box-office-smash",
        "cult-classic",
        "psychological"
      ],
      "trailerYoutubeId": "3-ZP95NF_Wk",
      "poster": "./posters/the-sixth-sense.jpg"
    },
    {
      "id": "mulholland-drive",
      "title": "Mulholland Drive",
      "year": 2001,
      "director": "David Lynch",
      "rating": 7.9,
      "rank": 49,
      "runtime": "147 min",
      "genreIds": [
        "mind-bending",
        "neo-noir",
        "mystery-whodunit"
      ],
      "synopsis": "After a car wreck on Mulholland Drive renders a woman amnesiac, she and a Hollywood-hopeful search for clues and answers across Los Angeles in a twisting venture beyond dreams and reality.",
      "tags": [
        "surreal",
        "critics-masterpiece",
        "neo-noir",
        "existential-dread"
      ],
      "trailerYoutubeId": "jbZJ487oJlY",
      "poster": "./posters/mulholland-drive.jpg"
    },
    {
      "id": "donnie-darko",
      "title": "Donnie Darko",
      "year": 2001,
      "director": "Richard Kelly",
      "rating": 8,
      "rank": 51,
      "runtime": "113 min",
      "genreIds": [
        "mind-bending",
        "time-travel",
        "sci-fi"
      ],
      "synopsis": "After narrowly escaping a bizarre accident, a troubled teenager is plagued by visions of a man in a large rabbit suit who manipulates him to commit a series of crimes.",
      "tags": [
        "cult-classic",
        "time-loop",
        "surreal",
        "psychological"
      ],
      "trailerYoutubeId": "bzLn8sYeM9o",
      "poster": "./posters/donnie-darko.jpg"
    },
    {
      "id": "black-swan",
      "title": "Black Swan",
      "year": 2010,
      "director": "Darren Aronofsky",
      "rating": 8,
      "rank": 52,
      "runtime": "108 min",
      "genreIds": [
        "mind-bending",
        "modern-horror"
      ],
      "synopsis": "An insecure ballerina finally gets the role she has always dreamed of, but as the pressures mount her line between reality and illusion starts to blur.",
      "tags": [
        "psychological",
        "oscar-winner",
        "obsession",
        "hyper-stylized"
      ],
      "trailerYoutubeId": "5jaI1XOB-bs",
      "poster": "./posters/black-swan.jpg"
    },
    {
      "id": "prisoners",
      "title": "Prisoners",
      "year": 2013,
      "director": "Denis Villeneuve",
      "rating": 8.2,
      "rank": 53,
      "runtime": "153 min",
      "genreIds": [
        "mind-bending",
        "mystery-whodunit",
        "neo-noir"
      ],
      "synopsis": "A desperate father takes the law into his own hands after police fail to find two kidnapped girls.",
      "tags": [
        "dark-and-gritty",
        "moral-ambiguity",
        "critics-masterpiece",
        "atmospheric"
      ],
      "trailerYoutubeId": "bpXfcTF6iVk",
      "poster": "./posters/prisoners.jpg"
    },
    {
      "id": "zodiac",
      "title": "Zodiac",
      "year": 2007,
      "director": "David Fincher",
      "rating": 7.7,
      "rank": 54,
      "runtime": "157 min",
      "genreIds": [
        "mind-bending",
        "mystery-whodunit",
        "neo-noir",
        "biopic-epics"
      ],
      "synopsis": "Between 1968 and 1983, a San Francisco cartoonist becomes an amateur detective obsessed with tracking down the Zodiac Killer, an unidentified individual who terrorizes Northern California with a killing spree.",
      "tags": [
        "obsession",
        "procedural",
        "critics-masterpiece",
        "dark-and-gritty"
      ],
      "trailerYoutubeId": "yNncHPl1UXg",
      "poster": "./posters/zodiac.jpg"
    },
    {
      "id": "gone-girl",
      "title": "Gone Girl",
      "year": 2014,
      "director": "David Fincher",
      "rating": 8.1,
      "rank": 55,
      "runtime": "149 min",
      "genreIds": [
        "mind-bending",
        "mystery-whodunit",
        "neo-noir"
      ],
      "synopsis": "The husband of a missing woman becomes the main suspect in her disappearance.",
      "tags": [
        "psychological",
        "cynical-noir",
        "box-office-smash",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "2-_-1nJf8Vg",
      "poster": "./posters/gone-girl.jpg"
    },
    {
      "id": "oldboy",
      "title": "Oldboy",
      "year": 2003,
      "director": "Park Chan-wook",
      "rating": 8.3,
      "rank": 56,
      "runtime": "120 min",
      "genreIds": [
        "mind-bending",
        "action-spectacle",
        "neo-noir",
        "martial-arts"
      ],
      "synopsis": "After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released, only to find that he must track down his captor in five days.",
      "tags": [
        "cult-classic",
        "dark-and-gritty",
        "vengeance",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "tAaBkFChaRg",
      "poster": "./posters/oldboy.jpg"
    },
    {
      "id": "nightcrawler",
      "title": "Nightcrawler",
      "year": 2014,
      "director": "Dan Gilroy",
      "rating": 7.8,
      "rank": 57,
      "runtime": "117 min",
      "genreIds": [
        "mind-bending",
        "satire-dark-comedy",
        "neo-noir"
      ],
      "synopsis": "A petty thief desperate for work muscles into the world of crime journalism and becomes the star of his own story as he blurs the line between observer and participant.",
      "tags": [
        "cynical-noir",
        "hyper-stylized",
        "critics-masterpiece",
        "psychological"
      ],
      "trailerYoutubeId": "u1uP_8VJkDQ",
      "poster": "./posters/nightcrawler.jpg"
    },
    {
      "id": "parasite",
      "title": "Parasite",
      "year": 2019,
      "director": "Bong Joon Ho",
      "rating": 8.5,
      "rank": 58,
      "runtime": "132 min",
      "genreIds": [
        "mind-bending",
        "satire-dark-comedy",
        "neo-noir"
      ],
      "synopsis": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
      "tags": [
        "oscar-winner",
        "palme-dor",
        "critics-masterpiece",
        "social-commentary"
      ],
      "trailerYoutubeId": "isOGD_7hNIY",
      "poster": "./posters/parasite.jpg"
    },
    {
      "id": "get-out",
      "title": "Get Out",
      "year": 2017,
      "director": "Jordan Peele",
      "rating": 7.8,
      "rank": 59,
      "runtime": "104 min",
      "genreIds": [
        "mind-bending",
        "modern-horror",
        "satire-dark-comedy"
      ],
      "synopsis": "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
      "tags": [
        "oscar-winner",
        "social-commentary",
        "psychological",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "DzfpyUB60YY",
      "poster": "./posters/get-out.jpg"
    },
    {
      "id": "american-psycho",
      "title": "American Psycho",
      "year": 2000,
      "director": "Mary Harron",
      "rating": 7.6,
      "rank": 60,
      "runtime": "102 min",
      "genreIds": [
        "mind-bending",
        "satire-dark-comedy",
        "neo-noir"
      ],
      "synopsis": "A wealthy New York City investment banking executive, Patrick Bateman, hides his alternate psychopathic ego from his co-workers and friends as he delves deeper into his violent, hedonistic fantasies.",
      "tags": [
        "cult-classic",
        "cynical-noir",
        "psychological",
        "hyper-stylized"
      ],
      "trailerYoutubeId": "81mibtQWWBg",
      "poster": "./posters/american-psycho.jpg"
    },
    {
      "id": "vertigo",
      "title": "Vertigo",
      "year": 1958,
      "director": "Alfred Hitchcock",
      "rating": 8.2,
      "rank": 61,
      "runtime": "128 min",
      "genreIds": [
        "mind-bending",
        "mystery-whodunit",
        "neo-noir"
      ],
      "synopsis": "A former San Francisco police detective juggles wrestling with his personal demons and becoming obsessed with the hauntingly beautiful woman he has been hired to trail, who may be deeply disturbed.",
      "tags": [
        "critics-masterpiece",
        "obsession",
        "classic-noir",
        "all-time-masterpiece"
      ],
      "trailerYoutubeId": "Z5jvQwwHQNY",
      "poster": "./posters/vertigo.jpg"
    },
    {
      "id": "the-game",
      "title": "The Game",
      "year": 1997,
      "director": "David Fincher",
      "rating": 7.7,
      "rank": 62,
      "runtime": "129 min",
      "genreIds": [
        "mind-bending",
        "mystery-whodunit"
      ],
      "synopsis": "An arrogant, isolated investment banker is targeted by an enigmatic entertainment company, plunging into an escalating, reality-bending conspiracy orchestrated by his estranged brother to shatter his emotional detachment.",
      "tags": [
        "paranoia",
        "cult-classic",
        "high-tension"
      ],
      "trailerYoutubeId": "nsKdR05ZsGE",
      "poster": "./posters/the-game.jpg"
    },
    {
      "id": "coherence",
      "title": "Coherence",
      "year": 2014,
      "director": "James Ward Byrkit",
      "rating": 7.1,
      "rank": 63,
      "runtime": "89 min",
      "genreIds": [
        "mind-bending",
        "sci-fi",
        "time-travel"
      ],
      "synopsis": "Strange things begin to happen when a group of friends gather for a dinner party on an evening when a comet is passing overhead.",
      "tags": [
        "quantum-multiverse",
        "cult-classic",
        "mind-bending"
      ],
      "trailerYoutubeId": "kxAOewNzz-8",
      "poster": "./posters/coherence.jpg"
    },
    {
      "id": "the-butterfly-effect",
      "title": "The Butterfly Effect",
      "year": 2004,
      "director": "Eric Bress, J. Mackye Gruber",
      "rating": 7.6,
      "rank": 64,
      "runtime": "113 min",
      "genreIds": [
        "mind-bending",
        "time-travel"
      ],
      "synopsis": "A boy suffers blackouts during traumatic events, but in college he finds a way to travel back in time to those moments and alter the course of his life.",
      "tags": [
        "time-loop",
        "cult-classic",
        "chaos-theory"
      ],
      "trailerYoutubeId": "kkWQLjI2rAU",
      "poster": "./posters/the-butterfly-effect.jpg"
    },
    {
      "id": "jacob-s-ladder",
      "title": "Jacob's Ladder",
      "year": 1990,
      "director": "Adrian Lyne",
      "rating": 7.4,
      "rank": 65,
      "runtime": "113 min",
      "genreIds": [
        "mind-bending",
        "modern-horror"
      ],
      "synopsis": "Reminiscing about his dead son, a Vietnam War veteran attempts to uncover his past while suffering from a severe case of dissociation. To do so, he must decipher reality and life from his own dreams, delusions, and perceptions of ...",
      "tags": [
        "hallucination",
        "cult-classic",
        "psychological"
      ],
      "trailerYoutubeId": "tLulu1Ovi2c",
      "poster": "./posters/jacob-s-ladder.jpg"
    },
    {
      "id": "triangle",
      "title": "Triangle",
      "year": 2009,
      "director": "Christopher Smith",
      "rating": 6.9,
      "rank": 66,
      "runtime": "99 min",
      "genreIds": [
        "mind-bending",
        "time-travel",
        "modern-horror"
      ],
      "synopsis": "Five friends set sail and their yacht is overturned by a strange and sudden storm. A mysterious ship arrives to rescue them, and what happens next cannot be explained.",
      "tags": [
        "time-loop",
        "cult-classic",
        "survival"
      ],
      "trailerYoutubeId": "ZEHevCzlDNg",
      "poster": "./posters/triangle.jpg"
    },
    {
      "id": "primer",
      "title": "Primer",
      "year": 2005,
      "director": "Shane Carruth",
      "rating": 6.7,
      "rank": 67,
      "runtime": "77 min",
      "genreIds": [
        "mind-bending",
        "sci-fi",
        "time-travel"
      ],
      "synopsis": "Four friends/fledgling entrepreneurs, knowing that there's something bigger and more innovative than the different error-checking devices they've built, wrestle over their new invention.",
      "tags": [
        "time-loop",
        "indie-masterpiece",
        "mind-bending"
      ],
      "trailerYoutubeId": "3nj5MMURCm8",
      "poster": "./posters/primer.jpg"
    },
    {
      "id": "the-machinist",
      "title": "The Machinist",
      "year": 2004,
      "director": "Brad Anderson",
      "rating": 7.6,
      "rank": 68,
      "runtime": "101 min",
      "genreIds": [
        "mind-bending",
        "neo-noir"
      ],
      "synopsis": "An industrial worker who hasn't slept in a year begins to doubt his own sanity.",
      "tags": [
        "insomnia",
        "psychological",
        "dark-and-gritty"
      ],
      "trailerYoutubeId": "qPxI4RC6PX0",
      "poster": "./posters/the-machinist.jpg"
    },
    {
      "id": "split",
      "title": "Split",
      "year": 2017,
      "director": "M. Night Shyamalan",
      "rating": 7.3,
      "rank": 69,
      "runtime": "117 min",
      "genreIds": [
        "mind-bending",
        "modern-horror"
      ],
      "synopsis": "Three girls are kidnapped by a man with a diagnosed 23 distinct personalities. They must try to escape before the apparent emergence of a frightful new 24th.",
      "tags": [
        "psychological",
        "box-office-smash",
        "multi-personality"
      ],
      "trailerYoutubeId": "84TouqfIsiI",
      "poster": "./posters/split.jpg"
    },
    {
      "id": "nocturnal-animals",
      "title": "Nocturnal Animals",
      "year": 2016,
      "director": "Tom Ford",
      "rating": 7.4,
      "rank": 70,
      "runtime": "116 min",
      "genreIds": [
        "mind-bending",
        "neo-noir"
      ],
      "synopsis": "A wealthy art gallery owner is haunted by her ex-husband's novel, her memories of their relationship, and her regrets about her life.",
      "tags": [
        "hyper-stylized",
        "revenge",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "-H1Ii1LjyFU",
      "poster": "./posters/nocturnal-animals.jpg"
    },
    {
      "id": "robocop",
      "title": "RoboCop",
      "year": 1987,
      "director": "Paul Verhoeven",
      "rating": 7.6,
      "rank": 71,
      "runtime": "102 min",
      "genreIds": [
        "cyberpunk",
        "sci-fi",
        "action-spectacle",
        "satire-dark-comedy"
      ],
      "synopsis": "Corporate interests resurrect a murdered police officer as a cybernetic enforcer to privatize security in a decaying Detroit. He executes lethal justice while flickering memories of his former life trigger a hunt for his killers.",
      "tags": [
        "cyborg-rebellion",
        "satire",
        "cult-classic",
        "practical-fx"
      ],
      "trailerYoutubeId": "IqvRDhW-XVA",
      "poster": "./posters/robocop.jpg"
    },
    {
      "id": "total-recall",
      "title": "Total Recall",
      "year": 1990,
      "director": "Paul Verhoeven",
      "rating": 7.5,
      "rank": 72,
      "runtime": "113 min",
      "genreIds": [
        "cyberpunk",
        "sci-fi",
        "action-spectacle"
      ],
      "synopsis": "When a man goes in to have virtual vacation memories of the planet Mars implanted in his mind, an unexpected and harrowing series of events forces him to go to the planet for real - or is he?",
      "tags": [
        "memory-wipe",
        "cult-classic",
        "practical-fx",
        "box-office-smash"
      ],
      "trailerYoutubeId": "684nkWhd658",
      "poster": "./posters/total-recall.jpg"
    },
    {
      "id": "dredd",
      "title": "Dredd",
      "year": 2012,
      "director": "Pete Travis",
      "rating": 7.1,
      "rank": 73,
      "runtime": "95 min",
      "genreIds": [
        "cyberpunk",
        "action-spectacle",
        "sci-fi",
        "post-apocalyptic"
      ],
      "synopsis": "In a violent, futuristic metropolis, a law enforcement and his rookie trainee become caught up in a high-stakes drug war.",
      "tags": [
        "hyper-stylized",
        "dark-and-gritty",
        "cult-classic"
      ],
      "trailerYoutubeId": "G-eI5oLlIeY",
      "poster": "./posters/dredd.jpg"
    },
    {
      "id": "upgrade",
      "title": "Upgrade",
      "year": 2018,
      "director": "Leigh Whannell",
      "rating": 7.5,
      "rank": 74,
      "runtime": "100 min",
      "genreIds": [
        "cyberpunk",
        "action-spectacle",
        "sci-fi",
        "martial-arts"
      ],
      "synopsis": "Set in the near-future, technology controls nearly all aspects of life. But when the world of Grey, a self-labeled technophobe, is turned upside down, his only hope for revenge is an experimental computer chip implant.",
      "tags": [
        "ai-consciousness",
        "gun-fu",
        "body-horror"
      ],
      "trailerYoutubeId": "36PDeN9NRZ0",
      "poster": "./posters/upgrade.jpg"
    },
    {
      "id": "alita-battle-angel",
      "title": "Alita: Battle Angel",
      "year": 2019,
      "director": "Robert Rodriguez",
      "rating": 7.3,
      "rank": 75,
      "runtime": "122 min",
      "genreIds": [
        "cyberpunk",
        "action-spectacle",
        "sci-fi",
        "post-apocalyptic",
        "martial-arts"
      ],
      "synopsis": "A deactivated cyborg's revived, but can't remember anything of her past and goes on a quest to find out who she is.",
      "tags": [
        "cyborg-rebellion",
        "visual-spectacle",
        "anime-adaptation"
      ],
      "trailerYoutubeId": "w7pYhpJaJW8",
      "poster": "./posters/alita-battle-angel.jpg"
    },
    {
      "id": "v-for-vendetta",
      "title": "V for Vendetta",
      "year": 2006,
      "director": "James McTeigue",
      "rating": 8.1,
      "rank": 76,
      "runtime": "132 min",
      "genreIds": [
        "cyberpunk",
        "action-spectacle",
        "sci-fi"
      ],
      "synopsis": "A young woman living in a dystopian society meets a shadowy freedom fighter who is plotting to overthrow their tyrannical government.",
      "tags": [
        "anarchic",
        "dystopian",
        "cult-classic"
      ],
      "trailerYoutubeId": "lSA7mAHolAw",
      "poster": "./posters/v-for-vendetta.jpg"
    },
    {
      "id": "ready-player-one",
      "title": "Ready Player One",
      "year": 2018,
      "director": "Steven Spielberg",
      "rating": 7.4,
      "rank": 77,
      "runtime": "140 min",
      "genreIds": [
        "cyberpunk",
        "sci-fi",
        "action-spectacle"
      ],
      "synopsis": "When the creator of a virtual reality called the OASIS dies, he makes a posthumous challenge to all OASIS users to find his Easter Egg, which will give the finder his fortune and control of his world.",
      "tags": [
        "virtual-reality",
        "box-office-smash",
        "pop-culture"
      ],
      "trailerYoutubeId": "cSp1dM2Vj48",
      "poster": "./posters/ready-player-one.jpg"
    },
    {
      "id": "brazil",
      "title": "Brazil",
      "year": 1985,
      "director": "Terry Gilliam",
      "rating": 7.8,
      "rank": 78,
      "runtime": "132 min",
      "genreIds": [
        "cyberpunk",
        "satire-dark-comedy",
        "sci-fi"
      ],
      "synopsis": "A bureaucrat in a dystopic society becomes an enemy of the state as he pursues the woman of his dreams.",
      "tags": [
        "surreal",
        "dystopian",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "ZKPFC8DA9_8",
      "poster": "./posters/brazil.jpg"
    },
    {
      "id": "equilibrium",
      "title": "Equilibrium",
      "year": 2002,
      "director": "Kurt Wimmer",
      "rating": 7.3,
      "rank": 79,
      "runtime": "107 min",
      "genreIds": [
        "cyberpunk",
        "action-spectacle",
        "sci-fi",
        "martial-arts"
      ],
      "synopsis": "In a totalitarian future where emotions and art are strictly forbidden, an elite regime enforcer misses his daily dose of a mind-altering drug and turns his deadly combat skills against the state.",
      "tags": [
        "gun-kata",
        "dystopian",
        "cult-classic"
      ],
      "trailerYoutubeId": "raleKODYeg0",
      "poster": "./posters/equilibrium.jpg"
    },
    {
      "id": "elysium",
      "title": "Elysium",
      "year": 2013,
      "director": "Neill Blomkamp",
      "rating": 6.6,
      "rank": 80,
      "runtime": "109 min",
      "genreIds": [
        "cyberpunk",
        "sci-fi",
        "action-spectacle",
        "post-apocalyptic"
      ],
      "synopsis": "In the year 2154, the very wealthy live on a man-made space station while the rest of the population resides on a ruined Earth. A man takes on a mission that could bring equality to the polarized worlds.",
      "tags": [
        "dystopian",
        "social-commentary",
        "visual-spectacle"
      ],
      "trailerYoutubeId": "oIBtePb-dGY",
      "poster": "./posters/elysium.jpg"
    },
    {
      "id": "a-clockwork-orange",
      "title": "A Clockwork Orange",
      "year": 1972,
      "director": "Stanley Kubrick",
      "rating": 8.2,
      "rank": 81,
      "runtime": "136 min",
      "genreIds": [
        "cyberpunk",
        "mind-bending",
        "satire-dark-comedy"
      ],
      "synopsis": "Alex DeLarge and his droogs barbarize a decaying near-future.",
      "tags": [
        "all-time-masterpiece",
        "anarchic",
        "dystopian",
        "cult-classic"
      ],
      "trailerYoutubeId": "2meAsIclTzQ",
      "poster": "./posters/a-clockwork-orange.jpg"
    },
    {
      "id": "mad-max-fury-road",
      "title": "Mad Max: Fury Road",
      "year": 2015,
      "director": "George Miller",
      "rating": 8.1,
      "rank": 82,
      "runtime": "120 min",
      "genreIds": [
        "action-spectacle",
        "post-apocalyptic",
        "cyberpunk"
      ],
      "synopsis": "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshipper and a drifter named Max.",
      "tags": [
        "practical-fx",
        "hyper-stylized",
        "oscar-winner",
        "critics-masterpiece",
        "relentless"
      ],
      "trailerYoutubeId": "hEJnMQG9ev8",
      "poster": "./posters/mad-max-fury-road.jpg"
    },
    {
      "id": "top-gun-maverick",
      "title": "Top Gun: Maverick",
      "year": 2022,
      "director": "Joseph Kosinski",
      "rating": 8.2,
      "rank": 83,
      "runtime": "130 min",
      "genreIds": [
        "action-spectacle"
      ],
      "synopsis": "The story involves Maverick confronting his past while training a group of younger Top Gun graduates, including the son of his deceased best friend, for a dangerous mission.",
      "tags": [
        "box-office-smash",
        "practical-fx",
        "oscar-winner",
        "high-octane"
      ],
      "trailerYoutubeId": "qSqVVswa420",
      "poster": "./posters/top-gun-maverick.jpg"
    },
    {
      "id": "john-wick-chapter-4",
      "title": "John Wick: Chapter 4",
      "year": 2023,
      "director": "Chad Stahelski",
      "rating": 7.6,
      "rank": 84,
      "runtime": "169 min",
      "genreIds": [
        "action-spectacle",
        "neo-noir",
        "martial-arts"
      ],
      "synopsis": "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
      "tags": [
        "hyper-stylized",
        "neo-noir",
        "martial-arts",
        "gun-fu"
      ],
      "trailerYoutubeId": "qEVUtrk8_B4",
      "poster": "./posters/john-wick-chapter-4.jpg"
    },
    {
      "id": "the-dark-knight",
      "title": "The Dark Knight",
      "year": 2008,
      "director": "Christopher Nolan",
      "rating": 9.1,
      "rank": 85,
      "runtime": "152 min",
      "genreIds": [
        "action-spectacle",
        "neo-noir",
        "sci-fi"
      ],
      "synopsis": "When a menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman, James Gordon and Harvey Dent must work together to put an end to the madness.",
      "tags": [
        "oscar-winner",
        "critics-masterpiece",
        "dark-and-gritty",
        "box-office-smash"
      ],
      "trailerYoutubeId": "EXeTwQWrcwY",
      "poster": "./posters/the-dark-knight.jpg"
    },
    {
      "id": "die-hard",
      "title": "Die Hard",
      "year": 1988,
      "director": "John McTiernan",
      "rating": 8.2,
      "rank": 86,
      "runtime": "132 min",
      "genreIds": [
        "action-spectacle"
      ],
      "synopsis": "A New York City cop tries to save his wife and several others taken hostage by terrorists during a Christmas party in a Los Angeles skyscraper.",
      "tags": [
        "cult-classic",
        "practical-fx",
        "high-octane",
        "action-pioneer"
      ],
      "trailerYoutubeId": "jaJuwKCmJbY",
      "poster": "./posters/die-hard.jpg"
    },
    {
      "id": "raiders-of-the-lost-ark",
      "title": "Raiders of the Lost Ark",
      "year": 1981,
      "director": "Steven Spielberg",
      "rating": 8.4,
      "rank": 87,
      "runtime": "115 min",
      "genreIds": [
        "action-spectacle",
        "fantasy-epics"
      ],
      "synopsis": "In 1936, archaeologist Indiana Jones is tasked by Army Intelligence to help locate a legendary ancient power, the Ark of Covenant, before the Nazis get it first.",
      "tags": [
        "oscar-winner",
        "cult-classic",
        "adventure",
        "practical-fx"
      ],
      "trailerYoutubeId": "0xQSIdSRlAk",
      "poster": "./posters/raiders-of-the-lost-ark.jpg"
    },
    {
      "id": "gladiator",
      "title": "Gladiator",
      "year": 2000,
      "director": "Ridley Scott",
      "rating": 8.5,
      "rank": 88,
      "runtime": "155 min",
      "genreIds": [
        "action-spectacle",
        "biopic-epics",
        "fantasy-epics"
      ],
      "synopsis": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
      "tags": [
        "oscar-winner",
        "box-office-smash",
        "heroic-epic",
        "vengeance"
      ],
      "trailerYoutubeId": "P5ieIbInFpg",
      "poster": "./posters/gladiator.jpg"
    },
    {
      "id": "mission-impossible-fallout",
      "title": "Mission: Impossible - Fallout",
      "year": 2018,
      "director": "Christopher McQuarrie",
      "rating": 7.7,
      "rank": 89,
      "runtime": "147 min",
      "genreIds": [
        "action-spectacle"
      ],
      "synopsis": "A group of terrorists plans to detonate three plutonium cores for a simultaneous nuclear attack on different cities. Ethan Hunt, along with his IMF team, sets out to stop the carnage.",
      "tags": [
        "practical-fx",
        "critics-masterpiece",
        "high-octane",
        "box-office-smash"
      ],
      "trailerYoutubeId": "wb49-oV0F78",
      "poster": "./posters/mission-impossible-fallout.jpg"
    },
    {
      "id": "john-wick",
      "title": "John Wick",
      "year": 2014,
      "director": "Chad Stahelski",
      "rating": 7.5,
      "rank": 90,
      "runtime": "101 min",
      "genreIds": [
        "action-spectacle",
        "neo-noir",
        "martial-arts"
      ],
      "synopsis": "John Wick is a former hitman grieving the loss of his true love. When his home is broken into, robbed, and his dog killed, he is forced to return to action to exact revenge.",
      "tags": [
        "cult-classic",
        "gun-fu",
        "hyper-stylized",
        "vengeance"
      ],
      "trailerYoutubeId": "C0BMx-qxsP4",
      "poster": "./posters/john-wick.jpg"
    },
    {
      "id": "casino-royale",
      "title": "Casino Royale",
      "year": 2006,
      "director": "Martin Campbell",
      "rating": 8,
      "rank": 91,
      "runtime": "144 min",
      "genreIds": [
        "action-spectacle",
        "neo-noir"
      ],
      "synopsis": "After earning a licence to kill, secret agent James Bond sets out on his first mission as 007. Bond must defeat a private banker funding terrorists in a high-stakes game of poker at Casino Royale, in Montenegro.",
      "tags": [
        "gritty-realism",
        "high-octane",
        "critics-masterpiece",
        "box-office-smash"
      ],
      "trailerYoutubeId": "36mnx8dBbGE",
      "poster": "./posters/casino-royale.jpg"
    },
    {
      "id": "heat",
      "title": "Heat",
      "year": 1995,
      "director": "Michael Mann",
      "rating": 8.3,
      "rank": 92,
      "runtime": "170 min",
      "genreIds": [
        "action-spectacle",
        "neo-noir"
      ],
      "synopsis": "A group of high-end professional thieves start to feel the heat from the LAPD when they unknowingly leave a verbal clue at their latest heist.",
      "tags": [
        "cult-classic",
        "procedural",
        "dark-and-gritty",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "2GfZl4kuVNI",
      "poster": "./posters/heat.jpg"
    },
    {
      "id": "baby-driver",
      "title": "Baby Driver",
      "year": 2017,
      "director": "Edgar Wright",
      "rating": 7.5,
      "rank": 93,
      "runtime": "113 min",
      "genreIds": [
        "action-spectacle",
        "neo-noir"
      ],
      "synopsis": "Coerced into working for a crime boss, a young getaway driver must face the music when a doomed heist threatens his life, love, and freedom.",
      "tags": [
        "hyper-stylized",
        "rhythm-action",
        "critics-masterpiece",
        "high-octane"
      ],
      "trailerYoutubeId": "zTvJJnoWIPk",
      "poster": "./posters/baby-driver.jpg"
    },
    {
      "id": "avengers-endgame",
      "title": "Avengers: Endgame",
      "year": 2019,
      "director": "Anthony Russo, Joe Russo",
      "rating": 8.4,
      "rank": 94,
      "runtime": "181 min",
      "genreIds": [
        "action-spectacle",
        "sci-fi",
        "fantasy-epics",
        "time-travel"
      ],
      "synopsis": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
      "tags": [
        "box-office-smash",
        "visual-spectacle",
        "superhero-epic"
      ],
      "trailerYoutubeId": "TcMBFSGVi1c",
      "poster": "./posters/avengers-endgame.jpg"
    },
    {
      "id": "kill-bill-vol-1",
      "title": "Kill Bill: Vol. 1",
      "year": 2003,
      "director": "Quentin Tarantino",
      "rating": 8.2,
      "rank": 95,
      "runtime": "111 min",
      "genreIds": [
        "action-spectacle",
        "martial-arts",
        "neo-noir"
      ],
      "synopsis": "After waking from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.",
      "tags": [
        "hyper-stylized",
        "vengeance",
        "martial-arts",
        "cult-classic"
      ],
      "trailerYoutubeId": "7kSuas6mRpk",
      "poster": "./posters/kill-bill-vol-1.jpg"
    },
    {
      "id": "kill-bill-vol-2",
      "title": "Kill Bill: Vol. 2",
      "year": 2004,
      "director": "Quentin Tarantino",
      "rating": 8,
      "rank": 96,
      "runtime": "137 min",
      "genreIds": [
        "action-spectacle",
        "martial-arts",
        "neo-noir"
      ],
      "synopsis": "The Bride continues her quest for vengeance, tracking the remaining Deadly Viper assassins and closing in on the man who betrayed her.",
      "tags": [
        "hyper-stylized",
        "vengeance",
        "martial-arts"
      ],
      "trailerYoutubeId": "WTt8cCIvGYI",
      "poster": "./posters/kill-bill-vol-2.jpg"
    },
    {
      "id": "the-bourne-identity",
      "title": "The Bourne Identity",
      "year": 2002,
      "director": "Doug Liman",
      "rating": 7.8,
      "rank": 97,
      "runtime": "119 min",
      "genreIds": [
        "action-spectacle",
        "neo-noir"
      ],
      "synopsis": "A man is picked up by a fishing boat, bullet-riddled and suffering from amnesia, before racing to elude assassins and attempting to regain his memory.",
      "tags": [
        "gritty-realism",
        "espionage",
        "high-octane"
      ],
      "trailerYoutubeId": "FpKaB5dvQ4g",
      "poster": "./posters/the-bourne-identity.jpg"
    },
    {
      "id": "the-bourne-ultimatum",
      "title": "The Bourne Ultimatum",
      "year": 2007,
      "director": "Paul Greengrass",
      "rating": 8,
      "rank": 98,
      "runtime": "115 min",
      "genreIds": [
        "action-spectacle"
      ],
      "synopsis": "Jason Bourne dodges a ruthless C.I.A. official and his Agents from a new assassination program while searching for the origins of his life as a trained killer.",
      "tags": [
        "oscar-winner",
        "espionage",
        "high-octane"
      ],
      "trailerYoutubeId": "ZT2ZxjUjSo0",
      "poster": "./posters/the-bourne-ultimatum.jpg"
    },
    {
      "id": "logan",
      "title": "Logan",
      "year": 2017,
      "director": "James Mangold",
      "rating": 8.1,
      "rank": 99,
      "runtime": "137 min",
      "genreIds": [
        "action-spectacle",
        "neo-noir",
        "sci-fi",
        "post-apocalyptic"
      ],
      "synopsis": "In a future where mutants are nearly extinct, an elderly and weary Logan leads a quiet life. But when Laura, a mutant child pursued by scientists, comes to him for help, he must get her to safety.",
      "tags": [
        "dark-and-gritty",
        "oscar-winner",
        "heroic-epic"
      ],
      "trailerYoutubeId": "Div0iP65aZo",
      "poster": "./posters/logan.jpg"
    },
    {
      "id": "speed",
      "title": "Speed",
      "year": 1994,
      "director": "Jan de Bont",
      "rating": 7.3,
      "rank": 100,
      "runtime": "116 min",
      "genreIds": [
        "action-spectacle"
      ],
      "synopsis": "An extortionist bomber rigs a Los Angeles city bus to explode if its speed drops below 50 mph, forcing a young cop and a female passenger to keep it moving and save everyone on board.",
      "tags": [
        "high-octane",
        "90s-classic",
        "box-office-smash"
      ],
      "trailerYoutubeId": "8piqd2BWeGI",
      "poster": "./posters/speed.jpg"
    },
    {
      "id": "dunkirk",
      "title": "Dunkirk",
      "year": 2017,
      "director": "Christopher Nolan",
      "rating": 7.8,
      "rank": 101,
      "runtime": "106 min",
      "genreIds": [
        "action-spectacle",
        "biopic-epics"
      ],
      "synopsis": "Allied soldiers from Belgium, the British Commonwealth and Empire, and France are surrounded by the German Army and evacuated during a fierce battle in World War II.",
      "tags": [
        "oscar-winner",
        "practical-fx",
        "non-linear",
        "survival"
      ],
      "trailerYoutubeId": "F-eMt3SrfFU",
      "poster": "./posters/dunkirk.jpg"
    },
    {
      "id": "1917",
      "title": "1917",
      "year": 2020,
      "director": "Sam Mendes",
      "rating": 8.2,
      "rank": 102,
      "runtime": "119 min",
      "genreIds": [
        "action-spectacle",
        "biopic-epics"
      ],
      "synopsis": "April 6th, 1917. As an infantry battalion assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.",
      "tags": [
        "oscar-winner",
        "one-shot-take",
        "visual-spectacle"
      ],
      "trailerYoutubeId": "YqNYrYUiMfg",
      "poster": "./posters/1917.jpg"
    },
    {
      "id": "ford-v-ferrari",
      "title": "Ford v Ferrari",
      "year": 2019,
      "director": "James Mangold",
      "rating": 8.1,
      "rank": 103,
      "runtime": "152 min",
      "genreIds": [
        "action-spectacle",
        "biopic-epics"
      ],
      "synopsis": "American car designer Carroll Shelby and driver Ken Miles battle corporate interference and the laws of physics to build a revolutionary race car for Ford in order to defeat Ferrari at the 24 Hours of Le Mans in 1966.",
      "tags": [
        "oscar-winner",
        "racing-epic",
        "box-office-smash"
      ],
      "trailerYoutubeId": "zyYgDtY2AMY",
      "poster": "./posters/ford-v-ferrari.jpg"
    },
    {
      "id": "kingsman-the-secret-service",
      "title": "Kingsman: The Secret Service",
      "year": 2015,
      "director": "Matthew Vaughn",
      "rating": 7.7,
      "rank": 104,
      "runtime": "129 min",
      "genreIds": [
        "action-spectacle",
        "satire-dark-comedy",
        "martial-arts"
      ],
      "synopsis": "A spy organisation recruits a promising street kid into the agency's training program, while a global threat emerges from a twisted tech genius.",
      "tags": [
        "hyper-stylized",
        "espionage",
        "high-octane"
      ],
      "trailerYoutubeId": "m4NCribDx4U",
      "poster": "./posters/kingsman-the-secret-service.jpg"
    },
    {
      "id": "edge-of-tomorrow",
      "title": "Edge of Tomorrow",
      "year": 2014,
      "director": "Doug Liman",
      "rating": 7.9,
      "rank": 105,
      "runtime": "113 min",
      "genreIds": [
        "action-spectacle",
        "sci-fi",
        "time-travel",
        "post-apocalyptic"
      ],
      "synopsis": "A man fighting in a war against aliens must relive the same day every time he dies until he can find a way to stop their power source with the help of an elite soldier.",
      "tags": [
        "time-loop",
        "exosuit",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "vw61gCe2oqI",
      "poster": "./posters/edge-of-tomorrow.jpg"
    },
    {
      "id": "pacific-rim",
      "title": "Pacific Rim",
      "year": 2013,
      "director": "Guillermo del Toro",
      "rating": 6.9,
      "rank": 106,
      "runtime": "131 min",
      "genreIds": [
        "action-spectacle",
        "sci-fi",
        "post-apocalyptic"
      ],
      "synopsis": "As a war between humankind and monstrous sea creatures wages on, a former pilot and a trainee are paired up to drive a seemingly obsolete special weapon in a desperate effort to save the world from the apocalypse.",
      "tags": [
        "kaiju",
        "mech-combat",
        "visual-spectacle"
      ],
      "trailerYoutubeId": "5guMumPFBag",
      "poster": "./posters/pacific-rim.jpg"
    },
    {
      "id": "django-unchained",
      "title": "Django Unchained",
      "year": 2012,
      "director": "Quentin Tarantino",
      "rating": 8.5,
      "rank": 107,
      "runtime": "165 min",
      "genreIds": [
        "action-spectacle",
        "neo-noir",
        "satire-dark-comedy"
      ],
      "synopsis": "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation owner in Mississippi.",
      "tags": [
        "oscar-winner",
        "western",
        "revenge"
      ],
      "trailerYoutubeId": "0fUCuvNlOCg",
      "poster": "./posters/django-unchained.jpg"
    },
    {
      "id": "inglourious-basterds",
      "title": "Inglourious Basterds",
      "year": 2009,
      "director": "Quentin Tarantino",
      "rating": 8.4,
      "rank": 108,
      "runtime": "153 min",
      "genreIds": [
        "action-spectacle",
        "satire-dark-comedy",
        "biopic-epics"
      ],
      "synopsis": "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
      "tags": [
        "oscar-winner",
        "critics-masterpiece",
        "alternate-history"
      ],
      "trailerYoutubeId": "KnrRy6kSFF0",
      "poster": "./posters/inglourious-basterds.jpg"
    },
    {
      "id": "hereditary",
      "title": "Hereditary",
      "year": 2018,
      "director": "Ari Aster",
      "rating": 7.3,
      "rank": 109,
      "runtime": "127 min",
      "genreIds": [
        "modern-horror",
        "mind-bending"
      ],
      "synopsis": "A grieving family is haunted by tragic and disturbing occurrences.",
      "tags": [
        "gothic-dread",
        "psychological",
        "existential-dread",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "V6wWKNij_1M",
      "poster": "./posters/hereditary.jpg"
    },
    {
      "id": "midsommar",
      "title": "Midsommar",
      "year": 2019,
      "director": "Ari Aster",
      "rating": 7.1,
      "rank": 110,
      "runtime": "148 min",
      "genreIds": [
        "modern-horror",
        "mind-bending"
      ],
      "synopsis": "A couple travels to Northern Europe to visit a rural hometown's fabled Swedish mid-summer festival. What begins as an idyllic retreat quickly devolves into an increasingly violent and bizarre competition at the hands of a pagan cult.",
      "tags": [
        "folk-horror",
        "surreal",
        "psychological",
        "hyper-stylized"
      ],
      "trailerYoutubeId": "1Vnghdsjmd0",
      "poster": "./posters/midsommar.jpg"
    },
    {
      "id": "us",
      "title": "Us",
      "year": 2019,
      "director": "Jordan Peele",
      "rating": 6.8,
      "rank": 111,
      "runtime": "116 min",
      "genreIds": [
        "modern-horror",
        "mind-bending"
      ],
      "synopsis": "In order to get away from their busy lives, the Wilson family takes a vacation to Santa Cruz, California. At night, four strangers break into Adelaide's childhood home. The family is shocked to find out that the intruders look lik...",
      "tags": [
        "doppelganger",
        "social-commentary",
        "atmospheric",
        "hyper-stylized"
      ],
      "trailerYoutubeId": "hNCmb-4oXJA",
      "poster": "./posters/us.jpg"
    },
    {
      "id": "a-quiet-place",
      "title": "A Quiet Place",
      "year": 2018,
      "director": "John Krasinski",
      "rating": 7.5,
      "rank": 112,
      "runtime": "90 min",
      "genreIds": [
        "modern-horror",
        "post-apocalyptic",
        "sci-fi"
      ],
      "synopsis": "A family struggles for survival in a world invaded by blind alien creatures with ultra-sensitive hearing.",
      "tags": [
        "survival-horror",
        "box-office-smash",
        "atmospheric"
      ],
      "trailerYoutubeId": "WR7cc5t7tv8",
      "poster": "./posters/a-quiet-place.jpg"
    },
    {
      "id": "the-witch",
      "title": "The Witch",
      "year": 2016,
      "director": "Robert Eggers",
      "rating": 7,
      "rank": 113,
      "runtime": "92 min",
      "genreIds": [
        "modern-horror"
      ],
      "synopsis": "An isolated Puritan family in 1630s New England comes unraveled by the forces of witchcraft and possession.",
      "tags": [
        "gothic-dread",
        "folk-horror",
        "atmospheric",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "iQXmlf3Sefg",
      "poster": "./posters/the-witch.jpg"
    },
    {
      "id": "it-follows",
      "title": "It Follows",
      "year": 2015,
      "director": "David Robert Mitchell",
      "rating": 6.8,
      "rank": 114,
      "runtime": "100 min",
      "genreIds": [
        "modern-horror"
      ],
      "synopsis": "A young woman is followed by an unknown supernatural force after a sexual encounter.",
      "tags": [
        "retro-synth",
        "atmospheric",
        "cult-classic",
        "existential-dread"
      ],
      "trailerYoutubeId": "HkZYbOH0ujw",
      "poster": "./posters/it-follows.jpg"
    },
    {
      "id": "talk-to-me",
      "title": "Talk to Me",
      "year": 2023,
      "director": "Danny Philippou, Michael Philippou",
      "rating": 7.1,
      "rank": 115,
      "runtime": "95 min",
      "genreIds": [
        "modern-horror"
      ],
      "synopsis": "When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked on the new thrill, until one of them goes too far and unleashes terrifying supernatural forces.",
      "tags": [
        "supernatural",
        "possession",
        "critics-masterpiece",
        "high-tension"
      ],
      "trailerYoutubeId": "aLAKJu9aJys",
      "poster": "./posters/talk-to-me.jpg"
    },
    {
      "id": "the-babadook",
      "title": "The Babadook",
      "year": 2014,
      "director": "Jennifer Kent",
      "rating": 6.8,
      "rank": 116,
      "runtime": "94 min",
      "genreIds": [
        "modern-horror"
      ],
      "synopsis": "A single mother and her child fall into a deep well of paranoia when an eerie children's book titled \"Mister Babadook\" manifests in their home.",
      "tags": [
        "psychological",
        "gothic-dread",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "k5WQZzDRVtw",
      "poster": "./posters/the-babadook.jpg"
    },
    {
      "id": "the-lighthouse",
      "title": "The Lighthouse",
      "year": 2019,
      "director": "Robert Eggers",
      "rating": 7.3,
      "rank": 117,
      "runtime": "109 min",
      "genreIds": [
        "modern-horror",
        "mind-bending",
        "satire-dark-comedy"
      ],
      "synopsis": "Two lighthouse keepers try to maintain their sanity while living on a remote and mysterious New England island in the 1890s.",
      "tags": [
        "surreal",
        "black-and-white",
        "psychological"
      ],
      "trailerYoutubeId": "Hyag7lR8CPA",
      "poster": "./posters/the-lighthouse.jpg"
    },
    {
      "id": "the-shining",
      "title": "The Shining",
      "year": 1980,
      "director": "Stanley Kubrick",
      "rating": 8.4,
      "rank": 118,
      "runtime": "146 min",
      "genreIds": [
        "modern-horror",
        "mind-bending"
      ],
      "synopsis": "A family heads to an isolated hotel for the winter, where a sinister presence influences the father into violence. At the same time, his psychic son sees horrifying forebodings from both the past and the future.",
      "tags": [
        "cult-classic",
        "gothic-dread",
        "psychological",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "S014oGZiSdI",
      "poster": "./posters/the-shining.jpg"
    },
    {
      "id": "x",
      "title": "X",
      "year": 2022,
      "director": "Ti West",
      "rating": 6.5,
      "rank": 119,
      "runtime": "105 min",
      "genreIds": [
        "modern-horror"
      ],
      "synopsis": "In 1979, a group of young filmmakers set out to make an adult film in a rural Texas farm, but when their reclusive, elderly hosts catch them in the act, the crew find themselves fighting for their lives.",
      "tags": [
        "slasher",
        "retro-70s",
        "hyper-stylized"
      ],
      "trailerYoutubeId": "Awg3cWuHfoc",
      "poster": "./posters/x.jpg"
    },
    {
      "id": "pearl",
      "title": "Pearl",
      "year": 2022,
      "director": "Ti West",
      "rating": 7,
      "rank": 120,
      "runtime": "103 min",
      "genreIds": [
        "modern-horror"
      ],
      "synopsis": "In 1918, a young woman on the brink of madness pursues stardom in a desperate attempt to escape the drudgery, isolation, and lovelessness of life on her parents' farm.",
      "tags": [
        "technicolor-madness",
        "psychological",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "L5PW5r3pEOg",
      "poster": "./posters/pearl.jpg"
    },
    {
      "id": "longlegs",
      "title": "Longlegs",
      "year": 2024,
      "director": "Osgood Perkins",
      "rating": 6.5,
      "rank": 121,
      "runtime": "101 min",
      "genreIds": [
        "modern-horror",
        "mystery-whodunit"
      ],
      "synopsis": "In pursuit of a serial killer, an FBI agent uncovers a series of occult clues that she must solve to end his terrifying killing spree.",
      "tags": [
        "occult-procedural",
        "gothic-dread",
        "high-tension"
      ],
      "trailerYoutubeId": "OG7wOTE8NhE",
      "poster": "./posters/longlegs.jpg"
    },
    {
      "id": "barbarian",
      "title": "Barbarian",
      "year": 2022,
      "director": "Zach Cregger",
      "rating": 7,
      "rank": 122,
      "runtime": "102 min",
      "genreIds": [
        "modern-horror",
        "mind-bending"
      ],
      "synopsis": "A woman staying at an Airbnb discovers that the house she has rented is not what it seems.",
      "tags": [
        "subverted-expectations",
        "high-tension",
        "creature"
      ],
      "trailerYoutubeId": "Dr89pmKrqkI",
      "poster": "./posters/barbarian.jpg"
    },
    {
      "id": "the-invisible-man",
      "title": "The Invisible Man",
      "year": 2020,
      "director": "Leigh Whannell",
      "rating": 7.1,
      "rank": 123,
      "runtime": "124 min",
      "genreIds": [
        "modern-horror",
        "sci-fi"
      ],
      "synopsis": "When Cecilia's abusive ex takes his own life and leaves her his fortune, she suspects his death was a hoax. As a series of coincidences turn lethal, Cecilia works to prove that she is being hunted by someone nobody can see.",
      "tags": [
        "tech-thriller",
        "high-tension",
        "box-office-smash"
      ],
      "trailerYoutubeId": "WO_FJdiY9dA",
      "poster": "./posters/the-invisible-man.jpg"
    },
    {
      "id": "insidious",
      "title": "Insidious",
      "year": 2011,
      "director": "James Wan",
      "rating": 6.8,
      "rank": 124,
      "runtime": "103 min",
      "genreIds": [
        "modern-horror"
      ],
      "synopsis": "A family looks to prevent evil spirits from trapping their comatose child in a realm called The Further.",
      "tags": [
        "astral-projection",
        "supernatural",
        "box-office-smash"
      ],
      "trailerYoutubeId": "zuZnRUcoWos",
      "poster": "./posters/insidious.jpg"
    },
    {
      "id": "smile",
      "title": "Smile",
      "year": 2022,
      "director": "Parker Finn",
      "rating": 6.5,
      "rank": 125,
      "runtime": "115 min",
      "genreIds": [
        "modern-horror"
      ],
      "synopsis": "After witnessing a bizarre, traumatic incident involving a patient, a psychiatrist becomes increasingly convinced she is being threatened by an uncanny entity.",
      "tags": [
        "curse-thriller",
        "jump-scares",
        "box-office-smash"
      ],
      "trailerYoutubeId": "BcDK7lkzzsU",
      "poster": "./posters/smile.jpg"
    },
    {
      "id": "nope",
      "title": "Nope",
      "year": 2022,
      "director": "Jordan Peele",
      "rating": 6.8,
      "rank": 126,
      "runtime": "130 min",
      "genreIds": [
        "modern-horror",
        "sci-fi"
      ],
      "synopsis": "The residents of a lonely gulch in inland California bear witness to an uncanny and chilling phenomenon.",
      "tags": [
        "ufo-horror",
        "visual-spectacle",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "In8fuzj3gck",
      "poster": "./posters/nope.jpg"
    },
    {
      "id": "saw",
      "title": "Saw",
      "year": 2004,
      "director": "James Wan",
      "rating": 7.6,
      "rank": 127,
      "runtime": "103 min",
      "genreIds": [
        "modern-horror",
        "mystery-whodunit"
      ],
      "synopsis": "Two men awaken to find themselves on the opposite sides of a dead body, each with specific instructions to kill the other, escape or face the consequences. These two are the latest contestants in Jigsaw's games.",
      "tags": [
        "torture-puzzle",
        "cult-classic",
        "twist-ending"
      ],
      "trailerYoutubeId": "S-1QgOMQ-ls",
      "poster": "./posters/saw.jpg"
    },
    {
      "id": "the-cabin-in-the-woods",
      "title": "The Cabin in the Woods",
      "year": 2012,
      "director": "Drew Goddard",
      "rating": 7,
      "rank": 128,
      "runtime": "95 min",
      "genreIds": [
        "modern-horror",
        "satire-dark-comedy"
      ],
      "synopsis": "Five teens visit a remote cabin and explore its cellar, finding strange items. When Dana reads from a book there, she unleashes zombie killers. But the situation is more complex than it appears.",
      "tags": [
        "meta-horror",
        "satire",
        "cult-classic"
      ],
      "trailerYoutubeId": "NsIilFNNmkY",
      "poster": "./posters/the-cabin-in-the-woods.jpg"
    },
    {
      "id": "don-t-breathe",
      "title": "Don't Breathe",
      "year": 2016,
      "director": "Fede Alvarez",
      "rating": 7.1,
      "rank": 129,
      "runtime": "88 min",
      "genreIds": [
        "modern-horror"
      ],
      "synopsis": "Three delinquents break into the house of a war veteran who is blind to steal his money. However, they discover that the man is not as defenseless as he seems.",
      "tags": [
        "home-invasion",
        "high-tension",
        "suspense"
      ],
      "trailerYoutubeId": "76yBTNDB6vU",
      "poster": "./posters/don-t-breathe.jpg"
    },
    {
      "id": "the-ring",
      "title": "The Ring",
      "year": 2002,
      "director": "Gore Verbinski",
      "rating": 7.1,
      "rank": 130,
      "runtime": "115 min",
      "genreIds": [
        "modern-horror",
        "mystery-whodunit"
      ],
      "synopsis": "A journalist must investigate a mysterious videotape which seems to cause the death of anyone one week to the day after they view it.",
      "tags": [
        "curse",
        "j-horror-remake",
        "box-office-smash"
      ],
      "trailerYoutubeId": "CG7BAY6_hsw",
      "poster": "./posters/the-ring.jpg"
    },
    {
      "id": "the-silence-of-the-lambs",
      "title": "The Silence of the Lambs",
      "year": 1991,
      "director": "Jonathan Demme",
      "rating": 8.6,
      "rank": 131,
      "runtime": "118 min",
      "genreIds": [
        "modern-horror",
        "neo-noir",
        "mystery-whodunit"
      ],
      "synopsis": "A young FBI cadet is aided by a manipulative cannibal killer in her pursuit of a madman who skins his victims.",
      "tags": [
        "oscar-winner",
        "all-time-masterpiece",
        "psychological"
      ],
      "trailerYoutubeId": "6iB21hsprAQ",
      "poster": "./posters/the-silence-of-the-lambs.jpg"
    },
    {
      "id": "28-days-later",
      "title": "28 Days Later",
      "year": 2003,
      "director": "Danny Boyle",
      "rating": 7.5,
      "rank": 132,
      "runtime": "113 min",
      "genreIds": [
        "modern-horror",
        "post-apocalyptic"
      ],
      "synopsis": "Four weeks after a mysterious, incurable virus spreads throughout the United Kingdom, a handful of survivors try to find sanctuary.",
      "tags": [
        "fast-zombies",
        "digital-grain",
        "cult-classic"
      ],
      "trailerYoutubeId": "mWEhfF27O0c",
      "poster": "./posters/28-days-later.jpg"
    },
    {
      "id": "train-to-busan",
      "title": "Train to Busan",
      "year": 2016,
      "director": "Yeon Sang-ho",
      "rating": 7.6,
      "rank": 133,
      "runtime": "118 min",
      "genreIds": [
        "modern-horror",
        "action-spectacle",
        "post-apocalyptic"
      ],
      "synopsis": "While a zombie virus breaks out in South Korea, passengers struggle to survive on the train from Seoul to Busan.",
      "tags": [
        "zombie-express",
        "high-octane",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "1ovgxN2VWNc",
      "poster": "./posters/train-to-busan.jpg"
    },
    {
      "id": "spirited-away",
      "title": "Spirited Away",
      "year": 2003,
      "director": "Hayao Miyazaki",
      "rating": 8.6,
      "rank": 134,
      "runtime": "124 min",
      "genreIds": [
        "anime-masterpieces",
        "fantasy-epics"
      ],
      "synopsis": "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, and where humans are changed into beasts.",
      "tags": [
        "oscar-winner",
        "studio-ghibli",
        "hand-drawn",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "ByXuk9QqQkk",
      "poster": "./posters/spirited-away.jpg"
    },
    {
      "id": "princess-mononoke",
      "title": "Princess Mononoke",
      "year": 1997,
      "director": "Hayao Miyazaki",
      "rating": 8.3,
      "rank": 135,
      "runtime": "133 min",
      "genreIds": [
        "anime-masterpieces",
        "fantasy-epics"
      ],
      "synopsis": "After a deadly curse forces him from home, young warrior Ashitaka journeys west and is drawn into a conflict between ancient forest spirits, an iron town, and a wolf-raised girl.",
      "tags": [
        "studio-ghibli",
        "environmental-epic",
        "hand-drawn",
        "cult-classic"
      ],
      "trailerYoutubeId": "4OiMOHRDs14",
      "poster": "./posters/princess-mononoke.jpg"
    },
    {
      "id": "your-name",
      "title": "Your Name",
      "year": 2015,
      "director": "Megumi Shiraishi",
      "rating": 8.9,
      "rank": 136,
      "runtime": "22 min",
      "genreIds": [
        "anime-masterpieces",
        "fantasy-epics",
        "time-travel"
      ],
      "synopsis": "Ibe Riki and Riko Takeo are preparing for a wedding ceremony.",
      "tags": [
        "visual-masterpiece",
        "body-swap",
        "box-office-smash"
      ],
      "trailerYoutubeId": "xU47nhruN-Q",
      "poster": "./posters/your-name.jpg"
    },
    {
      "id": "akira",
      "title": "Akira",
      "year": 1988,
      "director": "Katsuhiro Otomo",
      "rating": 8,
      "rank": 137,
      "runtime": "124 min",
      "genreIds": [
        "anime-masterpieces",
        "cyberpunk",
        "sci-fi",
        "post-apocalyptic"
      ],
      "synopsis": "A secret military project endangers Neo-Tokyo when it turns a teenage biker gang member into a rampaging psychic psychopath who can only be stopped by his best friend.",
      "tags": [
        "cyberpunk",
        "hand-drawn",
        "cult-classic",
        "hyper-stylized"
      ],
      "trailerYoutubeId": "nA8KmHC2Z-g",
      "poster": "./posters/akira.jpg"
    },
    {
      "id": "ghost-in-the-shell",
      "title": "Ghost in the Shell",
      "year": 2017,
      "director": "Rupert Sanders",
      "rating": 6.3,
      "rank": 138,
      "runtime": "107 min",
      "genreIds": [
        "anime-masterpieces",
        "cyberpunk",
        "sci-fi"
      ],
      "synopsis": "In the near future, Major Mira Killian is the first of her kind: A human saved from a terrible crash, who is cyber-enhanced to be a perfect soldier devoted to stopping the world's most dangerous criminals.",
      "tags": [
        "cyberpunk",
        "philosophical",
        "ai-consciousness",
        "cult-classic"
      ],
      "trailerYoutubeId": "tRkb1X9ovI4",
      "poster": "./posters/ghost-in-the-shell.jpg"
    },
    {
      "id": "howl-s-moving-castle",
      "title": "Howl's Moving Castle",
      "year": 2005,
      "director": "Hayao Miyazaki",
      "rating": 8.2,
      "rank": 139,
      "runtime": "119 min",
      "genreIds": [
        "anime-masterpieces",
        "fantasy-epics"
      ],
      "synopsis": "When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.",
      "tags": [
        "studio-ghibli",
        "hand-drawn",
        "romantic-fantasy"
      ],
      "trailerYoutubeId": "iwROgK94zcM",
      "poster": "./posters/howl-s-moving-castle.jpg"
    },
    {
      "id": "spider-man-into-the-spider-verse",
      "title": "Spider-Man: Into the Spider-Verse",
      "year": 2018,
      "director": "Bob Persichetti, Peter Ramsey, Rodney Rothman",
      "rating": 8.4,
      "rank": 140,
      "runtime": "117 min",
      "genreIds": [
        "anime-masterpieces",
        "action-spectacle",
        "sci-fi",
        "time-travel"
      ],
      "synopsis": "Teen Miles Morales becomes the Spider-Man of his universe and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
      "tags": [
        "oscar-winner",
        "multiverse",
        "hyper-stylized"
      ],
      "trailerYoutubeId": "g4Hbz2jLxvQ",
      "poster": "./posters/spider-man-into-the-spider-verse.jpg"
    },
    {
      "id": "spider-man-across-the-spider-verse",
      "title": "Spider-Man: Across the Spider-Verse",
      "year": 2023,
      "director": "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
      "rating": 8.5,
      "rank": 141,
      "runtime": "140 min",
      "genreIds": [
        "anime-masterpieces",
        "action-spectacle",
        "sci-fi",
        "time-travel"
      ],
      "synopsis": "Traveling across the multiverse, Miles Morales meets a new team of Spider-People, made up of heroes from different dimensions. But when the heroes clash over how to deal with a new threat, Miles finds himself at a crossroads.",
      "tags": [
        "visual-masterpiece",
        "multiverse",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "cqGjhVJWtEg",
      "poster": "./posters/spider-man-across-the-spider-verse.jpg"
    },
    {
      "id": "grave-of-the-fireflies",
      "title": "Grave of the Fireflies",
      "year": 1989,
      "director": "Isao Takahata",
      "rating": 8.5,
      "rank": 142,
      "runtime": "88 min",
      "genreIds": [
        "anime-masterpieces",
        "biopic-epics"
      ],
      "synopsis": "A young boy and his little sister struggle to survive in Japan during World War II.",
      "tags": [
        "studio-ghibli",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "lhlh7JVcTt8",
      "poster": "./posters/grave-of-the-fireflies.jpg"
    },
    {
      "id": "nausica-of-the-valley-of-the-wind",
      "title": "Nausica\u00e4 of the Valley of the Wind",
      "year": 1987,
      "director": "Hayao Miyazaki",
      "rating": 8,
      "rank": 143,
      "runtime": "117 min",
      "genreIds": [
        "anime-masterpieces",
        "fantasy-epics",
        "post-apocalyptic"
      ],
      "synopsis": "Warrior and pacifist Princess Nausica\u00e4 desperately struggles to prevent two warring nations from destroying themselves and their dying planet.",
      "tags": [
        "studio-ghibli",
        "hand-drawn",
        "environmental-epic"
      ],
      "trailerYoutubeId": "6zhLBe319KE",
      "poster": "./posters/nausica-of-the-valley-of-the-wind.jpg"
    },
    {
      "id": "paprika",
      "title": "Paprika",
      "year": 2007,
      "director": "Satoshi Kon",
      "rating": 7.7,
      "rank": 144,
      "runtime": "90 min",
      "genreIds": [
        "anime-masterpieces",
        "mind-bending",
        "sci-fi"
      ],
      "synopsis": "When a machine that allows therapists to enter their patients' dreams is stolen, all hell breaks loose. Only a young female therapist, Paprika, can stop it.",
      "tags": [
        "dream-logic",
        "surreal",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "PIUqozzyW2k",
      "poster": "./posters/paprika.jpg"
    },
    {
      "id": "a-silent-voice",
      "title": "A Silent Voice",
      "year": 2017,
      "director": "Milad Mohebbian",
      "rating": 8,
      "rank": 145,
      "runtime": "3 min",
      "genreIds": [
        "anime-masterpieces"
      ],
      "synopsis": "A silent voice is for voices that are not heard before! For people who die in silence! And the only voice that they hear is the Fire sound.",
      "tags": [
        "emotional-drama",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "nfK6UgLra7g",
      "poster": "./posters/a-silent-voice.jpg"
    },
    {
      "id": "neon-genesis-evangelion-the-end-of-evangelion",
      "title": "Neon Genesis Evangelion: The End of Evangelion",
      "year": 2024,
      "director": "Hideaki Anno, Kazuya Tsurumaki",
      "rating": 8.1,
      "rank": 146,
      "runtime": "87 min",
      "genreIds": [
        "anime-masterpieces",
        "sci-fi",
        "mind-bending",
        "post-apocalyptic"
      ],
      "synopsis": "As the military and a shadowy cabal assault NERV headquarters, troubled Eva pilot Shinji Ikari is forced back into battle, confronting a secret project that could decide humanity's fate.",
      "tags": [
        "mech-existential",
        "cult-classic",
        "mind-bending"
      ],
      "trailerYoutubeId": "Ds8Wq_YRx1k",
      "poster": "./posters/neon-genesis-evangelion-the-end-of-evangelion.jpg"
    },
    {
      "id": "the-boy-and-the-heron",
      "title": "The Boy and the Heron",
      "year": 2023,
      "director": "Hayao Miyazaki",
      "rating": 7.3,
      "rank": 147,
      "runtime": "124 min",
      "genreIds": [
        "anime-masterpieces",
        "fantasy-epics"
      ],
      "synopsis": "In the wake of his mother's death and his father's remarriage, a headstrong boy ventures into a dreamlike world shared by the living and the dead in search of his missing stepmother.",
      "tags": [
        "oscar-winner",
        "studio-ghibli",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "f7EDFdA10pg",
      "poster": "./posters/the-boy-and-the-heron.jpg"
    },
    {
      "id": "suzume",
      "title": "Suzume",
      "year": 2023,
      "director": "Makoto Shinkai",
      "rating": 7.6,
      "rank": 148,
      "runtime": "122 min",
      "genreIds": [
        "anime-masterpieces",
        "fantasy-epics"
      ],
      "synopsis": "A modern action adventure road story where a 17-year-old girl named Suzume helps a mysterious young man close doors from the other side that are releasing disasters all over in Japan.",
      "tags": [
        "visual-masterpiece",
        "box-office-smash"
      ],
      "trailerYoutubeId": "5pTcio2hTSw",
      "poster": "./posters/suzume.jpg"
    },
    {
      "id": "castle-in-the-sky",
      "title": "Castle in the Sky",
      "year": 1991,
      "director": "Hayao Miyazaki",
      "rating": 8,
      "rank": 149,
      "runtime": "124 min",
      "genreIds": [
        "anime-masterpieces",
        "fantasy-epics"
      ],
      "synopsis": "Pazu's life changes when he meets Sheeta, a girl whom pirates are chasing for her crystal amulet, which has the potential to locate Laputa, a legendary castle floating in the sky.",
      "tags": [
        "studio-ghibli",
        "steampunk",
        "adventure"
      ],
      "trailerYoutubeId": "WmDebzBANF8",
      "poster": "./posters/castle-in-the-sky.jpg"
    },
    {
      "id": "my-neighbor-totoro",
      "title": "My Neighbor Totoro",
      "year": 1990,
      "director": "Hayao Miyazaki",
      "rating": 8.1,
      "rank": 150,
      "runtime": "86 min",
      "genreIds": [
        "anime-masterpieces",
        "fantasy-epics"
      ],
      "synopsis": "When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby.",
      "tags": [
        "studio-ghibli",
        "whimsical",
        "all-time-masterpiece"
      ],
      "trailerYoutubeId": "92a7Hj0ijLs",
      "poster": "./posters/my-neighbor-totoro.jpg"
    },
    {
      "id": "kiki-s-delivery-service",
      "title": "Kiki's Delivery Service",
      "year": 1990,
      "director": "Hayao Miyazaki",
      "rating": 7.8,
      "rank": 151,
      "runtime": "103 min",
      "genreIds": [
        "anime-masterpieces",
        "fantasy-epics"
      ],
      "synopsis": "Along with her black cat Jiji, Kiki settles in a seaside town and starts a high-flying delivery service. Here begins her magical encounter with independence and responsibility, making lifelong friends and finding her place in the ...",
      "tags": [
        "studio-ghibli",
        "coming-of-age"
      ],
      "trailerYoutubeId": "4bG17OYs-GA",
      "poster": "./posters/kiki-s-delivery-service.jpg"
    },
    {
      "id": "redline",
      "title": "Redline",
      "year": 2010,
      "director": "Takeshi Koike",
      "rating": 7.5,
      "rank": 152,
      "runtime": "102 min",
      "genreIds": [
        "anime-masterpieces",
        "action-spectacle",
        "sci-fi"
      ],
      "synopsis": "A story about the most popular racing event in the galaxy, the Redline, and the various racers who compete in it.",
      "tags": [
        "hand-drawn-madness",
        "high-octane",
        "cult-classic"
      ],
      "trailerYoutubeId": "2t26m_Q6ENo",
      "poster": "./posters/redline.jpg"
    },
    {
      "id": "weathering-with-you",
      "title": "Weathering with You",
      "year": 2020,
      "director": "Makoto Shinkai",
      "rating": 7.5,
      "rank": 153,
      "runtime": "112 min",
      "genreIds": [
        "anime-masterpieces",
        "fantasy-epics"
      ],
      "synopsis": "Set during a period of exceptionally rainy weather, high-school boy Hodaka Morishima runs away from his troubled rural home to Tokyo and befriends an orphan girl who can manipulate the weather.",
      "tags": [
        "visual-masterpiece",
        "box-office-smash"
      ],
      "trailerYoutubeId": "bar0WlR4ous",
      "poster": "./posters/weathering-with-you.jpg"
    },
    {
      "id": "the-iron-giant",
      "title": "The Iron Giant",
      "year": 1999,
      "director": "Brad Bird",
      "rating": 8.1,
      "rank": 154,
      "runtime": "86 min",
      "genreIds": [
        "anime-masterpieces",
        "sci-fi"
      ],
      "synopsis": "A young boy befriends a giant robot from outer space that a paranoid government agent wants to destroy.",
      "tags": [
        "cult-classic",
        "emotional-epic",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "obLtyj8hfFk",
      "poster": "./posters/the-iron-giant.jpg"
    },
    {
      "id": "fantastic-mr-fox",
      "title": "Fantastic Mr. Fox",
      "year": 2009,
      "director": "Wes Anderson",
      "rating": 7.9,
      "rank": 155,
      "runtime": "87 min",
      "genreIds": [
        "anime-masterpieces",
        "satire-dark-comedy"
      ],
      "synopsis": "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
      "tags": [
        "stop-motion",
        "oscar-nominee",
        "hyper-stylized"
      ],
      "trailerYoutubeId": "n2igjYFojUo",
      "poster": "./posters/fantastic-mr-fox.jpg"
    },
    {
      "id": "the-lord-of-the-rings-the-return-of-the-king",
      "title": "The Lord of the Rings: The Return of the King",
      "year": 2003,
      "director": "Peter Jackson",
      "rating": 9,
      "rank": 156,
      "runtime": "201 min",
      "genreIds": [
        "fantasy-epics",
        "action-spectacle"
      ],
      "synopsis": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      "tags": [
        "oscar-winner",
        "box-office-smash",
        "worldbuilding",
        "all-time-masterpiece"
      ],
      "trailerYoutubeId": "r5X-hFf6Bwo",
      "poster": "./posters/the-lord-of-the-rings-the-return-of-the-king.jpg"
    },
    {
      "id": "the-lord-of-the-rings-the-fellowship-of-the-ring",
      "title": "The Lord of the Rings: The Fellowship of the Ring",
      "year": 2001,
      "director": "Peter Jackson",
      "rating": 8.9,
      "rank": 157,
      "runtime": "178 min",
      "genreIds": [
        "fantasy-epics",
        "action-spectacle"
      ],
      "synopsis": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
      "tags": [
        "worldbuilding",
        "critics-masterpiece",
        "oscar-winner",
        "all-time-masterpiece"
      ],
      "trailerYoutubeId": "V75dMMIW2B4",
      "poster": "./posters/the-lord-of-the-rings-the-fellowship-of-the-ring.jpg"
    },
    {
      "id": "the-lord-of-the-rings-the-two-towers",
      "title": "The Lord of the Rings: The Two Towers",
      "year": 2002,
      "director": "Peter Jackson",
      "rating": 8.8,
      "rank": 158,
      "runtime": "179 min",
      "genreIds": [
        "fantasy-epics",
        "action-spectacle"
      ],
      "synopsis": "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
      "tags": [
        "worldbuilding",
        "critics-masterpiece",
        "oscar-winner"
      ],
      "trailerYoutubeId": "LbfMDwc4azU",
      "poster": "./posters/the-lord-of-the-rings-the-two-towers.jpg"
    },
    {
      "id": "pan-s-labyrinth",
      "title": "Pan's Labyrinth",
      "year": 2007,
      "director": "Guillermo del Toro",
      "rating": 8.2,
      "rank": 159,
      "runtime": "118 min",
      "genreIds": [
        "fantasy-epics",
        "modern-horror"
      ],
      "synopsis": "In 1944 Francoist Spain, an imaginative young girl meets a faun who tells her she's a princess and that she must prove her worthiness by completing three dangerous tasks.",
      "tags": [
        "oscar-winner",
        "practical-fx",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "jVZRnnVSQ8k",
      "poster": "./posters/pan-s-labyrinth.jpg"
    },
    {
      "id": "the-hobbit-an-unexpected-journey",
      "title": "The Hobbit: An Unexpected Journey",
      "year": 2012,
      "director": "Peter Jackson",
      "rating": 7.8,
      "rank": 160,
      "runtime": "169 min",
      "genreIds": [
        "fantasy-epics",
        "action-spectacle"
      ],
      "synopsis": "A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home and the gold within it from the dragon Smaug.",
      "tags": [
        "middle-earth",
        "box-office-smash"
      ],
      "trailerYoutubeId": "SDnYMbYB-nU",
      "poster": "./posters/the-hobbit-an-unexpected-journey.jpg"
    },
    {
      "id": "stardust",
      "title": "Stardust",
      "year": 2007,
      "director": "Matthew Vaughn",
      "rating": 7.6,
      "rank": 161,
      "runtime": "127 min",
      "genreIds": [
        "fantasy-epics"
      ],
      "synopsis": "In a countryside town bordering on a magical land, a young man makes a promise to his beloved that he'll retrieve a fallen star by venturing into the magical realm.",
      "tags": [
        "romantic-fairytale",
        "cult-classic"
      ],
      "trailerYoutubeId": "-wwv427DAvA",
      "poster": "./posters/stardust.jpg"
    },
    {
      "id": "the-green-knight",
      "title": "The Green Knight",
      "year": 2021,
      "director": "David Lowery",
      "rating": 6.5,
      "rank": 162,
      "runtime": "130 min",
      "genreIds": [
        "fantasy-epics",
        "mind-bending"
      ],
      "synopsis": "A fantasy retelling of the medieval story of Sir Gawain and the Green Knight.",
      "tags": [
        "arthurian-myth",
        "surreal",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "sS6ksY8xWCY",
      "poster": "./posters/the-green-knight.jpg"
    },
    {
      "id": "pirates-of-the-caribbean-the-curse-of-the-black-pearl",
      "title": "Pirates of the Caribbean: The Curse of the Black Pearl",
      "year": 2003,
      "director": "Gore Verbinski",
      "rating": 8.1,
      "rank": 163,
      "runtime": "143 min",
      "genreIds": [
        "fantasy-epics",
        "action-spectacle"
      ],
      "synopsis": "An intrepid blacksmith teams up with an eccentric pirate captain to save his love from an undead pirate crew.",
      "tags": [
        "swashbuckler",
        "box-office-smash",
        "cult-classic"
      ],
      "trailerYoutubeId": "naQr0uTrH_s",
      "poster": "./posters/pirates-of-the-caribbean-the-curse-of-the-black-pearl.jpg"
    },
    {
      "id": "big-fish",
      "title": "Big Fish",
      "year": 2004,
      "director": "Tim Burton",
      "rating": 7.9,
      "rank": 164,
      "runtime": "125 min",
      "genreIds": [
        "fantasy-epics",
        "satire-dark-comedy"
      ],
      "synopsis": "A frustrated son tries to determine the fact from fiction in his dying father's life.",
      "tags": [
        "tall-tales",
        "visual-spectacle",
        "emotional"
      ],
      "trailerYoutubeId": "D0kiS4ROWkQ",
      "poster": "./posters/big-fish.jpg"
    },
    {
      "id": "life-of-pi",
      "title": "Life of Pi",
      "year": 2012,
      "director": "Ang Lee",
      "rating": 7.9,
      "rank": 165,
      "runtime": "127 min",
      "genreIds": [
        "fantasy-epics",
        "space-exploration"
      ],
      "synopsis": "A young man who survives a disaster at sea is hurtled into an epic journey of adventure and discovery. While cast away, he forms an unexpected connection with another survivor: a fearsome Bengal tiger.",
      "tags": [
        "oscar-winner",
        "survival",
        "visual-spectacle"
      ],
      "trailerYoutubeId": "3mMN693-F3U",
      "poster": "./posters/life-of-pi.jpg"
    },
    {
      "id": "doctor-strange",
      "title": "Doctor Strange",
      "year": 2016,
      "director": "Scott Derrickson",
      "rating": 7.5,
      "rank": 166,
      "runtime": "115 min",
      "genreIds": [
        "fantasy-epics",
        "action-spectacle",
        "time-travel"
      ],
      "synopsis": "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
      "tags": [
        "psychedelic-magic",
        "visual-spectacle"
      ],
      "trailerYoutubeId": "h7gvFravm4A",
      "poster": "./posters/doctor-strange.jpg"
    },
    {
      "id": "thor-ragnarok",
      "title": "Thor: Ragnarok",
      "year": 2017,
      "director": "Taika Waititi",
      "rating": 7.9,
      "rank": 167,
      "runtime": "130 min",
      "genreIds": [
        "fantasy-epics",
        "action-spectacle",
        "satire-dark-comedy"
      ],
      "synopsis": "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnar\u00f6k, the destruction of his world, at the hands of the powerful and ruthless villain Hela.",
      "tags": [
        "cosmic-comedy",
        "box-office-smash"
      ],
      "trailerYoutubeId": "ue80QwXMRHg",
      "poster": "./posters/thor-ragnarok.jpg"
    },
    {
      "id": "the-princess-bride",
      "title": "The Princess Bride",
      "year": 1987,
      "director": "Rob Reiner",
      "rating": 8,
      "rank": 168,
      "runtime": "98 min",
      "genreIds": [
        "fantasy-epics",
        "satire-dark-comedy"
      ],
      "synopsis": "A bedridden boy's grandfather reads him the story of a farmboy-turned-pirate who encounters numerous obstacles, enemies and allies in his quest to be reunited with his true love.",
      "tags": [
        "cult-classic",
        "all-time-masterpiece",
        "swashbuckler"
      ],
      "trailerYoutubeId": "O3CIXEAjcc8",
      "poster": "./posters/the-princess-bride.jpg"
    },
    {
      "id": "pulp-fiction",
      "title": "Pulp Fiction",
      "year": 1994,
      "director": "Quentin Tarantino",
      "rating": 8.8,
      "rank": 169,
      "runtime": "154 min",
      "genreIds": [
        "neo-noir",
        "satire-dark-comedy"
      ],
      "synopsis": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      "tags": [
        "palme-dor",
        "oscar-winner",
        "cult-classic",
        "non-linear"
      ],
      "trailerYoutubeId": "s7EdQ4FqbhY",
      "poster": "./posters/pulp-fiction.jpg"
    },
    {
      "id": "no-country-for-old-men",
      "title": "No Country for Old Men",
      "year": 2007,
      "director": "Ethan Coen, Joel Coen",
      "rating": 8.2,
      "rank": 170,
      "runtime": "122 min",
      "genreIds": [
        "neo-noir",
        "mind-bending"
      ],
      "synopsis": "Violence and mayhem ensue after a hunter stumbles upon the aftermath of a drug deal gone wrong and over two million dollars in cash near the Rio Grande.",
      "tags": [
        "oscar-winner",
        "dark-and-gritty",
        "existential-dread",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "38A__WT3-o0",
      "poster": "./posters/no-country-for-old-men.jpg"
    },
    {
      "id": "drive",
      "title": "Drive",
      "year": 2011,
      "director": "Nicolas Winding Refn",
      "rating": 7.8,
      "rank": 171,
      "runtime": "100 min",
      "genreIds": [
        "neo-noir",
        "action-spectacle"
      ],
      "synopsis": "A mysterious Hollywood action film stuntman gets in trouble with gangsters when he tries to help his neighbor's husband rob a pawn shop while serving as his getaway driver.",
      "tags": [
        "hyper-stylized",
        "cult-classic",
        "neo-noir"
      ],
      "trailerYoutubeId": "KBiOF3y1W0Y",
      "poster": "./posters/drive.jpg"
    },
    {
      "id": "l-a-confidential",
      "title": "L.A. Confidential",
      "year": 1997,
      "director": "Curtis Hanson",
      "rating": 8.2,
      "rank": 172,
      "runtime": "138 min",
      "genreIds": [
        "neo-noir",
        "mystery-whodunit"
      ],
      "synopsis": "As corruption grows in 1950s Los Angeles, three policemen - one strait-laced, one brutal, and one sleazy - investigate a series of murders with their own brand of justice.",
      "tags": [
        "oscar-winner",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "6sOXrY5yV4g",
      "poster": "./posters/l-a-confidential.jpg"
    },
    {
      "id": "chinatown",
      "title": "Chinatown",
      "year": 1974,
      "director": "Roman Polanski",
      "rating": 8.1,
      "rank": 173,
      "runtime": "130 min",
      "genreIds": [
        "neo-noir",
        "mystery-whodunit"
      ],
      "synopsis": "A private detective hired to expose an adulterer in 1930s Los Angeles finds himself caught up in a web of deceit, corruption, and murder.",
      "tags": [
        "oscar-winner",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "T37QkBc4IGY",
      "poster": "./posters/chinatown.jpg"
    },
    {
      "id": "scarface",
      "title": "Scarface",
      "year": 1983,
      "director": "Brian De Palma",
      "rating": 8.3,
      "rank": 174,
      "runtime": "170 min",
      "genreIds": [
        "neo-noir",
        "action-spectacle"
      ],
      "synopsis": "In the 1980s, a determined criminal-minded Cuban immigrant becomes the biggest drug smuggler in Miami, and is eventually undone by his own drug addiction.",
      "tags": [
        "cult-classic",
        "hyper-stylized"
      ],
      "trailerYoutubeId": "cv276Wg3e7I",
      "poster": "./posters/scarface.jpg"
    },
    {
      "id": "goodfellas",
      "title": "GoodFellas",
      "year": 1990,
      "director": "Martin Scorsese",
      "rating": 8.7,
      "rank": 175,
      "runtime": "145 min",
      "genreIds": [
        "neo-noir",
        "biopic-epics"
      ],
      "synopsis": "The story of Henry Hill and his life in the mafia, covering his relationship with his wife Karen and his mob partners Jimmy Conway and Tommy DeVito.",
      "tags": [
        "oscar-winner",
        "critics-masterpiece",
        "all-time-masterpiece"
      ],
      "trailerYoutubeId": "2ilzidi_J8Q",
      "poster": "./posters/goodfellas.jpg"
    },
    {
      "id": "the-godfather",
      "title": "The Godfather",
      "year": 1972,
      "director": "Francis Ford Coppola",
      "rating": 9.2,
      "rank": 176,
      "runtime": "175 min",
      "genreIds": [
        "neo-noir",
        "biopic-epics"
      ],
      "synopsis": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      "tags": [
        "oscar-winner",
        "all-time-masterpiece",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "UaVTIH8mujA",
      "poster": "./posters/the-godfather.jpg"
    },
    {
      "id": "the-godfather-part-ii",
      "title": "The Godfather Part II",
      "year": 1974,
      "director": "Francis Ford Coppola",
      "rating": 9,
      "rank": 177,
      "runtime": "202 min",
      "genreIds": [
        "neo-noir",
        "biopic-epics"
      ],
      "synopsis": "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
      "tags": [
        "oscar-winner",
        "all-time-masterpiece",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "tF_v4ZZkQWE",
      "poster": "./posters/the-godfather-part-ii.jpg"
    },
    {
      "id": "the-departed",
      "title": "The Departed",
      "year": 2006,
      "director": "Martin Scorsese",
      "rating": 8.5,
      "rank": 178,
      "runtime": "151 min",
      "genreIds": [
        "neo-noir",
        "action-spectacle"
      ],
      "synopsis": "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
      "tags": [
        "oscar-winner",
        "dark-and-gritty",
        "box-office-smash"
      ],
      "trailerYoutubeId": "iojhqm0JTW4",
      "poster": "./posters/the-departed.jpg"
    },
    {
      "id": "fargo",
      "title": "Fargo",
      "year": 1996,
      "director": "Joel Coen, Ethan Coen",
      "rating": 8.1,
      "rank": 179,
      "runtime": "98 min",
      "genreIds": [
        "neo-noir",
        "satire-dark-comedy",
        "mystery-whodunit"
      ],
      "synopsis": "A car salesman's inept crime falls apart due to his and his henchmen's bungling and the persistent police work of a dogged detective.",
      "tags": [
        "oscar-winner",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "ju75Sd4yAZw",
      "poster": "./posters/fargo.jpg"
    },
    {
      "id": "casino",
      "title": "Casino",
      "year": 1995,
      "director": "Martin Scorsese",
      "rating": 8.2,
      "rank": 180,
      "runtime": "178 min",
      "genreIds": [
        "neo-noir",
        "biopic-epics"
      ],
      "synopsis": "In Las Vegas, two best friends--a casino executive and a Mafia enforcer--compete for a gambling empire and a fast-living, fast-loving socialite.",
      "tags": [
        "mob-epic",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "EJXDMwGWhoA",
      "poster": "./posters/casino.jpg"
    },
    {
      "id": "catch-me-if-you-can",
      "title": "Catch Me If You Can",
      "year": 2002,
      "director": "Steven Spielberg",
      "rating": 8.1,
      "rank": 181,
      "runtime": "141 min",
      "genreIds": [
        "neo-noir",
        "biopic-epics"
      ],
      "synopsis": "A runaway teenager lives an exciting life by forging checks and impersonating several professions, but his fraudulent activities soon attract the attention of the FBI.",
      "tags": [
        "con-artist",
        "box-office-smash",
        "catchy"
      ],
      "trailerYoutubeId": "s-7pyIxz8Qg",
      "poster": "./posters/catch-me-if-you-can.jpg"
    },
    {
      "id": "american-gangster",
      "title": "American Gangster",
      "year": 2007,
      "director": "Ridley Scott",
      "rating": 7.8,
      "rank": 182,
      "runtime": "157 min",
      "genreIds": [
        "neo-noir",
        "biopic-epics"
      ],
      "synopsis": "An outcast New York City cop is charged with bringing down Harlem drug lord Frank Lucas.",
      "tags": [
        "crime-kingpin",
        "box-office-smash"
      ],
      "trailerYoutubeId": "BV_nssS6Zkg",
      "poster": "./posters/american-gangster.jpg"
    },
    {
      "id": "donnie-brasco",
      "title": "Donnie Brasco",
      "year": 1997,
      "director": "Mike Newell",
      "rating": 7.7,
      "rank": 183,
      "runtime": "127 min",
      "genreIds": [
        "neo-noir",
        "biopic-epics"
      ],
      "synopsis": "An FBI undercover agent infiltrates the mob and finds himself identifying more with the Mafia life--at the expense of his regular one.",
      "tags": [
        "undercover-mob",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "omIiE9KKj2o",
      "poster": "./posters/donnie-brasco.jpg"
    },
    {
      "id": "wind-river",
      "title": "Wind River",
      "year": 2017,
      "director": "Taylor Sheridan",
      "rating": 7.7,
      "rank": 184,
      "runtime": "107 min",
      "genreIds": [
        "neo-noir",
        "mystery-whodunit"
      ],
      "synopsis": "A wildlife officer helps a rookie FBI agent investigate the murder of a young woman on an American Indian reservation in Wyoming.",
      "tags": [
        "snow-western",
        "gritty-realism"
      ],
      "trailerYoutubeId": "W7V9Fsll5qM",
      "poster": "./posters/wind-river.jpg"
    },
    {
      "id": "hell-or-high-water",
      "title": "Hell or High Water",
      "year": 2016,
      "director": "David Mackenzie",
      "rating": 7.6,
      "rank": 185,
      "runtime": "102 min",
      "genreIds": [
        "neo-noir",
        "action-spectacle"
      ],
      "synopsis": "A divorced father and his ex-con brother plan a series of heists against the bank that's about to foreclose on their family ranch.",
      "tags": [
        "bank-heist",
        "modern-western",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "JQoqsKoJVDw",
      "poster": "./posters/hell-or-high-water.jpg"
    },
    {
      "id": "reservoir-dogs",
      "title": "Reservoir Dogs",
      "year": 1992,
      "director": "Quentin Tarantino",
      "rating": 8.2,
      "rank": 186,
      "runtime": "99 min",
      "genreIds": [
        "neo-noir",
        "action-spectacle"
      ],
      "synopsis": "When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
      "tags": [
        "heist-aftermath",
        "cult-classic",
        "indie-legend"
      ],
      "trailerYoutubeId": "vayksn4Y93A",
      "poster": "./posters/reservoir-dogs.jpg"
    },
    {
      "id": "the-usual-suspects",
      "title": "The Usual Suspects",
      "year": 1995,
      "director": "Bryan Singer",
      "rating": 8.5,
      "rank": 187,
      "runtime": "106 min",
      "genreIds": [
        "neo-noir",
        "mystery-whodunit"
      ],
      "synopsis": "The sole survivor of a pier shoot-out tells the story of how a notorious criminal influenced the events that began with five criminals meeting in a seemingly random police lineup.",
      "tags": [
        "oscar-winner",
        "twist-ending",
        "cult-classic"
      ],
      "trailerYoutubeId": "Q0eCiCinc4E",
      "poster": "./posters/the-usual-suspects.jpg"
    },
    {
      "id": "training-day",
      "title": "Training Day",
      "year": 2001,
      "director": "Antoine Fuqua",
      "rating": 7.8,
      "rank": 188,
      "runtime": "122 min",
      "genreIds": [
        "neo-noir",
        "action-spectacle"
      ],
      "synopsis": "A rookie cop spends his first day as a Los Angeles narcotics officer with a rogue detective who isn't what he appears to be.",
      "tags": [
        "oscar-winner",
        "corrupt-cop",
        "dark-and-gritty"
      ],
      "trailerYoutubeId": "DXPJqRtkDP0",
      "poster": "./posters/training-day.jpg"
    },
    {
      "id": "city-of-god",
      "title": "City of God",
      "year": 2004,
      "director": "K\u00e1tia Lund, Fernando Meirelles",
      "rating": 8.6,
      "rank": 189,
      "runtime": "130 min",
      "genreIds": [
        "neo-noir",
        "biopic-epics"
      ],
      "synopsis": "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
      "tags": [
        "favela-saga",
        "critics-masterpiece",
        "hyper-stylized"
      ],
      "trailerYoutubeId": "S42Hl1V9lLw",
      "poster": "./posters/city-of-god.jpg"
    },
    {
      "id": "apollo-13",
      "title": "Apollo 13",
      "year": 1995,
      "director": "Ron Howard",
      "rating": 7.7,
      "rank": 190,
      "runtime": "140 min",
      "genreIds": [
        "space-exploration",
        "biopic-epics"
      ],
      "synopsis": "NASA must devise a strategy to return Apollo 13 to Earth safely after the spacecraft undergoes massive internal damage putting the lives of the three astronauts on board in jeopardy.",
      "tags": [
        "oscar-winner",
        "nasa-history",
        "box-office-smash"
      ],
      "trailerYoutubeId": "KtEIMC58sZo",
      "poster": "./posters/apollo-13.jpg"
    },
    {
      "id": "the-martian",
      "title": "The Martian",
      "year": 2015,
      "director": "Ridley Scott",
      "rating": 8,
      "rank": 191,
      "runtime": "144 min",
      "genreIds": [
        "space-exploration",
        "sci-fi"
      ],
      "synopsis": "An astronaut stranded on Mars must rely on his ingenuity to survive and arrange a potential rescue.",
      "tags": [
        "oscar-winner",
        "box-office-smash",
        "survival"
      ],
      "trailerYoutubeId": "ej3ioOneTy8",
      "poster": "./posters/the-martian.jpg"
    },
    {
      "id": "first-man",
      "title": "First Man",
      "year": 2018,
      "director": "Damien Chazelle",
      "rating": 7.3,
      "rank": 192,
      "runtime": "141 min",
      "genreIds": [
        "space-exploration",
        "biopic-epics"
      ],
      "synopsis": "A look back at the life of astronaut Neil Armstrong and the legendary space mission that led him to become the first man to walk on the Moon on July 20, 1969.",
      "tags": [
        "oscar-winner",
        "nasa-history",
        "atmospheric"
      ],
      "trailerYoutubeId": "PSoRx87OO6k",
      "poster": "./posters/first-man.jpg"
    },
    {
      "id": "sunshine",
      "title": "Sunshine",
      "year": 2007,
      "director": "Danny Boyle",
      "rating": 7.2,
      "rank": 193,
      "runtime": "107 min",
      "genreIds": [
        "space-exploration",
        "sci-fi",
        "modern-horror"
      ],
      "synopsis": "A team of international astronauts is sent on a dangerous mission to reignite the dying Sun with a nuclear fission bomb in 2057.",
      "tags": [
        "cult-classic",
        "visual-spectacle",
        "atmospheric"
      ],
      "trailerYoutubeId": "FetfR0vQvd4",
      "poster": "./posters/sunshine.jpg"
    },
    {
      "id": "moon",
      "title": "Moon",
      "year": 2009,
      "director": "Duncan Jones",
      "rating": 7.8,
      "rank": 194,
      "runtime": "97 min",
      "genreIds": [
        "space-exploration",
        "sci-fi",
        "mind-bending"
      ],
      "synopsis": "Astronaut Sam Bell has a personal encounter toward the end of his three-year stint on the Moon, where he, working alongside his computer, GERTY, sends home a resource that has helped diminish Earth's power problems.",
      "tags": [
        "cult-classic",
        "philosophical",
        "ai-consciousness"
      ],
      "trailerYoutubeId": "WWoDBcSW4_c",
      "poster": "./posters/moon.jpg"
    },
    {
      "id": "ad-astra",
      "title": "Ad Astra",
      "year": 2019,
      "director": "James Gray",
      "rating": 6.5,
      "rank": 195,
      "runtime": "123 min",
      "genreIds": [
        "space-exploration",
        "sci-fi"
      ],
      "synopsis": "An astronaut embarks on a space mission to investigate a threat to the universe and uncover the truth about his father who disappeared thirty years ago.",
      "tags": [
        "atmospheric",
        "philosophical",
        "visual-spectacle"
      ],
      "trailerYoutubeId": "P6AaSMfXHbA",
      "poster": "./posters/ad-astra.jpg"
    },
    {
      "id": "europa-report",
      "title": "Europa Report",
      "year": 2013,
      "director": "Sebasti\u00e1n Cordero",
      "rating": 6.4,
      "rank": 196,
      "runtime": "90 min",
      "genreIds": [
        "space-exploration",
        "sci-fi",
        "modern-horror"
      ],
      "synopsis": "An international crew of astronauts undertakes a privately funded mission to search for life on Jupiter's fourth largest moon.",
      "tags": [
        "found-footage",
        "deep-space"
      ],
      "trailerYoutubeId": "XhdRYk1Y8VA",
      "poster": "./posters/europa-report.jpg"
    },
    {
      "id": "hidden-figures",
      "title": "Hidden Figures",
      "year": 2017,
      "director": "Theodore Melfi",
      "rating": 7.8,
      "rank": 197,
      "runtime": "127 min",
      "genreIds": [
        "space-exploration",
        "biopic-epics"
      ],
      "synopsis": "Three female African-American mathematicians play a pivotal role in astronaut John Glenn's launch into orbit while dealing with racial and gender discrimination.",
      "tags": [
        "nasa-history",
        "oscar-nominee",
        "inspiring"
      ],
      "trailerYoutubeId": "5wfrDhgUMGI",
      "poster": "./posters/hidden-figures.jpg"
    },
    {
      "id": "life",
      "title": "Life",
      "year": 2017,
      "director": "Daniel Espinosa",
      "rating": 6.6,
      "rank": 198,
      "runtime": "104 min",
      "genreIds": [
        "space-exploration",
        "modern-horror",
        "sci-fi"
      ],
      "synopsis": "A team of scientists aboard the ISS discover a rapidly evolving Martian predator that needs to be kept away from Earth at all costs.",
      "tags": [
        "alien-organism",
        "survival",
        "high-tension"
      ],
      "trailerYoutubeId": "LeLsJfGmY_Y",
      "poster": "./posters/life.jpg"
    },
    {
      "id": "star-trek",
      "title": "Star Trek",
      "year": 2009,
      "director": "J.J. Abrams",
      "rating": 7.9,
      "rank": 199,
      "runtime": "127 min",
      "genreIds": [
        "space-exploration",
        "sci-fi",
        "action-spectacle"
      ],
      "synopsis": "The brash James T. Kirk tries to live up to his father's legacy with Mr. Spock keeping him in check as a vengeful Romulan from the future creates black holes to destroy the Federation one planet at a time.",
      "tags": [
        "reboot-epic",
        "box-office-smash"
      ],
      "trailerYoutubeId": "pKFUZ10Wmbw",
      "poster": "./posters/star-trek.jpg"
    },
    {
      "id": "guardians-of-the-galaxy",
      "title": "Guardians of the Galaxy",
      "year": 2014,
      "director": "James Gunn",
      "rating": 8,
      "rank": 200,
      "runtime": "121 min",
      "genreIds": [
        "space-exploration",
        "sci-fi",
        "action-spectacle"
      ],
      "synopsis": "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
      "tags": [
        "cosmic-comedy",
        "box-office-smash",
        "retro-mix"
      ],
      "trailerYoutubeId": "d96cjJhvlMA",
      "poster": "./posters/guardians-of-the-galaxy.jpg"
    },
    {
      "id": "knives-out",
      "title": "Knives Out",
      "year": 2019,
      "director": "Rian Johnson",
      "rating": 7.9,
      "rank": 201,
      "runtime": "130 min",
      "genreIds": [
        "mystery-whodunit",
        "satire-dark-comedy"
      ],
      "synopsis": "When renowned crime novelist Harlan Thrombey is found dead at his estate just after his 85th birthday, the inquisitive and debonair Detective Benoit Blanc is mysteriously enlisted to investigate.",
      "tags": [
        "box-office-smash",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "qGqiHJTsRkQ",
      "poster": "./posters/knives-out.jpg"
    },
    {
      "id": "glass-onion",
      "title": "Glass Onion",
      "year": 2022,
      "director": "Rian Johnson",
      "rating": 7.1,
      "rank": 202,
      "runtime": "139 min",
      "genreIds": [
        "mystery-whodunit",
        "satire-dark-comedy"
      ],
      "synopsis": "Tech billionaire Miles Bron invites his friends for a getaway on his private Greek island. When someone turns up dead, Detective Benoit Blanc is put on the case.",
      "tags": [
        "critics-masterpiece",
        "hyper-stylized"
      ],
      "trailerYoutubeId": "gj5ibYSz8C0",
      "poster": "./posters/glass-onion.jpg"
    },
    {
      "id": "clue",
      "title": "Clue",
      "year": 1985,
      "director": "Jonathan Lynn",
      "rating": 7.3,
      "rank": 203,
      "runtime": "94 min",
      "genreIds": [
        "mystery-whodunit",
        "satire-dark-comedy"
      ],
      "synopsis": "Six guests are anonymously invited to a strange mansion for dinner, but after their host is killed, they must cooperate with the staff to identify the murderer as the bodies pile up.",
      "tags": [
        "cult-classic",
        "ensemble-slapstick"
      ],
      "trailerYoutubeId": "KEXdWfsKZ1k",
      "poster": "./posters/clue.jpg"
    },
    {
      "id": "murder-on-the-orient-express",
      "title": "Murder on the Orient Express",
      "year": 2017,
      "director": "Kenneth Branagh",
      "rating": 6.5,
      "rank": 204,
      "runtime": "114 min",
      "genreIds": [
        "mystery-whodunit"
      ],
      "synopsis": "When a murder occurs aboard the train on which he's travelling, celebrated Belgian detective Hercule Poirot is recruited to solve the case.",
      "tags": [
        "agatha-christie",
        "ensemble-cast"
      ],
      "trailerYoutubeId": "Mq4m3yAoW8E",
      "poster": "./posters/murder-on-the-orient-express.jpg"
    },
    {
      "id": "death-on-the-nile",
      "title": "Death on the Nile",
      "year": 2022,
      "director": "Kenneth Branagh",
      "rating": 6.3,
      "rank": 205,
      "runtime": "127 min",
      "genreIds": [
        "mystery-whodunit"
      ],
      "synopsis": "While on vacation on the Nile, Hercule Poirot must investigate the murder of a young heiress.",
      "tags": [
        "agatha-christie",
        "exotic-mystery"
      ],
      "trailerYoutubeId": "dZRqB0JLizw",
      "poster": "./posters/death-on-the-nile.jpg"
    },
    {
      "id": "the-girl-with-the-dragon-tattoo",
      "title": "The Girl with the Dragon Tattoo",
      "year": 2011,
      "director": "David Fincher",
      "rating": 7.8,
      "rank": 206,
      "runtime": "158 min",
      "genreIds": [
        "mystery-whodunit",
        "neo-noir"
      ],
      "synopsis": "Journalist Mikael Blomkvist is aided by eccentric hacker Lisbeth Salander in his search for a woman who has been missing for 40 years.",
      "tags": [
        "fincher-procedural",
        "dark-and-gritty"
      ],
      "trailerYoutubeId": "DqQe3OrsMKI",
      "poster": "./posters/the-girl-with-the-dragon-tattoo.jpg"
    },
    {
      "id": "missing",
      "title": "Missing",
      "year": 2023,
      "director": "Nicholas D. Johnson, Will Merrick",
      "rating": 7.1,
      "rank": 207,
      "runtime": "111 min",
      "genreIds": [
        "mystery-whodunit"
      ],
      "synopsis": "When her mother disappears while on vacation in Colombia with her new boyfriend, June's search for answers is hindered by international red tape. However, as she digs deeper, her digital sleuthing soon raises more questions than a...",
      "tags": [
        "screen-life",
        "twist-ending"
      ],
      "trailerYoutubeId": "seBixtcx19E",
      "poster": "./posters/missing.jpg"
    },
    {
      "id": "mystic-river",
      "title": "Mystic River",
      "year": 2003,
      "director": "Clint Eastwood",
      "rating": 7.9,
      "rank": 208,
      "runtime": "138 min",
      "genreIds": [
        "mystery-whodunit",
        "neo-noir"
      ],
      "synopsis": "The tragic murder of a 19-year-old girl reunites three childhood friends still living in Boston--the victim's gangster father, a detective, and the disturbed man they both suspect of killing her.",
      "tags": [
        "oscar-winner",
        "tragic-mystery"
      ],
      "trailerYoutubeId": "W7NktJhrRYQ",
      "poster": "./posters/mystic-river.jpg"
    },
    {
      "id": "groundhog-day",
      "title": "Groundhog Day",
      "year": 1993,
      "director": "Harold Ramis",
      "rating": 8,
      "rank": 209,
      "runtime": "101 min",
      "genreIds": [
        "time-travel",
        "satire-dark-comedy"
      ],
      "synopsis": "A curmudgeonly weatherman finds himself stuck in a time loop and is forced to relive the same day over and over again.",
      "tags": [
        "cult-classic",
        "all-time-masterpiece",
        "time-loop"
      ],
      "trailerYoutubeId": "GncQtURdcE4",
      "poster": "./posters/groundhog-day.jpg"
    },
    {
      "id": "about-time",
      "title": "About Time",
      "year": 2013,
      "director": "Richard Curtis",
      "rating": 7.8,
      "rank": 210,
      "runtime": "123 min",
      "genreIds": [
        "time-travel"
      ],
      "synopsis": "At the age of 21, Tim discovers he can travel in time and change what happens and has happened in his own life. His decision to make his world a better place by getting a girlfriend turns out not to be as easy as you might think.",
      "tags": [
        "emotional-epic",
        "time-loop"
      ],
      "trailerYoutubeId": "7OIFdWk83no",
      "poster": "./posters/about-time.jpg"
    },
    {
      "id": "source-code",
      "title": "Source Code",
      "year": 2011,
      "director": "Duncan Jones",
      "rating": 7.5,
      "rank": 211,
      "runtime": "93 min",
      "genreIds": [
        "time-travel",
        "sci-fi",
        "mind-bending"
      ],
      "synopsis": "A soldier wakes up in someone else's body and discovers he's part of an experimental government program to find the bomber of a commuter train within 8 minutes.",
      "tags": [
        "time-loop",
        "high-octane"
      ],
      "trailerYoutubeId": "i71eXpmkZBY",
      "poster": "./posters/source-code.jpg"
    },
    {
      "id": "palm-springs",
      "title": "Palm Springs",
      "year": 2020,
      "director": "Max Barbakow",
      "rating": 7.4,
      "rank": 212,
      "runtime": "90 min",
      "genreIds": [
        "time-travel",
        "satire-dark-comedy"
      ],
      "synopsis": "Nyles and Sarah find themselves stuck in a time loop and living the same day over and over again. They are drawn to each other, but certain revelations threaten their budding romance.",
      "tags": [
        "time-loop",
        "indie-comedy"
      ],
      "trailerYoutubeId": "CpBLtXduh_k",
      "poster": "./posters/palm-springs.jpg"
    },
    {
      "id": "harry-potter-and-the-prisoner-of-azkaban",
      "title": "Harry Potter and the Prisoner of Azkaban",
      "year": 2004,
      "director": "Alfonso Cuar\u00f3n",
      "rating": 7.9,
      "rank": 213,
      "runtime": "142 min",
      "genreIds": [
        "time-travel",
        "fantasy-epics"
      ],
      "synopsis": "Harry Potter, Ron and Hermione return to Hogwarts School of Witchcraft and Wizardry for their third year of study, where they delve into the mystery surrounding an escaped prisoner who poses a dangerous threat to the young wizard.",
      "tags": [
        "time-turner",
        "dark-fairytale",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "1ZdlAg3j8nI",
      "poster": "./posters/harry-potter-and-the-prisoner-of-azkaban.jpg"
    },
    {
      "id": "crouching-tiger-hidden-dragon",
      "title": "Crouching Tiger, Hidden Dragon",
      "year": 2001,
      "director": "Ang Lee",
      "rating": 7.8,
      "rank": 214,
      "runtime": "120 min",
      "genreIds": [
        "martial-arts",
        "fantasy-epics",
        "action-spectacle"
      ],
      "synopsis": "A young Chinese warrior steals a sword from a famed swordsman and then escapes into a world of romantic adventure with a mysterious man in the frontier of the nation.",
      "tags": [
        "oscar-winner",
        "wuxia-legend",
        "visual-spectacle",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "q-HrIQLdaNE",
      "poster": "./posters/crouching-tiger-hidden-dragon.jpg"
    },
    {
      "id": "hero",
      "title": "Hero",
      "year": 2004,
      "director": "Yimou Zhang",
      "rating": 7.9,
      "rank": 215,
      "runtime": "94 min",
      "genreIds": [
        "martial-arts",
        "fantasy-epics",
        "action-spectacle"
      ],
      "synopsis": "A defense officer, Nameless, was summoned by the King of Qin regarding his success of terminating three warriors.",
      "tags": [
        "wuxia-legend",
        "hyper-stylized",
        "visual-spectacle",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "MgsddFEe9Oc",
      "poster": "./posters/hero.jpg"
    },
    {
      "id": "house-of-flying-daggers",
      "title": "House of Flying Daggers",
      "year": 2005,
      "director": "Yimou Zhang",
      "rating": 7.5,
      "rank": 216,
      "runtime": "119 min",
      "genreIds": [
        "martial-arts",
        "fantasy-epics",
        "action-spectacle"
      ],
      "synopsis": "A romantic police captain breaks a beautiful member of a rebel group out of prison to help her rejoin her fellows, but things are not what they seem.",
      "tags": [
        "wuxia-legend",
        "visual-spectacle",
        "hyper-stylized"
      ],
      "trailerYoutubeId": "-GLVaSYzAvg",
      "poster": "./posters/house-of-flying-daggers.jpg"
    },
    {
      "id": "fearless",
      "title": "Fearless",
      "year": 2006,
      "director": "Ronny Yu",
      "rating": 7.5,
      "rank": 217,
      "runtime": "104 min",
      "genreIds": [
        "martial-arts",
        "biopic-epics"
      ],
      "synopsis": "A biography of Chinese Martial Arts Master Huo Yuanjia, who is the founder and spiritual guru of the Jin Wu Sports Federation.",
      "tags": [
        "wuxia-legend",
        "martial-arts"
      ],
      "trailerYoutubeId": "W8pfFuBlwKg",
      "poster": "./posters/fearless.jpg"
    },
    {
      "id": "kung-fu-hustle",
      "title": "Kung Fu Hustle",
      "year": 2005,
      "director": "Stephen Chow",
      "rating": 7.7,
      "rank": 218,
      "runtime": "99 min",
      "genreIds": [
        "martial-arts",
        "satire-dark-comedy",
        "action-spectacle"
      ],
      "synopsis": "In Shanghai, China in the 1940s, a wannabe gangster aspires to join the notorious \"Axe Gang\" while residents of a housing complex exhibit extraordinary powers in defending their turf.",
      "tags": [
        "cult-classic",
        "hyper-stylized",
        "wuxia-legend"
      ],
      "trailerYoutubeId": "FtE9-o6dBEI",
      "poster": "./posters/kung-fu-hustle.jpg"
    },
    {
      "id": "shaolin-soccer",
      "title": "Shaolin Soccer",
      "year": 2001,
      "director": "Stephen Chow",
      "rating": 7.3,
      "rank": 219,
      "runtime": "87 min",
      "genreIds": [
        "martial-arts",
        "satire-dark-comedy"
      ],
      "synopsis": "A disgraced former soccer star joins forces with a Shaolin master and his battered brothers, turning kung fu into a weapon against a corrupt champion determined to crush their comeback.",
      "tags": [
        "cult-classic",
        "hyper-stylized"
      ],
      "trailerYoutubeId": "KEWUDWYDdYs",
      "poster": "./posters/shaolin-soccer.jpg"
    },
    {
      "id": "ong-bak-the-thai-warrior",
      "title": "Ong-Bak: The Thai Warrior",
      "year": 2005,
      "director": "Prachya Pinkaew",
      "rating": 7.2,
      "rank": 220,
      "runtime": "105 min",
      "genreIds": [
        "martial-arts",
        "action-spectacle"
      ],
      "synopsis": "When the head of a statue sacred to a village is stolen, a young martial artist goes to the big city and finds himself taking on the underworld to retrieve it.",
      "tags": [
        "practical-fx",
        "cult-classic",
        "high-octane"
      ],
      "trailerYoutubeId": "nAYUv9wjV48",
      "poster": "./posters/ong-bak-the-thai-warrior.jpg"
    },
    {
      "id": "ip-man",
      "title": "Ip Man",
      "year": 2025,
      "director": "Wilson Yip",
      "rating": 8,
      "rank": 221,
      "runtime": "106 min",
      "genreIds": [
        "martial-arts",
        "biopic-epics",
        "action-spectacle"
      ],
      "synopsis": "During the Japanese invasion of China, a wealthy martial artist is forced to leave his home when his city is occupied. With little means of providing for themselves, Ip Man and the remaining members of the city must find a way to ...",
      "tags": [
        "heroic-epic",
        "martial-arts",
        "cult-classic"
      ],
      "trailerYoutubeId": "cqlZSRvH7BU",
      "poster": "./posters/ip-man.jpg"
    },
    {
      "id": "enter-the-dragon",
      "title": "Enter the Dragon",
      "year": 1973,
      "director": "Robert Clouse",
      "rating": 7.6,
      "rank": 222,
      "runtime": "99 min",
      "genreIds": [
        "martial-arts",
        "action-spectacle"
      ],
      "synopsis": "A Shaolin monk travels to an island fortress to spy on an opium lord - who is also a former monk from his temple - under the guise of attending a martial arts tournament.",
      "tags": [
        "bruce-lee",
        "all-time-masterpiece",
        "cult-classic"
      ],
      "trailerYoutubeId": "5RGju9NuoOU",
      "poster": "./posters/enter-the-dragon.jpg"
    },
    {
      "id": "fist-of-legend",
      "title": "Fist of Legend",
      "year": 1994,
      "director": "Gordon Chan",
      "rating": 7.5,
      "rank": 223,
      "runtime": "103 min",
      "genreIds": [
        "martial-arts",
        "action-spectacle"
      ],
      "synopsis": "In 1937, a Chinese martial artist returns to Shanghai to find his teacher dead and his school harassed by the Japanese.",
      "tags": [
        "jet-li",
        "martial-arts-legend"
      ],
      "trailerYoutubeId": "zfZXiw-lgMs",
      "poster": "./posters/fist-of-legend.jpg"
    },
    {
      "id": "shadow",
      "title": "Shadow",
      "year": 2018,
      "director": "Yimou Zhang",
      "rating": 7,
      "rank": 224,
      "runtime": "116 min",
      "genreIds": [
        "martial-arts",
        "fantasy-epics",
        "neo-noir"
      ],
      "synopsis": "In a Chinese royal court, an army commander secretly trains a \"shadow\" to retake a city against the wishes of the king.",
      "tags": [
        "yin-yang-palette",
        "wuxia-legend",
        "visual-masterpiece"
      ],
      "trailerYoutubeId": "Zw3LjaZlSLM",
      "poster": "./posters/shadow.jpg"
    },
    {
      "id": "the-grandmaster",
      "title": "The Grandmaster",
      "year": 2013,
      "director": "Wong Kar-Wai",
      "rating": 6.6,
      "rank": 225,
      "runtime": "130 min",
      "genreIds": [
        "martial-arts",
        "biopic-epics",
        "neo-noir"
      ],
      "synopsis": "The story of martial-arts master Ip Man, the man who trained Bruce Lee.",
      "tags": [
        "wong-kar-wai",
        "poetic-combat",
        "oscar-nominee"
      ],
      "trailerYoutubeId": "uC5amKLgnFU",
      "poster": "./posters/the-grandmaster.jpg"
    },
    {
      "id": "police-story",
      "title": "Police Story",
      "year": 1985,
      "director": "Jackie Chan",
      "rating": 7.5,
      "rank": 226,
      "runtime": "100 min",
      "genreIds": [
        "martial-arts",
        "action-spectacle"
      ],
      "synopsis": "A virtuous Hong Kong Police Officer must clear his good name when the drug lord he is after frames him for the murder of a dirty cop.",
      "tags": [
        "jackie-chan",
        "death-defying-stunts",
        "cult-classic"
      ],
      "trailerYoutubeId": "KV4mHWyKy9c",
      "poster": "./posters/police-story.jpg"
    },
    {
      "id": "oblivion",
      "title": "Oblivion",
      "year": 2013,
      "director": "Joseph Kosinski",
      "rating": 7,
      "rank": 227,
      "runtime": "124 min",
      "genreIds": [
        "sci-fi",
        "post-apocalyptic",
        "action-spectacle"
      ],
      "synopsis": "A stranger's arrival triggers one man's battle to save mankind.",
      "tags": [
        "dystopian",
        "visual-spectacle",
        "clone"
      ],
      "trailerYoutubeId": "tx6_JMDFfWI",
      "poster": "./posters/oblivion.jpg"
    },
    {
      "id": "i-am-legend",
      "title": "I Am Legend",
      "year": 2007,
      "director": "Francis Lawrence",
      "rating": 7.2,
      "rank": 228,
      "runtime": "101 min",
      "genreIds": [
        "sci-fi",
        "post-apocalyptic",
        "modern-horror"
      ],
      "synopsis": "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
      "tags": [
        "survival-horror",
        "dystopian",
        "last-man"
      ],
      "trailerYoutubeId": "dtKMEAXyPkg",
      "poster": "./posters/i-am-legend.jpg"
    },
    {
      "id": "war-of-the-worlds",
      "title": "War of the Worlds",
      "year": 2005,
      "director": "Steven Spielberg",
      "rating": 6.6,
      "rank": 229,
      "runtime": "117 min",
      "genreIds": [
        "sci-fi",
        "post-apocalyptic",
        "action-spectacle"
      ],
      "synopsis": "An alien invasion threatens the future of humanity. The catastrophic nightmare is depicted through the eyes of one American family fighting for survival.",
      "tags": [
        "alien-invasion",
        "survival",
        "high-tension"
      ],
      "trailerYoutubeId": "SM6aEEjc5hA",
      "poster": "./posters/war-of-the-worlds.jpg"
    },
    {
      "id": "the-abyss",
      "title": "The Abyss",
      "year": 1989,
      "director": "James Cameron",
      "rating": 7.5,
      "rank": 230,
      "runtime": "140 min",
      "genreIds": [
        "sci-fi",
        "space-exploration",
        "action-spectacle"
      ],
      "synopsis": "A civilian diving team is enlisted to search for a lost nuclear submarine and faces danger while encountering an alien aquatic species.",
      "tags": [
        "deep-sea",
        "practical-fx",
        "alien-encounter"
      ],
      "trailerYoutubeId": "7cCVYAcIIAo",
      "poster": "./posters/the-abyss.jpg"
    },
    {
      "id": "world-war-z",
      "title": "World War Z",
      "year": 2013,
      "director": "Marc Forster",
      "rating": 7,
      "rank": 231,
      "runtime": "116 min",
      "genreIds": [
        "action-spectacle",
        "post-apocalyptic",
        "modern-horror"
      ],
      "synopsis": "Former United Nations employee Gerry Lane traverses the world in a race against time to stop a zombie pandemic that is toppling armies and governments and threatens to destroy humanity itself.",
      "tags": [
        "zombie-horde",
        "global-pandemic",
        "high-octane"
      ],
      "trailerYoutubeId": "Md6Dvxdr0AQ",
      "poster": "./posters/world-war-z.jpg"
    },
    {
      "id": "event-horizon",
      "title": "Event Horizon",
      "year": 1997,
      "director": "Paul W.S. Anderson",
      "rating": 6.6,
      "rank": 232,
      "runtime": "96 min",
      "genreIds": [
        "sci-fi",
        "space-exploration",
        "modern-horror"
      ],
      "synopsis": "A rescue crew is tasked with investigating the mysterious reappearance of a spaceship that had been lost for seven years.",
      "tags": [
        "cosmic-dread",
        "deep-space",
        "cult-classic"
      ],
      "trailerYoutubeId": "2nlkEY-3CMI",
      "poster": "./posters/event-horizon.jpg"
    },
    {
      "id": "close-encounters-of-the-third-kind",
      "title": "Close Encounters of the Third Kind",
      "year": 1977,
      "director": "Steven Spielberg",
      "rating": 7.6,
      "rank": 233,
      "runtime": "138 min",
      "genreIds": [
        "sci-fi",
        "space-exploration"
      ],
      "synopsis": "An Indiana electric lineman finds his quiet and ordinary daily life turned upside down after a close encounter with a UFO, spurring him to an obsessed cross-country quest for answers as a momentous event approaches.",
      "tags": [
        "first-contact",
        "oscar-winner",
        "all-time-masterpiece"
      ],
      "trailerYoutubeId": "dSpQ3G08k48",
      "poster": "./posters/close-encounters-of-the-third-kind.jpg"
    },
    {
      "id": "the-road",
      "title": "The Road",
      "year": 2009,
      "director": "John Hillcoat",
      "rating": 7.2,
      "rank": 234,
      "runtime": "111 min",
      "genreIds": [
        "post-apocalyptic",
        "sci-fi"
      ],
      "synopsis": "In a dangerous post-apocalyptic world, an ailing father defends his son as they slowly travel to the sea.",
      "tags": [
        "bleak-realism",
        "father-son",
        "survival"
      ],
      "trailerYoutubeId": "oofRyiatr5I",
      "poster": "./posters/the-road.jpg"
    },
    {
      "id": "the-book-of-eli",
      "title": "The Book of Eli",
      "year": 2010,
      "director": "Albert Hughes, Allen Hughes",
      "rating": 6.8,
      "rank": 235,
      "runtime": "118 min",
      "genreIds": [
        "post-apocalyptic",
        "action-spectacle",
        "martial-arts"
      ],
      "synopsis": "A drifter fights his way across a ravaged, post-apocalyptic America while protecting a sacred book that holds the secrets to humanity's salvation.",
      "tags": [
        "wasteland-wanderer",
        "faith",
        "gun-fu"
      ],
      "trailerYoutubeId": "zSMHmtaoXtI",
      "poster": "./posters/the-book-of-eli.jpg"
    },
    {
      "id": "pitch-black",
      "title": "Pitch Black",
      "year": 2000,
      "director": "David Twohy",
      "rating": 7,
      "rank": 236,
      "runtime": "109 min",
      "genreIds": [
        "sci-fi",
        "space-exploration",
        "modern-horror",
        "action-spectacle"
      ],
      "synopsis": "A transport ship crashes and leaves its crew stranded on a desert planet inhabited by bloodthirsty creatures that come out during an eclipse.",
      "tags": [
        "creature-feature",
        "riddick",
        "cult-classic"
      ],
      "trailerYoutubeId": "fIeSV4i7bxQ",
      "poster": "./posters/pitch-black.jpg"
    },
    {
      "id": "the-dark-knight-rises",
      "title": "The Dark Knight Rises",
      "year": 2012,
      "director": "Christopher Nolan",
      "rating": 8.4,
      "rank": 237,
      "runtime": "164 min",
      "genreIds": [
        "action-spectacle",
        "neo-noir"
      ],
      "synopsis": "Bane, an imposing terrorist, attacks Gotham City and disrupts its eight-year-long period of peace. This forces Bruce Wayne to come out of hiding and don the cape and cowl of Batman again.",
      "tags": [
        "superhero-epic",
        "box-office-smash",
        "vengeance"
      ],
      "trailerYoutubeId": "GokKUqLcvD8",
      "poster": "./posters/the-dark-knight-rises.jpg"
    },
    {
      "id": "batman-begins",
      "title": "Batman Begins",
      "year": 2005,
      "director": "Christopher Nolan",
      "rating": 8.2,
      "rank": 238,
      "runtime": "140 min",
      "genreIds": [
        "action-spectacle",
        "neo-noir",
        "martial-arts"
      ],
      "synopsis": "After witnessing his parents' death, billionaire Bruce Wayne learns the art of fighting to confront injustice. When he returns to Gotham as Batman, he must stop a secret society that intends to destroy the city.",
      "tags": [
        "origin-story",
        "ninja-training",
        "dark-and-gritty"
      ],
      "trailerYoutubeId": "neY2xVmOfUM",
      "poster": "./posters/batman-begins.jpg"
    },
    {
      "id": "the-batman",
      "title": "The Batman",
      "year": 2022,
      "director": "Matt Reeves",
      "rating": 7.8,
      "rank": 239,
      "runtime": "176 min",
      "genreIds": [
        "neo-noir",
        "mystery-whodunit",
        "action-spectacle"
      ],
      "synopsis": "When a sadistic serial killer begins murdering key political figures in Gotham, the Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
      "tags": [
        "gothic-noir",
        "detective-procedural",
        "dark-and-gritty"
      ],
      "trailerYoutubeId": "mqqft2x_Aa4",
      "poster": "./posters/the-batman.jpg"
    },
    {
      "id": "mission-impossible-rogue-nation",
      "title": "Mission: Impossible - Rogue Nation",
      "year": 2015,
      "director": "Christopher McQuarrie",
      "rating": 7.4,
      "rank": 240,
      "runtime": "131 min",
      "genreIds": [
        "action-spectacle"
      ],
      "synopsis": "Ethan and his team take on their most impossible mission yet when they have to eradicate an international rogue organization as highly skilled as they are and committed to destroying the IMF.",
      "tags": [
        "practical-fx",
        "high-octane",
        "espionage"
      ],
      "trailerYoutubeId": "gOW_azQbOjw",
      "poster": "./posters/mission-impossible-rogue-nation.jpg"
    },
    {
      "id": "mission-impossible-dead-reckoning-part-one",
      "title": "Mission: Impossible - Dead Reckoning Part One",
      "year": 2023,
      "director": "Christopher McQuarrie",
      "rating": 7.6,
      "rank": 241,
      "runtime": "163 min",
      "genreIds": [
        "action-spectacle",
        "cyberpunk"
      ],
      "synopsis": "Ethan Hunt and his IMF team must track down a terrifying new weapon that threatens all of humanity.",
      "tags": [
        "ai-threat",
        "death-defying-stunts",
        "high-octane"
      ],
      "trailerYoutubeId": "avz06PDqDbM",
      "poster": "./posters/mission-impossible-dead-reckoning-part-one.jpg"
    },
    {
      "id": "mad-max-2-the-road-warrior",
      "title": "Mad Max 2: The Road Warrior (1981)",
      "year": 1981,
      "director": "Unknown Director",
      "rating": 8,
      "rank": 242,
      "runtime": "81 min",
      "genreIds": [
        "action-spectacle",
        "post-apocalyptic"
      ],
      "synopsis": "No detailed synopsis available.",
      "tags": [
        "vehicular-carnage",
        "all-time-masterpiece",
        "cult-classic"
      ],
      "trailerYoutubeId": "UlwtiOyaoo0",
      "poster": "./posters/mad-max-2-the-road-warrior.jpg"
    },
    {
      "id": "furiosa-a-mad-max-saga",
      "title": "Furiosa: A Mad Max Saga",
      "year": 2024,
      "director": "George Miller",
      "rating": 7.4,
      "rank": 243,
      "runtime": "148 min",
      "genreIds": [
        "action-spectacle",
        "post-apocalyptic",
        "cyberpunk"
      ],
      "synopsis": "After being snatched from the Green Place of Many Mothers, while the tyrants Dementus and Immortan Joe fight for power and control, the young Furiosa must survive many trials as she puts together the means to find her way home.",
      "tags": [
        "practical-fx",
        "wasteland-revenge",
        "visual-spectacle"
      ],
      "trailerYoutubeId": "XJMuhwVlca4",
      "poster": "./posters/furiosa-a-mad-max-saga.jpg"
    },
    {
      "id": "john-wick-chapter-2",
      "title": "John Wick: Chapter 2",
      "year": 2017,
      "director": "Chad Stahelski",
      "rating": 7.4,
      "rank": 244,
      "runtime": "122 min",
      "genreIds": [
        "action-spectacle",
        "neo-noir",
        "martial-arts"
      ],
      "synopsis": "After returning to the criminal underworld to repay a debt, John Wick discovers that a large bounty has been put on his life.",
      "tags": [
        "gun-fu",
        "continental-rules",
        "hyper-stylized"
      ],
      "trailerYoutubeId": "ChpLV9AMqm4",
      "poster": "./posters/john-wick-chapter-2.jpg"
    },
    {
      "id": "john-wick-chapter-3-parabellum",
      "title": "John Wick: Chapter 3 - Parabellum",
      "year": 2019,
      "director": "Chad Stahelski",
      "rating": 7.4,
      "rank": 245,
      "runtime": "130 min",
      "genreIds": [
        "action-spectacle",
        "neo-noir",
        "martial-arts"
      ],
      "synopsis": "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
      "tags": [
        "relentless-combat",
        "high-table",
        "martial-arts"
      ],
      "trailerYoutubeId": "M7XM597XO94",
      "poster": "./posters/john-wick-chapter-3-parabellum.jpg"
    },
    {
      "id": "skyfall",
      "title": "Skyfall",
      "year": 2012,
      "director": "Sam Mendes",
      "rating": 7.8,
      "rank": 246,
      "runtime": "143 min",
      "genreIds": [
        "action-spectacle",
        "neo-noir"
      ],
      "synopsis": "James Bond's loyalty to M is tested when her past comes back to haunt her. When MI6 comes under attack, 007 must track down and destroy the threat, no matter how personal the cost.",
      "tags": [
        "oscar-winner",
        "cinematography",
        "deakins"
      ],
      "trailerYoutubeId": "6kw1UVovByw",
      "poster": "./posters/skyfall.jpg"
    },
    {
      "id": "no-time-to-die",
      "title": "No Time to Die",
      "year": 2021,
      "director": "Cary Joji Fukunaga",
      "rating": 7.3,
      "rank": 247,
      "runtime": "163 min",
      "genreIds": [
        "action-spectacle",
        "neo-noir"
      ],
      "synopsis": "James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
      "tags": [
        "swan-song",
        "high-octane",
        "nanobots"
      ],
      "trailerYoutubeId": "BIhNsAtPbPI",
      "poster": "./posters/no-time-to-die.jpg"
    },
    {
      "id": "the-northman",
      "title": "The Northman",
      "year": 2022,
      "director": "Robert Eggers",
      "rating": 7,
      "rank": 248,
      "runtime": "137 min",
      "genreIds": [
        "action-spectacle",
        "fantasy-epics",
        "biopic-epics"
      ],
      "synopsis": "A young Viking prince is on a quest to avenge his father's murder.",
      "tags": [
        "viking-saga",
        "brutal-revenge",
        "mythic"
      ],
      "trailerYoutubeId": "oMSdFM12hOw",
      "poster": "./posters/the-northman.jpg"
    },
    {
      "id": "apocalypto",
      "title": "Apocalypto",
      "year": 2006,
      "director": "Mel Gibson",
      "rating": 7.9,
      "rank": 249,
      "runtime": "139 min",
      "genreIds": [
        "action-spectacle",
        "biopic-epics"
      ],
      "synopsis": "As the Mayan kingdom faces its decline, a young man is taken on a perilous journey to a world ruled by fear and oppression.",
      "tags": [
        "relentless-chase",
        "mayan-civilization",
        "visceral"
      ],
      "trailerYoutubeId": "gSw5l5jMnPM",
      "poster": "./posters/apocalypto.jpg"
    },
    {
      "id": "master-and-commander-the-far-side-of-the-world",
      "title": "Master and Commander: The Far Side of the World",
      "year": 2003,
      "director": "Peter Weir",
      "rating": 7.5,
      "rank": 250,
      "runtime": "138 min",
      "genreIds": [
        "action-spectacle",
        "biopic-epics"
      ],
      "synopsis": "During the Napoleonic Wars, a brash British captain pushes his ship and crew to their limits in pursuit of a formidable French war vessel around South America.",
      "tags": [
        "oscar-winner",
        "naval-warfare",
        "authenticity"
      ],
      "trailerYoutubeId": "tHTHCNYiiHk",
      "poster": "./posters/master-and-commander-the-far-side-of-the-world.jpg"
    },
    {
      "id": "braveheart",
      "title": "Braveheart",
      "year": 1995,
      "director": "Mel Gibson",
      "rating": 8.3,
      "rank": 251,
      "runtime": "178 min",
      "genreIds": [
        "action-spectacle",
        "biopic-epics"
      ],
      "synopsis": "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.",
      "tags": [
        "oscar-winner",
        "heroic-epic",
        "battle-scenes"
      ],
      "trailerYoutubeId": "1NJO0jxBtMo",
      "poster": "./posters/braveheart.jpg"
    },
    {
      "id": "the-last-samurai",
      "title": "The Last Samurai",
      "year": 2003,
      "director": "Edward Zwick",
      "rating": 7.8,
      "rank": 252,
      "runtime": "154 min",
      "genreIds": [
        "action-spectacle",
        "biopic-epics",
        "martial-arts"
      ],
      "synopsis": "In 19th century Japan, Nathan Algren, a US army captain, is hired by the Japanese emperor to train his army in the modern warfare techniques. Captain Algren finds himself trapped in a struggle between two eras and two worlds.",
      "tags": [
        "bushido-code",
        "historical-epic",
        "swordsmanship"
      ],
      "trailerYoutubeId": "T50_qHEOahQ",
      "poster": "./posters/the-last-samurai.jpg"
    },
    {
      "id": "the-illusionist",
      "title": "The Illusionist",
      "year": 2006,
      "director": "Neil Burger",
      "rating": 7.5,
      "rank": 253,
      "runtime": "110 min",
      "genreIds": [
        "mind-bending",
        "mystery-whodunit",
        "fantasy-epics"
      ],
      "synopsis": "In turn-of-the-century Vienna, a magician uses his abilities to secure the love of a woman far above his social standing.",
      "tags": [
        "stage-magic",
        "period-drama",
        "twist-ending"
      ],
      "trailerYoutubeId": "QngdF-55AGc",
      "poster": "./posters/the-illusionist.jpg"
    },
    {
      "id": "incendies",
      "title": "Incendies",
      "year": 2011,
      "director": "Denis Villeneuve",
      "rating": 8.3,
      "rank": 254,
      "runtime": "131 min",
      "genreIds": [
        "mind-bending",
        "mystery-whodunit"
      ],
      "synopsis": "Twins journey to the Middle East to discover their family history and fulfill their mother's last wishes.",
      "tags": [
        "denis-villeneuve",
        "devastating-twist",
        "critics-masterpiece"
      ],
      "trailerYoutubeId": "XJ69WnwvZhE",
      "poster": "./posters/incendies.jpg"
    },
    {
      "id": "primal-fear",
      "title": "Primal Fear",
      "year": 1996,
      "director": "Gregory Hoblit",
      "rating": 7.7,
      "rank": 255,
      "runtime": "129 min",
      "genreIds": [
        "mind-bending",
        "mystery-whodunit",
        "neo-noir"
      ],
      "synopsis": "A high-profile murder intrigues a publicity hungry lawyer.",
      "tags": [
        "courtroom-drama",
        "dual-personality",
        "breakout-role"
      ],
      "trailerYoutubeId": "glWAjoDVH3c",
      "poster": "./posters/primal-fear.jpg"
    },
    {
      "id": "the-devil-s-advocate",
      "title": "The Devil's Advocate",
      "year": 1997,
      "director": "Taylor Hackford",
      "rating": 7.5,
      "rank": 256,
      "runtime": "144 min",
      "genreIds": [
        "mind-bending",
        "modern-horror",
        "fantasy-epics"
      ],
      "synopsis": "An exceptionally adept Florida lawyer is offered a job at a high-end New York City law firm with a high-end boss - the biggest opportunity of his career to date.",
      "tags": [
        "satanic-courtroom",
        "al-pacino",
        "temptation"
      ],
      "trailerYoutubeId": "40hHA9n4C2o",
      "poster": "./posters/the-devil-s-advocate.jpg"
    },
    {
      "id": "the-killing-of-a-sacred-deer",
      "title": "The Killing of a Sacred Deer",
      "year": 2017,
      "director": "Yorgos Lanthimos",
      "rating": 7,
      "rank": 257,
      "runtime": "121 min",
      "genreIds": [
        "mind-bending",
        "modern-horror",
        "satire-dark-comedy"
      ],
      "synopsis": "A devious teen starts to insinuate himself into the life of a renowned surgeon and his family.",
      "tags": [
        "yorgos-lanthimos",
        "mythic-curse",
        "clinical-dread"
      ],
      "trailerYoutubeId": "CQFdGfwChtw",
      "poster": "./posters/the-killing-of-a-sacred-deer.jpg"
    },
    {
      "id": "the-invisible-guest",
      "title": "The Invisible Guest",
      "year": 2017,
      "director": "Oriol Paulo",
      "rating": 8,
      "rank": 258,
      "runtime": "106 min",
      "genreIds": [
        "mind-bending",
        "mystery-whodunit"
      ],
      "synopsis": "A young businessman wakes up in a hotel room locked from the inside with the dead body of his lover next to him. He hires a prestigious lawyer, and over one night they work together to clarify what happened in a frenetic race agai...",
      "tags": [
        "locked-room",
        "spanish-thriller",
        "clever-twists"
      ],
      "trailerYoutubeId": "xdJBpajrOh8",
      "poster": "./posters/the-invisible-guest.jpg"
    },
    {
      "id": "the-wolf-of-wall-street",
      "title": "The Wolf of Wall Street",
      "year": 2013,
      "director": "Martin Scorsese",
      "rating": 8.2,
      "rank": 259,
      "runtime": "180 min",
      "genreIds": [
        "neo-noir",
        "satire-dark-comedy",
        "biopic-epics"
      ],
      "synopsis": "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
      "tags": [
        "hedonism",
        "financial-crime",
        "martin-scorsese"
      ],
      "trailerYoutubeId": "iszwuX1AK6A",
      "poster": "./posters/the-wolf-of-wall-street.jpg"
    },
    {
      "id": "snatch",
      "title": "Snatch",
      "year": 2001,
      "director": "Guy Ritchie",
      "rating": 8.2,
      "rank": 260,
      "runtime": "102 min",
      "genreIds": [
        "neo-noir",
        "satire-dark-comedy",
        "action-spectacle"
      ],
      "synopsis": "Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.",
      "tags": [
        "guy-ritchie",
        "cockney-gangsters",
        "diamond-heist"
      ],
      "trailerYoutubeId": "9Jar2XkBboo",
      "poster": "./posters/snatch.jpg"
    },
    {
      "id": "lock-stock-and-two-smoking-barrels",
      "title": "Lock, Stock and Two Smoking Barrels",
      "year": 1998,
      "director": "Guy Ritchie",
      "rating": 8.1,
      "rank": 261,
      "runtime": "107 min",
      "genreIds": [
        "neo-noir",
        "satire-dark-comedy",
        "action-spectacle"
      ],
      "synopsis": "When four small-time criminals lose a rigged poker game against a London kingpin, he gives them one week to settle their enormous debt.",
      "tags": [
        "british-gangster",
        "interlocking-plots",
        "cult-classic"
      ],
      "trailerYoutubeId": "HY7mRdQuUSw",
      "poster": "./posters/lock-stock-and-two-smoking-barrels.jpg"
    },
    {
      "id": "collateral",
      "title": "Collateral",
      "year": 2004,
      "director": "Michael Mann",
      "rating": 7.5,
      "rank": 262,
      "runtime": "120 min",
      "genreIds": [
        "neo-noir",
        "action-spectacle"
      ],
      "synopsis": "A cab driver finds himself the hostage of an engaging contract killer as he makes his rounds from hit to hit during one night in Los Angeles.",
      "tags": [
        "michael-mann",
        "la-nightscape",
        "hitman"
      ],
      "trailerYoutubeId": "JlcX_GXtf40",
      "poster": "./posters/collateral.jpg"
    },
    {
      "id": "the-irishman",
      "title": "The Irishman",
      "year": 2019,
      "director": "Martin Scorsese",
      "rating": 7.8,
      "rank": 263,
      "runtime": "209 min",
      "genreIds": [
        "neo-noir",
        "biopic-epics"
      ],
      "synopsis": "An illustration of Frank Sheeran's life, from W.W.II veteran to hit-man for the Bufalino crime family and his alleged assassination of his close friend Jimmy Hoffa.",
      "tags": [
        "mob-epic",
        "martin-scorsese",
        "de-aging"
      ],
      "trailerYoutubeId": "WHXxVmeGQUc",
      "poster": "./posters/the-irishman.jpg"
    },
    {
      "id": "once-upon-a-time-in-america",
      "title": "Once Upon a Time in America",
      "year": 1984,
      "director": "Sergio Leone",
      "rating": 8.3,
      "rank": 264,
      "runtime": "229 min",
      "genreIds": [
        "neo-noir",
        "biopic-epics"
      ],
      "synopsis": "A former New York gangster returns after decades in exile, confronting the friendships, dreams, and regrets that shaped his rise from street kid to Prohibition-era mobster.",
      "tags": [
        "sergio-leone",
        "jewish-gangsters",
        "all-time-masterpiece"
      ],
      "trailerYoutubeId": "LcpCRyNo8T8",
      "poster": "./posters/once-upon-a-time-in-america.jpg"
    },
    {
      "id": "the-nice-guys",
      "title": "The Nice Guys",
      "year": 2016,
      "director": "Shane Black",
      "rating": 7.4,
      "rank": 265,
      "runtime": "116 min",
      "genreIds": [
        "neo-noir",
        "satire-dark-comedy",
        "mystery-whodunit"
      ],
      "synopsis": "In 1970s Los Angeles, a mismatched pair of private eyes investigate a missing girl and the mysterious death of a porn star.",
      "tags": [
        "shane-black",
        "buddy-cop",
        "70s-la"
      ],
      "trailerYoutubeId": "GQR5zsLHbYw",
      "poster": "./posters/the-nice-guys.jpg"
    },
    {
      "id": "kiss-kiss-bang-bang",
      "title": "Kiss Kiss Bang Bang",
      "year": 2005,
      "director": "Shane Black",
      "rating": 7.4,
      "rank": 266,
      "runtime": "103 min",
      "genreIds": [
        "neo-noir",
        "satire-dark-comedy",
        "mystery-whodunit"
      ],
      "synopsis": "After being mistaken for an actor, a New York thief is sent to Hollywood to train under a private eye for a potential movie role, but the duo are thrown together with a struggling actress into a murder mystery.",
      "tags": [
        "meta-detective",
        "robert-downey-jr",
        "fast-banter"
      ],
      "trailerYoutubeId": "__PnD1HWXSo",
      "poster": "./posters/kiss-kiss-bang-bang.jpg"
    },
    {
      "id": "the-conjuring",
      "title": "The Conjuring",
      "year": 2013,
      "director": "James Wan",
      "rating": 7.5,
      "rank": 267,
      "runtime": "112 min",
      "genreIds": [
        "modern-horror",
        "mystery-whodunit"
      ],
      "synopsis": "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
      "tags": [
        "james-wan",
        "haunted-house",
        "ed-and-lorraine-warren"
      ],
      "trailerYoutubeId": "ejMMn0t58Lc",
      "poster": "./posters/the-conjuring.jpg"
    },
    {
      "id": "the-conjuring-2",
      "title": "The Conjuring 2",
      "year": 2016,
      "director": "James Wan",
      "rating": 7.3,
      "rank": 268,
      "runtime": "134 min",
      "genreIds": [
        "modern-horror"
      ],
      "synopsis": "Ed and Lorraine Warren travel to North London to help a single mother raising four children alone in a house plagued by a supernatural spirit.",
      "tags": [
        "enfield-poltergeist",
        "supernatural",
        "box-office-smash"
      ],
      "trailerYoutubeId": "VFsmuRPClr4",
      "poster": "./posters/the-conjuring-2.jpg"
    },
    {
      "id": "sinister",
      "title": "Sinister",
      "year": 2012,
      "director": "Scott Derrickson",
      "rating": 6.8,
      "rank": 269,
      "runtime": "110 min",
      "genreIds": [
        "modern-horror",
        "mystery-whodunit"
      ],
      "synopsis": "A controversial true-crime writer finds a box of Super 8 home movies in his new home, revealing that the murder case he is currently researching could be the work of an unknown serial killer whose legacy dates back to the 1960s.",
      "tags": [
        "super-8-footage",
        "bughuul",
        "terrifying-score"
      ],
      "trailerYoutubeId": "_kbQAJR9YWQ",
      "poster": "./posters/sinister.jpg"
    },
    {
      "id": "the-menu",
      "title": "The Menu",
      "year": 2022,
      "director": "Mark Mylod",
      "rating": 7.1,
      "rank": 270,
      "runtime": "107 min",
      "genreIds": [
        "modern-horror",
        "satire-dark-comedy",
        "mind-bending"
      ],
      "synopsis": "A young couple travels to a remote island to eat at an exclusive restaurant where the chef has prepared a lavish menu, with some shocking surprises.",
      "tags": [
        "culinary-thriller",
        "eat-the-rich",
        "dark-satire"
      ],
      "trailerYoutubeId": "C_uTkUGcHv4",
      "poster": "./posters/the-menu.jpg"
    },
    {
      "id": "the-black-phone",
      "title": "The Black Phone",
      "year": 2022,
      "director": "Scott Derrickson",
      "rating": 6.9,
      "rank": 271,
      "runtime": "103 min",
      "genreIds": [
        "modern-horror",
        "time-travel"
      ],
      "synopsis": "After being abducted and locked in a basement, a boy starts receiving calls on a disconnected phone from the killer's previous victims.",
      "tags": [
        "scott-derrickson",
        "supernatural-phone",
        "70s-horror"
      ],
      "trailerYoutubeId": "3eGP6im8AZA",
      "poster": "./posters/the-black-phone.jpg"
    },
    {
      "id": "late-night-with-the-devil",
      "title": "Late Night with the Devil",
      "year": 2024,
      "director": "Cameron Cairnes, Colin Cairnes",
      "rating": 7,
      "rank": 272,
      "runtime": "93 min",
      "genreIds": [
        "modern-horror",
        "mind-bending"
      ],
      "synopsis": "A live television broadcast in 1977 goes horribly wrong, unleashing evil into the nation's living rooms.",
      "tags": [
        "found-footage",
        "live-television",
        "demonic-possession"
      ],
      "trailerYoutubeId": "cvt-mauboTc",
      "poster": "./posters/late-night-with-the-devil.jpg"
    },
    {
      "id": "evil-dead-rise",
      "title": "Evil Dead Rise",
      "year": 2023,
      "director": "Lee Cronin",
      "rating": 6.5,
      "rank": 273,
      "runtime": "96 min",
      "genreIds": [
        "modern-horror",
        "action-spectacle"
      ],
      "synopsis": "A twisted tale of two estranged sisters whose reunion is cut short by the rise of flesh-possessing demons, thrusting them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
      "tags": [
        "necronomicon",
        "blood-soaked",
        "apartment-survival"
      ],
      "trailerYoutubeId": "smTK_AeAPHs",
      "poster": "./posters/evil-dead-rise.jpg"
    },
    {
      "id": "the-mist",
      "title": "The Mist",
      "year": 2007,
      "director": "Frank Darabont",
      "rating": 7.1,
      "rank": 274,
      "runtime": "126 min",
      "genreIds": [
        "modern-horror",
        "sci-fi",
        "post-apocalyptic"
      ],
      "synopsis": "In the small town of Bridgton, Maine, people become trapped inside a supermarket after a mysterious mist envelops the town.",
      "tags": [
        "stephen-king",
        "lovecraftian-monsters",
        "brutal-ending"
      ],
      "trailerYoutubeId": "LhCKXJNGzN8",
      "poster": "./posters/the-mist.jpg"
    },
    {
      "id": "the-descent",
      "title": "The Descent",
      "year": 2006,
      "director": "Neil Marshall",
      "rating": 7.2,
      "rank": 275,
      "runtime": "99 min",
      "genreIds": [
        "modern-horror",
        "action-spectacle"
      ],
      "synopsis": "A caving expedition goes horribly wrong when six explorers become trapped and ultimately pursued by a strange breed of predators.",
      "tags": [
        "spelunking-horror",
        "cave-dwellers",
        "claustrophobia"
      ],
      "trailerYoutubeId": "CSYg7Z1KS_I",
      "poster": "./posters/the-descent.jpg"
    },
    {
      "id": "the-others",
      "title": "The Others",
      "year": 2001,
      "director": "Alejandro Amen\u00e1bar",
      "rating": 7.6,
      "rank": 276,
      "runtime": "104 min",
      "genreIds": [
        "modern-horror",
        "mystery-whodunit",
        "mind-bending"
      ],
      "synopsis": "In 1945, immediately following the end of Second World War, a woman who lives with her two photosensitive children on her darkened old family estate in the Channel Islands becomes convinced that the home is haunted.",
      "tags": [
        "gothic-ghost-story",
        "nicole-kidman",
        "legendary-twist"
      ],
      "trailerYoutubeId": "C7pKqaPtMiA",
      "poster": "./posters/the-others.jpg"
    },
    {
      "id": "scream",
      "title": "Scream",
      "year": 1996,
      "director": "Wes Craven",
      "rating": 7.4,
      "rank": 277,
      "runtime": "111 min",
      "genreIds": [
        "modern-horror",
        "satire-dark-comedy",
        "mystery-whodunit"
      ],
      "synopsis": "In the small town of Woodsboro, California, a masked killer known as Ghostface begins murdering high school students, and a group of friends must use their knowledge of horror movies to unmask the killer.",
      "tags": [
        "wes-craven",
        "meta-slasher",
        "90s-icon"
      ],
      "trailerYoutubeId": "i3J6ACKQ7K0",
      "poster": "./posters/scream.jpg"
    },
    {
      "id": "psycho",
      "title": "Psycho",
      "year": 1960,
      "director": "Alfred Hitchcock",
      "rating": 8.5,
      "rank": 278,
      "runtime": "109 min",
      "genreIds": [
        "modern-horror",
        "mind-bending",
        "neo-noir"
      ],
      "synopsis": "A secretary on the run for embezzlement takes refuge at a secluded California motel owned by a repressed man and his overbearing mother.",
      "tags": [
        "alfred-hitchcock",
        "shower-scene",
        "all-time-masterpiece"
      ],
      "trailerYoutubeId": "Wz719b9QUqY",
      "poster": "./posters/psycho.jpg"
    },
    {
      "id": "perfect-blue",
      "title": "Perfect Blue",
      "year": 1998,
      "director": "Satoshi Kon",
      "rating": 8,
      "rank": 279,
      "runtime": "82 min",
      "genreIds": [
        "anime-masterpieces",
        "mind-bending",
        "neo-noir"
      ],
      "synopsis": "A pop singer gives up her career to become an actress, but she slowly goes insane when she starts being stalked by an obsessed fan and what seems to be a ghost of her past.",
      "tags": [
        "satoshi-kon",
        "identity-fracture",
        "psychological-thriller"
      ],
      "trailerYoutubeId": "2O09gQC-KvA",
      "poster": "./posters/perfect-blue.jpg"
    },
    {
      "id": "millennium-actress",
      "title": "Millennium Actress",
      "year": 2002,
      "director": "Satoshi Kon",
      "rating": 7.8,
      "rank": 280,
      "runtime": "87 min",
      "genreIds": [
        "anime-masterpieces",
        "mind-bending",
        "time-travel"
      ],
      "synopsis": "A TV interviewer and his cameraman meet a former actress and travel through her memories and career.",
      "tags": [
        "satoshi-kon",
        "movie-history",
        "narrative-loop"
      ],
      "trailerYoutubeId": "F_HkUEoZ0GY",
      "poster": "./posters/millennium-actress.jpg"
    },
    {
      "id": "tokyo-godfathers",
      "title": "Tokyo Godfathers",
      "year": 2003,
      "director": "Shogo Furuya, Satoshi Kon",
      "rating": 7.8,
      "rank": 281,
      "runtime": "92 min",
      "genreIds": [
        "anime-masterpieces",
        "satire-dark-comedy"
      ],
      "synopsis": "On Christmas Eve, three homeless people living on the streets of Tokyo discover a newborn baby among the trash and set out to find its parents.",
      "tags": [
        "satoshi-kon",
        "found-baby",
        "christmas-triumph"
      ],
      "trailerYoutubeId": "hxTH1JpitWw",
      "poster": "./posters/tokyo-godfathers.jpg"
    },
    {
      "id": "wolf-children",
      "title": "Wolf Children",
      "year": 2012,
      "director": "Mamoru Hosoda",
      "rating": 8.1,
      "rank": 282,
      "runtime": "117 min",
      "genreIds": [
        "anime-masterpieces",
        "fantasy-epics"
      ],
      "synopsis": "After her werewolf lover unexpectedly dies in an accident, a young woman must find ways to raise their werewolf son and daughter while keeping their trait hidden from society.",
      "tags": [
        "mamoru-hosoda",
        "motherhood",
        "emotional-tearjerker"
      ],
      "trailerYoutubeId": "MZpWdYruu48",
      "poster": "./posters/wolf-children.jpg"
    },
    {
      "id": "the-wind-rises",
      "title": "The Wind Rises",
      "year": 2014,
      "director": "Hayao Miyazaki",
      "rating": 7.8,
      "rank": 283,
      "runtime": "126 min",
      "genreIds": [
        "anime-masterpieces",
        "biopic-epics"
      ],
      "synopsis": "Jiro Horikoshi studies assiduously to fulfill his aim of becoming an aeronautical engineer. As WWII begins, fighter aircraft designed by him end up getting used by the Japanese Empire against its foes.",
      "tags": [
        "hayao-miyazaki",
        "aviation-dreams",
        "studio-ghibli"
      ],
      "trailerYoutubeId": "RzSpDgiF5y8",
      "poster": "./posters/the-wind-rises.jpg"
    },
    {
      "id": "ponyo",
      "title": "Ponyo",
      "year": 2009,
      "director": "Hayao Miyazaki",
      "rating": 7.6,
      "rank": 284,
      "runtime": "101 min",
      "genreIds": [
        "anime-masterpieces",
        "fantasy-epics"
      ],
      "synopsis": "A five-year-old boy develops a relationship with Ponyo, a young goldfish princess who longs to become a human after falling in love with him.",
      "tags": [
        "hayao-miyazaki",
        "ocean-goddess",
        "hand-drawn-waves"
      ],
      "trailerYoutubeId": "CsR3KVgBzSM",
      "poster": "./posters/ponyo.jpg"
    },
    {
      "id": "porco-rosso",
      "title": "Porco Rosso",
      "year": 1994,
      "director": "Hayao Miyazaki",
      "rating": 7.7,
      "rank": 285,
      "runtime": "94 min",
      "genreIds": [
        "anime-masterpieces",
        "action-spectacle",
        "fantasy-epics"
      ],
      "synopsis": "In 1930s Italy, a veteran World War I pilot is cursed to look like an anthropomorphic pig.",
      "tags": [
        "hayao-miyazaki",
        "seaplane-pilot",
        "anti-fascist-pig"
      ],
      "trailerYoutubeId": "3LRyNwYg1f8",
      "poster": "./posters/porco-rosso.jpg"
    },
    {
      "id": "ninja-scroll",
      "title": "Ninja Scroll",
      "year": 1993,
      "director": "Yoshiaki Kawajiri",
      "rating": 7.8,
      "rank": 286,
      "runtime": "94 min",
      "genreIds": [
        "anime-masterpieces",
        "martial-arts",
        "action-spectacle"
      ],
      "synopsis": "A vagabond swordsman is aided by a kunoichi and a spy in battling a demonic clan of killers led by a ghost from his past, who are bent on overthrowing the Tokugawa Shogunate.",
      "tags": [
        "demon-clan",
        "jubei",
        "ultra-violent-classic"
      ],
      "trailerYoutubeId": "czxt18u-bGY",
      "poster": "./posters/ninja-scroll.jpg"
    },
    {
      "id": "ghost-in-the-shell-2-innocence",
      "title": "Ghost in the Shell 2: Innocence",
      "year": 2004,
      "director": "Mamoru Oshii",
      "rating": 7.4,
      "rank": 287,
      "runtime": "100 min",
      "genreIds": [
        "anime-masterpieces",
        "cyberpunk",
        "sci-fi"
      ],
      "synopsis": "In the year 2032, Bat\u00f4, a cyborg detective for the anti-terrorist unit Public Security Section 9, investigates the case of a female robot--one created solely for sexual pleasure--who slaughtered her owner.",
      "tags": [
        "mamoru-oshii",
        "cyborg-philosophy",
        "carmine-noir"
      ],
      "trailerYoutubeId": "0XkATpPvqEA",
      "poster": "./posters/ghost-in-the-shell-2-innocence.jpg"
    },
    {
      "id": "guillermo-del-toro-s-pinocchio",
      "title": "Guillermo del Toro's Pinocchio",
      "year": 2022,
      "director": "Guillermo del Toro, Mark Gustafson",
      "rating": 7.6,
      "rank": 288,
      "runtime": "117 min",
      "genreIds": [
        "anime-masterpieces",
        "fantasy-epics"
      ],
      "synopsis": "A father's wish magically brings a wooden boy to life in Italy, giving him a chance to care for the child.",
      "tags": [
        "stop-motion",
        "oscar-winner",
        "dark-fairytale"
      ],
      "trailerYoutubeId": "Od2NW1sfRdA",
      "poster": "./posters/guillermo-del-toro-s-pinocchio.jpg"
    },
    {
      "id": "klaus",
      "title": "Klaus",
      "year": 2019,
      "director": "Carlos Mart\u00ednez L\u00f3pez, Sergio Pablos",
      "rating": 8.2,
      "rank": 289,
      "runtime": "96 min",
      "genreIds": [
        "anime-masterpieces",
        "satire-dark-comedy",
        "fantasy-epics"
      ],
      "synopsis": "A simple act of kindness always sparks another, even in a frozen, faraway place. When Smeerensburg's new postman, Jesper, befriends toymaker Klaus, their gifts melt an age-old feud and deliver a sleigh full of holiday traditions.",
      "tags": [
        "hand-drawn-innovation",
        "santa-origin",
        "holiday-classic"
      ],
      "trailerYoutubeId": "taE3PwurhYM",
      "poster": "./posters/klaus.jpg"
    },
    {
      "id": "harry-potter-and-the-deathly-hallows-part-1",
      "title": "Harry Potter and the Deathly Hallows: Part 1",
      "year": 2010,
      "director": "David Yates",
      "rating": 7.7,
      "rank": 290,
      "runtime": "146 min",
      "genreIds": [
        "fantasy-epics"
      ],
      "synopsis": "Harry Potter is tasked with the dangerous and seemingly impossible task of locating and destroying Voldemort's remaining Horcruxes. Harry must rely on Ron and Hermione more than ever, but dark forces threaten to tear them apart.",
      "tags": [
        "horcrux-hunt",
        "dark-fantasy",
        "wizarding-world"
      ],
      "trailerYoutubeId": "Su1LOpjvdZ4",
      "poster": "./posters/harry-potter-and-the-deathly-hallows-part-1.jpg"
    },
    {
      "id": "harry-potter-and-the-sorcerer-s-stone",
      "title": "Harry Potter and the Sorcerer's Stone",
      "year": 2001,
      "director": "Chris Columbus",
      "rating": 7.7,
      "rank": 291,
      "runtime": "152 min",
      "genreIds": [
        "fantasy-epics"
      ],
      "synopsis": "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
      "tags": [
        "hogwarts-beginning",
        "john-williams-score",
        "magic-discovery"
      ],
      "trailerYoutubeId": "VyHV0BRtdxo",
      "poster": "./posters/harry-potter-and-the-sorcerer-s-stone.jpg"
    },
    {
      "id": "willow",
      "title": "Willow",
      "year": 1988,
      "director": "Ron Howard",
      "rating": 7.2,
      "rank": 292,
      "runtime": "126 min",
      "genreIds": [
        "fantasy-epics",
        "action-spectacle"
      ],
      "synopsis": "A young farmer is chosen to undertake a perilous journey in order to protect a special baby from an evil queen. Along the way, he teams up with a disgraced swordsman to defeat the evil sorceress.",
      "tags": [
        "george-lucas",
        "dwarf-hero",
        "cult-80s-fantasy"
      ],
      "trailerYoutubeId": "uzn2izehkno",
      "poster": "./posters/willow.jpg"
    },
    {
      "id": "excalibur",
      "title": "Excalibur",
      "year": 1981,
      "director": "John Boorman",
      "rating": 7.3,
      "rank": 293,
      "runtime": "140 min",
      "genreIds": [
        "fantasy-epics",
        "action-spectacle"
      ],
      "synopsis": "Merlin the magician helps Arthur Pendragon unite the Britons around the Round Table of Camelot, even as dark forces conspire to tear it apart.",
      "tags": [
        "arthurian-legend",
        "merlin",
        "visual-splendor"
      ],
      "trailerYoutubeId": "6QR6_17mn5s",
      "poster": "./posters/excalibur.jpg"
    },
    {
      "id": "conan-the-barbarian",
      "title": "Conan the Barbarian",
      "year": 1982,
      "director": "John Milius",
      "rating": 6.9,
      "rank": 294,
      "runtime": "129 min",
      "genreIds": [
        "fantasy-epics",
        "action-spectacle",
        "martial-arts"
      ],
      "synopsis": "A powerful warrior seeks to avenge the genocide of his people and the murder of his parents at the hands of a snake cult.",
      "tags": [
        "arnold-schwarzenegger",
        "sword-and-sorcery",
        "basil-poledouris"
      ],
      "trailerYoutubeId": "Nok-jOYn6Dg",
      "poster": "./posters/conan-the-barbarian.jpg"
    },
    {
      "id": "ip-man-2",
      "title": "Ip Man 2",
      "year": 2025,
      "director": "Wilson Yip",
      "rating": 7.5,
      "rank": 295,
      "runtime": "108 min",
      "genreIds": [
        "martial-arts",
        "biopic-epics",
        "action-spectacle"
      ],
      "synopsis": "Centering on Ip Man's migration to Hong Kong in 1949 as he attempts to propagate his discipline of Wing Chun martial arts.",
      "tags": [
        "donnie-yen",
        "boxing-vs-wing-chun",
        "sammo-hung"
      ],
      "trailerYoutubeId": "gaBdgu00otE",
      "poster": "./posters/ip-man-2.jpg"
    },
    {
      "id": "ip-man-3",
      "title": "Ip Man 3",
      "year": 2025,
      "director": "Wilson Yip",
      "rating": 7,
      "rank": 296,
      "runtime": "105 min",
      "genreIds": [
        "martial-arts",
        "biopic-epics",
        "action-spectacle"
      ],
      "synopsis": "When a band of brutal gangsters led by a crooked property developer make a play to take over a local school, Master Ip is forced to take a stand.",
      "tags": [
        "donnie-yen",
        "mike-tyson-fight",
        "elevated-wing-chun"
      ],
      "trailerYoutubeId": "kchw9Bgvk4A",
      "poster": "./posters/ip-man-3.jpg"
    },
    {
      "id": "drunken-master-ii",
      "title": "The Legend of Drunken Master (1994)",
      "year": 2022,
      "director": "Unknown Director",
      "rating": 8,
      "rank": 297,
      "runtime": "181 min",
      "genreIds": [
        "martial-arts",
        "satire-dark-comedy",
        "action-spectacle"
      ],
      "synopsis": "No detailed synopsis available.",
      "tags": [
        "jackie-chan",
        "drunken-boxing",
        "choreography-zenith"
      ],
      "trailerYoutubeId": "p4X2naY_2-k",
      "poster": "./posters/drunken-master-ii.jpg"
    },
    {
      "id": "police-story-2",
      "title": "Police Story 2",
      "year": 1988,
      "director": "Jackie Chan",
      "rating": 7,
      "rank": 298,
      "runtime": "101 min",
      "genreIds": [
        "martial-arts",
        "action-spectacle"
      ],
      "synopsis": "The Hong Kong supercop must stop a group of blackmailing bombers, while the villains of Police Story (1985) are out for revenge.",
      "tags": [
        "jackie-chan",
        "playground-brawl",
        "explosive-stunts"
      ],
      "trailerYoutubeId": "LIcCUo7Xkxk",
      "poster": "./posters/police-story-2.jpg"
    },
    {
      "id": "rumble-in-the-bronx",
      "title": "Rumble in the Bronx",
      "year": 1996,
      "director": "Stanley Tong",
      "rating": 6.8,
      "rank": 299,
      "runtime": "106 min",
      "genreIds": [
        "martial-arts",
        "action-spectacle",
        "satire-dark-comedy"
      ],
      "synopsis": "A young man visiting and helping his uncle in New York City finds himself forced to fight a street gang and the mob with his martial art skills.",
      "tags": [
        "jackie-chan-us-breakout",
        "hovercraft",
        "ladder-stunts"
      ],
      "trailerYoutubeId": "q7vg8uGzLts",
      "poster": "./posters/rumble-in-the-bronx.jpg"
    },
    {
      "id": "the-36th-chamber-of-shaolin",
      "title": "The 36th Chamber of Shaolin",
      "year": 1978,
      "director": "Chia-Liang Liu",
      "rating": 7.6,
      "rank": 301,
      "runtime": "116 min",
      "genreIds": [
        "martial-arts",
        "action-spectacle",
        "biopic-epics"
      ],
      "synopsis": "A school student who conspires with his teacher and others to overthrow the Qing Dynasty sees his family slaughtered at the hands of his enemies. He joins the Shaolin Temple and rigorously studies martial arts to avenge his belove...",
      "tags": [
        "gordon-liu",
        "shaolin-training-ordeal",
        "shaw-brothers-zenith"
      ],
      "trailerYoutubeId": "dx43uPkFwTY",
      "poster": "./posters/the-36th-chamber-of-shaolin.jpg"
    },
    {
      "id": "once-upon-a-time-in-china",
      "title": "Once Upon a Time in China",
      "year": 1991,
      "director": "Hark Tsui",
      "rating": 7.2,
      "rank": 302,
      "runtime": "134 min",
      "genreIds": [
        "martial-arts",
        "biopic-epics",
        "action-spectacle"
      ],
      "synopsis": "Legendary martial arts hero Wong Fei-Hung fights against foreign forces' plundering of China. When Aunt Yee arrives back from America, Wong Fei-Hung assumes the role of her protector.",
      "tags": [
        "jet-li",
        "wong-fei-hung",
        "umbrella-fight"
      ],
      "trailerYoutubeId": "0wbOG09RDm8",
      "poster": "./posters/once-upon-a-time-in-china.jpg"
    },
    {
      "id": "the-protector",
      "title": "The Protector",
      "year": 2006,
      "director": "Prachya Pinkaew",
      "rating": 7,
      "rank": 303,
      "runtime": "83 min",
      "genreIds": [
        "martial-arts",
        "action-spectacle"
      ],
      "synopsis": "A young fighter named Kham must go to Australia to retrieve his stolen elephant. With the help of a Thai-born Australian detective, Kham must take on all comers, including a gang led by an evil woman and her two deadly bodyguards.",
      "tags": [
        "tony-jaa",
        "one-take-staircase-fight",
        "muay-thai-bone-breaker"
      ],
      "trailerYoutubeId": "xX4U9rrR2fA",
      "poster": "./posters/the-protector.jpg"
    },
    {
      "id": "oppenheimer",
      "title": "Oppenheimer",
      "year": 2023,
      "director": "Christopher Nolan",
      "rating": 8.2,
      "rank": 304,
      "runtime": "180 min",
      "genreIds": [
        "biopic-epics",
        "mind-bending",
        "sci-fi"
      ],
      "synopsis": "A dramatization of the life story of J. Robert Oppenheimer, the physicist who had a large hand in the development of the atomic bombs that brought an end to World War II.",
      "tags": [
        "christopher-nolan",
        "atomic-bomb",
        "oscar-best-picture"
      ],
      "trailerYoutubeId": "bK6ldnjE3Y0",
      "poster": "./posters/oppenheimer.jpg"
    },
    {
      "id": "schindler-s-list",
      "title": "Schindler's List",
      "year": 1994,
      "director": "Steven Spielberg",
      "rating": 9,
      "rank": 305,
      "runtime": "196 min",
      "genreIds": [
        "biopic-epics"
      ],
      "synopsis": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
      "tags": [
        "steven-spielberg",
        "holocaust-memorial",
        "oscar-best-picture"
      ],
      "trailerYoutubeId": "mxphAlJID9U",
      "poster": "./posters/schindler-s-list.jpg"
    },
    {
      "id": "the-pianist",
      "title": "The Pianist",
      "year": 2003,
      "director": "Roman Polanski",
      "rating": 8.5,
      "rank": 306,
      "runtime": "150 min",
      "genreIds": [
        "biopic-epics"
      ],
      "synopsis": "During WWII, acclaimed Polish musician Wladyslaw faces various struggles as he loses contact with his family. As the situation worsens, he hides in the ruins of Warsaw in order to survive.",
      "tags": [
        "roman-polanski",
        "adrien-brody",
        "chopin-survival"
      ],
      "trailerYoutubeId": "BFwGqLa_oAo",
      "poster": "./posters/the-pianist.jpg"
    },
    {
      "id": "a-beautiful-mind",
      "title": "A Beautiful Mind",
      "year": 2002,
      "director": "Ron Howard",
      "rating": 8.2,
      "rank": 307,
      "runtime": "135 min",
      "genreIds": [
        "biopic-epics",
        "mind-bending"
      ],
      "synopsis": "A mathematical genius, John Nash made an astonishing discovery early in his career and stood on the brink of international acclaim. But Nash soon found himself on a harrowing journey of self-discovery.",
      "tags": [
        "john-nash",
        "game-theory",
        "oscar-best-picture"
      ],
      "trailerYoutubeId": "9wZM7CQY130",
      "poster": "./posters/a-beautiful-mind.jpg"
    },
    {
      "id": "the-imitation-game",
      "title": "The Imitation Game",
      "year": 2014,
      "director": "Morten Tyldum",
      "rating": 8,
      "rank": 308,
      "runtime": "114 min",
      "genreIds": [
        "biopic-epics",
        "cyberpunk",
        "mind-bending"
      ],
      "synopsis": "During World War II, the English mathematical genius Alan Turing tries to crack the German Enigma code with help from fellow mathematicians while attempting to come to terms with his troubled private life.",
      "tags": [
        "alan-turing",
        "enigma-machine",
        "early-computing"
      ],
      "trailerYoutubeId": "nuPZUUED5uk",
      "poster": "./posters/the-imitation-game.jpg"
    },
    {
      "id": "the-social-network",
      "title": "The Social Network",
      "year": 2010,
      "director": "David Fincher",
      "rating": 7.8,
      "rank": 309,
      "runtime": "120 min",
      "genreIds": [
        "biopic-epics",
        "neo-noir"
      ],
      "synopsis": "As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea and by the co-founder who was later squeezed out of the business.",
      "tags": [
        "david-fincher",
        "aaron-sorkin",
        "silicon-valley"
      ],
      "trailerYoutubeId": "lB95KLmpLR4",
      "poster": "./posters/the-social-network.jpg"
    },
    {
      "id": "amadeus",
      "title": "Amadeus",
      "year": 1984,
      "director": "Milo\u0161 Forman",
      "rating": 8.4,
      "rank": 310,
      "runtime": "160 min",
      "genreIds": [
        "biopic-epics",
        "satire-dark-comedy"
      ],
      "synopsis": "In 18th-century Vienna, court composer Antonio Salieri becomes awed and consumed by envy when the gifted, irreverent Wolfgang Amadeus Mozart bursts onto the imperial music scene.",
      "tags": [
        "mozart-vs-salieri",
        "jealousy",
        "oscar-best-picture"
      ],
      "trailerYoutubeId": "r7kWQj9FCGY",
      "poster": "./posters/amadeus.jpg"
    },
    {
      "id": "lawrence-of-arabia",
      "title": "Lawrence of Arabia",
      "year": 1962,
      "director": "David Lean",
      "rating": 8.3,
      "rank": 311,
      "runtime": "227 min",
      "genreIds": [
        "biopic-epics",
        "action-spectacle"
      ],
      "synopsis": "The story of T.E. Lawrence, the English officer who successfully united and led the diverse, often warring, Arab tribes during World War I in order to fight the Turks.",
      "tags": [
        "david-lean",
        "desert-cinematography",
        "all-time-masterpiece"
      ],
      "trailerYoutubeId": "vOlRhGEhG7k",
      "poster": "./posters/lawrence-of-arabia.jpg"
    },
    {
      "id": "the-big-lebowski",
      "title": "The Big Lebowski",
      "year": 1998,
      "director": "Joel Coen, Ethan Coen",
      "rating": 8.1,
      "rank": 312,
      "runtime": "117 min",
      "genreIds": [
        "satire-dark-comedy",
        "neo-noir",
        "mystery-whodunit"
      ],
      "synopsis": "Jeff \"The Dude\" Lebowski, mistaken for a millionaire of the same name, seeks restitution for his ruined rug and enlists his bowling buddies to help get it.",
      "tags": [
        "the-dude",
        "coen-brothers",
        "bowling-noir"
      ],
      "trailerYoutubeId": "cd-go0oBF4Y",
      "poster": "./posters/the-big-lebowski.jpg"
    },
    {
      "id": "in-bruges",
      "title": "In Bruges",
      "year": 2008,
      "director": "Martin McDonagh",
      "rating": 7.9,
      "rank": 313,
      "runtime": "107 min",
      "genreIds": [
        "satire-dark-comedy",
        "neo-noir"
      ],
      "synopsis": "After a job gone wrong, hitman Ray and his partner await orders from their ruthless boss in Bruges, Belgium, the last place in the world Ray wants to be.",
      "tags": [
        "martin-mcdonagh",
        "hitman-existentialism",
        "colin-farrell"
      ],
      "trailerYoutubeId": "p-gG2qo_l_A",
      "poster": "./posters/in-bruges.jpg"
    },
    {
      "id": "the-banshees-of-inisherin",
      "title": "The Banshees of Inisherin",
      "year": 2022,
      "director": "Martin McDonagh",
      "rating": 7.6,
      "rank": 314,
      "runtime": "114 min",
      "genreIds": [
        "satire-dark-comedy"
      ],
      "synopsis": "Two lifelong friends find themselves at an impasse when one abruptly ends their relationship, with alarming consequences for both of them.",
      "tags": [
        "martin-mcdonagh",
        "broken-friendship",
        "irish-island"
      ],
      "trailerYoutubeId": "uRu3zLOJN2c",
      "poster": "./posters/the-banshees-of-inisherin.jpg"
    },
    {
      "id": "dr-strangelove",
      "title": "Dr. Strangelove",
      "year": 2012,
      "director": "Keaton Gover, Jack Snelling",
      "rating": 8.2,
      "rank": 315,
      "runtime": "2h 00m",
      "genreIds": [
        "satire-dark-comedy",
        "sci-fi",
        "post-apocalyptic"
      ],
      "synopsis": "Local criminal entrepreneur, known as Doc, is given a job by a local crime boss to collect some money. However, the results of said collection are not usual.",
      "tags": [
        "stanley-kubrick",
        "cold-war-madness",
        "peter-sellers"
      ],
      "trailerYoutubeId": "jPU1AYTxwg4",
      "poster": "./posters/dr-strangelove.jpg"
    },
    {
      "id": "tropic-thunder",
      "title": "Tropic Thunder",
      "year": 2008,
      "director": "Ben Stiller",
      "rating": 7.1,
      "rank": 316,
      "runtime": "107 min",
      "genreIds": [
        "satire-dark-comedy",
        "action-spectacle"
      ],
      "synopsis": "Through a series of freak occurrences, a group of actors shooting a big-budget war movie are forced to become the soldiers they are portraying.",
      "tags": [
        "hollywood-satire",
        "jungle-warfare",
        "robert-downey-jr"
      ],
      "trailerYoutubeId": "9Pl4JNnqNaE",
      "poster": "./posters/tropic-thunder.jpg"
    },
    {
      "id": "the-death-of-stalin",
      "title": "The Death of Stalin",
      "year": 2018,
      "director": "Armando Iannucci",
      "rating": 7.3,
      "rank": 317,
      "runtime": "107 min",
      "genreIds": [
        "satire-dark-comedy",
        "biopic-epics"
      ],
      "synopsis": "Moscow, 1953. After being in power for nearly 30 years, Soviet dictator, Joseph Vissarionovich Stalin, takes ill and quickly dies. Now the members of the Council of Ministers scramble for power.",
      "tags": [
        "armando-iannucci",
        "kremlin-chaos",
        "ruthless-farce"
      ],
      "trailerYoutubeId": "E9eAshaPvYw",
      "poster": "./posters/the-death-of-stalin.jpg"
    },
    {
      "id": "jojo-rabbit",
      "title": "Jojo Rabbit",
      "year": 2019,
      "director": "Taika Waititi",
      "rating": 7.9,
      "rank": 318,
      "runtime": "108 min",
      "genreIds": [
        "satire-dark-comedy"
      ],
      "synopsis": "A young German boy in the Hitler Youth, whose hero and imaginary friend is the country's dictator, is shocked to discover that his mother is hiding a Jewish girl in their home.",
      "tags": [
        "taika-waititi",
        "anti-hate-satire",
        "oscar-winner"
      ],
      "trailerYoutubeId": "tL4McUzXfFI",
      "poster": "./posters/jojo-rabbit.jpg"
    },
    {
      "id": "what-we-do-in-the-shadows",
      "title": "What We Do in the Shadows",
      "year": 2015,
      "director": "Jemaine Clement, Taika Waititi",
      "rating": 7.6,
      "rank": 319,
      "runtime": "86 min",
      "genreIds": [
        "satire-dark-comedy",
        "modern-horror"
      ],
      "synopsis": "Viago, Deacon, and Vladislav are vampires who are struggling with the mundane aspects of modern life, like paying rent, keeping up with the chore wheel, trying to get into nightclubs, and overcoming flatmate conflicts.",
      "tags": [
        "vampire-mockumentary",
        "taika-waititi",
        "cult-classic"
      ],
      "trailerYoutubeId": "IAZEWtyhpes",
      "poster": "./posters/what-we-do-in-the-shadows.jpg"
    },
    {
      "id": "the-legend-of-drunken-master",
      "title": "The Legend of Drunken Master (1994)",
      "year": 2022,
      "director": "Visionary Filmmaker",
      "rating": 7.5,
      "rank": 322,
      "runtime": "181 min",
      "genreIds": [
        "martial-arts",
        "satire-dark-comedy",
        "action-spectacle"
      ],
      "synopsis": "An acclaimed cinematic masterpiece featuring breathtaking vision and performances.",
      "tags": [
        "jackie-chan",
        "drunken-boxing-masterpiece",
        "industrial-fight"
      ],
      "trailerYoutubeId": "aFGEZatgWrY",
      "poster": "./posters/the-legend-of-drunken-master.jpg"
    },
    {
      "id": "ong-bak-2",
      "title": "Ong Bak 2",
      "year": 2008,
      "director": "Tony Jaa, Panna Rittikrai",
      "rating": 6.2,
      "rank": 323,
      "runtime": "98 min",
      "genreIds": [
        "martial-arts",
        "action-spectacle"
      ],
      "synopsis": "A young Thai boxer learns the skills and inner meaning of martial arts.",
      "tags": [
        "tony-jaa",
        "ancient-thailand",
        "martial-arts-styles"
      ],
      "trailerYoutubeId": "YcHISERBGL4",
      "poster": "./posters/ong-bak-2.jpg"
    },
    {
      "id": "police-story-3-supercop",
      "title": "Police Story 3: Supercop",
      "year": 1996,
      "director": "Stanley Tong",
      "rating": 7,
      "rank": 324,
      "runtime": "91 min",
      "genreIds": [
        "martial-arts",
        "action-spectacle"
      ],
      "synopsis": "A Hong Kong detective teams up with his female Red Chinese counterpart to stop a Chinese drug czar.",
      "tags": [
        "jackie-chan",
        "michelle-yeoh",
        "train-helicopter-stunt"
      ],
      "trailerYoutubeId": "SioYR_P3Qtw",
      "poster": "./posters/police-story-3-supercop.jpg"
    },
    {
      "id": "wheels-on-meals",
      "title": "Wheels on Meals",
      "year": 1984,
      "director": "Sammo Kam-Bo Hung",
      "rating": 7,
      "rank": 325,
      "runtime": "100 min",
      "genreIds": [
        "martial-arts",
        "satire-dark-comedy",
        "action-spectacle"
      ],
      "synopsis": "In Barcelona, two Chinese food truck operators must use their martial arts skills to help their private investigator friend protect a beautiful pickpocket from ruthless gangsters.",
      "tags": [
        "jackie-chan",
        "benny-urquidez",
        "barcelona-kickboxing"
      ],
      "trailerYoutubeId": "jvVrNI_WuNo",
      "poster": "./posters/wheels-on-meals.jpg"
    },
    {
      "id": "dragons-forever",
      "title": "Dragons Forever",
      "year": 1988,
      "director": "Sammo Kam-Bo Hung, Corey Yuen",
      "rating": 7.1,
      "rank": 326,
      "runtime": "102 min",
      "genreIds": [
        "martial-arts",
        "action-spectacle",
        "satire-dark-comedy"
      ],
      "synopsis": "Three successful Hong Kong lawyers are hired by a chemical company of questionable ethics and must eventually make a difficult decision when their employer's motives become clear.",
      "tags": [
        "jackie-chan",
        "sammo-hung",
        "yuen-biao"
      ],
      "trailerYoutubeId": "7MUOCryDkhM",
      "poster": "./posters/dragons-forever.jpg"
    },
    {
      "id": "master-of-the-flying-guillotine",
      "title": "Master of the Flying Guillotine",
      "year": 1976,
      "director": "Jimmy Wang Yu",
      "rating": 7.4,
      "rank": 329,
      "runtime": "81 min",
      "genreIds": [
        "martial-arts",
        "action-spectacle",
        "fantasy-epics"
      ],
      "synopsis": "After his students are killed by the One Armed Boxer, a vengeful and blind Kung Fu expert travels to a village where a martial arts contest is being held and vows to behead every one armed man he comes across.",
      "tags": [
        "flying-guillotine",
        "one-armed-boxer",
        "cult-classic"
      ],
      "trailerYoutubeId": "_o_49R60zCQ",
      "poster": "./posters/master-of-the-flying-guillotine.jpg"
    },
    {
      "id": "a-touch-of-zen",
      "title": "A Touch of Zen",
      "year": 1971,
      "director": "King Hu",
      "rating": 7.5,
      "rank": 330,
      "runtime": "200 min",
      "genreIds": [
        "martial-arts",
        "fantasy-epics"
      ],
      "synopsis": "A lady fugitive on the run from corrupt government officials is joined in her endeavors by an unambitious painter and skilled Buddhist monks.",
      "tags": [
        "king-hu",
        "bamboo-forest",
        "buddhist-transcendence"
      ],
      "trailerYoutubeId": "18yH_9ZT27Q",
      "poster": "./posters/a-touch-of-zen.jpg"
    },
    {
      "id": "one-armed-swordsman",
      "title": "One-Armed Swordsman",
      "year": 1967,
      "director": "Cheh Chang",
      "rating": 7.2,
      "rank": 331,
      "runtime": "115 min",
      "genreIds": [
        "martial-arts",
        "action-spectacle"
      ],
      "synopsis": "A noble swordsman, whose arm had been chopped off, returns to his former teacher to defend him from a villainous gang of rival swordsmen.",
      "tags": [
        "jimmy-wang-yu",
        "chang-cheh",
        "broken-blade"
      ],
      "trailerYoutubeId": "mOe4I3NSgQ8",
      "poster": "./posters/one-armed-swordsman.jpg"
    },
    {
      "id": "come-drink-with-me",
      "title": "Come Drink with Me",
      "year": 1966,
      "director": "King Hu",
      "rating": 6.9,
      "rank": 332,
      "runtime": "95 min",
      "genreIds": [
        "martial-arts",
        "action-spectacle"
      ],
      "synopsis": "Bandits kidnap a governor's son and demand their imprisoned leader to be set free in exchange. The governor's daughter, a skilled martial artist, is sent to rescue him, but eventually finds herself overmatched and in need of assis...",
      "tags": [
        "king-hu",
        "cheng-pei-pei",
        "inn-brawl"
      ],
      "trailerYoutubeId": "astCEpTZTiw",
      "poster": "./posters/come-drink-with-me.jpg"
    },
    {
      "id": "once-upon-a-time-in-china-ii",
      "title": "Once Upon a Time in China II",
      "year": 1993,
      "director": "Hark Tsui",
      "rating": 7.3,
      "rank": 335,
      "runtime": "113 min",
      "genreIds": [
        "martial-arts",
        "action-spectacle"
      ],
      "synopsis": "Arriving by train in Guangzhou, 1895, the trio fight off White Lotus followers, who want to kill all foreigners and the cute, European dressed 13th Aunt. It's not kung fu master Dr. Wong's (Jet Li) last fight.",
      "tags": [
        "jet-li",
        "donnie-yen",
        "cloth-staff-duel"
      ],
      "trailerYoutubeId": "37YDxk6sSJ4",
      "poster": "./posters/once-upon-a-time-in-china-ii.jpg"
    },
    {
      "id": "once-upon-a-time-in-china-iii",
      "title": "Once Upon a Time in China III",
      "year": 1993,
      "director": "Hark Tsui",
      "rating": 6.7,
      "rank": 336,
      "runtime": "125 min",
      "genreIds": [
        "martial-arts",
        "action-spectacle"
      ],
      "synopsis": "Master Wong and his disciples enroll in the 'Dancing Lion Competition' to stop an assassination plot and to battle an arrogant, deceitful opponent.",
      "tags": [
        "jet-li",
        "lion-dance",
        "wong-fei-hung"
      ],
      "trailerYoutubeId": "mcfJOkEEJ68",
      "poster": "./posters/once-upon-a-time-in-china-iii.jpg"
    },
    {
      "id": "tai-chi-master",
      "title": "Tai Chi Master",
      "year": 1993,
      "director": "Yuen Woo-Ping",
      "rating": 7.2,
      "rank": 339,
      "runtime": "96 min",
      "genreIds": [
        "martial-arts",
        "action-spectacle"
      ],
      "synopsis": "Two friends, ex Shaolin monks, part ways as they brush with the ongoing rebellion against the government. The ambitious one rises up to be a powerful military commander, while his betrayed friend resorts to learn the calm ways of ...",
      "tags": [
        "jet-li",
        "michelle-yeoh",
        "yin-yang"
      ],
      "trailerYoutubeId": "YnVnW2Vs82w",
      "poster": "./posters/tai-chi-master.jpg"
    },
    {
      "id": "kiss-of-the-dragon",
      "title": "Kiss of the Dragon",
      "year": 2001,
      "director": "Chris Nahon",
      "rating": 6.6,
      "rank": 341,
      "runtime": "98 min",
      "genreIds": [
        "martial-arts",
        "action-spectacle",
        "neo-noir"
      ],
      "synopsis": "A betrayed intelligence officer enlists the aid of a prostitute to prove his innocence from a deadly conspiracy while returning a favor to her.",
      "tags": [
        "jet-li",
        "acupuncture-needle",
        "paris-gritty"
      ],
      "trailerYoutubeId": "oUAoFsHUpWQ",
      "poster": "./posters/kiss-of-the-dragon.jpg"
    },
    {
      "id": "romeo-must-die",
      "title": "Romeo Must Die",
      "year": 2000,
      "director": "Andrzej Bartkowiak",
      "rating": 6.1,
      "rank": 343,
      "runtime": "115 min",
      "genreIds": [
        "martial-arts",
        "action-spectacle"
      ],
      "synopsis": "An avenging cop seeks out his brother's killer and falls for the daughter of a businessman who is involved in a money-deal with his father.",
      "tags": [
        "jet-li",
        "aaliyah",
        "x-ray-moves"
      ],
      "trailerYoutubeId": "w500paj_MPU",
      "poster": "./posters/romeo-must-die.jpg"
    },
    {
      "id": "curse-of-the-golden-flower",
      "title": "Curse of the Golden Flower",
      "year": 2007,
      "director": "Yimou Zhang",
      "rating": 7,
      "rank": 344,
      "runtime": "114 min",
      "genreIds": [
        "martial-arts",
        "fantasy-epics",
        "biopic-epics"
      ],
      "synopsis": "During China's Tang dynasty the emperor has taken the princess of a neighboring province as wife. She has borne him two sons and raised his eldest. Now his control over his dominion is complete, including the royal family itself.",
      "tags": [
        "zhang-yimou",
        "chow-yun-fat",
        "gong-li",
        "palace-intrigue"
      ],
      "trailerYoutubeId": "MqiD9MDFKGQ",
      "poster": "./posters/curse-of-the-golden-flower.jpg"
    },
    {
      "id": "13-assassins",
      "title": "13 Assassins",
      "year": 2010,
      "director": "Takashi Miike",
      "rating": 7.5,
      "rank": 345,
      "runtime": "141 min",
      "genreIds": [
        "martial-arts",
        "action-spectacle",
        "biopic-epics"
      ],
      "synopsis": "A group of assassins come together for a suicide mission to kill an evil lord.",
      "tags": [
        "takashi-miike",
        "45-minute-siege",
        "total-massacre"
      ],
      "trailerYoutubeId": "rcVf_qzfaJQ",
      "poster": "./posters/13-assassins.jpg"
    },
    {
      "id": "sanjuro",
      "title": "Sanjuro",
      "year": 1963,
      "director": "Akira Kurosawa",
      "rating": 8,
      "rank": 346,
      "runtime": "96 min",
      "genreIds": [
        "martial-arts",
        "action-spectacle",
        "satire-dark-comedy"
      ],
      "synopsis": "A crafty samurai helps a young man and his fellow clansmen trying to save his uncle, who has been framed and imprisoned by a corrupt superintendent.",
      "tags": [
        "akira-kurosawa",
        "toshiro-mifune",
        "blood-spray-duel"
      ],
      "trailerYoutubeId": "Uq_rSsbhQnE",
      "poster": "./posters/sanjuro.jpg"
    },
    {
      "id": "throne-of-blood",
      "title": "Throne of Blood",
      "year": 1961,
      "director": "Akira Kurosawa",
      "rating": 8,
      "rank": 348,
      "runtime": "110 min",
      "genreIds": [
        "fantasy-epics",
        "biopic-epics",
        "martial-arts"
      ],
      "synopsis": "A war-hardened general, egged on by his ambitious wife, works to fulfill a prophecy that he would become lord of Spider's Web Castle.",
      "tags": [
        "akira-kurosawa",
        "macbeth",
        "arrow-barrage"
      ],
      "trailerYoutubeId": "LY7ETIO1KB8",
      "poster": "./posters/throne-of-blood.jpg"
    },
    {
      "id": "kagemusha",
      "title": "Kagemusha: The Shadow Warrior",
      "year": 1980,
      "director": "Akira Kurosawa",
      "rating": 7.9,
      "rank": 349,
      "runtime": "162 min",
      "genreIds": [
        "biopic-epics",
        "martial-arts",
        "action-spectacle"
      ],
      "synopsis": "A petty thief with an utter resemblance to a samurai warlord is hired as the lord's double. When the warlord later dies the thief is forced to take up arms in his place.",
      "tags": [
        "akira-kurosawa",
        "shadow-warrior",
        "palme-dor"
      ],
      "trailerYoutubeId": "Fvn3giWYZTg",
      "poster": "./posters/kagemusha.jpg"
    },
    {
      "id": "zatoichi",
      "title": "The Blind Swordsman: Zatoichi",
      "year": 2003,
      "director": "Takeshi Kitano",
      "rating": 7.4,
      "rank": 350,
      "runtime": "116 min",
      "genreIds": [
        "martial-arts",
        "satire-dark-comedy",
        "action-spectacle"
      ],
      "synopsis": "The blind masseur/swordsman comes to a town in control of warring gangs, and while bunking with a farming family, he meets two women with their own agenda.",
      "tags": [
        "takeshi-kitano",
        "blind-masseur",
        "tap-dance-finale"
      ],
      "trailerYoutubeId": "hfMSfvmUPH8",
      "poster": "./posters/zatoichi.jpg"
    },
    {
      "id": "lone-wolf-and-cub-sword-of-vengeance",
      "title": "Lone Wolf and Cub: Sword of Vengeance",
      "year": 1972,
      "director": "Kenji Misumi",
      "rating": 7.7,
      "rank": 353,
      "runtime": "84 min",
      "genreIds": [
        "martial-arts",
        "action-spectacle"
      ],
      "synopsis": "The story of a Ronin (i.e. a masterless samurai) who wanders the countryside of Japan with his small child, having various adventures.",
      "tags": [
        "ogami-itto",
        "baby-cart-arsenal",
        "blood-spray"
      ],
      "trailerYoutubeId": "uwofy9p6Iwk",
      "poster": "./posters/lone-wolf-and-cub-sword-of-vengeance.jpg"
    },
    {
      "id": "the-man-from-nowhere",
      "title": "The Man from Nowhere",
      "year": 2010,
      "director": "Lee Jeong-beom",
      "rating": 7.7,
      "rank": 355,
      "runtime": "119 min",
      "genreIds": [
        "martial-arts",
        "neo-noir",
        "action-spectacle"
      ],
      "synopsis": "A quiet pawnshop keeper with a violent past takes on a drug-and-organ trafficking ring in hope of saving the child who is his only friend.",
      "tags": [
        "won-bin",
        "silat-knife-duel",
        "korean-thriller"
      ],
      "trailerYoutubeId": "38rPoGSr19U",
      "poster": "./posters/the-man-from-nowhere.jpg"
    },
    {
      "id": "the-night-comes-for-us",
      "title": "The Night Comes for Us",
      "year": 2018,
      "director": "Timo Tjahjanto",
      "rating": 6.9,
      "rank": 357,
      "runtime": "121 min",
      "genreIds": [
        "martial-arts",
        "action-spectacle",
        "modern-horror"
      ],
      "synopsis": "Ito, a gangland enforcer, is caught amidst a treacherous and violent insurrection within his Triad crime family upon his return home from a stint abroad.",
      "tags": [
        "joe-taslim",
        "iko-uwais",
        "ultra-violent-silat"
      ],
      "trailerYoutubeId": "HfSisHrUTLM",
      "poster": "./posters/the-night-comes-for-us.jpg"
    },
    {
      "id": "boy-kills-world",
      "title": "Boy Kills World",
      "year": 2024,
      "director": "Moritz Mohr",
      "rating": 6.4,
      "rank": 359,
      "runtime": "111 min",
      "genreIds": [
        "martial-arts",
        "action-spectacle",
        "post-apocalyptic"
      ],
      "synopsis": "A fever dream action film that follows Boy, a deaf person with a vibrant imagination. When his family is murdered, he is trained by a mysterious shaman to repress his childish imagination and become an instrument of death.",
      "tags": [
        "bill-skarsgard",
        "deaf-mute-assassin",
        "hyper-stylized"
      ],
      "trailerYoutubeId": "tztCsUyiQv8",
      "poster": "./posters/boy-kills-world.jpg"
    },
    {
      "id": "when-marnie-was-there",
      "title": "When Marnie Was There",
      "year": 2015,
      "director": "Hiromasa Yonebayashi",
      "rating": 7.6,
      "rank": 360,
      "runtime": "103 min",
      "genreIds": [
        "anime-masterpieces",
        "mystery-whodunit"
      ],
      "synopsis": "Anna, a shy 12-year-old girl, is sent to spend time with her aunt and uncle who live in the countryside, where she meets Marnie. The two become best friends. But Anna gradually discovers that Marnie is not quite who she appears to...",
      "tags": [
        "studio-ghibli",
        "marsh-mansion",
        "ghostly-friendship"
      ],
      "trailerYoutubeId": "jjmrxqcQdYg",
      "poster": "./posters/when-marnie-was-there.jpg"
    },
    {
      "id": "patlabor-2-the-movie",
      "title": "Patlabor 2: The Movie",
      "year": 1993,
      "director": "Mamoru Oshii",
      "rating": 7.5,
      "rank": 361,
      "runtime": "113 min",
      "genreIds": [
        "anime-masterpieces",
        "sci-fi",
        "neo-noir"
      ],
      "synopsis": "When a terrorist attack is blamed on the Air Force, Special Vehicle Unit 2 gets caught in the middle of a growing political conflict.",
      "tags": [
        "mamoru-oshii",
        "tokyo-siege",
        "philosophical-warfare"
      ],
      "trailerYoutubeId": "bRYWHzTVkow",
      "poster": "./posters/patlabor-2-the-movie.jpg"
    },
    {
      "id": "jin-roh-the-wolf-brigade",
      "title": "Jin-Roh: The Wolf Brigade",
      "year": 1999,
      "director": "Hiroyuki Okiura",
      "rating": 7.3,
      "rank": 362,
      "runtime": "102 min",
      "genreIds": [
        "anime-masterpieces",
        "neo-noir",
        "sci-fi"
      ],
      "synopsis": "A traumatized member of an elite para-military police force falls for the sister of a female terrorist courier who died in front of him on duty.",
      "tags": [
        "hiroyuki-okiura",
        "mamoru-oshii",
        "kerberos-panzer-cops"
      ],
      "trailerYoutubeId": "leTBtP_pUm0",
      "poster": "./posters/jin-roh-the-wolf-brigade.jpg"
    },
    {
      "id": "whisper-of-the-heart",
      "title": "Whisper of the Heart",
      "year": 1996,
      "director": "Yoshifumi Kondo",
      "rating": 7.8,
      "rank": 363,
      "runtime": "111 min",
      "genreIds": [
        "anime-masterpieces"
      ],
      "synopsis": "A love story between a girl who loves reading books and a boy who has previously checked out all of the library books she chooses.",
      "tags": [
        "yoshifumi-kondo",
        "country-road",
        "baron-statue"
      ],
      "trailerYoutubeId": "0pVkiod6V0U",
      "poster": "./posters/whisper-of-the-heart.jpg"
    },
    {
      "id": "5-centimeters-per-second",
      "title": "5 Centimeters per Second",
      "year": 2007,
      "director": "Makoto Shinkai",
      "rating": 7.4,
      "rank": 364,
      "runtime": "63 min",
      "genreIds": [
        "anime-masterpieces"
      ],
      "synopsis": "Told in three interconnected segments, Takaki tells the story of his life as cruel winters, cold technology, and finally, adult obligations and responsibility converge to test the delicate petals of love.",
      "tags": [
        "makoto-shinkai",
        "cherry-blossoms",
        "distance-and-longing"
      ],
      "trailerYoutubeId": "wdM7athAem0",
      "poster": "./posters/5-centimeters-per-second.jpg"
    },
    {
      "id": "the-garden-of-words",
      "title": "The Garden of Words",
      "year": 2013,
      "director": "Makoto Shinkai",
      "rating": 7.4,
      "rank": 365,
      "runtime": "46 min",
      "genreIds": [
        "anime-masterpieces"
      ],
      "synopsis": "On a rainy morning in Tokyo, 15-year-old Takao, an aspiring shoemaker, decides to skip class to sketch designs in a beautiful garden. This is where he meets Yukari, a beautiful yet mysterious woman. They strike an unlikely friends...",
      "tags": [
        "makoto-shinkai",
        "rainy-park",
        "shoemaker-apprentice"
      ],
      "trailerYoutubeId": "FMabhvDoolc",
      "poster": "./posters/the-garden-of-words.jpg"
    },
    {
      "id": "the-boy-and-the-beast",
      "title": "The Boy and the Beast",
      "year": 2015,
      "director": "Mamoru Hosoda",
      "rating": 7.6,
      "rank": 367,
      "runtime": "119 min",
      "genreIds": [
        "anime-masterpieces",
        "fantasy-epics",
        "martial-arts"
      ],
      "synopsis": "When a young orphaned boy living on the streets of Shibuya stumbles upon a fantastic world of beasts, he's taken in by a gruff warrior beast looking for an apprentice.",
      "tags": [
        "mamoru-hosoda",
        "beast-realm",
        "kumatetsu-sword"
      ],
      "trailerYoutubeId": "uifJLWoWv8c",
      "poster": "./posters/the-boy-and-the-beast.jpg"
    },
    {
      "id": "summer-wars",
      "title": "Summer Wars",
      "year": 2009,
      "director": "Mamoru Hosoda",
      "rating": 7.4,
      "rank": 368,
      "runtime": "114 min",
      "genreIds": [
        "anime-masterpieces",
        "cyberpunk",
        "sci-fi"
      ],
      "synopsis": "A student tries to fix a problem he accidentally caused in OZ, a digital world, while pretending to be the fianc\u00e9 of his friend at her grandmother's 90th birthday.",
      "tags": [
        "mamoru-hosoda",
        "oz-virtual-world",
        "family-clan"
      ],
      "trailerYoutubeId": "UbmdYasVDDg",
      "poster": "./posters/summer-wars.jpg"
    },
    {
      "id": "liz-and-the-blue-bird",
      "title": "Liz and the Blue Bird",
      "year": 2018,
      "director": "Naoko Yamada",
      "rating": 7.2,
      "rank": 369,
      "runtime": "90 min",
      "genreIds": [
        "anime-masterpieces"
      ],
      "synopsis": "Best friends in their last year of high school realise there is no such thing as being together forever.",
      "tags": [
        "naoko-yamada",
        "kyoto-animation",
        "oboe-and-flute"
      ],
      "trailerYoutubeId": "QR33NrbOUgE",
      "poster": "./posters/liz-and-the-blue-bird.jpg"
    },
    {
      "id": "the-girl-who-leapt-through-time",
      "title": "The Girl Who Leapt Through Time",
      "year": 2006,
      "director": "Mamoru Hosoda",
      "rating": 7.6,
      "rank": 370,
      "runtime": "98 min",
      "genreIds": [
        "anime-masterpieces",
        "time-travel",
        "sci-fi"
      ],
      "synopsis": "A high-school girl named Makoto acquires the power to travel back in time, and decides to use it for her own personal benefits. Little does she know that she is affecting the lives of others just as much as she is her own.",
      "tags": [
        "mamoru-hosoda",
        "time-leap",
        "nostalgic-summer"
      ],
      "trailerYoutubeId": "eWnTeKEsDlU",
      "poster": "./posters/the-girl-who-leapt-through-time.jpg"
    },
    {
      "id": "promare",
      "title": "Promare",
      "year": 2019,
      "director": "Hiroyuki Imaishi",
      "rating": 7,
      "rank": 371,
      "runtime": "111 min",
      "genreIds": [
        "anime-masterpieces",
        "action-spectacle",
        "sci-fi"
      ],
      "synopsis": "A futuristic firefighting mecha service is created to protect the world.",
      "tags": [
        "studio-trigger",
        "hiroyuki-imaishi",
        "burnish-firefighters",
        "neon-geometric"
      ],
      "trailerYoutubeId": "UO91f-C_hlA",
      "poster": "./posters/promare.jpg"
    },
    {
      "id": "sword-of-the-stranger",
      "title": "Sword of the Stranger",
      "year": 2009,
      "director": "Masahiro And\u00f4",
      "rating": 7.7,
      "rank": 372,
      "runtime": "103 min",
      "genreIds": [
        "anime-masterpieces",
        "martial-arts",
        "action-spectacle"
      ],
      "synopsis": "A swordsman from a strange land is caught in a struggle between morality, righteousness, and devotion as he reluctantly agrees to take a raggedy boy and his dog to a remote, Buddhist temple.",
      "tags": [
        "studio-bones",
        "nameless-ronin",
        "legendary-final-duel"
      ],
      "trailerYoutubeId": "ECRj6TKwPBg",
      "poster": "./posters/sword-of-the-stranger.jpg"
    },
    {
      "id": "the-end-of-evangelion",
      "title": "Neon Genesis Evangelion: The End of Evangelion",
      "year": 2024,
      "director": "Hideaki Anno, Kazuya Tsurumaki",
      "rating": 8.1,
      "rank": 373,
      "runtime": "87 min",
      "genreIds": [
        "anime-masterpieces",
        "mind-bending",
        "sci-fi"
      ],
      "synopsis": "As the military and a shadowy cabal assault NERV headquarters, troubled Eva pilot Shinji Ikari is forced back into battle, confronting a secret project that could decide humanity's fate.",
      "tags": [
        "hideaki-anno",
        "human-instrumentality",
        "third-impact"
      ],
      "trailerYoutubeId": "ljU0rBLR6kc",
      "poster": "./posters/the-end-of-evangelion.jpg"
    },
    {
      "id": "vampire-hunter-d-bloodlust",
      "title": "Vampire Hunter D: Bloodlust",
      "year": 2001,
      "director": "Yoshiaki Kawajiri",
      "rating": 7.7,
      "rank": 374,
      "runtime": "103 min",
      "genreIds": [
        "anime-masterpieces",
        "fantasy-epics",
        "sci-fi"
      ],
      "synopsis": "In the year 12,090 AD, the vampire hunter \"D\" is hired to rescue Charlotte Elbourne from the vampire nobleman Meier Link.",
      "tags": [
        "yoshiaki-kawajiri",
        "dunpeal-d",
        "gothic-post-apocalypse"
      ],
      "trailerYoutubeId": "44xT9LSrgJ4",
      "poster": "./posters/vampire-hunter-d-bloodlust.jpg"
    },
    {
      "id": "evangelion-3-0-1-0-thrice-upon-a-time",
      "title": "Evangelion: 3.0+1.0 Thrice Upon a Time",
      "year": 2021,
      "director": "Hideaki Anno, Mahiro Maeda, Katsuichi Nakayama",
      "rating": 8,
      "rank": 376,
      "runtime": "155 min",
      "genreIds": [
        "anime-masterpieces",
        "sci-fi",
        "mind-bending"
      ],
      "synopsis": "Misato and her anti-NERV group WILLE arrive in Paris, a city now red from core-ization. Crew from the flagship Wunder land on a containment tower.",
      "tags": [
        "hideaki-anno",
        "farewell-to-evangelion",
        "anti-universe"
      ],
      "trailerYoutubeId": "GZfuWMDEJpw",
      "poster": "./posters/evangelion-3-0-1-0-thrice-upon-a-time.jpg"
    },
    {
      "id": "the-night-is-short-walk-on-girl",
      "title": "The Night Is Short, Walk on Girl",
      "year": 2017,
      "director": "Masaaki Yuasa",
      "rating": 7.5,
      "rank": 377,
      "runtime": "92 min",
      "genreIds": [
        "anime-masterpieces",
        "satire-dark-comedy",
        "mind-bending"
      ],
      "synopsis": "In this comedy about one epic night in Kyoto, a college sophomore goes on a series of surreal encounters with the local nightlife, all the while unaware of the romantic longings of her classmate Senpai.",
      "tags": [
        "masaaki-yuasa",
        "kyoto-night-pub-crawl",
        "eccentric-surrealism"
      ],
      "trailerYoutubeId": "RGHXqjCbyEQ",
      "poster": "./posters/the-night-is-short-walk-on-girl.jpg"
    },
    {
      "id": "cowboy-bebop-the-movie",
      "title": "Cowboy Bebop: The Movie",
      "year": 2003,
      "director": "Yoshiyuki Takei, Shin&apos;ichiro Watanabe",
      "rating": 7.8,
      "rank": 378,
      "runtime": "115 min",
      "genreIds": [
        "anime-masterpieces",
        "cyberpunk",
        "action-spectacle"
      ],
      "synopsis": "A terrorist explosion releases a deadly virus on the masses and it's up to the bounty-hunting Bebop crew to catch the cold-blooded culprit.",
      "tags": [
        "shinichiro-watanabe",
        "spike-spiegel",
        "halloween-terrorist-vincent"
      ],
      "trailerYoutubeId": "zMipXzg969A",
      "poster": "./posters/cowboy-bebop-the-movie.jpg"
    },
    {
      "id": "evangelion-1-0-you-are-not-alone",
      "title": "Evangelion: 1.0 You Are (Not) Alone",
      "year": 2007,
      "director": "Hideaki Anno, Masayuki, K\u00f4bun Shizuno",
      "rating": 7.5,
      "rank": 379,
      "runtime": "98 min",
      "genreIds": [
        "anime-masterpieces",
        "sci-fi",
        "action-spectacle"
      ],
      "synopsis": "The fate of the world is threatened by seemingly monstrous entities known as Angels. NERV is an organization set up to counter this threat and it is up to young pilots to protect Earth but exactly what are the real motives behind ...",
      "tags": [
        "hideaki-anno",
        "shinji-ikari",
        "ramiel-operation-yashima"
      ],
      "trailerYoutubeId": "rof6qBz84vE",
      "poster": "./posters/evangelion-1-0-you-are-not-alone.jpg"
    },
    {
      "id": "demon-slayer-mugen-train",
      "title": "Demon Slayer: Kimetsu no Yaiba - The Movie: Mugen Train",
      "year": 2021,
      "director": "Haruo Sotozaki",
      "rating": 8.2,
      "rank": 381,
      "runtime": "117 min",
      "genreIds": [
        "anime-masterpieces",
        "fantasy-epics",
        "action-spectacle"
      ],
      "synopsis": "After his family was brutally murdered and his sister turned into a demon, Tanjiro Kamado's journey as a demon slayer began. Tanjiro and his comrades embark on a new mission aboard the Mugen Train, on track to despair.",
      "tags": [
        "ufotable",
        "rengoku-hashira",
        "infinite-dream-train"
      ],
      "trailerYoutubeId": "ATJYac_dORw",
      "poster": "./posters/demon-slayer-mugen-train.jpg"
    },
    {
      "id": "the-first-slam-dunk",
      "title": "The First Slam Dunk",
      "year": 2023,
      "director": "Takehiko Inoue",
      "rating": 8,
      "rank": 384,
      "runtime": "124 min",
      "genreIds": [
        "anime-masterpieces",
        "action-spectacle"
      ],
      "synopsis": "Follows 17-year-old Ryota Miyagi, who struggles to accomplish his late elder brother's dream of becoming a basketball star.",
      "tags": [
        "takehiko-inoue",
        "shohoku-vs-sannoh",
        "groundbreaking-3d-cel"
      ],
      "trailerYoutubeId": "l4nP-Zm9YAs",
      "poster": "./posters/the-first-slam-dunk.jpg"
    },
    {
      "id": "jujutsu-kaisen-0",
      "title": "Jujutsu Kaisen 0",
      "year": 2022,
      "director": "Sunghoo Park",
      "rating": 7.8,
      "rank": 385,
      "runtime": "112 min",
      "genreIds": [
        "anime-masterpieces",
        "fantasy-epics",
        "action-spectacle"
      ],
      "synopsis": "The prequel to Jujutsu Kaisen (2020), where a high schooler gains control of an extremely powerful cursed spirit and gets enrolled in the Tokyo Prefectural Jujutsu High School by Jujutsu Sorcerers.",
      "tags": [
        "mappa",
        "yuta-okkotsu",
        "rika-curse"
      ],
      "trailerYoutubeId": "2docezZl574",
      "poster": "./posters/jujutsu-kaisen-0.jpg"
    },
    {
      "id": "looper",
      "title": "Looper",
      "year": 2012,
      "director": "Rian Johnson",
      "rating": 7.4,
      "rank": 388,
      "runtime": "119 min",
      "genreIds": [
        "time-travel",
        "sci-fi",
        "neo-noir"
      ],
      "synopsis": "Criminal syndicates use illegal time travel to send targets into the past to be assassinated by hitmen known as Loopers.",
      "tags": [
        "rian-johnson",
        "bruce-willis",
        "joseph-gordon-levitt",
        "closing-the-loop"
      ],
      "trailerYoutubeId": "2iQuhsmtfHw",
      "poster": "./posters/looper.jpg"
    },
    {
      "id": "back-to-the-future-part-iii",
      "title": "Back to the Future Part III",
      "year": 1990,
      "director": "Robert Zemeckis",
      "rating": 7.5,
      "rank": 389,
      "runtime": "118 min",
      "genreIds": [
        "time-travel",
        "sci-fi",
        "action-spectacle"
      ],
      "synopsis": "Stranded in 1955, Marty McFly learns about the death of Doc Brown in 1885 and must travel back in time to save him. With no fuel readily available for the DeLorean, the two must figure how to escape the Old West before Emmett is m...",
      "tags": [
        "wild-west",
        "steam-locomotive-delorean",
        "clint-eastwood-alias"
      ],
      "trailerYoutubeId": "3C8c3EoEfw4",
      "poster": "./posters/back-to-the-future-part-iii.jpg"
    },
    {
      "id": "back-to-the-future-part-ii",
      "title": "Back to the Future Part II",
      "year": 1989,
      "director": "Robert Zemeckis",
      "rating": 7.8,
      "rank": 390,
      "runtime": "108 min",
      "genreIds": [
        "time-travel",
        "sci-fi",
        "satire-dark-comedy"
      ],
      "synopsis": "After visiting 2015, Marty McFly must repeat his visit to 1955 to prevent disastrous changes to 1985, without interfering with his first trip.",
      "tags": [
        "hoverboard",
        "2015-future",
        "alternate-timeline",
        "robert-zemeckis"
      ],
      "trailerYoutubeId": "MdENmefJRpw",
      "poster": "./posters/back-to-the-future-part-ii.jpg"
    },
    {
      "id": "steamboy",
      "title": "Steamboy",
      "year": 2005,
      "director": "Katsuhiro Otomo",
      "rating": 6.8,
      "rank": 391,
      "runtime": "126 min",
      "genreIds": [
        "anime-masterpieces",
        "sci-fi",
        "action-spectacle"
      ],
      "synopsis": "In 1860s Britain, a boy inventor finds himself caught in the middle of a deadly conflict over a revolutionary advance in steam power.",
      "tags": [
        "katsuhiro-otomo",
        "steampunk-victorian",
        "steam-ball"
      ],
      "trailerYoutubeId": "bI7-bx8QqZ8",
      "poster": "./posters/steamboy.jpg"
    },
    {
      "id": "run-lola-run",
      "title": "Run Lola Run",
      "year": 1999,
      "director": "Tom Tykwer",
      "rating": 7.6,
      "rank": 393,
      "runtime": "80 min",
      "genreIds": [
        "time-travel",
        "action-spectacle",
        "mind-bending"
      ],
      "synopsis": "After a botched money delivery, Lola has 20 minutes to come up with 100,000 Deutschmarks.",
      "tags": [
        "tom-tykwer",
        "franka-potente",
        "twenty-minute-sprint",
        "butterfly-divergence"
      ],
      "trailerYoutubeId": "ZCYnsUdO6H0",
      "poster": "./posters/run-lola-run.jpg"
    },
    {
      "id": "bill-ted-s-excellent-adventure",
      "title": "Bill & Ted's Excellent Adventure",
      "year": 1989,
      "director": "Stephen Herek",
      "rating": 6.9,
      "rank": 394,
      "runtime": "90 min",
      "genreIds": [
        "time-travel",
        "satire-dark-comedy",
        "sci-fi"
      ],
      "synopsis": "Two rock-'n-rolling teens, on the verge of failing their class, set out on a quest to make the ultimate school history report after being presented with a time machine.",
      "tags": [
        "keanu-reeves",
        "phone-booth",
        "historical-figures-report"
      ],
      "trailerYoutubeId": "q3fx6TugN7g",
      "poster": "./posters/bill-ted-s-excellent-adventure.jpg"
    },
    {
      "id": "bill-ted-s-bogus-journey",
      "title": "Bill & Ted's Bogus Journey",
      "year": 1991,
      "director": "Peter Hewitt",
      "rating": 6.3,
      "rank": 395,
      "runtime": "93 min",
      "genreIds": [
        "time-travel",
        "satire-dark-comedy",
        "fantasy-epics"
      ],
      "synopsis": "A tyrant from the future creates evil android doubles of Bill and Ted and sends them back to eliminate the originals.",
      "tags": [
        "keanu-reeves",
        "grim-reaper-battleship",
        "evil-robot-us"
      ],
      "trailerYoutubeId": "4JByLawP4tw",
      "poster": "./posters/bill-ted-s-bogus-journey.jpg"
    },
    {
      "id": "happy-death-day",
      "title": "Happy Death Day",
      "year": 2017,
      "director": "Christopher Landon",
      "rating": 6.6,
      "rank": 398,
      "runtime": "96 min",
      "genreIds": [
        "time-travel",
        "modern-horror",
        "satire-dark-comedy"
      ],
      "synopsis": "A college student must relive the day of her murder over and over again, in a loop that will end only when she discovers her killer's identity.",
      "tags": [
        "baby-mask-killer",
        "birthday-loop",
        "jessica-rothe"
      ],
      "trailerYoutubeId": "1NTaDm3atkc",
      "poster": "./posters/happy-death-day.jpg"
    },
    {
      "id": "happy-death-day-2u",
      "title": "Happy Death Day 2U",
      "year": 2019,
      "director": "Christopher Landon",
      "rating": 6.2,
      "rank": 400,
      "runtime": "100 min",
      "genreIds": [
        "time-travel",
        "sci-fi",
        "satire-dark-comedy"
      ],
      "synopsis": "Tree Gelbman discovers that dying over and over was surprisingly easier than the dangers that lie ahead.",
      "tags": [
        "sissy-quantum-loop",
        "alternate-dimensions",
        "multiverse-rules"
      ],
      "trailerYoutubeId": "IeXqWDFJZiw",
      "poster": "./posters/happy-death-day-2u.jpg"
    },
    {
      "id": "safety-not-guaranteed",
      "title": "Safety Not Guaranteed",
      "year": 2012,
      "director": "Colin Trevorrow",
      "rating": 6.9,
      "rank": 401,
      "runtime": "86 min",
      "genreIds": [
        "time-travel",
        "satire-dark-comedy",
        "sci-fi"
      ],
      "synopsis": "Three magazine employees head out on an assignment to interview a guy who placed a classified advertisement seeking a companion for time travel.",
      "tags": [
        "aubrey-plaza",
        "mark-duplass",
        "newspaper-classified-ad"
      ],
      "trailerYoutubeId": "73jSnAs7mq8",
      "poster": "./posters/safety-not-guaranteed.jpg"
    },
    {
      "id": "blue-velvet",
      "title": "Blue Velvet",
      "year": 1986,
      "director": "David Lynch",
      "rating": 7.7,
      "rank": 402,
      "runtime": "120 min",
      "genreIds": [
        "neo-noir",
        "mind-bending",
        "mystery-whodunit"
      ],
      "synopsis": "A young man finds a severed human ear that is somehow connected to a mysterious lounge singer and a group of psychopathic criminals who have kidnapped her child.",
      "tags": [
        "david-lynch",
        "severed-ear",
        "frank-booth-oxygen-mask"
      ],
      "trailerYoutubeId": "rAA6imfqMYQ",
      "poster": "./posters/blue-velvet.jpg"
    },
    {
      "id": "requiem-for-a-dream",
      "title": "Requiem for a Dream",
      "year": 2000,
      "director": "Darren Aronofsky",
      "rating": 8.3,
      "rank": 403,
      "runtime": "102 min",
      "genreIds": [
        "mind-bending",
        "modern-horror"
      ],
      "synopsis": "Four Coney Island dreamers chase love, fame, and escape, but addiction and obsession begin to distort their hopes for a better life.",
      "tags": [
        "darren-aronofsky",
        "hip-hop-montage",
        "addiction-abyss"
      ],
      "trailerYoutubeId": "QBwzN4v1vA0",
      "poster": "./posters/requiem-for-a-dream.jpg"
    },
    {
      "id": "the-fountain",
      "title": "The Fountain",
      "year": 2006,
      "director": "Darren Aronofsky",
      "rating": 7.1,
      "rank": 404,
      "runtime": "97 min",
      "genreIds": [
        "mind-bending",
        "sci-fi",
        "fantasy-epics"
      ],
      "synopsis": "As a modern-day scientist, Tommy is struggling with mortality, desperately searching for the medical breakthrough that will save the life of his cancer-stricken wife, Izzi.",
      "tags": [
        "darren-aronofsky",
        "tree-of-life",
        "clint-mansell-score"
      ],
      "trailerYoutubeId": "m8IlyFCbNZg",
      "poster": "./posters/the-fountain.jpg"
    },
    {
      "id": "lost-highway",
      "title": "Lost Highway",
      "year": 1997,
      "director": "David Lynch",
      "rating": 7.6,
      "rank": 408,
      "runtime": "134 min",
      "genreIds": [
        "mind-bending",
        "neo-noir"
      ],
      "synopsis": "Anonymous videotapes presage a musician's murder conviction, and a gangster's girlfriend leads a mechanic astray.",
      "tags": [
        "david-lynch",
        "mystery-man",
        "psychogenic-fugue"
      ],
      "trailerYoutubeId": "INuQw8uexyo",
      "poster": "./posters/lost-highway.jpg"
    },
    {
      "id": "eraserhead",
      "title": "Eraserhead",
      "year": 1978,
      "director": "David Lynch",
      "rating": 7.2,
      "rank": 409,
      "runtime": "89 min",
      "genreIds": [
        "mind-bending",
        "modern-horror"
      ],
      "synopsis": "Henry Spencer tries to survive his industrial environment, his angry girlfriend, and the unbearable screams of his newborn mutant child.",
      "tags": [
        "david-lynch",
        "lady-in-the-radiator",
        "industrial-dread"
      ],
      "trailerYoutubeId": "7WAzFWu2tVw",
      "poster": "./posters/eraserhead.jpg"
    },
    {
      "id": "being-john-malkovich",
      "title": "Being John Malkovich",
      "year": 1999,
      "director": "Spike Jonze",
      "rating": 7.7,
      "rank": 410,
      "runtime": "113 min",
      "genreIds": [
        "mind-bending",
        "satire-dark-comedy",
        "fantasy-epics"
      ],
      "synopsis": "A puppeteer discovers a portal that leads literally into the head of movie star John Malkovich.",
      "tags": [
        "charlie-kaufman",
        "spike-jonze",
        "portal-in-floor-7-and-a-half"
      ],
      "trailerYoutubeId": "LEtlqumjXLw",
      "poster": "./posters/being-john-malkovich.jpg"
    },
    {
      "id": "eternal-sunshine-of-the-spotless-mind",
      "title": "Eternal Sunshine of the Spotless Mind",
      "year": 2004,
      "director": "Michel Gondry",
      "rating": 8.3,
      "rank": 412,
      "runtime": "108 min",
      "genreIds": [
        "mind-bending",
        "sci-fi"
      ],
      "synopsis": "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories forever.",
      "tags": [
        "michel-gondry",
        "lacuna-inc",
        "memory-erasure",
        "jim-carrey"
      ],
      "trailerYoutubeId": "07-QBnEkgXU",
      "poster": "./posters/eternal-sunshine-of-the-spotless-mind.jpg"
    },
    {
      "id": "synecdoche-new-york",
      "title": "Synecdoche, New York",
      "year": 2009,
      "director": "Charlie Kaufman",
      "rating": 7.5,
      "rank": 413,
      "runtime": "124 min",
      "genreIds": [
        "mind-bending",
        "satire-dark-comedy"
      ],
      "synopsis": "A theater director struggles with his work and the women in his life as he creates a life-size replica of New York City inside a warehouse as part of his new play.",
      "tags": [
        "charlie-kaufman",
        "philip-seymour-hoffman",
        "warehouse-replica-life"
      ],
      "trailerYoutubeId": "i2q8F0yRmrs",
      "poster": "./posters/synecdoche-new-york.jpg"
    },
    {
      "id": "vanilla-sky",
      "title": "Vanilla Sky",
      "year": 2001,
      "director": "Cameron Crowe",
      "rating": 6.9,
      "rank": 416,
      "runtime": "136 min",
      "genreIds": [
        "mind-bending",
        "sci-fi",
        "neo-noir"
      ],
      "synopsis": "A self-indulgent and vain publishing magnate finds his privileged life upended after a vehicular accident with a resentful lover.",
      "tags": [
        "cameron-crowe",
        "tom-cruise",
        "lucid-dreaming-cryonics"
      ],
      "trailerYoutubeId": "k09OX40NLUw",
      "poster": "./posters/vanilla-sky.jpg"
    },
    {
      "id": "the-truman-show",
      "title": "The Truman Show",
      "year": 1998,
      "director": "Peter Weir",
      "rating": 8.2,
      "rank": 417,
      "runtime": "103 min",
      "genreIds": [
        "mind-bending",
        "sci-fi",
        "satire-dark-comedy"
      ],
      "synopsis": "An insurance salesman begins to suspect that his whole life is actually some sort of reality TV show.",
      "tags": [
        "peter-weir",
        "jim-carrey",
        "seahaven-giant-dome"
      ],
      "trailerYoutubeId": "dlnmQbPGuls",
      "poster": "./posters/the-truman-show.jpg"
    },
    {
      "id": "under-the-silver-lake",
      "title": "Under the Silver Lake",
      "year": 2019,
      "director": "David Robert Mitchell",
      "rating": 6.5,
      "rank": 420,
      "runtime": "139 min",
      "genreIds": [
        "mind-bending",
        "mystery-whodunit",
        "neo-noir"
      ],
      "synopsis": "Sam, a disenchanted young man, finds a mysterious woman swimming in his apartment's pool one night. The next morning, she disappears. Sam sets off across LA to find her, and along the way he uncovers a conspiracy far more bizarre.",
      "tags": [
        "david-robert-mitchell",
        "andrew-garfield",
        "pop-culture-subliminal-codes"
      ],
      "trailerYoutubeId": "mwgUesU1pz4",
      "poster": "./posters/under-the-silver-lake.jpg"
    },
    {
      "id": "upstream-color",
      "title": "Upstream Color",
      "year": 2013,
      "director": "Shane Carruth",
      "rating": 6.5,
      "rank": 421,
      "runtime": "96 min",
      "genreIds": [
        "mind-bending",
        "sci-fi"
      ],
      "synopsis": "A man and woman are drawn together, entangled in the life cycle of an ageless organism. Identity becomes an illusion as they struggle to assemble the loose fragments of wrecked lives.",
      "tags": [
        "shane-carruth",
        "parasitic-larva",
        "pig-symbiosis"
      ],
      "trailerYoutubeId": "SilYsr_3vrA",
      "poster": "./posters/upstream-color.jpg"
    },
    {
      "id": "i-m-thinking-of-ending-things",
      "title": "I'm Thinking of Ending Things",
      "year": 2020,
      "director": "Charlie Kaufman",
      "rating": 6.5,
      "rank": 424,
      "runtime": "134 min",
      "genreIds": [
        "mind-bending"
      ],
      "synopsis": "Full of misgivings, a young woman travels with her new boyfriend to his parents' secluded farm. Upon arriving, she comes to question everything she thought she knew about him, and herself.",
      "tags": [
        "charlie-kaufman",
        "jessie-buckley",
        "blizzard-farmhouse-unravelling"
      ],
      "trailerYoutubeId": "cDTg62vsV4U",
      "poster": "./posters/i-m-thinking-of-ending-things.jpg"
    },
    {
      "id": "robocop-2",
      "title": "RoboCop 2",
      "year": 1990,
      "director": "Irvin Kershner",
      "rating": 5.9,
      "rank": 426,
      "runtime": "117 min",
      "genreIds": [
        "cyberpunk",
        "sci-fi",
        "action-spectacle"
      ],
      "synopsis": "In bankrupt Detroit, RoboCop battles a fanatical drug lord pushing a synthetic narcotic called Nuke while OCP engineers a monstrous successor unit using the cult leader's transplanted brain.",
      "tags": [
        "irvin-kershner",
        "frank-miller",
        "cain-nuke-cult"
      ],
      "trailerYoutubeId": "HNcy89RqF5Q",
      "poster": "./posters/robocop-2.jpg"
    },
    {
      "id": "johnny-mnemonic",
      "title": "Johnny Mnemonic",
      "year": 1995,
      "director": "Robert Longo",
      "rating": 5.6,
      "rank": 427,
      "runtime": "96 min",
      "genreIds": [
        "cyberpunk",
        "sci-fi",
        "action-spectacle"
      ],
      "synopsis": "A data courier, literally carrying a data package inside his head, must deliver it before he dies from the burden or is killed by the Yakuza.",
      "tags": [
        "william-gibson",
        "keanu-reeves",
        "80-gigabyte-brain-implant",
        "dolphin-hacker"
      ],
      "trailerYoutubeId": "EFJY_BZ55sI",
      "poster": "./posters/johnny-mnemonic.jpg"
    },
    {
      "id": "tetsuo-the-iron-man",
      "title": "Tetsuo: The Iron Man",
      "year": 1989,
      "director": "Shin&apos;ya Tsukamoto",
      "rating": 6.9,
      "rank": 430,
      "runtime": "67 min",
      "genreIds": [
        "cyberpunk",
        "modern-horror",
        "mind-bending"
      ],
      "synopsis": "A businessman accidentally kills The Metal Fetishist, who gets his revenge by slowly turning the man into a grotesque hybrid of flesh and rusty metal.",
      "tags": [
        "shinya-tsukamoto",
        "industrial-metal-flesh",
        "biomechanical-nightmare"
      ],
      "trailerYoutubeId": "ShJvheZHXdI",
      "poster": "./posters/tetsuo-the-iron-man.jpg"
    },
    {
      "id": "the-running-man",
      "title": "256: Turkey Shoot - Insel der Verdammten (1982) & The Running Man (1987)",
      "year": 2018,
      "director": "Visionary Filmmaker",
      "rating": 7.5,
      "rank": 434,
      "runtime": "65 min",
      "genreIds": [
        "cyberpunk",
        "action-spectacle",
        "satire-dark-comedy"
      ],
      "synopsis": "An acclaimed cinematic masterpiece featuring breathtaking vision and performances.",
      "tags": [
        "arnold-schwarzenegger",
        "game-show-gladiators",
        "subzero-and-dynamo"
      ],
      "trailerYoutubeId": "KD18ddeFuyM",
      "poster": "./posters/the-running-man.jpg"
    },
    {
      "id": "demolition-man",
      "title": "Demolition Man",
      "year": 1993,
      "director": "Marco Brambilla",
      "rating": 6.7,
      "rank": 435,
      "runtime": "115 min",
      "genreIds": [
        "cyberpunk",
        "action-spectacle",
        "satire-dark-comedy"
      ],
      "synopsis": "A police officer is brought out of suspended animation in prison to pursue an old ultra-violent nemesis who is loose in a non-violent future society.",
      "tags": [
        "sylvester-stallone",
        "wesley-snipes",
        "three-seashells",
        "san-angeles"
      ],
      "trailerYoutubeId": "0B5v6QZ5R3g",
      "poster": "./posters/demolition-man.jpg"
    },
    {
      "id": "a-scanner-darkly",
      "title": "A Scanner Darkly",
      "year": 2006,
      "director": "Richard Linklater",
      "rating": 7,
      "rank": 440,
      "runtime": "100 min",
      "genreIds": [
        "cyberpunk",
        "mind-bending",
        "sci-fi"
      ],
      "synopsis": "An undercover cop in a not-too-distant future becomes involved with a dangerous new drug and begins to lose his own identity as a result.",
      "tags": [
        "richard-linklater",
        "philip-k-dick",
        "scramble-suit",
        "substance-d"
      ],
      "trailerYoutubeId": "hkjDUERgCQw",
      "poster": "./posters/a-scanner-darkly.jpg"
    },
    {
      "id": "the-thirteenth-floor",
      "title": "The Thirteenth Floor",
      "year": 1999,
      "director": "Josef Rusnak",
      "rating": 7,
      "rank": 441,
      "runtime": "100 min",
      "genreIds": [
        "cyberpunk",
        "sci-fi",
        "mind-bending"
      ],
      "synopsis": "A computer scientist becomes the primary suspect in his mentor's murder.",
      "tags": [
        "simulated-1937-los-angeles",
        "nested-realities",
        "green-wireframe-boundary"
      ],
      "trailerYoutubeId": "FbafEoDdQgA",
      "poster": "./posters/the-thirteenth-floor.jpg"
    },
    {
      "id": "space-sweepers",
      "title": "Space Sweepers",
      "year": 2021,
      "director": "Jo Sung-hee",
      "rating": 6.5,
      "rank": 445,
      "runtime": "136 min",
      "genreIds": [
        "space-exploration",
        "action-spectacle",
        "sci-fi"
      ],
      "synopsis": "Set in the year 2092 and follows the crew of a space junk collector ship called The Victory. When they discover a humanoid robot named Dorothy that's known to be a weapon of mass destruction, they get involved in a risky business ...",
      "tags": [
        "korean-space-opera",
        "debris-salvage-crew",
        "nanobot-kot-nim"
      ],
      "trailerYoutubeId": "H1WYnJF1Pwo",
      "poster": "./posters/space-sweepers.jpg"
    },
    {
      "id": "the-neon-demon",
      "title": "The Neon Demon",
      "year": 2016,
      "director": "Nicolas Winding Refn",
      "rating": 6.1,
      "rank": 446,
      "runtime": "117 min",
      "genreIds": [
        "neo-noir",
        "modern-horror",
        "mind-bending"
      ],
      "synopsis": "An aspiring model, Jesse, is new to Los Angeles. However, her beauty and youth, which generate intense fascination and jealousy within the fashion industry, may prove themselves sinister.",
      "tags": [
        "nicolas-winding-refn",
        "la-fashion-vampirism",
        "cliff-martinez-score"
      ],
      "trailerYoutubeId": "cipOTUO0CmU",
      "poster": "./posters/the-neon-demon.jpg"
    },
    {
      "id": "the-french-connection",
      "title": "The French Connection",
      "year": 1971,
      "director": "William Friedkin",
      "rating": 7.6,
      "rank": 447,
      "runtime": "104 min",
      "genreIds": [
        "neo-noir",
        "action-spectacle",
        "biopic-epics"
      ],
      "synopsis": "A pair of NYPD detectives in the Narcotics Bureau stumble onto a heroin smuggling ring based in Marseilles, but stopping them and capturing their leaders proves an elusive goal.",
      "tags": [
        "william-friedkin",
        "gene-hackman",
        "popeye-doyle",
        "elevated-train-chase"
      ],
      "trailerYoutubeId": "ncWxtpXn3gA",
      "poster": "./posters/the-french-connection.jpg"
    },
    {
      "id": "serpico",
      "title": "Serpico",
      "year": 1973,
      "director": "Sidney Lumet",
      "rating": 7.7,
      "rank": 448,
      "runtime": "130 min",
      "genreIds": [
        "neo-noir",
        "biopic-epics"
      ],
      "synopsis": "An honest New York cop named Frank Serpico blows the whistle on rampant corruption in the force only to have his comrades turn against him.",
      "tags": [
        "sidney-lumet",
        "al-pacino",
        "nypd-whistleblower"
      ],
      "trailerYoutubeId": "eoP6bH2ymFo",
      "poster": "./posters/serpico.jpg"
    },
    {
      "id": "dog-day-afternoon",
      "title": "Dog Day Afternoon",
      "year": 1975,
      "director": "Sidney Lumet",
      "rating": 8,
      "rank": 449,
      "runtime": "125 min",
      "genreIds": [
        "neo-noir",
        "satire-dark-comedy",
        "biopic-epics"
      ],
      "synopsis": "Three amateur robbers plan to hold up a Brooklyn bank. A nice, simple robbery: Walk in, take the money, and run. Unfortunately, the supposedly uncomplicated heist suddenly becomes a bizarre nightmare as everything that could go wr...",
      "tags": [
        "sidney-lumet",
        "al-pacino",
        "attica-bank-hostage"
      ],
      "trailerYoutubeId": "Ne6KMHLTvik",
      "poster": "./posters/dog-day-afternoon.jpg"
    },
    {
      "id": "blood-simple",
      "title": "Blood Simple",
      "year": 1985,
      "director": "Joel Coen, Ethan Coen",
      "rating": 7.5,
      "rank": 450,
      "runtime": "99 min",
      "genreIds": [
        "neo-noir",
        "mystery-whodunit"
      ],
      "synopsis": "The owner of a seedy small-town Texas bar discovers that one of his employees is having an affair with his wife. A chaotic chain of misunderstandings, lies, and mischief ensues after he devises a plot to have them murdered.",
      "tags": [
        "coen-brothers",
        "texas-double-cross",
        "private-detective-visser"
      ],
      "trailerYoutubeId": "TFzPVLdGtAg",
      "poster": "./posters/blood-simple.jpg"
    },
    {
      "id": "the-man-who-wasn-t-there",
      "title": "The Man Who Wasn't There",
      "year": 2001,
      "director": "Joel Coen, Ethan Coen",
      "rating": 7.5,
      "rank": 452,
      "runtime": "116 min",
      "genreIds": [
        "neo-noir",
        "mystery-whodunit"
      ],
      "synopsis": "A laconic, chain-smoking barber blackmails his wife's boss and lover for money to invest in dry cleaning, but his plan goes terribly wrong.",
      "tags": [
        "coen-brothers",
        "billy-bob-thornton",
        "black-and-white-barber"
      ],
      "trailerYoutubeId": "htxvLcSnOU0",
      "poster": "./posters/the-man-who-wasn-t-there.jpg"
    },
    {
      "id": "inherent-vice",
      "title": "Inherent Vice",
      "year": 2015,
      "director": "Paul Thomas Anderson",
      "rating": 6.6,
      "rank": 453,
      "runtime": "148 min",
      "genreIds": [
        "neo-noir",
        "satire-dark-comedy",
        "mystery-whodunit"
      ],
      "synopsis": "In 1970, drug-fueled Los Angeles private investigator Larry \"Doc\" Sportello investigates the disappearance of a former girlfriend.",
      "tags": [
        "paul-thomas-anderson",
        "joaquin-phoenix",
        "doc-sportello",
        "thomas-pynchon"
      ],
      "trailerYoutubeId": "wZfs22E7JmI",
      "poster": "./posters/inherent-vice.jpg"
    },
    {
      "id": "the-untouchables",
      "title": "The Untouchables",
      "year": 1987,
      "director": "Brian De Palma",
      "rating": 7.8,
      "rank": 454,
      "runtime": "119 min",
      "genreIds": [
        "neo-noir",
        "action-spectacle",
        "biopic-epics"
      ],
      "synopsis": "During Prohibition, Treasury agent Eliot Ness sets out to stop ruthless Chicago gangster Al Capone, and assembles a small, incorruptible team to help him.",
      "tags": [
        "brian-de-palma",
        "kevin-costner",
        "sean-connery",
        "union-station-pram"
      ],
      "trailerYoutubeId": "2cGat1xI8G8",
      "poster": "./posters/the-untouchables.jpg"
    },
    {
      "id": "carlito-s-way",
      "title": "Carlito's Way",
      "year": 1993,
      "director": "Brian De Palma",
      "rating": 7.9,
      "rank": 456,
      "runtime": "144 min",
      "genreIds": [
        "neo-noir"
      ],
      "synopsis": "A recently released convict, determined to avoid making the same mistakes as before, is drawn into a fresh web of crime and corruption.",
      "tags": [
        "brian-de-palma",
        "al-pacino",
        "sean-penn",
        "grand-central-shootout"
      ],
      "trailerYoutubeId": "_ZMd4Baswb4",
      "poster": "./posters/carlito-s-way.jpg"
    },
    {
      "id": "gone-baby-gone",
      "title": "Gone Baby Gone",
      "year": 2007,
      "director": "Ben Affleck",
      "rating": 7.6,
      "rank": 457,
      "runtime": "114 min",
      "genreIds": [
        "mystery-whodunit",
        "neo-noir"
      ],
      "synopsis": "Two Boston area detectives investigate a little girl's kidnapping, which ultimately turns into a crisis both professionally and personally.",
      "tags": [
        "ben-affleck",
        "casey-affleck",
        "boston-detectives",
        "moral-quandary"
      ],
      "trailerYoutubeId": "Wzh4Q88sthY",
      "poster": "./posters/gone-baby-gone.jpg"
    },
    {
      "id": "sicario-day-of-the-soldado",
      "title": "Sicario: Day of the Soldado",
      "year": 2018,
      "director": "Stefano Sollima",
      "rating": 7.1,
      "rank": 458,
      "runtime": "122 min",
      "genreIds": [
        "neo-noir",
        "action-spectacle"
      ],
      "synopsis": "The drug war on the U.S.-Mexico border has escalated as the cartels have begun trafficking terrorists across the US border. To fight the war, federal agent Matt Graver re-teams with the mercurial Alejandro.",
      "tags": [
        "stefano-sollima",
        "benicio-del-toro",
        "josh-brolin",
        "cartel-warfare"
      ],
      "trailerYoutubeId": "sIMChzE_aCo",
      "poster": "./posters/sicario-day-of-the-soldado.jpg"
    },
    {
      "id": "road-to-perdition",
      "title": "Road to Perdition",
      "year": 2002,
      "director": "Sam Mendes",
      "rating": 7.6,
      "rank": 459,
      "runtime": "117 min",
      "genreIds": [
        "neo-noir",
        "action-spectacle"
      ],
      "synopsis": "A mob enforcer's son in 1930s Illinois witnesses a murder, forcing him and his father to take to the road, and his father down a path of redemption and revenge.",
      "tags": [
        "sam-mendes",
        "tom-hanks",
        "paul-newman",
        "conrad-hall-cinematography"
      ],
      "trailerYoutubeId": "OreveBlLfho",
      "poster": "./posters/road-to-perdition.jpg"
    },
    {
      "id": "a-history-of-violence",
      "title": "A History of Violence",
      "year": 2005,
      "director": "David Cronenberg",
      "rating": 7.4,
      "rank": 460,
      "runtime": "96 min",
      "genreIds": [
        "neo-noir",
        "action-spectacle"
      ],
      "synopsis": "A mild-mannered man becomes a local hero through an act of violence, which sets off repercussions that will shake his family to its very core.",
      "tags": [
        "david-cronenberg",
        "viggo-mortensen",
        "diner-alter-ego-clash"
      ],
      "trailerYoutubeId": "89oWVqLOXMw",
      "poster": "./posters/a-history-of-violence.jpg"
    },
    {
      "id": "la-haine",
      "title": "La haine",
      "year": 1996,
      "director": "Mathieu Kassovitz",
      "rating": 8.1,
      "rank": 463,
      "runtime": "98 min",
      "genreIds": [
        "neo-noir",
        "satire-dark-comedy"
      ],
      "synopsis": "24 hours in the lives of three young men in the French suburbs the day after a violent riot.",
      "tags": [
        "mathieu-kassovitz",
        "vincent-cassel",
        "paris-banlieue-24-hours"
      ],
      "trailerYoutubeId": "FKwcXt3JIaU",
      "poster": "./posters/la-haine.jpg"
    },
    {
      "id": "memories-of-murder",
      "title": "Memories of Murder",
      "year": 2003,
      "director": "Bong Joon Ho",
      "rating": 8.1,
      "rank": 464,
      "runtime": "131 min",
      "genreIds": [
        "mystery-whodunit",
        "neo-noir",
        "satire-dark-comedy"
      ],
      "synopsis": "In a small Korean province in 1986, two detectives struggle with the case of multiple young women being found raped and murdered by an unknown culprit.",
      "tags": [
        "bong-joon-ho",
        "song-kang-ho",
        "hwasung-serial-killer",
        "dropkick-investigation"
      ],
      "trailerYoutubeId": "ux6VHo5jQVw",
      "poster": "./posters/memories-of-murder.jpg"
    },
    {
      "id": "sympathy-for-mr-vengeance",
      "title": "Sympathy for Mr. Vengeance",
      "year": 2002,
      "director": "Park Chan-wook",
      "rating": 7.5,
      "rank": 465,
      "runtime": "129 min",
      "genreIds": [
        "neo-noir",
        "modern-horror"
      ],
      "synopsis": "A recently laid off factory worker kidnaps his former boss' friend's daughter, hoping to use the ransom money to pay for his sister's kidney transplant.",
      "tags": [
        "park-chan-wook",
        "shin-ha-kyun",
        "deaf-mute-kidnapping"
      ],
      "trailerYoutubeId": "3lOuAeUiNiY",
      "poster": "./posters/sympathy-for-mr-vengeance.jpg"
    },
    {
      "id": "decision-to-leave",
      "title": "Decision to Leave",
      "year": 2022,
      "director": "Park Chan-wook",
      "rating": 7.2,
      "rank": 467,
      "runtime": "139 min",
      "genreIds": [
        "neo-noir",
        "mystery-whodunit"
      ],
      "synopsis": "A detective investigating a man's death in the mountains meets the dead man's mysterious wife in the course of his dogged sleuthing.",
      "tags": [
        "park-chan-wook",
        "tang-wei",
        "cannes-best-director",
        "misty-mountain-sea"
      ],
      "trailerYoutubeId": "Bmoy73lhs-s",
      "poster": "./posters/decision-to-leave.jpg"
    },
    {
      "id": "lady-vengeance",
      "title": "Sympathy for Lady Vengeance",
      "year": 2005,
      "director": "Park Chan-wook",
      "rating": 7.5,
      "rank": 468,
      "runtime": "115 min",
      "genreIds": [
        "neo-noir",
        "mind-bending"
      ],
      "synopsis": "After being wrongfully imprisoned for thirteen years and having her child taken away from her, a woman seeks revenge through increasingly brutal means.",
      "tags": [
        "park-chan-wook",
        "lee-young-ae",
        "cake-maker-revenge"
      ],
      "trailerYoutubeId": "MM1XAl38l4k",
      "poster": "./posters/lady-vengeance.jpg"
    },
    {
      "id": "the-yellow-sea",
      "title": "The Yellow Sea",
      "year": 2011,
      "director": "Na Hong-jin",
      "rating": 7.3,
      "rank": 469,
      "runtime": "136 min",
      "genreIds": [
        "neo-noir",
        "action-spectacle"
      ],
      "synopsis": "When the attempt to kill a professor goes wrong, a series of violent events are triggered which force a taxi driver to run for his life.",
      "tags": [
        "na-hong-jin",
        "ha-jung-woo",
        "hatchet-brawls"
      ],
      "trailerYoutubeId": "aJKiI6pUMO4",
      "poster": "./posters/the-yellow-sea.jpg"
    },
    {
      "id": "glass-onion-a-knives-out-mystery",
      "title": "Netflix: The Glass Onion Cast Reacts to the Trailer for Glass Onion: A Knives Out Mystery",
      "year": 2022,
      "director": "Visionary Filmmaker",
      "rating": 6.3,
      "rank": 470,
      "runtime": "3 min",
      "genreIds": [
        "mystery-whodunit",
        "satire-dark-comedy"
      ],
      "synopsis": "An acclaimed cinematic masterpiece featuring breathtaking vision and performances.",
      "tags": [
        "rian-johnson",
        "daniel-craig",
        "miles-bron-greek-island"
      ],
      "trailerYoutubeId": "gj5ibYSz8C0",
      "poster": "./posters/glass-onion-a-knives-out-mystery.jpg"
    },
    {
      "id": "gosford-park",
      "title": "Gosford Park",
      "year": 2002,
      "director": "Robert Altman",
      "rating": 7.2,
      "rank": 471,
      "runtime": "137 min",
      "genreIds": [
        "mystery-whodunit",
        "satire-dark-comedy"
      ],
      "synopsis": "Set in the 1930s, a group of pretentious rich and famous get together for a weekend of hunting at a country estate. But when a murder occurs, each one of these interesting characters becomes a suspect.",
      "tags": [
        "robert-altman",
        "julian-fellowes",
        "english-country-estate-shooting"
      ],
      "trailerYoutubeId": "o0m00hg1PKY",
      "poster": "./posters/gosford-park.jpg"
    },
    {
      "id": "a-haunting-in-venice",
      "title": "A Haunting in Venice",
      "year": 2023,
      "director": "Kenneth Branagh",
      "rating": 6.5,
      "rank": 472,
      "runtime": "103 min",
      "genreIds": [
        "mystery-whodunit",
        "modern-horror"
      ],
      "synopsis": "In post-World War II Venice, Poirot, now retired and living in his own exile, reluctantly attends a seance. But when one of the guests is murdered, it is up to the former detective to once again uncover the killer.",
      "tags": [
        "kenneth-branagh",
        "hercule-poirot",
        "halloween-seance-palazzo"
      ],
      "trailerYoutubeId": "yEddsSwweyE",
      "poster": "./posters/a-haunting-in-venice.jpg"
    },
    {
      "id": "rear-window",
      "title": "Rear Window",
      "year": 1954,
      "director": "Alfred Hitchcock",
      "rating": 8.4,
      "rank": 473,
      "runtime": "112 min",
      "genreIds": [
        "mystery-whodunit",
        "neo-noir"
      ],
      "synopsis": "A bored photographer recovering from a broken leg passes the time by watching his neighbors and begins to suspect one of them of murder.",
      "tags": [
        "alfred-hitchcock",
        "james-stewart",
        "grace-kelly",
        "telephoto-courtyard-voyeurism"
      ],
      "trailerYoutubeId": "m01YktiEZCw",
      "poster": "./posters/rear-window.jpg"
    },
    {
      "id": "north-by-northwest",
      "title": "North by Northwest",
      "year": 1959,
      "director": "Alfred Hitchcock",
      "rating": 8.2,
      "rank": 478,
      "runtime": "136 min",
      "genreIds": [
        "mystery-whodunit",
        "action-spectacle"
      ],
      "synopsis": "A New York City advertising executive goes on the run after being mistaken for a government agent by a group of foreign spies, and falls for a woman whose loyalties he begins to doubt.",
      "tags": [
        "alfred-hitchcock",
        "cary-grant",
        "crop-duster-attack",
        "mount-rushmore"
      ],
      "trailerYoutubeId": "cPNiwc3ogIo",
      "poster": "./posters/north-by-northwest.jpg"
    },
    {
      "id": "dial-m-for-murder",
      "title": "Dial M for Murder",
      "year": 1954,
      "director": "Alfred Hitchcock",
      "rating": 8.1,
      "rank": 479,
      "runtime": "105 min",
      "genreIds": [
        "mystery-whodunit"
      ],
      "synopsis": "A jealous former tennis player plots the perfect murder of his wealthy wife in their London flat, triggering a tense trap of betrayal and evidence.",
      "tags": [
        "alfred-hitchcock",
        "grace-kelly",
        "latchkey-conspiracy",
        "telephone-cord-strangle"
      ],
      "trailerYoutubeId": "JWP_hrNHSN4",
      "poster": "./posters/dial-m-for-murder.jpg"
    },
    {
      "id": "sunset-boulevard",
      "title": "Sunset Boulevard",
      "year": 1950,
      "director": "Billy Wilder",
      "rating": 8.4,
      "rank": 483,
      "runtime": "110 min",
      "genreIds": [
        "neo-noir",
        "satire-dark-comedy"
      ],
      "synopsis": "A failed screenwriter falls into a mercenary romance with a faded silent-film star.",
      "tags": [
        "billy-wilder",
        "william-holden",
        "gloria-swanson",
        "ready-for-my-close-up"
      ],
      "trailerYoutubeId": "_dY0SVxnHjQ",
      "poster": "./posters/sunset-boulevard.jpg"
    },
    {
      "id": "double-indemnity",
      "title": "Double Indemnity",
      "year": 1944,
      "director": "Billy Wilder",
      "rating": 8.3,
      "rank": 485,
      "runtime": "107 min",
      "genreIds": [
        "neo-noir",
        "mystery-whodunit"
      ],
      "synopsis": "An insurance representative is seduced by a dissatisfied housewife into a scheme of insurance fraud and murder that arouses the suspicion of his colleague, a claims investigator.",
      "tags": [
        "billy-wilder",
        "fred-macmurray",
        "barbara-stanwyck",
        "train-stairs-claim"
      ],
      "trailerYoutubeId": "yKrrAa2o9Eg",
      "poster": "./posters/double-indemnity.jpg"
    },
    {
      "id": "smile-2",
      "title": "Smile 2",
      "year": 2024,
      "director": "Parker Finn",
      "rating": 6.7,
      "rank": 486,
      "runtime": "127 min",
      "genreIds": [
        "modern-horror"
      ],
      "synopsis": "About to embark on a world tour, global pop sensation Skye Riley begins experiencing increasingly terrifying and inexplicable events. Overwhelmed by the escalating horrors and the pressures of fame, Skye is forced to face her past.",
      "tags": [
        "parker-finn",
        "naomi-scott",
        "pop-superstar-nightmare"
      ],
      "trailerYoutubeId": "0HY6QFlBzUY",
      "poster": "./posters/smile-2.jpg"
    },
    {
      "id": "the-ghost-writer",
      "title": "The Ghost Writer",
      "year": 2010,
      "director": "Roman Polanski",
      "rating": 7.2,
      "rank": 487,
      "runtime": "128 min",
      "genreIds": [
        "mystery-whodunit",
        "neo-noir"
      ],
      "synopsis": "A ghostwriter uncovers a dark secret while working on the memoirs of England's former Prime Minister.",
      "tags": [
        "roman-polanski",
        "ewan-mcgregor",
        "pierce-brosnan",
        "marthas-vineyard-manuscript"
      ],
      "trailerYoutubeId": "B3NrIz5lwVo",
      "poster": "./posters/the-ghost-writer.jpg"
    },
    {
      "id": "it-chapter-two",
      "title": "It: Chapter Two",
      "year": 2019,
      "director": "Andy Muschietti",
      "rating": 6.5,
      "rank": 488,
      "runtime": "169 min",
      "genreIds": [
        "modern-horror",
        "fantasy-epics"
      ],
      "synopsis": "Twenty-seven years after their first encounter with the terrifying Pennywise, the Losers Club have grown up and moved away, until a devastating phone call brings them back.",
      "tags": [
        "andy-muschietti",
        "losers-club-adults",
        "ritual-of-chud"
      ],
      "trailerYoutubeId": "xhJ5P7Up3jA",
      "poster": "./posters/it-chapter-two.jpg"
    },
    {
      "id": "it",
      "title": "It (2017)",
      "year": 2017,
      "director": "Sol Harris, Allen Turing",
      "rating": 7.5,
      "rank": 489,
      "runtime": "2h 00m",
      "genreIds": [
        "modern-horror",
        "fantasy-epics"
      ],
      "synopsis": "Much like how Pennywise returns every 27 years to cause havoc, they're seemingly returning to Stephen King's It every 2 years to talk about the most recent screen-version of the story.",
      "tags": [
        "andy-muschietti",
        "bill-skarsgard",
        "pennywise-dancing-clown",
        "derry-sewers"
      ],
      "trailerYoutubeId": "xKJmEC5ieOk",
      "poster": "./posters/it.jpg"
    },
    {
      "id": "doctor-sleep",
      "title": "Doctor Sleep",
      "year": 2019,
      "director": "Mike Flanagan",
      "rating": 7.3,
      "rank": 490,
      "runtime": "152 min",
      "genreIds": [
        "modern-horror",
        "fantasy-epics",
        "mind-bending"
      ],
      "synopsis": "Years following the events of The Shining (1980), a now-adult Dan Torrance must protect a young girl with similar powers from a cult known as The True Knot, who prey on children with powers to remain immortal.",
      "tags": [
        "mike-flanagan",
        "ewan-mcgregor",
        "true-knot-cult",
        "overlook-hotel-revisit"
      ],
      "trailerYoutubeId": "BOzFZxB-8cw",
      "poster": "./posters/doctor-sleep.jpg"
    },
    {
      "id": "army-of-darkness",
      "title": "Army of Darkness",
      "year": 1993,
      "director": "Sam Raimi",
      "rating": 7.4,
      "rank": 492,
      "runtime": "81 min",
      "genreIds": [
        "satire-dark-comedy",
        "fantasy-epics",
        "action-spectacle"
      ],
      "synopsis": "When Ash Williams is accidentally transported to 1300 A.D., he must retrieve the Necronomicon and battle an army of the dead in order to return home.",
      "tags": [
        "sam-raimi",
        "bruce-campbell",
        "boomstick",
        "klatu-verata-nikto"
      ],
      "trailerYoutubeId": "UHZQEtG8xYo",
      "poster": "./posters/army-of-darkness.jpg"
    },
    {
      "id": "evil-dead-ii",
      "title": "Evil Dead II",
      "year": 1987,
      "director": "Sam Raimi",
      "rating": 7.6,
      "rank": 494,
      "runtime": "84 min",
      "genreIds": [
        "modern-horror",
        "satire-dark-comedy",
        "action-spectacle"
      ],
      "synopsis": "Ash Williams, the lone survivor of an earlier onslaught of flesh-possessing spirits, holes up in a cabin with a group of strangers while the demons continue their attack.",
      "tags": [
        "sam-raimi",
        "bruce-campbell",
        "chainsaw-hand",
        "grooviest-masterpiece"
      ],
      "trailerYoutubeId": "s7WNgzilRBw",
      "poster": "./posters/evil-dead-ii.jpg"
    },
    {
      "id": "saw-x",
      "title": "Saw X",
      "year": 2023,
      "director": "Kevin Greutert",
      "rating": 6.6,
      "rank": 495,
      "runtime": "118 min",
      "genreIds": [
        "modern-horror",
        "mystery-whodunit"
      ],
      "synopsis": "A sick and desperate John travels to Mexico for a risky and experimental medical procedure in hopes of a miracle cure for his cancer only to discover the entire operation is a scam to defraud the most vulnerable.",
      "tags": [
        "kevin-greutert",
        "tobin-bell",
        "john-kramer-mexico-revenge"
      ],
      "trailerYoutubeId": "t3PzUo4P21c",
      "poster": "./posters/saw-x.jpg"
    },
    {
      "id": "the-hobbit-the-battle-of-the-five-armies",
      "title": "The Hobbit: The Battle of the Five Armies",
      "year": 2014,
      "director": "Peter Jackson",
      "rating": 7.4,
      "rank": 499,
      "runtime": "144 min",
      "genreIds": [
        "fantasy-epics",
        "action-spectacle"
      ],
      "synopsis": "Bilbo Baggins and company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness.",
      "tags": [
        "peter-jackson",
        "thorin-oakenshield",
        "erebor-siege"
      ],
      "trailerYoutubeId": "iVAgTiBrrDA",
      "poster": "./posters/the-hobbit-the-battle-of-the-five-armies.jpg"
    },
    {
      "id": "a-tale-of-two-sisters",
      "title": "A Tale of Two Sisters",
      "year": 2003,
      "director": "Kim Jee-woon",
      "rating": 7.1,
      "rank": 501,
      "runtime": "114 min",
      "genreIds": [
        "modern-horror",
        "mind-bending",
        "mystery-whodunit"
      ],
      "synopsis": "After being institutionalized in a mental hospital, Su-mi reunites with her sister, Su-yeon, and they return to live at their country home. But strange events plague the house, leading to surprising revelations and a shocking conc...",
      "tags": [
        "kim-jee-woon",
        "korean-gothic-folklore",
        "closet-apparition"
      ],
      "trailerYoutubeId": "4YmCIp4qlGg",
      "poster": "./posters/a-tale-of-two-sisters.jpg"
    },
    {
      "id": "the-shape-of-water",
      "title": "The Shape of Water",
      "year": 2017,
      "director": "Guillermo del Toro",
      "rating": 7.3,
      "rank": 502,
      "runtime": "123 min",
      "genreIds": [
        "fantasy-epics",
        "sci-fi"
      ],
      "synopsis": "At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity.",
      "tags": [
        "guillermo-del-toro",
        "oscar-best-picture",
        "amphibian-man-romance"
      ],
      "trailerYoutubeId": "XFYWazblaUA",
      "poster": "./posters/the-shape-of-water.jpg"
    },
    {
      "id": "the-hobbit-the-desolation-of-smaug",
      "title": "The Hobbit: The Desolation of Smaug",
      "year": 2013,
      "director": "Peter Jackson",
      "rating": 7.8,
      "rank": 503,
      "runtime": "161 min",
      "genreIds": [
        "fantasy-epics",
        "action-spectacle"
      ],
      "synopsis": "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim the Lonely Mountain, their homeland, from the dragon Smaug.",
      "tags": [
        "peter-jackson",
        "benedict-cumberbatch",
        "smaug-gold-hoard",
        "barrel-river-escape"
      ],
      "trailerYoutubeId": "fnaojlfdUbs",
      "poster": "./posters/the-hobbit-the-desolation-of-smaug.jpg"
    },
    {
      "id": "the-substance",
      "title": "Movie Review: The Substance (2024) Spoiler Free",
      "year": 2024,
      "director": "Visionary Filmmaker",
      "rating": 7.5,
      "rank": 504,
      "runtime": "14 min",
      "genreIds": [
        "modern-horror",
        "satire-dark-comedy",
        "mind-bending"
      ],
      "synopsis": "An acclaimed cinematic masterpiece featuring breathtaking vision and performances.",
      "tags": [
        "coralie-fargeat",
        "demi-moore",
        "margaret-qualley",
        "body-horror-splatterfest"
      ],
      "trailerYoutubeId": "LNlrGhBpYjc",
      "poster": "./posters/the-substance.jpg"
    },
    {
      "id": "hellboy-ii-the-golden-army",
      "title": "Hellboy II: The Golden Army",
      "year": 2008,
      "director": "Guillermo del Toro",
      "rating": 7,
      "rank": 505,
      "runtime": "120 min",
      "genreIds": [
        "fantasy-epics",
        "action-spectacle",
        "cyberpunk"
      ],
      "synopsis": "A prince of the mythical world starts a rebellion against humanity in order to rule the Earth. Hellboy and his team must fight to stop him from locating the all-powerful Golden Army.",
      "tags": [
        "guillermo-del-toro",
        "ron-perlman",
        "troll-market",
        "clockwork-golden-army"
      ],
      "trailerYoutubeId": "HMWQEi8vvto",
      "poster": "./posters/hellboy-ii-the-golden-army.jpg"
    },
    {
      "id": "crimson-peak",
      "title": "Crimson Peak",
      "year": 2015,
      "director": "Guillermo del Toro",
      "rating": 6.5,
      "rank": 509,
      "runtime": "119 min",
      "genreIds": [
        "fantasy-epics",
        "modern-horror",
        "mystery-whodunit"
      ],
      "synopsis": "A new bride investigates ghostly visions at a remote gothic mansion that holds dark secrets.",
      "tags": [
        "guillermo-del-toro",
        "allerdale-hall-red-clay",
        "gothic-romance"
      ],
      "trailerYoutubeId": "oquZifON8Eg",
      "poster": "./posters/crimson-peak.jpg"
    },
    {
      "id": "the-neverending-story",
      "title": "The NeverEnding Story",
      "year": 1984,
      "director": "Wolfgang Petersen",
      "rating": 7.3,
      "rank": 510,
      "runtime": "102 min",
      "genreIds": [
        "fantasy-epics"
      ],
      "synopsis": "Bastian finds a magical book in an old bookstore that takes him on an adventure into the land of Fantasia.",
      "tags": [
        "wolfgang-petersen",
        "falkor-luckdragon",
        "swamp-of-sadness-artax",
        "the-nothing"
      ],
      "trailerYoutubeId": "UeFni9dOv7c",
      "poster": "./posters/the-neverending-story.jpg"
    },
    {
      "id": "the-dark-crystal",
      "title": "The Dark Crystal",
      "year": 1982,
      "director": "Jim Henson, Frank Oz",
      "rating": 7.1,
      "rank": 511,
      "runtime": "93 min",
      "genreIds": [
        "fantasy-epics",
        "anime-masterpieces"
      ],
      "synopsis": "On another planet in the distant past, the last of the Gelfling race embarks on a quest to find the missing shard of a magical crystal and to restore order to his world.",
      "tags": [
        "jim-henson",
        "frank-oz",
        "skeksis-and-mystics",
        "gelfling-shard"
      ],
      "trailerYoutubeId": "eaH6cOR8NKc",
      "poster": "./posters/the-dark-crystal.jpg"
    },
    {
      "id": "gladiator-ii",
      "title": "Gladiator II (2024)",
      "year": 2024,
      "director": "Visionary Filmmaker",
      "rating": 7.5,
      "rank": 513,
      "runtime": "2h 00m",
      "genreIds": [
        "action-spectacle",
        "biopic-epics",
        "fantasy-epics"
      ],
      "synopsis": "An acclaimed cinematic masterpiece featuring breathtaking vision and performances.",
      "tags": [
        "ridley-scott",
        "paul-mescal",
        "denzel-washington",
        "colosseum-naval-battle"
      ],
      "trailerYoutubeId": "4rgYUipGJNo",
      "poster": "./posters/gladiator-ii.jpg"
    },
    {
      "id": "kingdom-of-heaven",
      "title": "Kingdom of Heaven",
      "year": 2005,
      "director": "Ridley Scott",
      "rating": 7.3,
      "rank": 514,
      "runtime": "144 min",
      "genreIds": [
        "fantasy-epics",
        "action-spectacle",
        "biopic-epics"
      ],
      "synopsis": "Balian of Ibelin travels to Jerusalem during the Crusades of the 12th century, and there he finds himself as the defender of the city and its people.",
      "tags": [
        "ridley-scott",
        "directors-cut-masterpiece",
        "orlando-bloom",
        "siege-of-jerusalem",
        "saladin"
      ],
      "trailerYoutubeId": "KartNo8EDWY",
      "poster": "./posters/kingdom-of-heaven.jpg"
    },
    {
      "id": "the-13th-warrior",
      "title": "The 13th Warrior",
      "year": 1999,
      "director": "John McTiernan",
      "rating": 6.6,
      "rank": 515,
      "runtime": "102 min",
      "genreIds": [
        "fantasy-epics",
        "action-spectacle"
      ],
      "synopsis": "A man, having fallen in love with the wrong woman, is sent by the sultan himself on a diplomatic mission to a distant land as an ambassador. Stopping at a Viking village port to restock on supplies, he finds himself unwittingly em...",
      "tags": [
        "john-mctiernan",
        "antonio-banderas",
        "michael-crichton",
        "wendol-cannibal-horde"
      ],
      "trailerYoutubeId": "ZeGbSOdedqI",
      "poster": "./posters/the-13th-warrior.jpg"
    },
    {
      "id": "king-arthur-legend-of-the-sword",
      "title": "King Arthur: Legend of the Sword",
      "year": 2017,
      "director": "Guy Ritchie",
      "rating": 6.7,
      "rank": 516,
      "runtime": "126 min",
      "genreIds": [
        "fantasy-epics",
        "action-spectacle"
      ],
      "synopsis": "Robbed of his birthright, Arthur comes up the hard way in the back alleys of the city. But once he pulls the sword from the stone, he is forced to acknowledge his true legacy - whether he likes it or not.",
      "tags": [
        "guy-ritchie",
        "charlie-hunnam",
        "excalibur-slow-mo-power",
        "daniel-pemberton-score"
      ],
      "trailerYoutubeId": "jIM4-HLtUM0",
      "poster": "./posters/king-arthur-legend-of-the-sword.jpg"
    },
    {
      "id": "sleepy-hollow",
      "title": "75: Sleepy Hollow (1999)",
      "year": 2022,
      "director": "Visionary Filmmaker",
      "rating": 7.5,
      "rank": 517,
      "runtime": "102 min",
      "genreIds": [
        "fantasy-epics",
        "modern-horror",
        "mystery-whodunit"
      ],
      "synopsis": "An acclaimed cinematic masterpiece featuring breathtaking vision and performances.",
      "tags": [
        "tim-burton",
        "johnny-depp",
        "headless-horseman",
        "emmanuel-lubezki-gothic"
      ],
      "trailerYoutubeId": "6RsKwn_Je1k",
      "poster": "./posters/sleepy-hollow.jpg"
    },
    {
      "id": "o-brother-where-art-thou",
      "title": "O Brother, Where Art Thou?",
      "year": 2001,
      "director": "Joel Coen, Ethan Coen",
      "rating": 7.7,
      "rank": 518,
      "runtime": "107 min",
      "genreIds": [
        "satire-dark-comedy",
        "fantasy-epics"
      ],
      "synopsis": "In the deep south during the 1930s, three escaped convicts search for hidden treasure while a relentless lawman pursues them.",
      "tags": [
        "coen-brothers",
        "george-clooney",
        "soggy-bottom-boys",
        "homer-odyssey-mississippi"
      ],
      "trailerYoutubeId": "n9UlbxlM5nE",
      "poster": "./posters/o-brother-where-art-thou.jpg"
    },
    {
      "id": "edward-scissorhands",
      "title": "Edward Scissorhands",
      "year": 1990,
      "director": "Tim Burton",
      "rating": 7.8,
      "rank": 519,
      "runtime": "105 min",
      "genreIds": [
        "fantasy-epics",
        "satire-dark-comedy"
      ],
      "synopsis": "An unfinished creation leaves his isolated castle and enters a suburban world eager to embrace him ~ until his differences become impossible to ignore. What begins as a modern fairy tale gradually becomes a story about loneliness,...",
      "tags": [
        "tim-burton",
        "johnny-depp",
        "pastel-suburbia",
        "ice-sculpture-snow"
      ],
      "trailerYoutubeId": "TBHIO60whNw",
      "poster": "./posters/edward-scissorhands.jpg"
    },
    {
      "id": "dungeons-dragons-honor-among-thieves",
      "title": "Dungeons & Dragons: Honor Among Thieves",
      "year": 2023,
      "director": "John Francis Daley, Jonathan Goldstein",
      "rating": 7.2,
      "rank": 520,
      "runtime": "134 min",
      "genreIds": [
        "fantasy-epics",
        "action-spectacle",
        "satire-dark-comedy"
      ],
      "synopsis": "A charming thief and a band of unlikely adventurers embark on an epic quest to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people.",
      "tags": [
        "chris-pine",
        "owlbear-wild-shape",
        "red-wizard-vault-heist",
        "themberchaud-chubby-dragon"
      ],
      "trailerYoutubeId": "IiMinixSXII",
      "poster": "./posters/dungeons-dragons-honor-among-thieves.jpg"
    },
    {
      "id": "the-lobster",
      "title": "The Lobster",
      "year": 2015,
      "director": "Yorgos Lanthimos",
      "rating": 7.1,
      "rank": 523,
      "runtime": "119 min",
      "genreIds": [
        "satire-dark-comedy",
        "sci-fi",
        "mind-bending"
      ],
      "synopsis": "In a dystopian near future, according to the laws of The City, single people are taken to The Hotel, where they are obliged to find a romantic partner in 45 days or they're transformed into beasts and sent off into The Woods.",
      "tags": [
        "yorgos-lanthimos",
        "colin-farrell",
        "hotel-matchmaking-animal-turn"
      ],
      "trailerYoutubeId": "LTNZmOJxuAc",
      "poster": "./posters/the-lobster.jpg"
    },
    {
      "id": "the-favourite",
      "title": "The Favourite",
      "year": 2018,
      "director": "Yorgos Lanthimos",
      "rating": 7.5,
      "rank": 524,
      "runtime": "119 min",
      "genreIds": [
        "satire-dark-comedy",
        "biopic-epics"
      ],
      "synopsis": "In early 18th-century England, the status quo at the court is upset when a new servant arrives and endears herself to a frail Queen Anne.",
      "tags": [
        "yorgos-lanthimos",
        "olivia-colman",
        "emma-stone",
        "rachel-weisz",
        "queen-anne-rabbits"
      ],
      "trailerYoutubeId": "SYb-wkehT1g",
      "poster": "./posters/the-favourite.jpg"
    },
    {
      "id": "thank-you-for-smoking",
      "title": "Thank You for Smoking",
      "year": 2006,
      "director": "Jason Reitman",
      "rating": 7.5,
      "rank": 525,
      "runtime": "92 min",
      "genreIds": [
        "satire-dark-comedy"
      ],
      "synopsis": "The chief spokesman of a tobacco lobby wants to excel at his job while trying to remain a role model for his young son.",
      "tags": [
        "jason-reitman",
        "aaron-eckhart",
        "tobacco-lobbyist-spin"
      ],
      "trailerYoutubeId": "s3eeTjK0qZY",
      "poster": "./posters/thank-you-for-smoking.jpg"
    },
    {
      "id": "the-big-short",
      "title": "The Big Short",
      "year": 2015,
      "director": "Adam McKay",
      "rating": 7.8,
      "rank": 526,
      "runtime": "130 min",
      "genreIds": [
        "satire-dark-comedy",
        "biopic-epics"
      ],
      "synopsis": "Prior to the 2008 financial crisis, a group of investors bet against the US mortgage market and are stunned by the corruption they uncover through their research.",
      "tags": [
        "adam-mckay",
        "christian-bale",
        "steve-carell",
        "margo-robbie-bathtub-cdos"
      ],
      "trailerYoutubeId": "vgqG3ITMv1Q",
      "poster": "./posters/the-big-short.jpg"
    },
    {
      "id": "don-t-look-up",
      "title": "Don't Look Up",
      "year": 2021,
      "director": "Adam McKay",
      "rating": 7.1,
      "rank": 527,
      "runtime": "138 min",
      "genreIds": [
        "satire-dark-comedy",
        "sci-fi",
        "space-exploration"
      ],
      "synopsis": "Two low-level astronomers must go on a giant media tour to warn humankind of an approaching comet that will destroy planet Earth.",
      "tags": [
        "adam-mckay",
        "leonardo-dicaprio",
        "jennifer-lawrence",
        "comet-denialism"
      ],
      "trailerYoutubeId": "RbIxYm3mKzI",
      "poster": "./posters/don-t-look-up.jpg"
    },
    {
      "id": "hunt-for-the-wilderpeople",
      "title": "Hunt for the Wilderpeople",
      "year": 2016,
      "director": "Taika Waititi",
      "rating": 7.8,
      "rank": 529,
      "runtime": "101 min",
      "genreIds": [
        "satire-dark-comedy",
        "action-spectacle"
      ],
      "synopsis": "A national manhunt is ordered for a rebellious kid and his foster uncle who go missing in the wild New Zealand bush.",
      "tags": [
        "taika-waititi",
        "sam-neill",
        "julian-dennison",
        "new-zealand-bush-manhunt"
      ],
      "trailerYoutubeId": "dPaU4Gymt3E",
      "poster": "./posters/hunt-for-the-wilderpeople.jpg"
    },
    {
      "id": "four-lions",
      "title": "Four Lions",
      "year": 2010,
      "director": "Christopher Morris",
      "rating": 7.3,
      "rank": 531,
      "runtime": "97 min",
      "genreIds": [
        "satire-dark-comedy"
      ],
      "synopsis": "Four incompetent British terrorists from Sheffield, set out to train for and commit an act of terror.",
      "tags": [
        "chris-morris",
        "riz-ahmed",
        "sheffield-bumbling-jihadists",
        "rubber-dinghy-rapids"
      ],
      "trailerYoutubeId": "Ew-SrlQ9tlI",
      "poster": "./posters/four-lions.jpg"
    },
    {
      "id": "idiocracy",
      "title": "Idiocracy",
      "year": 2007,
      "director": "Mike Judge",
      "rating": 6.5,
      "rank": 532,
      "runtime": "84 min",
      "genreIds": [
        "satire-dark-comedy",
        "sci-fi",
        "post-apocalyptic"
      ],
      "synopsis": "Corporal Joe Bauers, a decidedly average American, is selected for a top-secret hibernation program but is forgotten and left to awaken to a future so incredibly moronic that he's easily the most intelligent person alive.",
      "tags": [
        "mike-judge",
        "luke-wilson",
        "president-camacho",
        "brawndo-crop-watering"
      ],
      "trailerYoutubeId": "6lai9QhBibk",
      "poster": "./posters/idiocracy.jpg"
    },
    {
      "id": "office-space",
      "title": "Office Space",
      "year": 1999,
      "director": "Mike Judge",
      "rating": 7.6,
      "rank": 533,
      "runtime": "89 min",
      "genreIds": [
        "satire-dark-comedy"
      ],
      "synopsis": "Three company workers who hate their jobs decide to rebel against their greedy boss.",
      "tags": [
        "mike-judge",
        "red-swingline-stapler",
        "printer-baseball-bat-smash",
        "initech-tps-reports"
      ],
      "trailerYoutubeId": "rPJUXZvX6UI",
      "poster": "./posters/office-space.jpg"
    },
    {
      "id": "raging-bull",
      "title": "Raging Bull",
      "year": 1980,
      "director": "Martin Scorsese",
      "rating": 8.1,
      "rank": 538,
      "runtime": "129 min",
      "genreIds": [
        "biopic-epics",
        "martial-arts"
      ],
      "synopsis": "The life of boxer Jake LaMotta, whose violence and temper that led him to the top in the ring destroyed his life outside of it.",
      "tags": [
        "martin-scorsese",
        "robert-de-niro-jake-lamotta",
        "black-and-white-boxing-flashbulbs"
      ],
      "trailerYoutubeId": "F2UKuKxCJqc",
      "poster": "./posters/raging-bull.jpg"
    },
    {
      "id": "bridge-of-spies",
      "title": "Bridge of Spies",
      "year": 2015,
      "director": "Steven Spielberg",
      "rating": 7.6,
      "rank": 540,
      "runtime": "142 min",
      "genreIds": [
        "biopic-epics",
        "mystery-whodunit"
      ],
      "synopsis": "During the Cold War, an American lawyer is recruited to defend an arrested Soviet spy in court, and then help the CIA facilitate an exchange of the spy for the Soviet captured American U2 spy plane pilot, Francis Gary Powers.",
      "tags": [
        "steven-spielberg",
        "tom-hanks-james-donovan",
        "mark-rylance-rudolf-abel",
        "glenicke-bridge-swap"
      ],
      "trailerYoutubeId": "mBBuzHrZBro",
      "poster": "./posters/bridge-of-spies.jpg"
    },
    {
      "id": "saving-private-ryan",
      "title": "Saving Private Ryan",
      "year": 1998,
      "director": "Steven Spielberg",
      "rating": 8.6,
      "rank": 542,
      "runtime": "169 min",
      "genreIds": [
        "action-spectacle",
        "biopic-epics"
      ],
      "synopsis": "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
      "tags": [
        "steven-spielberg",
        "tom-hanks-captain-miller",
        "omaha-beach-landing"
      ],
      "trailerYoutubeId": "9CiW_DgxCnQ",
      "poster": "./posters/saving-private-ryan.jpg"
    },
    {
      "id": "full-metal-jacket",
      "title": "Full Metal Jacket",
      "year": 1987,
      "director": "Stanley Kubrick",
      "rating": 8.2,
      "rank": 543,
      "runtime": "116 min",
      "genreIds": [
        "satire-dark-comedy",
        "biopic-epics"
      ],
      "synopsis": "A pragmatic U.S. Marine observes the dehumanizing effects the Vietnam War has on his fellow recruits from their brutal boot camp training to the bloody street fighting in Hue.",
      "tags": [
        "stanley-kubrick",
        "r-lee-ermey-drill-instructor",
        "vincent-donofrio-pyle",
        "hue-city-sniper"
      ],
      "trailerYoutubeId": "n2i917l5RFc",
      "poster": "./posters/full-metal-jacket.jpg"
    },
    {
      "id": "blackkklansman",
      "title": "BlacKkKlansman",
      "year": 2018,
      "director": "Spike Lee",
      "rating": 7.5,
      "rank": 544,
      "runtime": "135 min",
      "genreIds": [
        "biopic-epics",
        "satire-dark-comedy",
        "neo-noir"
      ],
      "synopsis": "In this story inspired by true events, Ron Stallworth, an African-American Colorado police officer, successfully infiltrates the local branch of the Ku Klux Klan with the help of a white Jewish colleague.",
      "tags": [
        "spike-lee",
        "john-david-washington",
        "adam-driver",
        "ron-stallworth-undercover"
      ],
      "trailerYoutubeId": "pFc6I0rgmgY",
      "poster": "./posters/blackkklansman.jpg"
    },
    {
      "id": "judas-and-the-black-messiah",
      "title": "Judas and the Black Messiah",
      "year": 2021,
      "director": "Shaka King",
      "rating": 7.4,
      "rank": 549,
      "runtime": "126 min",
      "genreIds": [
        "biopic-epics",
        "neo-noir"
      ],
      "synopsis": "Offered a plea deal by the FBI, William O'Neal infiltrates the Illinois chapter of the Black Panther Party to gather intelligence on Chairman Fred Hampton.",
      "tags": [
        "shaka-king",
        "daniel-kaluuya-fred-hampton",
        "lakeith-stanfield-william-o-neal"
      ],
      "trailerYoutubeId": "sSjtGqRXQ9Y",
      "poster": "./posters/judas-and-the-black-messiah.jpg"
    },
    {
      "id": "straight-outta-compton",
      "title": "Straight Outta Compton",
      "year": 2015,
      "director": "F. Gary Gray",
      "rating": 7.8,
      "rank": 550,
      "runtime": "147 min",
      "genreIds": [
        "biopic-epics"
      ],
      "synopsis": "The rap group NWA emerges from the mean streets of Compton in the mid-1980s and revolutionizes hip-hop culture with their music and tales about life in the hood.",
      "tags": [
        "f-gary-gray",
        "nwa-dr-dre-eazy-e-ice-cube",
        "ruthless-records"
      ],
      "trailerYoutubeId": "oyoew4T74_w",
      "poster": "./posters/straight-outta-compton.jpg"
    },
    {
      "id": "bohemian-rhapsody",
      "title": "Bohemian Rhapsody",
      "year": 2018,
      "director": "Bryan Singer",
      "rating": 7.9,
      "rank": 552,
      "runtime": "134 min",
      "genreIds": [
        "biopic-epics"
      ],
      "synopsis": "With his impeccable vocal abilities, Freddie Mercury and his rock band, Queen, achieve superstardom. However, amidst his skyrocketing success, he grapples with his ego, sexuality and a fatal illness.",
      "tags": [
        "rami-malek-freddie-mercury",
        "queen-live-aid-wembley",
        "oscar-best-actor"
      ],
      "trailerYoutubeId": "mP0VHJYFOAU",
      "poster": "./posters/bohemian-rhapsody.jpg"
    },
    {
      "id": "the-theory-of-everything",
      "title": "The Theory of Everything",
      "year": 2014,
      "director": "James Marsh",
      "rating": 7.7,
      "rank": 554,
      "runtime": "123 min",
      "genreIds": [
        "biopic-epics",
        "sci-fi"
      ],
      "synopsis": "Stephen Hawking gets unprecedented success in the field of physics despite being diagnosed with motor neuron disease at the age of 21. He defeats awful odds as his first wife Jane aids him loyally.",
      "tags": [
        "james-marsh",
        "eddie-redmayne-stephen-hawking",
        "felicity-jones",
        "black-hole-radiation"
      ],
      "trailerYoutubeId": "Salz7uGp72c",
      "poster": "./posters/the-theory-of-everything.jpg"
    },
    {
      "id": "all-the-president-s-men",
      "title": "All the President's Men",
      "year": 1976,
      "director": "Alan J. Pakula",
      "rating": 7.9,
      "rank": 555,
      "runtime": "138 min",
      "genreIds": [
        "biopic-epics",
        "mystery-whodunit",
        "neo-noir"
      ],
      "synopsis": "\"The Washington Post\" reporters Bob Woodward and Carl Bernstein uncover the details of the Watergate scandal that leads to President Richard Nixon's resignation.",
      "tags": [
        "alan-j-pakula",
        "robert-redford",
        "dustin-hoffman",
        "watergate-deep-throat"
      ],
      "trailerYoutubeId": "DC3YFyah_Yg",
      "poster": "./posters/all-the-president-s-men.jpg"
    },
    {
      "id": "erin-brockovich",
      "title": "Erin Brockovich",
      "year": 2000,
      "director": "Steven Soderbergh",
      "rating": 7.5,
      "rank": 557,
      "runtime": "131 min",
      "genreIds": [
        "biopic-epics"
      ],
      "synopsis": "A flamboyant law firm secretary works tirelessly to gain justice for a small town wrecked by a utility company's pollution.",
      "tags": [
        "steven-soderbergh",
        "julia-roberts",
        "pge-chromium-6-lawsuit"
      ],
      "trailerYoutubeId": "jjqUUxIy_yk",
      "poster": "./posters/erin-brockovich.jpg"
    },
    {
      "id": "dallas-buyers-club",
      "title": "Dallas Buyers Club",
      "year": 2013,
      "director": "Jean-Marc Vall\u00e9e",
      "rating": 7.9,
      "rank": 559,
      "runtime": "117 min",
      "genreIds": [
        "biopic-epics"
      ],
      "synopsis": "In 1985 Dallas, electrician and hustler Ron Woodroof works around the system to help AIDS patients get the medication they need after he is diagnosed with the disease.",
      "tags": [
        "jean-marc-vallee",
        "matthew-mcconaughey-ron-woodroof",
        "jared-leto-rayona"
      ],
      "trailerYoutubeId": "KDvPcBeOn8E",
      "poster": "./posters/dallas-buyers-club.jpg"
    },
    {
      "id": "12-years-a-slave",
      "title": "12 Years a Slave",
      "year": 2013,
      "director": "Steve McQueen",
      "rating": 8.1,
      "rank": 561,
      "runtime": "134 min",
      "genreIds": [
        "biopic-epics"
      ],
      "synopsis": "In the antebellum United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery.",
      "tags": [
        "steve-mcqueen",
        "chiwetel-ejiofor-solomon-northup",
        "michael-fassbender",
        "oscar-best-picture"
      ],
      "trailerYoutubeId": "z02Ie8wKKRg",
      "poster": "./posters/12-years-a-slave.jpg"
    },
    {
      "id": "die-hard-with-a-vengeance",
      "title": "Die Hard with a Vengeance",
      "year": 1995,
      "director": "John McTiernan",
      "rating": 7.6,
      "rank": 562,
      "runtime": "128 min",
      "genreIds": [
        "action-spectacle",
        "satire-dark-comedy"
      ],
      "synopsis": "John McClane is forced out of suspension to play a game of \"Simon Says\" by a terrorist who has planted bombs all around New York City and will detonate them if McClane doesn't do what he says.",
      "tags": [
        "john-mctiernan",
        "bruce-willis",
        "samuel-l-jackson-zeus",
        "wall-street-gold-heist"
      ],
      "trailerYoutubeId": "QKxQ5SBzLWA",
      "poster": "./posters/die-hard-with-a-vengeance.jpg"
    },
    {
      "id": "die-hard-2",
      "title": "Die Hard 2",
      "year": 1990,
      "director": "Renny Harlin",
      "rating": 7.2,
      "rank": 563,
      "runtime": "124 min",
      "genreIds": [
        "action-spectacle"
      ],
      "synopsis": "One year after the Nakatomi Plaza incident, John McClane faces off against terrorists who seize control of Washington Dulles Airport's systems on Christmas Eve, endangering multiple incoming flights, including one carrying his wif...",
      "tags": [
        "renny-harlin",
        "dulles-airport-blizzard",
        "ejector-seat-grenade"
      ],
      "trailerYoutubeId": "CvHp7xJZ4_U",
      "poster": "./posters/die-hard-2.jpg"
    },
    {
      "id": "the-last-duel",
      "title": "The Last Duel (2021)",
      "year": 2021,
      "director": "Visionary Filmmaker",
      "rating": 7.5,
      "rank": 564,
      "runtime": "2h 00m",
      "genreIds": [
        "biopic-epics",
        "action-spectacle",
        "mystery-whodunit"
      ],
      "synopsis": "An acclaimed cinematic masterpiece featuring breathtaking vision and performances.",
      "tags": [
        "ridley-scott",
        "rashomon-three-perspectives",
        "jodie-comer",
        "brutal-lance-joust"
      ],
      "trailerYoutubeId": "mgygUwPJvYk",
      "poster": "./posters/the-last-duel.jpg"
    },
    {
      "id": "mission-impossible",
      "title": "54. Our 'Mission: Impossible' (1996) Commentary Preview",
      "year": 1996,
      "director": "Visionary Filmmaker",
      "rating": 7.5,
      "rank": 569,
      "runtime": "2h 00m",
      "genreIds": [
        "action-spectacle",
        "mystery-whodunit"
      ],
      "synopsis": "An acclaimed cinematic masterpiece featuring breathtaking vision and performances.",
      "tags": [
        "brian-de-palma",
        "tom-cruise-ethan-hunt",
        "cia-vault-wire-hang",
        "tgv-helicopter-tunnel"
      ],
      "trailerYoutubeId": "L8Pbjh4EZRk",
      "poster": "./posters/mission-impossible.jpg"
    },
    {
      "id": "the-bourne-supremacy",
      "title": "The Bourne Supremacy",
      "year": 2004,
      "director": "Paul Greengrass",
      "rating": 7.7,
      "rank": 572,
      "runtime": "108 min",
      "genreIds": [
        "action-spectacle",
        "neo-noir"
      ],
      "synopsis": "When Jason Bourne is framed for a CIA operation gone awry, he is forced to resume his former life as a trained assassin to survive.",
      "tags": [
        "paul-greengrass",
        "matt-damon",
        "karl-urban-moscow-tunnel-crash"
      ],
      "trailerYoutubeId": "Y-HqyyfBbSo",
      "poster": "./posters/the-bourne-supremacy.jpg"
    },
    {
      "id": "atomic-blonde",
      "title": "Atomic Blonde",
      "year": 2017,
      "director": "David Leitch",
      "rating": 6.7,
      "rank": 574,
      "runtime": "115 min",
      "genreIds": [
        "action-spectacle",
        "neo-noir"
      ],
      "synopsis": "An undercover MI6 agent is sent to Berlin during the Cold War to investigate the murder of a fellow agent and recover a missing list of double agents.",
      "tags": [
        "david-leitch",
        "charlize-theron-lorraine-broughton",
        "berlin-wall-stairwell-brawl"
      ],
      "trailerYoutubeId": "IGDdv88uJsQ",
      "poster": "./posters/atomic-blonde.jpg"
    },
    {
      "id": "nobody",
      "title": "Nobody (2021) Movie Review",
      "year": 2021,
      "director": "Visionary Filmmaker",
      "rating": 7.5,
      "rank": 575,
      "runtime": "31 min",
      "genreIds": [
        "action-spectacle",
        "satire-dark-comedy",
        "martial-arts"
      ],
      "synopsis": "An acclaimed cinematic masterpiece featuring breathtaking vision and performances.",
      "tags": [
        "ilya-naishuller",
        "bob-odenkirk-hutch-mansell",
        "city-bus-gang-beatdown"
      ],
      "trailerYoutubeId": "wZti8QKBWPo",
      "poster": "./posters/nobody.jpg"
    },
    {
      "id": "fast-five",
      "title": "Fast Five",
      "year": 2011,
      "director": "Justin Lin",
      "rating": 7.3,
      "rank": 576,
      "runtime": "130 min",
      "genreIds": [
        "action-spectacle"
      ],
      "synopsis": "Dominic Toretto and his crew of street racers plan a massive heist to buy their freedom while in the sights of a powerful Brazilian drug lord and a dangerous federal agent.",
      "tags": [
        "justin-lin",
        "vin-diesel",
        "dwayne-johnson-the-rock",
        "rio-bank-vault-drag"
      ],
      "trailerYoutubeId": "mw2AqdB5EVA",
      "poster": "./posters/fast-five.jpg"
    },
    {
      "id": "furious-7",
      "title": "Furious 7",
      "year": 2015,
      "director": "James Wan",
      "rating": 7.1,
      "rank": 578,
      "runtime": "137 min",
      "genreIds": [
        "action-spectacle"
      ],
      "synopsis": "Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother.",
      "tags": [
        "james-wan",
        "paul-walker-farewell",
        "abu-dhabi-lykan-hypersport-building-jump"
      ],
      "trailerYoutubeId": "Skpu5HaVkOc",
      "poster": "./posters/furious-7.jpg"
    },
    {
      "id": "true-lies",
      "title": "True Lies",
      "year": 1994,
      "director": "James Cameron",
      "rating": 7.3,
      "rank": 580,
      "runtime": "141 min",
      "genreIds": [
        "action-spectacle",
        "satire-dark-comedy"
      ],
      "synopsis": "A fearless, globe-trotting, terrorist-battling secret agent has his life turned upside down when he discovers his wife might be having an affair with a used-car salesman while terrorists smuggle nuclear warheads into the United St...",
      "tags": [
        "james-cameron",
        "arnold-schwarzenegger",
        "jamie-lee-curtis",
        "harrier-jump-jet-keys"
      ],
      "trailerYoutubeId": "Uz45Y50ozxE",
      "poster": "./posters/true-lies.jpg"
    },
    {
      "id": "lethal-weapon-2",
      "title": "Lethal Weapon 2",
      "year": 1989,
      "director": "Richard Donner",
      "rating": 7.3,
      "rank": 582,
      "runtime": "114 min",
      "genreIds": [
        "action-spectacle",
        "satire-dark-comedy"
      ],
      "synopsis": "Riggs and Murtaugh are on the trail of South African diplomats who are using their immunity to engage in criminal activities.",
      "tags": [
        "richard-donner",
        "diplomatic-immunity-revoked",
        "toilet-bomb"
      ],
      "trailerYoutubeId": "ZbFE2P3tASI",
      "poster": "./posters/lethal-weapon-2.jpg"
    },
    {
      "id": "bad-boys",
      "title": "17: Bad Boys (1995)",
      "year": 1995,
      "director": "Visionary Filmmaker",
      "rating": 7.5,
      "rank": 584,
      "runtime": "108 min",
      "genreIds": [
        "action-spectacle",
        "satire-dark-comedy"
      ],
      "synopsis": "An acclaimed cinematic masterpiece featuring breathtaking vision and performances.",
      "tags": [
        "michael-bay",
        "will-smith-mike-lowrey",
        "martin-lawrence-marcus-burnett",
        "porsche-911-turbo"
      ],
      "trailerYoutubeId": "Xm12NSa8jsM",
      "poster": "./posters/bad-boys.jpg"
    },
    {
      "id": "bad-boys-ii",
      "title": "Bad Boys II",
      "year": 2003,
      "director": "Michael Bay",
      "rating": 6.6,
      "rank": 586,
      "runtime": "147 min",
      "genreIds": [
        "action-spectacle",
        "satire-dark-comedy"
      ],
      "synopsis": "Miami narcotics cops Mike Lowrey and Marcus Burnett investigate the flow of Ecstasy into Florida from a Cuban drug cartel.",
      "tags": [
        "michael-bay",
        "ferrari-550-car-carrier-chase",
        "360-degree-shantytown-door-shootout"
      ],
      "trailerYoutubeId": "UTNcOwQ2lRw",
      "poster": "./posters/bad-boys-ii.jpg"
    },
    {
      "id": "crank-high-voltage",
      "title": "Crank: High Voltage",
      "year": 2009,
      "director": "Mark Neveldine, Brian Taylor",
      "rating": 6.1,
      "rank": 588,
      "runtime": "96 min",
      "genreIds": [
        "action-spectacle",
        "satire-dark-comedy"
      ],
      "synopsis": "Chelios faces a Chinese mobster who has stolen his nearly indestructible heart and replaced it with a battery-powered ticker which requires regular jolts of electricity to keep working.",
      "tags": [
        "neveldine-taylor",
        "jason-statham",
        "artificial-heart-taser-recharge"
      ],
      "trailerYoutubeId": "t2koYVqwzT4",
      "poster": "./posters/crank-high-voltage.jpg"
    },
    {
      "id": "civil-war",
      "title": "E326: Alex Garland's Civil War (2024) - Worth the Controversy?",
      "year": 2024,
      "director": "Visionary Filmmaker",
      "rating": 7.5,
      "rank": 590,
      "runtime": "2h 00m",
      "genreIds": [
        "action-spectacle",
        "post-apocalyptic",
        "modern-horror"
      ],
      "synopsis": "An acclaimed cinematic masterpiece featuring breathtaking vision and performances.",
      "tags": [
        "alex-garland",
        "kirsten-dunst",
        "war-journalists-lincoln-memorial",
        "dc-siege-climax"
      ],
      "trailerYoutubeId": "aDyQxtg0V2w",
      "poster": "./posters/civil-war.jpg"
    },
    {
      "id": "godzilla-minus-one",
      "title": "Godzilla Minus One",
      "year": 2023,
      "director": "Takashi Yamazaki",
      "rating": 7.6,
      "rank": 591,
      "runtime": "124 min",
      "genreIds": [
        "sci-fi",
        "action-spectacle",
        "biopic-epics"
      ],
      "synopsis": "A kamikaze pilot plagued by survivor's guilt seeks redemption when a giant monster he failed to kill is transformed by radiation from atomic bomb tests and lays siege to post-war Japan.",
      "tags": [
        "takashi-yamazaki",
        "oscar-visual-effects",
        "post-war-japan-ginza-atomic-breath",
        "shinden-fighter"
      ],
      "trailerYoutubeId": "nAYKaslCXPc",
      "poster": "./posters/godzilla-minus-one.jpg"
    },
    {
      "id": "the-good-the-bad-and-the-ugly",
      "title": "The Good, the Bad and the Ugly",
      "year": 1967,
      "director": "Sergio Leone",
      "rating": 8.8,
      "rank": 593,
      "runtime": "178 min",
      "genreIds": [
        "neo-noir",
        "action-spectacle",
        "satire-dark-comedy"
      ],
      "synopsis": "A bounty-hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
      "tags": [
        "sergio-leone",
        "clint-eastwood",
        "ennio-morricone-score",
        "sad-hill-cemetery-three-way-duel"
      ],
      "trailerYoutubeId": "WCN5JJY_wiA",
      "poster": "./posters/the-good-the-bad-and-the-ugly.jpg"
    },
    {
      "id": "once-upon-a-time-in-the-west",
      "title": "Once Upon a Time in the West",
      "year": 1969,
      "director": "Sergio Leone",
      "rating": 8.5,
      "rank": 594,
      "runtime": "145 min",
      "genreIds": [
        "neo-noir",
        "action-spectacle",
        "biopic-epics"
      ],
      "synopsis": "A mysterious stranger with a harmonica teams up with a notorious desperado to protect a beautiful widow and her land from a ruthless assassin in the employ of a railroad tycoon.",
      "tags": [
        "sergio-leone",
        "charles-bronson-harmonica",
        "henry-fonda-frank",
        "train-station-water-drop"
      ],
      "trailerYoutubeId": "c8CJ6L0I6W8",
      "poster": "./posters/once-upon-a-time-in-the-west.jpg"
    },
    {
      "id": "a-fistful-of-dollars",
      "title": "A Fistful of Dollars",
      "year": 1967,
      "director": "Sergio Leone",
      "rating": 7.9,
      "rank": 595,
      "runtime": "99 min",
      "genreIds": [
        "action-spectacle",
        "neo-noir"
      ],
      "synopsis": "A wandering gunfighter plays two rival families against each other in a town torn apart by greed, pride, and revenge.",
      "tags": [
        "sergio-leone",
        "clint-eastwood-man-with-no-name",
        "san-miguel-iron-plate"
      ],
      "trailerYoutubeId": "aEkjT5A9iKc",
      "poster": "./posters/a-fistful-of-dollars.jpg"
    },
    {
      "id": "for-a-few-dollars-more",
      "title": "For a Few Dollars More",
      "year": 1967,
      "director": "Sergio Leone",
      "rating": 8.2,
      "rank": 596,
      "runtime": "132 min",
      "genreIds": [
        "action-spectacle",
        "neo-noir"
      ],
      "synopsis": "Two bounty killers with similar intentions but different motivations team up to take down a psychotic Mexican outlaw before he and his gang can carry out an audacious bank robbery.",
      "tags": [
        "sergio-leone",
        "clint-eastwood",
        "lee-van-cleef-pocket-watch"
      ],
      "trailerYoutubeId": "bNt9NcLteoU",
      "poster": "./posters/for-a-few-dollars-more.jpg"
    },
    {
      "id": "butch-cassidy-and-the-sundance-kid",
      "title": "Butch Cassidy and the Sundance Kid",
      "year": 1969,
      "director": "George Roy Hill",
      "rating": 8,
      "rank": 602,
      "runtime": "110 min",
      "genreIds": [
        "action-spectacle",
        "satire-dark-comedy",
        "biopic-epics"
      ],
      "synopsis": "In 1890s Wyoming, Butch Cassidy and The Sundance Kid lead a band of outlaws. When a train robbery goes wrong, they find themselves on the run with a posse hard on their heels..",
      "tags": [
        "george-roy-hill",
        "paul-newman",
        "robert-redford",
        "bolivia-cliff-jump",
        "freeze-frame-finale"
      ],
      "trailerYoutubeId": "YdJW2UxvSFQ",
      "poster": "./posters/butch-cassidy-and-the-sundance-kid.jpg"
    },
    {
      "id": "the-hateful-eight",
      "title": "The Hateful Eight",
      "year": 2015,
      "director": "Quentin Tarantino",
      "rating": 7.8,
      "rank": 603,
      "runtime": "168 min",
      "genreIds": [
        "mystery-whodunit",
        "neo-noir",
        "satire-dark-comedy"
      ],
      "synopsis": "In the dead of a Wyoming winter, a bounty hunter and his prisoner find shelter in a cabin currently inhabited by a collection of nefarious characters.",
      "tags": [
        "quentin-tarantino",
        "70mm-ultra-panavision",
        "minnies-haberdashery-blizzard",
        "poisoned-coffee"
      ],
      "trailerYoutubeId": "juaP_vRyIGY",
      "poster": "./posters/the-hateful-eight.jpg"
    },
    {
      "id": "the-assassination-of-jesse-james-by-the-coward-robert-ford",
      "title": "The Assassination of Jesse James by the Coward Robert Ford",
      "year": 2007,
      "director": "Andrew Dominik",
      "rating": 7.5,
      "rank": 605,
      "runtime": "160 min",
      "genreIds": [
        "biopic-epics",
        "neo-noir"
      ],
      "synopsis": "Robert Ford, who has idolized Jesse James since childhood, tries hard to join the resurgent gang of the Missouri outlaw, but gradually becomes resentful of the bandit leader.",
      "tags": [
        "andrew-dominik",
        "brad-pitt",
        "casey-affleck",
        "roger-deakins-train-robbery-lanterns"
      ],
      "trailerYoutubeId": "6RwAWZtK5Uw",
      "poster": "./posters/the-assassination-of-jesse-james-by-the-coward-robert-ford.jpg"
    },
    {
      "id": "the-outlaw-josey-wales",
      "title": "The Outlaw Josey Wales",
      "year": 1976,
      "director": "Clint Eastwood",
      "rating": 7.8,
      "rank": 610,
      "runtime": "135 min",
      "genreIds": [
        "action-spectacle",
        "biopic-epics"
      ],
      "synopsis": "Avenging his murdered family, a Missouri farmer hunts down brutal Union soldiers.",
      "tags": [
        "clint-eastwood",
        "rebel-guerrilla",
        "tobacco-spit",
        "four-colt-walkers"
      ],
      "trailerYoutubeId": "dCPcoNo_OkM",
      "poster": "./posters/the-outlaw-josey-wales.jpg"
    },
    {
      "id": "e-t-the-extra-terrestrial",
      "title": "E.T. the Extra-Terrestrial",
      "year": 1982,
      "director": "Steven Spielberg",
      "rating": 7.9,
      "rank": 611,
      "runtime": "115 min",
      "genreIds": [
        "sci-fi",
        "fantasy-epics"
      ],
      "synopsis": "A troubled child summons the courage to help a friendly alien escape from Earth and return to his home planet.",
      "tags": [
        "steven-spielberg",
        "et-phone-home",
        "flying-bicycle-moon-silhouette",
        "reese-pieces"
      ],
      "trailerYoutubeId": "qYAETtIIClk",
      "poster": "./posters/e-t-the-extra-terrestrial.jpg"
    },
    {
      "id": "super-8",
      "title": "187 Super 8 (2011)",
      "year": 2021,
      "director": "Visionary Filmmaker",
      "rating": 7.5,
      "rank": 614,
      "runtime": "116 min",
      "genreIds": [
        "sci-fi",
        "action-spectacle",
        "mystery-whodunit"
      ],
      "synopsis": "An acclaimed cinematic masterpiece featuring breathtaking vision and performances.",
      "tags": [
        "j-j-abrams",
        "train-crash-spectacle",
        "amateur-filmmakers",
        "alien-water-tower"
      ],
      "trailerYoutubeId": "t-0XuYxh67w",
      "poster": "./posters/super-8.jpg"
    },
    {
      "id": "the-lost-world-jurassic-park",
      "title": "The Lost World: Jurassic Park",
      "year": 1997,
      "director": "Steven Spielberg",
      "rating": 6.6,
      "rank": 617,
      "runtime": "129 min",
      "genreIds": [
        "sci-fi",
        "action-spectacle"
      ],
      "synopsis": "A research team is sent to the Jurassic Park Site B island to study the dinosaurs there, while an InGen team approaches with another agenda.",
      "tags": [
        "steven-spielberg",
        "isla-sorna-site-b",
        "t-rex-san-diego-rampage",
        "hanging-trailer-glass-crack"
      ],
      "trailerYoutubeId": "RxrvaneULkE",
      "poster": "./posters/the-lost-world-jurassic-park.jpg"
    },
    {
      "id": "2010-the-year-we-make-contact",
      "title": "2010: The Year We Make Contact",
      "year": 1984,
      "director": "Peter Hyams",
      "rating": 6.7,
      "rank": 618,
      "runtime": "116 min",
      "genreIds": [
        "sci-fi",
        "space-exploration"
      ],
      "synopsis": "A joint USA-Soviet expedition is sent to Jupiter to learn exactly what happened to the \"Discovery\" and its H.A.L. 9000 computer.",
      "tags": [
        "peter-hyams",
        "roy-scheider",
        "all-these-worlds-are-yours",
        "europa-chlorophyll"
      ],
      "trailerYoutubeId": "8dQH_WNvL3Y",
      "poster": "./posters/2010-the-year-we-make-contact.jpg"
    },
    {
      "id": "heavy-metal",
      "title": "Heavy Metal (1981)",
      "year": 1981,
      "director": "Visionary Filmmaker",
      "rating": 7.5,
      "rank": 619,
      "runtime": "2h 00m",
      "genreIds": [
        "sci-fi",
        "fantasy-epics",
        "anime-masterpieces"
      ],
      "synopsis": "An acclaimed cinematic masterpiece featuring breathtaking vision and performances.",
      "tags": [
        "loc-nar-green-orb",
        "taarna-taarakian-warrior",
        "hard-rock-anthology"
      ],
      "trailerYoutubeId": "aCWg50TKqb4",
      "poster": "./posters/heavy-metal.jpg"
    },
    {
      "id": "they-live",
      "title": "They Live (1988)",
      "year": 1988,
      "director": "Visionary Filmmaker",
      "rating": 7.5,
      "rank": 627,
      "runtime": "2h 00m",
      "genreIds": [
        "sci-fi",
        "satire-dark-comedy",
        "action-spectacle"
      ],
      "synopsis": "An acclaimed cinematic masterpiece featuring breathtaking vision and performances.",
      "tags": [
        "john-carpenter",
        "roddy-piper-bubblegum",
        "hoffman-sunglasses-obey-consume",
        "alleyway-brawl"
      ],
      "trailerYoutubeId": "zLQ2d89vCiw",
      "poster": "./posters/they-live.jpg"
    },
    {
      "id": "escape-from-new-york",
      "title": "Escape from New York",
      "year": 1981,
      "director": "John Carpenter",
      "rating": 7.1,
      "rank": 630,
      "runtime": "99 min",
      "genreIds": [
        "sci-fi",
        "post-apocalyptic",
        "action-spectacle"
      ],
      "synopsis": "In a dystopian 1997, a soldier-turned-bank robber is tasked with rescuing the U.S. President after he crashes into Manhattan, which has been turned into a giant maximum security prison.",
      "tags": [
        "john-carpenter",
        "kurt-russell-snake-plissken",
        "manhattan-maximum-security-island",
        "duke-of-new-york"
      ],
      "trailerYoutubeId": "10OoccK7dIw",
      "poster": "./posters/escape-from-new-york.jpg"
    },
    {
      "id": "enemy-mine",
      "title": "Ep.38 Forgotten Scifi - &quot;Enemy Mine (1985)&quot; or &quot;Your Mickey Mouse is one big stupid dope!&quot;",
      "year": 1985,
      "director": "Visionary Filmmaker",
      "rating": 7.5,
      "rank": 635,
      "runtime": "111 min",
      "genreIds": [
        "sci-fi",
        "space-exploration",
        "action-spectacle"
      ],
      "synopsis": "An acclaimed cinematic masterpiece featuring breathtaking vision and performances.",
      "tags": [
        "wolfgang-petersen",
        "dennis-quaid",
        "louis-gossett-jr-drac",
        "fyrene-iv-meteor-storms"
      ],
      "trailerYoutubeId": "J8wLPApYGOw",
      "poster": "./posters/enemy-mine.jpg"
    },
    {
      "id": "gremlins-2-the-new-batch",
      "title": "Gremlins 2: The New Batch",
      "year": 1990,
      "director": "Joe Dante",
      "rating": 6.5,
      "rank": 649,
      "runtime": "106 min",
      "genreIds": [
        "satire-dark-comedy",
        "modern-horror",
        "fantasy-epics"
      ],
      "synopsis": "The Gremlins are back, and this time, they've taken control of a New York City media mogul's high-tech skyscraper.",
      "tags": [
        "joe-dante",
        "clamp-cable-network-skyscraper",
        "brain-gremlin-wine-glass",
        "bat-gremlin-sunscreen"
      ],
      "trailerYoutubeId": "AdCp0qLqnCY",
      "poster": "./posters/gremlins-2-the-new-batch.jpg"
    },
    {
      "id": "a-quiet-place-part-ii",
      "title": "A Quiet Place Part II",
      "year": 2021,
      "director": "John Krasinski",
      "rating": 7.2,
      "rank": 653,
      "runtime": "97 min",
      "genreIds": [
        "modern-horror",
        "sci-fi",
        "post-apocalyptic"
      ],
      "synopsis": "Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize the creatures that hunt by sound are not the only threats lurking beyond the sand path.",
      "tags": [
        "john-krasinski",
        "emily-blunt",
        "cillian-murphy",
        "steel-mill-furnace-safe",
        "island-hearing-aid-signal"
      ],
      "trailerYoutubeId": "BpdDN9d9Jio",
      "poster": "./posters/a-quiet-place-part-ii.jpg"
    },
    {
      "id": "only-lovers-left-alive",
      "title": "Only Lovers Left Alive",
      "year": 2013,
      "director": "Jim Jarmusch",
      "rating": 7.2,
      "rank": 656,
      "runtime": "123 min",
      "genreIds": [
        "fantasy-epics",
        "satire-dark-comedy"
      ],
      "synopsis": "A depressed musician reunites with his lover. However, their romance, which has already endured several centuries, is disrupted by the arrival of her uncontrollable younger sister.",
      "tags": [
        "jim-jarmusch",
        "tilda-swinton-eve",
        "tom-hiddleston-adam",
        "detroit-and-tangier-nocturnes",
        "vintage-guitars"
      ],
      "trailerYoutubeId": "pkeWhokaPPs",
      "poster": "./posters/only-lovers-left-alive.jpg"
    },
    {
      "id": "a-nightmare-on-elm-street-3-dream-warriors",
      "title": "A Nightmare on Elm Street 3: Dream Warriors",
      "year": 1987,
      "director": "Chuck Russell",
      "rating": 6.7,
      "rank": 661,
      "runtime": "96 min",
      "genreIds": [
        "modern-horror",
        "fantasy-epics"
      ],
      "synopsis": "A psychiatrist, familiar with the knife-wielding dream demon Freddy Krueger, helps teens at a mental hospital battle the killer who is invading their dreams.",
      "tags": [
        "chuck-russell",
        "patricia-arquette",
        "welcome-to-prime-time-bitch",
        "claymation-marionette"
      ],
      "trailerYoutubeId": "ryooh3M42sg",
      "poster": "./posters/a-nightmare-on-elm-street-3-dream-warriors.jpg"
    },
    {
      "id": "eyes-without-a-face",
      "title": "European Horror: Les Yeux Sans Visage aka Eyes Without A Face (1960)",
      "year": 1960,
      "director": "Visionary Filmmaker",
      "rating": 7.5,
      "rank": 689,
      "runtime": "2h 00m",
      "genreIds": [
        "modern-horror",
        "sci-fi"
      ],
      "synopsis": "Directed by Georges Franju, based on a book by Jean Redon. It tells the tale of a plastic surgeon who is determined to perform a face transplant on his daughter, who is disfigured after an auto crash. The film stars Pierre Brasseu...",
      "tags": [
        "georges-franju",
        "dr-genessier-face-transplant-scalpel",
        "white-porcelain-mask",
        "kennel-dogs"
      ],
      "trailerYoutubeId": "qSrgdWjOASc",
      "poster": "./posters/eyes-without-a-face.jpg"
    },
    {
      "id": "a-better-tomorrow-ii",
      "title": "A Better Tomorrow II",
      "year": 2025,
      "director": "John Woo",
      "rating": 7.1,
      "rank": 706,
      "runtime": "105 min",
      "genreIds": [
        "action-spectacle",
        "neo-noir"
      ],
      "synopsis": "A restauranteur teams up with a police officer and his ex-con brother to avenge the death of a friend's daughter.",
      "tags": [
        "john-woo",
        "chow-yun-fat-ken",
        "mansion-blood-soaked-four-man-standoff"
      ],
      "trailerYoutubeId": "tIHqAEcjctM",
      "poster": "./posters/a-better-tomorrow-ii.jpg"
    },
    {
      "id": "the-triplets-of-belleville",
      "title": "The Triplets of Belleville",
      "year": 2004,
      "director": "Sylvain Chomet",
      "rating": 7.7,
      "rank": 740,
      "runtime": "80 min",
      "genreIds": [
        "anime-masterpieces",
        "satire-dark-comedy"
      ],
      "synopsis": "When her grandson is kidnapped during the Tour de France, Madame Souza and her beloved pooch Bruno team up with the Belleville Sisters--an aged song-and-dance team from the days of Fred Astaire--to rescue him.",
      "tags": [
        "sylvain-chomet",
        "tour-de-france-kidnapping",
        "french-triplets-frog-soup",
        "nostalgic-swing-jazz"
      ],
      "trailerYoutubeId": "ECtTChc6oyw",
      "poster": "./posters/the-triplets-of-belleville.jpg"
    },
    {
      "id": "waltz-with-bashir",
      "title": "Waltz with Bashir",
      "year": 2008,
      "director": "Ari Folman",
      "rating": 8,
      "rank": 743,
      "runtime": "90 min",
      "genreIds": [
        "anime-masterpieces",
        "biopic-epics",
        "mind-bending"
      ],
      "synopsis": "An Israeli film director interviews fellow veterans of the 1982 invasion of Lebanon to reconstruct his own memories of his term of service in that conflict.",
      "tags": [
        "ari-folman",
        "1982-lebanon-war-amnesia",
        "hallucinatory-animated-documentary",
        "sabras-and-shatila-flares"
      ],
      "trailerYoutubeId": "CoM-L62peIo",
      "poster": "./posters/waltz-with-bashir.jpg"
    },
    {
      "id": "i-lost-my-body",
      "title": "I Lost My Body",
      "year": 2019,
      "director": "J\u00e9r\u00e9my Clapin",
      "rating": 7.5,
      "rank": 746,
      "runtime": "81 min",
      "genreIds": [
        "anime-masterpieces",
        "mind-bending",
        "fantasy-epics"
      ],
      "synopsis": "A story of Naoufel, a young man who is in love with Gabrielle. In another part of town, a severed hand escapes from a dissection lab, determined to find its body again.",
      "tags": [
        "jeremy-clapin",
        "severed-hand-paris-odyssey",
        "poetic-destiny",
        "pigeon-roof-struggle"
      ],
      "trailerYoutubeId": "iblGg3Rpub8",
      "poster": "./posters/i-lost-my-body.jpg"
    },
    {
      "id": "the-secret-of-kells",
      "title": "The Secret of Kells",
      "year": 2016,
      "director": "Tomm Moore, Nora Twomey",
      "rating": 7.5,
      "rank": 749,
      "runtime": "75 min",
      "genreIds": [
        "anime-masterpieces",
        "fantasy-epics"
      ],
      "synopsis": "A young boy in a remote medieval outpost under siege from barbarian raids is beckoned to adventure when a celebrated master illuminator arrives with an ancient book, brimming with secret wisdom and powers.",
      "tags": [
        "tomm-moore",
        "cartoon-saloon",
        "book-of-kells-illumination",
        "viking-siege",
        "aisling-wolf-spirit"
      ],
      "trailerYoutubeId": "tMPhHTtKZ8Q",
      "poster": "./posters/the-secret-of-kells.jpg"
    },
    {
      "id": "the-nightmare-before-christmas",
      "title": "32: The Nightmare Before Christmas (1993)",
      "year": 1993,
      "director": "Visionary Filmmaker",
      "rating": 7.5,
      "rank": 751,
      "runtime": "69 min",
      "genreIds": [
        "fantasy-epics",
        "satire-dark-comedy",
        "anime-masterpieces"
      ],
      "synopsis": "An acclaimed cinematic masterpiece featuring breathtaking vision and performances.",
      "tags": [
        "henry-selick",
        "tim-burton",
        "jack-skellington-pumpkin-king",
        "oogie-boogie",
        "danny-elfman-what-is-this"
      ],
      "trailerYoutubeId": "wr6N_hZyBCk",
      "poster": "./posters/the-nightmare-before-christmas.jpg"
    },
    {
      "id": "kubo-and-the-two-strings",
      "title": "Kubo and the Two Strings",
      "year": 2016,
      "director": "Travis Knight",
      "rating": 7.7,
      "rank": 754,
      "runtime": "101 min",
      "genreIds": [
        "anime-masterpieces",
        "fantasy-epics",
        "martial-arts"
      ],
      "synopsis": "A young boy named Kubo must locate a magical suit of armour worn by his late father in order to defeat a vengeful spirit from the past.",
      "tags": [
        "travis-knight",
        "laika",
        "origami-shamisen-magic",
        "moon-king",
        "giant-skeleton-hall-with-swords"
      ],
      "trailerYoutubeId": "qZefKaANfe0",
      "poster": "./posters/kubo-and-the-two-strings.jpg"
    },
    {
      "id": "magnolia",
      "title": "Magnolia (1999)",
      "year": 2016,
      "director": "Visionary Filmmaker",
      "rating": 7.5,
      "rank": 765,
      "runtime": "92 min",
      "genreIds": [
        "mind-bending",
        "biopic-epics"
      ],
      "synopsis": "An acclaimed cinematic masterpiece featuring breathtaking vision and performances.",
      "tags": [
        "paul-thomas-anderson",
        "tom-cruise-frank-t-j-mackey",
        "aimee-mann-wise-up-singalong",
        "sky-raining-frogs"
      ],
      "trailerYoutubeId": "KnamcFv_N9Q",
      "poster": "./posters/magnolia.jpg"
    },
    {
      "id": "kick-ass",
      "title": "Kick-Ass (2010) / Deadpool (2016)",
      "year": 2024,
      "director": "Visionary Filmmaker",
      "rating": 7.5,
      "rank": 776,
      "runtime": "122 min",
      "genreIds": [
        "action-spectacle",
        "satire-dark-comedy",
        "martial-arts"
      ],
      "synopsis": "An acclaimed cinematic masterpiece featuring breathtaking vision and performances.",
      "tags": [
        "matthew-vaughn",
        "chloe-grace-moretz-hit-girl",
        "nicolas-cage-big-daddy-adam-west-voice",
        "corridor-night-vision-strobe-gunfight"
      ],
      "trailerYoutubeId": "JiuRbHgY_Mk",
      "poster": "./posters/kick-ass.jpg"
    },
    {
      "id": "the-crow",
      "title": "The Crow - (1994)",
      "year": 2022,
      "director": "Visionary Filmmaker",
      "rating": 7.5,
      "rank": 812,
      "runtime": "45 min",
      "genreIds": [
        "fantasy-epics",
        "neo-noir",
        "action-spectacle"
      ],
      "synopsis": "An acclaimed cinematic masterpiece featuring breathtaking vision and performances.",
      "tags": [
        "alex-proyas",
        "brandon-lee-eric-draven",
        "devils-night-detroit",
        "rainy-gargoyle-guitar-solo",
        "it-cant-rain-all-the-time"
      ],
      "trailerYoutubeId": "djSKp_pwmOA",
      "poster": "./posters/the-crow.jpg"
    },
    {
      "id": "deadpool-wolverine",
      "title": "Deadpool & Wolverine (2024)",
      "year": 2024,
      "director": "Visionary Filmmaker",
      "rating": 7.5,
      "rank": 831,
      "runtime": "2h 00m",
      "genreIds": [
        "action-spectacle",
        "satire-dark-comedy",
        "sci-fi"
      ],
      "synopsis": "An acclaimed cinematic masterpiece featuring breathtaking vision and performances.",
      "tags": [
        "shawn-levy",
        "ryan-reynolds",
        "hugh-jackman-yellow-suit",
        "void-wasteland-honda-odyssey-brawl",
        "madonna-like-a-prayer-corridor-carnage"
      ],
      "trailerYoutubeId": "73_1biulkYk",
      "poster": "./posters/deadpool-wolverine.jpg"
    },
    {
      "id": "the-third-man",
      "title": "The Third Man (1949)/Blue Valentine (2010) - 22 Movie Buff Specialists (Ep 79)",
      "year": 2022,
      "director": "Visionary Filmmaker",
      "rating": 7.5,
      "rank": 848,
      "runtime": "75 min",
      "genreIds": [
        "neo-noir",
        "mystery-whodunit"
      ],
      "synopsis": "An acclaimed cinematic masterpiece featuring breathtaking vision and performances.",
      "tags": [
        "carol-reed",
        "orson-welles-harry-lime",
        "joseph-cotten",
        "vienna-sewer-chase",
        "cuckoo-clock-ferris-wheel-monologue",
        "anton-karas-zither-score"
      ],
      "trailerYoutubeId": "gxmT1fjFQuI",
      "poster": "./posters/the-third-man.jpg"
    },
    {
      "id": "the-39-steps",
      "title": "The 39 Steps (1935)",
      "year": 2023,
      "director": "Visionary Filmmaker",
      "rating": 7.5,
      "rank": 851,
      "runtime": "2h 00m",
      "genreIds": [
        "mystery-whodunit",
        "action-spectacle"
      ],
      "synopsis": "An acclaimed cinematic masterpiece featuring breathtaking vision and performances.",
      "tags": [
        "alfred-hitchcock",
        "robert-donat-richard-hannay",
        "mr-memory-music-hall",
        "handcuffed-scottish-moors-escape"
      ],
      "trailerYoutubeId": "LBcNfAcU-Lc",
      "poster": "./posters/the-39-steps.jpg"
    },
    {
      "id": "godzilla",
      "title": "NATURE VS MAN: Godzilla (1954)/Godzilla (2014)",
      "year": 1954,
      "director": "Visionary Filmmaker",
      "rating": 7.5,
      "rank": 856,
      "runtime": "2h 00m",
      "genreIds": [
        "sci-fi",
        "modern-horror",
        "action-spectacle"
      ],
      "synopsis": "Godzilla from 1954 is a Japanese classic released in 1954 is about a huge monster who comes alive during a fear of nuclear holocaust during a post-war Japan. Using a filming technique called suitmation (an actor dressed in a suit)...",
      "tags": [
        "ishiro-honda",
        "gojira-atomic-radiation-allegory",
        "tokyo-firestorm-destruction",
        "dr-serizawa-oxygen-destroyer"
      ],
      "trailerYoutubeId": "IVONRrcn9TI",
      "poster": "./posters/godzilla.jpg"
    },
    {
      "id": "christine",
      "title": "Christine (1983)",
      "year": 1983,
      "director": "Visionary Filmmaker",
      "rating": 7.5,
      "rank": 905,
      "runtime": "2h 00m",
      "genreIds": [
        "modern-horror",
        "fantasy-epics"
      ],
      "synopsis": "An acclaimed cinematic masterpiece featuring breathtaking vision and performances.",
      "tags": [
        "john-carpenter",
        "stephen-king",
        "1958-plymouth-fury-possession",
        "self-repairing-dented-metal-body",
        "flaming-car-highway-stalking"
      ],
      "trailerYoutubeId": "ieBmy6qjiCI",
      "poster": "./posters/christine.jpg"
    }
  ]
};
