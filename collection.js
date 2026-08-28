const SERIES_LABELS = {
  animal: 'どうぶつ',
  dinosaur: 'きょうりゅう',
  fantasy: 'ファンタジー',
  flower: 'はな',
  fruit: 'くだもの',
  gem: 'ほうせき',
  insect: 'むし',
  music: 'おんがく',
  'sea-animal': 'うみのいきもの',
  treasure: 'たからもの'
};

const RARITY_LABELS = {
  common: 'COMMON',
  rare: 'RARE',
  'super-rare': 'SUPER RARE',
  secret: 'SECRET'
};

export const collectionCatalog = [
  {
    "id": "animal-common-bear",
    "series": "animal",
    "rarity": "common",
    "item": "bear",
    "path": "assets/collections/animal/common/bear/badge.png"
  },
  {
    "id": "animal-common-cat",
    "series": "animal",
    "rarity": "common",
    "item": "cat",
    "path": "assets/collections/animal/common/cat/badge.png"
  },
  {
    "id": "animal-common-fox",
    "series": "animal",
    "rarity": "common",
    "item": "fox",
    "path": "assets/collections/animal/common/fox/badge.png"
  },
  {
    "id": "animal-common-hamster",
    "series": "animal",
    "rarity": "common",
    "item": "hamster",
    "path": "assets/collections/animal/common/hamster/badge.png"
  },
  {
    "id": "animal-common-panda",
    "series": "animal",
    "rarity": "common",
    "item": "panda",
    "path": "assets/collections/animal/common/panda/badge.png"
  },
  {
    "id": "animal-common-penguin",
    "series": "animal",
    "rarity": "common",
    "item": "penguin",
    "path": "assets/collections/animal/common/penguin/badge.png"
  },
  {
    "id": "animal-common-rabbit",
    "series": "animal",
    "rarity": "common",
    "item": "rabbit",
    "path": "assets/collections/animal/common/rabbit/badge.png"
  },
  {
    "id": "animal-common-shiba",
    "series": "animal",
    "rarity": "common",
    "item": "shiba",
    "path": "assets/collections/animal/common/shiba/badge.png"
  },
  {
    "id": "animal-rare-hedgehog",
    "series": "animal",
    "rarity": "rare",
    "item": "hedgehog",
    "path": "assets/collections/animal/rare/hedgehog/badge.png"
  },
  {
    "id": "animal-rare-koala",
    "series": "animal",
    "rarity": "rare",
    "item": "koala",
    "path": "assets/collections/animal/rare/koala/badge.png"
  },
  {
    "id": "animal-rare-otter",
    "series": "animal",
    "rarity": "rare",
    "item": "otter",
    "path": "assets/collections/animal/rare/otter/badge.png"
  },
  {
    "id": "animal-rare-squirrel",
    "series": "animal",
    "rarity": "rare",
    "item": "squirrel",
    "path": "assets/collections/animal/rare/squirrel/badge.png"
  },
  {
    "id": "animal-secret-unicorn-puppy",
    "series": "animal",
    "rarity": "secret",
    "item": "unicorn-puppy",
    "path": "assets/collections/animal/secret/unicorn-puppy/badge.png"
  },
  {
    "id": "animal-super-rare-lion",
    "series": "animal",
    "rarity": "super-rare",
    "item": "lion",
    "path": "assets/collections/animal/super-rare/lion/badge.png"
  },
  {
    "id": "animal-super-rare-white-tiger",
    "series": "animal",
    "rarity": "super-rare",
    "item": "white-tiger",
    "path": "assets/collections/animal/super-rare/white-tiger/badge.png"
  },
  {
    "id": "dinosaur-common-ankylosaurus",
    "series": "dinosaur",
    "rarity": "common",
    "item": "ankylosaurus",
    "path": "assets/collections/dinosaur/common/ankylosaurus/badge.png"
  },
  {
    "id": "dinosaur-common-brachiosaurus",
    "series": "dinosaur",
    "rarity": "common",
    "item": "brachiosaurus",
    "path": "assets/collections/dinosaur/common/brachiosaurus/badge.png"
  },
  {
    "id": "dinosaur-common-parasaurolophus",
    "series": "dinosaur",
    "rarity": "common",
    "item": "parasaurolophus",
    "path": "assets/collections/dinosaur/common/parasaurolophus/badge.png"
  },
  {
    "id": "dinosaur-common-pteranodon",
    "series": "dinosaur",
    "rarity": "common",
    "item": "pteranodon",
    "path": "assets/collections/dinosaur/common/pteranodon/badge.png"
  },
  {
    "id": "dinosaur-common-spinosaurus",
    "series": "dinosaur",
    "rarity": "common",
    "item": "spinosaurus",
    "path": "assets/collections/dinosaur/common/spinosaurus/badge.png"
  },
  {
    "id": "dinosaur-common-stegosaurus",
    "series": "dinosaur",
    "rarity": "common",
    "item": "stegosaurus",
    "path": "assets/collections/dinosaur/common/stegosaurus/badge.png"
  },
  {
    "id": "dinosaur-common-triceratops",
    "series": "dinosaur",
    "rarity": "common",
    "item": "triceratops",
    "path": "assets/collections/dinosaur/common/triceratops/badge.png"
  },
  {
    "id": "dinosaur-common-tyrannosaurus",
    "series": "dinosaur",
    "rarity": "common",
    "item": "tyrannosaurus",
    "path": "assets/collections/dinosaur/common/tyrannosaurus/badge.png"
  },
  {
    "id": "dinosaur-rare-dimetrodon",
    "series": "dinosaur",
    "rarity": "rare",
    "item": "dimetrodon",
    "path": "assets/collections/dinosaur/rare/dimetrodon/badge.png"
  },
  {
    "id": "dinosaur-rare-elasmosaurus",
    "series": "dinosaur",
    "rarity": "rare",
    "item": "elasmosaurus",
    "path": "assets/collections/dinosaur/rare/elasmosaurus/badge.png"
  },
  {
    "id": "dinosaur-rare-pachycephalosaurus",
    "series": "dinosaur",
    "rarity": "rare",
    "item": "pachycephalosaurus",
    "path": "assets/collections/dinosaur/rare/pachycephalosaurus/badge.png"
  },
  {
    "id": "dinosaur-rare-velociraptor",
    "series": "dinosaur",
    "rarity": "rare",
    "item": "velociraptor",
    "path": "assets/collections/dinosaur/rare/velociraptor/badge.png"
  },
  {
    "id": "dinosaur-secret-cosmic-dino",
    "series": "dinosaur",
    "rarity": "secret",
    "item": "cosmic-dino",
    "path": "assets/collections/dinosaur/secret/cosmic-dino/badge.png"
  },
  {
    "id": "dinosaur-super-rare-king-t-rex",
    "series": "dinosaur",
    "rarity": "super-rare",
    "item": "king-t-rex",
    "path": "assets/collections/dinosaur/super-rare/king-t-rex/badge.png"
  },
  {
    "id": "dinosaur-super-rare-mosasaurus",
    "series": "dinosaur",
    "rarity": "super-rare",
    "item": "mosasaurus",
    "path": "assets/collections/dinosaur/super-rare/mosasaurus/badge.png"
  },
  {
    "id": "fantasy-common-dragon",
    "series": "fantasy",
    "rarity": "common",
    "item": "dragon",
    "path": "assets/collections/fantasy/common/dragon/badge.png"
  },
  {
    "id": "fantasy-common-fairy",
    "series": "fantasy",
    "rarity": "common",
    "item": "fairy",
    "path": "assets/collections/fantasy/common/fairy/badge.png"
  },
  {
    "id": "fantasy-common-golem",
    "series": "fantasy",
    "rarity": "common",
    "item": "golem",
    "path": "assets/collections/fantasy/common/golem/badge.png"
  },
  {
    "id": "fantasy-common-griffin",
    "series": "fantasy",
    "rarity": "common",
    "item": "griffin",
    "path": "assets/collections/fantasy/common/griffin/badge.png"
  },
  {
    "id": "fantasy-common-phoenix",
    "series": "fantasy",
    "rarity": "common",
    "item": "phoenix",
    "path": "assets/collections/fantasy/common/phoenix/badge.png"
  },
  {
    "id": "fantasy-common-slime",
    "series": "fantasy",
    "rarity": "common",
    "item": "slime",
    "path": "assets/collections/fantasy/common/slime/badge.png"
  },
  {
    "id": "fantasy-common-unicorn",
    "series": "fantasy",
    "rarity": "common",
    "item": "unicorn",
    "path": "assets/collections/fantasy/common/unicorn/badge.png"
  },
  {
    "id": "fantasy-common-wizard-cat",
    "series": "fantasy",
    "rarity": "common",
    "item": "wizard-cat",
    "path": "assets/collections/fantasy/common/wizard-cat/badge.png"
  },
  {
    "id": "fantasy-rare-kitsune-spirit",
    "series": "fantasy",
    "rarity": "rare",
    "item": "kitsune-spirit",
    "path": "assets/collections/fantasy/rare/kitsune-spirit/badge.png"
  },
  {
    "id": "fantasy-rare-mermaid",
    "series": "fantasy",
    "rarity": "rare",
    "item": "mermaid",
    "path": "assets/collections/fantasy/rare/mermaid/badge.png"
  },
  {
    "id": "fantasy-rare-pegasus",
    "series": "fantasy",
    "rarity": "rare",
    "item": "pegasus",
    "path": "assets/collections/fantasy/rare/pegasus/badge.png"
  },
  {
    "id": "fantasy-rare-treasure-mimic",
    "series": "fantasy",
    "rarity": "rare",
    "item": "treasure-mimic",
    "path": "assets/collections/fantasy/rare/treasure-mimic/badge.png"
  },
  {
    "id": "fantasy-secret-ancient-guardian",
    "series": "fantasy",
    "rarity": "secret",
    "item": "ancient-guardian",
    "path": "assets/collections/fantasy/secret/ancient-guardian/badge.png"
  },
  {
    "id": "fantasy-super-rare-celestial-dragon",
    "series": "fantasy",
    "rarity": "super-rare",
    "item": "celestial-dragon",
    "path": "assets/collections/fantasy/super-rare/celestial-dragon/badge.png"
  },
  {
    "id": "fantasy-super-rare-moon-unicorn",
    "series": "fantasy",
    "rarity": "super-rare",
    "item": "moon-unicorn",
    "path": "assets/collections/fantasy/super-rare/moon-unicorn/badge.png"
  },
  {
    "id": "flower-common-cherry-blossom",
    "series": "flower",
    "rarity": "common",
    "item": "cherry-blossom",
    "path": "assets/collections/flower/common/cherry-blossom/badge.png"
  },
  {
    "id": "flower-common-clover-flower",
    "series": "flower",
    "rarity": "common",
    "item": "clover-flower",
    "path": "assets/collections/flower/common/clover-flower/badge.png"
  },
  {
    "id": "flower-common-daisy",
    "series": "flower",
    "rarity": "common",
    "item": "daisy",
    "path": "assets/collections/flower/common/daisy/badge.png"
  },
  {
    "id": "flower-common-dandelion",
    "series": "flower",
    "rarity": "common",
    "item": "dandelion",
    "path": "assets/collections/flower/common/dandelion/badge.png"
  },
  {
    "id": "flower-common-hydrangea",
    "series": "flower",
    "rarity": "common",
    "item": "hydrangea",
    "path": "assets/collections/flower/common/hydrangea/badge.png"
  },
  {
    "id": "flower-common-morning-glory",
    "series": "flower",
    "rarity": "common",
    "item": "morning-glory",
    "path": "assets/collections/flower/common/morning-glory/badge.png"
  },
  {
    "id": "flower-common-sunflower",
    "series": "flower",
    "rarity": "common",
    "item": "sunflower",
    "path": "assets/collections/flower/common/sunflower/badge.png"
  },
  {
    "id": "flower-common-tulip",
    "series": "flower",
    "rarity": "common",
    "item": "tulip",
    "path": "assets/collections/flower/common/tulip/badge.png"
  },
  {
    "id": "flower-rare-camellia",
    "series": "flower",
    "rarity": "rare",
    "item": "camellia",
    "path": "assets/collections/flower/rare/camellia/badge.png"
  },
  {
    "id": "flower-rare-lavender",
    "series": "flower",
    "rarity": "rare",
    "item": "lavender",
    "path": "assets/collections/flower/rare/lavender/badge.png"
  },
  {
    "id": "flower-rare-lily",
    "series": "flower",
    "rarity": "rare",
    "item": "lily",
    "path": "assets/collections/flower/rare/lily/badge.png"
  },
  {
    "id": "flower-rare-rose",
    "series": "flower",
    "rarity": "rare",
    "item": "rose",
    "path": "assets/collections/flower/rare/rose/badge.png"
  },
  {
    "id": "flower-secret-rainbow-flower",
    "series": "flower",
    "rarity": "secret",
    "item": "rainbow-flower",
    "path": "assets/collections/flower/secret/rainbow-flower/badge.png"
  },
  {
    "id": "flower-super-rare-blue-rose",
    "series": "flower",
    "rarity": "super-rare",
    "item": "blue-rose",
    "path": "assets/collections/flower/super-rare/blue-rose/badge.png"
  },
  {
    "id": "flower-super-rare-lotus",
    "series": "flower",
    "rarity": "super-rare",
    "item": "lotus",
    "path": "assets/collections/flower/super-rare/lotus/badge.png"
  },
  {
    "id": "fruit-common-apple",
    "series": "fruit",
    "rarity": "common",
    "item": "apple",
    "path": "assets/collections/fruit/common/apple/badge.png"
  },
  {
    "id": "fruit-common-banana",
    "series": "fruit",
    "rarity": "common",
    "item": "banana",
    "path": "assets/collections/fruit/common/banana/badge.png"
  },
  {
    "id": "fruit-common-grape",
    "series": "fruit",
    "rarity": "common",
    "item": "grape",
    "path": "assets/collections/fruit/common/grape/badge.png"
  },
  {
    "id": "fruit-common-orange",
    "series": "fruit",
    "rarity": "common",
    "item": "orange",
    "path": "assets/collections/fruit/common/orange/badge.png"
  },
  {
    "id": "fruit-common-peach",
    "series": "fruit",
    "rarity": "common",
    "item": "peach",
    "path": "assets/collections/fruit/common/peach/badge.png"
  },
  {
    "id": "fruit-common-pineapple",
    "series": "fruit",
    "rarity": "common",
    "item": "pineapple",
    "path": "assets/collections/fruit/common/pineapple/badge.png"
  },
  {
    "id": "fruit-common-strawberry",
    "series": "fruit",
    "rarity": "common",
    "item": "strawberry",
    "path": "assets/collections/fruit/common/strawberry/badge.png"
  },
  {
    "id": "fruit-common-watermelon",
    "series": "fruit",
    "rarity": "common",
    "item": "watermelon",
    "path": "assets/collections/fruit/common/watermelon/badge.png"
  },
  {
    "id": "fruit-rare-blueberry",
    "series": "fruit",
    "rarity": "rare",
    "item": "blueberry",
    "path": "assets/collections/fruit/rare/blueberry/badge.png"
  },
  {
    "id": "fruit-rare-cherry",
    "series": "fruit",
    "rarity": "rare",
    "item": "cherry",
    "path": "assets/collections/fruit/rare/cherry/badge.png"
  },
  {
    "id": "fruit-rare-mango",
    "series": "fruit",
    "rarity": "rare",
    "item": "mango",
    "path": "assets/collections/fruit/rare/mango/badge.png"
  },
  {
    "id": "fruit-rare-melon",
    "series": "fruit",
    "rarity": "rare",
    "item": "melon",
    "path": "assets/collections/fruit/rare/melon/badge.png"
  },
  {
    "id": "fruit-secret-rainbow-fruit",
    "series": "fruit",
    "rarity": "secret",
    "item": "rainbow-fruit",
    "path": "assets/collections/fruit/secret/rainbow-fruit/badge.png"
  },
  {
    "id": "fruit-super-rare-dragon-fruit",
    "series": "fruit",
    "rarity": "super-rare",
    "item": "dragon-fruit",
    "path": "assets/collections/fruit/super-rare/dragon-fruit/badge.png"
  },
  {
    "id": "fruit-super-rare-star-fruit",
    "series": "fruit",
    "rarity": "super-rare",
    "item": "star-fruit",
    "path": "assets/collections/fruit/super-rare/star-fruit/badge.png"
  },
  {
    "id": "gem-common-amethyst",
    "series": "gem",
    "rarity": "common",
    "item": "amethyst",
    "path": "assets/collections/gem/common/amethyst/badge.png"
  },
  {
    "id": "gem-common-aquamarine",
    "series": "gem",
    "rarity": "common",
    "item": "aquamarine",
    "path": "assets/collections/gem/common/aquamarine/badge.png"
  },
  {
    "id": "gem-common-citrine",
    "series": "gem",
    "rarity": "common",
    "item": "citrine",
    "path": "assets/collections/gem/common/citrine/badge.png"
  },
  {
    "id": "gem-common-emerald",
    "series": "gem",
    "rarity": "common",
    "item": "emerald",
    "path": "assets/collections/gem/common/emerald/badge.png"
  },
  {
    "id": "gem-common-garnet",
    "series": "gem",
    "rarity": "common",
    "item": "garnet",
    "path": "assets/collections/gem/common/garnet/badge.png"
  },
  {
    "id": "gem-common-ruby",
    "series": "gem",
    "rarity": "common",
    "item": "ruby",
    "path": "assets/collections/gem/common/ruby/badge.png"
  },
  {
    "id": "gem-common-sapphire",
    "series": "gem",
    "rarity": "common",
    "item": "sapphire",
    "path": "assets/collections/gem/common/sapphire/badge.png"
  },
  {
    "id": "gem-common-topaz",
    "series": "gem",
    "rarity": "common",
    "item": "topaz",
    "path": "assets/collections/gem/common/topaz/badge.png"
  },
  {
    "id": "gem-rare-moonstone",
    "series": "gem",
    "rarity": "rare",
    "item": "moonstone",
    "path": "assets/collections/gem/rare/moonstone/badge.png"
  },
  {
    "id": "gem-rare-opal",
    "series": "gem",
    "rarity": "rare",
    "item": "opal",
    "path": "assets/collections/gem/rare/opal/badge.png"
  },
  {
    "id": "gem-rare-peridot",
    "series": "gem",
    "rarity": "rare",
    "item": "peridot",
    "path": "assets/collections/gem/rare/peridot/badge.png"
  },
  {
    "id": "gem-rare-tourmaline",
    "series": "gem",
    "rarity": "rare",
    "item": "tourmaline",
    "path": "assets/collections/gem/rare/tourmaline/badge.png"
  },
  {
    "id": "gem-secret-prism-crystal",
    "series": "gem",
    "rarity": "secret",
    "item": "prism-crystal",
    "path": "assets/collections/gem/secret/prism-crystal/badge.png"
  },
  {
    "id": "gem-super-rare-black-opal",
    "series": "gem",
    "rarity": "super-rare",
    "item": "black-opal",
    "path": "assets/collections/gem/super-rare/black-opal/badge.png"
  },
  {
    "id": "gem-super-rare-diamond",
    "series": "gem",
    "rarity": "super-rare",
    "item": "diamond",
    "path": "assets/collections/gem/super-rare/diamond/badge.png"
  },
  {
    "id": "insect-common-ant",
    "series": "insect",
    "rarity": "common",
    "item": "ant",
    "path": "assets/collections/insect/common/ant/badge.png"
  },
  {
    "id": "insect-common-bee",
    "series": "insect",
    "rarity": "common",
    "item": "bee",
    "path": "assets/collections/insect/common/bee/badge.png"
  },
  {
    "id": "insect-common-beetle",
    "series": "insect",
    "rarity": "common",
    "item": "beetle",
    "path": "assets/collections/insect/common/beetle/badge.png"
  },
  {
    "id": "insect-common-butterfly",
    "series": "insect",
    "rarity": "common",
    "item": "butterfly",
    "path": "assets/collections/insect/common/butterfly/badge.png"
  },
  {
    "id": "insect-common-dragonfly",
    "series": "insect",
    "rarity": "common",
    "item": "dragonfly",
    "path": "assets/collections/insect/common/dragonfly/badge.png"
  },
  {
    "id": "insect-common-grasshopper",
    "series": "insect",
    "rarity": "common",
    "item": "grasshopper",
    "path": "assets/collections/insect/common/grasshopper/badge.png"
  },
  {
    "id": "insect-common-ladybug",
    "series": "insect",
    "rarity": "common",
    "item": "ladybug",
    "path": "assets/collections/insect/common/ladybug/badge.png"
  },
  {
    "id": "insect-common-stag-beetle",
    "series": "insect",
    "rarity": "common",
    "item": "stag-beetle",
    "path": "assets/collections/insect/common/stag-beetle/badge.png"
  },
  {
    "id": "insect-rare-caterpillar",
    "series": "insect",
    "rarity": "rare",
    "item": "caterpillar",
    "path": "assets/collections/insect/rare/caterpillar/badge.png"
  },
  {
    "id": "insect-rare-cicada",
    "series": "insect",
    "rarity": "rare",
    "item": "cicada",
    "path": "assets/collections/insect/rare/cicada/badge.png"
  },
  {
    "id": "insect-rare-firefly",
    "series": "insect",
    "rarity": "rare",
    "item": "firefly",
    "path": "assets/collections/insect/rare/firefly/badge.png"
  },
  {
    "id": "insect-rare-praying-mantis",
    "series": "insect",
    "rarity": "rare",
    "item": "praying-mantis",
    "path": "assets/collections/insect/rare/praying-mantis/badge.png"
  },
  {
    "id": "insect-secret-rainbow-butterfly",
    "series": "insect",
    "rarity": "secret",
    "item": "rainbow-butterfly",
    "path": "assets/collections/insect/secret/rainbow-butterfly/badge.png"
  },
  {
    "id": "insect-super-rare-atlas-beetle",
    "series": "insect",
    "rarity": "super-rare",
    "item": "atlas-beetle",
    "path": "assets/collections/insect/super-rare/atlas-beetle/badge.png"
  },
  {
    "id": "insect-super-rare-jewel-beetle",
    "series": "insect",
    "rarity": "super-rare",
    "item": "jewel-beetle",
    "path": "assets/collections/insect/super-rare/jewel-beetle/badge.png"
  },
  {
    "id": "music-common-drum",
    "series": "music",
    "rarity": "common",
    "item": "drum",
    "path": "assets/collections/music/common/drum/badge.png"
  },
  {
    "id": "music-common-guitar-pick",
    "series": "music",
    "rarity": "common",
    "item": "guitar-pick",
    "path": "assets/collections/music/common/guitar-pick/badge.png"
  },
  {
    "id": "music-common-maracas",
    "series": "music",
    "rarity": "common",
    "item": "maracas",
    "path": "assets/collections/music/common/maracas/badge.png"
  },
  {
    "id": "music-common-microphone",
    "series": "music",
    "rarity": "common",
    "item": "microphone",
    "path": "assets/collections/music/common/microphone/badge.png"
  },
  {
    "id": "music-common-music-note",
    "series": "music",
    "rarity": "common",
    "item": "music-note",
    "path": "assets/collections/music/common/music-note/badge.png"
  },
  {
    "id": "music-common-piano-keys",
    "series": "music",
    "rarity": "common",
    "item": "piano-keys",
    "path": "assets/collections/music/common/piano-keys/badge.png"
  },
  {
    "id": "music-common-trumpet",
    "series": "music",
    "rarity": "common",
    "item": "trumpet",
    "path": "assets/collections/music/common/trumpet/badge.png"
  },
  {
    "id": "music-common-vinyl-record",
    "series": "music",
    "rarity": "common",
    "item": "vinyl-record",
    "path": "assets/collections/music/common/vinyl-record/badge.png"
  },
  {
    "id": "music-rare-dj-turntable",
    "series": "music",
    "rarity": "rare",
    "item": "dj-turntable",
    "path": "assets/collections/music/rare/dj-turntable/badge.png"
  },
  {
    "id": "music-rare-electric-guitar",
    "series": "music",
    "rarity": "rare",
    "item": "electric-guitar",
    "path": "assets/collections/music/rare/electric-guitar/badge.png"
  },
  {
    "id": "music-rare-saxophone",
    "series": "music",
    "rarity": "rare",
    "item": "saxophone",
    "path": "assets/collections/music/rare/saxophone/badge.png"
  },
  {
    "id": "music-rare-taiko-drum",
    "series": "music",
    "rarity": "rare",
    "item": "taiko-drum",
    "path": "assets/collections/music/rare/taiko-drum/badge.png"
  },
  {
    "id": "music-secret-cosmic-symphony",
    "series": "music",
    "rarity": "secret",
    "item": "cosmic-symphony",
    "path": "assets/collections/music/secret/cosmic-symphony/badge.png"
  },
  {
    "id": "music-super-rare-grand-piano",
    "series": "music",
    "rarity": "super-rare",
    "item": "grand-piano",
    "path": "assets/collections/music/super-rare/grand-piano/badge.png"
  },
  {
    "id": "music-super-rare-rhythm-core",
    "series": "music",
    "rarity": "super-rare",
    "item": "rhythm-core",
    "path": "assets/collections/music/super-rare/rhythm-core/badge.png"
  },
  {
    "id": "sea-animal-common-clownfish",
    "series": "sea-animal",
    "rarity": "common",
    "item": "clownfish",
    "path": "assets/collections/sea-animal/common/clownfish/badge.png"
  },
  {
    "id": "sea-animal-common-crab",
    "series": "sea-animal",
    "rarity": "common",
    "item": "crab",
    "path": "assets/collections/sea-animal/common/crab/badge.png"
  },
  {
    "id": "sea-animal-common-dolphin",
    "series": "sea-animal",
    "rarity": "common",
    "item": "dolphin",
    "path": "assets/collections/sea-animal/common/dolphin/badge.png"
  },
  {
    "id": "sea-animal-common-jellyfish",
    "series": "sea-animal",
    "rarity": "common",
    "item": "jellyfish",
    "path": "assets/collections/sea-animal/common/jellyfish/badge.png"
  },
  {
    "id": "sea-animal-common-octopus",
    "series": "sea-animal",
    "rarity": "common",
    "item": "octopus",
    "path": "assets/collections/sea-animal/common/octopus/badge.png"
  },
  {
    "id": "sea-animal-common-sea-turtle",
    "series": "sea-animal",
    "rarity": "common",
    "item": "sea-turtle",
    "path": "assets/collections/sea-animal/common/sea-turtle/badge.png"
  },
  {
    "id": "sea-animal-common-shark",
    "series": "sea-animal",
    "rarity": "common",
    "item": "shark",
    "path": "assets/collections/sea-animal/common/shark/badge.png"
  },
  {
    "id": "sea-animal-common-whale",
    "series": "sea-animal",
    "rarity": "common",
    "item": "whale",
    "path": "assets/collections/sea-animal/common/whale/badge.png"
  },
  {
    "id": "sea-animal-rare-manta-ray",
    "series": "sea-animal",
    "rarity": "rare",
    "item": "manta-ray",
    "path": "assets/collections/sea-animal/rare/manta-ray/badge.png"
  },
  {
    "id": "sea-animal-rare-penguin-diver",
    "series": "sea-animal",
    "rarity": "rare",
    "item": "penguin-diver",
    "path": "assets/collections/sea-animal/rare/penguin-diver/badge.png"
  },
  {
    "id": "sea-animal-rare-pufferfish",
    "series": "sea-animal",
    "rarity": "rare",
    "item": "pufferfish",
    "path": "assets/collections/sea-animal/rare/pufferfish/badge.png"
  },
  {
    "id": "sea-animal-rare-seahorse",
    "series": "sea-animal",
    "rarity": "rare",
    "item": "seahorse",
    "path": "assets/collections/sea-animal/rare/seahorse/badge.png"
  },
  {
    "id": "sea-animal-secret-deep-sea-glow-whale",
    "series": "sea-animal",
    "rarity": "secret",
    "item": "deep-sea-glow-whale",
    "path": "assets/collections/sea-animal/secret/deep-sea-glow-whale/badge.png"
  },
  {
    "id": "sea-animal-super-rare-giant-squid",
    "series": "sea-animal",
    "rarity": "super-rare",
    "item": "giant-squid",
    "path": "assets/collections/sea-animal/super-rare/giant-squid/badge.png"
  },
  {
    "id": "sea-animal-super-rare-narwhal",
    "series": "sea-animal",
    "rarity": "super-rare",
    "item": "narwhal",
    "path": "assets/collections/sea-animal/super-rare/narwhal/badge.png"
  },
  {
    "id": "treasure-common-coin-pouch",
    "series": "treasure",
    "rarity": "common",
    "item": "coin-pouch",
    "path": "assets/collections/treasure/common/coin-pouch/badge.png"
  },
  {
    "id": "treasure-common-compass",
    "series": "treasure",
    "rarity": "common",
    "item": "compass",
    "path": "assets/collections/treasure/common/compass/badge.png"
  },
  {
    "id": "treasure-common-gem-shard",
    "series": "treasure",
    "rarity": "common",
    "item": "gem-shard",
    "path": "assets/collections/treasure/common/gem-shard/badge.png"
  },
  {
    "id": "treasure-common-gold-coin",
    "series": "treasure",
    "rarity": "common",
    "item": "gold-coin",
    "path": "assets/collections/treasure/common/gold-coin/badge.png"
  },
  {
    "id": "treasure-common-golden-lock",
    "series": "treasure",
    "rarity": "common",
    "item": "golden-lock",
    "path": "assets/collections/treasure/common/golden-lock/badge.png"
  },
  {
    "id": "treasure-common-royal-goblet",
    "series": "treasure",
    "rarity": "common",
    "item": "royal-goblet",
    "path": "assets/collections/treasure/common/royal-goblet/badge.png"
  },
  {
    "id": "treasure-common-silver-key",
    "series": "treasure",
    "rarity": "common",
    "item": "silver-key",
    "path": "assets/collections/treasure/common/silver-key/badge.png"
  },
  {
    "id": "treasure-common-treasure-ring",
    "series": "treasure",
    "rarity": "common",
    "item": "treasure-ring",
    "path": "assets/collections/treasure/common/treasure-ring/badge.png"
  },
  {
    "id": "treasure-rare-ancient-relic",
    "series": "treasure",
    "rarity": "rare",
    "item": "ancient-relic",
    "path": "assets/collections/treasure/rare/ancient-relic/badge.png"
  },
  {
    "id": "treasure-rare-jeweled-dagger",
    "series": "treasure",
    "rarity": "rare",
    "item": "jeweled-dagger",
    "path": "assets/collections/treasure/rare/jeweled-dagger/badge.png"
  },
  {
    "id": "treasure-rare-royal-crown",
    "series": "treasure",
    "rarity": "rare",
    "item": "royal-crown",
    "path": "assets/collections/treasure/rare/royal-crown/badge.png"
  },
  {
    "id": "treasure-rare-treasure-chest",
    "series": "treasure",
    "rarity": "rare",
    "item": "treasure-chest",
    "path": "assets/collections/treasure/rare/treasure-chest/badge.png"
  },
  {
    "id": "treasure-secret-celestial-treasure-core",
    "series": "treasure",
    "rarity": "secret",
    "item": "celestial-treasure-core",
    "path": "assets/collections/treasure/secret/celestial-treasure-core/badge.png"
  },
  {
    "id": "treasure-super-rare-crystal-crown",
    "series": "treasure",
    "rarity": "super-rare",
    "item": "crystal-crown",
    "path": "assets/collections/treasure/super-rare/crystal-crown/badge.png"
  },
  {
    "id": "treasure-super-rare-golden-idol",
    "series": "treasure",
    "rarity": "super-rare",
    "item": "golden-idol",
    "path": "assets/collections/treasure/super-rare/golden-idol/badge.png"
  }
];

export const COLLECTION_COUNT = collectionCatalog.length;
export const COLLECTION_BASE_URL = 'https://tt-sensei.github.io/edu-assets/';

export function collectionImageUrl(badge) {
  return COLLECTION_BASE_URL + badge.path;
}

export function collectionLabel(badge) {
  return SERIES_LABELS[badge.series] + '・' + RARITY_LABELS[badge.rarity] + '・' + badge.item;
}

export function collectionSeriesLabel(series) {
  return SERIES_LABELS[series] || series;
}

export function collectionRarityLabel(rarity) {
  return RARITY_LABELS[rarity] || rarity;
}

