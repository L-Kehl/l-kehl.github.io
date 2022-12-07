let heart = document.querySelector('.heart')
let card = document.querySelector('.card')
let box = document.querySelector('#box')
heart.addEventListener('click', function () {
    card.setAttribute("style", "display:none");
    let x = document.createElement("audio");
    x.setAttribute("src", "nana.mp3");
    x.setAttribute("autoplay", "autoplay");
    // 背景出现
    function appearBackground() {
        setTimeout(() => {
            box.style.opacity = 1
        }, 1000)
    }
    appearBackground()

    // 打字效果
    let i = 0
    let str = '我愛你'
    let strp = ''

    function print() {
        if (str[i] == '<') {
            strp += "<br><br>";
            document.getElementById("box").innerHTML = strp;
        }
        else {
            strp += str[i];
            box.innerHTML = strp + '|';
        }
        i++;
    }

    setTimeout(() => {
        let printid = setInterval(() => {
            print();
            if (i == str.length)
                clearInterval(printid);

        }, 190);  // 190毫秒打一个字，其实细心发现的话，这个项目还是有个小小的bug，无法用语言描述这个bug，如果你想优化的话 有一种简单的方法就是调快打字的速度，这样那个bug看起来就不会很明显,我太菜了 不会改那个bug
    }, 5500);  //5500毫秒开始打字
})
