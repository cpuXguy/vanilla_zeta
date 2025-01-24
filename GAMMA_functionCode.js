// JavaScript Method for Evaluating the Euler Gamma Function:
// Handling Complex and Negative Real Numbers.
// In line 589, you can activate the test function:
// Follow the program flow afterward to understand its workings.
// For full understanding, visit: WWW.ZETA-CALCULATOR.COM
// My best wishes for the success of your ventures!

/* Scroll down to see the Gamma function code!

JavaScript Method for Evaluating the Euler Gamma Function: Handling Complex and Negative Real Numbers.
The vanilla_gamma() function below is the JavaScript Gamma function also used by the calculator above.
The vanilla_gamma() code originates here from: www.zeta-calculator.com
Feel free to copy and paste it into your project.
It's a plug-and-play component!

The project location is available at:
https://www.zeta-calculator.com/

* Copy the following functions into your project:
*
* Function: vanilla_gamma()
* Function optional: Test_vanilla_gamma() for immediate testing of vanilla_gamma()
*
* To copy the functions, follow these steps:
*
* 1. Select the code (including comments).
* 2. Press (Ctrl + C) on your keyboard to copy.
* 3. Paste the copied code into your project by pressing (Ctrl + V).
*
* Copy area: */

function vanilla_gamma(realPart, imaginaryPart, approximationEffort, verifyResult_onOff){
    // #################################
    // Version : 004
    // Released: Jan. 25, 2025
    // Location: www.zeta-calculator.com
    // #################################
    if(typeof v$g$_000==='undefined'){
        // Pre-settings_________________
        // 'ms' for milliseconds written in the result time-output.
        v$g$_001 = true; // showTimeWithMsUnit: Default= true
        //______________________________
        // Adapted calculation near results approaching zero.
        // If 'true': this can lower the strictness
        // for the calculation of the Trust-Value.
        v$g$_002 = false; // adaptedZero: Default= false
        //______________________________
        // End of pre-settings__________
        v$g$_004();
    };
    function v$g$_004(){
        v$g$_000=true;
        v$g$_005='#err';
        v$g$_006='#ins';
        v$g$_007=new Array();
        v$g$_008=new Array();
        v$g$_008.push(1);
        v$g$_008.push(-0.5);
        v$g$_008.push(1/6);
        v$g$_008.push(0);
        v$g$_008.push(-1/30);
        v$g$_008.push(0);
        v$g$_008.push(1/42);
        v$g$_008.push(0);
        v$g$_008.push(-1/30);
        v$g$_008.push(0);
        v$g$_008.push(5/66);
        v$g$_009=Number.MAX_SAFE_INTEGER;
        v$g$_010=Math.PI;
        v$g$_011=undefined;
        v$g$_012=undefined;
        v$g$_013=undefined;
        v$g$_014=undefined;
        v$g$_015=new Array();
        v$g$_016=new Array();
        v$g$_017=new Array();
        v$g$_018=new Array();
        v$g$_019=new Array();
        v$g$_020=new Array();
        v$g$_021=new Array();
    };
    function v$g$_F1(v$g$_022,v$g$_023){
        var v$g$_024=new Array(3);
        v$g$_024[0]=v$g$_005;
        v$g$_024[1]=v$g$_005;
        v$g$_024[2]=false;
        var v$g$_025=v$g$_026(v$g$_022,v$g$_023);
        if(v$g$_025[2]==false){return v$g$_024};
        v$g$_024[2]=true;
        var v$g$_027=new Array(3);
        if(1-v$g$_022==v$g$_014){
            v$g$_027[0]=v$g$_012;
            v$g$_027[1]=-v$g$_013;
            v$g$_027[2]=true;
        }else{
            v$g$_027=v$g$_F6(1-v$g$_022,-v$g$_023,v$g$_007[3]);
        };
        var v$g$_028=0;
        var v$g$_029=0;
        v$g$_028=v$g$_027[0];
        v$g$_029=v$g$_027[1];
        if(v$g$_027[2]==false){
            v$g$_024[2]=false;
            return v$g$_024;
        };
        var v$g$_030=new Array();
        var v$g$_031=0;
        var v$g$_032=0;
        var v$g$_033=0;
        var v$g$_034=0;
        v$g$_030=v$g$_F2(1-v$g$_022,-v$g$_023);
        if(v$g$_030[2]==false){
            v$g$_024[2]=false;
            return v$g$_024;
        };
        v$g$_031=v$g$_030[0];
        v$g$_032=v$g$_030[1];
        v$g$_033=v$g$_025[0];
        v$g$_034=v$g$_025[1];
        var v$g$_035=v$g$_033*v$g$_028-v$g$_034*v$g$_029;
        var v$g$_036=v$g$_033*v$g$_029+v$g$_034*v$g$_028;
        v$g$_033=v$g$_035;
        v$g$_034=v$g$_036;
        v$g$_035=v$g$_033*v$g$_031-v$g$_034*v$g$_032;
        v$g$_036=v$g$_033*v$g$_032+v$g$_034*v$g$_031;
        v$g$_033=v$g$_035;
        v$g$_034=v$g$_036;
        var v$g$_037=v$g$_038(v$g$_033,v$g$_034);
        if(v$g$_027[2]==false){v$g$_037=false};
        if(v$g$_030[2]==false){v$g$_037=false};
        v$g$_024[0]=v$g$_033;
        v$g$_024[1]=v$g$_034;
        v$g$_024[2]=v$g$_037;
        return v$g$_024;
    };
    function v$g$_F2(v$g$_022,v$g$_023){
        var v$g$_024=new Array(3);
        var v$g$_039=v$g$_020.indexOf(v$g$_022);
        if(v$g$_039>-1){
            if(v$g$_021[v$g$_039]==-v$g$_023){
                v$g$_024[0]=v$g$_017[v$g$_039];
                v$g$_024[1]=-v$g$_018[v$g$_039];
                v$g$_024[2]=v$g$_019[v$g$_039];
                return v$g$_024;
            };
        };
        var v$g$_040=1;
        if(v$g$_023<0){
            v$g$_023=-v$g$_023;
            v$g$_040=-1;
        };
        var v$g$_041 = v$g$_007[2];
        var v$g$_042=(3+5*v$g$_041)-v$g$_022;
        v$g$_042=Math.round(v$g$_042);
        if(v$g$_042<0){v$g$_042=0};
        var v$g$_043=(((Math.log(Math.abs(v$g$_023)+1)+1))**(0.9106*v$g$_041))-1;
        if(v$g$_043>8.7714){v$g$_043=8.7714};
        var v$g$_044=Math.round(2**(8+v$g$_043));
        var v$g$_045=0;
        var v$g$_046=0;
        for(var v$g$_047=1;v$g$_047<=(v$g$_044-1);v$g$_047++){
            v$g$_045=v$g$_045+Math.cos(v$g$_023*Math.log(v$g$_047))/v$g$_047**v$g$_022;
            v$g$_046=v$g$_046-Math.sin(v$g$_023*Math.log(v$g$_047))/v$g$_047**v$g$_022;
        };
        var v$g$_048=v$g$_022-1;
        var v$g$_049=-v$g$_023;
        var v$g$_050=v$g$_048**2+v$g$_049**2;
        var v$g$_051=v$g$_044*v$g$_048/v$g$_050;
        var v$g$_052=v$g$_044*v$g$_049/v$g$_050;
        var v$g$_053=Math.cos(v$g$_023*Math.log(v$g$_044))/v$g$_044**v$g$_022;
        var v$g$_054=-Math.sin(v$g$_023*Math.log(v$g$_044))/v$g$_044**v$g$_022;
        var v$g$_055=v$g$_045+v$g$_053/2+v$g$_051*v$g$_053-v$g$_052*v$g$_054;
        var v$g$_056=v$g$_046+v$g$_054/2+v$g$_051*v$g$_054+v$g$_052*v$g$_053;
        var v$g$_057=Math.floor(v$g$_042/2);
        var v$g$_058=2;
        var v$g$_059=2;
        var v$g$_060=0;
        var v$g$_061=0;
        for(var v$g$_062=1;v$g$_062<=v$g$_057;v$g$_062++){
            var v$g$_063=v$g$_008[2*v$g$_062]/v$g$_059;
            var v$g$_064=v$g$_022;
            var v$g$_065=v$g$_023;
            for(var v$g$_066=1;v$g$_066<=(2*v$g$_062-2);v$g$_066++){
                var v$g$_067=v$g$_022+v$g$_066;
                var v$g$_068=v$g$_064*v$g$_067-v$g$_065*v$g$_023;
                var v$g$_069=v$g$_064*v$g$_023+v$g$_065*v$g$_067;
                v$g$_064=v$g$_068;
                v$g$_065=v$g$_069;
            };
            v$g$_064=v$g$_064*v$g$_063;
            v$g$_065=v$g$_065*v$g$_063;
            var v$g$_070=v$g$_022+2*v$g$_062-1;
            var v$g$_071=v$g$_023;
            var v$g$_072=Math.cos(v$g$_071*Math.log(v$g$_044))/v$g$_044**v$g$_070;
            var v$g$_073=-Math.sin(v$g$_071*Math.log(v$g$_044))/v$g$_044**v$g$_070;
            var v$g$_074=v$g$_064*v$g$_072-v$g$_065*v$g$_073;
            var v$g$_075=v$g$_064*v$g$_073+v$g$_065*v$g$_072;
            v$g$_060=v$g$_060+v$g$_074;
            v$g$_061=v$g$_061+v$g$_075;
            v$g$_059=v$g$_059*(v$g$_058+1)*(v$g$_058+2);
            v$g$_058=v$g$_058+2;
        };
        v$g$_055=v$g$_055+v$g$_060;
        v$g$_056=v$g$_056+v$g$_061;
        v$g$_024[0]=v$g$_055;
        v$g$_024[1]=v$g$_056*v$g$_040;
        v$g$_024[2]=v$g$_038(v$g$_055,v$g$_056);
        v$g$_017.push(v$g$_024[0]);
        v$g$_018.push(v$g$_024[1]);
        v$g$_019.push(v$g$_024[2]);
        v$g$_020.push(v$g$_022);
        v$g$_021.push(v$g$_023*v$g$_040);
        return v$g$_024;
    };
    function v$g$_F6(v$g$_022,v$g$_023,v$g$_041){
        var v$g$_024=new Array(3);
        if(v$g$_022==v$g$_014){
            v$g$_024[0]=v$g$_012;
            v$g$_024[1]=-v$g$_013;
            v$g$_024[2]=true;
            return v$g$_024;
        };
        var v$g$_076=Math.floor(v$g$_007[4]*v$g$_041*(5.216*10**6)+2000);
        var v$g$_077=Math.floor(v$g$_076*v$g$_007[3]/v$g$_007[1]+1000);
        var v$g$_078=v$g$_022;
        var v$g$_079=v$g$_023;
        var v$g$_080=v$g$_078;
        var v$g$_081=v$g$_079;
        var v$g$_082=v$g$_078**2+v$g$_079**2;
        v$g$_078=v$g$_078/v$g$_082;
        v$g$_079=-v$g$_079/v$g$_082;
        var v$g$_083=v$g$_005;
        var v$g$_084=v$g$_005;
        var v$g$_085=0;
        var v$g$_086=v$g$_078;
        var v$g$_087=v$g$_079;
        var v$g$_088=0;
        var v$g$_089=0;
        var v$g$_090=0;
        var v$g$_091=v$g$_078;
        var v$g$_092=0;
        var v$g$_093=false;
        var v$g$_094=v$g$_011;
        for(var v$g$_047=1;v$g$_047<=v$g$_076;v$g$_047++){
            v$g$_092=v$g$_080+v$g$_047;
            v$g$_088=(v$g$_092**2+v$g$_081**2)/v$g$_047;
            v$g$_089=v$g$_092/v$g$_088;
            v$g$_090=-v$g$_081/v$g$_088;
            v$g$_091=v$g$_078;
            v$g$_078=v$g$_078*v$g$_089-v$g$_079*v$g$_090;
            v$g$_079=v$g$_091*v$g$_090+v$g$_079*v$g$_089;
            if((v$g$_047-1)%100==0||v$g$_047==v$g$_076||v$g$_093==true||v$g$_088==0||v$g$_047==v$g$_077){
                var v$g$_095=v$g$_047**v$g$_022;
                var v$g$_096=v$g$_095*Math.cos(-v$g$_023*Math.log(v$g$_047));
                var v$g$_097=-v$g$_095*Math.sin(-v$g$_023*Math.log(v$g$_047));
                var v$g$_098=v$g$_096*v$g$_078-v$g$_097*v$g$_079;
                var v$g$_099=v$g$_096*v$g$_079+v$g$_097*v$g$_078;
                var v$g$_100=v$g$_038(v$g$_098,v$g$_099);
                if(v$g$_098==0&&v$g$_099==0){v$g$_100=false};
                if(v$g$_088==0){v$g$_100=false};
                if(v$g$_095==0){v$g$_100=false};
                if(v$g$_100==true){
                    v$g$_086=v$g$_078;
                    v$g$_087=v$g$_079;
                    v$g$_083=v$g$_098;
                    v$g$_084=v$g$_099;
                    v$g$_085=v$g$_047;
                    if(v$g$_047==v$g$_077&&typeof v$g$_012==='undefined'){
                        v$g$_014=v$g$_022;
                        v$g$_012=v$g$_083;
                        v$g$_013=v$g$_084;
                    };
                }else{
                    if(v$g$_094==true){v$g$_088=0};
                    if(v$g$_093==false&&v$g$_085>0&&v$g$_088!=0){
                        v$g$_047=v$g$_085;
                        v$g$_078=v$g$_086;
                        v$g$_079=v$g$_087;
                    }else{
                        v$g$_047=v$g$_009;
                        if(v$g$_088==0){
                            v$g$_083=v$g$_006;
                            v$g$_084=v$g$_006;
                        };
                    };
                    v$g$_093=true;
                    v$g$_011=true;
                };
            };
        };
        v$g$_078=v$g$_083;
        v$g$_079=v$g$_084;
        v$g$_024[0]=v$g$_078;
        v$g$_024[1]=v$g$_079;
        v$g$_024[2]=v$g$_038(v$g$_078,v$g$_079);
        return v$g$_024;
    };
    function v$g$_038(v$g$_101,v$g$_102){
        var v$g$_103=true;
        if(v$g$_101!=undefined){
            v$g$_103=typeof v$g$_101==='number'&&isFinite(v$g$_101);
        };
        if(v$g$_103==true){
            if(v$g$_102!=undefined){v$g$_103=typeof v$g$_102==='number'&&isFinite(v$g$_102)};
        };
        return v$g$_103;
    };
    function v$g$_104(v$g$_105,v$g$_106){
        var v$g$_107=Math.log10(Math.abs(v$g$_105));
        if(v$g$_038(v$g$_107)==false){v$g$_107=0};
        var v$g$_108=Math.log10(Math.abs(v$g$_106));
        if(v$g$_038(v$g$_108)==false){v$g$_108=0};
        var v$g$_109=v$g$_107;
        if(v$g$_108>v$g$_109){v$g$_109=v$g$_108};
        v$g$_109=10**v$g$_109;
        v$g$_105=v$g$_105/v$g$_109;
        v$g$_106=v$g$_106/v$g$_109;
        var v$g$_110;
        var v$g$_111;
        var v$g$_112=(v$g$_105**2+v$g$_106**2)**(0.5);
        if(v$g$_112<0){v$g$_112=0};
        if(v$g$_112>0){
            v$g$_110=Math.asin(Math.abs(v$g$_106)/v$g$_112);
            v$g$_111=v$g$_112*v$g$_109;
            if(v$g$_105>=0){
                if(v$g$_106<0){v$g$_110=2*v$g$_010-v$g$_110};
            }else{
                if(v$g$_106>=0){v$g$_110=v$g$_010-v$g$_110}else{v$g$_110=v$g$_010+v$g$_110};
            };
        }else{
            v$g$_110=0;
            v$g$_111=0;
        };
        if(v$g$_110>v$g$_010){v$g$_110=v$g$_110-2*v$g$_010};
        if(v$g$_110<=-v$g$_010){v$g$_110=v$g$_010};
        var v$g$_113=new Array();
        if(v$g$_038(v$g$_111,v$g$_110)==true){
            v$g$_113.push(v$g$_111);
            v$g$_113.push(v$g$_110);
        }else{
            v$g$_113.push(v$g$_005);
            v$g$_113.push(v$g$_005);
        };
        return v$g$_113;
    };
    function v$g$_026(v$g$_022,v$g$_023){
        var v$g$_114=0;
        var v$g$_115=0;
        var v$g$_116=(2*v$g$_010)**v$g$_022*Math.cos(-v$g$_023*Math.log(2*v$g$_010))/v$g$_010;
        var v$g$_117=(2*v$g$_010)**v$g$_022*Math.sin(-v$g$_023*Math.log(2*v$g$_010))/(-v$g$_010);
        var v$g$_118=Math.sin(v$g$_022*v$g$_010/2)*Math.cosh(v$g$_023*v$g$_010/2);
        var v$g$_119=Math.cos(v$g$_022*v$g$_010/2)*Math.sinh(v$g$_023*v$g$_010/2);
        v$g$_114=v$g$_116*v$g$_118-v$g$_117*v$g$_119;
        v$g$_115=v$g$_116*v$g$_119+v$g$_117*v$g$_118;
        var v$g$_024=new Array(3);
        v$g$_024[2]=v$g$_038(v$g$_114,v$g$_115);
        if(v$g$_024[2]==false){
            v$g$_114=v$g$_005;
            v$g$_115=v$g$_005;
        };
        v$g$_024[0]=v$g$_114;
        v$g$_024[1]=v$g$_115;
        return v$g$_024;
    };
    function v$g$_120(v$g$_121,v$g$_122,v$g$_123,v$g$_124){
        var v$g$_125=v$g$_038(v$g$_121,v$g$_122);
        if(v$g$_125==true){
            v$g$_125=v$g$_038(v$g$_123);
            if(v$g$_125==true){
                if(v$g$_123<0){v$g$_125=false};
                if(v$g$_123>1){v$g$_125=false};
            };
            if(v$g$_125==true){if(typeof v$g$_124!=='boolean'){v$g$_125=false}};
        };
        return v$g$_125;
    };
    // ****** MAIN PROGRAM START ******
    var v$g$_126=performance.now();
    var v$g$_127=realPart;
    var v$g$_128=imaginaryPart;
    var v$g$_129=approximationEffort;
    var v$g$_130=verifyResult_onOff;
    var v$g$_131=v$g$_120(v$g$_127,v$g$_128,v$g$_129,v$g$_130);
    v$g$_011=false;
    v$g$_012=undefined;
    v$g$_013=undefined;
    v$g$_014=undefined;
    v$g$_015=new Array();
    v$g$_016=new Array();
    v$g$_017=new Array();
    v$g$_018=new Array();
    v$g$_019=new Array();
    v$g$_020=new Array();
    v$g$_021=new Array();
    if(v$g$_131==false){
        var v$g$_132=new Array(7);
        v$g$_132[0]=v$g$_006;
        v$g$_132[1]=v$g$_006;
        v$g$_132[2]=v$g$_006;
        v$g$_132[3]=v$g$_006;
        v$g$_132[4]=v$g$_006;
        v$g$_132[5]=false;
        if(v$g$_001==true){v$g$_132[6]='0 ms'}else{v$g$_132[6]=0};
        return v$g$_132;
    };
    v$g$_effort_adjust(v$g$_129);
    var v$g$_133=false;
    if(v$g$_128<0){
        v$g$_133=true;
        v$g$_128=-v$g$_128;
    };
    var v$g$_134=v$g$_F6(v$g$_127,v$g$_128,v$g$_007[1]);
    var v$g$_135=v$g$_134[0];
    var v$g$_136=v$g$_134[1];
    var v$g$_137=v$g$_134[2];
    var v$g$_138;
    var v$g$_139=new Array(7);
    if(v$g$_137==true){
        if(v$g$_133==true){v$g$_136=-v$g$_136};
        v$g$_138=v$g$_104(v$g$_135,v$g$_136);
        v$g$_137=v$g$_038(v$g$_138[0],v$g$_138[1]);
    };
    var v$g$_140=false;
    var v$g$_141=v$g$_005;
    var v$g$_142=v$g$_005;
    if(v$g$_137==true&&v$g$_130==true&&v$g$_011==false){
        v$g$_011=true;
        v$g$_140=true;
        var v$g$_143=new Array(3);
        var v$g$_144=10**(-5);
        if((Math.abs(v$g$_127-1)<v$g$_144||Math.abs(v$g$_127-3)<v$g$_144)&&Math.abs(v$g$_128)<v$g$_144){
            if(Math.abs(v$g$_127-1)<v$g$_144){
                if(v$g$_127>=1){v$g$_127=1+v$g$_144}else{v$g$_127=1-v$g$_144};
            }else{
                if(v$g$_127>=3){v$g$_127=3+v$g$_144}else{v$g$_127=3-v$g$_144};
            };
        };
        if(Math.abs(v$g$_127-0.5)<10**(-10)){v$g$_127=0.5-10**(-10)};
        var v$g$_145=v$g$_127;
        v$g$_145=1-v$g$_145;
        if(v$g$_145>=-3){v$g$_143=v$g$_F2(v$g$_145,v$g$_128)}else{v$g$_143=v$g$_F1(v$g$_145,v$g$_128)};
        var v$g$_146;
        if(v$g$_143[2]==false){v$g$_140=false};
        if(v$g$_140==true){
            v$g$_143[1]=-v$g$_143[1];
            v$g$_145=v$g$_127;
            if(v$g$_145>=-3){v$g$_146=v$g$_F2(v$g$_145,v$g$_128)}else{v$g$_146=v$g$_F1(v$g$_145,v$g$_128)};
            if(v$g$_146[2]==false){v$g$_140=false};
        };
        if(v$g$_140==true){
            var v$g$_147=v$g$_143[0];
            var v$g$_148=v$g$_143[1];
            var v$g$_149=v$g$_146[0];
            var v$g$_150=v$g$_146[1];
            var v$g$_151=v$g$_149**2+v$g$_150**2;
            var v$g$_152;
            var v$g$_153;
            v$g$_152=(v$g$_147*v$g$_149+v$g$_148*v$g$_150)/v$g$_151;
            v$g$_153=(v$g$_149*v$g$_148-v$g$_147*v$g$_150)/v$g$_151;
            var v$g$_154=v$g$_026(1-v$g$_127,v$g$_128);
            v$g$_154[1]=-v$g$_154[1];
            var v$g$_155=v$g$_154[0];
            var v$g$_156=v$g$_154[1];
            var v$g$_157=v$g$_155**2+v$g$_156**2;
            v$g$_141=(v$g$_152*v$g$_155+v$g$_153*v$g$_156)/v$g$_157;
            v$g$_142=(v$g$_155*v$g$_153-v$g$_152*v$g$_156)/v$g$_157;
            if(v$g$_133==true){v$g$_142=-v$g$_142};
            v$g$_140=v$g$_038(v$g$_141,v$g$_142);
        };
    };
    if(v$g$_137==true){
        v$g$_139[0]=v$g$_135;
        v$g$_139[1]=v$g$_136;
        v$g$_139[2]=v$g$_138[0];
        v$g$_139[3]=v$g$_138[1];
    }else{
        v$g$_139[0]=v$g$_005;
        v$g$_139[1]=v$g$_005;
        v$g$_139[2]=v$g$_005;
        v$g$_139[3]=v$g$_005;
    };
    var v$g$_158=-1;
    if(v$g$_130==true){
        if(v$g$_140==true){v$g$_158=v$g$_calculate_trust(v$g$_135,v$g$_136,v$g$_141,v$g$_142)}else{v$g$_158=0};
        if(v$g$_038(v$g$_158)==false){v$g$_158=0};
    };
    v$g$_139[4]=v$g$_158;
    v$g$_139[5]=v$g$_137;
    v$g$_126=performance.now()-v$g$_126;
    v$g$_126=Math.round(v$g$_126);
    if(v$g$_001==true){v$g$_139[6]=Math.floor(v$g$_126).toString()+' ms'}else{v$g$_139[6]=Math.floor(v$g$_126)};
    return v$g$_139; // MainReturn vanilla_gamma()
    // ****** MAIN PROGRAM END ******
    // --- EDIT start ---
    function v$g$_alert_manager(alert_nr){
        var v$g$_159=false;
        // _______________________________________________________________________
        if(alert_nr==1){v$g$_159=true;alert('error_effort_declare:\neffort < 0')};
        if(alert_nr==2){v$g$_159=true;alert('error_effort_declare:\neffort > 1')};
        if(alert_nr==3){v$g$_159=true;alert('errorValue[3]_higherValue[1]')};
        // _______________________________________________________________________
        if(v$g$_159==false){alert('unknown alert: vanilla_gamma()')};
    };
    function v$g$_effort_adjust(v$g$_160){
        v$g$_007=new Array(5);
        v$g$_007[0]=v$g$_160;          // effort_reference
        // Effort adjust start _________________________________
        v$g$_007[1]=v$g$_007[0]**3;    // effort_adjust_F6
        v$g$_007[2]=v$g$_007[0]**2;    // effort_adjust_F2verify
        v$g$_007[3]=v$g$_007[1]*0.5;   // effort_adjust_F6verify
        v$g$_007[4]=1.000;             // amplifier_F6
        // Effort adjust end ___________________________________
        // Value range monitoring: 0<= effortValue <=1
        for(var v$g$_161=0;v$g$_161<v$g$_007.length-1;v$g$_161++){
            if(v$g$_007[v$g$_161]<0){v$g$_alert_manager(1)};
            if(v$g$_007[v$g$_161]>1){v$g$_alert_manager(2)};
        };
        if(v$g$_007[3]>v$g$_007[1]){v$g$_alert_manager(3)};
    };
    function v$g$_calculate_trust(v$g$_resultValueReal,v$g$_resultValueImag,v$g$_checkValueReal,v$g$_checkValueImag){
        // Calculate the difference between the result- and check number
        var delta_resChk=((v$g$_resultValueReal-v$g$_checkValueReal)**2+(v$g$_resultValueImag-v$g$_checkValueImag)**2)**(0.5);
        var v$g$_162=(v$g$_resultValueReal**2+v$g$_resultValueImag**2)**(0.5);
        if(v$g$_162>1||v$g$_002==false){delta_resChk=delta_resChk/v$g$_162}else{delta_resChk=delta_resChk*v$g$_162};
        return v$g$_163(delta_resChk); // Transform the difference into a trust value
    };
    function v$g$_163(v$g$_164){
        // trustTransformFunction
        v$g$_164=-Math.log10(v$g$_164+10**(-51));
        if(v$g$_164>0){
            v$g$_164=v$g$_164*(1-10**(-10));
            v$g$_164=((((100**0.25)**v$g$_164)/100)**(2/457));
            if(v$g$_164>1){v$g$_164=1};
            v$g$_164=1-(1-v$g$_164)/0.00998259143149816;
        };
        if(v$g$_164<0){v$g$_164=0};
        if(v$g$_164>1){v$g$_164=1};
        v$g$_164=v$g$_164*0.999999999999999;
        if(v$g$_038(v$g$_164)==false){v$g$_164=0};
        return v$g$_164;
    };
    // --- EDIT end ---
}; // vanilla_gamma() functionEnd

