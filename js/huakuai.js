window.onload = function () {

    var huakuai = document.getElementById('huakuai'); //长线条
    var anniu = document.getElementById('anniu'); //小方块
    // var msg = document.getElementById("msg");
    var vals = document.getElementById("vals");
    var ifBool = false; //判断鼠标是否按下
    //事件
    var start = function (e) {
        e.stopPropagation();
        ifBool = true;
        console.log("鼠标按下")
    }
    var move = function (e) {
        console.log("鼠标拖动")
        if (ifBool) {
            if (!e.touches) {    //兼容移动端
                var x = e.clientX;
            } else {     //兼容PC端
                var x = e.touches[0].pageX;
            }
            //var x = e.touches[0].pageX || e.clientX; //鼠标横坐标var x
            var huakuai_left = getPosition(huakuai).left; //长线条的横坐标
            var anniu_left = x - huakuai_left; //小方块相对于父元素（长线条）的left值
            if (anniu_left >= huakuai.offsetWidth - 15) {
                anniu_left = huakuai.offsetWidth - 15;
            }
            if (anniu_left < 0) {
                anniu_left = 0;
            }
            //设置拖动后小方块的left值
            anniu.style.left = anniu_left + "px";
            //     msg.innerText = parseInt((anniu_left / (huakuai.offsetWidth - 15)) * 100);
            //     vals.innerText = parseInt((anniu_left / (huakuai.offsetWidth - 15)) * 100);
        }
    }
    var end = function (e) {
        console.log("鼠标弹起")
        ifBool = false;
    }
    //鼠标按下方块
    anniu.addEventListener("touchstart", start);
    anniu.addEventListener("mousedown", start);
    //拖动
    window.addEventListener("touchmove", move);
    window.addEventListener("mousemove", move);
    //鼠标松开
    window.addEventListener("touchend", end);
    window.addEventListener("mouseup", end);

    //获取元素的绝对位置
    function getPosition(node) {
        var left = node.offsetLeft; //获取元素相对于其父元素的left值var left
        var top = node.offsetTop;
        current = node.offsetParent; // 取得元素的offsetParent
        // 一直循环直到根元素

        while (current != null) {
            left += current.offsetLeft;
            top += current.offsetTop;
            current = current.offsetParent;
        }
        return {
            "left": left,
            "top": top
        };
    }
}
