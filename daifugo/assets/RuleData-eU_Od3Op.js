import{A as e,E as t,H as n,M as r,T as i,V as a,t as o,v as s,z as c}from"./BaseData-DQrX993l.js";var l=class l extends o{constructor(){super(),l.createHelps()}get helps(){return o.mHelps.rule||{}}static createHelps(){if(o.mHelps.rule)return;o.mHelps.rule={};let t=o.mHelps.rule;t[e.ENABLE_8GIRI]=c(`8を出すと強制的に場が流れます。

※階段時も出せるか設定できます
階段がONになってないと有効ではありません。
※4止めをONにしている場合、
パスが一巡してから流れます。`),t[e.ENABLE_11BACK]=c(`11を出すと場が流れるまで革命状態となり
カードの強さが逆になります。
3が一番強くなります(革命時は2)。
Jokerの強さ変わりません。
※強化にすると11を3枚で次のターンも継続します`),t[e.ENABLE_SKIP_5]=c(`5を出した枚数分スキップします`),t[e.ENABLE_SKIP_13]=c(`13を出した枚数分スキップします`),t[e.ENABLE_WATASHI_7]=c(`7を出した枚数分次のプレイヤーに
カードを渡すことができます。
※枚数選択にチェックを入れると
その枚数以下で渡すことができます
※枚数選択不可で枚数が足りない場合、
反則あがりになります`),t[e.ENABLE_SUTE_10]=c(`10を出した枚数分、
カードを捨てることができます。
※枚数選択にチェックを入れると
その枚数以下で捨てることができます。
※枚数選択不可で枚数が足りない場合、
反則あがりになります`),t[e.ENABLE_REVERSE_9]=c(`9を出すと順番が逆になります`),t[e.ENABLE_REVERSE_12]=c(`12を出すと順番が逆になります`),t[e.ENABLE_KAKUMEI]=c(`4枚以上の同じ数字のカードを出すと
革命を起こすことができます。
今までのカードの強さが逆になります。
3が一番強くなります。
(2が最も弱くなる。Joker除く)。
革命時に革命になると元に戻ります。`),t[e.ENABLE_KAIDAN_KAKUMEI]=c(`4枚以上の階段カードを出しても
革命を起こすことが可能になります。

※階段をONにしておく必要があります。`),t[e.ENABLE_KAKUMEI_CONTAIN_JOKER]=c(`代用したジョーカーが含まれていても
革命をおこせるか選択できます。`),t[e.ENABLE_KAKUMEI_KUDETA]=c(`9を3枚で革命。
※6を3枚で革命返しできるか選べます。`),t[e.ENABLE_KAKUMEI_OMEN]=c(`6を3枚で革命。
※以降革命が起こせなくなります。
8切りその他全ての特殊効果や縛りが
発生できなくなります。`),t[e.ENABLE_KAKUMEI_73]=c(`7を3枚で革命。`),t[e.ENABLE_KAIDAN]=c(`同じスートで3枚以上の連続したカードを
出すことができます。

別名、シークエンス、連番`),t[e.ENABLE_KAIDAN_NUM]=c(`2枚以上か3枚以上かを選ぶことができます。`),t[e.LEVEL_KAIDAN]=c(`次に出す階段カードが最初のカード以上か
最後のカード以上かを選べます`),t[e.ENABLE_KAIDAN_EMPEROR]=c(`4枚の異なるスートの連続したカードを出すこと`),t[e.ENABLE_SHIBARI_NUM]=c(`縛り発生が有効になる回数。
2回、3回選べます。`),t[e.ENABLE_SHIBARI_SUIT]=c(`同じスート(マーク)の
カードしか出せなくなります。
※複数枚出しの細かな設定は
「片しば」「両しば」で設定してください。`),t[e.ENABLE_SHIBARI_SUUJI]=c(`数字に対する縛り。
連続した数字が続くと
その次の数字しか出せなくなります。
例)6の場合、7、次は8等`),t[e.ENABLE_SHIBARI_SUIT_KATA]=c(`複数枚出した場合
スートが１つでも一致した場合
そのスートを含んだ組み合わせしか
出せなくなります。`),t[e.ENABLE_SHIBARI_SUIT_RYOU]=c(`全てのスートが完全一致した場合
発生します。
※完全一致のみ有効にしたい場合
「片しば」をOFFにしてください。`),t[e.ENABLE_SHIBARI_SUIT_GEKI]=c(`完しばと数字縛り
両方発生した場合に発生します。`),t[e.ENABLE_SHIBARI_TOTYU]=c(`場の途中から縛りを有効にできるか設定できます。

ex.1番目スペード,2番目ハート,3番目ハートで
縛り発生など`),t[e.JOKER_NUM]=c(`ジョーカーの枚数
0,1,2枚から選べます。

次のゲームから有効`),t[e.ENABLE_2_KINSHI_AGARI]=c(`2であがると大貧民になります。
革命、11バック時は3です。`),t[e.ENABLE_JOKER_KINSHI_AGARI]=c(`ジョーカーで上がるのを禁止します。
※代用の場合もNG`),t[e.ENABLE_8GIRI_KINSHI_AGARI]=c(`8切りであがるのを禁止します。

※8切りがONになってない場合
効果ありません`),t[e.ENABLE_11BACK_KINSHI_AGARI]=c(`11バックであがるのを禁止します。

※11バックがONになってない場合
効果ありません`),t[e.ENABLE_WATASHI_7_KINSHI_AGARI]=c(`7渡しで、カードを渡して上がるのを禁止します。
※基本ルールの枚数選択不可で
枚数が足りない場合の
反則あがりではありません。`),t[e.ENABLE_SUTE_10_KINSHI_AGARI]=c(`10捨てで、カードを捨てて上がるのを禁止します。
※基本ルールの枚数選択不可で
枚数が足りない場合の
反則あがりではありません。`),t[e.ENABLE_GAESHI_SPA3_KINSHI_AGARI]=c(`スペ3返しで上がるのを禁止します。
※普通にスペードの3複数枚であがるのはOKです。`),t[e.ENABLE_SUNAARASHI]=c(`3を3枚で場を流せます。`),t[e.ENABLE_99SYA]=c(`9を2枚で場を流せます。`),t[e.ENABLE_6KUBI]=c(`6を2枚で場を流せます。`),t[e.ENABLE_GAESHI_SPA3]=c(`単独のジョーカに対して
スペードの3で対抗できます。

※ジョーカーが他のカードの代用として
出された場合は対象外です。
※現状革命時も有効になってます。`),t[e.ENABLE_8GIRI_4DOME]=c(`8切りに対して倍の枚数の4で対抗することができます。

※2枚の8に対して4枚の4で自分の場流れに
できますが、その場合革命は起こりません。`),t[e.START]=c(`誰からはじめるかの
基準を決めることができます。`),t[e.ENABLE_MIYAKO_OCHI]=c(`大富豪が次も大富豪であがれない場合、
無条件に大貧民に降格します。
※既に禁止上がりで大貧民が
設定されてる場合、階級が繰り上がります`),t[e.ENABLE_GEKOKUJYO]=c(`大貧民が大富豪であがった場合、
ゲーム終了し全ての階級が逆転します。`),t[e.SWAP_TYPE]=c(`ゲーム開始前の交換
「同時交換」は全ての階級が同時に交換します。
「受け取ってから」にすると、
大富豪、富豪はカードを
大貧民、貧民から受け取ってから
交換することができます`),t.ResetRule=``,t.support=``}onClickIcon(e){}createData(){this.mControls={};var t=[{header:c(`基本(ポピュラーなもの)`),children:[{label:c(`8切り`),accessories:[this.createAccessoryCheckBox(e.ENABLE_KAIDAN_8GIRI,c(`階段時`)),this.createAccessoryOnOff(e.ENABLE_8GIRI)],icon:this.createIcon(e.ENABLE_8GIRI)},{label:c(`11バック`),accessories:[this.createAccessoryCheckBox(e.ENABLE_11BACK_STRONG,c(`強化11バック`)),this.createAccessoryOnOff(e.ENABLE_11BACK)],icon:this.createIcon(e.ENABLE_11BACK)},{label:c(`5スキップ`),accessories:[this.createAccessoryOnOff(e.ENABLE_SKIP_5)],icon:this.createIcon(e.ENABLE_SKIP_5)},{label:c(`13スキップ`),accessories:[this.createAccessoryOnOff(e.ENABLE_SKIP_13)],icon:this.createIcon(e.ENABLE_SKIP_13)},{label:c(`7渡し`),accessories:[this.createAccessoryCheckBox(e.ENABLE_WATASHI_7_MAISUU,c(`枚数選択`)),this.createAccessoryOnOff(e.ENABLE_WATASHI_7)],icon:this.createIcon(e.ENABLE_WATASHI_7)},{label:c(`10捨て`),accessories:[this.createAccessoryCheckBox(e.ENABLE_SUTE_10_MAISUU,c(`枚数選択`)),this.createAccessoryOnOff(e.ENABLE_SUTE_10)],icon:this.createIcon(e.ENABLE_SUTE_10)},{label:c(`9リバース`),accessories:[this.createAccessoryOnOff(e.ENABLE_REVERSE_9)],icon:this.createIcon(e.ENABLE_REVERSE_9)},{label:c(`Qリバース(12)`),accessories:[this.createAccessoryOnOff(e.ENABLE_REVERSE_12)],icon:this.createIcon(e.ENABLE_REVERSE_12)}]},{header:c(`革命`),children:[{label:c(`革命`),accessories:[this.createAccessoryOnOff(e.ENABLE_KAKUMEI)],icon:this.createIcon(e.ENABLE_KAKUMEI)},{label:c(`階段革命`),accessories:[this.createAccessoryOnOff(e.ENABLE_KAIDAN_KAKUMEI)],icon:this.createIcon(e.ENABLE_KAIDAN_KAKUMEI)},{label:c(`ジョーカーの使用`),accessories:[this.createAccessoryOnOff(e.ENABLE_KAKUMEI_CONTAIN_JOKER)],icon:this.createIcon(e.ENABLE_KAKUMEI_CONTAIN_JOKER)},{label:c(`クーデター`),accessories:[this.createAccessoryCheckBox(e.ENABLE_KAKUMEI_KUDETA_GAESHI_6,c(`6返し`)),this.createAccessoryOnOff(e.ENABLE_KAKUMEI_KUDETA)],icon:this.createIcon(e.ENABLE_KAKUMEI_KUDETA)},{label:c(`オーメン`),accessories:[this.createAccessoryOnOff(e.ENABLE_KAKUMEI_OMEN)],icon:this.createIcon(e.ENABLE_KAKUMEI_OMEN)},{label:c(`ナナサン革命`),accessories:[this.createAccessoryOnOff(e.ENABLE_KAKUMEI_73)],icon:this.createIcon(e.ENABLE_KAKUMEI_73)}]},{header:c(`階段`),children:[{label:c(`階段`),accessories:[this.createAccessoryOnOff(e.ENABLE_KAIDAN)],icon:this.createIcon(e.ENABLE_KAIDAN)}]},{header:c(`縛り`),children:[{label:c(`回数`),accessories:[this.createAccessoryPickerList(e.ENABLE_SHIBARI_NUM,[c(`2回連続`),c(`3回連続`)])],icon:this.createIcon(e.ENABLE_SHIBARI_NUM)},{label:c(`スート縛り`),accessories:[this.createAccessoryOnOff(e.ENABLE_SHIBARI_SUIT)],icon:this.createIcon(e.ENABLE_SHIBARI_SUIT)},{label:c(`片しば`),accessories:[this.createAccessoryOnOff(e.ENABLE_SHIBARI_SUIT_KATA)],icon:this.createIcon(e.ENABLE_SHIBARI_SUIT_KATA)},{label:c(`完しば(両しば)`),accessories:[this.createAccessoryOnOff(e.ENABLE_SHIBARI_SUIT_RYOU)],icon:this.createIcon(e.ENABLE_SHIBARI_SUIT_RYOU)},{label:c(`数字縛り`),accessories:[this.createAccessoryOnOff(e.ENABLE_SHIBARI_SUUJI)],icon:this.createIcon(e.ENABLE_SHIBARI_SUUJI)},{label:c(`激しば`),accessories:[this.createAccessoryOnOff(e.ENABLE_SHIBARI_SUIT_GEKI)],icon:this.createIcon(e.ENABLE_SHIBARI_SUIT_GEKI)},{label:c(`途中しばり`),accessories:[this.createAccessoryOnOff(e.ENABLE_SHIBARI_TOTYU)],icon:this.createIcon(e.ENABLE_SHIBARI_TOTYU)}]},{header:c(`禁止あがり`),children:[{label:c(`2あがり`),accessories:[this.createAccessoryOnOff(e.ENABLE_2_KINSHI_AGARI)],icon:this.createIcon(e.ENABLE_2_KINSHI_AGARI)},{label:c(`ジョーカーあがり`),accessories:[this.createAccessoryOnOff(e.ENABLE_JOKER_KINSHI_AGARI)],icon:this.createIcon(e.ENABLE_JOKER_KINSHI_AGARI)},{label:c(`「8切り」でのあがり`),accessories:[this.createAccessoryOnOff(e.ENABLE_8GIRI_KINSHI_AGARI)],icon:this.createIcon(e.ENABLE_8GIRI_KINSHI_AGARI)},{label:c(`「11バック」でのあがり`),accessories:[this.createAccessoryOnOff(e.ENABLE_11BACK_KINSHI_AGARI)],icon:this.createIcon(e.ENABLE_11BACK_KINSHI_AGARI)},{label:c(`「7渡し」(渡したカード)`),accessories:[this.createAccessoryOnOff(e.ENABLE_WATASHI_7_KINSHI_AGARI)],icon:this.createIcon(e.ENABLE_WATASHI_7_KINSHI_AGARI)},{label:c(`「10捨て」(捨てたカード)`),accessories:[this.createAccessoryOnOff(e.ENABLE_SUTE_10_KINSHI_AGARI)],icon:this.createIcon(e.ENABLE_SUTE_10_KINSHI_AGARI)},{label:c(`「スペ3返し」でのあがり`),accessories:[this.createAccessoryOnOff(e.ENABLE_GAESHI_SPA3_KINSHI_AGARI)],icon:this.createIcon(e.ENABLE_GAESHI_SPA3_KINSHI_AGARI)}]},{header:c(`ジョーカー`),children:[{label:c(`枚数`),accessories:[this.createAccessoryPickerList(e.JOKER_NUM,[c(`0枚`),c(`1枚`),c(`2枚`)])],icon:this.createIcon(e.JOKER_NUM)}]},{header:c(`場流れ系`),children:[{label:c(`ろくろ首(6を2枚)`),accessories:[this.createAccessoryOnOff(e.ENABLE_6KUBI)],icon:this.createIcon(e.ENABLE_6KUBI)},{label:c(`救急車(9を2枚)`),accessories:[this.createAccessoryOnOff(e.ENABLE_99SYA)],icon:this.createIcon(e.ENABLE_99SYA)},{label:c(`砂嵐(3を3枚)`),accessories:[this.createAccessoryOnOff(e.ENABLE_SUNAARASHI)],icon:this.createIcon(e.ENABLE_SUNAARASHI)}]},{header:c(`返し系`),children:[{label:c(`スペ３返し(Joker)`),accessories:[this.createAccessoryOnOff(e.ENABLE_GAESHI_SPA3)],icon:this.createIcon(e.ENABLE_GAESHI_SPA3)},{label:c(`４止め(8切り)`),accessories:[this.createAccessoryOnOff(e.ENABLE_8GIRI_4DOME)],icon:this.createIcon(e.ENABLE_8GIRI_4DOME)}]},{header:c(`スタート`),children:[{label:c(`最初の順番`),accessories:[this.createAccessoryPickerList(e.START,[c(`スペードの３`),c(`クラブの３`),c(`ハートの３`),c(`ダイヤの３`),c(`大貧民`),c(`自分から`)])],icon:this.createIcon(e.START)}]},{header:c(`ゲーム全体`),children:[{label:c(`交換`),accessories:[this.createAccessoryPickerList(e.SWAP_TYPE,[c(`OFF`),c(`同時交換`),c(`受け取ってから`)])],icon:this.createIcon(e.SWAP_TYPE)},{label:c(`都落ち`),accessories:[this.createAccessoryOnOff(e.ENABLE_MIYAKO_OCHI)],icon:this.createIcon(e.ENABLE_MIYAKO_OCHI)},{label:c(`下克上`),accessories:[this.createAccessoryOnOff(e.ENABLE_GEKOKUJYO)],icon:this.createIcon(e.ENABLE_GEKOKUJYO)}]},{header:c(`その他`),children:[{label:c(`ルールの初期化`),accessories:[this.createAccessoryButton(`Reset`,c(`リセット`))]},{label:c(`シェア`),accessories:[this.createAccessoryButton(`friend`,c(`友人に勧める`)),this.createAccessoryButton(`follow`,c(`フォローする`))]},{label:c(`レビューを書く`),accessories:[this.createAccessoryButton(`WriteReview`,c(`書　く`))]},{label:c(`追加希望、バグ報告`),accessories:[this.createAccessoryButton(`support`,c(`Twitterで`))]}]}],n;for(n=0;n<t.length;n++)t[n].header=n+1+`. `+t[n].header;return t}onClickButton(e){switch(e.key){case`ResetRule`:break;case`support`:a.i.isIOS();break;case`WriteReview`:break;case`friend`:break;case`follow`:window.open(r.TWITTER_FOLLOW_URL,`_blank`)}}updateRelationalControlDisabled(t){t[e.ENABLE_WATASHI_7_MAISUU].isEnabled=t[e.ENABLE_WATASHI_7].value,t[e.ENABLE_SUTE_10_MAISUU].isEnabled=t[e.ENABLE_SUTE_10].value,t[e.ENABLE_KAKUMEI_KUDETA_GAESHI_6].isEnabled=this.mControls[e.ENABLE_KAKUMEI_KUDETA].value,t[e.ENABLE_KAIDAN_8GIRI].isEnabled=t[e.ENABLE_8GIRI].value,t[e.ENABLE_SHIBARI_SUIT_KATA].isEnabled=t[e.ENABLE_SHIBARI_SUIT].value,t[e.ENABLE_SHIBARI_SUIT_RYOU].isEnabled=t[e.ENABLE_SHIBARI_SUIT].value,t[e.ENABLE_11BACK_STRONG].isEnabled=t[e.ENABLE_11BACK].value}getValue(n){var r=this.sendCmd(i.create(t.GET_RULE,[n])),a=s.get(r.recvData).value;return n==e.ENABLE_KAIDAN_NUM&&(a-=2),n==e.ENABLE_SHIBARI_NUM&&(a-=2),a}setValue(t,n){t==e.ENABLE_KAIDAN_NUM&&(n+=2),t==e.ENABLE_SHIBARI_NUM&&(n+=2),this.setRuleInternal(t,n),t==e.ENABLE_11BACK&&this.setRuleInternal(e.ENABLE_KAIDAN_11BACK,n),t==e.ENABLE_SKIP_5&&this.setRuleInternal(e.ENABLE_KAIDAN_SKIP_5,n),t==e.ENABLE_SKIP_13&&this.setRuleInternal(e.ENABLE_KAIDAN_SKIP_13,n),t==e.ENABLE_WATASHI_7&&this.setRuleInternal(e.ENABLE_KAIDAN_WATASHI_7,n),t==e.ENABLE_SUTE_10&&this.setRuleInternal(e.ENABLE_KAIDAN_SUTE_10,n),t==e.ENABLE_REVERSE_9&&this.setRuleInternal(e.ENABLE_KAIDAN_REVERSE_9,n),t==e.ENABLE_REVERSE_12&&this.setRuleInternal(e.ENABLE_KAIDAN_REVERSE_12,n),t==e.ENABLE_2_KINSHI_AGARI&&(this.setRuleInternal(e.ENABLE_KAIDAN_2_KINSHI_AGARI,n),this.setRuleInternal(e.ENABLE_KAKUMEI_11BACK_2_KINSHI_AGARI,n),this.setRuleInternal(e.ENABLE_KAIDAN_KAKUMEI_11BACK_2_KINSHI_AGARI,n),this.setRuleInternal(e.ENABLE_KAKUMEI_3_KINSHI_AGARI,n),this.setRuleInternal(e.ENABLE_KAIDAN_KAKUMEI_3_KINSHI_AGARI,n),this.setRuleInternal(e.ENABLE_11BACK_3_KINSHI_AGARI,n),this.setRuleInternal(e.ENABLE_KAIDAN_11BACK_3_KINSHI_AGARI,n)),t==e.ENABLE_JOKER_KINSHI_AGARI&&this.setRuleInternal(e.ENABLE_KAIDAN_JOKER_KINSHI_AGARI,n),t==e.ENABLE_8GIRI_KINSHI_AGARI&&this.setRuleInternal(e.ENABLE_KAIDAN_8GIRI_KINSHI_AGARI,n),t==e.ENABLE_11BACK_KINSHI_AGARI&&this.setRuleInternal(e.ENABLE_KAIDAN_11BACK_KINSHI_AGARI,n),t==e.ENABLE_WATASHI_7_KINSHI_AGARI&&this.setRuleInternal(e.ENABLE_KAIDAN_WATASHI_7_KINSHI_AGARI,n),t==e.ENABLE_SUTE_10_KINSHI_AGARI&&this.setRuleInternal(e.ENABLE_KAIDAN_SUTE_10_KINSHI_AGARI,n)}setRuleInternal(e,n){this.sendCmd(i.create(t.SET_RULE,[e,n]))}resetData(){this.sendCmd(i.create(t.RESET_RULE))}onSetting(){}onQuit(e){n.i.play(`kachi03.mp3`,.8,`System`)}};export{l as default};