$(document).on('ready', function () {
    for (i = 1; i < 7; i++) {
        $('#input-' + i).rating({
            stars: 3,
            min: 0,
            max: 3,
            size: 'xs',
            starCaptions: {
                0.5: 'Half Star',
                1: 'One Star',
                1.5: 'One & Half Star',
                2: 'Two Stars',
                2.5: 'Two & Half Stars',
                3: 'Three Stars'
            }

        });
        $("#input-" + i).rating().on("rating.clear", function (event) {
            alert("Your rating is reset")
        }).on("rating.change", function (event, value, caption) {
            alert("You rated: " + value + " = " + $(caption).text());
        });
    }
});