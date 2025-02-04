function copyText(id) {
    if (id === 'mail') {
        var text = "sarinasadeghi8181@gmail.com";
        // else if (id === 'phone')
        //     var text = "09934344245";

        navigator.clipboard.writeText(text).then(function () {
            alert("متن با موفقیت کپی شد");
        });
    } else {
        alert("موجود نیست");
    }
}