
import "./css/common.css";
import "./css/index.css";
import "./swiper/swiper-3.4.2.min.css";
import "./swiper/swiper-3.4.2.min";
$(() => {
    banner();
    getNetEvent();
    getCartDataEvent();
    login();
});
let banner = () => {

    let i = 0;
    let arr = ["./src/image/banner0.jpg","./src/image/banner1.jpg","./src/image/banner2.jpg","./src/image/banner3.jpg","./src/image/banner4.jpg"]
    //banner轮播
    let timer = setInterval(()=>{
        if(i > 4){
            i = 0;
        }
        $(".banner .img").attr("src",arr[i]);
        $(".name_item").css("border","none");
        $(".name_item:eq("+i+")").css("border","3px solid black");
        i++;
    },5000);

    //左右按钮事件
    $(".banner .left").click(() => {
        i--;
        if(i < 0){
            i = arr.length - 1;
        }

        $(".banner .img").attr("src",arr[i]);
    });
    $(".banner .right").click(() => {
        i++;
        if(i > 4){
            i = 0;
        }
        $(".banner .img").attr("src",arr[i]);
    });
    //name_item的事件
    for(let j = 0;j < $(".name_item").length; j++){
        $(".name_item:eq("+j+")").mouseenter(()=>{
            $(".name_item").css("border","none");
            $(".name_item:eq("+j+")").css("border","3px solid black");
            $(".banner .img").attr("src",arr[j]);
        })
    }
}


let data = {
    status:"sucess",
    getAndpost:[123465,345],
    data:[
        {"北京":[1234,234]},
        {"北京":[1234,234]},

        {"北京":[1234,234]},
        {"北京":[1234,234]},
        {"北京":[1234,234]}]
}


let getNetEvent = () => {
    data&&dealdata(data);
    function dealdata(data) {
        $("#getData").text(`本月累计接收数据${data.getAndpost[0]}条`);
        $("#postData").text(`本月累计接收数据${data.getAndpost[1]}条`);
        $("#form_info").load("./src/common/index_item.html",(e) => {
            $("#form_info").html("");
            for(let i = 0;i < data.data.length;i++){
                $("#form_info").append(e)
            }
        })

    }
}

let data_cart = {
    status:"sucess",
    getCity:"北京",
    data:[
        {"company":"北京图为先科技有限公司","drivernumber":200,"driverData":220},
        {"company":"百度","drivernumber":200,"driverData":220},
        {"company":"阿里巴巴","drivernumber":200,"driverData":220},
        {"company":"腾讯","drivernumber":200,"driverData":220},
        {"company":"网易","drivernumber":200,"driverData":220},
        {"company":"搜狐","drivernumber":200,"driverData":220},
        {"company":"今日头条","drivernumber":200,"driverData":220},
        {"company":"Boss直聘","drivernumber":200,"driverData":220},
        {"company":"四维图新","drivernumber":200,"driverData":220},
        {"company":"北京图为先科技有限公司","drivernumber":200,"driverData":220},
        {"company":"百度","drivernumber":200,"driverData":220},
        {"company":"阿里巴巴","drivernumber":200,"driverData":220},
        {"company":"腾讯","drivernumber":200,"driverData":220},
        {"company":"网易","drivernumber":200,"driverData":220},
        {"company":"搜狐","drivernumber":200,"driverData":220},
        {"company":"今日头条","drivernumber":200,"driverData":220},
        {"company":"Boss直聘","drivernumber":200,"driverData":220},
        {"company":"四维图新","drivernumber":200,"driverData":220}
        ]
}

let getCartDataEvent = () => {
    data_cart&&dealdata(data_cart);

    function dealdata(data_cart) {
        $("#form_cart").html("");
        $("#form_cart").load("./src/common/index_title.html",function (e) {

            for(let i = 0;i < data_cart.data.length;i++){
                $("#form_cart").append(`
                    <div class="form_info_item font_size_14">
                        <span class="width_120 nowrap">${data_cart.data[i].company}</span>
                        <span class="flex_item2 center">${data_cart.data[i].drivernumber}</span>
                        <span class="flex_item2 center">${data_cart.data[i].driverData}</span>
                    </div>
                `)
            }
        });
    }
}

let login = () => {
    $("#login").click(() => {
        alert("目前还无登陆借口！")
    })
    $("#login_wx").click(() => {
        alert("请该公司注册自己的微信web开发者账号！");
    })
    $("#login_app").click(() => {
        alert("请提供原生的APP，并且需要安卓工程师完成接入APP的入口");
    })
}
































