// JavaScript Method for Evaluating the Riemann Zeta Function:
// Handling Complex and Negative Real Numbers.
// In line 754, you can activate the test function:
// Follow the program flow afterward to understand its workings.
// For full understanding, visit: WWW.ZETA-CALCULATOR.COM
// My best wishes for the success of your ventures!

/* Scroll down to see the Zeta function code!

JavaScript Method for Evaluating the Riemann Zeta Function: Handling Complex and Negative Real Numbers.
The vanilla_zeta() function below is the JavaScript Zeta function also used by the calculator above.
The vanilla_zeta() code originates here from: www.zeta-calculator.com
Feel free to copy and paste it into your project.
It's a plug-and-play component!

The project location is available at:
https://www.zeta-calculator.com/

* Copy the following functions into your project:
*
* Function: vanilla_zeta()
* Function optional: Test_vanilla_zeta() for immediate testing of vanilla_zeta()
*
* To copy the functions, follow these steps:
*
* 1. Select the code (including comments).
* 2. Press (Ctrl + C) on your keyboard to copy.
* 3. Paste the copied code into your project by pressing (Ctrl + V).
*
* Copy area: */

function vanilla_zeta(realPart, imaginaryPart, approximationEffort, verifyResult_onOff){
    // #################################
    // Version : 007
    // Released: Mar. 10, 2025
    // Location: www.zeta-calculator.com
    // #################################
    if(typeof v$z$_000==='undefined'){
        // Pre-settings_________________
        // 'ms' for milliseconds written in the result time-output.
        v$z$_001 = true; // showTimeWithMsUnit: Default= true
        //______________________________
        // Adapted calculation near results approaching zero.
        // If 'true': this can lower the strictness
        // for the calculation of the Trust-Value.
        v$z$_002 = true; // adaptedZero: Default= true
        //______________________________
        // Stabilizes Trivial Zeros
        // (Not to be confused with the Non-Trivial Zeros!)
        v$z$_003 = true; // stabilizeTrivial: Default= true
        //______________________________
        // End of pre-settings__________
        v$z$_004();
    };
    function v$z$_004(){
        v$z$_000=true;
        v$z$_005='#err';
        v$z$_006='#ins';
        v$z$_007=-1;
        v$z$_008=0;
        v$z$_009=new Array();
        v$z$_010=new Array();
        v$z$_011=0;
        v$z$_012=0;
        v$z$_013=0;
        v$z$_014=false;
        v$z$_015=new Array();
        v$z$_016=new Array();
        v$z$_016.push(1);
        v$z$_016.push(-0.5);
        v$z$_016.push(1/6);
        v$z$_016.push(0);
        v$z$_016.push(-1/30);
        v$z$_016.push(0);
        v$z$_016.push(1/42);
        v$z$_016.push(0);
        v$z$_016.push(-1/30);
        v$z$_016.push(0);
        v$z$_016.push(5/66);
        v$z$_017=1-10**(-15);
        v$z$_018=Number.MAX_SAFE_INTEGER;
        v$z$_019=Math.PI;
    };
    function v$z$_F1F3(v$z$_020,v$z$_021,v$z$_022){
        var v$z$_023=new Array(3);
        v$z$_023[0]=0;
        v$z$_023[1]=0;
        v$z$_023[2]=false;
        var v$z$_024=false;
        var v$z$_025=330;
        if(Math.abs(v$z$_021)>v$z$_025){v$z$_024=true};
        var v$z$_026;
        if(v$z$_022==false){
            v$z$_026=v$z$_027(v$z$_020,v$z$_021);
            if(v$z$_026[2]==0){v$z$_024=true};
        };
        var v$z$_028=0;
        var v$z$_029=0;
        var v$z$_030=new Array(3);
        v$z$_030[0]=0;
        v$z$_030[1]=0;
        v$z$_030[2]=false;
        if(v$z$_024==false){
            if(v$z$_022==false){
                v$z$_030=v$z$_F6(1-v$z$_020,-v$z$_021,v$z$_015[4]);
                v$z$_028=v$z$_030[0];
                v$z$_029=v$z$_030[1];
                if(v$z$_030[2]==false){
                    v$z$_023[2]=false;
                    return v$z$_023;
                };
            }else{
                v$z$_030=v$z$_F6(v$z$_020,v$z$_021,v$z$_015[6]);
                v$z$_028=v$z$_030[0];
                v$z$_029=v$z$_030[1];
            };
        };
        var v$z$_031=new Array();
        var v$z$_032=0;
        var v$z$_033=0;
        var v$z$_034=0;
        var v$z$_035=0;
        if(v$z$_022==false){
            if(v$z$_024==false){
                v$z$_031=v$z$_F2(1-v$z$_020,-v$z$_021,v$z$_015[3]);
                v$z$_012=v$z$_031[0];
                v$z$_013=v$z$_031[1];
            }else{
                v$z$_014=true;
                v$z$_031=v$z$_F4(v$z$_020,v$z$_021,v$z$_015[5]);
                if(v$z$_031[2]==true){
                    v$z$_030[2]=true;
                }else{
                    v$z$_023[2]=false;
                    return v$z$_023;
                };
            };
        }else{
            v$z$_031=new Array(3);
            v$z$_031[0]=v$z$_012;
            v$z$_031[1]=v$z$_013;
            v$z$_031[2]=true;
            v$z$_032=v$z$_031[0];
            v$z$_033=v$z$_031[1];
            v$z$_026=v$z$_027(1-v$z$_020,-v$z$_021);
            v$z$_034=v$z$_026[0];
            v$z$_035=v$z$_026[1];
            var v$z$_036=v$z$_034**2+v$z$_035**2;
            var v$z$_037=v$z$_034/v$z$_036;
            var v$z$_038=-v$z$_035/v$z$_036;
            var v$z$_039=v$z$_028**2+v$z$_029**2;
            var v$z$_040=v$z$_028/v$z$_039;
            var v$z$_041=-v$z$_029/v$z$_039;
            var v$z$_042=v$z$_037*v$z$_040-v$z$_038*v$z$_041;
            var v$z$_043=v$z$_037*v$z$_041+v$z$_038*v$z$_040;
            v$z$_034=v$z$_042;
            v$z$_035=v$z$_043;
            v$z$_042=v$z$_034*v$z$_032-v$z$_035*v$z$_033;
            v$z$_043=v$z$_034*v$z$_033+v$z$_035*v$z$_032;
            v$z$_034=v$z$_042;
            v$z$_035=v$z$_043;
            v$z$_032=v$z$_034;
            v$z$_033=v$z$_035;
            v$z$_031[0]=v$z$_032;
            v$z$_031[1]=v$z$_033;
        };
        if(v$z$_031[2]==false){
            v$z$_023[2]=false;
            return v$z$_023;
        };
        v$z$_032=v$z$_031[0];
        v$z$_033=v$z$_031[1];
        v$z$_034=v$z$_032;
        v$z$_035=v$z$_033;
        if(v$z$_024==false&&v$z$_022==false){
            v$z$_034=v$z$_026[0];
            v$z$_035=v$z$_026[1];
            var v$z$_042=v$z$_034*v$z$_028-v$z$_035*v$z$_029;
            var v$z$_043=v$z$_034*v$z$_029+v$z$_035*v$z$_028;
            v$z$_034=v$z$_042;
            v$z$_035=v$z$_043;
            v$z$_042=v$z$_034*v$z$_032-v$z$_035*v$z$_033;
            v$z$_043=v$z$_034*v$z$_033+v$z$_035*v$z$_032;
            v$z$_034=v$z$_042;
            v$z$_035=v$z$_043;
        };
        var v$z$_044=v$z$_045(v$z$_034,v$z$_035);
        if(v$z$_030[2]==false){v$z$_044=false};
        if(v$z$_031[2]==false){v$z$_044=false};
        v$z$_023[0]=v$z$_034;
        v$z$_023[1]=v$z$_035;
        v$z$_023[2]=v$z$_044;
        if(v$z$_024==true){
            v$z$_023[2]=false;
            if(v$z$_044==true){v$z$_023[2]=2};
        };
        return v$z$_023;
    };
    function v$z$_F2(v$z$_020,v$z$_021,v$z$_046){
        var v$z$_047=(3+5*v$z$_046)-v$z$_020;
        v$z$_047=Math.round(v$z$_047);
        if(v$z$_047<0){v$z$_047=0};
        var v$z$_048=(((Math.log(Math.abs(v$z$_021)+1)+1))**(0.9106*v$z$_046))-1;
        if(v$z$_048>8.7714){v$z$_048=8.7714};
        var v$z$_049=Math.round(2**(8+v$z$_048));
        var v$z$_050=0;
        var v$z$_051=0;
        for(var v$z$_052=1;v$z$_052<=(v$z$_049-1);v$z$_052++){
            v$z$_050=v$z$_050+Math.cos(v$z$_021*Math.log(v$z$_052))/v$z$_052**v$z$_020;
            v$z$_051=v$z$_051-Math.sin(v$z$_021*Math.log(v$z$_052))/v$z$_052**v$z$_020;
        };
        var v$z$_053=v$z$_020-1;
        var v$z$_054=-v$z$_021;
        var v$z$_055=v$z$_053**2+v$z$_054**2;
        var v$z$_056=v$z$_049*v$z$_053/v$z$_055;
        var v$z$_057=v$z$_049*v$z$_054/v$z$_055;
        var v$z$_058=Math.cos(v$z$_021*Math.log(v$z$_049))/v$z$_049**v$z$_020;
        var v$z$_059=-Math.sin(v$z$_021*Math.log(v$z$_049))/v$z$_049**v$z$_020;
        var v$z$_060=v$z$_050+v$z$_058/2+v$z$_056*v$z$_058-v$z$_057*v$z$_059;
        var v$z$_061=v$z$_051+v$z$_059/2+v$z$_056*v$z$_059+v$z$_057*v$z$_058;
        var v$z$_062=Math.floor(v$z$_047/2);
        var v$z$_063=2;
        var v$z$_064=2;
        var v$z$_065=0;
        var v$z$_066=0;
        for(var v$z$_067=1;v$z$_067<=v$z$_062;v$z$_067++){
            var v$z$_068=v$z$_016[2*v$z$_067]/v$z$_064;
            var v$z$_069=v$z$_020;
            var v$z$_070=v$z$_021;
            for(var v$z$_071=1;v$z$_071<=(2*v$z$_067-2);v$z$_071++){
                var v$z$_072=v$z$_020+v$z$_071;
                var v$z$_073=v$z$_069*v$z$_072-v$z$_070*v$z$_021;
                var v$z$_074=v$z$_069*v$z$_021+v$z$_070*v$z$_072;
                v$z$_069=v$z$_073;
                v$z$_070=v$z$_074;
            };
            v$z$_069=v$z$_069*v$z$_068;
            v$z$_070=v$z$_070*v$z$_068;
            var v$z$_075=v$z$_020+2*v$z$_067-1;
            var v$z$_076=v$z$_021;
            var v$z$_077=Math.cos(v$z$_076*Math.log(v$z$_049))/v$z$_049**v$z$_075;
            var v$z$_078=-Math.sin(v$z$_076*Math.log(v$z$_049))/v$z$_049**v$z$_075;
            var v$z$_079=v$z$_069*v$z$_077-v$z$_070*v$z$_078;
            var v$z$_080=v$z$_069*v$z$_078+v$z$_070*v$z$_077;
            v$z$_065=v$z$_065+v$z$_079;
            v$z$_066=v$z$_066+v$z$_080;
            v$z$_064=v$z$_064*(v$z$_063+1)*(v$z$_063+2);
            v$z$_063=v$z$_063+2;
        };
        v$z$_060=v$z$_060+v$z$_065;
        v$z$_061=v$z$_061+v$z$_066;
        var v$z$_023=new Array(3);
        v$z$_023[0]=v$z$_060;
        v$z$_023[1]=v$z$_061;
        v$z$_023[2]=v$z$_045(v$z$_060,v$z$_061);
        return v$z$_023;
    };
    function v$z$_F4(v$z$_020,v$z$_021,v$z$_046){
        var v$z$_081=1-2*Math.cos(v$z$_021*Math.log(2))/2**v$z$_020;
        var v$z$_082=-2*Math.sin(v$z$_021*Math.log(2))/2**v$z$_020;
        var v$z$_083=v$z$_081**2+v$z$_082**2;
        var v$z$_084=0;
        var v$z$_085=0;
        var v$z$_086=-1;
        var v$z$_087=v$z$_010.length;
        var v$z$_088=new Array(v$z$_087);
        var v$z$_089=new Array(v$z$_087);
        var v$z$_090=Math.floor(6+v$z$_046*(1022-6));
        var v$z$_091=true;
        if(2**v$z$_020==0){v$z$_090=-1};
        if(v$z$_045(2**v$z$_020)==false){v$z$_090=-1};
        var v$z$_092;
        var v$z$_093;
        for(var v$z$_052=0;v$z$_052<=v$z$_090;v$z$_052++){
            var v$z$_094=v$z$_090-v$z$_052;
            var v$z$_095=0;
            var v$z$_096=0;
            var v$z$_097=2**(-(v$z$_094+1));
            for(var v$z$_098=0;v$z$_098<=v$z$_094;v$z$_098++){
                var v$z$_099=v$z$_100(v$z$_094,v$z$_098);
                if(v$z$_091){
                    v$z$_086=-v$z$_086;
                    v$z$_092=v$z$_086*Math.cos(v$z$_021*Math.log(v$z$_098+1))/(v$z$_098+1)**v$z$_020;
                    v$z$_093=(-v$z$_086)*Math.sin(v$z$_021*Math.log(v$z$_098+1))/(v$z$_098+1)**v$z$_020;
                    v$z$_088[v$z$_098]=v$z$_092;
                    v$z$_089[v$z$_098]=v$z$_093;
                }else{
                    v$z$_092=v$z$_088[v$z$_098];
                    v$z$_093=v$z$_089[v$z$_098];
                };
                var v$z$_101=v$z$_097*v$z$_092*v$z$_099;
                var v$z$_102=v$z$_097*v$z$_093*v$z$_099;
                v$z$_095=v$z$_095+v$z$_101;
                v$z$_096=v$z$_096+v$z$_102;
                if(v$z$_098==v$z$_094){v$z$_091=false};
            };
            if(v$z$_083>1){
                v$z$_084=v$z$_084+v$z$_095/v$z$_083;
                v$z$_085=v$z$_085+v$z$_096/v$z$_083;
            }else{
                v$z$_084=v$z$_084+v$z$_095;
                v$z$_085=v$z$_085+v$z$_096;
            };
            if(v$z$_045(v$z$_084,v$z$_085)==false){
                v$z$_090=v$z$_018;
                v$z$_052=v$z$_090;
            };
        };
        var v$z$_103=(v$z$_084*v$z$_081-v$z$_085*v$z$_082);
        var v$z$_104=(v$z$_084*v$z$_082+v$z$_085*v$z$_081);
        if(v$z$_083<=1){
            v$z$_103=v$z$_103/v$z$_083;
            v$z$_104=v$z$_104/v$z$_083;
        };
        var v$z$_023=new Array(3);
        v$z$_023[0]=v$z$_103;
        v$z$_023[1]=v$z$_104;
        v$z$_023[2]=v$z$_045(v$z$_103,v$z$_104);
        return v$z$_023;
    };
    function v$z$_F6(v$z$_020,v$z$_021,v$z$_046){
        var v$z$_105=Math.floor(((v$z$_046*2.608*10**6)+2000));
        var v$z$_106=v$z$_020;
        var v$z$_107=v$z$_021;
        var v$z$_108=v$z$_106;
        var v$z$_109=v$z$_107;
        var v$z$_110=v$z$_106**2+v$z$_107**2;
        v$z$_106=v$z$_106/v$z$_110;
        v$z$_107=-v$z$_107/v$z$_110;
        var v$z$_111=v$z$_005;
        var v$z$_112=v$z$_005;
        var v$z$_113=1;
        var v$z$_114=0;
        var v$z$_115=0;
        var v$z$_116=0;
        var v$z$_117=0;
        var v$z$_118=0;
        var v$z$_119=v$z$_106;
        var v$z$_120=0;
        for(var v$z$_052=1;v$z$_052<=v$z$_105;v$z$_052++){
            v$z$_120=v$z$_108+v$z$_052;
            v$z$_116=(v$z$_120**2+v$z$_109**2)/v$z$_052;
            v$z$_117=v$z$_120/v$z$_116;
            v$z$_118=-v$z$_109/v$z$_116;
            v$z$_119=v$z$_106;
            v$z$_106=v$z$_106*v$z$_117-v$z$_107*v$z$_118;
            v$z$_107=v$z$_119*v$z$_118+v$z$_107*v$z$_117;
            if(v$z$_113==-1||v$z$_052%100==0||v$z$_052==v$z$_105){
                var v$z$_121=v$z$_052**v$z$_020;
                var v$z$_122=v$z$_121*Math.cos(-v$z$_021*Math.log(v$z$_052));
                var v$z$_123=-v$z$_121*Math.sin(-v$z$_021*Math.log(v$z$_052));
                var v$z$_124=v$z$_122*v$z$_106-v$z$_123*v$z$_107;
                var v$z$_125=v$z$_122*v$z$_107+v$z$_123*v$z$_106;
                var v$z$_126=v$z$_045(v$z$_124,v$z$_125);
                if(v$z$_121==0){v$z$_126=false};
                if(v$z$_126==true){
                    v$z$_114=v$z$_106;
                    v$z$_115=v$z$_107;
                    v$z$_111=v$z$_124;
                    v$z$_112=v$z$_125;
                    if(v$z$_113>-1){v$z$_113=v$z$_052};
                }else{
                    if(v$z$_113>-1&&v$z$_113!=1){
                        v$z$_052=v$z$_113;
                        v$z$_113=-1;
                        v$z$_106=v$z$_114;
                        v$z$_107=v$z$_115;
                    }else{
                        v$z$_052=v$z$_105;
                    };
                };
            };
        };
        v$z$_106=v$z$_111;
        v$z$_107=v$z$_112;
        var v$z$_023=new Array(3);
        v$z$_023[0]=v$z$_106;
        v$z$_023[1]=v$z$_107;
        v$z$_023[2]=v$z$_045(v$z$_106,v$z$_107);
        return v$z$_023;
    };
    function v$z$_027(v$z$_020,v$z$_021){
        var v$z$_127=0;
        var v$z$_128=0;
        var v$z$_129=(2*v$z$_019)**v$z$_020*Math.cos(-v$z$_021*Math.log(2*v$z$_019))/v$z$_019;
        var v$z$_130=(2*v$z$_019)**v$z$_020*Math.sin(-v$z$_021*Math.log(2*v$z$_019))/(-v$z$_019);
        var v$z$_131=Math.sin(v$z$_020*v$z$_019/2)*Math.cosh(v$z$_021*v$z$_019/2);
        var v$z$_132=Math.cos(v$z$_020*v$z$_019/2)*Math.sinh(v$z$_021*v$z$_019/2);
        v$z$_127=v$z$_129*v$z$_131-v$z$_130*v$z$_132;
        v$z$_128=v$z$_129*v$z$_132+v$z$_130*v$z$_131;
        var v$z$_023=new Array(3);
        v$z$_023[2]=v$z$_045(v$z$_127,v$z$_128);
        if(v$z$_023[2]==false){
            v$z$_127=v$z$_005;
            v$z$_128=v$z$_005;
        };
        v$z$_023[0]=v$z$_127;
        v$z$_023[1]=v$z$_128;
        return v$z$_023;
    };
    function v$z$_100(v$z$_133,v$z$_134){
        if(v$z$_007>=v$z$_133){return v$z$_135(v$z$_133,v$z$_134,true)};
        v$z$_011=performance.now();
        for(var v$z$_052=(v$z$_007+1);v$z$_052<=v$z$_133;v$z$_052++){
            v$z$_010.push(v$z$_008);
            for(var v$z$_098=0;v$z$_098<=Math.floor(v$z$_052/2);v$z$_098++){
                var v$z$_136=v$z$_135(v$z$_052,v$z$_098,false);
                v$z$_009.push(v$z$_136);
                v$z$_008=v$z$_008+1;
            };
        };
        v$z$_011=performance.now()-v$z$_011;
        v$z$_007=v$z$_133;
        return v$z$_135(v$z$_133,v$z$_134,true);
    };
    function v$z$_135(v$z$_137,v$z$_138,v$z$_139){
        if(v$z$_138>v$z$_137/2){v$z$_138=v$z$_137-v$z$_138};
        if(v$z$_139){
            var v$z$_140=v$z$_010[v$z$_137]+v$z$_138;
            return v$z$_009[v$z$_140];
        };
        var v$z$_141=1;
        var v$z$_142=2;
        var v$z$_143=v$z$_137-v$z$_138+1;
        var v$z$_144=2**1014;
        var v$z$_145=1/v$z$_144;
        var v$z$_146=false;
        var v$z$_147;
        do{
            v$z$_147=false;
            if(!v$z$_146){
                for(var v$z$_148=v$z$_142;v$z$_148<=v$z$_138;v$z$_148++){
                    v$z$_142=v$z$_148+1;
                    v$z$_141=v$z$_141/v$z$_148;
                    if(v$z$_141<v$z$_145){
                        if(v$z$_143<v$z$_137+1){v$z$_148=v$z$_018};
                    };
                };
            };
            if(v$z$_146){
                for(var v$z$_148=v$z$_143;v$z$_148<=v$z$_137;v$z$_148++){
                    v$z$_143=v$z$_148+1;
                    v$z$_141=v$z$_141*v$z$_148;
                    if(v$z$_141>v$z$_144){
                        if(v$z$_142<v$z$_138+1){v$z$_148=v$z$_018};
                    };
                };
            };
            v$z$_146=!v$z$_146;
            if(v$z$_142<v$z$_138+1){v$z$_147=true};
            if(v$z$_143<v$z$_137+1){v$z$_147=true};
        }while(v$z$_147);
        return v$z$_141;
    };
    function v$z$_045(v$z$_149,v$z$_150){
        var v$z$_151=true;
        if(v$z$_149!=undefined){
            v$z$_151=typeof v$z$_149==='number'&&isFinite(v$z$_149);
        };
        if(v$z$_151==true){
            if(v$z$_150!=undefined){v$z$_151=typeof v$z$_150==='number'&&isFinite(v$z$_150)};
        };
        return v$z$_151;
    };
    function v$z$_152(v$z$_153,v$z$_154){
        var v$z$_155=Math.log10(Math.abs(v$z$_153));
        if(v$z$_045(v$z$_155)==false){v$z$_155=0};
        var v$z$_156=Math.log10(Math.abs(v$z$_154));
        if(v$z$_045(v$z$_156)==false){v$z$_156=0};
        var v$z$_157=v$z$_155;
        if(v$z$_156>v$z$_157){v$z$_157=v$z$_156};
        v$z$_157=10**v$z$_157;
        v$z$_153=v$z$_153/v$z$_157;
        v$z$_154=v$z$_154/v$z$_157;
        var v$z$_158=new Array();
        v$z$_158.push(v$z$_153);
        v$z$_158.push(v$z$_154);
        v$z$_158.push(v$z$_157);
        return v$z$_158;
    };
    function v$z$_159(v$z$_160,v$z$_161){
        var v$z$_162=v$z$_152(v$z$_160,v$z$_161);
        v$z$_160=v$z$_162[0];
        v$z$_161=v$z$_162[1];
        var v$z$_163;
        var v$z$_164;
        var v$z$_165=(v$z$_160**2+v$z$_161**2)**(0.5);
        if(v$z$_165<0){v$z$_165=0};
        if(v$z$_165>0){
            v$z$_163=Math.asin(Math.abs(v$z$_161)/v$z$_165);
            v$z$_164=v$z$_165*v$z$_162[2];
            if(v$z$_160>=0){
                if(v$z$_161<0){v$z$_163=2*v$z$_019-v$z$_163};
            }else{
                if(v$z$_161>=0){v$z$_163=v$z$_019-v$z$_163}else{v$z$_163=v$z$_019+v$z$_163};
            };
        }else{
            v$z$_163=0;
            v$z$_164=0;
        };
        if(v$z$_163>v$z$_019){v$z$_163=v$z$_163-2*v$z$_019};
        if(v$z$_163<=-v$z$_019){v$z$_163=v$z$_019};
        var v$z$_166=new Array();
        if(v$z$_045(v$z$_164,v$z$_163)==true){
            v$z$_166.push(v$z$_164);
            v$z$_166.push(v$z$_163);
        }else{
            v$z$_166.push(v$z$_005);
            v$z$_166.push(v$z$_005);
        };
        return v$z$_166;
    };
    function v$z$_167(v$z$_168,v$z$_169,v$z$_170,v$z$_171){
        var v$z$_172=v$z$_045(v$z$_168,v$z$_169);
        if(v$z$_172==true){
            v$z$_172=v$z$_045(v$z$_170);
            if(v$z$_172==true){
                if(v$z$_170<0){v$z$_172=false};
                if(v$z$_170>1){v$z$_172=false};
            };
            if(v$z$_172==true){if(typeof v$z$_171!=='boolean'){v$z$_172=false}};
        };
        return v$z$_172;
    };
    // ****** MAIN PROGRAM START ******
    var v$z$_173=performance.now();
    var v$z$_174=realPart;
    var v$z$_175=imaginaryPart;
    var v$z$_176=approximationEffort;
    var v$z$_177=verifyResult_onOff;
    v$z$_014=false;
    var v$z$_178=v$z$_167(v$z$_174,v$z$_175,v$z$_176,v$z$_177);
    if(v$z$_178==false){
        var v$z$_179=new Array(7);
        v$z$_179[0]=v$z$_006;
        v$z$_179[1]=v$z$_006;
        v$z$_179[2]=v$z$_006;
        v$z$_179[3]=v$z$_006;
        v$z$_179[4]=v$z$_006;
        v$z$_179[5]=false;
        if(v$z$_001==true){v$z$_179[6]='0 ms'}else{v$z$_179[6]=0};
        return v$z$_179;
    };
    v$z$_effort_adjust(v$z$_176);
    var v$z$_180=v$z$_174;
    var v$z$_181=v$z$_175;
    var v$z$_182=1;
    if(v$z$_175<0){
        v$z$_181=-v$z$_181;
        v$z$_182=-1;
    };
    var v$z$_183=v$z$_177;
    var v$z$_184;
    var v$z$_185;
    var v$z$_186=false;
    var v$z$_187=-1;
    if(v$z$_183==true){v$z$_187=0};
    if(v$z$_180>=-3){
        if(v$z$_002==false&&Math.abs(v$z$_180-0.5)<10**(-10)){v$z$_180=0.5-10**(-10)};
        var v$z$_188=v$z$_F2(v$z$_180,v$z$_181,v$z$_015[1]);
        var v$z$_189=v$z$_188[0];
        var v$z$_190=v$z$_188[1];
        if(v$z$_183==true&&v$z$_188[2]==true){
            var v$z$_191=v$z$_F4(v$z$_180,v$z$_181,v$z$_015[2]);
            var v$z$_192=v$z$_191[0];
            var v$z$_193=v$z$_191[1];
            if(v$z$_191[2]==true){v$z$_187=v$z$_calculate_trust(v$z$_189,v$z$_190,v$z$_192,v$z$_193)};
        };
        v$z$_184=v$z$_189;
        v$z$_185=v$z$_182*v$z$_190;
        v$z$_186=v$z$_188[2];
        if(v$z$_003==true&&v$z$_186==true&&v$z$_180<0&&Math.abs(Math.round(v$z$_180)-v$z$_180)<10**(-12)){
            if(Math.abs(v$z$_181)<10**(-12)&&Math.round(v$z$_180)%2==0){
                v$z$_184=0;
                v$z$_185=0;
            };
        };
    }else{
        if(v$z$_174>=-152){
            var v$z$_194=false;
            var v$z$_195=false;
            if(v$z$_003==true&&Math.abs(Math.round(v$z$_180)-v$z$_180)<10**(-12)){
                if(Math.abs(v$z$_181)<10**(-12)){
                    if(Math.round(Math.abs(v$z$_180))%2==1){v$z$_195=true}else{v$z$_194=true};
                };
                if(v$z$_194==true){v$z$_195=true};
            };
            var v$z$_196=v$z$_F1F3(v$z$_180,v$z$_181,false);
            var v$z$_197=v$z$_196[0];
            var v$z$_198=v$z$_196[1];
            var v$z$_199=v$z$_196[2];
            if(v$z$_199==2){v$z$_196[2]=false};
            if(v$z$_183==true&&v$z$_196[2]==true){
                if(v$z$_003==true&&v$z$_195==true){
                    if(Math.round(Math.abs(v$z$_180))%2==1){v$z$_180=Math.round(v$z$_180)-10**(-12)};
                };
                if(v$z$_194==false){
                    var v$z$_200=v$z$_F1F3(v$z$_180,v$z$_181,true);
                    var v$z$_201=v$z$_200[0];
                    var v$z$_202=v$z$_200[1];
                    if(v$z$_200[2]==true){v$z$_187=v$z$_calculate_trust(v$z$_197,v$z$_198,v$z$_201,v$z$_202)};
                }else{
                    v$z$_187=v$z$_calculate_trust(1,1,1,1);
                };
            };
            if(v$z$_194==true&&v$z$_199==true){v$z$_197=0};
            if(v$z$_195==true&&v$z$_199==true){v$z$_198=0};
            v$z$_184=v$z$_197;
            v$z$_185=v$z$_182*v$z$_198;
            if(v$z$_199==2){v$z$_199=true};
            v$z$_186=v$z$_199;
        }else{
            v$z$_186=false;
        };
    };
    var v$z$_203;
    if(v$z$_186==true){
        v$z$_203=v$z$_159(v$z$_184,v$z$_185);
    }else{
        v$z$_203=new Array();
        v$z$_203.push(v$z$_005);
        v$z$_203.push(v$z$_005);
    };
    v$z$_173=performance.now()-v$z$_173-v$z$_011;
    v$z$_011=0;
    if(v$z$_173<0){v$z$_173=0};
    var v$z$_204=new Array(7);
    var v$z$_205=v$z$_045(v$z$_184,v$z$_185);
    if(v$z$_205==true){v$z$_205=v$z$_045(v$z$_203[0],v$z$_203[1])};
    if(v$z$_045(v$z$_187)==false){v$z$_187=0};
    if(v$z$_186==false){v$z$_205=false};
    if(v$z$_205==true){
        v$z$_204[0]=v$z$_184;
        v$z$_204[1]=v$z$_185;
        v$z$_204[2]=v$z$_203[0];
        v$z$_204[3]=v$z$_203[1];
    }else{
        v$z$_204[0]=v$z$_005;
        v$z$_204[1]=v$z$_005;
        v$z$_204[2]=v$z$_005;
        v$z$_204[3]=v$z$_005;
    };
    v$z$_204[4]=v$z$_187;
    v$z$_204[5]=v$z$_205;
    if(v$z$_001==true){
        v$z$_204[6]=Math.floor(v$z$_173).toString() + ' ms'}else{v$z$_204[6]=Math.floor(v$z$_173)};
    return v$z$_204; // MainReturn vanilla_zeta()
    // ****** MAIN PROGRAM END ******
    // --- EDIT start ---
    function v$z$_alert_manager(alert_nr){
        var v$z$_206=false;
        // _______________________________________________________________________
        if(alert_nr==1){v$z$_206=true;alert('vanilla_zeta()\nerror_effort_declare:\neffort < 0')};
        if(alert_nr==2){v$z$_206=true;alert('vanilla_zeta()\nerror_effort_declare:\neffort > 1')};
        // _______________________________________________________________________
        if(v$z$_206==false){alert('vanilla_zeta():\nunknown alert')};
    };
    function v$z$_effort_adjust(v$z$_207){
        v$z$_015=new Array(7);
        v$z$_015[0]=v$z$_207;          // effort_reference
        // Effort adjust start ______________________________________
        v$z$_015[1]=v$z$_015[0]**1.62; // effort_adjust_F2
        v$z$_015[2]=v$z$_015[0]**3.24; // effort_adjust_F4
        v$z$_015[3]=v$z$_015[0]**2;    // effort_adjust_F1(F2)\F3(F2)
        v$z$_015[4]=v$z$_015[0]**2;    // effort_adjust_F1(F6_gamma)
        v$z$_015[5]=v$z$_015[0]**4;    // effort_adjust_F1(overflow)
        v$z$_015[6]=v$z$_015[0]**2;    // effort_adjust_F3(F6_gamma)
        // Effort adjust end ________________________________________
        // Value range monitoring: 0<= effortValue <=1
        for(var v$z$_208=0;v$z$_208<v$z$_015.length;v$z$_208++){
            if(v$z$_015[v$z$_208]<0){v$z$_alert_manager(1)};
            if(v$z$_015[v$z$_208]>1){v$z$_alert_manager(2)};
        };
    };
    function v$z$_calculate_trust(v$z$_resultValueReal,v$z$_resultValueImag,v$z$_checkValueReal,v$z$_checkValueImag){
        // Calculate the difference between the result- and check number
        if(v$z$_resultValueReal<0){v$z$_resultValueReal=-v$z$_resultValueReal;v$z$_checkValueReal=-v$z$_checkValueReal};
        if(v$z$_resultValueImag<0){v$z$_resultValueImag=-v$z$_resultValueImag;v$z$_checkValueImag=-v$z$_checkValueImag};
        var v$z$_209=v$z$_resultValueReal-v$z$_checkValueReal!=0||v$z$_resultValueImag-v$z$_checkValueImag!=0;
        var v$z$_210=v$z$_152(v$z$_resultValueReal,v$z$_resultValueImag);
        v$z$_resultValueReal=v$z$_210[0];
        v$z$_resultValueImag=v$z$_210[1];
        var v$z$_211=Math.abs((v$z$_resultValueReal**2+v$z$_resultValueImag**2)**(0.5)*v$z$_210[2]);
        v$z$_checkValueReal=v$z$_checkValueReal/v$z$_210[2];
        v$z$_checkValueImag=v$z$_checkValueImag/v$z$_210[2];
        var v$z$_212=v$z$_152(v$z$_resultValueReal-v$z$_checkValueReal,v$z$_resultValueImag-v$z$_checkValueImag);
        var delta_resChk=(v$z$_212[0]**2+v$z$_212[1]**2)**(0.5)*v$z$_212[2]*v$z$_210[2];
        if(v$z$_211==0&&v$z$_209==false&&v$z$_002==false){v$z$_211=1};
        if(v$z$_211>1||v$z$_002==false){delta_resChk=delta_resChk/v$z$_211}else{delta_resChk=delta_resChk*v$z$_211};
        return v$z$_213(delta_resChk); // Transform the difference into a trust value
    };
    function v$z$_213(v$z$_214){
        // trustTransformFunction
        v$z$_214=-Math.log10(v$z$_214+10**(-51));
        if(v$z$_214>0){
            v$z$_214=v$z$_214*(1-10**(-10));
            v$z$_214=((((100**0.25)**v$z$_214)/100)**(2/457));
            if(v$z$_214>1){v$z$_214=1};
            v$z$_214=1-(1-v$z$_214)/0.00998259143149816;
        };
        if(v$z$_214<0){v$z$_214=0};
        if(v$z$_214>1){v$z$_214=1};
        v$z$_214=v$z$_214*v$z$_017;
        if(v$z$_045(v$z$_214)==false){v$z$_214=0};
        return v$z$_214;
    };
    // --- EDIT end ---
}; // vanilla_zeta() functionEnd