function Test_vanilla_gamma() {

    // Inputs: ensure that the inputs comply with the specified ranges, or the process will fail.
    var input_Real = 7;            // Real part:      -Number.MAX_VALUE <= input_Real <= Number.MAX_VALUE
    var input_Imag = 4;            // Imaginary part: -Number.MAX_VALUE <= input_Imag <= Number.MAX_VALUE
    var input_Effort = 0.67;       // Effort level:   0 <= input_Effort <= 1
    var input_TrustEnabled = true; // Trust (verify result) enabled: true, false

    // Execute the vanilla_gamma function
    var output_array = vanilla_gamma(input_Real, input_Imag, input_Effort, input_TrustEnabled);

    /* Output Descriptions:
    output_array[0]: Real result of Gamma
    output_array[1]: Imaginary result of Gamma
    output_array[2]: Polar radius result of Gamma
    output_array[3]: Polar angle result of Gamma in radians
    output_array[4]: Trust value of the calculation
    output_array[5]: Boolean indicating if the calculation was successful
    output_array[6]: Process time of 'vanilla_gamma()' in milliseconds
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
    alert('Gamma Real Result:\n= ' + output_array[0]);
    alert('Gamma Imaginary Result:\n= ' + output_array[1]);
    alert('Gamma Polar Radius:\n= ' + output_array[2]);
    alert('Gamma Polar Angle:\n= ' + output_array[3] + ' (Rad)');
    alert('Trust Value:\n= ' + output_array[4]);
    alert('Process Time for vanilla_gamma():\n= ' + output_array[6]);

}; // Test vanilla_gamma() functionEnd

// Set to 'true' to enable test mode for the vanilla_gamma() function.
var v$g$_isTestModeEnabled = false;
if (v$g$_isTestModeEnabled) {
    Test_vanilla_gamma();
    alert('Test_vanilla_gamma() completed.');
};

/*** TERMS AND CONDITIONS ***
DO WHAT YOU WANT License (CC0 1.0 Universal)

The work, including the code 'vanilla_gamma()', is released under the CC0 1.0 Universal license.
The code 'vanilla_gamma()' has its original location at:
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
