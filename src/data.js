import {v4 as uuidv4} from 'uuid'

function chillHop(){
  return [
    {
      name: 'Chasing',
      cover: 'https://avatars.yandex.net/get-music-content/2810397/a3b499d1.a.12396694-1/200x200',
      artist: 'NF',
      audio: 'https://muzzzz.com/uploads/files/2020-10/1602855722955_1602855722.mp3',
      color: ['#97908A', '#010101'],
      id: uuidv4(),
      active: true
    },
    {
      name: 'anything can happen',
      cover: 'https://avatars.yandex.net/get-music-content/2357076/5c74e22b.a.11623669-1/200x200',
      artist: 'SAINt JHN',
      audio: 'https://topmusic.uz/get/single-19533.mp3',
      color: ['#D48FA7', '#1A2225'],
      id: uuidv4(),
      active: false
    },
    {
      name: 'Tic Tac',
      cover: 'https://avatars.yandex.net/get-music-content/4399644/3d854aba.a.13785193-1/m1000x1000',
      artist: 'Smoke Purpp',
      audio: 'https://dl.muzonovs.ru/files/music/2021/02/smokepurpp-tic-tac.mp3',
      color: ['#191919', '#F7F7F7'],
      id: uuidv4(),
      active: false
    },
    {
      name: 'I can show you',
      cover: 'https://avatars.yandex.net/get-music-content/1880735/a593554c.a.10152182-1/m1000x1000',
      artist: 'Lil Uzi Vert',
      audio: 'https://dl.muzonovs.ru/files/music/2020/03/lil-uzi-vert-i-can-show-you.mp3',
      color: ['#E5DC01', '#4D1F06'],
      id: uuidv4(),
      active: false
    },
    {
      name: 'Monika Lewinsky',
      cover: 'https://avatars.yandex.net/get-music-content/2357076/5c74e22b.a.11623669-1/m1000x1000',
      artist: 'SAINt JHN',
      audio: 'https://muzoff.net/uploads/files/2019-12/1575383274_saint-jhn-feat_-a-boogie-wit-da-hoodie-monica-lewinsky-muzoff_net.mp3',
      color: ['#D48FA7', '#1A2225'],
      id: uuidv4(),
      active: false
    },
  ]
}

export default chillHop