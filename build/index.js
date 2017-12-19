"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var titleToId = function titleToId(title) {
  return title.toLowerCase().split(" ").join("-");
};

var PiecesApp = function PiecesApp(_ref) {
  var _ref$children = _ref.children,
      children = _ref$children === undefined ? [] : _ref$children;
  return _react2.default.createElement(
    "div",
    { id: "app" },
    _react2.default.createElement(Header, { pieces: children }),
    children
  );
};

var Header = function Header(_ref2) {
  var pieces = _ref2.pieces;
  return _react2.default.createElement(
    "div",
    { className: "header page-container" },
    _react2.default.createElement(
      "a",
      { className: "homepage", href: "/" },
      "chris bolin"
    ),
    _react2.default.createElement(
      "div",
      { className: "page" },
      _react2.default.createElement(
        "div",
        { className: "title" },
        _react2.default.createElement(
          "h1",
          null,
          "Writing"
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "links" },
        pieces.map(function (piece, i) {
          return _react2.default.createElement(PieceLink, { piece: piece, key: i });
        })
      )
    )
  );
};

var PieceLink = function PieceLink(_ref3) {
  var piece = _ref3.piece;
  return _react2.default.createElement(
    "div",
    { className: "link", key: piece.props.title },
    _react2.default.createElement(
      "a",
      { href: "#" + titleToId(piece.props.title) },
      piece.props.title
    )
  );
};

var Piece = function Piece(_ref4) {
  var title = _ref4.title,
      year = _ref4.year,
      children = _ref4.children,
      _ref4$theme = _ref4.theme,
      theme = _ref4$theme === undefined ? "prose" : _ref4$theme;
  return _react2.default.createElement(
    "div",
    { id: titleToId(title), className: "piece page-container" },
    _react2.default.createElement(
      "div",
      { className: "page " + theme },
      _react2.default.createElement(
        "h1",
        null,
        _react2.default.createElement(
          "a",
          { href: "#" + titleToId(title) },
          title
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "year" },
        year
      ),
      _react2.default.createElement(
        "div",
        { className: "body" },
        children
      ),
      _react2.default.createElement(
        "a",
        { href: "#", className: "toc-link" },
        "\uA71B"
      )
    )
  );
};

