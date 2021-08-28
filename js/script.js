
function tweet_run(mes){
        window.open(
                'https://twitter.com/share?'+
                'text=' + mes+
                '&url=' + "https://kusurichan.com"
                '&hashtags=' + "ｸｽﾘﾁｬﾝ"
        );
}

let ChinChin_prob=0.01;

function Is_ChinChin(){
        if(Math.random()<=ChinChin_prob){
                return true;
        }else{
                return false;
        }
}

function change_ChinChin(){
        if(Is_ChinChin()){
                tweet_run("ﾁﾝﾁﾝ!");
        }else{
                tweet_run("ｸｽﾘﾁｬﾝ!");
        }
} 

