import{c as e,f as t,l as n,m as r,o as i,p as a,s as o,t as s,u as c}from"./BaseData-gDx4wZ2w.js";var l=class l extends s{constructor(){super(),l.createHelps()}get helps(){return s.mHelps.rule||{}}static createHelps(){if(s.mHelps.rule)return;s.mHelps.rule={};let e=s.mHelps.rule;e[n.ENABLE_8GIRI]=t(`8を出すと強制的に場が流れます。

※階段時も出せるか設定できます
階段がONになってないと有効ではありません。
※4止めをONにしている場合、
パスが一巡してから流れます。`),e[n.ENABLE_11BACK]=t(`11を出すと場が流れるまで革命状態となり
カードの強さが逆になります。
3が一番強くなります(革命時は2)。
Jokerの強さ変わりません。
※強化にすると11を3枚で次のターンも継続します`),e[n.ENABLE_SKIP_5]=t(`5を出した枚数分スキップします`),e[n.ENABLE_SKIP_13]=t(`13を出した枚数分スキップします`),e[n.ENABLE_WATASHI_7]=t(`7を出した枚数分次のプレイヤーに
カードを渡すことができます。
※枚数選択にチェックを入れると
その枚数以下で渡すことができます
※枚数選択不可で枚数が足りない場合、
反則あがりになります`),e[n.ENABLE_SUTE_10]=t(`10を出した枚数分、
カードを捨てることができます。
※枚数選択にチェックを入れると
その枚数以下で捨てることができます。
※枚数選択不可で枚数が足りない場合、
反則あがりになります`),e[n.ENABLE_REVERSE_9]=t(`9を出すと順番が逆になります`),e[n.ENABLE_REVERSE_12]=t(`12を出すと順番が逆になります`),e[n.ENABLE_KAKUMEI]=t(`4枚以上の同じ数字のカードを出すと
革命を起こすことができます。
今までのカードの強さが逆になります。
3が一番強くなります。
(2が最も弱くなる。Joker除く)。
革命時に革命になると元に戻ります。`),e[n.ENABLE_KAIDAN_KAKUMEI]=t(`4枚以上の階段カードを出しても
革命を起こすことが可能になります。

※階段をONにしておく必要があります。`),e[n.ENABLE_KAKUMEI_CONTAIN_JOKER]=t(`代用したジョーカーが含まれていても
革命をおこせるか選択できます。`),e[n.ENABLE_KAKUMEI_KUDETA]=t(`9を3枚で革命。
※6を3枚で革命返しできるか選べます。`),e[n.ENABLE_KAKUMEI_OMEN]=t(`6を3枚で革命。
※以降革命が起こせなくなります。
8切りその他全ての特殊効果や縛りが
発生できなくなります。`),e[n.ENABLE_KAKUMEI_73]=t(`7を3枚で革命。`),e[n.ENABLE_KAIDAN]=t(`同じスートで3枚以上の連続したカードを
出すことができます。

別名、シークエンス、連番`),e[n.ENABLE_KAIDAN_NUM]=t(`2枚以上か3枚以上かを選ぶことができます。`),e[n.LEVEL_KAIDAN]=t(`次に出す階段カードが最初のカード以上か
最後のカード以上かを選べます`),e[n.ENABLE_KAIDAN_EMPEROR]=t(`4枚の異なるスートの連続したカードを出すこと`),e[n.ENABLE_SHIBARI_NUM]=t(`縛り発生が有効になる回数。
2回、3回選べます。`),e[n.ENABLE_SHIBARI_SUIT]=t(`同じスート(マーク)の
カードしか出せなくなります。
※複数枚出しの細かな設定は
「片しば」「両しば」で設定してください。`),e[n.ENABLE_SHIBARI_SUUJI]=t(`数字に対する縛り。
連続した数字が続くと
その次の数字しか出せなくなります。
例)6の場合、7、次は8等`),e[n.ENABLE_SHIBARI_SUIT_KATA]=t(`複数枚出した場合
スートが１つでも一致した場合
そのスートを含んだ組み合わせしか
出せなくなります。`),e[n.ENABLE_SHIBARI_SUIT_RYOU]=t(`全てのスートが完全一致した場合
発生します。
※完全一致のみ有効にしたい場合
「片しば」をOFFにしてください。`),e[n.ENABLE_SHIBARI_SUIT_GEKI]=t(`完しばと数字縛り
両方発生した場合に発生します。`),e[n.ENABLE_SHIBARI_TOTYU]=t(`場の途中から縛りを有効にできるか設定できます。

ex.1番目スペード,2番目ハート,3番目ハートで
縛り発生など`),e[n.JOKER_NUM]=t(`ジョーカーの枚数
0,1,2枚から選べます。

次のゲームから有効`),e[n.ENABLE_2_KINSHI_AGARI]=t(`2であがると大貧民になります。
革命、11バック時は3です。`),e[n.ENABLE_JOKER_KINSHI_AGARI]=t(`ジョーカーで上がるのを禁止します。
※代用の場合もNG`),e[n.ENABLE_8GIRI_KINSHI_AGARI]=t(`8切りであがるのを禁止します。

※8切りがONになってない場合
効果ありません`),e[n.ENABLE_11BACK_KINSHI_AGARI]=t(`11バックであがるのを禁止します。

※11バックがONになってない場合
効果ありません`),e[n.ENABLE_WATASHI_7_KINSHI_AGARI]=t(`7渡しで、カードを渡して上がるのを禁止します。
※基本ルールの枚数選択不可で
枚数が足りない場合の
反則あがりではありません。`),e[n.ENABLE_SUTE_10_KINSHI_AGARI]=t(`10捨てで、カードを捨てて上がるのを禁止します。
※基本ルールの枚数選択不可で
枚数が足りない場合の
反則あがりではありません。`),e[n.ENABLE_GAESHI_SPA3_KINSHI_AGARI]=t(`スペ3返しで上がるのを禁止します。
※普通にスペードの3複数枚であがるのはOKです。`),e[n.ENABLE_SUNAARASHI]=t(`3を3枚で場を流せます。`),e[n.ENABLE_99SYA]=t(`9を2枚で場を流せます。`),e[n.ENABLE_6KUBI]=t(`6を2枚で場を流せます。`),e[n.ENABLE_GAESHI_SPA3]=t(`単独のジョーカに対して
スペードの3で対抗できます。

※ジョーカーが他のカードの代用として
出された場合は対象外です。
※現状革命時も有効になってます。`),e[n.ENABLE_8GIRI_4DOME]=t(`8切りに対して倍の枚数の4で対抗することができます。

※2枚の8に対して4枚の4で自分の場流れに
できますが、その場合革命は起こりません。`),e[n.START]=t(`誰からはじめるかの
基準を決めることができます。`),e[n.ENABLE_MIYAKO_OCHI]=t(`大富豪が次も大富豪であがれない場合、
無条件に大貧民に降格します。
※既に禁止上がりで大貧民が
設定されてる場合、階級が繰り上がります`),e[n.ENABLE_GEKOKUJYO]=t(`大貧民が大富豪であがった場合、
ゲーム終了し全ての階級が逆転します。`),e[n.SWAP_TYPE]=t(`ゲーム開始前の交換
「同時交換」は全ての階級が同時に交換します。
「受け取ってから」にすると、
大富豪、富豪はカードを
大貧民、貧民から受け取ってから
交換することができます`),e.ResetRule=``,e.support=``}onClickIcon(e){}createData(){this.mControls={};var e=[{header:t(`基本(ポピュラーなもの)`),children:[{label:t(`8切り`),accessories:[this.createAccessoryCheckBox(n.ENABLE_KAIDAN_8GIRI,t(`階段時`)),this.createAccessoryOnOff(n.ENABLE_8GIRI)],icon:this.createIcon(n.ENABLE_8GIRI)},{label:t(`11バック`),accessories:[this.createAccessoryCheckBox(n.ENABLE_11BACK_STRONG,t(`強化11バック`)),this.createAccessoryOnOff(n.ENABLE_11BACK)],icon:this.createIcon(n.ENABLE_11BACK)},{label:t(`5スキップ`),accessories:[this.createAccessoryOnOff(n.ENABLE_SKIP_5)],icon:this.createIcon(n.ENABLE_SKIP_5)},{label:t(`13スキップ`),accessories:[this.createAccessoryOnOff(n.ENABLE_SKIP_13)],icon:this.createIcon(n.ENABLE_SKIP_13)},{label:t(`7渡し`),accessories:[this.createAccessoryCheckBox(n.ENABLE_WATASHI_7_MAISUU,t(`枚数選択`)),this.createAccessoryOnOff(n.ENABLE_WATASHI_7)],icon:this.createIcon(n.ENABLE_WATASHI_7)},{label:t(`10捨て`),accessories:[this.createAccessoryCheckBox(n.ENABLE_SUTE_10_MAISUU,t(`枚数選択`)),this.createAccessoryOnOff(n.ENABLE_SUTE_10)],icon:this.createIcon(n.ENABLE_SUTE_10)},{label:t(`9リバース`),accessories:[this.createAccessoryOnOff(n.ENABLE_REVERSE_9)],icon:this.createIcon(n.ENABLE_REVERSE_9)},{label:t(`Qリバース(12)`),accessories:[this.createAccessoryOnOff(n.ENABLE_REVERSE_12)],icon:this.createIcon(n.ENABLE_REVERSE_12)}]},{header:t(`革命`),children:[{label:t(`革命`),accessories:[this.createAccessoryOnOff(n.ENABLE_KAKUMEI)],icon:this.createIcon(n.ENABLE_KAKUMEI)},{label:t(`階段革命`),accessories:[this.createAccessoryOnOff(n.ENABLE_KAIDAN_KAKUMEI)],icon:this.createIcon(n.ENABLE_KAIDAN_KAKUMEI)},{label:t(`ジョーカーの使用`),accessories:[this.createAccessoryOnOff(n.ENABLE_KAKUMEI_CONTAIN_JOKER)],icon:this.createIcon(n.ENABLE_KAKUMEI_CONTAIN_JOKER)},{label:t(`クーデター`),accessories:[this.createAccessoryCheckBox(n.ENABLE_KAKUMEI_KUDETA_GAESHI_6,t(`6返し`)),this.createAccessoryOnOff(n.ENABLE_KAKUMEI_KUDETA)],icon:this.createIcon(n.ENABLE_KAKUMEI_KUDETA)},{label:t(`オーメン`),accessories:[this.createAccessoryOnOff(n.ENABLE_KAKUMEI_OMEN)],icon:this.createIcon(n.ENABLE_KAKUMEI_OMEN)},{label:t(`ナナサン革命`),accessories:[this.createAccessoryOnOff(n.ENABLE_KAKUMEI_73)],icon:this.createIcon(n.ENABLE_KAKUMEI_73)}]},{header:t(`階段`),children:[{label:t(`階段`),accessories:[this.createAccessoryOnOff(n.ENABLE_KAIDAN)],icon:this.createIcon(n.ENABLE_KAIDAN)}]},{header:t(`縛り`),children:[{label:t(`回数`),accessories:[this.createAccessoryPickerList(n.ENABLE_SHIBARI_NUM,[t(`2回連続`),t(`3回連続`)])],icon:this.createIcon(n.ENABLE_SHIBARI_NUM)},{label:t(`スート縛り`),accessories:[this.createAccessoryOnOff(n.ENABLE_SHIBARI_SUIT)],icon:this.createIcon(n.ENABLE_SHIBARI_SUIT)},{label:t(`片しば`),accessories:[this.createAccessoryOnOff(n.ENABLE_SHIBARI_SUIT_KATA)],icon:this.createIcon(n.ENABLE_SHIBARI_SUIT_KATA)},{label:t(`完しば(両しば)`),accessories:[this.createAccessoryOnOff(n.ENABLE_SHIBARI_SUIT_RYOU)],icon:this.createIcon(n.ENABLE_SHIBARI_SUIT_RYOU)},{label:t(`数字縛り`),accessories:[this.createAccessoryOnOff(n.ENABLE_SHIBARI_SUUJI)],icon:this.createIcon(n.ENABLE_SHIBARI_SUUJI)},{label:t(`激しば`),accessories:[this.createAccessoryOnOff(n.ENABLE_SHIBARI_SUIT_GEKI)],icon:this.createIcon(n.ENABLE_SHIBARI_SUIT_GEKI)},{label:t(`途中しばり`),accessories:[this.createAccessoryOnOff(n.ENABLE_SHIBARI_TOTYU)],icon:this.createIcon(n.ENABLE_SHIBARI_TOTYU)}]},{header:t(`禁止あがり`),children:[{label:t(`2あがり`),accessories:[this.createAccessoryOnOff(n.ENABLE_2_KINSHI_AGARI)],icon:this.createIcon(n.ENABLE_2_KINSHI_AGARI)},{label:t(`ジョーカーあがり`),accessories:[this.createAccessoryOnOff(n.ENABLE_JOKER_KINSHI_AGARI)],icon:this.createIcon(n.ENABLE_JOKER_KINSHI_AGARI)},{label:t(`「8切り」でのあがり`),accessories:[this.createAccessoryOnOff(n.ENABLE_8GIRI_KINSHI_AGARI)],icon:this.createIcon(n.ENABLE_8GIRI_KINSHI_AGARI)},{label:t(`「11バック」でのあがり`),accessories:[this.createAccessoryOnOff(n.ENABLE_11BACK_KINSHI_AGARI)],icon:this.createIcon(n.ENABLE_11BACK_KINSHI_AGARI)},{label:t(`「7渡し」(渡したカード)`),accessories:[this.createAccessoryOnOff(n.ENABLE_WATASHI_7_KINSHI_AGARI)],icon:this.createIcon(n.ENABLE_WATASHI_7_KINSHI_AGARI)},{label:t(`「10捨て」(捨てたカード)`),accessories:[this.createAccessoryOnOff(n.ENABLE_SUTE_10_KINSHI_AGARI)],icon:this.createIcon(n.ENABLE_SUTE_10_KINSHI_AGARI)},{label:t(`「スペ3返し」でのあがり`),accessories:[this.createAccessoryOnOff(n.ENABLE_GAESHI_SPA3_KINSHI_AGARI)],icon:this.createIcon(n.ENABLE_GAESHI_SPA3_KINSHI_AGARI)}]},{header:t(`ジョーカー`),children:[{label:t(`枚数`),accessories:[this.createAccessoryPickerList(n.JOKER_NUM,[t(`0枚`),t(`1枚`),t(`2枚`)])],icon:this.createIcon(n.JOKER_NUM)}]},{header:t(`場流れ系`),children:[{label:t(`ろくろ首(6を2枚)`),accessories:[this.createAccessoryOnOff(n.ENABLE_6KUBI)],icon:this.createIcon(n.ENABLE_6KUBI)},{label:t(`救急車(9を2枚)`),accessories:[this.createAccessoryOnOff(n.ENABLE_99SYA)],icon:this.createIcon(n.ENABLE_99SYA)},{label:t(`砂嵐(3を3枚)`),accessories:[this.createAccessoryOnOff(n.ENABLE_SUNAARASHI)],icon:this.createIcon(n.ENABLE_SUNAARASHI)}]},{header:t(`返し系`),children:[{label:t(`スペ３返し(Joker)`),accessories:[this.createAccessoryOnOff(n.ENABLE_GAESHI_SPA3)],icon:this.createIcon(n.ENABLE_GAESHI_SPA3)},{label:t(`４止め(8切り)`),accessories:[this.createAccessoryOnOff(n.ENABLE_8GIRI_4DOME)],icon:this.createIcon(n.ENABLE_8GIRI_4DOME)}]},{header:t(`スタート`),children:[{label:t(`最初の順番`),accessories:[this.createAccessoryPickerList(n.START,[t(`スペードの３`),t(`クラブの３`),t(`ハートの３`),t(`ダイヤの３`),t(`大貧民`),t(`自分から`)])],icon:this.createIcon(n.START)}]},{header:t(`ゲーム全体`),children:[{label:t(`交換`),accessories:[this.createAccessoryPickerList(n.SWAP_TYPE,[t(`OFF`),t(`同時交換`),t(`受け取ってから`)])],icon:this.createIcon(n.SWAP_TYPE)},{label:t(`都落ち`),accessories:[this.createAccessoryOnOff(n.ENABLE_MIYAKO_OCHI)],icon:this.createIcon(n.ENABLE_MIYAKO_OCHI)},{label:t(`下克上`),accessories:[this.createAccessoryOnOff(n.ENABLE_GEKOKUJYO)],icon:this.createIcon(n.ENABLE_GEKOKUJYO)}]},{header:t(`その他`),children:[{label:t(`ルールの初期化`),accessories:[this.createAccessoryButton(`Reset`,t(`リセット`))]},{label:t(`シェア`),accessories:[this.createAccessoryButton(`friend`,t(`友人に勧める`)),this.createAccessoryButton(`follow`,t(`フォローする`))]},{label:t(`レビューを書く`),accessories:[this.createAccessoryButton(`WriteReview`,t(`書　く`))]},{label:t(`追加希望、バグ報告`),accessories:[this.createAccessoryButton(`support`,t(`Twitterで`))]}]}],r;for(r=0;r<e.length;r++)e[r].header=r+1+`. `+e[r].header;return e}onClickButton(e){switch(e.key){case`ResetRule`:break;case`support`:a.i.isIOS();break;case`WriteReview`:break;case`friend`:break;case`follow`:window.open(c.TWITTER_FOLLOW_URL,`_blank`)}}updateRelationalControlDisabled(e){e[n.ENABLE_WATASHI_7_MAISUU].isEnabled=e[n.ENABLE_WATASHI_7].value,e[n.ENABLE_SUTE_10_MAISUU].isEnabled=e[n.ENABLE_SUTE_10].value,e[n.ENABLE_KAKUMEI_KUDETA_GAESHI_6].isEnabled=this.mControls[n.ENABLE_KAKUMEI_KUDETA].value,e[n.ENABLE_KAIDAN_8GIRI].isEnabled=e[n.ENABLE_8GIRI].value,e[n.ENABLE_SHIBARI_SUIT_KATA].isEnabled=e[n.ENABLE_SHIBARI_SUIT].value,e[n.ENABLE_SHIBARI_SUIT_RYOU].isEnabled=e[n.ENABLE_SHIBARI_SUIT].value,e[n.ENABLE_11BACK_STRONG].isEnabled=e[n.ENABLE_11BACK].value}getValue(t){var r=this.sendCmd(o.create(e.GET_RULE,[t])),a=i.get(r.recvData).value;return t==n.ENABLE_KAIDAN_NUM&&(a-=2),t==n.ENABLE_SHIBARI_NUM&&(a-=2),a}setValue(e,t){e==n.ENABLE_KAIDAN_NUM&&(t+=2),e==n.ENABLE_SHIBARI_NUM&&(t+=2),this.setRuleInternal(e,t),e==n.ENABLE_11BACK&&this.setRuleInternal(n.ENABLE_KAIDAN_11BACK,t),e==n.ENABLE_SKIP_5&&this.setRuleInternal(n.ENABLE_KAIDAN_SKIP_5,t),e==n.ENABLE_SKIP_13&&this.setRuleInternal(n.ENABLE_KAIDAN_SKIP_13,t),e==n.ENABLE_WATASHI_7&&this.setRuleInternal(n.ENABLE_KAIDAN_WATASHI_7,t),e==n.ENABLE_SUTE_10&&this.setRuleInternal(n.ENABLE_KAIDAN_SUTE_10,t),e==n.ENABLE_REVERSE_9&&this.setRuleInternal(n.ENABLE_KAIDAN_REVERSE_9,t),e==n.ENABLE_REVERSE_12&&this.setRuleInternal(n.ENABLE_KAIDAN_REVERSE_12,t),e==n.ENABLE_2_KINSHI_AGARI&&(this.setRuleInternal(n.ENABLE_KAIDAN_2_KINSHI_AGARI,t),this.setRuleInternal(n.ENABLE_KAKUMEI_11BACK_2_KINSHI_AGARI,t),this.setRuleInternal(n.ENABLE_KAIDAN_KAKUMEI_11BACK_2_KINSHI_AGARI,t),this.setRuleInternal(n.ENABLE_KAKUMEI_3_KINSHI_AGARI,t),this.setRuleInternal(n.ENABLE_KAIDAN_KAKUMEI_3_KINSHI_AGARI,t),this.setRuleInternal(n.ENABLE_11BACK_3_KINSHI_AGARI,t),this.setRuleInternal(n.ENABLE_KAIDAN_11BACK_3_KINSHI_AGARI,t)),e==n.ENABLE_JOKER_KINSHI_AGARI&&this.setRuleInternal(n.ENABLE_KAIDAN_JOKER_KINSHI_AGARI,t),e==n.ENABLE_8GIRI_KINSHI_AGARI&&this.setRuleInternal(n.ENABLE_KAIDAN_8GIRI_KINSHI_AGARI,t),e==n.ENABLE_11BACK_KINSHI_AGARI&&this.setRuleInternal(n.ENABLE_KAIDAN_11BACK_KINSHI_AGARI,t),e==n.ENABLE_WATASHI_7_KINSHI_AGARI&&this.setRuleInternal(n.ENABLE_KAIDAN_WATASHI_7_KINSHI_AGARI,t),e==n.ENABLE_SUTE_10_KINSHI_AGARI&&this.setRuleInternal(n.ENABLE_KAIDAN_SUTE_10_KINSHI_AGARI,t)}setRuleInternal(t,n){this.sendCmd(o.create(e.SET_RULE,[t,n]))}resetData(){this.sendCmd(o.create(e.RESET_RULE))}onSetting(){}onQuit(e){r.i.play(`kachi03.mp3`,.8,`System`)}};export{l as default};