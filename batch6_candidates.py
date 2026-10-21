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

BATCH_6 = [
    # --- MEL BROOKS, ZAZ & SATIRE LEGENDS ---
    {"title": "Blazing Saddles", "query": "Blazing Saddles 1974", "genres": ["satire-dark-comedy", "action-spectacle"], "tags": ["mel-brooks", "cleavon-little-sheriff-bart", "gene-wilder-waco-kid", "campfire-beans-scene", "fourth-wall-warner-bros-lot-brawl"]},
    {"title": "Young Frankenstein", "query": "Young Frankenstein 1974", "genres": ["satire-dark-comedy", "modern-horror"], "tags": ["mel-brooks", "gene-wilder-dr-frankensteen", "marty-feldman-igor-what-hump", "peter-boyle-monster-puttin-on-the-ritz", "terri-garr-roll-in-the-hay"]},
    {"title": "Airplane!", "query": "Airplane! 1980", "genres": ["satire-dark-comedy"], "tags": ["zucker-abrahams-zucker", "leslie-nielsen-surely-you-cant-be-serious", "robert-hays-ted-striker-drinking-problem", "otto-inflatable-autopilot", "dont-call-me-shirley"]},
    {"title": "Top Secret!", "query": "Top Secret! 1984", "genres": ["satire-dark-comedy", "action-spectacle"], "tags": ["zucker-abrahams-zucker", "val-kilmer-nick-rivers", "backwards-library-scene", "underwater-saloon-brawl", "cow-disguise-train-station"]},
    {"title": "The Naked Gun: From the Files of Police Squad!", "query": "The Naked Gun: From the Files of Police Squad! 1988", "genres": ["satire-dark-comedy", "neo-noir"], "tags": ["david-zucker", "leslie-nielsen-frank-drebin", "queen-elizabeth-assassination-attempt", "umpire-strike-dance-montage", "body-condom-suit"]},
    {"title": "This Is Spinal Tap", "query": "This Is Spinal Tap 1984", "genres": ["satire-dark-comedy"], "tags": ["rob-reiner", "christopher-guest-nigel-tufnel", "these-go-to-eleven", "stonehenge-eighteen-inch-monument", "jazz-odyssey-puppetry"]},
    {"title": "Best in Show", "query": "Best in Show 2000", "genres": ["satire-dark-comedy"], "tags": ["christopher-guest", "eugene-levy-two-left-feet", "catherine-ohara", "busy-bee-squeaky-toy-crisis", "mayflower-kennel-club-dog-show"]},
    {"title": "The Blues Brothers", "query": "The Blues Brothers 1980", "genres": ["action-spectacle", "satire-dark-comedy"], "tags": ["john-landis", "john-belushi-jake-blues", "dan-aykroyd-elwood", "we-are-on-a-mission-from-god", "dixie-square-mall-car-demolition", "ray-charles-aretha-franklin"]},
    {"title": "An American Werewolf in London", "query": "An American Werewolf in London 1981", "genres": ["modern-horror", "satire-dark-comedy"], "tags": ["john-landis", "rick-baker-groundbreaking-transformation-fx", "slaughtered-lamb-pub", "beware-the-moon", "bad-moon-rising", "piccadilly-circus-chaos"]},
    {"title": "Trading Places", "query": "Trading Places 1983", "genres": ["satire-dark-comedy"], "tags": ["john-landis", "eddie-murphy-billy-ray-valentine", "dan-aykroyd-louis-winthorpe-iii", "duke-brothers-one-dollar-bet", "frozen-concentrated-orange-juice-short"]},
    {"title": "Coming to America", "query": "Coming to America 1988", "genres": ["satire-dark-comedy"], "tags": ["john-landis", "eddie-murphy-prince-akeem", "arsenio-hall-semmi", "mcdowells-golden-arcs", "sexual-chocolate-band"]},

    # --- WALTER HILL & TOUGH-GUY ACTION / NEO-NOIR ---
    {"title": "The Warriors", "query": "The Warriors 1979", "genres": ["action-spectacle", "neo-noir"], "tags": ["walter-hill", "can-you-dig-it-cyrus", "baseball-furies-face-paint", "warriors-come-out-to-play-bottles", "coney-island-dawn-return"]},
    {"title": "Streets of Fire", "query": "Streets of Fire 1984", "genres": ["action-spectacle", "neo-noir"], "tags": ["walter-hill", "michael-pare-tom-cody", "willem-dafoe-raven-shaddock-leather-overalls", "sledgehammer-duel", "jim-steinman-nowhere-fast"]},
    {"title": "48 Hrs.", "query": "48 Hrs. 1982", "genres": ["action-spectacle", "satire-dark-comedy", "neo-noir"], "tags": ["walter-hill", "eddie-murphy-reggie-hammond", "nick-nolte-jack-cates", "redneck-country-bar-police-badge-shakedown", "roxy-club-shootout"]},
    {"title": "The Driver", "query": "The Driver 1978", "genres": ["neo-noir", "action-spectacle"], "tags": ["walter-hill", "ryan-oneal-the-driver", "bruce-dern-the-detective", "parking-garage-mercedes-destruction-test", "drive-inspiration"]},
    {"title": "Hard Times", "query": "Hard Times 1975", "genres": ["action-spectacle", "biopic-epics"], "tags": ["walter-hill", "charles-bronson-chaney", "james-coburn-speed", "depression-era-bare-knuckle-brawls"]},
    {"title": "Southern Comfort", "query": "Southern Comfort 1981", "genres": ["modern-horror", "action-spectacle"], "tags": ["walter-hill", "louisiana-bayou-swamp-survival", "national-guardsmen-vs-cajun-trappers", "deadfall-traps", "cajun-fiddler-village-dance"]},

    # --- HIGH-OCTANE CHASES & SPY THRILLERS ---
    {"title": "Ronin", "query": "Ronin 1998", "genres": ["action-spectacle", "neo-noir", "mystery-whodunit"], "tags": ["john-frankenheimer", "robert-de-niro-sam", "jean-reno-vincent", "paris-wrong-way-tunnel-car-chase", "audi-s8-bmw-m5", "what-color-is-the-boathouse-at-hereford"]},
    {"title": "The Manchurian Candidate", "query": "The Manchurian Candidate 1962", "genres": ["mystery-whodunit", "mind-bending", "neo-noir"], "tags": ["john-frankenheimer", "frank-sinatra-bennett-marco", "angela-lansbury-mrs-iselin", "queen-of-diamonds-trigger-card", "madison-square-garden-sniper-light-booth"]},
    {"title": "Seconds", "query": "Seconds 1966", "genres": ["sci-fi", "mind-bending", "modern-horror"], "tags": ["john-frankenheimer", "rock-hudson", "james-wong-howe-fisheye-cinematography", "company-rebirth-procedure", "bacchus-grape-stomping-orgy"]},
    {"title": "The Train", "query": "The Train 1964", "genres": ["action-spectacle", "biopic-epics"], "tags": ["john-frankenheimer", "burt-lancaster-labiche", "paul-scofield-von-waldheim", "french-resistance-steam-train-sabotage", "real-train-derailments"]},
    {"title": "Bullitt", "query": "Bullitt 1968", "genres": ["action-spectacle", "neo-noir"], "tags": ["peter-yates", "steve-mcqueen-frank-bullitt", "1968-ford-mustang-gt-fastback", "dodge-charger-san-francisco-hill-chase", "lalo-schifrin-jazz-score"]},
    {"title": "Assault on Precinct 13", "query": "Assault on Precinct 13 1976", "genres": ["action-spectacle", "modern-horror", "neo-noir"], "tags": ["john-carpenter", "street-thunder-gang-blood-oath", "silenced-weapons-siege", "ice-cream-van-tragedy", "flair-gun-oxygen-tank-explosion"]},
    {"title": "Christine", "query": "Christine 1983", "genres": ["modern-horror", "fantasy-epics"], "tags": ["john-carpenter", "stephen-king", "1958-plymouth-fury-possession", "self-repairing-dented-metal-body", "flaming-car-highway-stalking"]},
    {"title": "Starman", "query": "Starman 1984", "genres": ["sci-fi", "fantasy-epics"], "tags": ["john-carpenter", "jeff-bridges-alien", "karen-allen", "glowing-silver-marbles", "meteor-crater-arizona-mothership"]}
]

for c in BATCH_6:
    slug = slugify(c["title"])
    if slug not in existing_slugs:
        existing_slugs.add(slug)
        current_pool.append(c)

print(f"Total existing in data.js: {len(existing_titles)}")
print(f"Total compiled candidates in master pool: {len(current_pool)}")
print(f"Grand Total when merged: {len(existing_titles) + len(current_pool)}")

with open('master_expansion_pool.json', 'w', encoding='utf-8') as f:
    json.dump(current_pool, f, indent=2)
