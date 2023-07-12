
function printTri() {
    let n = parseInt(nor.value);


    // upper triangle
    for (i = 1; i <= n; i++) {
        for (j = 1; j <= i; j++) {
            // document.write("*");  OR
            // document.write(" "+i);  OR
            // document.write(" "+j);  OR
            document.write("&#128512");

        }
        document.write("<br>");
    }

// lower triangle

    for (i = n-1; i >=1; i--) {
        for (j = 1; j <= i; j++) {
            // document.write("*");  OR
            // document.write(" "+i);  OR
            // document.write(" "+j);  OR
            document.write("&#128512");

        }
        document.write("<br>");
    }
}