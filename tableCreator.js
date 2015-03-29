var createTable = (function(){

function table(arr, op) {

    var place = (op && op.place) || document.body,
        table = cr('TABLE'),
        tableBody = cr('TBODY'),
        nCols = arr.cols || arr.length,
        nRows = arr.length / nCols,
        klass = (op && op.class) || "reference",
        tr, td, row, col, data_text, cap, menu
        //op&&op.title&&table.createCaption(op.caption)
        //w(op&&op.caption)
    caption = cr('CAPTION', '')
    cap = cr('span', op.caption)
    menu = cr('span', 'menu')
    append(cap, caption)
    append(menu, caption)
    op && op.caption && append(caption, table)

    ///table.border='1';
    for (row = 0; row < nRows; row++) {
        tr = cr('TR')
        for (col = 0; col < nCols; col++) {
            data_text = a[row * nCols + col]
                // print undef as 0
            if (data_text === undefined) data_text = 0
            td = cr('TD', data_text)
            append(td, tr)
        }
        append(tr, tableBody);
    } else {
        tr = cr('TR')
        td = cr('TD', a)
        append(td, tr)
        append(tr, tableBody)
    }
    table.classList.add("reference");
    append(tableBody, table, place)
}

function cr(e, txt) {
    var el
    if (arguments.length === 2) {
        el = document.createElement(e)
        append(document.createTextNode(txt), el)
    } else {
        el = document.createElement(e)
    }
    return el
}

function append(a, b, c) {
    if (arguments.length === 2)
        b.appendChild(a);
    if (arguments.length === 3) {
        b.appendChild(a);
        c.appendChild(b)
    }
}
return table
})()
