// JavaScript Method for Evaluating the Riemann Zeta Function:
// Handling Complex and Negative Real Numbers.
// In line 734, you can activate the test function:
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
    // Version : 006
    // Released: Jan. 25, 2025
    // Location: www.zeta-calculator.com
    // #################################
    if(typeof v$z$_000==='undefined'){
        // Pre-settings_________________
        //______________________________
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
        v$z$_017=Number.MAX_SAFE_INTEGER;
        v$z$_018=Math.PI;
    };
    function v$z$_F1F3(v$z$_019,v$z$_020,v$z$_021){
        var v$z$_022=new Array(3);
        v$z$_022[0]=0;
        v$z$_022[1]=0;
        v$z$_022[2]=false;
        var v$z$_023=false;
        var v$z$_024=330;
        if(Math.abs(v$z$_020)>v$z$_024){v$z$_023=true};
        var v$z$_025;
        if(v$z$_021==false){
            v$z$_025=v$z$_026(v$z$_019,v$z$_020);
            if(v$z$_025[2]==0){v$z$_023=true};
        };
        var v$z$_027=0;
        var v$z$_028=0;
        var v$z$_029=new Array(3);
        v$z$_029[0]=0;
        v$z$_029[1]=0;
        v$z$_029[2]=false;
        if(v$z$_023==false){
            if(v$z$_021==false){
                v$z$_029=v$z$_F6(1-v$z$_019,-v$z$_020,v$z$_015[4]);
                v$z$_027=v$z$_029[0];
                v$z$_028=v$z$_029[1];
                if(v$z$_029[2]==false){
                    v$z$_022[2]=false;
                    return v$z$_022;
                };
            }else{
                v$z$_029=v$z$_F6(v$z$_019,v$z$_020,v$z$_015[6]);
                v$z$_027=v$z$_029[0];
                v$z$_028=v$z$_029[1];
            };
        };
        var v$z$_030=new Array();
        var v$z$_031=0;
        var v$z$_032=0;
        var v$z$_033=0;
        var v$z$_034=0;
        if(v$z$_021==false){
            if(v$z$_023==false){
                v$z$_030=v$z$_F2(1-v$z$_019,-v$z$_020,v$z$_015[3]);
                v$z$_012=v$z$_030[0];
                v$z$_013=v$z$_030[1];
            }else{
                v$z$_014=true;
                v$z$_030=v$z$_F4(v$z$_019,v$z$_020,v$z$_015[5]);
                if(v$z$_030[2]==true){
                    v$z$_029[2]=true;
                }else{
                    v$z$_022[2]=false;
                    return v$z$_022;
                };
            };
        }else{
            v$z$_030=new Array(3);
            v$z$_030[0]=v$z$_012;
            v$z$_030[1]=v$z$_013;
            v$z$_030[2]=true;
            v$z$_031=v$z$_030[0];
            v$z$_032=v$z$_030[1];
            v$z$_025=v$z$_026(1-v$z$_019,-v$z$_020);
            v$z$_033=v$z$_025[0];
            v$z$_034=v$z$_025[1];
            var v$z$_035=v$z$_033**2+v$z$_034**2;
            var v$z$_036=v$z$_033/v$z$_035;
            var v$z$_037=-v$z$_034/v$z$_035;
            var v$z$_038=v$z$_027**2+v$z$_028**2;
            var v$z$_039=v$z$_027/v$z$_038;
            var v$z$_040=-v$z$_028/v$z$_038;
            var v$z$_041=v$z$_036*v$z$_039-v$z$_037*v$z$_040;
            var v$z$_042=v$z$_036*v$z$_040+v$z$_037*v$z$_039;
            v$z$_033=v$z$_041;
            v$z$_034=v$z$_042;
            v$z$_041=v$z$_033*v$z$_031-v$z$_034*v$z$_032;
            v$z$_042=v$z$_033*v$z$_032+v$z$_034*v$z$_031;
            v$z$_033=v$z$_041;
            v$z$_034=v$z$_042;
            v$z$_031=v$z$_033;
            v$z$_032=v$z$_034;
            v$z$_030[0]=v$z$_031;
            v$z$_030[1]=v$z$_032;
        };
        if(v$z$_030[2]==false){
            v$z$_022[2]=false;
            return v$z$_022;
        };
        v$z$_031=v$z$_030[0];
        v$z$_032=v$z$_030[1];
        v$z$_033=v$z$_031;
        v$z$_034=v$z$_032;
        if(v$z$_023==false&&v$z$_021==false){
            v$z$_033=v$z$_025[0];
            v$z$_034=v$z$_025[1];
            var v$z$_041=v$z$_033*v$z$_027-v$z$_034*v$z$_028;
            var v$z$_042=v$z$_033*v$z$_028+v$z$_034*v$z$_027;
            v$z$_033=v$z$_041;
            v$z$_034=v$z$_042;
            v$z$_041=v$z$_033*v$z$_031-v$z$_034*v$z$_032;
            v$z$_042=v$z$_033*v$z$_032+v$z$_034*v$z$_031;
            v$z$_033=v$z$_041;
            v$z$_034=v$z$_042;
        };
        var v$z$_043=v$z$_044(v$z$_033,v$z$_034);
        if(v$z$_029[2]==false){v$z$_043=false};
        if(v$z$_030[2]==false){v$z$_043=false};
        v$z$_022[0]=v$z$_033;
        v$z$_022[1]=v$z$_034;
        v$z$_022[2]=v$z$_043;
        if(v$z$_023==true){
            v$z$_022[2]=false;
            if(v$z$_043==true){v$z$_022[2]=2};
        };
        return v$z$_022;
    };
    function v$z$_F2(v$z$_019,v$z$_020,v$z$_045){
        var v$z$_046=(3+5*v$z$_045)-v$z$_019;
        v$z$_046=Math.round(v$z$_046);
        if(v$z$_046<0){v$z$_046=0};
        var v$z$_047=(((Math.log(Math.abs(v$z$_020)+1)+1))**(0.9106*v$z$_045))-1;
        if(v$z$_047>8.7714){v$z$_047=8.7714};
        var v$z$_048=Math.round(2**(8+v$z$_047));
        var v$z$_049=0;
        var v$z$_050=0;
        for(var v$z$_051=1;v$z$_051<=(v$z$_048-1);v$z$_051++){
            v$z$_049=v$z$_049+Math.cos(v$z$_020*Math.log(v$z$_051))/v$z$_051**v$z$_019;
            v$z$_050=v$z$_050-Math.sin(v$z$_020*Math.log(v$z$_051))/v$z$_051**v$z$_019;
        };
        var v$z$_052=v$z$_019-1;
        var v$z$_053=-v$z$_020;
        var v$z$_054=v$z$_052**2+v$z$_053**2;
        var v$z$_055=v$z$_048*v$z$_052/v$z$_054;
        var v$z$_056=v$z$_048*v$z$_053/v$z$_054;
        var v$z$_057=Math.cos(v$z$_020*Math.log(v$z$_048))/v$z$_048**v$z$_019;
        var v$z$_058=-Math.sin(v$z$_020*Math.log(v$z$_048))/v$z$_048**v$z$_019;
        var v$z$_059=v$z$_049+v$z$_057/2+v$z$_055*v$z$_057-v$z$_056*v$z$_058;
        var v$z$_060=v$z$_050+v$z$_058/2+v$z$_055*v$z$_058+v$z$_056*v$z$_057;
        var v$z$_061=Math.floor(v$z$_046/2);
        var v$z$_062=2;
        var v$z$_063=2;
        var v$z$_064=0;
        var v$z$_065=0;
        for(var v$z$_066=1;v$z$_066<=v$z$_061;v$z$_066++){
            var v$z$_067=v$z$_016[2*v$z$_066]/v$z$_063;
            var v$z$_068=v$z$_019;
            var v$z$_069=v$z$_020;
            for(var v$z$_070=1;v$z$_070<=(2*v$z$_066-2);v$z$_070++){
                var v$z$_071=v$z$_019+v$z$_070;
                var v$z$_072=v$z$_068*v$z$_071-v$z$_069*v$z$_020;
                var v$z$_073=v$z$_068*v$z$_020+v$z$_069*v$z$_071;
                v$z$_068=v$z$_072;
                v$z$_069=v$z$_073;
            };
            v$z$_068=v$z$_068*v$z$_067;
            v$z$_069=v$z$_069*v$z$_067;
            var v$z$_074=v$z$_019+2*v$z$_066-1;
            var v$z$_075=v$z$_020;
            var v$z$_076=Math.cos(v$z$_075*Math.log(v$z$_048))/v$z$_048**v$z$_074;
            var v$z$_077=-Math.sin(v$z$_075*Math.log(v$z$_048))/v$z$_048**v$z$_074;
            var v$z$_078=v$z$_068*v$z$_076-v$z$_069*v$z$_077;
            var v$z$_079=v$z$_068*v$z$_077+v$z$_069*v$z$_076;
            v$z$_064=v$z$_064+v$z$_078;
            v$z$_065=v$z$_065+v$z$_079;
            v$z$_063=v$z$_063*(v$z$_062+1)*(v$z$_062+2);
            v$z$_062=v$z$_062+2;
        };
        v$z$_059=v$z$_059+v$z$_064;
        v$z$_060=v$z$_060+v$z$_065;
        var v$z$_022=new Array(3);
        v$z$_022[0]=v$z$_059;
        v$z$_022[1]=v$z$_060;
        v$z$_022[2]=v$z$_044(v$z$_059,v$z$_060);
        return v$z$_022;
    };
    function v$z$_F4(v$z$_019,v$z$_020,v$z$_045){
        var v$z$_080=1-2*Math.cos(v$z$_020*Math.log(2))/2**v$z$_019;
        var v$z$_081=-2*Math.sin(v$z$_020*Math.log(2))/2**v$z$_019;
        var v$z$_082=v$z$_080**2+v$z$_081**2;
        var v$z$_083=0;
        var v$z$_084=0;
        var v$z$_085=-1;
        var v$z$_086=v$z$_010.length;
        var v$z$_087=new Array(v$z$_086);
        var v$z$_088=new Array(v$z$_086);
        var v$z$_089=Math.floor(6+v$z$_045*(1022-6));
        var v$z$_090=true;
        if(2**v$z$_019==0){v$z$_089=-1};
        if(v$z$_044(2**v$z$_019)==false){v$z$_089=-1};
        var v$z$_091;
        var v$z$_092;
        for(var v$z$_051=0;v$z$_051<=v$z$_089;v$z$_051++){
            var v$z$_093=v$z$_089-v$z$_051;
            var v$z$_094=0;
            var v$z$_095=0;
            var v$z$_096=2**(-(v$z$_093+1));
            for(var v$z$_097=0;v$z$_097<=v$z$_093;v$z$_097++){
                var v$z$_098=v$z$_099(v$z$_093,v$z$_097);
                if(v$z$_090){
                    v$z$_085=-v$z$_085;
                    v$z$_091=v$z$_085*Math.cos(v$z$_020*Math.log(v$z$_097+1))/(v$z$_097+1)**v$z$_019;
                    v$z$_092=(-v$z$_085)*Math.sin(v$z$_020*Math.log(v$z$_097+1))/(v$z$_097+1)**v$z$_019;
                    v$z$_087[v$z$_097]=v$z$_091;
                    v$z$_088[v$z$_097]=v$z$_092;
                }else{
                    v$z$_091=v$z$_087[v$z$_097];
                    v$z$_092=v$z$_088[v$z$_097];
                };
                var v$z$_100=v$z$_096*v$z$_091*v$z$_098;
                var v$z$_101=v$z$_096*v$z$_092*v$z$_098;
                v$z$_094=v$z$_094+v$z$_100;
                v$z$_095=v$z$_095+v$z$_101;
                if(v$z$_097==v$z$_093){v$z$_090=false};
            };
            if(v$z$_082>1){
                v$z$_083=v$z$_083+v$z$_094/v$z$_082;
                v$z$_084=v$z$_084+v$z$_095/v$z$_082;
            }else{
                v$z$_083=v$z$_083+v$z$_094;
                v$z$_084=v$z$_084+v$z$_095;
            };
            if(v$z$_044(v$z$_083,v$z$_084)==false){
                v$z$_089=v$z$_017;
                v$z$_051=v$z$_089;
            };
        };
        var v$z$_102=(v$z$_083*v$z$_080-v$z$_084*v$z$_081);
        var v$z$_103=(v$z$_083*v$z$_081+v$z$_084*v$z$_080);
        if(v$z$_082<=1){
            v$z$_102=v$z$_102/v$z$_082;
            v$z$_103=v$z$_103/v$z$_082;
        };
        var v$z$_022=new Array(3);
        v$z$_022[0]=v$z$_102;
        v$z$_022[1]=v$z$_103;
        v$z$_022[2]=v$z$_044(v$z$_102,v$z$_103);
        return v$z$_022;
    };
    function v$z$_F6(v$z$_019,v$z$_020,v$z$_045){
        var v$z$_104=Math.floor(((v$z$_045*2.608*10**6)+2000));
        var v$z$_105=v$z$_019;
        var v$z$_106=v$z$_020;
        var v$z$_107=v$z$_105;
        var v$z$_108=v$z$_106;
        var v$z$_109=v$z$_105**2+v$z$_106**2;
        v$z$_105=v$z$_105/v$z$_109;
        v$z$_106=-v$z$_106/v$z$_109;
        var v$z$_110=v$z$_005;
        var v$z$_111=v$z$_005;
        var v$z$_112=1;
        var v$z$_113=0;
        var v$z$_114=0;
        var v$z$_115=0;
        var v$z$_116=0;
        var v$z$_117=0;
        var v$z$_118=v$z$_105;
        var v$z$_119=0;
        for(var v$z$_051=1;v$z$_051<=v$z$_104;v$z$_051++){
            v$z$_119=v$z$_107+v$z$_051;
            v$z$_115=(v$z$_119**2+v$z$_108**2)/v$z$_051;
            v$z$_116=v$z$_119/v$z$_115;
            v$z$_117=-v$z$_108/v$z$_115;
            v$z$_118=v$z$_105;
            v$z$_105=v$z$_105*v$z$_116-v$z$_106*v$z$_117;
            v$z$_106=v$z$_118*v$z$_117+v$z$_106*v$z$_116;
            if(v$z$_112==-1||v$z$_051%100==0||v$z$_051==v$z$_104){
                var v$z$_120=v$z$_051**v$z$_019;
                var v$z$_121=v$z$_120*Math.cos(-v$z$_020*Math.log(v$z$_051));
                var v$z$_122=-v$z$_120*Math.sin(-v$z$_020*Math.log(v$z$_051));
                var v$z$_123=v$z$_121*v$z$_105-v$z$_122*v$z$_106;
                var v$z$_124=v$z$_121*v$z$_106+v$z$_122*v$z$_105;
                var v$z$_125=v$z$_044(v$z$_123,v$z$_124);
                if(v$z$_120==0){v$z$_125=false};
                if(v$z$_125==true){
                    v$z$_113=v$z$_105;
                    v$z$_114=v$z$_106;
                    v$z$_110=v$z$_123;
                    v$z$_111=v$z$_124;
                    if(v$z$_112>-1){v$z$_112=v$z$_051};
                }else{
                    if(v$z$_112>-1&&v$z$_112!=1){
                        v$z$_051=v$z$_112;
                        v$z$_112=-1;
                        v$z$_105=v$z$_113;
                        v$z$_106=v$z$_114;
                    }else{
                        v$z$_051=v$z$_104;
                    };
                };
            };
        };
        v$z$_105=v$z$_110;
        v$z$_106=v$z$_111;
        var v$z$_022=new Array(3);
        v$z$_022[0]=v$z$_105;
        v$z$_022[1]=v$z$_106;
        v$z$_022[2]=v$z$_044(v$z$_105,v$z$_106);
        return v$z$_022;
    };
    function v$z$_026(v$z$_019,v$z$_020){
        var v$z$_126=0;
        var v$z$_127=0;
        var v$z$_128=(2*v$z$_018)**v$z$_019*Math.cos(-v$z$_020*Math.log(2*v$z$_018))/v$z$_018;
        var v$z$_129=(2*v$z$_018)**v$z$_019*Math.sin(-v$z$_020*Math.log(2*v$z$_018))/(-v$z$_018);
        var v$z$_130=Math.sin(v$z$_019*v$z$_018/2)*Math.cosh(v$z$_020*v$z$_018/2);
        var v$z$_131=Math.cos(v$z$_019*v$z$_018/2)*Math.sinh(v$z$_020*v$z$_018/2);
        v$z$_126=v$z$_128*v$z$_130-v$z$_129*v$z$_131;
        v$z$_127=v$z$_128*v$z$_131+v$z$_129*v$z$_130;
        var v$z$_022=new Array(3);
        v$z$_022[2]=v$z$_044(v$z$_126,v$z$_127);
        if(v$z$_022[2]==false){
            v$z$_126=v$z$_005;
            v$z$_127=v$z$_005;
        };
        v$z$_022[0]=v$z$_126;
        v$z$_022[1]=v$z$_127;
        return v$z$_022;
    };
    function v$z$_099(v$z$_132,v$z$_133){
        if(v$z$_007>=v$z$_132){return v$z$_134(v$z$_132,v$z$_133,true)};
        v$z$_011=performance.now();
        for(var v$z$_051=(v$z$_007+1);v$z$_051<=v$z$_132;v$z$_051++){
            v$z$_010.push(v$z$_008);
            for(var v$z$_097=0;v$z$_097<=Math.floor(v$z$_051/2);v$z$_097++){
                var v$z$_135=v$z$_134(v$z$_051,v$z$_097,false);
                v$z$_009.push(v$z$_135);
                v$z$_008=v$z$_008+1;
            };
        };
        v$z$_011=performance.now()-v$z$_011;
        v$z$_007=v$z$_132;
        return v$z$_134(v$z$_132,v$z$_133,true);
    };
    function v$z$_134(v$z$_136,v$z$_137,v$z$_138){
        if(v$z$_137>v$z$_136/2){v$z$_137=v$z$_136-v$z$_137};
        if(v$z$_138){
            var v$z$_139=v$z$_010[v$z$_136]+v$z$_137;
            return v$z$_009[v$z$_139];
        };
        var v$z$_140=1;
        var v$z$_141=2;
        var v$z$_142=v$z$_136-v$z$_137+1;
        var v$z$_143=2**1014;
        var v$z$_144=1/v$z$_143;
        var v$z$_145=false;
        var v$z$_146;
        do{
            v$z$_146=false;
            if(!v$z$_145){
                for(var v$z$_147=v$z$_141;v$z$_147<=v$z$_137;v$z$_147++){
                    v$z$_141=v$z$_147+1;
                    v$z$_140=v$z$_140/v$z$_147;
                    if(v$z$_140<v$z$_144){
                        if(v$z$_142<v$z$_136+1){v$z$_147=v$z$_017};
                    };
                };
            };
            if(v$z$_145){
                for(var v$z$_147=v$z$_142;v$z$_147<=v$z$_136;v$z$_147++){
                    v$z$_142=v$z$_147+1;
                    v$z$_140=v$z$_140*v$z$_147;
                    if(v$z$_140>v$z$_143){
                        if(v$z$_141<v$z$_137+1){v$z$_147=v$z$_017};
                    };
                };
            };
            v$z$_145=!v$z$_145;
            if(v$z$_141<v$z$_137+1){v$z$_146=true};
            if(v$z$_142<v$z$_136+1){v$z$_146=true};
        }while(v$z$_146);
        return v$z$_140;
    };
    function v$z$_044(v$z$_148,v$z$_149){
        var v$z$_150=true;
        if(v$z$_148!=undefined){
            v$z$_150=typeof v$z$_148==='number'&&isFinite(v$z$_148);
        };
        if(v$z$_150==true){
            if(v$z$_149!=undefined){v$z$_150=typeof v$z$_149==='number'&&isFinite(v$z$_149)};
        };
        return v$z$_150;
    };
    function v$z$_151(v$z$_152,v$z$_153){
        var v$z$_154=Math.log10(Math.abs(v$z$_152));
        if(v$z$_044(v$z$_154)==false){v$z$_154=0};
        var v$z$_155=Math.log10(Math.abs(v$z$_153));
        if(v$z$_044(v$z$_155)==false){v$z$_155=0};
        var v$z$_156=v$z$_154;
        if(v$z$_155>v$z$_156){v$z$_156=v$z$_155};
        v$z$_156=10**v$z$_156;
        v$z$_152=v$z$_152/v$z$_156;
        v$z$_153=v$z$_153/v$z$_156;
        var v$z$_157;
        var v$z$_158;
        var v$z$_159=(v$z$_152**2+v$z$_153**2)**(0.5);
        if(v$z$_159<0){v$z$_159=0};
        if(v$z$_159>0){
            v$z$_157=Math.asin(Math.abs(v$z$_153)/v$z$_159);
            v$z$_158=v$z$_159*v$z$_156;
            if(v$z$_152>=0){
                if(v$z$_153<0){v$z$_157=2*v$z$_018-v$z$_157};
            }else{
                if(v$z$_153>=0){v$z$_157=v$z$_018-v$z$_157}else{v$z$_157=v$z$_018+v$z$_157};
            };
        }else{
            v$z$_157=0;
            v$z$_158=0;
        };
        if(v$z$_157>v$z$_018){v$z$_157=v$z$_157-2*v$z$_018};
        if(v$z$_157<=-v$z$_018){v$z$_157=v$z$_018};
        var v$z$_160=new Array();
        if(v$z$_044(v$z$_158,v$z$_157)==true){
            v$z$_160.push(v$z$_158);
            v$z$_160.push(v$z$_157);
        }else{
            v$z$_160.push(v$z$_005);
            v$z$_160.push(v$z$_005);
        };
        return v$z$_160;
    };
    function v$z$_161(v$z$_162,v$z$_163,v$z$_164,v$z$_165){
        var v$z$_166=v$z$_044(v$z$_162,v$z$_163);
        if(v$z$_166==true){
            v$z$_166=v$z$_044(v$z$_164);
            if(v$z$_166==true){
                if(v$z$_164<0){v$z$_166=false};
                if(v$z$_164>1){v$z$_166=false};
            };
            if(v$z$_166==true){if(typeof v$z$_165!=='boolean'){v$z$_166=false}};
        };
        return v$z$_166;
    };
    // ****** MAIN PROGRAM START ******
    var v$z$_167=performance.now();
    var v$z$_168=realPart;
    var v$z$_169=imaginaryPart;
    var v$z$_170=approximationEffort;
    var v$z$_171=verifyResult_onOff;
    v$z$_014=false;
    var v$z$_172=v$z$_161(v$z$_168,v$z$_169,v$z$_170,v$z$_171);
    if(v$z$_172==false){
        var v$z$_173=new Array(7);
        v$z$_173[0]=v$z$_006;
        v$z$_173[1]=v$z$_006;
        v$z$_173[2]=v$z$_006;
        v$z$_173[3]=v$z$_006;
        v$z$_173[4]=v$z$_006;
        v$z$_173[5]=false;
        if(v$z$_001==true){v$z$_173[6]='0 ms'}else{v$z$_173[6]=0};
        return v$z$_173;
    };
    v$z$_effort_adjust(v$z$_170);
    var v$z$_174=v$z$_168;
    var v$z$_175=v$z$_169;
    var v$z$_176=1;
    if(v$z$_169<0){
        v$z$_175=-v$z$_175;
        v$z$_176=-1;
    };
    var v$z$_177=v$z$_171;
    var v$z$_178;
    var v$z$_179;
    var v$z$_180=false;
    var v$z$_181=-1;
    if(v$z$_177==true){v$z$_181=0};
    if(v$z$_174>=-3){
        if(v$z$_002==false&&Math.abs(v$z$_174-0.5)<10**(-10)){v$z$_174=0.5-10**(-10)};
        var v$z$_182=v$z$_F2(v$z$_174,v$z$_175,v$z$_015[1]);
        var v$z$_183=v$z$_182[0];
        var v$z$_184=v$z$_182[1];
        if(v$z$_177==true&&v$z$_182[2]==true){
            var v$z$_185=v$z$_F4(v$z$_174,v$z$_175,v$z$_015[2]);
            var v$z$_186=v$z$_185[0];
            var v$z$_187=v$z$_185[1];
            if(v$z$_185[2]==true){v$z$_181=v$z$_calculate_trust(v$z$_183,v$z$_184,v$z$_186,v$z$_187)};
        };
        v$z$_178=v$z$_183;
        v$z$_179=v$z$_176*v$z$_184;
        v$z$_180=v$z$_182[2];
        if(v$z$_003==true&&v$z$_180==true&&v$z$_174<0&&Math.abs(Math.round(v$z$_174)-v$z$_174)<10**(-12)){
            if(Math.abs(v$z$_175)<10**(-12)&&Math.round(v$z$_174)%2==0){
                v$z$_178=0;
                v$z$_179=0;
            };
        };
    }else{
        if(v$z$_168>=-152){
            var v$z$_188=false;
            var v$z$_189=false;
            if(v$z$_003==true&&Math.abs(Math.round(v$z$_174)-v$z$_174)<10**(-12)){
                if(Math.abs(v$z$_175)<10**(-12)){
                    if(Math.round(Math.abs(v$z$_174))%2==1){v$z$_189=true}else{v$z$_188=true};
                };
                if(v$z$_188==true){v$z$_189=true};
            };
            var v$z$_190=v$z$_F1F3(v$z$_174,v$z$_175,false);
            var v$z$_191=v$z$_190[0];
            var v$z$_192=v$z$_190[1];
            var v$z$_193=v$z$_190[2];
            if(v$z$_193==2){v$z$_190[2]=false};
            if(v$z$_177==true&&v$z$_190[2]==true){
                if(v$z$_003==true&&v$z$_189==true){
                    if(Math.round(Math.abs(v$z$_174))%2==1){v$z$_174=Math.round(v$z$_174)-10**(-12)};
                };
                if(v$z$_188==false){
                    var v$z$_194=v$z$_F1F3(v$z$_174,v$z$_175,true);
                    var v$z$_195=v$z$_194[0];
                    var v$z$_196=v$z$_194[1];
                    if(v$z$_194[2]==true){v$z$_181=v$z$_calculate_trust(v$z$_191,v$z$_192,v$z$_195,v$z$_196)};
                }else{
                    v$z$_181=v$z$_calculate_trust(1,1,1,1);
                };
            };
            if(v$z$_188==true&&v$z$_193==true){v$z$_191=0};
            if(v$z$_189==true&&v$z$_193==true){v$z$_192=0};
            v$z$_178=v$z$_191;
            v$z$_179=v$z$_176*v$z$_192;
            if(v$z$_193==2){v$z$_193=true};
            v$z$_180=v$z$_193;
        }else{
            v$z$_180=false;
        };
    };
    var v$z$_197;
    if(v$z$_180==true){
        v$z$_197=v$z$_151(v$z$_178,v$z$_179);
    }else{
        v$z$_197=new Array();
        v$z$_197.push(v$z$_005);
        v$z$_197.push(v$z$_005);
    };
    v$z$_167=performance.now()-v$z$_167-v$z$_011;
    v$z$_011=0;
    if(v$z$_167<0){v$z$_167=0};
    var v$z$_198=new Array(7);
    var v$z$_199=v$z$_044(v$z$_178,v$z$_179);
    if(v$z$_199==true){v$z$_199=v$z$_044(v$z$_197[0],v$z$_197[1])};
    if(v$z$_044(v$z$_181)==false){v$z$_181=0};
    if(v$z$_180==false){v$z$_199=false};
    if(v$z$_199==true){
        v$z$_198[0]=v$z$_178;
        v$z$_198[1]=v$z$_179;
        v$z$_198[2]=v$z$_197[0];
        v$z$_198[3]=v$z$_197[1];
    }else{
        v$z$_198[0]=v$z$_005;
        v$z$_198[1]=v$z$_005;
        v$z$_198[2]=v$z$_005;
        v$z$_198[3]=v$z$_005;
    };
    v$z$_198[4]=v$z$_181;
    v$z$_198[5]=v$z$_199;
    if(v$z$_001==true){
        v$z$_198[6]=Math.floor(v$z$_167).toString() + ' ms'}else{v$z$_198[6]=Math.floor(v$z$_167)};
    return v$z$_198; // MainReturn vanilla_zeta()
    // ****** MAIN PROGRAM END ******
    // --- EDIT start ---
    function v$z$_alert_manager(alert_nr){
        var v$z$_200=false;
        // _______________________________________________________________________
        if(alert_nr==1){v$z$_200=true;alert('error_effort_declare:\neffort < 0')};
        if(alert_nr==2){v$z$_200=true;alert('error_effort_declare:\neffort > 1')};
        // _______________________________________________________________________
        if(v$z$_200==false){alert('unknown alert: vanilla_zeta()')};
    };
    function v$z$_effort_adjust(v$z$_201){
        v$z$_015=new Array(7);
        v$z$_015[0]=v$z$_201;          // effort_reference
        // Effort adjust start ______________________________________
        v$z$_015[1]=v$z$_015[0]**1.62; // effort_adjust_F2
        v$z$_015[2]=v$z$_015[0]**3.24; // effort_adjust_F4
        v$z$_015[3]=v$z$_015[0]**2;    // effort_adjust_F1(F2)\F3(F2)
        v$z$_015[4]=v$z$_015[0]**2;    // effort_adjust_F1(F6_gamma)
        v$z$_015[5]=v$z$_015[0]**4;    // effort_adjust_F1(overflow)
        v$z$_015[6]=v$z$_015[0]**2;    // effort_adjust_F3(F6_gamma)
        // Effort adjust end ________________________________________
        // Value range monitoring: 0<= effortValue <=1
        for(var v$z$_202=0;v$z$_202<v$z$_015.length;v$z$_202++){
            if(v$z$_015[v$z$_202]<0){v$z$_alert_manager(1)};
            if(v$z$_015[v$z$_202]>1){v$z$_alert_manager(2)};
        };
    };
    function v$z$_calculate_trust(v$z$_resultValueReal,v$z$_resultValueImag,v$z$_checkValueReal,v$z$_checkValueImag){
        // Calculate the difference between the result- and check number
        var delta_resChk=((v$z$_resultValueReal-v$z$_checkValueReal)**2+(v$z$_resultValueImag-v$z$_checkValueImag)**2)**(0.5);
        var v$z$_203=(v$z$_resultValueReal**2+v$z$_resultValueImag**2)**(0.5);
        if(v$z$_203>1||v$z$_002==false){delta_resChk=delta_resChk/v$z$_203}else{delta_resChk=delta_resChk*v$z$_203};
        return v$z$_204(delta_resChk); // Transform the difference into a trust value
    };
    function v$z$_204(v$z$_205){
        // trustTransformFunction
        v$z$_205=-Math.log10(v$z$_205+10**(-51));
        if(v$z$_205>0){
            v$z$_205=v$z$_205*(1-10**(-10));
            v$z$_205=((((100**0.25)**v$z$_205)/100)**(2/457));
            if(v$z$_205>1){v$z$_205=1};
            v$z$_205=1-(1-v$z$_205)/0.00998259143149816;
        };
        if(v$z$_205<0){v$z$_205=0};
        if(v$z$_205>1){v$z$_205=1};
        v$z$_205=v$z$_205*0.999999999999999;
        if(v$z$_044(v$z$_205)==false){v$z$_205=0};
        return v$z$_205;
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
