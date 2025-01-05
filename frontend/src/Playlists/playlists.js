import { musics } from "../Music/musics"

const playlistsData = [
    {
        img: Object.values(require("../Assets/Secondary/PlayListBlock/КартинкаПлейлиста.png"))[0],
        name: "Name1",
        about: "About",
        music: [
            musics[0],
            musics[4],
            musics[6],
        ]
    },
    {
        img: Object.values(require("../Assets/Secondary/PlayListBlock/КартинкаПлейлиста.png"))[0],
        name: "Name2",
        about: "About",
        music: [
            musics[0],
            musics[4],
            musics[6],
        ]
    },
    {
        img: Object.values(require("../Assets/Secondary/PlayListBlock/КартинкаПлейлиста.png"))[0],
        name: "Name3",
        about: "About",
        music: [
            musics[0],
            musics[4],
            musics[6],
        ]
    },
    {
        img: Object.values(require("../Assets/Secondary/PlayListBlock/КартинкаПлейлиста.png"))[0],
        name: "Name4",
        about: "About",
        music: [
            musics[0],
            musics[4],
            musics[6],
        ]
    },
    {
        img: Object.values(require("../Assets/Secondary/PlayListBlock/КартинкаПлейлиста.png"))[0],
        name: "Name5",
        about: "About",
        music: [
            musics[0],
            musics[4],
            musics[6],
        ]
    },
    {
        img: Object.values(require("../Assets/Secondary/PlayListBlock/КартинкаПлейлиста.png"))[0],
        name: "Name6",
        about: "About",
        music: [
            musics[0],
            musics[4],
            musics[6],
        ]
    },
    {
        img: Object.values(require("../Assets/Secondary/PlayListBlock/КартинкаПлейлиста.png"))[0],
        name: "Name7",
        about: "About",
        music: [
            musics[0],
            musics[4],
            musics[6],
        ]
    },
    {
        img: Object.values(require("../Assets/Secondary/PlayListBlock/КартинкаПлейлиста.png"))[0],
        name: "Name8",
        about: "About",
        music: [
            musics[0],
            musics[4],
            musics[6],
        ]
    },
    {
        img: Object.values(require("../Assets/Secondary/PlayListBlock/КартинкаПлейлиста.png"))[0],
        name: "Name9",
        about: "About",
        music: [
            musics[0],
            musics[4],
            musics[6],
        ]
    },
    {
        img: Object.values(require("../Assets/Secondary/PlayListBlock/КартинкаПлейлиста.png"))[0],
        name: "Name10",
        about: "About",
        music: [
            musics[0],
            musics[4],
            musics[6],
        ]
    },
    {
        img: Object.values(require("../Assets/Secondary/PlayListBlock/КартинкаПлейлиста.png"))[0],
        name: "Name11",
        about: "About",
        music: [
            musics[0],
            musics[4],
            musics[6],
        ]
    },
    {
        img: Object.values(require("../Assets/Secondary/PlayListBlock/КартинкаПлейлиста.png"))[0],
        name: "Name12",
        about: "About",
        music: [
            musics[0],
            musics[4],
            musics[6],
        ]
    },
    {
        img: Object.values(require("../Assets/Secondary/PlayListBlock/КартинкаПлейлиста.png"))[0],
        name: "very very very very very very large",
        about: "About",
        music: [
            musics[0],
            musics[4],
            musics[6],
        ]
    },
];

export const playlists = playlistsData.map((music, index) => ({
    id: index,
    ...music,
}));
