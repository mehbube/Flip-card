// let x = "Salam"

// switch (x) {
//     case "Salam":
//         console.log("Salam Dunya");
//         break;
//     case "Hello":
//         console.log("Hello World");
//         break
//     default:
//         console.log("JGHKJKNLKN");;
// }

// let day = new Date("2021-08-21")
// let gun = day.getDay()
// let text = ""

// switch (gun) {
//     case 0:
//         text = "Sunday"
//         break;
//     case 1:
//         text = "Monday"
//         break;
//     case 2:
//         text = "Tuesday"
//         break;
//     case 3:
//         text = "Wednesday"
//         break;
//     case 4:
//         text = "Thirsday"
//         break;
//     case 5:
//         text = "Friday"
//         break;
//     case 6:
//         text = "Saturday"
//         break;
//     default:
//         break;
// }
// console.log(text);



let images = ["html", "css", "js", "react"]

images = images.concat(images).sort((a, b) => Math.random() - 0.5)
let selected = []
images.map(e => {
    $(".row").append(
        `
            <div class="col-3 mt-2">

                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="https://www.falderyasi.com/medya/tarot/adalet-tarot-karti-www.falderyasi.com.png">
                        </div>


                        <div class="flip-card-back">
                            <div class="flip-card-second">
                                <img src="images/${e}.png" class="backImage">
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        `
    )
})

$(".flip-card").click(function () {
    $(this).find(".flip-card-inner").addClass("active");
    selected.push($(this).find(".flip-card-second img").attr("src"));
    console.log(selected);

    if (selected[0] && selected[1]) {
        if (selected[0] === selected[1]) {
            $(`[src="${selected[0]}"]`)
                .parents(".flip-card-inner")
                .addClass("matched");
        } else {
            setTimeout(() => {
                $(".active").not(".matched").removeClass("active");
            }, 900);
        }
        selected = [];
    }
    yoxla()
});

function yoxla() {
    if ($(".flip-card-inner").length == $(".matched").length) {
        setTimeout(() => {
            alert("qalib")
            $(".flip-card-inner").removeClass("active")

        }, 500);
    }
}