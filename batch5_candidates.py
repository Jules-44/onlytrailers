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

BATCH_5 = [
    # --- GOLDEN AGE TITANS & TIMELESS CLASSICS ---
    {"title": "Casablanca", "query": "Casablanca 1942", "genres": ["neo-noir", "biopic-epics"], "tags": ["michael-curtiz", "humphrey-bogart-rick-blaine", "ingrid-bergman-ilsa-lund", "heres-looking-at-you-kid", "rick-cafe-americain", "la-marseillaise-anthem"]},
    {"title": "The Third Man", "query": "The Third Man 1949", "genres": ["neo-noir", "mystery-whodunit"], "tags": ["carol-reed", "orson-welles-harry-lime", "joseph-cotten", "vienna-sewer-chase", "cuckoo-clock-ferris-wheel-monologue", "anton-karas-zither-score"]},
    {"title": "Psycho", "query": "Psycho 1960", "genres": ["modern-horror", "mystery-whodunit", "neo-noir"], "tags": ["alfred-hitchcock", "anthony-perkins-norman-bates", "janet-leigh-marion-crane", "bates-motel-shower-scene", "screeching-bernard-herrmann-violins"]},
    {"title": "Strangers on a Train", "query": "Strangers on a Train 1951", "genres": ["mystery-whodunit", "neo-noir"], "tags": ["alfred-hitchcock", "robert-walker-bruno-antony", "criss-cross-murder-swap", "runaway-amusement-park-carousel", "tennis-match-turned-head"]},
    {"title": "Notorious", "query": "Notorious 1946", "genres": ["mystery-whodunit", "neo-noir"], "tags": ["alfred-hitchcock", "cary-grant", "ingrid-bergman", "claude-rains-sebastian", "wine-cellar-uranium-ore", "crane-shot-ballroom-key"]},
    {"title": "The 39 Steps", "query": "The 39 Steps 1935", "genres": ["mystery-whodunit", "action-spectacle"], "tags": ["alfred-hitchcock", "robert-donat-richard-hannay", "mr-memory-music-hall", "handcuffed-scottish-moors-escape"]},
    {"title": "M", "query": "M 1931 Fritz Lang", "genres": ["mystery-whodunit", "neo-noir", "modern-horror"], "tags": ["fritz-lang", "peter-lorre-hans-beckert", "in-the-hall-of-the-mountain-king-whistle", "chalk-m-on-shoulder", "criminal-underworld-kangaroo-court"]},
    {"title": "The Cabinet of Dr. Caligari", "query": "The Cabinet of Dr. Caligari 1920", "genres": ["modern-horror", "mind-bending"], "tags": ["robert-wiene", "german-expressionism", "somnambulist-cesare", "twisted-distorted-shadow-sets", "archetypal-psychiatric-twist"]},
    {"title": "Modern Times", "query": "Modern Times 1936", "genres": ["satire-dark-comedy", "sci-fi"], "tags": ["charlie-chaplin-the-tramp", "paulette-goddard", "giant-factory-gears-assembly-line", "automatic-feeding-machine-disaster"]},
    {"title": "City Lights", "query": "City Lights 1931", "genres": ["satire-dark-comedy", "biopic-epics"], "tags": ["charlie-chaplin-the-tramp", "blind-flower-girl", "eccentric-millionaire-friend", "you-can-see-now-yes-i-can-see-now"]},
    {"title": "The Great Dictator", "query": "The Great Dictator 1940", "genres": ["satire-dark-comedy", "biopic-epics"], "tags": ["charlie-chaplin", "adenoid-hynkel-barber", "globe-balloon-dance", "legendary-speech-for-humanity"]},
    {"title": "The General", "query": "The General 1926", "genres": ["action-spectacle", "satire-dark-comedy", "biopic-epics"], "tags": ["buster-keaton-johnnie-gray", "locomotive-chase-masterpiece", "rock-river-bridge-collapse", "cannon-on-flatcar-stunt"]},
    {"title": "Sherlock Jr.", "query": "Sherlock Jr. 1924", "genres": ["satire-dark-comedy", "fantasy-epics", "action-spectacle"], "tags": ["buster-keaton", "projectionist-stepping-into-movie-screen", "motorcycle-handlebars-ride", "exploding-billiards-ball"]},

    # --- MONSTER TITANS & KAIJU SAGAS ---
    {"title": "King Kong", "query": "King Kong 1933", "genres": ["fantasy-epics", "action-spectacle", "modern-horror"], "tags": ["merian-c-cooper", "fay-wray-ann-darrow", "willis-o-brien-stop-motion", "skull-island-gate", "empire-state-building-biplanes"]},
    {"title": "King Kong", "query": "King Kong 2005", "genres": ["fantasy-epics", "action-spectacle"], "tags": ["peter-jackson", "naomi-watts", "andy-serkis-mocap", "triple-v-rex-vine-chase", "central-park-ice-slide"]},
    {"title": "Godzilla", "query": "Godzilla 1954", "genres": ["sci-fi", "modern-horror", "action-spectacle"], "tags": ["ishiro-honda", "gojira-atomic-radiation-allegory", "tokyo-firestorm-destruction", "dr-serizawa-oxygen-destroyer"]},
    {"title": "Mothra vs. Godzilla", "query": "Mothra vs. Godzilla 1964", "genres": ["sci-fi", "action-spectacle", "fantasy-epics"], "tags": ["ishiro-honda", "infant-island-twin-shobijin-fairies", "giant-egg-hatching", "poison-powder-scales"]},
    {"title": "Godzilla vs. Destoroyah", "query": "Godzilla vs. Destoroyah 1995", "genres": ["sci-fi", "action-spectacle", "modern-horror"], "tags": ["takao-okawara", "burning-godzilla-nuclear-meltdown", "oxygen-destroyer-demon-mutant", "heartbreaking-tokyo-climax"]},
    {"title": "Gamera 3: Revenge of Iris", "query": "Gamera 3: Revenge of Iris 1999", "genres": ["sci-fi", "action-spectacle", "fantasy-epics"], "tags": ["shusuke-kaneko", "guardian-turtle-gamera", "tentacled-iris-deity", "shibuya-firestorm-tragedy", "legendary-heisei-climax"]},

    # --- SPIELBERG & CLASSIC CINEMA GIANTS ---
    {"title": "Duel", "query": "Duel 1971", "genres": ["action-spectacle", "modern-horror"], "tags": ["steven-spielberg", "dennis-weaver-david-mann", "rusted-peterbilt-281-tanker-truck", "relentless-highway-stalking"]},
    {"title": "Empire of the Sun", "query": "Empire of the Sun 1987", "genres": ["biopic-epics", "action-spectacle"], "tags": ["steven-spielberg", "christian-bale-jim-graham", "lunghua-internment-camp", "cadillac-of-the-skies-p-51-mustang"]},
    {"title": "Hook", "query": "Hook 1991", "genres": ["fantasy-epics", "satire-dark-comedy"], "tags": ["steven-spielberg", "robin-williams-peter-banning", "dustin-hoffman-captain-hook", "rufio-bangarang-food-fight", "flying-pirate-ship-duel"]},
    {"title": "The Adventures of Tintin", "query": "The Adventures of Tintin 2011", "genres": ["action-spectacle", "mystery-whodunit", "anime-masterpieces"], "tags": ["steven-spielberg", "herge-comics", "jamie-bell-tintin", "andy-serkis-captain-haddock", "bagghar-motorcycle-sidecar-single-take"]},
    {"title": "Who Framed Roger Rabbit", "query": "Who Framed Roger Rabbit 1988", "genres": ["satire-dark-comedy", "neo-noir", "mystery-whodunit", "anime-masterpieces"], "tags": ["robert-zemeckis", "bob-hoskins-eddie-valiant", "christopher-lloyd-judge-doom", "the-dip", "toon-town-portal", "jessica-rabbit"]},
    {"title": "Paddington 2", "query": "Paddington 2 2017", "genres": ["satire-dark-comedy", "fantasy-epics"], "tags": ["paul-king", "marmalade-sandwiches", "hugh-grant-phoenix-buchanan", "brendan-gleeson-knuckles-pink-prison", "train-roof-chase-masterpiece"]},

    # --- SODERBERGH & HEIST THRILLERS ---
    {"title": "Ocean's Eleven", "query": "Ocean's Eleven 2001", "genres": ["action-spectacle", "satire-dark-comedy", "neo-noir"], "tags": ["steven-soderbergh", "george-clooney-danny-ocean", "brad-pitt-rusty-ryan", "matt-damon-linus", "bellagio-vault-160-million", "fountain-claire-de-lune"]},
    {"title": "Ocean's Twelve", "query": "Ocean's Twelve 2004", "genres": ["action-spectacle", "satire-dark-comedy", "neo-noir"], "tags": ["steven-soderbergh", "george-clooney", "brad-pitt", "catherine-zeta-jones", "vincent-cassel-night-fox-laser-dance", "faberge-egg-race"]},
    {"title": "Ocean's Thirteen", "query": "Ocean's Thirteen 2007", "genres": ["action-spectacle", "satire-dark-comedy"], "tags": ["steven-soderbergh", "al-pacino-willy-bank", "the-bank-casino-rigging", "subway-tunnel-drill-earthquake"]},
    {"title": "Logan Lucky", "query": "Logan Lucky 2017", "genres": ["action-spectacle", "satire-dark-comedy"], "tags": ["steven-soderbergh", "channing-tatum-jimmy-logan", "adam-driver-clyde-logan", "daniel-craig-joe-bang", "charlotte-motor-speedway-pneumatic-tube-heist"]},
    {"title": "Traffic", "query": "Traffic 2000", "genres": ["neo-noir", "biopic-epics"], "tags": ["steven-soderbergh", "benicio-del-toro-javier-rodriguez", "michael-douglas", "oscar-best-director", "color-coded-tijuana-san-diego-dc-tapestry"]},
    {"title": "Contagion", "query": "Contagion 2011", "genres": ["sci-fi", "modern-horror", "biopic-epics"], "tags": ["steven-soderbergh", "mev-1-virus-epidemic", "cliff-martinez-throbbing-score", "r-nought-transmission-rate", "bat-and-pig-chef-handshake-origin"]},
    {"title": "Side Effects", "query": "Side Effects 2013", "genres": ["mystery-whodunit", "mind-bending", "neo-noir"], "tags": ["steven-soderbergh", "rooney-mara-emily-taylor", "jude-law-dr-banks", "ablixa-antidepressant-sleepwalking-murder", "insider-trading-conspiracy"]},

    # --- RICHARD LINKLATER & INDIE MASTERPIECES ---
    {"title": "Dazed and Confused", "query": "Dazed and Confused 1993", "genres": ["satire-dark-comedy", "biopic-epics"], "tags": ["richard-linklater", "matthew-mcconaughey-wooderson", "alright-alright-alright", "1976-austin-last-day-of-school", "moontower-party"]},
    {"title": "Before Sunrise", "query": "Before Sunrise 1995", "genres": ["biopic-epics"], "tags": ["richard-linklater", "ethan-hawke-jesse", "julie-delpy-celine", "vienna-listening-booth-glances", "danube-poet-cow-milk", "philosophical-romance-pinnacle"]},
    {"title": "Before Sunset", "query": "Before Sunset 2004", "genres": ["biopic-epics"], "tags": ["richard-linklater", "ethan-hawke", "julie-delpy", "paris-shakespeare-and-company", "real-time-afternoon-walk", "baby-you-are-gonna-miss-that-plane"]},
    {"title": "Before Midnight", "query": "Before Midnight 2013", "genres": ["biopic-epics"], "tags": ["richard-linklater", "ethan-hawke", "julie-delpy", "greek-peloponnese-sunset", "hotel-room-raw-marital-argument", "time-machine-letter"]},
    {"title": "Boyhood", "query": "Boyhood 2014", "genres": ["biopic-epics"], "tags": ["richard-linklater", "ellar-coltrane-mason", "patricia-arquette", "ethan-hawke", "filmed-over-12-real-years", "the-moment-seizes-us"]},
    {"title": "Hit Man", "query": "Hit Man 2023", "genres": ["neo-noir", "satire-dark-comedy", "mystery-whodunit"], "tags": ["richard-linklater", "glen-powell-gary-johnson", "adria-arjona-madison", "undercover-fake-contract-killer", "notes-app-alibi-performance"]},
    {"title": "Almost Famous", "query": "Almost Famous 2000", "genres": ["biopic-epics", "satire-dark-comedy"], "tags": ["cameron-crowe", "patrick-fugit-william-miller", "kate-hudson-penny-lane", "billy-crudup-russell-hammond", "tiny-toon-bus-elton-john-tiny-dancer", "i-am-a-golden-god"]},

    # --- ACTION-ADVENTURE & TREASURE HUNTS ---
    {"title": "National Treasure", "query": "National Treasure 2004", "genres": ["action-spectacle", "mystery-whodunit"], "tags": ["jon-turteltaub", "nicolas-cage-benjamin-franklin-gates", "i-am-going-to-steal-the-declaration-of-independence", "trinity-church-underground-knights-templar-vault"]},
    {"title": "National Treasure: Book of Secrets", "query": "National Treasure: Book of Secrets 2007", "genres": ["action-spectacle", "mystery-whodunit"], "tags": ["jon-turteltaub", "nicolas-cage", "ed-harris-mitch-wilkinson", "president-secret-book", "mount-rushmore-cibola-golden-city", "balancing-rock-slab-puzzle"]}
]

for c in BATCH_5:
    slug = slugify(c["title"])
    if slug not in existing_slugs:
        existing_slugs.add(slug)
        current_pool.append(c)

print(f"Total existing in data.js: {len(existing_titles)}")
print(f"Total compiled candidates in master pool: {len(current_pool)}")
print(f"Grand Total when merged: {len(existing_titles) + len(current_pool)}")

with open('master_expansion_pool.json', 'w', encoding='utf-8') as f:
    json.dump(current_pool, f, indent=2)
