import a from '../assets/audio/1_timothy_4_12_bd.m4a';
import b from '../assets/audio/1_john_4_19_od.m4a';
import c from '../assets/audio/hebrews_13_8_od.m4a';
import d from '../assets/audio/joshua_1_9_bd.m4a';
import e from '../assets/audio/2_timothy_1_7_bd.m4a';
import f from '../assets/audio/john_14_6_bd.m4a';
import g from '../assets/audio/psalms_119_105.m4a';
import h from '../assets/audio/mathew_22_37_bd.m4a';
import i from '../assets/audio/psalms_118_24_bd.m4a';
import j from '../assets/audio/colossians_3_12_bd.m4a';

import IMAGE_BLACK from '../assets/images/book-heart_BLACK.png';
import IMAGE_PINK from '../assets/images/book-heart_PINK.png';

export const verses = [
  {
    title: `1 Timothy 4:12`,
    text: `Let no one despise you for your youth, but set the believers an example in speech, in conduct, in love, in faith, in purity.`,
    audio: a,
  },
  {
    title: `1 John 4:19`,
    text: `We love because He first loved us.`,
    audio: b,
  },
  {
    title: `Hebrews 13:8`,
    text: `Jesus Christ is the same yesterday and today and forever.`,
    audio: c,
  },
  {
    title: `Joshua 1:9`,
    text: `Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the LORD your God is with you wherever you go.`,
    audio: d,
  },
  {
    title: `2 Timothy 1:7`,
    text: `For God has not given us a spirit of fear but of power and love and a sound mind.`,
    audio: e,
  },
  {
    title: `John 14:6`,
    text: `Jesus said, 'I am the way, and the truth, and the life. No one comes to the Father except through Me.'`,
    audio: f,
  },
  {
    title: `Psalms 119:105`,
    text: `Your word is a lamp to my feet and a light to my path.`,
    audio: g,
  },
  {
    title: `Matthew 22:37`,
    text: `You shall love the Lord your God with all your heart and with all your soul and with all your mind.`,
    audio: h,
  },
  {
    title: `Psalms 118:24`,
    text: `This is the day that the LORD has made, let us rejoice and be glad in it.`,
    audio: i,
  },
  {
    title: `Colossians 3:12`,
    text: `You are God's chosen people. You are holy and dearly loved. So put on tender mercy and kindness as if they were your clothes. Don't be proud. Be gentle and patient.`,
    audio: j,
  },
];

const LIGHT_PINK = '#FFC0CB';
const DARK = `rgba(0,0,0,0.7)`;
const LIGHT = '#F5F5F5';
const GRAY = `rgb(59,59,59)`;
const LIGHT_GRAY = '#D3D3D3';

export const colorSchemes = [
  {
    pageBG: LIGHT_GRAY,
    appBG: GRAY,
    appText: LIGHT_PINK,
    verseBG: LIGHT_PINK,
    verseText: GRAY,
    image: IMAGE_PINK,
    borderColor: 'transparent',
  },
  {
    pageBG: LIGHT_GRAY,
    appBG: LIGHT_PINK,
    appText: GRAY,
    verseBG: GRAY,
    verseText: LIGHT,
    image: IMAGE_BLACK,
    borderColor: GRAY,
  },
];
