// JavaScript Method for Evaluating the Euler Gamma Function:
// Handling Complex and Negative Real Numbers.
// In line 486, you can activate the test function:
// Follow the program flow afterward to understand its workings.
// For full understanding, visit: WWW.ZETA-CALCULATOR.COM
// My best wishes for the success of your ventures!

function vanilla_gamma(realPart, imaginaryPart, approximationEffort, verifyResult_onOff){
    // #################################
    // Version : 001
    // Released: Jan. 21, 2025
    // Location: www.zeta-calculator.com
    // #################################
    if(typeof v$g$_000==='undefined'){
        // preSettings______________________
        v$g$_111=true; // showTimeWithMsUnit
        // endPreSettings___________________
        v$g$_080();
    };
    function v$g$_080(){
        v$g$_000=true;
        v$g$_001='#err';
        v$g$_002='#ins';
        v$g$_003=new Array();
        v$g$_004=new Array();
        v$g$_004.push(1);
        v$g$_004.push(-0.5);
        v$g$_004.push(1/6);
        v$g$_004.push(0);
        v$g$_004.push(-1/30);
        v$g$_004.push(0);
        v$g$_004.push(1/42);
        v$g$_004.push(0);
        v$g$_004.push(-1/30);
        v$g$_004.push(0);
        v$g$_004.push(5/66);
        v$g$_110=Number.MAX_SAFE_INTEGER;
        v$g$_113=Math.PI;
    };
    function v$g$_F1(v$g$_102,v$g$_103){
        var v$g$_005=new Array(3);
        v$g$_005[0]=v$g$_001;
        v$g$_005[1]=v$g$_001;
        v$g$_005[2]=false;
        var v$g$_006=v$g$_101(v$g$_102,v$g$_103);
        if(v$g$_006[2]==false){return v$g$_005};
        v$g$_005[2]=true;
        var v$g$_007=0;
        var v$g$_008=0;
        var v$g$_009=new Array(3);
        v$g$_009[0]=0;
        v$g$_009[1]=0;
        v$g$_009[2]=false;
        v$g$_009=v$g$_F6(1-v$g$_102,-v$g$_103,v$g$_003[3]);
        v$g$_007=v$g$_009[0];
        v$g$_008=v$g$_009[1];
        if(v$g$_009[2]==false){
            v$g$_005[2]=false;
            return v$g$_005;
        };
        var v$g$_010=new Array();
        var v$g$_011=0;
        var v$g$_012=0;
        var v$g$_013=0;
        var v$g$_014=0;
        v$g$_010=v$g$_F2(1-v$g$_102,-v$g$_103);
        if(v$g$_010[2]==false){
            v$g$_005[2]=false;
            return v$g$_005;
        };
        v$g$_011=v$g$_010[0];
        v$g$_012=v$g$_010[1];
        v$g$_013=v$g$_006[0];
        v$g$_014=v$g$_006[1];
        var v$g$_015=v$g$_013*v$g$_007-v$g$_014*v$g$_008;
        var v$g$_016=v$g$_013*v$g$_008+v$g$_014*v$g$_007;
        v$g$_013=v$g$_015;
        v$g$_014=v$g$_016;
        v$g$_015=v$g$_013*v$g$_011-v$g$_014*v$g$_012;
        v$g$_016=v$g$_013*v$g$_012+v$g$_014*v$g$_011;
        v$g$_013=v$g$_015;
        v$g$_014=v$g$_016;
        var v$g$_017=v$g$_098(v$g$_013,v$g$_014);
        if(v$g$_009[2]==false){v$g$_017=false};
        if(v$g$_010[2]==false){v$g$_017=false};
        v$g$_005[0]=v$g$_013;
        v$g$_005[1]=v$g$_014;
        v$g$_005[2]=v$g$_017;
        return v$g$_005;
    };
    function v$g$_F2(v$g$_102,v$g$_103){
        var v$g$_104 = v$g$_003[2];
        var v$g$_018=(3+5*v$g$_104)-v$g$_102;
        v$g$_018=Math.round(v$g$_018);
        if(v$g$_018<0){v$g$_018=0};
        var v$g$_019=(((Math.log(Math.abs(v$g$_103)+1)+1))**(0.9106*v$g$_104))-1;
        if(v$g$_019>8.7714){v$g$_019=8.7714};
        var v$g$_020=Math.round(2**(8+v$g$_019));
        var v$g$_021=0;
        var v$g$_022=0;
        for(var v$g$_023=1;v$g$_023<=(v$g$_020-1);v$g$_023++){
            v$g$_021=v$g$_021+Math.cos(v$g$_103*Math.log(v$g$_023))/v$g$_023**v$g$_102;
            v$g$_022=v$g$_022-Math.sin(v$g$_103*Math.log(v$g$_023))/v$g$_023**v$g$_102;
        };
        var v$g$_024=v$g$_102-1;
        var v$g$_025=-v$g$_103;
        var v$g$_026=v$g$_024**2+v$g$_025**2;
        var v$g$_027=v$g$_020*v$g$_024/v$g$_026;
        var v$g$_028=v$g$_020*v$g$_025/v$g$_026;
        var v$g$_029=Math.cos(v$g$_103*Math.log(v$g$_020))/v$g$_020**v$g$_102;
        var v$g$_030=-Math.sin(v$g$_103*Math.log(v$g$_020))/v$g$_020**v$g$_102;
        var v$g$_031=v$g$_021+v$g$_029/2+v$g$_027*v$g$_029-v$g$_028*v$g$_030;
        var v$g$_032=v$g$_022+v$g$_030/2+v$g$_027*v$g$_030+v$g$_028*v$g$_029;
        var v$g$_033=Math.floor(v$g$_018/2);
        var v$g$_034=2;
        var v$g$_035=2;
        var v$g$_036=0;
        var v$g$_037=0;
        for(var v$g$_038=1;v$g$_038<=v$g$_033;v$g$_038++){
            var v$g$_039=v$g$_004[2*v$g$_038]/v$g$_035;
            var v$g$_040=v$g$_102;
            var v$g$_041=v$g$_103;
            for(var v$g$_042=1;v$g$_042<=(2*v$g$_038-2);v$g$_042++){
                var v$g$_043=v$g$_102+v$g$_042;
                var v$g$_044=v$g$_040*v$g$_043-v$g$_041*v$g$_103;
                var v$g$_045=v$g$_040*v$g$_103+v$g$_041*v$g$_043;
                v$g$_040=v$g$_044;
                v$g$_041=v$g$_045;
            };
            v$g$_040=v$g$_040*v$g$_039;
            v$g$_041=v$g$_041*v$g$_039;
            var v$g$_046=v$g$_102+2*v$g$_038-1;
            var v$g$_047=v$g$_103;
            var v$g$_048=Math.cos(v$g$_047*Math.log(v$g$_020))/v$g$_020**v$g$_046;
            var v$g$_049=-Math.sin(v$g$_047*Math.log(v$g$_020))/v$g$_020**v$g$_046;
            var v$g$_050=v$g$_040*v$g$_048-v$g$_041*v$g$_049;
            var v$g$_051=v$g$_040*v$g$_049+v$g$_041*v$g$_048;
            v$g$_036=v$g$_036+v$g$_050;
            v$g$_037=v$g$_037+v$g$_051;
            v$g$_035=v$g$_035*(v$g$_034+1)*(v$g$_034+2);
            v$g$_034=v$g$_034+2;
        };
        v$g$_031=v$g$_031+v$g$_036;
        v$g$_032=v$g$_032+v$g$_037;
        var v$g$_005=new Array(3);
        v$g$_005[0]=v$g$_031;
        v$g$_005[1]=v$g$_032;
        v$g$_005[2]=v$g$_098(v$g$_031,v$g$_032);
        return v$g$_005;
    };
    function v$g$_F6(v$g$_102,v$g$_103,v$g$_104){
        var v$g$_052=Math.floor(v$g$_003[4]*v$g$_104*(2.608*10**6)+2000);
        var v$g$_053=v$g$_102;
        var v$g$_054=v$g$_103;
        var v$g$_055=v$g$_053;
        var v$g$_056=v$g$_054;
        var v$g$_057=v$g$_053**2+v$g$_054**2;
        v$g$_053=v$g$_053/v$g$_057;
        v$g$_054=-v$g$_054/v$g$_057;
        var v$g$_058=v$g$_001;
        var v$g$_059=v$g$_001;
        var v$g$_060=0;
        var v$g$_061=v$g$_053;
        var v$g$_062=v$g$_054;
        var v$g$_063=0;
        var v$g$_064=0;
        var v$g$_065=0;
        var v$g$_066=v$g$_053;
        var v$g$_067=0;
        var v$g$_115=false;
        for(var v$g$_023=1;v$g$_023<=v$g$_052;v$g$_023++){
            v$g$_067=v$g$_055+v$g$_023;
            v$g$_063=(v$g$_067**2+v$g$_056**2)/v$g$_023;
            v$g$_064=v$g$_067/v$g$_063;
            v$g$_065=-v$g$_056/v$g$_063;
            v$g$_066=v$g$_053;
            v$g$_053=v$g$_053*v$g$_064-v$g$_054*v$g$_065;
            v$g$_054=v$g$_066*v$g$_065+v$g$_054*v$g$_064;
            if((v$g$_023-1)%100==0||v$g$_023==v$g$_052||v$g$_115==true||v$g$_063==0){
                var v$g$_068=v$g$_023**v$g$_102;
                var v$g$_069=v$g$_068*Math.cos(-v$g$_103*Math.log(v$g$_023));
                var v$g$_070=-v$g$_068*Math.sin(-v$g$_103*Math.log(v$g$_023));
                var v$g$_071=v$g$_069*v$g$_053-v$g$_070*v$g$_054;
                var v$g$_072=v$g$_069*v$g$_054+v$g$_070*v$g$_053;
                var v$g$_073=v$g$_098(v$g$_071,v$g$_072);
                if(v$g$_071==0&&v$g$_072==0){v$g$_073=false};
                if(v$g$_063==0){v$g$_073=false};
                if(v$g$_068==0){v$g$_073=false};
                if(v$g$_073==true){
                    v$g$_061=v$g$_053;
                    v$g$_062=v$g$_054;
                    v$g$_058=v$g$_071;
                    v$g$_059=v$g$_072;
                    v$g$_060=v$g$_023;
                }else{
                    if(v$g$_115==false&&v$g$_060>0&&v$g$_063!=0){
                        v$g$_023=v$g$_060;
                        v$g$_053=v$g$_061;
                        v$g$_054=v$g$_062;
                    }else{
                        v$g$_023=v$g$_110;
                        if(v$g$_063==0){
                            v$g$_058=v$g$_002;
                            v$g$_059=v$g$_002;
                        };
                    };
                    v$g$_115=true;
                };
            };
        };
        v$g$_053=v$g$_058;
        v$g$_054=v$g$_059;
        var v$g$_005=new Array(3);
        v$g$_005[0]=v$g$_053;
        v$g$_005[1]=v$g$_054;
        v$g$_005[2]=v$g$_098(v$g$_053,v$g$_054);
        return v$g$_005;
    };
    function v$g$_098(v$g$_105,v$g$_106){
        var v$g$_081=true;
        if(v$g$_105!=undefined){
            v$g$_081=typeof v$g$_105==='number'&&isFinite(v$g$_105);
        };
        if(v$g$_081==true){
            if(v$g$_106!=undefined){v$g$_081=typeof v$g$_106==='number'&&isFinite(v$g$_106)};
        };
        return v$g$_081;
    };
    function v$g$_099(v$g$_107,v$g$_108){
        var v$g$_082=Math.log10(Math.abs(v$g$_107));
        if(v$g$_098(v$g$_082)==false){v$g$_082=0};
        var v$g$_083=Math.log10(Math.abs(v$g$_108));
        if(v$g$_098(v$g$_083)==false){v$g$_083=0};
        var v$g$_084=v$g$_082;
        if(v$g$_083>v$g$_084){v$g$_084=v$g$_083};
        v$g$_084=10**v$g$_084;
        v$g$_107=v$g$_107/v$g$_084;
        v$g$_108=v$g$_108/v$g$_084;
        var v$g$_085;
        var v$g$_086;
        var v$g$_087=(v$g$_107**2+v$g$_108**2)**(0.5);
        if(v$g$_087<0){v$g$_087=0};
        if(v$g$_087>0){
            v$g$_085=Math.asin(Math.abs(v$g$_108)/v$g$_087);
            v$g$_086=v$g$_087*v$g$_084;
            if(v$g$_107>=0){
                if(v$g$_108<0){v$g$_085=2*v$g$_113-v$g$_085};
            }else{
                if(v$g$_108>=0){v$g$_085=v$g$_113-v$g$_085}else{v$g$_085=v$g$_113+v$g$_085};
            };
        }else{
            v$g$_085=0;
            v$g$_086=0;
        };
        if(v$g$_085>v$g$_113){v$g$_085=v$g$_085-2*v$g$_113};
        if(v$g$_085<=-v$g$_113){v$g$_085=v$g$_113};
        var v$g$_088=new Array();
        if(v$g$_098(v$g$_086,v$g$_085)==true){
            v$g$_088.push(v$g$_086);
            v$g$_088.push(v$g$_085);
        }else{
            v$g$_088.push(v$g$_001);
            v$g$_088.push(v$g$_001);
        };
        return v$g$_088;
    };
    function v$g$_101(v$g$_102,v$g$_103){
        var v$g$_074=0;
        var v$g$_075=0;
        var v$g$_076=(2*v$g$_113)**v$g$_102*Math.cos(-v$g$_103*Math.log(2*v$g$_113))/v$g$_113;
        var v$g$_077=(2*v$g$_113)**v$g$_102*Math.sin(-v$g$_103*Math.log(2*v$g$_113))/(-v$g$_113);
        var v$g$_078=Math.sin(v$g$_102*v$g$_113/2)*Math.cosh(v$g$_103*v$g$_113/2);
        var v$g$_079=Math.cos(v$g$_102*v$g$_113/2)*Math.sinh(v$g$_103*v$g$_113/2);
        v$g$_074=v$g$_076*v$g$_078-v$g$_077*v$g$_079;
        v$g$_075=v$g$_076*v$g$_079+v$g$_077*v$g$_078;
        var v$g$_005=new Array(3);
        v$g$_005[2]=v$g$_098(v$g$_074,v$g$_075);
        if(v$g$_005[2]==false){
            v$g$_074=v$g$_001;
            v$g$_075=v$g$_001;
        };
        v$g$_005[0]=v$g$_074;
        v$g$_005[1]=v$g$_075;
        return v$g$_005;
    };
    function v$g$_140(v$g$_142,v$g$_143,v$g$_144,v$g$_145){
        var v$g$_141=v$g$_098(v$g$_142,v$g$_143);
        if(v$g$_141==true){
            v$g$_141=v$g$_098(v$g$_144);
            if(v$g$_141==true){
                if(v$g$_144<0){v$g$_141=false};
                if(v$g$_144>1){v$g$_141=false};
            };
            if(v$g$_141==true){if(typeof v$g$_145!=='boolean'){v$g$_141=false}};
        };
        return v$g$_141;
    };
    // ****** MAIN PROGRAM START ******
    var v$g$_089=performance.now();
    var v$g$_134=realPart;
    var v$g$_135=imaginaryPart;
    var v$g$_136=approximationEffort;
    var v$g$_137=verifyResult_onOff;
    var v$g$_138=v$g$_140(v$g$_134,v$g$_135,v$g$_136,v$g$_137);
    if(v$g$_138==false){
        var v$g$_139=new Array(7);
        v$g$_139[0]=v$g$_002;
        v$g$_139[1]=v$g$_002;
        v$g$_139[2]=v$g$_002;
        v$g$_139[3]=v$g$_002;
        v$g$_139[4]=v$g$_002;
        v$g$_139[5]=false;
        if(v$g$_111==true){v$g$_139[6]='0 ms'}else{v$g$_139[6]=0};
        return v$g$_139;
    };
    v$g$_effort_adjust(v$g$_136);
    var v$g$_132=false;
    if(v$g$_135<0){
        v$g$_132=true;
        v$g$_135=-v$g$_135;
    };
    var v$g$_114=v$g$_F6(v$g$_134,v$g$_135,v$g$_003[1]);
    var v$g$_090=v$g$_114[0];
    var v$g$_091=v$g$_114[1];
    var v$g$_095=v$g$_114[2];
    var v$g$_093;
    var v$g$_094=new Array(7);
    if(v$g$_095==true){
        if(v$g$_132==true){v$g$_091=-v$g$_091};
        v$g$_093=v$g$_099(v$g$_090,v$g$_091);
        v$g$_095=v$g$_098(v$g$_093[0],v$g$_093[1]);
    };
    var v$g$_119=false;
    var v$g$_130=v$g$_001;
    var v$g$_131=v$g$_001;
    if(v$g$_095==true&&v$g$_137==true){
        v$g$_119=true;
        var v$g$_117;
        if(Math.abs(v$g$_134-0.5)<10**(-10)){v$g$_134=0.5-10**(-10)};
        var v$g$_116=v$g$_134;
        v$g$_116=1-v$g$_116;
        if(v$g$_116>=-3){v$g$_117=v$g$_F2(v$g$_116,v$g$_135)}else{v$g$_117=v$g$_F1(v$g$_116,v$g$_135)};
        var v$g$_118;
        if(v$g$_117[2]==false){v$g$_119=false};
        if(v$g$_119==true){
            v$g$_117[1]=-v$g$_117[1];
            v$g$_116=v$g$_134;
            if(v$g$_116>=-3){v$g$_118=v$g$_F2(v$g$_116,v$g$_135)}else{v$g$_118=v$g$_F1(v$g$_116,v$g$_135)};
            if(v$g$_118[2]==false){v$g$_119=false};
        };
        if(v$g$_119==true){
            var v$g$_120=v$g$_117[0];
            var v$g$_121=v$g$_117[1];
            var v$g$_122=v$g$_118[0];
            var v$g$_123=v$g$_118[1];
            var v$g$_126=v$g$_122**2+v$g$_123**2;
            var v$g$_124;
            var v$g$_125;
            v$g$_124=(v$g$_120*v$g$_122+v$g$_121*v$g$_123)/v$g$_126;
            v$g$_125=(v$g$_122*v$g$_121-v$g$_120*v$g$_123)/v$g$_126;
            var v$g$_127=v$g$_101(1-v$g$_134,v$g$_135);
            v$g$_127[1]=-v$g$_127[1];
            var v$g$_128=v$g$_127[0];
            var v$g$_129=v$g$_127[1];
            var v$g$_133=v$g$_128**2+v$g$_129**2;
            v$g$_130=(v$g$_124*v$g$_128+v$g$_125*v$g$_129)/v$g$_133;
            v$g$_131=(v$g$_128*v$g$_125-v$g$_124*v$g$_129)/v$g$_133;
            if(v$g$_132==true){v$g$_131=-v$g$_131};
            v$g$_119=v$g$_098(v$g$_130,v$g$_131);
        };
    };
    if(v$g$_095==true){
        v$g$_094[0]=v$g$_090;
        v$g$_094[1]=v$g$_091;
        v$g$_094[2]=v$g$_093[0];
        v$g$_094[3]=v$g$_093[1];
    }else{
        v$g$_094[0]=v$g$_001;
        v$g$_094[1]=v$g$_001;
        v$g$_094[2]=v$g$_001;
        v$g$_094[3]=v$g$_001;
    };
    var v$g$_092=-1;
    if(v$g$_137==true){
        if(v$g$_119==true){v$g$_092=v$g$_calculate_trust(v$g$_090,v$g$_091,v$g$_130,v$g$_131)}else{v$g$_092=0};
        if(v$g$_098(v$g$_092)==false){v$g$_092=0};
    };
    v$g$_094[4]=v$g$_092;
    v$g$_094[5]=v$g$_095;
    v$g$_089=performance.now()-v$g$_089;
    v$g$_089=Math.round(v$g$_089);
    if(v$g$_111==true){v$g$_094[6]=Math.floor(v$g$_089).toString()+' ms'}else{v$g$_094[6]=Math.floor(v$g$_089)};
    return v$g$_094; // MainReturn vanilla_gamma() 
    // ****** MAIN PROGRAM END ******
    // --- EDIT start ---
    function v$g$_alert_manager(alert_nr){
        var v$g$_096=false;
        // _____________________________________________________________________
        if(alert_nr==1){v$g$_096=true;alert('error_effort_declare:\neffort < 0')};
        if(alert_nr==2){v$g$_096=true;alert('error_effort_declare:\neffort > 1')};
        // _____________________________________________________________________
        if(v$g$_096==false){alert('unknown alarm!')};
    };
    function v$g$_effort_adjust(v$g$_112){
        v$g$_003=new Array(5);
        v$g$_003[0]=v$g$_112;          // effort_reference
        // Effort adjust start _________________________________
        v$g$_003[1]=v$g$_003[0]**2;    // effort_adjust_F6
        v$g$_003[2]=v$g$_003[0]**1.62; // effort_adjust_F2verify
        v$g$_003[3]=v$g$_003[0]**2;    // effort_adjust_F6verify
        v$g$_003[4]=1.000;             // amplifier_F6
        // Effort adjust end ___________________________________
        // Value range monitoring: 0<= effortValue <=1
        for(var v$g$_097=0;v$g$_097<v$g$_003.length-1;v$g$_097++){
            if(v$g$_003[v$g$_097]<0){v$g$_alert_manager(1)};
            if(v$g$_003[v$g$_097]>1){v$g$_alert_manager(2)};
        };
    };
    function v$g$_calculate_trust(v$g$_resultValueReal,v$g$_resultValueImag,v$g$_checkValueReal,v$g$_checkValueImag){
        // Calculate the difference between the result- and check number
        var delta_resChk=((v$g$_resultValueReal-v$g$_checkValueReal)**2+(v$g$_resultValueImag-v$g$_checkValueImag)**2)**(0.5);
        delta_resChk=delta_resChk/((v$g$_resultValueReal**2+v$g$_resultValueImag**2)**(0.5));
        return v$g$_100(delta_resChk); // Transform the difference into a trust value
    };
    function v$g$_100(v$g$_109){
        // trustTransformFunction
        v$g$_109=-Math.log10(v$g$_109+10**(-51));
        if(v$g$_109>0){
            v$g$_109=v$g$_109*(1-10**(-10));
            v$g$_109=((((100**0.25)**v$g$_109)/100)**(2/457));
            if(v$g$_109>1){v$g$_109=1};
            v$g$_109=1-(1-v$g$_109)/0.00998259143149816;
        };
        if(v$g$_109<0){v$g$_109=0};
        if(v$g$_109>1){v$g$_109=1};
        v$g$_109=v$g$_109*0.999999999999999;
        return v$g$_109;
    };
    // --- EDIT end ---
}; // vanilla_gamma() functionEnd

function TEST_vanilla_gamma() {
    
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
var enableTestMode = false;
if (enableTestMode) {
    TEST_vanilla_gamma();
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
