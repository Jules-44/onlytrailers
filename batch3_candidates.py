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

BATCH_3 = [
    # --- ANIMATION, CLAYMATION & AVANT-GARDE ---
    {"title": "The Triplets of Belleville", "query": "The Triplets of Belleville", "genres": ["anime-masterpieces", "satire-dark-comedy"], "tags": ["sylvain-chomet", "tour-de-france-kidnapping", "french-triplets-frog-soup", "nostalgic-swing-jazz"]},
    {"title": "The Illusionist", "query": "The Illusionist 2010 Sylvain Chomet", "genres": ["anime-masterpieces"], "tags": ["sylvain-chomet", "jacques-tati-script", "edinburgh-stage-magician", "fading-vaudeville"]},
    {"title": "Waltz with Bashir", "query": "Waltz with Bashir", "genres": ["anime-masterpieces", "biopic-epics", "mind-bending"], "tags": ["ari-folman", "1982-lebanon-war-amnesia", "hallucinatory-animated-documentary", "sabras-and-shatila-flares"]},
    {"title": "Persepolis", "query": "Persepolis 2007", "genres": ["anime-masterpieces", "biopic-epics"], "tags": ["marjane-satrapi", "iranian-revolution", "black-and-white-woodcut-animation", "iron-maiden-punk-cassette"]},
    {"title": "I Lost My Body", "query": "I Lost My Body", "genres": ["anime-masterpieces", "mind-bending", "fantasy-epics"], "tags": ["jeremy-clapin", "severed-hand-paris-odyssey", "poetic-destiny", "pigeon-roof-struggle"]},
    {"title": "Fantastic Planet", "query": "Fantastic Planet 1973", "genres": ["anime-masterpieces", "sci-fi", "mind-bending"], "tags": ["rene-laloux", "draag-giant-blue-aliens", "human-oms-pets", "psychedelic-jazz-funk-score"]},
    {"title": "Watership Down", "query": "Watership Down 1978", "genres": ["anime-masterpieces", "fantasy-epics", "modern-horror"], "tags": ["martin-rosen", "fiver-apocalyptic-visions", "general-woundwort-warren", "bright-eyes-art-garfunkel"]},
    {"title": "The Secret of NIMH", "query": "The Secret of NIMH 1982", "genres": ["anime-masterpieces", "fantasy-epics", "sci-fi"], "tags": ["don-bluth", "mrs-brisby-amulet", "nicodemus-glowing-eyes", "super-intelligent-lab-rats"]},
    {"title": "Song of the Sea", "query": "Song of the Sea 2014", "genres": ["anime-masterpieces", "fantasy-epics"], "tags": ["tomm-moore", "cartoon-saloon", "irish-selkie-folklore", "machas-owl-witches", "watercolor-celtic-knots"]},
    {"title": "The Secret of Kells", "query": "The Secret of Kells", "genres": ["anime-masterpieces", "fantasy-epics"], "tags": ["tomm-moore", "cartoon-saloon", "book-of-kells-illumination", "viking-siege", "aisling-wolf-spirit"]},
    {"title": "Wolfwalkers", "query": "Wolfwalkers 2020", "genres": ["anime-masterpieces", "fantasy-epics", "action-spectacle"], "tags": ["tomm-moore", "cartoon-saloon", "kilkenny-wolf-pack", "lord-protector-cromwell", "scent-vision-animation"]},
    {"title": "Coraline", "query": "Coraline 2009", "genres": ["modern-horror", "fantasy-epics", "anime-masterpieces"], "tags": ["henry-selick", "neil-gaiman", "laika-stop-motion", "other-mother-button-eyes", "spider-web-void"]},
    {"title": "The Nightmare Before Christmas", "query": "The Nightmare Before Christmas 1993", "genres": ["fantasy-epics", "satire-dark-comedy", "anime-masterpieces"], "tags": ["henry-selick", "tim-burton", "jack-skellington-pumpkin-king", "oogie-boogie", "danny-elfman-what-is-this"]},
    {"title": "Corpse Bride", "query": "Corpse Bride 2005", "genres": ["fantasy-epics", "satire-dark-comedy", "anime-masterpieces"], "tags": ["tim-burton", "mike-johnson", "emily-corpse-bride", "underworld-jazz-skeleton-cabaret", "blue-and-grey-palettes"]},
    {"title": "Kubo and the Two Strings", "query": "Kubo and the Two Strings", "genres": ["anime-masterpieces", "fantasy-epics", "martial-arts"], "tags": ["travis-knight", "laika", "origami-shamisen-magic", "moon-king", "giant-skeleton-hall-with-swords"]},
    {"title": "Isle of Dogs", "query": "Isle of Dogs 2018", "genres": ["anime-masterpieces", "satire-dark-comedy", "sci-fi"], "tags": ["wes-anderson", "trash-island-canine-flu", "atari-kobayashi-pilot", "taiko-drum-score"]},
    {"title": "Fantastic Mr. Fox", "query": "Fantastic Mr. Fox 2009", "genres": ["anime-masterpieces", "satire-dark-comedy"], "tags": ["wes-anderson", "roald-dahl", "boggis-bunce-and-bean", "cider-cellar-heist", "whistle-click-gesture"]},
    {"title": "Chicken Run", "query": "Chicken Run 2000", "genres": ["satire-dark-comedy", "anime-masterpieces", "action-spectacle"], "tags": ["aardman-claymation", "peter-lord-nick-park", "tweedys-farm-stalag-escape", "pie-machine-contraption"]},
    {"title": "Guillermo del Toro's Pinocchio", "query": "Guillermo del Toro's Pinocchio 2022", "genres": ["fantasy-epics", "biopic-epics", "anime-masterpieces"], "tags": ["guillermo-del-toro", "oscar-best-animated-feature", "fascist-italy-setting", "wooden-boy-mortality", "blue-fairy-death"]},

    # --- CRIME SAGAS, CULT THRILLERS & NEO-NOIR ---
    {"title": "Barton Fink", "query": "Barton Fink 1991", "genres": ["mind-bending", "satire-dark-comedy", "neo-noir"], "tags": ["coen-brothers", "john-turturro", "john-goodman-hotel-earle-fire", "peeling-wallpaper-heatwave", "palme-dor-winner"]},
    {"title": "A Serious Man", "query": "A Serious Man 2009", "genres": ["satire-dark-comedy", "mind-bending"], "tags": ["coen-brothers", "michael-stuhlbarg-larry-gopnik", "dybbuk-prologue", "tornado-approaching-school"]},
    {"title": "Inside Llewyn Davis", "query": "Inside Llewyn Davis 2013", "genres": ["satire-dark-comedy", "biopic-epics"], "tags": ["coen-brothers", "oscar-isaac", "greenwich-village-folk-scene", "ginger-cat-odyssey", "fare-thee-well"]},
    {"title": "There Will Be Blood", "query": "There Will Be Blood 2007", "genres": ["biopic-epics", "neo-noir"], "tags": ["paul-thomas-anderson", "daniel-day-lewis-daniel-plainview", "oil-derrick-gusher-fire", "i-drink-your-milkshake", "bowling-alley-climax"]},
    {"title": "Boogie Nights", "query": "Boogie Nights 1997", "genres": ["biopic-epics", "satire-dark-comedy"], "tags": ["paul-thomas-anderson", "mark-wahlberg-dirk-diggler", "burt-reynolds-jack-horner", "firecracker-drug-deal-suspense"]},
    {"title": "Magnolia", "query": "Magnolia 1999", "genres": ["mind-bending", "biopic-epics"], "tags": ["paul-thomas-anderson", "tom-cruise-frank-t-j-mackey", "aimee-mann-wise-up-singalong", "sky-raining-frogs"]},
    {"title": "The Master", "query": "The Master 2012", "genres": ["biopic-epics", "mind-bending"], "tags": ["paul-thomas-anderson", "joaquin-phoenix-freddie-quell", "philip-seymour-hoffman-lancaster-dodd", "processing-session-no-blinking"]},
    {"title": "Phantom Thread", "query": "Phantom Thread 2017", "genres": ["satire-dark-comedy", "neo-noir"], "tags": ["paul-thomas-anderson", "daniel-day-lewis-reynolds-woodcock", "vicky-krieps-alma", "poisonous-mushroom-omelette", "jonny-greenwood-score"]},
    {"title": "Lock, Stock and Two Smoking Barrels", "query": "Lock, Stock and Two Smoking Barrels 1998", "genres": ["action-spectacle", "satire-dark-comedy", "neo-noir"], "tags": ["guy-ritchie", "jason-statham-bacon", "vinnie-jones-big-chris", "antique-shotguns-heist", "poker-debt-spirals"]},
    {"title": "Snatch", "query": "Snatch 2000", "genres": ["action-spectacle", "satire-dark-comedy", "martial-arts"], "tags": ["guy-ritchie", "brad-pitt-mickey-one-punch-pikey", "jason-statham-turkish", "alan-ford-brick-top-pigs", "86-carat-diamond"]},
    {"title": "RocknRolla", "query": "RocknRolla 2008", "genres": ["action-spectacle", "satire-dark-comedy", "neo-noir"], "tags": ["guy-ritchie", "gerard-butler-one-two", "tom-hardy-handsome-bob", "mark-strong-archibald", "lucky-painting-theft"]},
    {"title": "Sherlock Holmes", "query": "Sherlock Holmes 2009 Guy Ritchie", "genres": ["mystery-whodunit", "action-spectacle", "martial-arts"], "tags": ["guy-ritchie", "robert-downey-jr-sherlock", "jude-law-dr-watson", "slow-mo-boxing-calculation", "parliament-chemical-weapon"]},
    {"title": "Sherlock Holmes: A Game of Shadows", "query": "Sherlock Holmes: A Game of Shadows 2011", "genres": ["mystery-whodunit", "action-spectacle", "martial-arts"], "tags": ["guy-ritchie", "robert-downey-jr", "jared-harris-professor-moriarty", "forest-artillery-slow-mo-sprint", "reichenbach-fall-chess"]},
    {"title": "The Gentlemen", "query": "The Gentlemen 2020", "genres": ["action-spectacle", "satire-dark-comedy", "neo-noir"], "tags": ["guy-ritchie", "matthew-mcconaughey-mickey-pearson", "hugh-grant-fletcher", "colin-farrell-coach-tracksuits"]},
    {"title": "Wrath of Man", "query": "Wrath of Man 2021", "genres": ["action-spectacle", "neo-noir"], "tags": ["guy-ritchie", "jason-statham-h", "armored-car-cash-depot-robbery", "unflinching-revenge-execution"]},
    {"title": "Layer Cake", "query": "Layer Cake 2004", "genres": ["neo-noir", "action-spectacle"], "tags": ["matthew-vaughn", "daniel-craig-unnamed-dealer", "sienna-miller", "yellow-tea-shop-climax", "ecstasy-pill-shipment"]},
    {"title": "Kick-Ass", "query": "Kick-Ass 2010", "genres": ["action-spectacle", "satire-dark-comedy", "martial-arts"], "tags": ["matthew-vaughn", "chloe-grace-moretz-hit-girl", "nicolas-cage-big-daddy-adam-west-voice", "corridor-night-vision-strobe-gunfight"]},
    {"title": "Sexy Beast", "query": "Sexy Beast 2000", "genres": ["neo-noir", "satire-dark-comedy"], "tags": ["jonathan-glazer", "ben-kingsley-don-logan", "ray-winstone-gal", "costa-del-sol-pool-boulder", "underwater-bank-vault-drill"]},
    {"title": "Bronson", "query": "Bronson 2008", "genres": ["biopic-epics", "satire-dark-comedy", "martial-arts"], "tags": ["nicolas-winding-refn", "tom-hardy-charles-bronson", "greased-naked-prison-brawl", "theatrical-stage-alter-ego"]},
    {"title": "Valhalla Rising", "query": "Valhalla Rising 2009", "genres": ["fantasy-epics", "action-spectacle", "mind-bending"], "tags": ["nicolas-winding-refn", "mads-mikkelsen-one-eye", "blood-red-fog-river", "mute-norse-warrior-crusade"]},
    {"title": "Pusher", "query": "Pusher 1996", "genres": ["neo-noir", "action-spectacle"], "tags": ["nicolas-winding-refn", "kim-bodnia-frank", "mads-mikkelsen-tonny", "copenhagen-heroin-debt-spiral"]},
    {"title": "Pusher II", "query": "Pusher II 2004", "genres": ["neo-noir"], "tags": ["nicolas-winding-refn", "mads-mikkelsen-tonny-respect-tattoo", "paternal-rejection-tragedy"]},

    # --- PUZZLE BOXES, SURVIVAL & CONFINED THRILLERS ---
    {"title": "Cube", "query": "Cube 1997", "genres": ["sci-fi", "mind-bending", "modern-horror"], "tags": ["vincenzo-natali", "geometric-booby-trapped-rooms", "prime-number-coordinates", "razor-wire-grid-slice"]},
    {"title": "The Platform", "query": "The Platform 2019", "genres": ["sci-fi", "satire-dark-comedy", "modern-horror"], "tags": ["galder-gaztelu-urrutia", "vertical-prison-food-descending-slab", "obvious-class-allegory", "panna-cotta-message"]},
    {"title": "Buried", "query": "Buried 2010", "genres": ["mystery-whodunit", "mind-bending"], "tags": ["rodrigo-cortes", "ryan-reynolds-paul-conroy", "wooden-coffin-under-iraq-sand", "zippo-lighter-and-cellphone"]},
    {"title": "Phone Booth", "query": "Phone Booth 2002", "genres": ["mystery-whodunit", "neo-noir"], "tags": ["joel-schumacher", "colin-farrell-stu-shepard", "kiefer-sutherland-sniper-voice", "8th-avenue-booth-siege"]},
    {"title": "Locke", "query": "Locke 2013", "genres": ["biopic-epics"], "tags": ["steven-knight", "tom-hardy-ivan-locke", "bmw-drive-to-london", "hands-free-bluetooth-life-implosion", "concrete-pour-logistics"]},
    {"title": "Chronicle", "query": "Chronicle 2012", "genres": ["sci-fi", "action-spectacle", "modern-horror"], "tags": ["josh-trank", "dane-dehaan-andrew-detmer", "seattle-space-needle-telekinesis-duel", "found-footage-supervillain"]},
    {"title": "The Adjustment Bureau", "query": "The Adjustment Bureau 2011", "genres": ["sci-fi", "mind-bending"], "tags": ["george-nolfi", "matt-damon", "emily-blunt", "fedora-hat-doorway-teleportation", "fate-plan-rewriting"]},
    {"title": "Another Earth", "query": "Another Earth 2011", "genres": ["sci-fi", "mind-bending"], "tags": ["mike-cahill", "brit-marling", "duplicate-earth-in-the-sky", "fatal-car-accident-atonement", "saw-musical-instrument"]},
    {"title": "Cube Zero", "query": "Cube Zero 2004", "genres": ["sci-fi", "mystery-whodunit"], "tags": ["ernie-barbarash", "control-room-technicians", "cube-creator-conspiracy"]},

    # --- SHAW BROTHERS & MARTIAL ARTS LEGENDS ---
    {"title": "Five Deadly Venoms", "query": "Five Deadly Venoms 1978", "genres": ["martial-arts", "action-spectacle", "mystery-whodunit"], "tags": ["chang-cheh", "centipede-snake-scorpion-lizard-toad", "venom-mob", "hidden-identity-clan"]},
    {"title": "Crippled Avengers", "query": "Crippled Avengers 1978", "genres": ["martial-arts", "action-spectacle"], "tags": ["chang-cheh", "iron-feet-blind-deaf-fighter-alliance", "iron-rings-prosthetics"]},
    {"title": "The Eight Diagram Pole Fighter", "query": "The Eight Diagram Pole Fighter 1984", "genres": ["martial-arts", "action-spectacle"], "tags": ["lau-kar-leung", "gordon-liu", "alexander-fu-sheng", "defanging-wolves-teeth-pole-staff"]},
    {"title": "Heroes of the East", "query": "Heroes of the East 1978", "genres": ["martial-arts", "action-spectacle", "satire-dark-comedy"], "tags": ["lau-kar-leung", "gordon-liu", "chinese-kung-fu-vs-japanese-ninjutsu", "nunchaku-vs-three-section-staff"]},
    {"title": "Snake in the Eagle's Shadow", "query": "Snake in the Eagle's Shadow 1978", "genres": ["martial-arts", "satire-dark-comedy", "action-spectacle"], "tags": ["yuen-woo-ping", "jackie-chan", "snake-fist-combined-with-cat-claws", "yuen-siu-tien-master"]},
    {"title": "The Young Master", "query": "The Young Master 1980", "genres": ["martial-arts", "satire-dark-comedy", "action-spectacle"], "tags": ["jackie-chan", "lion-dance-opening", "twenty-minute-whang-in-shik-hapkido-duel"]},
    {"title": "Dragon Lord", "query": "Dragon Lord 1982", "genres": ["martial-arts", "satire-dark-comedy", "action-spectacle"], "tags": ["jackie-chan", "shuttlecock-kicking-game", "barn-two-story-fall-brawl"]},
    {"title": "Miracles", "query": "Miracles 1989 Jackie Chan", "genres": ["martial-arts", "action-spectacle", "satire-dark-comedy"], "tags": ["jackie-chan", "anita-mui", "1930s-hong-kong-mob-boss", "rope-factory-intricate-stunts"]},
    {"title": "New Police Story", "query": "New Police Story 2004", "genres": ["martial-arts", "action-spectacle", "neo-noir"], "tags": ["benny-chan", "jackie-chan-senior-inspector-wing", "daniel-wu-joe-kwan", "bank-of-china-rooftop-handgun-assembly-race"]},
    {"title": "The Foreigner", "query": "The Foreigner 2017", "genres": ["action-spectacle", "neo-noir", "martial-arts"], "tags": ["martin-campbell", "jackie-chan-quan-ngoc-minh", "pierce-brosnan-liam-hennessy", "ira-london-department-store-bomb"]},

    # --- APOCALYPSE, WASTELAND & NATURAL FURY ---
    {"title": "Mad Max 2: The Road Warrior", "query": "The Road Warrior 1981", "genres": ["post-apocalyptic", "action-spectacle"], "tags": ["george-miller", "mel-gibson-max-rockatansky", "lord-humungus-hockey-mask", "feral-kid-metal-boomerang", "oil-tanker-chase-climax"]},
    {"title": "Mad Max Beyond Thunderdome", "query": "Mad Max Beyond Thunderdome 1985", "genres": ["post-apocalyptic", "action-spectacle", "fantasy-epics"], "tags": ["george-miller", "mel-gibson", "tina-turner-aunty-entity", "two-men-enter-one-man-leaves", "master-blaster"]},
    {"title": "Furiosa: A Mad Max Saga", "query": "Furiosa: A Mad Max Saga 2024", "genres": ["post-apocalyptic", "action-spectacle"], "tags": ["george-miller", "anya-taylor-joy-furiosa", "chris-hemsworth-dementus", "war-rig-bullet-farm-chase", "peach-tree-revenge"]},
    {"title": "Waterworld", "query": "Waterworld 1995", "genres": ["post-apocalyptic", "action-spectacle", "sci-fi"], "tags": ["kevin-reynolds", "kevin-costner-the-mariner", "webbed-feet-gills-trimaran", "dennis-hopper-deacon-smokers", "exxon-valdez"]},
    {"title": "The Postman", "query": "The Postman 1997", "genres": ["post-apocalyptic", "action-spectacle", "biopic-epics"], "tags": ["kevin-costner", "us-postal-service-hope-restoration", "will-patton-general-bethlehem"]},
    {"title": "Reign of Fire", "query": "Reign of Fire 2002", "genres": ["post-apocalyptic", "fantasy-epics", "action-spectacle"], "tags": ["rob-bowman", "christian-bale-quinn", "matthew-mcconaughey-denton-van-zan", "london-underground-dragons", "skydiving-harpoon-jump"]},
    {"title": "The Book of Eli", "query": "The Book of Eli 2010", "genres": ["post-apocalyptic", "action-spectacle", "martial-arts"], "tags": ["hughes-brothers", "denzel-washington-eli", "gary-oldman-carnegie", "braille-bible-memorized", "highway-underpass-silhouette-blade-fight"]},
    {"title": "The Rover", "query": "The Rover 2014", "genres": ["post-apocalyptic", "neo-noir"], "tags": ["david-michod", "guy-pearce-eric", "robert-pattinson-rey", "ten-years-after-western-collapse", "stolen-car-relentless-chase"]},
    {"title": "Stake Land", "query": "Stake Land 2010", "genres": ["post-apocalyptic", "modern-horror"], "tags": ["jim-mickle", "mister-vampire-hunter", "new-eden-journey", "flying-vampire-cult-drop"]},
    {"title": "Turbo Kid", "query": "Turbo Kid 2015", "genres": ["post-apocalyptic", "action-spectacle", "satire-dark-comedy"], "tags": ["rkss", "bmx-wasteland-rider", "turbo-glove-laser", "michael-ironside-zeus", "synthwave-soundtrack-le-matos"]},
    {"title": "Doomsday", "query": "Doomsday 2008", "genres": ["post-apocalyptic", "action-spectacle", "sci-fi"], "tags": ["neil-marshall", "rhona-mitra-eden-sinclair", "reaper-virus-scotland-quarantine", "cannibal-punks-vs-medieval-castle"]},
    {"title": "Blindness", "query": "Blindness 2008", "genres": ["post-apocalyptic", "mind-bending"], "tags": ["fernando-meirelles", "jose-saramago-novel", "julianne-moore-doctors-wife", "epidemic-of-white-blindness"]},
    {"title": "Greenland", "query": "Greenland 2020", "genres": ["action-spectacle", "space-exploration"], "tags": ["ric-roman-waugh", "gerard-butler", "clarke-interstellar-comet", "underground-bunker-flight"]},
    {"title": "Melancholia", "query": "Melancholia 2011", "genres": ["mind-bending", "sci-fi"], "tags": ["lars-von-trier", "kirsten-dunst-justine", "rogue-planet-collision", "wagner-tristan-und-isolde", "magical-stick-cave"]},
    {"title": "The Day After Tomorrow", "query": "The Day After Tomorrow 2004", "genres": ["action-spectacle", "sci-fi"], "tags": ["roland-emmerich", "dennis-quaid-jack-hall", "jake-gyllenhaal", "statue-of-liberty-frozen-tsunami", "nyc-public-library-hearth"]},
    {"title": "Twister", "query": "Twister 1996", "genres": ["action-spectacle"], "tags": ["jan-de-bont", "helen-hunt-dr-jo-harding", "bill-paxton-bill", "flying-cow", "dorothy-sensor-sphere-core-release"]},
    {"title": "Twisters", "query": "Twisters 2024", "genres": ["action-spectacle"], "tags": ["lee-isaac-chung", "daisy-edgar-jones-kate-carter", "glen-powell-tyler-owens", "oklahoma-firenado", "el-reno-movie-theater-storm"]}
]

for c in BATCH_3:
    slug = slugify(c["title"])
    if slug not in existing_slugs:
        existing_slugs.add(slug)
        current_pool.append(c)

print(f"Total existing in data.js: {len(existing_titles)}")
print(f"Total compiled candidates in master pool: {len(current_pool)}")
print(f"Grand Total when merged: {len(existing_titles) + len(current_pool)}")

with open('master_expansion_pool.json', 'w', encoding='utf-8') as f:
    json.dump(current_pool, f, indent=2)
