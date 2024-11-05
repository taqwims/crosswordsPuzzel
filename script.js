// Update the script.js file
(function($) {
    $(function() {
        var puzzleData = [
            {
                clue: "Laut di sebelah selatan pulau papua.",
                answer: "arafura",
                position: 1,
                orientation: "across",
                startx: 4,
                starty: 2
            },
            {
                clue: "Provinsi paling timur di Indonesia.",
                answer: "papua",
                position: 2,
                orientation: "down",
                startx: 4,
                starty: 1
            },
            {
                clue: "kota pahlawan",
                answer: "surabaya",
                position: 3,
                orientation: "across",
                startx: 1,
                starty: 5
            },
            {
                clue: "Penghargaan bagi yang berjasa melestarikan lingkungan hidup.",
                answer: "kalpataru",
                position: 4,
                orientation: "down",
                startx: 10,
                starty: 1
            },
            {
                clue: "Ibu kota Jawa Tengah.",
                answer: "semarang",
                position: 5,
                orientation: "across",
                startx: 1,
                starty: 7
            },
            {
                clue: "jembatan di kalimantan selatan.",
                answer: "barito",
                position: 6,
                orientation: "down",
                startx: 5,
                starty: 5
            },
            {
                clue: "pendiri budi utomo.",
                answer: "sutomo",
                position: 7,
                orientation: "across",
                startx: 2,
                starty: 10
            },
            {
                clue: "Ibu kota provinsi sulawesi barat",
                answer: "mamuju",
                position: 8,
                orientation: "down",
                startx: 3,
                starty: 7
            },
            {
                clue: "Tarian khas sunda.",
                answer: "jaipong",
                position: 9,
                orientation: "across",
                startx: 6,
                starty: 12
            },
            {
                clue: "rumah adat papua.",
                answer: "honai",
                position: 10,
                orientation: "down",
                startx: 7,
                starty: 9
            }
        ];

        $('#puzzle-wrapper').crossword(puzzleData);

        // Add solution checking functionality
        $('#show-solution').click(function() {
            puzzleData.forEach(function(entry, index) {
                const answer = entry.answer.toLowerCase();
                const position = entry.position - 1;
                
                // Fill in each letter of the answer
                $('.position-' + position + ' input').each(function(i) {
                    $(this).val(answer[i]);
                });
            });
            
            // Show completion message
            swal("Solusi Teka-Teki", "Semua jawaban telah ditampilkan!", "info");
        });

        // Add points checking functionality
        $('#check-points').click(function() {
            let currentPoints = 0;
            let totalCorrect = 0;

            puzzleData.forEach(function(entry, index) {
                const position = entry.position - 1;
                const answer = entry.answer.toLowerCase();
                
                // Get current input values
                const currentAnswer = $('.position-' + position + ' input')
                    .map(function() {
                        return $(this).val().toLowerCase();
                    })
                    .get()
                    .join('');

                // Check if answer is correct
                if (currentAnswer === answer) {
                    currentPoints += 10;
                    totalCorrect++;
                }
            });

            // Show points summary
            swal("Total Poin", 
                 `Jawaban Benar: ${totalCorrect} dari ${puzzleData.length}\n` +
                 `Total Poin: ${currentPoints}`, 
                 "success");
        });
    });
})(jQuery)