function Test_vanilla_zeta() {

    // Inputs: ensure that the inputs comply with the specified ranges, or the process will fail.
    var input_Real = 0.5;                // Real part:      -Number.MAX_VALUE <= input_Real <= Number.MAX_VALUE
    var input_Imag = 14.134725141734693; // Imaginary part: -Number.MAX_VALUE <= input_Imag <= Number.MAX_VALUE
    var input_Effort = 0.67;             // Effort level:   0 <= input_Effort <= 1
    var input_TrustEnabled = true;       // Trust (verify result) enabled: true, false

    // Execute the vanilla_zeta function
    var output_array = vanilla_zeta(input_Real, input_Imag, input_Effort, input_TrustEnabled);

    /* Output Descriptions:
    output_array[0]: Real result of Zeta
    output_array[1]: Imaginary result of Zeta
    output_array[2]: Polar radius result of Zeta
    output_array[3]: Polar angle result of Zeta in radians
    output_array[4]: Trust value of the calculation
    output_array[5]: Boolean indicating if the calculation was successful
    output_array[6]: Process time of 'vanilla_zeta()' in milliseconds
    */

    // Handle the result of the calculation
    if (output_array[5] == true) {
        alert('Calculation successful.');
    } else {
        if (output_array[0] == '#err') {
            alert('Error:\nThe calculation process encountered an error!');
        };
        if (output_array[0] == '#ins') {
            alert('Attention:\nInvalid input detected!\nPlease check your inputs.');
        };
    };

    // Display results
    alert('Zeta Real Result:\n= ' + output_array[0]);
    alert('Zeta Imaginary Result:\n= ' + output_array[1]);
    alert('Zeta Polar Radius:\n= ' + output_array[2]);
    alert('Zeta Polar Angle:\n= ' + output_array[3] + ' (Rad)');
    alert('Trust Value:\n= ' + output_array[4]);
    alert('Process Time for vanilla_zeta():\n= ' + output_array[6]);

}; // Test vanilla_zeta() functionEnd

// Set to 'true' to enable test mode for the vanilla_zeta function.
var v$z$_isTestModeEnabled = false;
if (v$z$_isTestModeEnabled) {
    Test_vanilla_zeta();
    alert('Test_vanilla_zeta() completed.');
};

/*** TERMS AND CONDITIONS ***
DO WHAT YOU WANT License (CC0 1.0 Universal)

The work, including the code 'vanilla_zeta()', is released under the CC0 1.0 Universal license.
The code 'vanilla_zeta()' has its original location at:
www.zeta-calculator.com

-You are free to copy, modify, and distribute the work for any purpose, even commercially.
-No attribution is required.
-The work is provided "as is" without any warranties or guarantees.

Important Notes:
-This does not waive any trademark or patent rights.
-The licensor is not responsible for clearing third-party rights or obtaining necessary permissions.
-Liability for damages is disclaimed to the fullest extent possible.

For more information about the license: Creative Commons CC0 1.0 Universal.
*** END OF TERMS AND CONDITIONS ***/
