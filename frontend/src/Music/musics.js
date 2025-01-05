const musicData = [
    {
        name: "Opening Titles",
        author: "Hans Zimmer",
        music: Object.values(require("./music/Hans Zimmer-Opening Titles.mp3"))[0],
    },
    {
        name: "Iabloki-na-snegu",
        author: "Chernikovskaia-khata",
        music: Object.values(require("./music/russian-doomer-chernikovskaia-khata-iabloki-na-snegu.mp3"))[0],
    },
    {
        name: "Signal",
        author: "TK from 凛として時雨",
        music: Object.values(require("./music/tk from signal.mp3"))[0],
    },
    {
        name: "Film A Moment",
        author: "TK from 凛として時雨",
        music: Object.values(require("./music/tk-from-film-a-moment.mp3"))[0],
    },
    {
        name: "Fuyu no hanashi",
        author: "Given",
        music: Object.values(require("./music/Fuyu_no_Hanashi.mp3"))[0],
    },
    {
        name: "Unravel",
        author: "TK from 凛として時雨",
        music: Object.values(require("./music/TK from Ling tosite sigure-Unravel.mp3"))[0],
    },
    {
        name: "Antigravity",
        author: "Starset",
        music: Object.values(require("./music/Starset-Antigravity.mp3"))[0],
    },
    {
        name: "Radio ga ga",
        author: "Queen",
        music: Object.values(require("./music/queen-radio-ga-ga.mp3"))[0],
    },
    {
        name: "Mephisto",
        author: "Quen bee",
        music: Object.values(require("./music/Queen Bee-Mephisto.mp3"))[0],
    },
    {
        name: "Empowering Yourself",
        author: "Olivier Deriviere",
        music: Object.values(require("./music/Olivier_Deriviere_Empowering_Yourself.mp3"))[0],
    },
    {
        name: "Feed A God Eater OP",
        author: "OLDCODEX",
        music: Object.values(require("./music/OLDCODEX-Feed A God Eater OP.mp3"))[0],
    },
];

export const musics = musicData.map((music, index) => ({
    id: index,
    ...music,
}));