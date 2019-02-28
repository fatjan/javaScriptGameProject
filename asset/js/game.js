window.onload = (
    // Fungsi untuk generate Board, Pemain dan Aturan Mainnya
    function generatedBoard() {

        const values = ["one", "two", "three", "four", "five"];
        const player = ["1", "2"]

        // Generate Kartu untuk Player 1
        const nilaiKartu1 = []
        for (let i = 0; i < 5; i++) {
            let min = -50
            let att = Math.floor(Math.random() * Math.floor(500 - min) + min);
            nilaiKartu1.push(att)
        }

        // Generate Kartu untuk Player 2
        const nilaiKartu2 = []
        for (let i = 0; i < 5; i++) {
            let min = -50
            let att = Math.floor(Math.random() * Math.floor(500 - min) + min);
            nilaiKartu2.push(att)
        }

        // Generate element raw dengan attribute class = "baris" untuk kedua player
        for (i = 0; i < 2; i++) {
            var baris = document.createElement("raw");
            var att1 = document.createAttribute("class");
            att1.value = `baris`
            baris.setAttributeNode(att1)
            document.getElementById("board").appendChild(baris);

            // Generate element div dengan class = "card" sebanyak 5 untuk masing-masing player
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

        // Flipping Card
        var card = document.querySelectorAll('.card');
        var scorePlayer1 = 0;
        var scorePlayer2 = 0;
        var count = 0
        var nilai1 = 0
        var nilai2 = 0
        for (let i = 0; i < card.length; i++) {
            // Fungsi untuk flip card onclick
            card[i].addEventListener('click', function () {
                count = count + 1;
                card[i].classList.toggle('is-flipped')

                // varibel untuk menyimpan nilai kartu yang baru di-flip
                if (i < 5) {
                    nilai1 = nilaiKartu1[i];
                } else {
                    nilai2 = nilaiKartu2[i - 5];
                };

                // logika untuk menampilkan hasil dari tiap turn player
                if (count % 2 == 0 && count < 11) {
                    var hasil1 = 0
                    var hasil2 = 0
                    if (nilai1 > nilai2) {
                        hasil1 = nilai1 - nilai2
                        scorePlayer1 = scorePlayer1 + nilai1 - nilai2
                    } else if (nilai1 < nilai2) {
                        hasil2 = nilai2 - nilai1
                        scorePlayer2 = scorePlayer2 + nilai2 - nilai1
                    }
                    var scoreP1 = document.createElement("span");
                    scoreP1.innerHTML = hasil1;
                    var br = document.createElement("br");
                    document.getElementsByClassName("player1")[0].appendChild(scoreP1);
                    document.getElementsByClassName("player1")[0].appendChild(br);

                    var scoreP2 = document.createElement("span");
                    scoreP2.innerHTML = hasil2;
                    var br1 = document.createElement("br");
                    document.getElementsByClassName("player2")[0].appendChild(scoreP2);
                    document.getElementsByClassName("player2")[0].appendChild(br1);

                    // Menampilkan score Win Player dan Total Score
                    if (count == 10) {
                        gameResult(scorePlayer1, scorePlayer2) // Memanggil fungsi gameResult

                        var scoreP1 = document.createElement("span");
                        scoreP1.innerHTML = `Total Score: ${scorePlayer1}`;
                        var br1 = document.createElement("br");
                        document.getElementsByClassName("player1")[0].appendChild(scoreP1);

                        var scoreP2 = document.createElement("span");
                        scoreP2.innerHTML = `Total Score: ${scorePlayer2}`;
                        var br1 = document.createElement("br");
                        document.getElementsByClassName("player2")[0].appendChild(scoreP2);
                    };
                }
            })

        };

    });