import json
import re

def slugify(title):
    return re.sub(r'[^a-z0-9]+', '-', title.lower()).strip('-')

with open('existing_titles.json', 'r', encoding='utf-8') as f:
    existing_titles = set(json.load(f))

with open('master_expansion_pool.json', 'r', encoding='utf-8') as f:
    current_pool = json.load(f)

existing_slugs = {slugify(t) for t in existing_titles}
for c in current_pool:
    existing_slugs.add(slugify(c['title']))

BATCH_4 = [
    # --- SPECTACLE BLOCKBUSTERS & SCI-FI ADVENTURE ---
    {"title": "Ghostbusters", "query": "Ghostbusters 1984", "genres": ["satire-dark-comedy", "sci-fi", "modern-horror"], "tags": ["ivan-reitman", "bill-murray-peter-venkman", "proton-packs-dont-cross-the-streams", "stay-puft-marshmallow-man", "slimer"]},
    {"title": "Ghostbusters II", "query": "Ghostbusters II 1989", "genres": ["satire-dark-comedy", "sci-fi", "fantasy-epics"], "tags": ["ivan-reitman", "vigo-the-carpathian-painting", "pink-mood-slime-subway", "statue-of-liberty-walking"]},
    {"title": "Ghostbusters: Afterlife", "query": "Ghostbusters: Afterlife 2021", "genres": ["satire-dark-comedy", "sci-fi", "fantasy-epics"], "tags": ["jason-reitman", "phoebe-spengler", "ecto-1-cornfield-drift", "muncher", "gozer-temple-summoning"]},
    {"title": "Independence Day", "query": "Independence Day 1996", "genres": ["sci-fi", "action-spectacle", "space-exploration"], "tags": ["roland-emmerich", "will-smith-welcome-to-earth", "jeff-goldblum-david-levinson", "white-house-destruction-beam", "president-whitmore-speech"]},
    {"title": "The Matrix Revolutions", "query": "The Matrix Revolutions 2003", "genres": ["cyberpunk", "sci-fi", "martial-arts", "action-spectacle"], "tags": ["wachowskis", "neo-vs-smith-supercell-rain-duel", "zion-dock-apush-suit-defense", "machine-city-deus-ex-machina"]},
    {"title": "The Matrix Resurrections", "query": "The Matrix Resurrections 2021", "genres": ["cyberpunk", "sci-fi", "mind-bending"], "tags": ["lana-wachowski", "keanu-reeves", "carrie-anne-moss", "san-francisco-swarm-mode", "modal-virtual-prison"]},
    {"title": "Avatar: The Way of Water", "query": "Avatar: The Way of Water 2022", "genres": ["sci-fi", "action-spectacle", "fantasy-epics"], "tags": ["james-cameron", "metkayina-reef-clan", "tulkun-whale-hunt", "submersible-sea-dragon-battle", "groundbreaking-underwater-mocap"]},
    {"title": "Star Trek", "query": "Star Trek 2009", "genres": ["sci-fi", "space-exploration", "action-spectacle", "time-travel"], "tags": ["j-j-abrams", "chris-pine-kirk", "zachary-quinto-spock", "lens-flares", "uss-enterprise-warp-jump", "vulcan-implosion-black-hole"]},
    {"title": "Star Trek Into Darkness", "query": "Star Trek Into Darkness 2013", "genres": ["sci-fi", "space-exploration", "action-spectacle"], "tags": ["j-j-abrams", "benedict-cumberbatch-khan-noonien-singh", "uss-vengeance-crash-san-francisco", "warp-core-radiation-sacrifice"]},
    {"title": "Star Trek Beyond", "query": "Star Trek Beyond 2016", "genres": ["sci-fi", "space-exploration", "action-spectacle"], "tags": ["justin-lin", "starbase-yorktown-gravity-inversion", "beastie-boys-sabotage-swarm-disruption", "idris-elba-krall"]},
    {"title": "Star Trek II: The Wrath of Khan", "query": "Star Trek II: The Wrath of Khan 1982", "genres": ["sci-fi", "space-exploration", "action-spectacle"], "tags": ["nicholas-meyer", "ricardo-montalban-khan", "mutara-nebula-tactical-duel", "klingon-ceti-eel", "needs-of-the-many"]},
    {"title": "Star Trek: First Contact", "query": "Star Trek: First Contact 1996", "genres": ["sci-fi", "space-exploration", "time-travel", "modern-horror"], "tags": ["jonathan-frakes", "patrick-stewart-captain-picard", "borg-queen-assimilation", "defiant-quantum-torpedoes", "phoenix-warp-flight"]},
    {"title": "Valerian and the City of a Thousand Planets", "query": "Valerian and the City of a Thousand Planets 2017", "genres": ["sci-fi", "space-exploration", "fantasy-epics"], "tags": ["luc-besson", "alpha-interstellar-metropolis", "big-market-interdimensional-heist", "rihanna-bubble-cabaret"]},
    {"title": "The Crow", "query": "The Crow 1994", "genres": ["fantasy-epics", "neo-noir", "action-spectacle"], "tags": ["alex-proyas", "brandon-lee-eric-draven", "devils-night-detroit", "rainy-gargoyle-guitar-solo", "it-cant-rain-all-the-time"]},
    {"title": "Underworld", "query": "Underworld 2003", "genres": ["modern-horror", "action-spectacle", "fantasy-epics"], "tags": ["len-wiseman", "kate-beckinsale-selene", "lycan-vs-vampire-war", "budapest-leather-trenchcoat-dual-pistols", "michael-corvin-hybrid"]},
    {"title": "Constantine", "query": "Constantine 2005", "genres": ["fantasy-epics", "neo-noir", "modern-horror"], "tags": ["francis-lawrence", "keanu-reeves-john-constantine", "spear-of-destiny", "peter-stormare-lucifer-white-suit", "holy-shotgun-demon-purging"]},
    {"title": "Hellboy", "query": "Hellboy 2004", "genres": ["fantasy-epics", "action-spectacle", "modern-horror"], "tags": ["guillermo-del-toro", "ron-perlman", "bureau-for-paranormal-research-and-defense", "right-hand-of-doom", "kroenen-clockwork-blades", "sammael"]},
    {"title": "The Mummy", "query": "The Mummy 1999", "genres": ["fantasy-epics", "action-spectacle", "satire-dark-comedy"], "tags": ["stephen-sommers", "brendan-fraser-rick-oconnell", "rachel-weisz-evelyn", "imhotep-sandstorm-face", "book-of-the-dead-hamunaptra"]},
    {"title": "The Mummy Returns", "query": "The Mummy Returns 2001", "genres": ["fantasy-epics", "action-spectacle"], "tags": ["stephen-sommers", "brendan-fraser", "dwayne-johnson-scorpion-king", "dirigible-oasis-race", "double-sai-duel"]},
    {"title": "Pirates of the Caribbean: The Curse of the Black Pearl", "query": "Pirates of the Caribbean: The Curse of the Black Pearl 2003", "genres": ["fantasy-epics", "action-spectacle", "satire-dark-comedy"], "tags": ["gore-verbinski", "johnny-depp-captain-jack-sparrow", "geoffrey-rush-barbossa", "moonlight-skeleton-pirates", "aztec-gold-isla-de-muerta"]},
    {"title": "Pirates of the Caribbean: Dead Man's Chest", "query": "Pirates of the Caribbean: Dead Man's Chest 2006", "genres": ["fantasy-epics", "action-spectacle", "modern-horror"], "tags": ["gore-verbinski", "johnny-depp", "bill-nighy-davy-jones", "flying-dutchman-organ", "kraken-tentacle-ship-crush", "three-man-waterwheel-sword-fight"]},
    {"title": "Pirates of the Caribbean: At World's End", "query": "Pirates of the Caribbean: At World's End 2007", "genres": ["fantasy-epics", "action-spectacle"], "tags": ["gore-verbinski", "maelstrom-whirlpool-sea-battle", "calypso-crab-tempest", "jack-sparrow-locker-hallucinations"]},
    {"title": "Master and Commander: The Far Side of the World", "query": "Master and Commander: The Far Side of the World 2003", "genres": ["action-spectacle", "biopic-epics"], "tags": ["peter-weir", "russell-crowe-jack-aubrey", "paul-bettany-stephen-maturin", "hms-surprise-vs-acheron", "cape-horn-gale", "galapagos-biodiversity"]},
    {"title": "Cast Away", "query": "Cast Away 2000", "genres": ["biopic-epics"], "tags": ["robert-zemeckis", "tom-hanks-chuck-noland", "wilson-volleyball", "island-spearfishing-survival", "fedex-package-wings"]},
    {"title": "The Shawshank Redemption", "query": "The Shawshank Redemption 1994", "genres": ["biopic-epics", "mystery-whodunit"], "tags": ["frank-darabont", "tim-robbins-andy-dufresne", "morgan-freeman-red", "rock-hammer-tunnel-rita-hayworth", "500-yards-of-foulness-rain-redemption"]},
    {"title": "The Green Mile", "query": "The Green Mile 1999", "genres": ["fantasy-epics", "biopic-epics", "modern-horror"], "tags": ["frank-darabont", "tom-hanks-paul-edgecomb", "michael-clarke-duncan-john-coffey", "miraculous-healing-hands", "mr-jingles-mouse"]},
    {"title": "Stand by Me", "query": "Stand by Me 1986", "genres": ["biopic-epics", "satire-dark-comedy"], "tags": ["rob-reiner", "river-phoenix", "wil-wheaton", "railroad-trestle-train-run", "blueberry-pie-barf-o-rama", "castle-rock-woods-journey"]},
    {"title": "Pleasantville", "query": "Pleasantville 1998", "genres": ["fantasy-epics", "satire-dark-comedy", "mind-bending"], "tags": ["gary-ross", "tobey-maguire", "reese-witherspoon", "monochrome-to-technicolor-awakening", "burning-courtroom-mural"]},
    {"title": "Forrest Gump", "query": "Forrest Gump 1994", "genres": ["biopic-epics", "satire-dark-comedy"], "tags": ["robert-zemeckis", "tom-hanks", "box-of-chocolates", "cross-country-running-beard", "vietnam-shrimping-boat-bubba-gump"]},
    {"title": "Black Hawk Down", "query": "Black Hawk Down 2001", "genres": ["action-spectacle", "biopic-epics"], "tags": ["ridley-scott", "josh-hartnett", "eric-bana-hoot", "mogadishu-super-six-one-crash", "relentless-urban-siege", "hans-zimmer-score"]},
    {"title": "The Last Samurai", "query": "The Last Samurai 2003", "genres": ["action-spectacle", "biopic-epics", "martial-arts"], "tags": ["edward-zwick", "tom-cruise-nathan-algren", "ken-watanabe-katsumoto", "village-rain-bokken-training", "gatling-gun-final-cavalry-charge"]},
    {"title": "Blood Diamond", "query": "Blood Diamond 2006", "genres": ["action-spectacle", "neo-noir", "biopic-epics"], "tags": ["edward-zwick", "leonardo-dicaprio-danny-archer", "djimon-hounsou-solomon-vandy", "sierra-leone-pink-diamond", "tia-this-is-africa"]},
    {"title": "Glory", "query": "Glory 1989", "genres": ["biopic-epics", "action-spectacle"], "tags": ["edward-zwick", "matthew-broderick-colonel-shaw", "denzel-washington-trip", "morgan-freeman", "54th-massachusetts-fort-wagner-charge"]},
    {"title": "Batman Begins", "query": "Batman Begins 2005", "genres": ["action-spectacle", "neo-noir", "martial-arts"], "tags": ["christopher-nolan", "christian-bale-bruce-wayne", "liam-neeson-ra-s-al-ghul", "league-of-shadows-ice-duel", "tumbler-rooftop-chase"]},
    {"title": "The Dark Knight Rises", "query": "The Dark Knight Rises 2012", "genres": ["action-spectacle", "neo-noir", "post-apocalyptic"], "tags": ["christopher-nolan", "christian-bale", "tom-hardy-bane", "anne-hathaway-catwoman", "gotham-football-field-collapse", "the-pit-climb-without-rope"]},
    {"title": "Insomnia", "query": "Insomnia 2002", "genres": ["mystery-whodunit", "neo-noir", "mind-bending"], "tags": ["christopher-nolan", "al-pacino-will-dormer", "robin-williams-walter-finch", "alaskan-midnight-sun-hallucinations", "log-flume-chase"]},
    {"title": "Spider-Man 2", "query": "Spider-Man 2 2004", "genres": ["action-spectacle", "sci-fi"], "tags": ["sam-raimi", "tobey-maguire-peter-parker", "alfred-molina-doc-ock", "elevated-train-braking-arms", "tritium-fusion-reactor"]},
    {"title": "Spider-Man: Into the Spider-Verse", "query": "Spider-Man: Into the Spider-Verse 2018", "genres": ["anime-masterpieces", "action-spectacle", "sci-fi"], "tags": ["bob-persichetti", "peter-ramsey", "rodney-rothman", "miles-morales-leap-of-faith", "halftone-comic-book-framerate", "post-malone-sunflower"]},
    {"title": "Spider-Man: Across the Spider-Verse", "query": "Spider-Man: Across the Spider-Verse 2023", "genres": ["anime-masterpieces", "action-spectacle", "sci-fi", "mind-bending"], "tags": ["joaquim-dos-santos", "kemp-powers", "justin-k-thompson", "miguel-o-hara-spider-man-2099", "mumbattan-collider-collapse", "earth-42-prowler-twist"]},
    {"title": "Logan", "query": "Logan 2017", "genres": ["action-spectacle", "neo-noir", "post-apocalyptic"], "tags": ["james-mangold", "hugh-jackman-wolverine", "patrick-stewart-professor-x", "dafne-keen-x-23", "adamantium-bullet", "r-rated-brutal-claws"]},
    {"title": "Deadpool", "query": "Deadpool 2016", "genres": ["action-spectacle", "satire-dark-comedy"], "tags": ["tim-miller", "ryan-reynolds-wade-wilson", "fourth-wall-breaking-red-spandex", "freeway-overpass-shootout", "maximum-effort"]},
    {"title": "Deadpool & Wolverine", "query": "Deadpool & Wolverine 2024", "genres": ["action-spectacle", "satire-dark-comedy", "sci-fi"], "tags": ["shawn-levy", "ryan-reynolds", "hugh-jackman-yellow-suit", "void-wasteland-honda-odyssey-brawl", "madonna-like-a-prayer-corridor-carnage"]},
    {"title": "Guardians of the Galaxy", "query": "Guardians of the Galaxy 2014", "genres": ["sci-fi", "space-exploration", "action-spectacle", "satire-dark-comedy"], "tags": ["james-gunn", "chris-pratt-star-lord", "awesome-mix-vol-1", "groot-we-are-groot", "rocket-raccoon-hadron-enforcer", "knowhere-mining-colony"]},
    {"title": "Guardians of the Galaxy Vol. 3", "query": "Guardians of the Galaxy Vol. 3 2023", "genres": ["sci-fi", "space-exploration", "action-spectacle", "satire-dark-comedy"], "tags": ["james-gunn", "high-evolutionary", "beastie-boys-no-sleep-till-brooklyn-hallway-single-take", "rocket-origin-tearjerker"]},
    {"title": "The Suicide Squad", "query": "The Suicide Squad 2021", "genres": ["action-spectacle", "satire-dark-comedy", "fantasy-epics"], "tags": ["james-gunn", "idris-elba-bloodsport", "john-cena-peacemaker", "margot-robbie-harley-quinn-flower-blood-escape", "starro-the-conqueror-giant-starfish"]},
    {"title": "Watchmen", "query": "Watchmen 2009", "genres": ["action-spectacle", "neo-noir", "sci-fi", "mind-bending"], "tags": ["zack-snyder", "jackie-earle-haley-rorschach", "billy-crudup-dr-manhattan-mars-palace", "who-watches-the-watchmen", "bob-dylan-times-they-are-a-changin-prologue"]},
    {"title": "V for Vendetta", "query": "V for Vendetta 2005", "genres": ["action-spectacle", "cyberpunk", "biopic-epics"], "tags": ["james-mcteigue", "wachowskis", "hugo-weaving-v", "natalie-portman-evey-hammond", "guy-fawkes-mask", "remember-remember-the-5th-of-november", "parliament-1812-overture-demolition"]},
    {"title": "Speed Racer", "query": "Speed Racer 2008", "genres": ["action-spectacle", "sci-fi", "anime-masterpieces"], "tags": ["wachowskis", "mach-5-jump-jacks", "fuji-helexicon-hyper-color-track", "casas-cristo-rally", "grand-prix-white-heat-finale"]},
    {"title": "Cloud Atlas", "query": "Cloud Atlas 2012", "genres": ["sci-fi", "mind-bending", "biopic-epics", "time-travel"], "tags": ["wachowskis", "tom-tykwer", "six-interwoven-eras", "neo-seoul-somni-451-clone", "cloud-atlas-sextet"]},
    {"title": "Bound", "query": "Bound 1996", "genres": ["neo-noir", "mystery-whodunit"], "tags": ["wachowskis", "gina-gershon-corky", "jennifer-tilly-violet", "joe-pantoliano-caesar", "mob-money-laundering-two-million-dollars", "plumbing-pipe-listening"]},

    # --- RETRO ANIME CLASSICS & GHIBLI TREASURES ---
    {"title": "Blood: The Last Vampire", "query": "Blood: The Last Vampire 2000", "genres": ["anime-masterpieces", "action-spectacle", "modern-horror"], "tags": ["hiroyuki-kitakubo", "production-i-g", "saya-katana-schoolgirl", "yokota-air-base-chiropterans"]},
    {"title": "Wicked City", "query": "Wicked City 1987", "genres": ["anime-masterpieces", "cyberpunk", "modern-horror"], "tags": ["yoshiaki-kawajiri", "black-guard-taki-renzaburo", "makie-demon-spider-woman", "neon-tokyo-shadow-dimension"]},
    {"title": "Fist of the North Star", "query": "Fist of the North Star 1986", "genres": ["anime-masterpieces", "martial-arts", "post-apocalyptic", "action-spectacle"], "tags": ["toyoo-ashida", "kenshiro-hokuto-shinken", "you-are-already-dead", "raoh-fist-king-canyon-clash"]},
    {"title": "Space Adventure Cobra", "query": "Space Adventure Cobra: The Movie 1982", "genres": ["anime-masterpieces", "space-exploration", "action-spectacle"], "tags": ["osamu-dezaki", "psychogun-left-arm", "crystal-bowie-skeleton-villain", "armaroid-lady"]},
    {"title": "Barefoot Gen", "query": "Barefoot Gen 1983", "genres": ["anime-masterpieces", "biopic-epics"], "tags": ["mori-masaki", "keiji-nakazawa", "hiroshima-atomic-bombing-eyewitness", "unflinching-anti-war-classic"]},
    {"title": "The Secret World of Arrietty", "query": "The Secret World of Arrietty 2010", "genres": ["anime-masterpieces", "fantasy-epics"], "tags": ["hiromasa-yonebayashi", "studio-ghibli", "mary-norton-borrowers", "under-floorboards-sugar-cube", "cecile-corbel-celtic-harp"]},
    {"title": "From Up on Poppy Hill", "query": "From Up on Poppy Hill 2011", "genres": ["anime-masterpieces", "biopic-epics"], "tags": ["goro-miyazaki", "hayao-miyazaki-screenplay", "1963-yokohama-harbor-signal-flags", "latin-quarter-clubhouse-restoration"]},
    {"title": "Pom Poko", "query": "Pom Poko 1994", "genres": ["anime-masterpieces", "fantasy-epics", "satire-dark-comedy"], "tags": ["isao-takahata", "tanuki-raccoon-dogs-shapeshifting", "tokyo-tama-hills-suburban-sprawl-resistance", "monster-procession-parade"]},
    {"title": "Only Yesterday", "query": "Only Yesterday 1991", "genres": ["anime-masterpieces", "biopic-epics"], "tags": ["isao-takahata", "taeko-okajima-safflower-harvest", "rural-yamagata-memories", "nostalgic-fifth-grade-flashbacks"]}
]

for c in BATCH_4:
    slug = slugify(c["title"])
    if slug not in existing_slugs:
        existing_slugs.add(slug)
        current_pool.append(c)

print(f"Total existing in data.js: {len(existing_titles)}")
print(f"Total compiled candidates in master pool: {len(current_pool)}")
print(f"Grand Total when merged: {len(existing_titles) + len(current_pool)}")

with open('master_expansion_pool.json', 'w', encoding='utf-8') as f:
    json.dump(current_pool, f, indent=2)
