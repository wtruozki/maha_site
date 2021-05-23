import Layout from "../components/Layout";
import OtherWrap from "../components/OtherWrap";
import Image from "next/image";
import Slider from "react-slick";

const Rental = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 300,
    speed: 5000,
    slidesToShow: 1,
    swipe: false,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  };
  return (
    <Layout>
      <OtherWrap heading="RENTAL HALL">
        <Slider {...settings}>
          <Image src="/cake.png" alt="cake" width={1618} height={1000} />
          <Image src="/drinks.png" alt="drinks" width={1618} height={1000} />
          <Image src="/glass.png" alt="glass" width={1618} height={1000} />
        </Slider>
        <div>
          ゴージャスでどんなスタイルにもはまる空間。
          <br />
          六本木交差点から徒歩1分という絶好のロケーション！
          <br />
          使用料無料の充実設備でお待ちしております。
        </div>
        <section>
          <h3>HALL RENTAL</h3>
          <Image src="/party.png" alt="party" width={300} height={300} />
          <section>
            <h4>PARTY</h4>
            <div>
              <p>収容人数</p>
              <div>
                <p>250名(ｽﾀﾝﾃﾞｨﾝｸﾞ)</p>
                <p>着席100名</p>
              </div>
            </div>
            <div>
              <p>料金プラン（2時間）フリードリンク･お食事付き</p>
              <p>¥5,000～</p>
            </div>
            <div>
              <p>最低受付金額</p>
              <p>¥330,000(税込)</p>
            </div>
          </section>
          <section>
            <h4>SPECIAL OTHERS</h4>
            <div>
              <p>スペースレンタル </p>
              <p>¥50,000 / 1H</p>
            </div>
            <div>
              <p>スチール撮影 </p>
              <p> ¥30,000 / 1H</p>
            </div>
            <div>
              <p>ムービー撮影 </p>
              <p>¥50,000 / 1H</p>
            </div>
            <div>
              <p>現場立会料</p>
              <p>¥20,000</p>
            </div>
            <div>
              <p>大型LEDビジョン</p>
              <p>¥20,000</p>
            </div>
            <div>
              <p>テレビモニター</p>
              <p>¥10,000</p>
            </div>
            <div>
              <p>スモークマシン</p>
              <p>¥5,000</p>
            </div>
            <div>
              <p>演出用Co2（炭酸ガス）</p>
              <p>¥30,000</p>
            </div>
            <div>
              <p>キャノン砲　紙吹雪</p>
              <p>¥20,000</p>
            </div>
            <div>
              <p>紙テープ</p>
              <p> ¥5,000</p>
            </div>
            <div>
              <p>シャンパンタワー</p>
              <p>¥30,000 ~</p>
            </div>
            <div>
              <p>楽屋設備（個室）</p>
              <p>¥5,000</p>
            </div>
            <div>
              <p>DJ</p>
              <p>¥30,000</p>
            </div>
            <div>
              <p>音響・照明オペレーター</p>
              <p>¥20,000</p>
            </div>
            <div>
              <p>ダンサー</p>
              <p>¥20,000</p>
            </div>
            <div>
              <p>テキーラガール</p>
              <p>¥20,000</p>
            </div>
          </section>
          <section>
            <h4>WANTED AN EVENT</h4>
            <Image
              src="/hakodai.jpeg"
              width={300}
              height={300}
              alt="イベント0円"
            />
          </section>
          <section>
            <h4>AGREEMENT</h4>
            <p>
              ・ご契約時に内金として総額の10％をお預かりさせて頂きます。
              <br />
              <br />
              ・ご飲食付きパーティーの基本使用時間は、スタッフ入りから完全撤去まで3時間となります。
              <br />
              時間延長等につきましてはお気軽にお問合せください。
              <br />
              <br />
              ・上記のプランは営業時間外のプランです。
              <br />
              営業時間内につきましては19:00～1時間につき￥100,000プラスとなっております。
              <br />
              <br />
              ・上記以外の使用用途は、お気軽にご相談ください。その他お料理、ご予算、ご利用人数等お気軽にご相談下さい。
              <br />
              TEL : 03-6804-1798
            </p>
          </section>
          <section>
            <h4>CANCEL</h4>
            <p>
              ご予約を決定されてからキャンセルされる場合、以下のキャンセル料が発生致します。
            </p>
            <div>
              <p>30日前まで</p>
              <p>総額の10%</p>
            </div>
            <div>
              <p>15日前まで</p>
              <p>総額の30%</p>
            </div>
            <div>
              <p>7日前まで</p>
              <p>総額の50%</p>
            </div>
            <div>
              <p>当日まで</p>
              <p>総額の100%</p>
            </div>
          </section>
        </section>

        <section>
          <h3>OPTION</h3>
          <section>
            <h4>SOUND</h4>
            <section>
              <h5>DJ Booth</h5>
              <p>
                Pionner CDJ2000nxs2×3台
                <br />
                Technics SL1200MK7×2台
                <br />
                Pioneer DJM900nxs(※All Link with LAN)
                <br />
                Pioneer RMX1000
                <br />
                RANE SL4
                <br />
              </p>
            </section>

            <section>
              <h5>PA</h5>
              <p>
                DYNACORD FX12×2（Main Speaker）
                <br />
                DYNACORD D12×2（Sub Main Speaker）
                <br />
                DYNACORD SUB112×2（Sub Woofer）
                <br />
                DYNACORD D8×2（Sub Speaker）
                <br />
                <br />
                EV DC-ONE(Processor)
                <br />
                DYNACORD H2500×3 (Amplifier)
                <br />
                AMCRON XLS1502 (Amplifier)
                <br />
                <br />
                MIDAS M32Rlive（Main PA Digital Mixer）
                <br />
                <br />
                ALESIS System in a Box 80W (DJ Monitor Speaker)
                <br />
                <br />
                SHURE ULXD4D-AB(Wireless Mic System)
                <br />
                SHURE ULXD2/SM58×2 (Wireless Microphone)
                <br />
                <br />
                Classic Pro CWR800 Plus×2 (Wireless Mic System)
                <br />
                Classic Pro CWM800-PLUS (Wireless Microphone)
                <br />
                K&M マイクスタンド×4
              </p>
            </section>
          </section>
          <section>
            <h4>LIGHTNING</h4>
            <p>
              PS Laser LED150W×14　(ムービングヘッド)
              <br />
              DISCOボール×5
              <br />
              LED PAR LED180W×14 (パーライト)
              <br />
              AMERICAN DJ LED PAR MEGAHEXPAR×6 (パーライト)
              <br />
              VENUS-5W×2 (レーザー5kmw)
              <br />
              LED100W×2 (LEDミニブルート)
              <br />
              QUAD PHASE10W×4 （ムーンフラワー）
              <br />
              LED ストロボ×2
              <br />
              MB-40（ミラーボール40cm）
              <br />
              <br />
              Z-1200×2台（スモークマシーン）
              <br />
              特効CO2×2
              <br />
              特効キャノン×2
            </p>
            <h5>制御</h5>
            <p>
              ELATION Light Jockey2（システムインターフェイス）
              <br />
              Quick Show（レーザー用インターフェイス）
              <br />
              ENTECUSB-PRO（レーザー用同期インターフェイス）
              <br />
              ELATION SCENE SETTER　24ch
              <br />
              AKAI APC-MINI (サブコントローラー)
            </p>
          </section>
          <section>
            <h4>VISUAL</h4>
            <p>
              メインLEDビジョン500mm×500mm　ピッチ3.9mm×28 <br />
              DJブース前面ピッチサイズ1024×256 <br />
              DJブース背面ピッチサイズ1024×256 <br /> <br />
              店内液晶TVモニタ8台 <br />
              SHARP LC-60W7×２ <br />
              SHARP LC-32E8 <br />
              TOSHIBA REGZA32 S10×2 <br />
              PANASONIC TH-L37S2×2 <br />
              SHARP LC-50 W 30 <br /> <br />
              MCTRL660（映像送信機） <br />
              RGBLINK（映像プロセッサー６ＣＨ） <br /> <br />
              Arkaos GRAND VJXT（映像制御インターフェイス） <br />
              ROLAND V-40（映像ミキサー） <br />
              ROLAND V-1（映像ミキサー） <br />
            </p>
          </section>
        </section>
        <section>
          <h3>FOOD&DRINK MENU</h3>
          <section>
            <h4>¥5,000PLAN</h4>
            <p>
              BEER/ビール・シャンディーガフ
              <br />
              GIN/ジントニック・ジンフィズ
              <br />
              VODKA/モスコミュール・スクリュードライバー
              <br />
              RUM/ラムコーク
              <br />
              焼酎/ウーロンハイ・レモンサワー
              <br />
              WHISKY/水割り・ウィスキーソーダ
              <br />
              SOFT DRINK/ウーロン.コーラ.ジンジャー
              <br />
              オレンジ.レモンスカッシュ
              <br />
              <br />
              パスタ各種
              <br />
              エビフライ・ミニハンバーグ
              <br />
              チーズとサラミの盛り合わせ
              <br />
              肉団子
              <br />
              ミックスサンドイッチ
              <br />
              シュウマイ・春巻き
              <br />
              のり巻き寿司
              <br />
              スパイシーチキン
              <br />
              季節のフルーツ盛り合わせ
              <br />
            </p>
          </section>
          <section>
            <h4>¥6,000PLAN</h4>
            <p>
              BEER/ビール・シャンディーガフ
              <br />
              GIN/ジントニック・ジンフィズ
              <br />
              VODKA/モスコミュール・スクリュードライバー
              <br />
              RUM/ラムコーク
              <br />
              CASSIS/カシスソーダ.カシスオレンジ
              <br />
              LYCHEE/ライチソーダ .ライチオレンジ
              <br />
              PEACH/ピーチフィズ .ファジーネーブル
              <br />
              焼酎/ウーロンハイ・レモンサワー
              <br />
              WHISKY/水割り・ウィスキーソーダ
              <br />
              WINE/赤ワイン、白ワイン
              <br />
              SOFT DRINK/ウーロン.コーラ.ジンジャー
              <br />
              オレンジ.レモンスカッシュ
              <br />
              <br />
              海老のカクテル
              <br />
              ブルスケッタ各種
              <br />
              ピンチョス取り合わせ
              <br />
              海の幸オリーブ風味
              <br />
              コールドミート盛り合わせ
              <br />
              ベトナム風生春巻き
              <br />
              ロールサンド
              <br />
              飲茶
              <br />
              パスタ各種
              <br />
              季節のフルーツ盛り合わせ
              <br />
            </p>
          </section>
          <section>
            <h4>¥7,000PLAN</h4>
            <p>
              BEER/ビール・シャンディーガフ
              <br />
              GIN/ジントニック・ジンフィズ
              <br />
              VODKA/モスコミュール・スクリュードライバー
              <br />
              RUM/ラムコーク
              <br />
              CASSIS/カシスソーダ.カシスオレンジ
              <br />
              LYCHEE/ライチソーダ .ライチオレンジ
              <br />
              PEACH/ピーチフィズ .ファジーネーブル
              <br />
              焼酎/ウーロンハイ・レモンサワー
              <br />
              WHISKY/水割り・ウィスキーソーダ
              <br />
              TEQUILA/メキシコーク・テキーラトニック
              <br />
              CAMPARIカンパリソーダ・カンパリオレンジ
              <br />
              WINE赤ワイン、白ワイン
              <br />
              CHAMPAGNE/スパークリングワイン
              <br />
              SOFT DRINK/ウーロン.コーラ.ジンジャー
              <br />
              オレンジ.レモンスカッシュ
              <br />
              <br />
              まぐろのカクテル
              <br />
              ノルウェーサーモンの野菜巻き
              <br />
              海の幸ﾜｲﾝ蒸しマリネ
              <br />
              ベトナム風生春巻き
              <br />
              ロールサンド
              <br />
              のり巻き寿司
              <br />
              ビーフシチュー温野菜添え
              <br />
              ピッツァホテル風
              <br />
              ピンチョス取り合わせ
              <br />
              パスタペスカトーレ
              <br />
              季節のフルーツ盛り合わせ
              <br />
            </p>
            <p>『※メニューは一例であり、季節により異なります。』</p>
          </section>
        </section>
      </OtherWrap>
    </Layout>
  );
};

export default Rental;