var App = exports.App = function App() {
  return _react2.default.createElement(
    PiecesApp,
    null,
    _react2.default.createElement(
      Piece,
      { title: "The Lobby Christmas Tree", year: "2017", theme: "poem prose" },
      _react2.default.createElement(
        "p",
        null,
        "Eight years old, running across the lobby to the evergreen, elated:",
        _react2.default.createElement("br", null),
        "\"Is it real?\""
      ),
      _react2.default.createElement(
        "p",
        null,
        "Father busy at the counter, ignoring, now her hands and knees on the linoleum floor, inspecting the tree's trunk\u2014sap and bark:",
        _react2.default.createElement("br", null),
        "\"It's real!\""
      ),
      _react2.default.createElement(
        "p",
        null,
        "Tree's trunk, sap and bark, in a small bucket of water, needles more yellow-green than green-green:",
        _react2.default.createElement("br", null),
        "\"Is it dying?\""
      ),
      _react2.default.createElement(
        "p",
        null,
        "Hands over needles and branches, fingers in the bucket's cold water:",
        _react2.default.createElement("br", null),
        "\"Is it supposed to die?\""
      ),
      _react2.default.createElement(
        "p",
        null,
        "Hands again over needles and branches, slowly, considering, pausing, suddenly knowing:",
        _react2.default.createElement("br", null),
        "\"It's supposed to die!\""
      )
    ),
    _react2.default.createElement(
      Piece,
      { title: "Houseboat", year: "2017" },
      _react2.default.createElement(
        "p",
        null,
        "The river is wide and slow here. Music reaches the houseboat from two rivaling temples on opposing banks jostling for listenership. It is joyful music. Morning music. Birds large and small cross the water. A deep rumble comes from upriver and a horn blast announces the unseen train, long and loud, passenger or cargo, leaving Kollam, nine kilometers south."
      ),
      _react2.default.createElement(
        "p",
        null,
        "The houseboat's engine starts, raw and rambling, a mess of metal and tiny explosions before it is submerged into the water, subdued. Another train passes while the crew of two unties us from our night's resting place. We float slowly for a few long moments before the engine is engaged. The early morning air is almost chilly, still untouched by the sun."
      ),
      _react2.default.createElement(
        "p",
        null,
        "I sit on the hard roof of the boat, which appears to be brown fiberglass. Another roof covers me, its thatched patterns heavily assisted by a cheaper, more expedient blue plastic tarp. The vessel as a whole follows in suit, a compromise between nostalgia and pragmatism (ties are ceded to the latter). With the engaged propeller we travel downstream, approaching one of the temples. Its morning song\u2014clicking, strumming, immediate\u2014drowns out the other\u2019s. Abruptly, the song is aborted and replaced by the loud hum of an amplifier before that, too, is quelled. Silence visits the river."
      ),
      _react2.default.createElement(
        "p",
        null,
        "The sun has still not reached either bank, but behind me it is exploding golden orange through morning haze and coconut trees. I raise a camera to it, embracing its clich\xE9 and my tourist role. I am painfully aware of my light skin."
      ),
      _react2.default.createElement(
        "p",
        null,
        "A voice booms over the temple's unseen loudspeaker. \"Hello?\" The timid English question spoils the profundity of giant disembodied speech. But the voice waits, then returns with authority and cadence in another tongue: a scripture reading. (The syllables appear more angular than the Malayalam I've heard. I guess privately\u2014and steeped in ignorance\u2014that it is Sanskrit or Hindi.)"
      ),
      _react2.default.createElement(
        "p",
        null,
        "We are parked again, less than a kilometer from our night's post. Perhaps we've moved to distance ourselves from the stench of our own gasoline and refuse. A flock of birds passes over in an imperfect V. Goats and crows vie to be heard over the temple's next song (again clicking, strumming, immediate)."
      ),
      _react2.default.createElement(
        "p",
        null,
        "A woman stands just onshore. She watches, waits, never moving. She holds a white shawl over her mouth. All this I gather from my periphery, scared to meet her gaze. When I finally do it is only for a moment; her eyes are wide, piercing, and directed at me, through me. I look away. I do not know her role; I do not know mine."
      ),
      _react2.default.createElement(
        "p",
        null,
        "A mosquito lands on my neck. I go down to the bedroom briefly for equipment against the morning: mosquito repellent and a long-sleeved shirt. The sun's rays finally touch the boat, igniting surfaces, pulling texture from chipped paint, giving warm shape to turned wooden columns."
      ),
      _react2.default.createElement(
        "p",
        null,
        "I return to my seat. She is still standing onshore, searching, waiting. Her severe eyes are an uncomfortable relief, acknowledging my profound privilege starkly, without deference or kindness. Finally she turns and walks briskly away as the cook calls to me from the deck below: \"Sir, breakfast is ready.\""
      )
    ),
    _react2.default.createElement(
      Piece,
      { title: "Again", year: "2016" },
      _react2.default.createElement(
        "p",
        null,
        "From the dirt path she could just make out the distant highway. It filled the forest with a muffled amorphous roar, an organic buzz. But its sound did not match its sight. No, the small cars sped alone\u2014red, silver, black, blue\u2014each a discrete mass, and only together did their tiny voices melt into the deep, even chorus."
      ),
      _react2.default.createElement(
        "p",
        null,
        "She clutched the small stick in her hand, feeling its rough bark and smooth core before throwing it again down the path. The dog left her side and sprinted after it, his four paws a staccato cadence, fading. Soon he would return and drop the twig at her feet, wagging his tail with Sisyphean joy: again, again, again."
      )
    ),
    _react2.default.createElement(
      Piece,
      { title: "Winter Tomorrow", year: "2016", theme: "poem" },
      _react2.default.createElement(
        "p",
        null,
        "Melted snow on glistening streets under the bright yellow sun."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Tomorrow it may be winter again,"
      ),
      _react2.default.createElement(
        "p",
        null,
        "But today it is Spring."
      )
    ),
    _react2.default.createElement(
      Piece,
      { title: "How to Prepare Oatmeal", year: "2016" },
      _react2.default.createElement(
        "p",
        null,
        "The kitchen sink is an emotional and domestic bellwether: has yesterday been resolved? Can today begin unburdened? Or are there outstanding debts, pans caked with bits of a meal already forgotten?"
      ),
      _react2.default.createElement(
        "p",
        null,
        "This morning is unencumbered: the right basin (the shallower of the two) is empty; the left basin is filled with clean, orderly, dry dishes. (Our small apartment does not have a dishwasher.)"
      ),
      _react2.default.createElement(
        "p",
        null,
        "I remove a canister of oatmeal from the cupboard. Because it is cheap, convenient, and healthy, it is my de facto breakfast. The mediocre taste and texture quietly honor asceticism, a virtue from my childhood's Protestantism."
      ),
      _react2.default.createElement(
        "p",
        null,
        "There are two general techniques to prepare oatmeal that I know of:"
      ),
      _react2.default.createElement(
        "p",
        null,
        _react2.default.createElement(
          "b",
          null,
          "A. Pre-heated water:"
        ),
        " Heat approximately 1 cup of water to boiling, then combine gradually with a serving of oatmeal, using only as much water as is necessary to achieve the desired consistency."
      ),
      _react2.default.createElement(
        "p",
        null,
        "or"
      ),
      _react2.default.createElement(
        "p",
        null,
        _react2.default.createElement(
          "b",
          null,
          "B. Tap water:"
        ),
        " Combine approximately 1 cup of tap water with a serving of oatmeal, using only as much water as is necessary to achieve the desired consistency (importantly accounting for any water lost to subsequent heating), then heat the mixture."
      ),
      _react2.default.createElement(
        "p",
        null,
        "I firmly support A, as I cannot fathom why anyone would take B\u2019s risk of incorrectly estimating the oatmeal-water ratio before heating, leading to either an inedible dry brick or hot oat soup. My wife subscribes to B and we do not discuss the topic often."
      ),
      _react2.default.createElement(
        "p",
        null,
        "I place the water into the microwave, an appliance that has been omnipresent in my lifetime, rising to prominence in the United States just before I was born. It is a strange device, bombarding water with radiation, literally spinning the tiny molecules to a boil."
      ),
      _react2.default.createElement(
        "p",
        null,
        "To pass the time I move some of the dry, clean dishes from the sink to the shelves above. Both the sink and the small gas stove next to it are bone white and older than my parents. Along with the creaking wooden floors and cast iron radiators they transform the apartment into a makeshift live-in time capsule: this is World War II New England."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Despite its dated fixtures (also there are no three-prong electrical outlets [Fun fact: grounded three-prong outlets were required in the 1971 National Electrical Code, effective January 1, 1974 - forty-two years ago tomorrow.]) and small size, this apartment is the most expensive I've rented. My rent has risen monotonically over my adulthood, sometimes in small inflationary steps, sometimes in large migratory leaps. If I now reversed those migrations, left the East Coast and returned to the Great Plains, my current rent check would surely secure a small mansion, full of shiny Frigidaire doors, silent floors, and approved electrical wiring."
      ),
      _react2.default.createElement(
        "p",
        null,
        "After my breakfast is prepared, I walk down the short hallway (creak, creak) to the living room. On the coffee table, next to a bold red skein of yarn and a bold red crocheted scarf, is my wife\u2019s wedding ring. I quickly note the simple connection - the ring must have been an impediment to her crocheting last night and had to be removed - but not before experiencing the preamble to panic, seeing this symbolic object in such a symbolically threatening pose. I briefly but vividly imagine a bitter fight and a discarded ring before I fade back to reality."
      ),
      _react2.default.createElement(
        "p",
        null,
        "I pick up the ring and inspect it. The small center diamond is flanked by two even smaller diamonds; all three are set in 14-karat white gold. I bought it when I was twenty-three years old, four months after graduating from college. Over the intervening years I have been both embarrassed of the diamonds\u2019 small size (Cambridge, Massachusetts: my best friend introduces us to his Harvard Business School classmates) and embarrassed they were diamonds at all (Austin, Texas: we watch Leonardo DiCaprio in ",
        _react2.default.createElement(
          "i",
          null,
          "Blood Diamond"
        ),
        " on DVD). Now I see that this tiny ring is a snapshot of another time: that moment we were na\xEFve and poor and got married too young by any reasonable measure. So often happiness is not reasonable."
      )
    ),
    _react2.default.createElement(
      Piece,
      { title: "Small Accomplishments", year: "2015" },
      _react2.default.createElement(
        "p",
        null,
        "It is the first frigid morning in many months and I\u2019m prepared for my bicycle ride: I have gloves inside of my mittens, long underwear (my family always called them \"long johns\"), and second-hand ski goggles. I'm self-conscious about the ski goggles, but they do prevent my eyes from watering in the cold, harsh wind. They also give a golden tint to the world that is subtle at first, its full effect not realized until I finish my journey and take off the goggles and everything loses that ephemeral warm glow."
      ),
      _react2.default.createElement(
        "p",
        null,
        "On my ride I pass a block with small signs stuck into the grass next to the street. Each sign has three lines of text, simple black glyphs against a yellow background:"
      ),
      _react2.default.createElement(
        "p",
        null,
        "Please",
        _react2.default.createElement("br", null),
        "No Parking",
        _react2.default.createElement("br", null),
        "Funeral"
      ),
      _react2.default.createElement(
        "p",
        null,
        "Maybe today is a better day for a funeral than tomorrow: New Year's Day."
      ),
      _react2.default.createElement(
        "p",
        null,
        "In the waiting room of my doctor's office (my first chore for the day) there are two water fountains, one slightly higher than the other. As with most water fountain pairs, only one is able to produce sufficient water pressure. A nurse calls me from the other end of the room. She is wearing what appear to be her pajamas (the sweatpants kind) and takes me to a small exam room. After wrapping my arm in a blood pressure cuff and forcing a thermometer into my ear, she asks my weight. Maybe her scale is broken; maybe she is simply lazy. I lie and tell her I am exactly three pounds heavier than I believe I am. She writes my lie along with the two other measurements on a brown paper towel she pulls from the wall dispenser and leaves the room."
      ),
      _react2.default.createElement(
        "p",
        null,
        "As I wait for my doctor I look into a small mirror mounted on the wall. As a boy my mother would tease me for looking into mirrors too often. She would sing what I assumed was a song from her youth: \"You're So Vain.\" The lyric \"I'll bet you think this song is about you, don't you?\" always bothered me. (Now I see that the line's simple contraction is a direct product of self-reference.)"
      ),
      _react2.default.createElement(
        "p",
        null,
        "In the mirror I try to decide how old my face looks. Assessing your own age is probably as hard as assessing your own beauty; both direct inward those finely tuned and fundamentally outward-looking perceptions. A fool's errand. Even so, I decide that my face looks young but not youthful."
      ),
      _react2.default.createElement(
        "p",
        null,
        "I stare at my temples in the reflection and try to imagine the brain just between them. How profoundly I, like everyone else, am trapped in my own mind: all of these hopes and fears and deliberations exist only between those two temples."
      ),
      _react2.default.createElement(
        "p",
        null,
        "My doctor knocks on the door and enters. She sees my bike helmet (I forgot to lock it to the bicycle) and we discuss the woes of winter cycling for two or three minutes - long enough to be friendly but short enough to attend to the business at hand. She is kind and quirky and more leery of medications than I am."
      ),
      _react2.default.createElement(
        "p",
        null,
        "A few hours later I take a long shower at the gym and mentally write the first draft of this. I begin the process of remembering, which imperceptibly yet fundamentally changes the memories, unwittingly creating fiction from nonfiction: the past is subtly erased and replaced."
      ),
      _react2.default.createElement(
        "p",
        null,
        "In the warm water I reflect on my own good mood and on how much simple joy I derive from tiny tasks finished. I picture a tombstone, its epitaph sardonic, truthful, self-conscious:"
      ),
      _react2.default.createElement(
        "p",
        null,
        "Christopher Eric Bolin",
        _react2.default.createElement("br", null),
        "1984 - TBD",
        _react2.default.createElement("br", null),
        "A Life of Small Accomplishments"
      ),
      _react2.default.createElement(
        "p",
        null,
        "After a long while I leave the shower's comfort and maneuver awkwardly around the other gym-goers to my locker. It is so difficult to remember that insofar as they are in my way I am in theirs. I come up with an idea for a bumper sticker:"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\"We Are Traffic.\""
      ),
      _react2.default.createElement(
        "p",
        null,
        "(This was the third variation: \"You're Traffic, Too\" seemed to lack self-awareness and \"We Are All Traffic\" felt too patriotic.)"
      ),
      _react2.default.createElement(
        "p",
        null,
        "I go to a falafel shop for a late lunch and mentally write the second draft of this, leaving small notes and hummus smudges on my phone. I am alone but successfully enjoying my own company, which seems to me the only secret to happiness; there are many options to distract you from yourself, but they all fade in time."
      ),
      _react2.default.createElement(
        "p",
        null,
        "After lunch I pass a bank and make a whim decision: I will get 20 dollars in quarters, because you can never have too many laundry quarters (another small accomplishment). Almost all of my brief interactions with bank tellers have been pleasant. Perhaps this is because tellers are better paid than most in customer service. Or maybe it's because at a bank everyone seems to be on their best behavior - quiet, dignified, adult. After the teller trades 80 quarters for my bill we exchange festive parting words."
      ),
      _react2.default.createElement(
        "p",
        null,
        "The Bank Teller: \"Happy New Year!\""
      ),
      _react2.default.createElement(
        "p",
        null,
        "Me: \"Happy New Year's!\""
      ),
      _react2.default.createElement(
        "p",
        null,
        "(Is \"Happy New Year's\" excusable - ostensibly as a truncated \"Happy New Year's Day\" - or not?)"
      ),
      _react2.default.createElement(
        "p",
        null,
        "Later, on my trip home, the winter's bite is all but gone and I shed the heavy mittens. Snow melts and flows onto the glistening streets. The cyclist in front of me tries to ride no-handed and I'm inspired: I've learned and forgotten how to ride a bike without hands at least three separate times in my life. Maybe I\u2019ll learn again. His arms are outstretched and carefree. His bike wobbles but stays upright."
      )
    ),
    _react2.default.createElement(
      Piece,
      { title: "Ageless", year: "2015", theme: "poem" },
      _react2.default.createElement(
        "p",
        null,
        "Full of life and lust"
      ),
      _react2.default.createElement(
        "p",
        null,
        "Ancient born again anew"
      ),
      _react2.default.createElement(
        "p",
        null,
        "The ageless Spring sun"
      )
    ),
    _react2.default.createElement(
      Piece,
      { title: "The Winter Is Faltering", year: "2015", theme: "poem" },
      _react2.default.createElement(
        "p",
        null,
        "This cold morning seems somehow more industrial."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Heavy trucks hum and bounce on the beaten streets."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Steam pours from towers on the other side of the river."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Weak morning light makes its way through the crisp winter air."
      ),
      _react2.default.createElement(
        "p",
        null,
        "The winter is faltering now, waning."
      ),
      _react2.default.createElement("br", null),
      _react2.default.createElement(
        "p",
        null,
        "Of course there is the snow."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Of course it covers our little city."
      ),
      _react2.default.createElement(
        "p",
        null,
        "But it, too, is faltering."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Spring rises, however slowly, however subtly."
      ),
      _react2.default.createElement(
        "p",
        null,
        "And I rise, too."
      )
    ),
    _react2.default.createElement(
      Piece,
      { title: "Drive", year: "2014", theme: "poem" },
      _react2.default.createElement(
        "p",
        null,
        "Winter rising, tonight sinking."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Well-groomed childhood, adult melancholy."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Drive."
      ),
      _react2.default.createElement("br", null),
      _react2.default.createElement(
        "p",
        null,
        "Fields rising, moon sinking."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Stern childhood, broken over the earth."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Drive."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Drive."
      ),
      _react2.default.createElement("br", null),
      _react2.default.createElement(
        "p",
        null,
        "A cold song comes,"
      ),
      _react2.default.createElement(
        "p",
        null,
        "Open road in full view."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Drive."
      )
    )
  );
};

if (typeof document !== "undefined") {
  // BROWSER
  _reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById("root"));
}

