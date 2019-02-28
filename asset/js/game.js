window.onload = (
    //
    function generatedBoard() {
        const values = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
        const player = ["1", "2"]
        var items = [0, 25, 50];
        const nilaiKartu1 = []
        for (let i = 0; i < 5; i++) {
            let min = -50
            let att = Math.floor(Math.random() * Math.floor(500-min)+min);
            nilaiKartu1.push(att)
        }
        const nilaiKartu2 = []
        for (let i = 0; i < 5; i++) {
            let min = -50
            let att = Math.floor(Math.random() * Math.floor(500-min)+min);
            nilaiKartu2.push(att)
        }

        for (i = 0; i < 2; i++) {
            var baris = document.createElement("raw");
            var att1 = document.createAttribute("class");
            att1.value = `baris`
            baris.setAttributeNode(att1)
            document.getElementById("board").appendChild(baris);
            for (j = 0; j < 5; j++) {
                var div1 = document.createElement("div");
                var att1 = document.createAttribute("class");
                att1.value = `card ${player[i]}${values[j]}`
                div1.setAttributeNode(att1)
                document.getElementsByClassName(`baris`)[i].appendChild(div1);

                var div2 = document.createElement("div");
                var att1 = document.createAttribute("class");
                att1.value = `card__face front`
                div2.setAttributeNode(att1)
                document.getElementsByClassName(`card ${player[i]}${values[j]}`)[0].appendChild(div2);

                var div3 = document.createElement("div");
                var att1 = document.createAttribute("class");
                att1.value = `card__face back`
                div3.setAttributeNode(att1)
                document.getElementsByClassName(`card ${player[i]}${values[j]}`)[0].appendChild(div3);
                if (i == 0) {
                    document.getElementsByClassName("back")[j].innerHTML = nilaiKartu1[j];
                } else if (i == 1) {
                    document.getElementsByClassName("back")[j + 5].innerHTML = nilaiKartu2[j];
                }
            };
            var enter = document.createElement("br");
            document.getElementById("board").appendChild(enter);
        };
        var card = document.querySelectorAll('.card');
        var scorePlayer1 = 0;
        var scorePlayer2 = 0;
        var count = 0
        for (let i = 0; i < card.length; i++) {
            card[i].addEventListener('click', function () {
                count = count + 1;
                // console.log(count)
                card[i].classList.toggle('is-flipped')
                card[i].classList.toggle('disabled')
                if (i < 5) {
                    scorePlayer1 = scorePlayer1 + nilaiKartu1[i];
                    var scoreP1 = document.createElement("span");
                    scoreP1.innerHTML = scorePlayer1;
                    var br = document.createElement("br");
                    document.getElementsByClassName("player1")[0].appendChild(scoreP1);
                    document.getElementsByClassName("player1")[0].appendChild(br);
                    if (count == 10) {gameResult(scorePlayer1, scorePlayer2)};
                } else {
                    scorePlayer2 = scorePlayer2 + nilaiKartu2[i - 5];
                    var scoreP2 = document.createElement("span");
                    scoreP2.innerHTML = scorePlayer2;
                    var br1 = document.createElement("br");
                    document.getElementsByClassName("player2")[0].appendChild(scoreP2);
                    document.getElementsByClassName("player2")[0].appendChild(br1);
                    if (count == 10) {gameResult(scorePlayer1, scorePlayer2)};
                };
            })
            
            // 
        }; 
        // gameResult(scorePlayer1, scorePlayer2)

    });