var vm = new Vue ({
  el: '#ap1',
  data: {
    year: 2020,
    nyear: (new Date()).getFullYear(),
    month: 1,
    day: 1,
    result: 0,
    show: false,
    births: [
      { val: 1, type: "アイディアマン", dep: "・常に新しいことを発信 ・自分に正直すぎる ・ときに傲慢" },
      { val: 2, type: "平和主義者", dep: "・自分より他人優先 ・寂しがり屋 ・シャイな一面も" },
      { val: 3, type: "お祭り好き", dep: "・社交的な人気者 ・非現実的な発想が多い" },
      { val: 4, type: "保守的", dep: "・非常に勤勉 ・頑固な一面も" },
      { val: 5, type: "パイオニア", dep: "・自分のスタイルを貫く ・人との付き合いが苦手" },
      { val: 6, type: "ロマンチスト", dep: "・常に幸せでいたい ・家族思いで仲間に誠実 ・真面目すぎる" },
      { val: 7, type: "インテリ", dep: "・論理的かつ冷静 ・秘密主義者" },
      { val: 8, type: "大物", dep: "・仕事に誇りがある ・権力に流されがち" },
      { val: 9, type: "エンターテイナー", dep: "・自己犠牲タイプ ・他人の意見を重視しがち" },
    ],
    colors: [
      { val: 0, color: "パープル" },
      { val: 1, color: "イエロー" },
      { val: 2, color: "グリーン" },
      { val: 3, color: "レッド" },
      { val: 4, color: "オレンジ" },
      { val: 5, color: "ブラウン" },
      { val: 6, color: "ブラック" },
      { val: 7, color: "ゴールド" },
      { val: 8, color: "シルバー" },
      { val: 9, color: "ブルー" },
    ],
    animals: [
      { val: 0, type: "慈悲深いトラ", good: 15, bad: 45 },
      { val: 1, type: "長距離ランナーのチータ", good: 26, bad: 56 },
      { val: 2, type: "社交家のたぬき", good: 37, bad: 7 },
      { val: 3, type: "落ち着きのない猿", good: 48, bad: 18 },
      { val: 4, type: "フットワークの軽いコアラ", good: 59, bad: 29 },
      { val: 5, type: "面倒見のいい黒ヒョウ", good: 10, bad: 40 },
      { val: 6, type: "愛情あふれるトラ", good: 21, bad: 51 },
      { val: 7, type: "全力疾走するチータ", good: 32, bad: 2},
      { val: 8, type: "磨き上げられたたぬき", good: 43, bad: 13 },
      { val: 9, type: "大きな志を持った猿", good: 54, bad: 24 },
      { val: 10, type: "母性豊かなコアラ", good: 5, bad: 35 },
      { val: 11, type: "正直な小鹿", good: 16, bad: 46 },
      { val: 12, type: "人気者の象", good: 27, bad: 57 },
      { val: 13, type: "根明の狼", good: 38, bad: 8 },
      { val: 14, type: "協調性のない羊", good: 49, bad: 19 },
      { val: 15, type: "どっしりとした猿", good: 60, bad: 30 },
      { val: 16, type: "コアラの中のコアラ", good: 11, bad: 41 },
      { val: 17, type: "強い意志を持った小鹿", good: 22, bad: 52 },
      { val: 18, type: "デリケートな象", good: 33, bad: 3 },
      { val: 19, type: "放浪の狼", good: 44, bad: 14 },
      { val: 20, type: "もの静かな羊", good: 55, bad: 25 },
      { val: 21, type: "落ち着きのあるペガサス", good: 6, bad: 36 },
      { val: 22, type: "強靭な翼を持つペガサス", good: 17, bad: 47 },
      { val: 23, type: "無邪気な羊", good: 28, bad: 58 },
      { val: 24, type: "クリエイティブな狼", good: 39, bad: 9 },
      { val: 25, type: "穏やかな狼", good: 50, bad: 20 },
      { val: 26, type: "粘り強い羊", good: 1, bad: 31 },
      { val: 27, type: "波乱に満ちたペガサス", good: 12, bad: 42 },
      { val: 28, type: "優雅なペガサス", good: 23, bad: 53 },
      { val: 29, type: "チャレンジ精神旺盛な羊", good: 34, bad: 4 },
      { val: 30, type: "順応性のある狼", good: 45, bad: 15 },
      { val: 31, type: "リーダーとなる象", good: 56, bad: 26 },
      { val: 32, type: "しっかり者の小鹿", good: 7, bad: 37 },
      { val: 33, type: "活動的なコアラ", good: 18, bad: 48 },
      { val: 34, type: "気分屋の猿", good: 29, bad: 59 },
      { val: 35, type: "頼られるとうれしい羊", good: 40, bad: 10 },
      { val: 36, type: "好感を持たれる狼", good: 51, bad: 21 },
      { val: 37, type: "まっしぐらに突き進む象", good: 2, bad: 32 },
      { val: 38, type: "華やかな小鹿", good: 13, bad: 43 },
      { val: 39, type: "夢とロマンのコアラ", good: 24, bad: 54 },
      { val: 40, type: "尽くす猿", good: 35, bad: 5 },
      { val: 41, type: "大器晩成のたぬき", good: 46, bad: 16 },
      { val: 42, type: "足腰の強いチータ", good: 57, bad: 27 },
      { val: 43, type: "動き回るトラ", good: 8, bad: 38 },
      { val: 44, type: "情熱的な黒ヒョウ", good: 19, bad: 49 },
      { val: 45, type: "サービス精神旺盛なコアラ", good: 30, bad: 60 },
      { val: 46, type: "守りの猿", good: 41, bad: 11 },
      { val: 47, type: "人間味あふれるたぬき", good: 52, bad: 22 },
      { val: 48, type: "品格のあるチータ", good: 3, bad: 33 },
      { val: 49, type: "ゆったりと悠然のトラ", good: 14, bad: 44 },
      { val: 50, type: "落ち込みの激しい黒ヒョウ", good: 25, bad: 55 },
      { val: 51, type: "我が道を行くライオン", good: 36, bad: 6 },
      { val: 52, type: "統率力のあるライオン", good: 47, bad: 17 },
      { val: 53, type: "表情豊かな黒ヒョウ", good: 58, bad: 28 },
      { val: 54, type: "楽天的なトラ", good: 9, bad: 39 },
      { val: 55, type: "パワフルなトラ", good: 20, bad: 50 },
      { val: 56, type: "気取らない黒ヒョウ", good: 31, bad: 1 },
      { val: 57, type: "感情的なライオン", good: 42, bad: 12 },
      { val: 58, type: "傷つきやすいライオン", good: 53, bad: 23 },
      { val: 59, type: "束縛を嫌う黒ヒョウ", good: 16, bad: 34 },
    ]
  },
  computed: {
    animath: function(){
      dif = this.year - 1921

      val = ((dif * 5) + (dif /4)) % 60;
        mval = (this.month-1)*31;

      if (this.month>2){
        if ((this.year%4==0)&&(this.year%100!=0)||(this.year%400==0)){
          mval = mval +1;
        }
        mval = mval - 3;
        if (this.month>4){
          mval = mval-1;
          if (this.month>6){
            mval = mval-1;
            if (this.month>9){
              mval = mval-1;
              if (this.month>11){
                mval = mval-1;
              }
            }
          }
        }
      }
      val2 = ( val + mval ) + parseInt(this.day);
      return parseInt(val2 % 60);
    },
    colmath: function(){
      val3 = this.animath % 10;
      return parseInt(val3);
    },
    daymath: function(){
      val4 = 31;
      if ((this.month==4)||(this.month==6)||(this.month==9)||(this.month==11)){
        val4 = 30;
      }else if (this.month==2) {
        val4 = 28;
        if ((this.year%4==0)&&(this.year%100!=0)||(this.year%400==0)){
          val4 = val4 +1;
        }
      }
      return val4;
    },
    stamath: function(){
      val5 = this.month * 100 + parseInt(this.day);
      result = "やぎ座（山羊座、Capricornus）";

      if (val5>=119){
        result = "みずがめ座（水瓶座、Aquarius）";
        if (val5>=219){
          result = "うお座（魚座、Pisces）";
          if(val5>=321){
            result = "おひつじ座（牡羊座、Aries）";
            if(val5>=420){
              result = "おうし座（牡牛座、Taurus）";
              if(val5>=521){
                result = "ふたご座（双子座、Gemini）";
                if(val5>=622){
                  result = "かに座（蟹座、Cancer）";
                  if(val5>=723){
                    result = "しし座（獅子座、Leo）";
                    if(val5>=823){
                      result = "おとめ座（乙女座、Virgo）";
                      if(val5>=923){
                        result = "てんびん座（天秤座、Libra）";
                        if(val5>=1024){
                          result = "さそり座（蠍座、Scorpius）";
                          if(val5>=1123){
                            result = "いて座（射手座、Sagittarius）";
                            if(val5>=1222){
                              result = "やぎ座（山羊座、Capricornus）";
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      return result;
    },
    birmath: function(){
      val6 = parseInt(this.year) + parseInt(this.month) + parseInt(this.day);
      rnum = 0;
      rnum2 = 0;
      val7 = String(val6).split("");
      for (i = 0; i < val7.length; i++){
        rnum = rnum + parseInt(val7[i]);
      }
      val8 = String(rnum).split("");
      for (i = 0; i < val8.length; i++){
        rnum2 = rnum2 + parseInt(val8[i]);
      }
      if(rnum2 == 10){
        rnum2 = 1;
      }
      // return val6;
      return rnum2;
    }
  }
  // methods: {
  // }
});



// var ap2 = new Vue({
//   el: '#ap2',
//   data: {
//     price: 1200
//   },
//   method: {
//     pricenum: function($event) {
//       this.price = $event.target.value;
//     }
//   }
// });
//
// var app = new Vue({
//     el: '#app',
//     data: {
//       message: 'hello world',
//        mes2: bal.pos.y *1.1 // + (bal.pos.y/100*10)
//     }
// });
