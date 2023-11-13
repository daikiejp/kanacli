const hiragana = [
  {
    type: "input",
    name: "あ,a",
    message: "What is the romaji of あ?",
  },
  {
    type: "input",
    name: "い,i",
    message: "What is the romaji of い?",
  },
  {
    type: "input",
    name: "う,u",
    message: "What is the romaji of う?",
  },
  {
    type: "input",
    name: "え,e",
    message: "What is the romaji of え?",
  },
  {
    type: "input",
    name: "お,o",
    message: "What is the romaji of お?",
  },
  {
    type: "input",
    name: "か,ka",
    message: "What is the romaji of か?",
  },
  {
    type: "input",
    name: "き,ki",
    message: "What is the romaji of き?",
  },
  {
    type: "input",
    name: "く,ku",
    message: "What is the romaji of く?",
  },
  {
    type: "input",
    name: "け,ke",
    message: "What is the romaji of け?",
  },
  {
    type: "input",
    name: "こ,ko",
    message: "What is the romaji of こ?",
  },
  {
    type: "input",
    name: "さ,sa",
    message: "What is the romaji of さ?",
  },
  {
    type: "input",
    name: "し,si",
    message: "What is the romaji of し?",
  },
  {
    type: "input",
    name: "す,su",
    message: "What is the romaji of す?",
  },
  {
    type: "input",
    name: "せ,se",
    message: "What is the romaji of せ?",
  },
  {
    type: "input",
    name: "そ,so",
    message: "What is the romaji of そ?",
  },
  {
    type: "input",
    name: "た,ta",
    message: "What is the romaji of た?",
  },
  {
    type: "input",
    name: "ち,chi",
    message: "What is the romaji of ち?",
  },
  {
    type: "input",
    name: "つ,tsu",
    message: "What is the romaji of つ?",
  },
  {
    type: "input",
    name: "て,te",
    message: "What is the romaji of て?",
  },
  {
    type: "input",
    name: "と,to",
    message: "What is the romaji of と?",
  },
  {
    type: "input",
    name: "な,na",
    message: "What is the romaji of な?",
  },
  {
    type: "input",
    name: "に,ni",
    message: "What is the romaji of に?",
  },
  {
    type: "input",
    name: "ぬ,nu",
    message: "What is the romaji of ぬ?",
  },
  {
    type: "input",
    name: "ね,ne",
    message: "What is the romaji of ね?",
  },
  {
    type: "input",
    name: "の,no",
    message: "What is the romaji of の?",
  },
  {
    type: "input",
    name: "は,ha",
    message: "What is the romaji of は?",
  },
  {
    type: "input",
    name: "ひ,hi",
    message: "What is the romaji of ひ?",
  },
  {
    type: "input",
    name: "ふ,hu,fu",
    message: "What is the romaji of ふ?",
  },
  {
    type: "input",
    name: "へ,he",
    message: "What is the romaji of へ?",
  },
  {
    type: "input",
    name: "ほ,ho",
    message: "What is the romaji of ほ?",
  },
  {
    type: "input",
    name: "ま,ma",
    message: "What is the romaji of ま?",
  },
  {
    type: "input",
    name: "み,mi",
    message: "What is the romaji of み?",
  },
  {
    type: "input",
    name: "む,mu",
    message: "What is the romaji of む?",
  },
  {
    type: "input",
    name: "め,me",
    message: "What is the romaji of め?",
  },
  {
    type: "input",
    name: "も,mo",
    message: "What is the romaji of も?",
  },
  {
    type: "input",
    name: "や,ya",
    message: "What is the romaji of や?",
  },
  {
    type: "input",
    name: "ゆ,yu",
    message: "What is the romaji of ゆ?",
  },
  {
    type: "input",
    name: "よ,yo",
    message: "What is the romaji of よ?",
  },
  {
    type: "input",
    name: "ら,ra",
    message: "What is the romaji of ら?",
  },
  {
    type: "input",
    name: "り,ri",
    message: "What is the romaji of り?",
  },
  {
    type: "input",
    name: "る,ru",
    message: "What is the romaji of る?",
  },
  {
    type: "input",
    name: "れ,re",
    message: "What is the romaji of れ?",
  },
  {
    type: "input",
    name: "ろ,ro",
    message: "What is the romaji of ろ?",
  },
  {
    type: "input",
    name: "わ,wa",
    message: "What is the romaji of わ?",
  },
  {
    type: "input",
    name: "を,wo",
    message: "What is the romaji of を?",
  },
  {
    type: "input",
    name: "ん,n",
    message: "What is the romaji of ん?",
  },
  {
    type: "input",
    name: "が,ga",
    message: "What is the romaji of が",
  },
  {
    type: "input",
    name: "ぎ,gi",
    message: "What is the romaji of ぎ",
  },
  {
    type: "input",
    name: "ぐ,gu",
    message: "What is the romaji of ぐ",
  },
  {
    type: "input",
    name: "げ,ge",
    message: "What is the romaji of げ",
  },
  {
    type: "input",
    name: "ご,go",
    message: "What is the romaji of ご",
  },
  {
    type: "input",
    name: "ざ,za",
    message: "What is the romaji of ざ",
  },
  {
    type: "input",
    name: "じ,ji",
    message: "What is the romaji of じ",
  },
  {
    type: "input",
    name: "ず,zu",
    message: "What is the romaji of ず",
  },
  {
    type: "input",
    name: "ぜ,ze",
    message: "What is the romaji of ぜ",
  },
  {
    type: "input",
    name: "ぞ,zo",
    message: "What is the romaji of ぞ",
  },
  {
    type: "input",
    name: "だ,da",
    message: "What is the romaji of だ",
  },
  {
    type: "input",
    name: "ぢ,di",
    message: "What is the romaji of ぢ",
  },
  {
    type: "input",
    name: "づ,zu",
    message: "What is the romaji of づ",
  },
  {
    type: "input",
    name: "で,de",
    message: "What is the romaji of で",
  },
  {
    type: "input",
    name: "ど,do",
    message: "What is the romaji of ど",
  },
  {
    type: "input",
    name: "ば,ba",
    message: "What is the romaji of ば",
  },
  {
    type: "input",
    name: "び,bi",
    message: "What is the romaji of び",
  },
  {
    type: "input",
    name: "ぶ,bu",
    message: "What is the romaji of ぶ",
  },
  {
    type: "input",
    name: "べ,be",
    message: "What is the romaji of べ",
  },
  {
    type: "input",
    name: "ぼ,bo",
    message: "What is the romaji of ぼ",
  },
  {
    type: "input",
    name: "ぱ,pa",
    message: "What is the romaji of ぱ",
  },
  {
    type: "input",
    name: "ぴ,pi",
    message: "What is the romaji of ぴ",
  },
  {
    type: "input",
    name: "ぷ,pu",
    message: "What is the romaji of ぷ",
  },
  {
    type: "input",
    name: "ぺ,pe",
    message: "What is the romaji of ぺ",
  },
  {
    type: "input",
    name: "ぽ,po",
    message: "What is the romaji of ぽ",
  },
  {
    type: "input",
    name: "きゃ,kya",
    message: "What is the romaji of きゃ",
  },
  {
    type: "input",
    name: "きゅ,kyu",
    message: "What is the romaji of きゅ",
  },
  {
    type: "input",
    name: "きょ,kyo",
    message: "What is the romaji of きょ",
  },
  {
    type: "input",
    name: "しゃ,sha",
    message: "What is the romaji of しゃ",
  },
  {
    type: "input",
    name: "しゅ,shu",
    message: "What is the romaji of しゅ",
  },
  {
    type: "input",
    name: "しょ,sho",
    message: "What is the romaji of しょ",
  },
  {
    type: "input",
    name: "ちゃ,cha",
    message: "What is the romaji of ちゃ",
  },
  {
    type: "input",
    name: "ちゅ,chu",
    message: "What is the romaji of ちゅ",
  },
  {
    type: "input",
    name: "ちょ,cho",
    message: "What is the romaji of ちょ",
  },
  {
    type: "input",
    name: "にゃ,nya",
    message: "What is the romaji of にゃ",
  },
  {
    type: "input",
    name: "にゅ,nyu",
    message: "What is the romaji of にゅ",
  },
  {
    type: "input",
    name: "にょ,nyo",
    message: "What is the romaji of にょ",
  },
  {
    type: "input",
    name: "ひゃ,hya",
    message: "What is the romaji of ひゃ",
  },
  {
    type: "input",
    name: "ひゅ,hyu",
    message: "What is the romaji of ひゅ",
  },
  {
    type: "input",
    name: "ひょ,hyo",
    message: "What is the romaji of ひょ",
  },
  {
    type: "input",
    name: "みゃ,mya",
    message: "What is the romaji of みゃ",
  },
  {
    type: "input",
    name: "みゅ,myu",
    message: "What is the romaji of みゅ",
  },
  {
    type: "input",
    name: "みょ,myo",
    message: "What is the romaji of みょ",
  },
  {
    type: "input",
    name: "りゃ,rya",
    message: "What is the romaji of りゃ",
  },
  {
    type: "input",
    name: "りゅ,ryu",
    message: "What is the romaji of りゅ",
  },
  {
    type: "input",
    name: "りょ,ryo",
    message: "What is the romaji of りょ",
  },
];

export default hiragana;
