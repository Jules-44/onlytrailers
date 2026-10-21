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

BATCH_8 = [
    # --- EUROPEAN CINEMA TITANS & HERZOG ODYSSEYS ---
    {"title": "Aguirre, the Wrath of God", "query": "Aguirre, the Wrath of God 1972", "genres": ["biopic-epics", "action-spectacle", "mind-bending"], "tags": ["werner-herzog", "klaus-kinski-don-lope-de-aguirre", "amazon-river-raft-madness", "el-dorado-fever-dream", "popol-vuh-synth-score", "squirrel-monkeys-swarming-raft"]},
    {"title": "Fitzcarraldo", "query": "Fitzcarraldo 1982", "genres": ["biopic-epics", "satire-dark-comedy", "action-spectacle"], "tags": ["werner-herzog", "klaus-kinski-brian-sweeney-fitzgerald", "320-ton-steamship-hauled-over-mountain", "enrico-caruso-gramophone-in-jungle"]},
    {"title": "Grizzly Man", "query": "Grizzly Man 2005", "genres": ["biopic-epics", "modern-horror"], "tags": ["werner-herzog", "timothy-treadwell-katmai-bears", "herzog-dont-listen-to-the-tape", "richard-thompson-score"]},
    {"title": "Bad Lieutenant: Port of Call New Orleans", "query": "Bad Lieutenant: Port of Call New Orleans 2009", "genres": ["neo-noir", "satire-dark-comedy", "mind-bending"], "tags": ["werner-herzog", "nicolas-cage-terrence-mcdonagh", "hallucinatory-breakdancing-iguanas", "post-katrina-corrupt-detective", "lucky-crack-pipe"]},
    {"title": "Wings of Desire", "query": "Wings of Desire 1987", "genres": ["fantasy-epics", "mind-bending"], "tags": ["wim-wenders", "bruno-ganz-angel-damiel", "solveig-dommartin-trapeze-artist", "peter-falk-playing-himself", "divided-berlin-wall-thoughts", "nick-cave-and-the-bad-seeds-concert"]},
    {"title": "Paris, Texas", "query": "Paris, Texas 1984", "genres": ["biopic-epics", "mystery-whodunit"], "tags": ["wim-wenders", "harry-dean-stanton-travis-henderson", "nastassja-kinski-jane", "ry-cooder-slide-guitar-score", "peep-show-booth-monologue", "palme-dor-winner"]},
    {"title": "Perfect Days", "query": "Perfect Days 2023", "genres": ["biopic-epics"], "tags": ["wim-wenders", "koji-yakusho-hirayama", "cannes-best-actor", "tokyo-public-toilets-cleaner", "cassette-tapes-lou-reed-patti-smith", "komorebi-sunlight-through-leaves"]},
    {"title": "Midnight Run", "query": "Midnight Run 1988", "genres": ["action-spectacle", "satire-dark-comedy", "neo-noir"], "tags": ["martin-brest", "robert-de-niro-jack-walsh", "charles-grodin-jonathan-the-duke-mardukas", "see-you-in-the-next-life-jack", "litmus-configuration-fbi-badge"]},
    {"title": "The Battle of Algiers", "query": "The Battle of Algiers 1966", "genres": ["biopic-epics", "action-spectacle"], "tags": ["gillo-pontecorvo", "ennio-morricone-score", "algerian-war-of-independence", "casbah-guerrilla-bombings", "colonel-mathieu-anti-insurgency", "cinema-verite-masterpiece"]},
    {"title": "Playtime", "query": "Playtime 1967", "genres": ["satire-dark-comedy", "sci-fi"], "tags": ["jacques-tati-monsieur-hulot", "70mm-tativille-giant-glass-skyscraper-set", "royal-garden-restaurant-collapse-into-party", "traffic-circle-carousel-ballet"]},
    {"title": "Mon Oncle", "query": "Mon Oncle 1958", "genres": ["satire-dark-comedy"], "tags": ["jacques-tati-monsieur-hulot", "ultra-modern-villa-arpel", "fish-fountain-turned-on-for-guests", "oscar-best-foreign-language-film"]},
    {"title": "The Rules of the Game", "query": "The Rules of the Game 1939", "genres": ["satire-dark-comedy", "mystery-whodunit"], "tags": ["jean-renoir", "chateau-hunting-party", "danse-macabre-rabbit-hunt", "deep-focus-farce-before-war", "all-time-sight-and-sound-masterpiece"]},
    {"title": "Grand Illusion", "query": "Grand Illusion 1937", "genres": ["biopic-epics"], "tags": ["jean-renoir", "jean-gabin-marechal", "erich-von-stroheim-captain-von-rauffenstein", "wwi-german-castle-pow-camp", "aristocratic-chivalry-illusion"]},
    {"title": "The Leopard", "query": "The Leopard 1963", "genres": ["biopic-epics"], "tags": ["luchino-visconti", "burt-lancaster-prince-don-fabrizio", "alain-delon-tancredi", "claudia-cardinale", "palme-dor", "forty-five-minute-grand-ballroom-waltz-climax"]},
    {"title": "Rocco and His Brothers", "query": "Rocco and His Brothers 1960", "genres": ["neo-noir", "biopic-epics", "martial-arts"], "tags": ["luchino-visconti", "alain-delon-rocco", "renato-salvatori-simone", "annie-girardot-nadia", "milan-boxing-ring-fratricide"]},
    {"title": "Children of Paradise", "query": "Children of Paradise 1945", "genres": ["biopic-epics", "fantasy-epics"], "tags": ["marcel-carne", "jean-louis-barrault-baptiste-mime", "arletty-garance", "boulevard-du-crime-paris", "carnival-crowd-heartbreaking-parting"]}
]

for c in BATCH_8:
    slug = slugify(c["title"])
    if slug not in existing_slugs:
        existing_slugs.add(slug)
        current_pool.append(c)

print(f"Total existing in data.js: {len(existing_titles)}")
print(f"Total compiled candidates in master pool: {len(current_pool)}")
print(f"Grand Total when merged: {len(existing_titles) + len(current_pool)}")

with open('master_expansion_pool.json', 'w', encoding='utf-8') as f:
    json.dump(current_pool, f, indent=2)
