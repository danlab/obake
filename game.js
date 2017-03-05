var step = 0;
var score = 0;
var flag = false;
var a = document.getElementById( "bgm" );
var q = [
	"あなたはお化けです！",
	"たけし君を怖がらせよう！怖がらせることができるかな？",
	"なんて言って登場しようかな？",
	"（未定義）",
	"たけし君になにをしてあげようかな？",
	"（未定義）",
	"たけし君をつかまえた！なにをお願いしよう",
	"（未定義）",
];
function scoreUp( x ){
	score += x;
	$( "nav" ).slideUp( 0 );
	$( "#message" ).bind( "click", process );
	$( "#message p#main" ).html( q[step++] );
	flag = true;
}
var process = function() {
	flag = false;
	do{
		$( "#message p#main" ).html( q[step++] );
		if( step == 1 ){
			$( "#student" ).show( 2000 );
		}
		else if( step == 3 ){
			$( "#message" ).unbind();
			$( "#a1 a" ).html( "ﾊﾞｱ!!!!!!" );
			$( "#a1 a" ).unbind();
			$( "#a1 a" ).click( function(){ q[3] = "たけし君「ｷﾞｬｱｱｱｱｱｱ」"; scoreUp( 10 ) } );
			$( "#a2 a" ).unbind();
			$( "#a2 a" ).html( "こんばんは～お化けです" );
			$( "#a2 a" ).click( function(){ q[3] = "たけし君「ｱﾜﾜﾜﾜﾜﾜｱ」"; scoreUp( 10 ) } );
			$( "#a3 a" ).unbind();
			$( "#a3 a" ).html( "痛い・・・痛い・・・イタイ" );
			$( "#a3 a" ).click( function(){ q[3] = "たけし君「ﾋｬｱｱｱｱｱｱｱｱ」"; scoreUp( 10 ) } );
			$( "nav" ).slideDown( "slow" );
		}
		else if( step == 5 ){
			$( "#message" ).unbind();
			$( "#a1 a" ).unbind();
			$( "#a1 a" ).html( "頭をなでてあげる" );
			$( "#a1 a" ).click( function(){ q[5] = "たけし君「頭゛が゛あ゛あ゛ぁ゛あ゛あ゛あ゛！」"; scoreUp( 0 ) } );
			$( "#a2 a" ).unbind();
			$( "#a2 a" ).html( "足をつかんであげる" );
			$( "#a2 a" ).click( function(){ q[5] = "たけし君「も゛う゛や゛め゛て゛く゛れ゛よ゛ぉ゛お゛お゛お゛！」"; scoreUp(  10 ) } );
			$( "#a3 a" ).unbind();
			$( "#a3 a" ).html( "追いかけてあげる" );
			$( "#a3 a" ).click( function(){ q[5] = "たけし君「ご゛め゛ん゛な゛さ゛あ゛ぁ゛あ゛あ゛い゛！」"; scoreUp(  30 ) } );
			$( "nav" ).slideDown( "slow" );
		}
		else if( step == 7 ){
			$( "#message" ).unbind();
			$( "#a1 a" ).unbind();
			$( "#a1 a" ).html( "足ちょうだいたけしくんんんたけしkたksしクンタケシクンたけsktttttttt" );
			$( "#a1 a" ).click( function(){ q[7] = "たけし君「アア」<br>たけし君は足がなくなりました"; scoreUp(  30 ) } );
			$( "#a2 a" ).unbind();
			$( "#a2 a" ).html( "たけし君好き・・・" );
			$( "#a2 a" ).click( function(){ q[7] = "たけし君「(*´∀｀*)」<br> たけし君は幸せな気持ちになりました"; scoreUp(  0 ) } );
			$( "#a3 a" ).unbind();
			$( "#a3 a" ).html( "ずっとずっとずっと一緒だよ" );
			$( "#a3 a" ).click( function(){ q[7] = "たけし君「」<br>たけし君は泣き崩れました"; scoreUp( 100 ) } );
			$( "nav" ).slideDown( "slow" );
		}
		else if( step >= q.length + 1 ){
			$( "nav" ).fadeOut( "slow" );
			$( "#message" ).fadeOut( "slow" );
			$( "h1" ).slideDown( "fast" );
			$( "#dan" ).animate( {
				left: 500,
				opacity: 0
			}, 500 );
			$( "#student" ).animate( {
				width: 768
			}, 500 );
			if( score >= 50 ){
				$( "h1" ).html( "あなたはすばらしいお化けです！" );
				$( "#student" ).animate( {
					opacity: 1
				}, 1000 );
			}
			else{
				$( "h1" ).html( "あなたはダメダメお化けです…" );
				$( "#student" ).animate( {
					opacity: 0
				}, 1000 );
			}
			a.pause();
		}
		else{
			$( "#student" ).finish();
		}
	}while( flag );
}
$( "h1" ).click( function() {
	$( "h1" ).slideUp( "slow" );
	$( "#dan" ).css({
		"visibility": "visible"
	});
	$( "#message" ).slideDown( "slow" );
	$( "#message" ).bind( "click", process );
	$( "h1" ).unbind();
	a.play();
});
