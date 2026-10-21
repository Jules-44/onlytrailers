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

BATCH_7 = [
    # --- NEW HOLLYWOOD & AUTEUR MASTERPIECES ---
    {"title": "Sorcerer", "query": "Sorcerer 1977", "genres": ["action-spectacle", "neo-noir"], "tags": ["william-friedkin", "roy-scheider-jackie-scanlon", "tangerine-dream-electronic-score", "rotting-rope-suspension-bridge-truck-crossing", "unstable-dynamite-sweat"]},
    {"title": "To Live and Die in L.A.", "query": "To Live and Die in L.A. 1985", "genres": ["neo-noir", "action-spectacle"], "tags": ["william-friedkin", "william-petersen-richard-chance", "willem-dafoe-eric-masters", "wang-chung-synthwave-score", "la-river-wrong-way-freeway-chase", "counterfeiting-printing-press"]},
    {"title": "The Taking of Pelham One Two Three", "query": "The Taking of Pelham One Two Three 1974", "genres": ["neo-noir", "mystery-whodunit", "satire-dark-comedy"], "tags": ["joseph-sargent", "walter-matthau-lt-garber", "robert-shaw-mr-blue", "color-coded-hijackers", "david-shire-jazz-funk-score", "sneezing-subway-motorman-climax"]},
    {"title": "Papillon", "query": "Papillon 1973", "genres": ["biopic-epics", "action-spectacle"], "tags": ["franklin-j-schaffner", "steve-mcqueen-henri-charriere", "dustin-hoffman-louis-dega", "devils-island-french-guiana-prison", "coconut-raft-seventh-wave-jump", "hey-you-bastards-im-still-here"]},
    {"title": "Patton", "query": "Patton 1970", "genres": ["biopic-epics", "action-spectacle"], "tags": ["franklin-j-schaffner", "george-c-scott-general-patton", "giant-american-flag-speech", "third-army-ardennes-relief", "jerry-goldsmith-echoplex-trumpet-theme"]},
    {"title": "Deliverance", "query": "Deliverance 1972", "genres": ["modern-horror", "action-spectacle", "neo-noir"], "tags": ["john-boorman", "burt-reynolds-lewis-medlock", "jon-voight-ed-gentry", "dueling-banjos-porch", "cahulawassee-river-rapids", "cliff-bow-and-arrow-ambush"]},
    {"title": "Point Blank", "query": "Point Blank 1967", "genres": ["neo-noir", "mind-bending", "action-spectacle"], "tags": ["john-boorman", "lee-marvin-walker", "alcatraz-echoing-footsteps", "color-coded-la-interiors", "mysterious-organization-the-syndicate"]},
    {"title": "Midnight Express", "query": "Midnight Express 1978", "genres": ["biopic-epics"], "tags": ["alan-parker", "oliver-stone-oscar-screenplay", "brad-davis-billy-hayes", "giorgio-moroder-chase-synth-score", "turkish-prison-hashish-smuggling", "revolving-wheel-catatonia"]},
    {"title": "Mississippi Burning", "query": "Mississippi Burning 1988", "genres": ["mystery-whodunit", "biopic-epics", "neo-noir"], "tags": ["alan-parker", "gene-hackman-rupert-anderson", "willem-dafoe-alan-ward", "fbi-civil-rights-investigation", "ku-klux-klan-climax", "barbershop-razor-confrontation"]},
    {"title": "Pink Floyd - The Wall", "query": "Pink Floyd: The Wall 1982", "genres": ["mind-bending", "anime-masterpieces", "satire-dark-comedy"], "tags": ["alan-parker", "roger-waters", "bob-geldof-pink", "gerald-scarfe-grotesque-marching-hammers-animation", "comfortably-numb", "school-children-meat-grinder"]},
    {"title": "Badlands", "query": "Badlands 1973", "genres": ["neo-noir", "biopic-epics"], "tags": ["terrence-malick", "martin-sheen-kit-carruthers", "sissy-spacek-holly-sargis", "james-dean-slouch", "dakota-plains-crime-spree", "carl-orff-gassenhauer-marimba"]},
    {"title": "Days of Heaven", "query": "Days of Heaven 1978", "genres": ["biopic-epics"], "tags": ["terrence-malick", "richard-gere-bill", "brooke-adams-abby", "nestor-almendros-magic-hour-cinematography", "texas-panhandle-wheat-fields", "locust-swarm-firestorm"]},
    {"title": "The Tree of Life", "query": "The Tree of Life 2011", "genres": ["mind-bending", "biopic-epics", "space-exploration"], "tags": ["terrence-malick", "brad-pitt-mr-o-brien", "jessica-chastain", "palme-dor-winner", "cosmic-birth-of-universe-sequence", "douglas-trumbull-vfx"]},
    {"title": "Paper Moon", "query": "Paper Moon 1973", "genres": ["satire-dark-comedy", "biopic-epics"], "tags": ["peter-bogdanovich", "ryan-o-neal-moses-pray", "tatum-o-neal-addie-loggins", "youngest-oscar-winner", "great-depression-bible-con-artists", "black-and-white-kansas-dust"]},
    {"title": "What's Up, Doc?", "query": "What's Up, Doc? 1972", "genres": ["satire-dark-comedy", "action-spectacle"], "tags": ["peter-bogdanovich", "barbra-streisand-judy-maxwell", "ryan-o-neal-dr-howard-bannister", "four-identical-plaid-overnight-bags", "san-francisco-runaway-delivery-cart-chase"]},
    {"title": "The Ladykillers", "query": "The Ladykillers 1955", "genres": ["satire-dark-comedy", "mystery-whodunit"], "tags": ["alexander-mackendrick", "alec-guinness-professor-marcus", "peter-sellers", "ealing-comedy-classic", "string-quintet-cover-gang", "railway-coal-hopper-drops"]},
    {"title": "Kind Hearts and Coronets", "query": "Kind Hearts and Coronets 1949", "genres": ["satire-dark-comedy", "neo-noir"], "tags": ["robert-hamer", "dennis-price-louis-mazzini", "alec-guinness-playing-eight-different-d-ascoyne-relatives", "poisoned-port-hot-air-balloon-sniper", "memoirs-in-the-cell"]},
    {"title": "Arsenic and Old Lace", "query": "Arsenic and Old Lace 1944", "genres": ["satire-dark-comedy", "mystery-whodunit"], "tags": ["frank-capra", "cary-grant-mortimer-brewster", "elderly-aunts-elderberry-wine-arsenic", "teddy-roosevelt-panama-canal-cellar", "raymond-massey-boris-karloff-lookalike"]},
    {"title": "The Man Who Knew Too Much", "query": "The Man Who Knew Too Much 1956", "genres": ["mystery-whodunit", "action-spectacle"], "tags": ["alfred-hitchcock", "james-stewart-dr-ben-mckenna", "doris-day-que-sera-sera", "royal-albert-hall-cantata-cymbal-crash", "marrakech-market-stabbing"]},
    {"title": "Frenzy", "query": "Frenzy 1972", "genres": ["mystery-whodunit", "modern-horror", "neo-noir"], "tags": ["alfred-hitchcock", "necktie-murderer-bob-rusk", "covent-garden-potato-sack-truck-escape", "macabre-gourmet-cooking-comic-relief"]},
    {"title": "Planet of the Apes", "query": "Planet of the Apes 1968", "genres": ["sci-fi", "post-apocalyptic", "time-travel"], "tags": ["franklin-j-schaffner", "charlton-heston-taylor", "get-your-stinking-paws-off-me-you-damn-dirty-ape", "dr-zaius", "statue-of-liberty-surf-twist"]},
    {"title": "Invasion of Astro-Monster", "query": "Invasion of Astro-Monster 1965", "genres": ["sci-fi", "space-exploration", "action-spectacle"], "tags": ["ishiro-honda", "planet-x-alien-controllers", "godzilla-and-rodan-vs-king-ghidorah", "godzilla-victory-dance-shie"]},
    {"title": "Destroy All Monsters", "query": "Destroy All Monsters 1968", "genres": ["sci-fi", "space-exploration", "action-spectacle"], "tags": ["ishiro-honda", "eleven-kaiju-all-out-brawl", "kilaak-alien-mind-control", "mount-fuji-king-ghidorah-stomping", "moonlight-sy-3-rocket"]},
    {"title": "Gamera: Guardian of the Universe", "query": "Gamera: Guardian of the Universe 1995", "genres": ["sci-fi", "action-spectacle", "fantasy-epics"], "tags": ["shusuke-kaneko", "gyaos-laser-birds", "giant-turtle-plasma-fireball", "tokyo-tower-nest"]},
    {"title": "Gamera 2: Attack of Legion", "query": "Gamera 2: Attack of Legion 1996", "genres": ["sci-fi", "action-spectacle", "modern-horror"], "tags": ["shusuke-kaneko", "silicon-based-extraterrestrial-swarm", "sapporo-subway-infestation", "ultimate-mana-chest-cannon"]}
]

for c in BATCH_7:
    slug = slugify(c["title"])
    if slug not in existing_slugs:
        existing_slugs.add(slug)
        current_pool.append(c)

print(f"Total existing in data.js: {len(existing_titles)}")
print(f"Total compiled candidates in master pool: {len(current_pool)}")
print(f"Grand Total when merged: {len(existing_titles) + len(current_pool)}")

with open('master_expansion_pool.json', 'w', encoding='utf-8') as f:
    json.dump(current_pool, f, indent=2)
