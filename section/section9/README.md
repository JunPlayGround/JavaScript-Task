# まとめテスト

- q1: exampleData.js のようなデータを引数に取り、userId だけを切り出した配列を戻り値とする関数を作ってください。ただし、同じ userId は 1 度だけ配列に入れ、重複がないようにしてください。
  e.g.exampleData.js が引数に入った場合、戻り値として[1, 30000, 123456]を返す

- 難しい問題なのでヒントを示しますが、取り組みから 15 分程度はヒントなしで考えたり調べたりして、解決できなそうであればヒントを見てください。それでもわからない場合は、ヒントから何を実行したかを記して質問してください。また、ヒントはあくまで一例なので、ヒント通りに解かなければならないということはありません。

<details><summary>Hint1(方針が全くわからない人向け)</summary>userIdの情報を取得するためには、配列の中のオブジェクト(連想配列)を取得した上で、そのuserIdというkeyを取る必要があります。配列の中の各要素を取り出す方法は何種類かありますが、userIdを取り出すのようにデータの加工に向いている方法はどれか考えてみてください。まずは、重複を許してuserIdを配列に入れることを目標にしてみてください。</details>
<details><summary>Hint2(途中までできた人向け)</summary>重複を許して配列に入れることができたら、その状態で重複しているuserIdを取り除けば良いですよね。もしくは、新しく配列を作っておいて、重複がないように値を追加するという方法もあります。</details>

- q2: exampleData.js のようなデータを引数に取り、userId と、その userId の人が書いた title と body と id をまとめた配列(exampleOutput.js)に組み直してください。
<details><summary>Hint1(方針が全くわからない人向け)</summary>userIdの出力は前問でできているので、前問の戻り値は使えないか考えてみてください。</details>
<details><summary>Hint2(途中までできた人向け)</summary>Hint1で紹介した配列の各要素と、引数の配列内のオブジェクト(連想配列)のuserIdを比較して同じuserIdであるものを抽出してみましょう。また、最後にuserIdとdatasというオブジェクト(連想配列)を作る方法も、データの加工はどうやれば良いのかを考えればできると思います。</details>