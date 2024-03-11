let s = Number(0);
let d = Number(0);
let d1 = Number(0);
arr = ["A" , "C" ,"A" , "D" , "D" , "B"];
function checkAnswer(selectedOption) {
    d = Number(d) + Number(1);
    switch(d){
        case 1:
            if (selectedOption === arr[d-1]) {
                s = Number(s) + Number(1);
            }
            break;
        case 2:
            if (selectedOption === arr[d-1]) {
                s = Number(s) + Number(1);
            }
            break;
        case 3:

        if (selectedOption === arr[d-1]) {
            s = Number(s) + Number(1);
        }
            break;
        case 4:
            if (selectedOption === arr[d-1]) {
                s = Number(s) + Number(1);
            }
            break;
        case 5:
           
        if (selectedOption === arr[d-1]) {
            s = Number(s) + Number(1);
        }
            break;
        case 6:
            if (selectedOption === arr[d-1]) {
                s = Number(s) + Number(1);
            }
            break;

        case 7:
            check();
            break;
    }
}

function goToNextQuestion() {
    d1 = Number(d1) + Number(2);

    arr2 = ["2. Berilga uchburchakning tomonlari 5 , 7 , 8 sm bo'lib , peremetrini aniqlang" , "A. 21 sm" , "B. 19 sm" , "C. 20 sm" , "D. 24 sm"]
    arr3 = ["3. Uchburchakning 60 gradusli uchidan bissektrissa o'tkazildi, bissektrissa burchakni nechi gradusga bo'ldi?" , "A. 30" , "B. 40" , "C. 50" , "D. 60"]
    arr4 = ["4. To'gri burchakli uchburchakning yuzasi 12 sm kv bo'lsa, uning gipotenuzaga tushgan balandligi 4 sm . Gipotenuzani toping" , "A. 5 sm" , "B. 7 sm" , "C. 8 sm" , "D. 6 sm"]
    arr5 = ["5. Teng yonli uchburchakning uchidan balandlik tushdi. Tushgan burchakni anqilang" , "A. 89" , "B. 91" , "C. 93" , "D. 90"]
    arr6 = ["6. Muntazam uchburchaking barcha burchaklarni toping" , "A. 50 , 40 , 50" , "B. 60 , 60 , 60" , "C. 60 , 60 , 30" , "D. 60 , 46, 56"]

    switch(d1){
        case 2:
            d1 = Number(d1) - Number(1);
            let q = document.getElementById("question")
            let A = document.getElementById("A")
            let B = document.getElementById("B")
            let C = document.getElementById("C")
            let D = document.getElementById("D")
            
            A.textContent = arr2[1]
            B.textContent = arr2[2]
            C.textContent = arr2[3]
            D.textContent = arr2[4]
            q.textContent = arr2[0];
            break;
        case 3:
            d1 = Number(d1) - Number(1);
            let q1 = document.getElementById("question")
            let A1 = document.getElementById("A")
            let B1 = document.getElementById("B")
            let C1 = document.getElementById("C")
            let D1 = document.getElementById("D")
            
            A1.textContent = arr3[1]
            B1.textContent = arr3[2]
            C1.textContent = arr3[3]
            D1.textContent = arr3[4]
            q1.textContent = arr3[0];
            break;
        case 4:
            d1 = Number(d1) - Number(1);
            let q2 = document.getElementById("question")
            let A2 = document.getElementById("A")
            let B2 = document.getElementById("B")
            let C2 = document.getElementById("C")
            let D2 = document.getElementById("D")
            
            A2.textContent = arr4[1]
            B2.textContent = arr4[2]
            C2.textContent = arr4[3]
            D2.textContent = arr4[4]
            q2.textContent = arr4[0];
            break;
        case 5:
            d1 = Number(d1) - Number(1);
            let q3 = document.getElementById("question")
            let A3 = document.getElementById("A")
            let B3 = document.getElementById("B")
            let C3 = document.getElementById("C")
            let D3 = document.getElementById("D")
            
            A3.textContent = arr5[1]
            B3.textContent = arr5[2]
            C3.textContent = arr5[3]
            D3.textContent = arr5[4]
            q3.textContent = arr5[0];
            break;
        case 6:
            d1 = Number(d1) - Number(1);
            let q4 = document.getElementById("question")
            let A4 = document.getElementById("A")
            let B4 = document.getElementById("B")
            let C4 = document.getElementById("C")
            let D4 = document.getElementById("D")
            
            A4.textContent = arr6[1]
            B4.textContent = arr6[2]
            C4.textContent = arr6[3]
            D4.textContent = arr6[4]
            q4.textContent = arr6[0];
            break;

        case 7:
            check();
            break;
        }

  
}

function check(){
    let a = document.getElementById('hidden');
    a.textContent = s + ' correct answers';

    document.getElementById('question').style.display = 'none';
    document.getElementById('options').style.display = 'none';
    document.getElementById('nextbtn').style.display = 'none';
    document.getElementById('back').hidden = false;
    document.getElementById('check').hidden = true;

    document.getElementById('bigContainer').style.position = 'absolute';

}

function back(){
    window.location.href = "home.html";
}