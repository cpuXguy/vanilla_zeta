// JavaScript Method for Evaluating the Euler Gamma Function:
// Handling Complex and Negative Real Numbers.
// In line 581, you can activate the test function:
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
    // Version : 007
    // Released: Mar. 10, 2025
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
        v$g$_009=1-10**(-15);
        v$g$_010=Number.MAX_SAFE_INTEGER;
        v$g$_011=Math.PI;
        v$g$_012=undefined;
        v$g$_013=undefined;
        v$g$_014=undefined;
        v$g$_015=undefined;
        v$g$_016=-3;
    };
    function v$g$_F1(v$g$_017,v$g$_018){
        var v$g$_019=new Array(3);
        v$g$_019[0]=v$g$_005;
        v$g$_019[1]=v$g$_005;
        v$g$_019[2]=false;
        var v$g$_020=v$g$_021(v$g$_017,v$g$_018);
        if(v$g$_020[2]==false){return v$g$_019};
        v$g$_019[2]=true;
        var v$g$_022=new Array(3);
        if(Math.abs(1-v$g$_017-v$g$_015)<10**(-12)){
            v$g$_022[0]=v$g$_013;
            v$g$_022[1]=-v$g$_014;
            v$g$_022[2]=true;
        }else{
            v$g$_022=v$g$_F6(1-v$g$_017,-v$g$_018,v$g$_007[2]/2);
        };
        var v$g$_023=0;
        var v$g$_024=0;
        v$g$_023=v$g$_022[0];
        v$g$_024=v$g$_022[1];
        if(v$g$_022[2]==false){
            v$g$_019[2]=false;
            return v$g$_019;
        };
        var v$g$_025=new Array();
        var v$g$_026=0;
        var v$g$_027=0;
        var v$g$_028=0;
        var v$g$_029=0;
        v$g$_025=v$g$_F2(1-v$g$_017,-v$g$_018);
        if(v$g$_025[2]==false){
            v$g$_019[2]=false;
            return v$g$_019;
        };
        v$g$_026=v$g$_025[0];
        v$g$_027=v$g$_025[1];
        v$g$_028=v$g$_020[0];
        v$g$_029=v$g$_020[1];
        var v$g$_030=v$g$_028*v$g$_023-v$g$_029*v$g$_024;
        var v$g$_031=v$g$_028*v$g$_024+v$g$_029*v$g$_023;
        v$g$_028=v$g$_030;
        v$g$_029=v$g$_031;
        v$g$_030=v$g$_028*v$g$_026-v$g$_029*v$g$_027;
        v$g$_031=v$g$_028*v$g$_027+v$g$_029*v$g$_026;
        v$g$_028=v$g$_030;
        v$g$_029=v$g$_031;
        var v$g$_032=v$g$_033(v$g$_028,v$g$_029);
        if(v$g$_022[2]==false){v$g$_032=false};
        if(v$g$_025[2]==false){v$g$_032=false};
        v$g$_019[0]=v$g$_028;
        v$g$_019[1]=v$g$_029;
        v$g$_019[2]=v$g$_032;
        return v$g$_019;
    };
    function v$g$_F2(v$g$_017,v$g$_018){
        var v$g$_019=new Array(3);
        if(v$g$_017<v$g$_016||(1-v$g$_017)<v$g$_016){
            v$g$_019[0]=1;
            v$g$_019[1]=0;
            v$g$_019[2]=true;
            return v$g$_019;
        };
        var v$g$_034=1;
        if(v$g$_018<0){
            v$g$_018=-v$g$_018;
            v$g$_034=-1;
        };
        var v$g$_035=v$g$_007[2];
        var v$g$_036=(3+5*v$g$_035)-v$g$_017;
        v$g$_036=Math.round(v$g$_036);
        if(v$g$_036<0){v$g$_036=0};
        var v$g$_037=(((Math.log(Math.abs(v$g$_018)+1)+1))**(0.9106*v$g$_035))-1;
        if(v$g$_037>8.7714){v$g$_037=8.7714};
        var v$g$_038=Math.round(2**(8+v$g$_037));
        var v$g$_039=0;
        var v$g$_040=0;
        for(var v$g$_041=1;v$g$_041<=(v$g$_038-1);v$g$_041++){
            v$g$_039=v$g$_039+Math.cos(v$g$_018*Math.log(v$g$_041))/v$g$_041**v$g$_017;
            v$g$_040=v$g$_040-Math.sin(v$g$_018*Math.log(v$g$_041))/v$g$_041**v$g$_017;
        };
        var v$g$_042=v$g$_017-1;
        var v$g$_043=-v$g$_018;
        var v$g$_044=v$g$_042**2+v$g$_043**2;
        var v$g$_045=v$g$_038*v$g$_042/v$g$_044;
        var v$g$_046=v$g$_038*v$g$_043/v$g$_044;
        var v$g$_047=Math.cos(v$g$_018*Math.log(v$g$_038))/v$g$_038**v$g$_017;
        var v$g$_048=-Math.sin(v$g$_018*Math.log(v$g$_038))/v$g$_038**v$g$_017;
        var v$g$_049=v$g$_039+v$g$_047/2+v$g$_045*v$g$_047-v$g$_046*v$g$_048;
        var v$g$_050=v$g$_040+v$g$_048/2+v$g$_045*v$g$_048+v$g$_046*v$g$_047;
        var v$g$_051=Math.floor(v$g$_036/2);
        var v$g$_052=2;
        var v$g$_053=2;
        var v$g$_054=0;
        var v$g$_055=0;
        for(var v$g$_056=1;v$g$_056<=v$g$_051;v$g$_056++){
            var v$g$_057=v$g$_008[2*v$g$_056]/v$g$_053;
            var v$g$_058=v$g$_017;
            var v$g$_059=v$g$_018;
            for(var v$g$_060=1;v$g$_060<=(2*v$g$_056-2);v$g$_060++){
                var v$g$_061=v$g$_017+v$g$_060;
                var v$g$_062=v$g$_058*v$g$_061-v$g$_059*v$g$_018;
                var v$g$_063=v$g$_058*v$g$_018+v$g$_059*v$g$_061;
                v$g$_058=v$g$_062;
                v$g$_059=v$g$_063;
            };
            v$g$_058=v$g$_058*v$g$_057;
            v$g$_059=v$g$_059*v$g$_057;
            var v$g$_064=v$g$_017+2*v$g$_056-1;
            var v$g$_065=v$g$_018;
            var v$g$_066=Math.cos(v$g$_065*Math.log(v$g$_038))/v$g$_038**v$g$_064;
            var v$g$_067=-Math.sin(v$g$_065*Math.log(v$g$_038))/v$g$_038**v$g$_064;
            var v$g$_068=v$g$_058*v$g$_066-v$g$_059*v$g$_067;
            var v$g$_069=v$g$_058*v$g$_067+v$g$_059*v$g$_066;
            v$g$_054=v$g$_054+v$g$_068;
            v$g$_055=v$g$_055+v$g$_069;
            v$g$_053=v$g$_053*(v$g$_052+1)*(v$g$_052+2);
            v$g$_052=v$g$_052+2;
        };
        v$g$_049=v$g$_049+v$g$_054;
        v$g$_050=v$g$_050+v$g$_055;
        v$g$_019[0]=v$g$_049;
        v$g$_019[1]=v$g$_050*v$g$_034;
        v$g$_019[2]=v$g$_033(v$g$_049,v$g$_050);
        return v$g$_019;
    };
    function v$g$_F6(v$g$_017,v$g$_018,v$g$_035){
        var v$g$_070=Math.floor(v$g$_007[3]*v$g$_035*(5.2*10**6)+26000);
        var v$g$_071=Math.floor(v$g$_070/2);
        if(typeof v$g$_013!=='undefined'){v$g$_071=-1};
        var v$g$_072=v$g$_017;
        var v$g$_073=v$g$_018;
        var v$g$_074=v$g$_072;
        var v$g$_075=v$g$_073;
        var v$g$_076=v$g$_072**2+v$g$_073**2;
        v$g$_072=v$g$_072/v$g$_076;
        v$g$_073=-v$g$_073/v$g$_076;
        var v$g$_077=v$g$_005;
        var v$g$_078=v$g$_005;
        var v$g$_079=0;
        var v$g$_080=v$g$_072;
        var v$g$_081=v$g$_073;
        var v$g$_082=0;
        var v$g$_083=0;
        var v$g$_084=0;
        var v$g$_085=v$g$_072;
        var v$g$_086=0;
        var v$g$_087=false;
        var v$g$_088=v$g$_012;
        for(var v$g$_041=1;v$g$_041<=v$g$_070;v$g$_041++){
            v$g$_086=v$g$_074+v$g$_041;
            v$g$_082=(v$g$_086**2+v$g$_075**2)/v$g$_041;
            v$g$_083=v$g$_086/v$g$_082;
            v$g$_084=-v$g$_075/v$g$_082;
            v$g$_085=v$g$_072;
            v$g$_072=v$g$_072*v$g$_083-v$g$_073*v$g$_084;
            v$g$_073=v$g$_085*v$g$_084+v$g$_073*v$g$_083;
            if((v$g$_041-1)%100==0||v$g$_041==v$g$_070||v$g$_087==true||v$g$_082==0||v$g$_041==v$g$_071){
                var v$g$_089=v$g$_041**v$g$_017;
                var v$g$_090=v$g$_089*Math.cos(-v$g$_018*Math.log(v$g$_041));
                var v$g$_091=-v$g$_089*Math.sin(-v$g$_018*Math.log(v$g$_041));
                var v$g$_092=v$g$_090*v$g$_072-v$g$_091*v$g$_073;
                var v$g$_093=v$g$_090*v$g$_073+v$g$_091*v$g$_072;
                var v$g$_094=v$g$_033(v$g$_092,v$g$_093);
                if(v$g$_092==0&&v$g$_093==0){v$g$_094=false};
                if(v$g$_082==0){v$g$_094=false};
                if(v$g$_089==0){v$g$_094=false};
                if(v$g$_094==true){
                    v$g$_080=v$g$_072;
                    v$g$_081=v$g$_073;
                    v$g$_077=v$g$_092;
                    v$g$_078=v$g$_093;
                    v$g$_079=v$g$_041;
                    if(v$g$_041==v$g$_071&&typeof v$g$_013==='undefined'){
                        v$g$_015=v$g$_017;
                        v$g$_013=v$g$_077;
                        v$g$_014=v$g$_078;
                    };
                }else{
                    if(v$g$_088==true){v$g$_082=0};
                    if(v$g$_087==false&&v$g$_079>0&&v$g$_082!=0){
                        v$g$_041=v$g$_079;
                        v$g$_072=v$g$_080;
                        v$g$_073=v$g$_081;
                    }else{
                        v$g$_041=v$g$_010;
                        if(v$g$_082==0){
                            v$g$_077=v$g$_006;
                            v$g$_078=v$g$_006;
                        };
                    };
                    v$g$_087=true;
                    v$g$_012=true;
                };
            };
        };
        v$g$_072=v$g$_077;
        v$g$_073=v$g$_078;
        var v$g$_019=new Array(3);
        v$g$_019[0]=v$g$_072;
        v$g$_019[1]=v$g$_073;
        v$g$_019[2]=v$g$_033(v$g$_072,v$g$_073);
        return v$g$_019;
    };
    function v$g$_033(v$g$_095,v$g$_096){
        var v$g$_097=true;
        if(v$g$_095!=undefined){
            v$g$_097=typeof v$g$_095==='number'&&isFinite(v$g$_095);
        };
        if(v$g$_097==true){
            if(v$g$_096!=undefined){v$g$_097=typeof v$g$_096==='number'&&isFinite(v$g$_096)};
        };
        return v$g$_097;
    };
    function v$g$_098(v$g$_099,v$g$_100){
        var v$g$_101=Math.log10(Math.abs(v$g$_099));
        if(v$g$_033(v$g$_101)==false){v$g$_101=0};
        var v$g$_102=Math.log10(Math.abs(v$g$_100));
        if(v$g$_033(v$g$_102)==false){v$g$_102=0};
        var v$g$_103=v$g$_101;
        if(v$g$_102>v$g$_103){v$g$_103=v$g$_102};
        v$g$_103=10**v$g$_103;
        v$g$_099=v$g$_099/v$g$_103;
        v$g$_100=v$g$_100/v$g$_103;
        var v$g$_104=new Array();
        v$g$_104.push(v$g$_099);
        v$g$_104.push(v$g$_100);
        v$g$_104.push(v$g$_103);
        return v$g$_104;
    };
    function v$g$_105(v$g$_106,v$g$_107){
        var v$g$_108=v$g$_098(v$g$_106,v$g$_107);
        v$g$_106=v$g$_108[0];
        v$g$_107=v$g$_108[1];
        var v$g$_109;
        var v$g$_110;
        var v$g$_111=(v$g$_106**2+v$g$_107**2)**(0.5);
        if(v$g$_111<0){v$g$_111=0};
        if(v$g$_111>0){
            v$g$_109=Math.asin(Math.abs(v$g$_107)/v$g$_111);
            v$g$_110=v$g$_111*v$g$_108[2];
            if(v$g$_106>=0){
                if(v$g$_107<0){v$g$_109=2*v$g$_011-v$g$_109};
            }else{
                if(v$g$_107>=0){v$g$_109=v$g$_011-v$g$_109}else{v$g$_109=v$g$_011+v$g$_109};
            };
        }else{
            v$g$_109=0;
            v$g$_110=0;
        };
        if(v$g$_109>v$g$_011){v$g$_109=v$g$_109-2*v$g$_011};
        if(v$g$_109<=-v$g$_011){v$g$_109=v$g$_011};
        var v$g$_112=new Array();
        if(v$g$_033(v$g$_110,v$g$_109)==true){
            v$g$_112.push(v$g$_110);
            v$g$_112.push(v$g$_109);
        }else{
            v$g$_112.push(v$g$_005);
            v$g$_112.push(v$g$_005);
        };
        return v$g$_112;
    };
    function v$g$_021(v$g$_017,v$g$_018){
        var v$g$_113=0;
        var v$g$_114=0;
        var v$g$_115=(2*v$g$_011)**v$g$_017*Math.cos(-v$g$_018*Math.log(2*v$g$_011))/v$g$_011;
        var v$g$_116=(2*v$g$_011)**v$g$_017*Math.sin(-v$g$_018*Math.log(2*v$g$_011))/(-v$g$_011);
        var v$g$_117=Math.sin(v$g$_017*v$g$_011/2)*Math.cosh(v$g$_018*v$g$_011/2);
        var v$g$_118=Math.cos(v$g$_017*v$g$_011/2)*Math.sinh(v$g$_018*v$g$_011/2);
        v$g$_113=v$g$_115*v$g$_117-v$g$_116*v$g$_118;
        v$g$_114=v$g$_115*v$g$_118+v$g$_116*v$g$_117;
        var v$g$_019=new Array(3);
        v$g$_019[2]=v$g$_033(v$g$_113,v$g$_114);
        if(v$g$_019[2]==false){
            v$g$_113=v$g$_005;
            v$g$_114=v$g$_005;
        };
        v$g$_019[0]=v$g$_113;
        v$g$_019[1]=v$g$_114;
        return v$g$_019;
    };
    function v$g$_119(v$g$_120,v$g$_121,v$g$_122,v$g$_123){
        var v$g$_124=v$g$_033(v$g$_120,v$g$_121);
        if(v$g$_124==true){
            v$g$_124=v$g$_033(v$g$_122);
            if(v$g$_124==true){
                if(v$g$_122<0){v$g$_124=false};
                if(v$g$_122>1){v$g$_124=false};
            };
            if(v$g$_124==true){if(typeof v$g$_123!=='boolean'){v$g$_124=false}};
        };
        return v$g$_124;
    };
    // ****** MAIN PROGRAM START ******
    var v$g$_125=performance.now();
    var v$g$_126=realPart;
    var v$g$_127=imaginaryPart;
    var v$g$_128=approximationEffort;
    var v$g$_129=verifyResult_onOff;
    var v$g$_130=v$g$_119(v$g$_126,v$g$_127,v$g$_128,v$g$_129);
    v$g$_012=false;
    v$g$_013=undefined;
    v$g$_014=undefined;
    v$g$_015=undefined;
    if(v$g$_130==false){
        var v$g$_131=new Array(7);
        v$g$_131[0]=v$g$_006;
        v$g$_131[1]=v$g$_006;
        v$g$_131[2]=v$g$_006;
        v$g$_131[3]=v$g$_006;
        v$g$_131[4]=v$g$_006;
        v$g$_131[5]=false;
        if(v$g$_001==true){v$g$_131[6]='0 ms'}else{v$g$_131[6]=0};
        return v$g$_131;
    };
    v$g$_effort_adjust(v$g$_128);
    var v$g$_132=false;
    if(v$g$_127<0){
        v$g$_132=true;
        v$g$_127=-v$g$_127;
    };
    var v$g$_133=v$g$_F6(v$g$_126,v$g$_127,v$g$_007[1]);
    var v$g$_134=v$g$_133[0];
    var v$g$_135=v$g$_133[1];
    var v$g$_136=v$g$_133[2];
    var v$g$_137;
    var v$g$_138=new Array(7);
    if(v$g$_136==true){
        if(v$g$_132==true){v$g$_135=-v$g$_135};
        v$g$_137=v$g$_105(v$g$_134,v$g$_135);
        v$g$_136=v$g$_033(v$g$_137[0],v$g$_137[1]);
    };
    var v$g$_139=false;
    var v$g$_140=v$g$_005;
    var v$g$_141=v$g$_005;
    if(v$g$_136==true&&v$g$_129==true&&v$g$_012==false){
        v$g$_012=true;
        v$g$_139=true;
        var v$g$_142=new Array(3);
        var v$g$_143=10**(-5);
        if((Math.abs(v$g$_126-1)<v$g$_143||Math.abs(v$g$_126+v$g$_016)<v$g$_143)&&Math.abs(v$g$_127)<v$g$_143){
            if(Math.abs(v$g$_126-1)<v$g$_143){
                if(v$g$_126>=1){v$g$_126=1+v$g$_143}else{v$g$_126=1-v$g$_143};
            }else{
                if(v$g$_126>=3){v$g$_126=3+v$g$_143}else{v$g$_126=3-v$g$_143};
            };
        };
        if(Math.abs(v$g$_126-0.5)<10**(-10)){v$g$_126=0.5-10**(-10)};
        var v$g$_144=v$g$_126;
        v$g$_144=1-v$g$_144;
        if(v$g$_144>=v$g$_016){v$g$_142=v$g$_F2(v$g$_144,v$g$_127)}else{v$g$_142=v$g$_F1(v$g$_144,v$g$_127)};
        var v$g$_145;
        if(v$g$_142[2]==false){v$g$_139=false};
        if(v$g$_139==true){
            v$g$_142[1]=-v$g$_142[1];
            v$g$_144=v$g$_126;
            if(v$g$_144>=v$g$_016){v$g$_145=v$g$_F2(v$g$_144,v$g$_127)}else{v$g$_145=v$g$_F1(v$g$_144,v$g$_127)};
            if(v$g$_145[2]==false){v$g$_139=false};
        };
        if(v$g$_139==true){
            var v$g$_146=v$g$_142[0];
            var v$g$_147=v$g$_142[1];
            var v$g$_148=v$g$_145[0];
            var v$g$_149=v$g$_145[1];
            var v$g$_150=v$g$_148**2+v$g$_149**2;
            var v$g$_151;
            var v$g$_152;
            v$g$_151=(v$g$_146*v$g$_148+v$g$_147*v$g$_149)/v$g$_150;
            v$g$_152=(v$g$_148*v$g$_147-v$g$_146*v$g$_149)/v$g$_150;
            var v$g$_153=v$g$_021(1-v$g$_126,v$g$_127);
            v$g$_153[1]=-v$g$_153[1];
            var v$g$_154=v$g$_153[0];
            var v$g$_155=v$g$_153[1];
            var v$g$_156=v$g$_154**2+v$g$_155**2;
            v$g$_140=(v$g$_151*v$g$_154+v$g$_152*v$g$_155)/v$g$_156;
            v$g$_141=(v$g$_154*v$g$_152-v$g$_151*v$g$_155)/v$g$_156;
            if(v$g$_132==true){v$g$_141=-v$g$_141};
            v$g$_139=v$g$_033(v$g$_140,v$g$_141);
        };
    };
    if(v$g$_136==true){
        v$g$_138[0]=v$g$_134;
        v$g$_138[1]=v$g$_135;
        v$g$_138[2]=v$g$_137[0];
        v$g$_138[3]=v$g$_137[1];
    }else{
        v$g$_138[0]=v$g$_005;
        v$g$_138[1]=v$g$_005;
        v$g$_138[2]=v$g$_005;
        v$g$_138[3]=v$g$_005;
    };
    var v$g$_157=-1;
    if(v$g$_129==true){
        if(v$g$_139==true){v$g$_157=v$g$_calculate_trust(v$g$_134,v$g$_135,v$g$_140,v$g$_141)}else{v$g$_157=0};
        if(v$g$_033(v$g$_157)==false){v$g$_157=0};
    };
    v$g$_138[4]=v$g$_157;
    v$g$_138[5]=v$g$_136;
    v$g$_125=performance.now()-v$g$_125;
    v$g$_125=Math.round(v$g$_125);
    if(v$g$_001==true){v$g$_138[6]=Math.floor(v$g$_125).toString()+' ms'}else{v$g$_138[6]=Math.floor(v$g$_125)};
    return v$g$_138; // MainReturn vanilla_gamma()
    // ****** MAIN PROGRAM END ******
    // --- EDIT start ---
    function v$g$_alert_manager(alert_nr){
        var v$g$_158=false;
        // ________________________________________________________________________________________
        if(alert_nr==1){v$g$_158=true;alert('vanilla_gamma()\nerror_effort_declare:\neffort < 0')};
        if(alert_nr==2){v$g$_158=true;alert('vanilla_gamma()\nerror_effort_declare:\neffort > 1')};
        // ________________________________________________________________________________________
        if(v$g$_158==false){alert('vanilla_gamma():\nunknown alert')};
    };
    function v$g$_effort_adjust(v$g$_159){
        v$g$_007=new Array(4);
        v$g$_007[0]=v$g$_159;          // effort_reference
        // Effort adjust start _________________________________
        v$g$_007[1]=v$g$_007[0];       // effort_adjust_F6
        v$g$_007[2]=v$g$_007[0]**2;    // effort_adjust_F2verify
        v$g$_007[3]=1.000;             // amplifier_F6
        // Effort adjust end ___________________________________
        // Value range monitoring: 0<= effortValue <=1
        for(var v$g$_160=0;v$g$_160<v$g$_007.length-1;v$g$_160++){
            if(v$g$_007[v$g$_160]<0){v$g$_alert_manager(1)};
            if(v$g$_007[v$g$_160]>1){v$g$_alert_manager(2)};
        };
    };
    function v$g$_calculate_trust(v$g$_resultValueReal,v$g$_resultValueImag,v$g$_checkValueReal,v$g$_checkValueImag){
        // Calculate the difference between the result- and check number
        if(v$g$_resultValueReal<0){v$g$_resultValueReal=-v$g$_resultValueReal;v$g$_checkValueReal=-v$g$_checkValueReal};
        if(v$g$_resultValueImag<0){v$g$_resultValueImag=-v$g$_resultValueImag;v$g$_checkValueImag=-v$g$_checkValueImag};
        var v$g$_161=v$g$_resultValueReal-v$g$_checkValueReal!=0||v$g$_resultValueImag-v$g$_checkValueImag!=0;
        var v$g$_162=v$g$_098(v$g$_resultValueReal,v$g$_resultValueImag);
        v$g$_resultValueReal=v$g$_162[0];
        v$g$_resultValueImag=v$g$_162[1];
        var v$g$_163=Math.abs((v$g$_resultValueReal**2+v$g$_resultValueImag**2)**(0.5)*v$g$_162[2]);
        v$g$_checkValueReal=v$g$_checkValueReal/v$g$_162[2];
        v$g$_checkValueImag=v$g$_checkValueImag/v$g$_162[2];
        var v$g$_164=v$g$_098(v$g$_resultValueReal-v$g$_checkValueReal,v$g$_resultValueImag-v$g$_checkValueImag);
        var delta_resChk=(v$g$_164[0]**2+v$g$_164[1]**2)**(0.5)*v$g$_164[2]*v$g$_162[2];
        if(v$g$_163==0&&v$g$_161==false&&v$g$_002==false){v$g$_163=1};
        if(v$g$_163>1||v$g$_002==false){delta_resChk=delta_resChk/v$g$_163}else{delta_resChk=delta_resChk*v$g$_163};
        return v$g$_165(delta_resChk); // Transform the difference into a trust value
    };
    function v$g$_165(v$g$_166){
        // trustTransformFunction
        v$g$_166=-Math.log10(v$g$_166+10**(-51));
        if(v$g$_166>0){
            v$g$_166=v$g$_166*(1-10**(-10));
            v$g$_166=((((100**0.25)**v$g$_166)/100)**(2/457));
            if(v$g$_166>1){v$g$_166=1};
            v$g$_166=1-(1-v$g$_166)/0.00998259143149816;
        };
        if(v$g$_166<0){v$g$_166=0};
        if(v$g$_166>1){v$g$_166=1};
        v$g$_166=v$g$_166*v$g$_009;
        if(v$g$_033(v$g$_166)==false){v$g$_166=0};
        return v$g$_166;
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
