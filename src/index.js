
import "./css/common.css";
import "./css/index.css";

$(() => {
    let isShow = false;
    search_tab(isShow);
    banner();
    getNetEvent();
    getCartDataEvent();
    login();
    navMouseEnterEvent();
    tabShowItem();
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
        $(".banner_point_item").css('backgroundColor','#CCCCCC');
        $(".banner_point_item:eq("+i+")").css("backgroundColor","red");
        i++;
    },5000);

    //左右按钮事件
    $(".banner .left").click(() => {
        i--;
        if(i < 0){
            i = arr.length - 1;
        }

        $(".banner .img").attr("src",arr[i]);
        $(".banner_point_item").css("backgroundColor","#CCCCCC");
        $(".banner_point_item:eq("+i+")").css("backgroundColor","red");
    });
    $(".banner .right").click(() => {
        i++;
        if(i > 4){
            i = 0;
        }
        $(".banner .img").attr("src",arr[i]);
        $(".banner_point_item").css("backgroundColor","#CCCCCC");
        $(".banner_point_item:eq("+i+")").css("backgroundColor","red");
    });
    //name_item的事件
    for(let j = 0;j < $(".name_item").length; j++){
        $(".name_item:eq("+j+")").mouseenter(()=>{
            $(".name_item").css("border","none");
            $(".name_item:eq("+j+")").css("border","3px solid black");
            $(".banner .img").attr("src",arr[j]);
            $(".banner_point_item").css("backgroundColor","#CCCCCC");
            $(".banner_point_item:eq("+j+")").css("backgroundColor","red");
        })
    }
    //points_item事件
    for(let k = 0; k < $(".banner_point_item").length; k++){
        $(".banner_point_item:eq("+k+")").mouseenter(()=>{
            $(".banner_point_item").css("backgroundColor","#CCCCCC");
            $(".banner_point_item:eq("+k+")").css("backgroundColor","red");
            $(".banner .img").attr("src",arr[k]);
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
        let len = $(".tab_item").length;

        for(let i = 0; i < len; i++){
            $(".tab_item").eq(i).click(()=>{

                $(".tab_item").removeClass("activeClass");
                $(".tab_item").eq(i).addClass("activeClass");
                if(i == 0){
                    $(".location_content").text("产品界面");
                }
                if(i == 1){
                    $(".location_content").text("团队界面");
                }
                if(i == 2){
                    $(".location_content").text("思维界面");
                }
            });
        }
        //$("#form_cart").html("");
        // $("#form_cart").load("./src/common/index_title.html",function (e) {
        //
        //     for(let i = 0;i < data_cart.data.length;i++){
        //
        //         $("#form_cart").append(`
        //             <div class="form_info_item font_size_14">
        //                 <span class="width_120 nowrap">${data_cart.data[i].company}</span>
        //                 <span class="flex_item2 center">${data_cart.data[i].drivernumber}</span>
        //                 <span class="flex_item2 center">${data_cart.data[i].driverData}</span>
        //             </div>
        //         `)
        //     }
        // });
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

let search_tab = (isShow) => {
    let isOnShow = isShow;
    if(!isOnShow){
        $("#search_list").hide();
    }else{
        $("#search_list").show();
    }
    $("#search_tab").click(() => {
        if(!isOnShow){
            $("#search_list").show();
        }else{
            $("#search_list").hide();
        }
        isOnShow = !isOnShow;
    });
    for(let i = 0; i < $("#search_list li").length; i++){
        $("#search_list li").eq(i).click(()=>{
            //alert(i);
            let value = $("#search_list li").eq(i).text();
            $("#search_tab").text(value);
            $("#search_list").hide();
            isOnShow = !isOnShow;
        })
    }
};

let navMouseEnterEvent = () => {
    $("#home").mouseenter(()=>{
        $("#second-home").css('display','block');
    }).mouseleave(() => {
        $("#second-home").css('display','none');
    });

    $("#business").mouseenter(()=>{
        $("#second-business").css('display','block');
    }).mouseleave(() => {
        $("#second-business").css('display','none');
    });

    $("#connect").mouseenter(()=>{
        $("#second-connect").css('display','block');
    }).mouseleave(() => {
        $("#second-connect").css('display','none');
    });

    $("#driveEducation").mouseenter(()=>{
        $("#second-driveEducation").css('display','block');
    }).mouseleave(() => {
        $("#second-driveEducation").css('display','none');
    });

    $("#sell").mouseenter(()=>{
        $("#second-sell").css('display','block');
    }).mouseleave(() => {
        $("#second-sell").css('display','none');
    });

    $("#transfrom").mouseenter(()=>{
        $("#second-transfrom").css('display','block');
    }).mouseleave(() => {
        $("#second-transfrom").css('display','none');
    });

    $("#carContrl").mouseenter(()=>{
        $("#second-carContrl").css('display','block');
    }).mouseleave(() => {
        $("#second-carContrl").css('display','none');
    });
};

let tabShowItem = () => {
    let isShow = false;
    let len = $(".tabShowItem").length;
    for(let i = 0;i < len; i++){
        $(".tabShowItem").text('+');
        $(".tabShowItem").eq(i).click(() => {
            isShow = !isShow;
            if(isShow){
                $(".tabShowItem").eq(i).text('-');
                $(".home-page-position").eq(i).show();
            }else{
                $(".tabShowItem").eq(i).text('+');
                $(".home-page-position").eq(i).hide();
            }

        });
    }

}































