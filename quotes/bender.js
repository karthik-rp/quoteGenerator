var bender = function() {};

var quotes = [
    "Have you ever thought about turning off th TV, sitting down with your children, and hitting them?",
    "This is the worst kind of discrimination there is: the kind against me!",
    "I guess if you want children beaten, you have to do it yourself.",
    "Hahahahaha. Oh wait you're serious. Let me laugh even harder.",
    "I’ll build by own theme park. With black jack, and hookers. In fact, forget the park!",
    "The game's over. I have all the money. Compare your lives to mine and then kill yourselves!",
    "That's closest thing to 'Bender is great' that anyone other me has ever said.",
    "I'm Bender, baby! Oh god, please insert liquor!",
    "Hey baby, wanna kill all humans?",
    "You know what cheers me up? Other people's misfortune.",
    "Anything less than immortality is a complete waste of time.",
    "Blackmail is such an ugly word. I prefer extortion. The 'x' makes it sound cool.",
    "You're a pimple on society's ass and you'll never amount to anything!",
    "Shut up baby, I know it!",
    "I'm so embarrassed. I wish everyone else was dead!",
    "I got ants my butt, and I needs to strut!",
    "Afterlife? If I thought I had to live another life, I'd kill myself right now!",
    "Morgan made me walk the Professor. There we were in the park when suddenly some old lady says I stole her purse. I chucked the Professor at her, but she kept coming. So I had to hit her with this purse I found.",
    "I keep running people over. I'm not famous enough to get away with it.",
    "Oh... Your... God...",
    "I'm back baby",
    "yo, captain cataract!",
	"let's go alredaaaayyy!",
	"Byte my 8-bit metal ass. That's byte with a y. hehehe.",
	"I'm sorry you struck out sausage link, but if it's any consolation, my life is great!",
	"Some day we'll be able to look back on this whole thing and laugh...AH HA HA HA!!!!",
	"Don't make me go upside your head!",
	"Get lost! I'd tell you 'don't quit your day job,' but you're awful at that too!!",
	"My life, and by extension everyone else's is meaningless.",
	"Everybody's a jerk. You, me, this jerk.",
	"I hate the people that love me and they hate me.",
	"Let's face it, comedy's a dead art form. Tragedy, now that's funny.",
	"Great is OK, but amazing would be GREAT.",
	"What kind of party is this? There's no booze and only one hooker.",
	"I was thinking Benderbrau if it's an ale, Botweiser if it's a lager."
];

bender.prototype.get = function(){
    return quotes[Math.floor(Math.random() * quotes.length)];
};

module.exports = new bender();