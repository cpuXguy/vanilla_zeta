// JavaScript Method for Evaluating the Riemann Zeta Function:
// Handling Complex and Negative Real Numbers.
// In line 710, you can activate the test function:
// Follow the program flow afterward to understand its workings.
// For full understanding, visit: WWW.ZETA-CALCULATOR.COM
// My best wishes for the success of your ventures!

function vanilla_zeta(realPart, imaginaryPart, approximationEffort, verifyResult_onOff){
    // #################################
    // Version : 005
    // Released: Jan. 23, 2025
    // Location: www.zeta-calculator.com
    // #################################
    if(typeof v$z$_000==='undefined'){
        // Pre-settings_________________
        //______________________________
        // 'ms' for milliseconds written in the result time-output.
        v$z$_198 = true; // showTimeWithMsUnit: Default= true
        //______________________________
        // Adapted calculation near results approaching zero.
        // If 'true': this can lower the strictness
        // for the calculation of the Trust-Value.
        v$z$_201 = true; // adaptedZero: Default= true
        //______________________________
        // Stabilizes Trivial Zeros
        // (Not to be confused with the Non-Trivial Zeros!)
        v$z$_205 = true; // stabilizeTrivial: Default= true
        //______________________________
        // End of pre-settings__________
        v$z$_128();
    };
    function v$z$_128(){
        v$z$_000=true;
        v$z$_001='#err';
        v$z$_002='#ins';
        v$z$_003=-1;
        v$z$_004=0;
        v$z$_005=new Array();
        v$z$_006=new Array();
        v$z$_007=0;
        v$z$_008=0;
        v$z$_009=0;
        v$z$_010=false;
        v$z$_011=new Array();
        v$z$_012=new Array();
        v$z$_012.push(1);
        v$z$_012.push(-0.5);
        v$z$_012.push(1/6);
        v$z$_012.push(0);
        v$z$_012.push(-1/30);
        v$z$_012.push(0);
        v$z$_012.push(1/42);
        v$z$_012.push(0);
        v$z$_012.push(-1/30);
        v$z$_012.push(0);
        v$z$_012.push(5/66);
        v$z$_197=Number.MAX_SAFE_INTEGER;
        v$z$_200=Math.PI;
    };
    function v$z$_F1F3(v$z$_179,v$z$_180,v$z$_181){
        var v$z$_013=new Array(3);
        v$z$_013[0]=0;
        v$z$_013[1]=0;
        v$z$_013[2]=false;
        var v$z$_014=false;
        var v$z$_015=330;
        if(Math.abs(v$z$_180)>v$z$_015){v$z$_014=true};
        var v$z$_016;
        if(v$z$_181==false){
            v$z$_016=v$z$_178(v$z$_179,v$z$_180);
            if(v$z$_016[2]==0){v$z$_014=true};
        };
        var v$z$_017=0;
        var v$z$_018=0;
        var v$z$_019=new Array(3);
        v$z$_019[0]=0;
        v$z$_019[1]=0;
        v$z$_019[2]=false;
        if(v$z$_014==false){
            if(v$z$_181==false){
                v$z$_019=v$z$_F6(1-v$z$_179,-v$z$_180,v$z$_011[4]);
                v$z$_017=v$z$_019[0];
                v$z$_018=v$z$_019[1];
                if(v$z$_019[2]==false){
                    v$z$_013[2]=false;
                    return v$z$_013;
                };
            }else{
                v$z$_019=v$z$_F6(v$z$_179,v$z$_180,v$z$_011[6]);
                v$z$_017=v$z$_019[0];
                v$z$_018=v$z$_019[1];
            };
        };
        var v$z$_020=new Array();
        var v$z$_021=0;
        var v$z$_022=0;
        var v$z$_023=0;
        var v$z$_024=0;
        if(v$z$_181==false){
            if(v$z$_014==false){
                v$z$_020=v$z$_F2(1-v$z$_179,-v$z$_180,v$z$_011[3]);
                v$z$_008=v$z$_020[0];
                v$z$_009=v$z$_020[1];
            }else{
                v$z$_010=true;
                v$z$_020=v$z$_F4(v$z$_179,v$z$_180,v$z$_011[5]);
                if(v$z$_020[2]==true){
                    v$z$_019[2]=true;
                }else{
                    v$z$_013[2]=false;
                    return v$z$_013;
                };
            };
        }else{
            v$z$_020=new Array(3);
            v$z$_020[0]=v$z$_008;
            v$z$_020[1]=v$z$_009;
            v$z$_020[2]=true;
            v$z$_021=v$z$_020[0];
            v$z$_022=v$z$_020[1];
            v$z$_016=v$z$_178(1-v$z$_179,-v$z$_180);
            v$z$_023=v$z$_016[0];
            v$z$_024=v$z$_016[1];
            var v$z$_025=v$z$_023**2+v$z$_024**2;
            var v$z$_026=v$z$_023/v$z$_025;
            var v$z$_027=-v$z$_024/v$z$_025;
            var v$z$_028=v$z$_017**2+v$z$_018**2;
            var v$z$_029=v$z$_017/v$z$_028;
            var v$z$_030=-v$z$_018/v$z$_028;
            var v$z$_031=v$z$_026*v$z$_029-v$z$_027*v$z$_030;
            var v$z$_032=v$z$_026*v$z$_030+v$z$_027*v$z$_029;
            v$z$_023=v$z$_031;
            v$z$_024=v$z$_032;
            v$z$_031=v$z$_023*v$z$_021-v$z$_024*v$z$_022;
            v$z$_032=v$z$_023*v$z$_022+v$z$_024*v$z$_021;
            v$z$_023=v$z$_031;
            v$z$_024=v$z$_032;
            v$z$_021=v$z$_023;
            v$z$_022=v$z$_024;
            v$z$_020[0]=v$z$_021;
            v$z$_020[1]=v$z$_022;
        };
        if(v$z$_020[2]==false){
            v$z$_013[2]=false;
            return v$z$_013;
        };
        v$z$_021=v$z$_020[0];
        v$z$_022=v$z$_020[1];
        v$z$_023=v$z$_021;
        v$z$_024=v$z$_022;
        if(v$z$_014==false&&v$z$_181==false){
            v$z$_023=v$z$_016[0];
            v$z$_024=v$z$_016[1];
            var v$z$_031=v$z$_023*v$z$_017-v$z$_024*v$z$_018;
            var v$z$_032=v$z$_023*v$z$_018+v$z$_024*v$z$_017;
            v$z$_023=v$z$_031;
            v$z$_024=v$z$_032;
            v$z$_031=v$z$_023*v$z$_021-v$z$_024*v$z$_022;
            v$z$_032=v$z$_023*v$z$_022+v$z$_024*v$z$_021;
            v$z$_023=v$z$_031;
            v$z$_024=v$z$_032;
        };
        var v$z$_033=v$z$_174(v$z$_023,v$z$_024);
        if(v$z$_019[2]==false){v$z$_033=false};
        if(v$z$_020[2]==false){v$z$_033=false};
        v$z$_013[0]=v$z$_023;
        v$z$_013[1]=v$z$_024;
        v$z$_013[2]=v$z$_033;
        if(v$z$_014==true){
            v$z$_013[2]=false;
            if(v$z$_033==true){v$z$_013[2]=2};
        };
        return v$z$_013;
    };
    function v$z$_F2(v$z$_179,v$z$_180,v$z$_182){
        var v$z$_034=(3+5*v$z$_182)-v$z$_179;
        v$z$_034=Math.round(v$z$_034);
        if(v$z$_034<0){v$z$_034=0};
        var v$z$_035=(((Math.log(Math.abs(v$z$_180)+1)+1))**(0.9106*v$z$_182))-1;
        if(v$z$_035>8.7714){v$z$_035=8.7714};
        var v$z$_036=Math.round(2**(8+v$z$_035));
        var v$z$_037=0;
        var v$z$_038=0;
        for(var v$z$_039=1;v$z$_039<=(v$z$_036-1);v$z$_039++){
            v$z$_037=v$z$_037+Math.cos(v$z$_180*Math.log(v$z$_039))/v$z$_039**v$z$_179;
            v$z$_038=v$z$_038-Math.sin(v$z$_180*Math.log(v$z$_039))/v$z$_039**v$z$_179;
        };
        var v$z$_040=v$z$_179-1;
        var v$z$_041=-v$z$_180;
        var v$z$_042=v$z$_040**2+v$z$_041**2;
        var v$z$_043=v$z$_036*v$z$_040/v$z$_042;
        var v$z$_044=v$z$_036*v$z$_041/v$z$_042;
        var v$z$_045=Math.cos(v$z$_180*Math.log(v$z$_036))/v$z$_036**v$z$_179;
        var v$z$_046=-Math.sin(v$z$_180*Math.log(v$z$_036))/v$z$_036**v$z$_179;
        var v$z$_047=v$z$_037+v$z$_045/2+v$z$_043*v$z$_045-v$z$_044*v$z$_046;
        var v$z$_048=v$z$_038+v$z$_046/2+v$z$_043*v$z$_046+v$z$_044*v$z$_045;
        var v$z$_049=Math.floor(v$z$_034/2);
        var v$z$_050=2;
        var v$z$_051=2;
        var v$z$_052=0;
        var v$z$_053=0;
        for(var v$z$_054=1;v$z$_054<=v$z$_049;v$z$_054++){
            var v$z$_055=v$z$_012[2*v$z$_054]/v$z$_051;
            var v$z$_056=v$z$_179;
            var v$z$_057=v$z$_180;
            for(var v$z$_058=1;v$z$_058<=(2*v$z$_054-2);v$z$_058++){
                var v$z$_059=v$z$_179+v$z$_058;
                var v$z$_060=v$z$_056*v$z$_059-v$z$_057*v$z$_180;
                var v$z$_061=v$z$_056*v$z$_180+v$z$_057*v$z$_059;
                v$z$_056=v$z$_060;
                v$z$_057=v$z$_061;
            };
            v$z$_056=v$z$_056*v$z$_055;
            v$z$_057=v$z$_057*v$z$_055;
            var v$z$_062=v$z$_179+2*v$z$_054-1;
            var v$z$_063=v$z$_180;
            var v$z$_064=Math.cos(v$z$_063*Math.log(v$z$_036))/v$z$_036**v$z$_062;
            var v$z$_065=-Math.sin(v$z$_063*Math.log(v$z$_036))/v$z$_036**v$z$_062;
            var v$z$_066=v$z$_056*v$z$_064-v$z$_057*v$z$_065;
            var v$z$_067=v$z$_056*v$z$_065+v$z$_057*v$z$_064;
            v$z$_052=v$z$_052+v$z$_066;
            v$z$_053=v$z$_053+v$z$_067;
            v$z$_051=v$z$_051*(v$z$_050+1)*(v$z$_050+2);
            v$z$_050=v$z$_050+2;
        };
        v$z$_047=v$z$_047+v$z$_052;
        v$z$_048=v$z$_048+v$z$_053;
        var v$z$_013=new Array(3);
        v$z$_013[0]=v$z$_047;
        v$z$_013[1]=v$z$_048;
        v$z$_013[2]=v$z$_174(v$z$_047,v$z$_048);
        return v$z$_013;
    };
    function v$z$_F4(v$z$_179,v$z$_180,v$z$_182){
        var v$z$_068=1-2*Math.cos(v$z$_180*Math.log(2))/2**v$z$_179;
        var v$z$_069=-2*Math.sin(v$z$_180*Math.log(2))/2**v$z$_179;
        var v$z$_070=v$z$_068**2+v$z$_069**2;
        var v$z$_071=0;
        var v$z$_072=0;
        var v$z$_073=-1;
        var v$z$_074=v$z$_006.length;
        var v$z$_075=new Array(v$z$_074);
        var v$z$_076=new Array(v$z$_074);
        var v$z$_077=Math.floor(6+v$z$_182*(1022-6));
        var v$z$_078=true;
        if(2**v$z$_179==0){v$z$_077=-1};
        if(v$z$_174(2**v$z$_179)==false){v$z$_077=-1};
        var v$z$_079;
        var v$z$_080;
        for(var v$z$_039=0;v$z$_039<=v$z$_077;v$z$_039++){
            var v$z$_081=v$z$_077-v$z$_039;
            var v$z$_082=0;
            var v$z$_083=0;
            var v$z$_084=2**(-(v$z$_081+1));
            for(var v$z$_085=0;v$z$_085<=v$z$_081;v$z$_085++){
                var v$z$_086=v$z$_172(v$z$_081,v$z$_085);
                if(v$z$_078){
                    v$z$_073=-v$z$_073;
                    v$z$_079=v$z$_073*Math.cos(v$z$_180*Math.log(v$z$_085+1))/(v$z$_085+1)**v$z$_179;
                    v$z$_080=(-v$z$_073)*Math.sin(v$z$_180*Math.log(v$z$_085+1))/(v$z$_085+1)**v$z$_179;
                    v$z$_075[v$z$_085]=v$z$_079;
                    v$z$_076[v$z$_085]=v$z$_080;
                }else{
                    v$z$_079=v$z$_075[v$z$_085];
                    v$z$_080=v$z$_076[v$z$_085];
                };
                var v$z$_087=v$z$_084*v$z$_079*v$z$_086;
                var v$z$_088=v$z$_084*v$z$_080*v$z$_086;
                v$z$_082=v$z$_082+v$z$_087;
                v$z$_083=v$z$_083+v$z$_088;
                if(v$z$_085==v$z$_081){v$z$_078=false};
            };
            if(v$z$_070>1){
                v$z$_071=v$z$_071+v$z$_082/v$z$_070;
                v$z$_072=v$z$_072+v$z$_083/v$z$_070;
            }else{
                v$z$_071=v$z$_071+v$z$_082;
                v$z$_072=v$z$_072+v$z$_083;
            };
            if(v$z$_174(v$z$_071,v$z$_072)==false){
                v$z$_077=v$z$_197;
                v$z$_039=v$z$_077;
            };
        };
        var v$z$_089=(v$z$_071*v$z$_068-v$z$_072*v$z$_069);
        var v$z$_090=(v$z$_071*v$z$_069+v$z$_072*v$z$_068);
        if(v$z$_070<=1){
            v$z$_089=v$z$_089/v$z$_070;
            v$z$_090=v$z$_090/v$z$_070;
        };
        var v$z$_013=new Array(3);
        v$z$_013[0]=v$z$_089;
        v$z$_013[1]=v$z$_090;
        v$z$_013[2]=v$z$_174(v$z$_089,v$z$_090);
        return v$z$_013;
    };
    function v$z$_F6(v$z$_179,v$z$_180,v$z$_182){
        var v$z$_091=Math.floor(((v$z$_182*2.608*10**6)+2000));
        var v$z$_092=v$z$_179;
        var v$z$_093=v$z$_180;
        var v$z$_094=v$z$_092;
        var v$z$_095=v$z$_093;
        var v$z$_096=v$z$_092**2+v$z$_093**2;
        v$z$_092=v$z$_092/v$z$_096;
        v$z$_093=-v$z$_093/v$z$_096;
        var v$z$_097=v$z$_001;
        var v$z$_098=v$z$_001;
        var v$z$_099=1;
        var v$z$_100=0;
        var v$z$_101=0;
        var v$z$_102=0;
        var v$z$_103=0;
        var v$z$_104=0;
        var v$z$_105=v$z$_092;
        var v$z$_106=0;
        for(var v$z$_039=1;v$z$_039<=v$z$_091;v$z$_039++){
            v$z$_106=v$z$_094+v$z$_039;
            v$z$_102=(v$z$_106**2+v$z$_095**2)/v$z$_039;
            v$z$_103=v$z$_106/v$z$_102;
            v$z$_104=-v$z$_095/v$z$_102;
            v$z$_105=v$z$_092;
            v$z$_092=v$z$_092*v$z$_103-v$z$_093*v$z$_104;
            v$z$_093=v$z$_105*v$z$_104+v$z$_093*v$z$_103;
            if(v$z$_099==-1||v$z$_039%100==0||v$z$_039==v$z$_091){
                var v$z$_107=v$z$_039**v$z$_179;
                var v$z$_108=v$z$_107*Math.cos(-v$z$_180*Math.log(v$z$_039));
                var v$z$_109=-v$z$_107*Math.sin(-v$z$_180*Math.log(v$z$_039));
                var v$z$_110=v$z$_108*v$z$_092-v$z$_109*v$z$_093;
                var v$z$_111=v$z$_108*v$z$_093+v$z$_109*v$z$_092;
                var v$z$_112=v$z$_174(v$z$_110,v$z$_111);
                if(v$z$_107==0){v$z$_112=false};
                if(v$z$_112==true){
                    v$z$_100=v$z$_092;
                    v$z$_101=v$z$_093;
                    v$z$_097=v$z$_110;
                    v$z$_098=v$z$_111;
                    if(v$z$_099>-1){v$z$_099=v$z$_039};
                }else{
                    if(v$z$_099>-1&&v$z$_099!=1){
                        v$z$_039=v$z$_099;
                        v$z$_099=-1;
                        v$z$_092=v$z$_100;
                        v$z$_093=v$z$_101;
                    }else{
                        v$z$_039=v$z$_091;
                    };
                };
            };
        };
        v$z$_092=v$z$_097;
        v$z$_093=v$z$_098;
        var v$z$_013=new Array(3);
        v$z$_013[0]=v$z$_092;
        v$z$_013[1]=v$z$_093;
        v$z$_013[2]=v$z$_174(v$z$_092,v$z$_093);
        return v$z$_013;
    };
    function v$z$_178(v$z$_179,v$z$_180){
        var v$z$_113=0;
        var v$z$_114=0;
        var v$z$_115=(2*v$z$_200)**v$z$_179*Math.cos(-v$z$_180*Math.log(2*v$z$_200))/v$z$_200;
        var v$z$_116=(2*v$z$_200)**v$z$_179*Math.sin(-v$z$_180*Math.log(2*v$z$_200))/(-v$z$_200);
        var v$z$_117=Math.sin(v$z$_179*v$z$_200/2)*Math.cosh(v$z$_180*v$z$_200/2);
        var v$z$_118=Math.cos(v$z$_179*v$z$_200/2)*Math.sinh(v$z$_180*v$z$_200/2);
        v$z$_113=v$z$_115*v$z$_117-v$z$_116*v$z$_118;
        v$z$_114=v$z$_115*v$z$_118+v$z$_116*v$z$_117;
        var v$z$_013=new Array(3);
        v$z$_013[2]=v$z$_174(v$z$_113,v$z$_114);
        if(v$z$_013[2]==false){
            v$z$_113=v$z$_001;
            v$z$_114=v$z$_001;
        };
        v$z$_013[0]=v$z$_113;
        v$z$_013[1]=v$z$_114;
        return v$z$_013;
    };
    function v$z$_172(v$z$_183,v$z$_184){
        if(v$z$_003>=v$z$_183){return v$z$_173(v$z$_183,v$z$_184,true)};
        v$z$_007=performance.now();
        for(var v$z$_039=(v$z$_003+1);v$z$_039<=v$z$_183;v$z$_039++){
            v$z$_006.push(v$z$_004);
            for(var v$z$_085=0;v$z$_085<=Math.floor(v$z$_039/2);v$z$_085++){
                var v$z$_119=v$z$_173(v$z$_039,v$z$_085,false);
                v$z$_005.push(v$z$_119);
                v$z$_004=v$z$_004+1;
            };
        };
        v$z$_007=performance.now()-v$z$_007;
        v$z$_003=v$z$_183;
        return v$z$_173(v$z$_183,v$z$_184,true);
    };
    function v$z$_173(v$z$_185,v$z$_186,v$z$_187){
        if(v$z$_186>v$z$_185/2){v$z$_186=v$z$_185-v$z$_186};
        if(v$z$_187){
            var v$z$_120=v$z$_006[v$z$_185]+v$z$_186;
            return v$z$_005[v$z$_120];
        };
        var v$z$_121=1;
        var v$z$_122=2;
        var v$z$_123=v$z$_185-v$z$_186+1;
        var v$z$_124=2**1014;
        var v$z$_125=1/v$z$_124;
        var v$z$_126=false;
        var v$z$_127;
        do{
            v$z$_127=false;
            if(!v$z$_126){
                for(var v$z$_129=v$z$_122;v$z$_129<=v$z$_186;v$z$_129++){
                    v$z$_122=v$z$_129+1;
                    v$z$_121=v$z$_121/v$z$_129;
                    if(v$z$_121<v$z$_125){
                        if(v$z$_123<v$z$_185+1){v$z$_129=v$z$_197};
                    };
                };
            };
            if(v$z$_126){
                for(var v$z$_129=v$z$_123;v$z$_129<=v$z$_185;v$z$_129++){
                    v$z$_123=v$z$_129+1;
                    v$z$_121=v$z$_121*v$z$_129;
                    if(v$z$_121>v$z$_124){
                        if(v$z$_122<v$z$_186+1){v$z$_129=v$z$_197};
                    };
                };
            };
            v$z$_126=!v$z$_126;
            if(v$z$_122<v$z$_186+1){v$z$_127=true};
            if(v$z$_123<v$z$_185+1){v$z$_127=true};
        }while(v$z$_127);
        return v$z$_121;
    };
    function v$z$_174(v$z$_188,v$z$_189){
        var v$z$_130=true;
        if(v$z$_188!=undefined){
            v$z$_130=typeof v$z$_188==='number'&&isFinite(v$z$_188);
        };
        if(v$z$_130==true){
            if(v$z$_189!=undefined){v$z$_130=typeof v$z$_189==='number'&&isFinite(v$z$_189)};
        };
        return v$z$_130;
    };
    function v$z$_175(v$z$_190,v$z$_191){
        var v$z$_131=Math.log10(Math.abs(v$z$_190));
        if(v$z$_174(v$z$_131)==false){v$z$_131=0};
        var v$z$_132=Math.log10(Math.abs(v$z$_191));
        if(v$z$_174(v$z$_132)==false){v$z$_132=0};
        var v$z$_133=v$z$_131;
        if(v$z$_132>v$z$_133){v$z$_133=v$z$_132};
        v$z$_133=10**v$z$_133;
        v$z$_190=v$z$_190/v$z$_133;
        v$z$_191=v$z$_191/v$z$_133;
        var v$z$_134;
        var v$z$_135;
        var v$z$_136=(v$z$_190**2+v$z$_191**2)**(0.5);
        if(v$z$_136<0){v$z$_136=0};
        if(v$z$_136>0){
            v$z$_134=Math.asin(Math.abs(v$z$_191)/v$z$_136);
            v$z$_135=v$z$_136*v$z$_133;
            if(v$z$_190>=0){
                if(v$z$_191<0){v$z$_134=2*v$z$_200-v$z$_134};
            }else{
                if(v$z$_191>=0){v$z$_134=v$z$_200-v$z$_134}else{v$z$_134=v$z$_200+v$z$_134};
            };
        }else{
            v$z$_134=0;
            v$z$_135=0;
        };
        if(v$z$_134>v$z$_200){v$z$_134=v$z$_134-2*v$z$_200};
        if(v$z$_134<=-v$z$_200){v$z$_134=v$z$_200};
        var v$z$_137=new Array();
        if(v$z$_174(v$z$_135,v$z$_134)==true){
            v$z$_137.push(v$z$_135);
            v$z$_137.push(v$z$_134);
        }else{
            v$z$_137.push(v$z$_001);
            v$z$_137.push(v$z$_001);
        };
        return v$z$_137;
    };
    function v$z$_176(v$z$_192,v$z$_193,v$z$_194,v$z$_195){
        var v$z$_138=v$z$_174(v$z$_192,v$z$_193);
        if(v$z$_138==true){
            v$z$_138=v$z$_174(v$z$_194);
            if(v$z$_138==true){
                if(v$z$_194<0){v$z$_138=false};
                if(v$z$_194>1){v$z$_138=false};
            };
            if(v$z$_138==true){if(typeof v$z$_195!=='boolean'){v$z$_138=false}};
        };
        return v$z$_138;
    };
    // ****** MAIN PROGRAM START ******
    var v$z$_140=performance.now();
    var v$z$_141=realPart;
    var v$z$_142=imaginaryPart;
    var v$z$_143=approximationEffort;
    var v$z$_144=verifyResult_onOff;
    v$z$_010=false;
    var v$z$_139=v$z$_176(v$z$_141,v$z$_142,v$z$_143,v$z$_144);
    if(v$z$_139==false){
        var v$z$_145=new Array(7);
        v$z$_145[0]=v$z$_002;
        v$z$_145[1]=v$z$_002;
        v$z$_145[2]=v$z$_002;
        v$z$_145[3]=v$z$_002;
        v$z$_145[4]=v$z$_002;
        v$z$_145[5]=false;
        if(v$z$_198==true){v$z$_145[6]='0 ms'}else{v$z$_145[6]=0};
        return v$z$_145;
    };
    v$z$_effort_adjust(v$z$_143);
    var v$z$_146=v$z$_141;
    var v$z$_147=v$z$_142;
    var v$z$_148=1;
    if(v$z$_142<0){
        v$z$_147=-v$z$_147;
        v$z$_148=-1;
    };
    var v$z$_149=v$z$_144;
    var v$z$_150;
    var v$z$_151;
    var v$z$_152=false;
    var v$z$_153=-1;
    if(v$z$_149==true){v$z$_153=0};
    if(v$z$_146>=-3){
        if(v$z$_201==false&&Math.abs(v$z$_146-0.5)<10**(-10)){v$z$_146=0.5-10**(-10)};
        var v$z$_154=v$z$_F2(v$z$_146,v$z$_147,v$z$_011[1]);
        var v$z$_155=v$z$_154[0];
        var v$z$_156=v$z$_154[1];
        if(v$z$_149==true&&v$z$_154[2]==true){
            var v$z$_157=v$z$_F4(v$z$_146,v$z$_147,v$z$_011[2]);
            var v$z$_158=v$z$_157[0];
            var v$z$_159=v$z$_157[1];
            if(v$z$_157[2]==true){v$z$_153=v$z$_calculate_trust(v$z$_155,v$z$_156,v$z$_158,v$z$_159)};
        };
        v$z$_150=v$z$_155;
        v$z$_151=v$z$_148*v$z$_156;
        v$z$_152=v$z$_154[2];
        if(v$z$_205==true&&v$z$_152==true&&v$z$_146<0&&Math.abs(Math.round(v$z$_146)-v$z$_146)<10**(-12)){
            if(Math.abs(v$z$_147)<10**(-12)&&Math.round(v$z$_146)%2==0){
                v$z$_150=0;
                v$z$_151=0;
            };
        };
    }else{
        if(v$z$_141>=-152){
            var v$z$_203=false;
            var v$z$_204=false;
            if(v$z$_205==true&&Math.abs(Math.round(v$z$_146)-v$z$_146)<10**(-12)){
                if(Math.abs(v$z$_147)<10**(-12)){
                    if(Math.round(Math.abs(v$z$_146))%2==1){v$z$_204=true}else{v$z$_203=true};
                };
                if(v$z$_203==true){v$z$_204=true};
            };
            var v$z$_160=v$z$_F1F3(v$z$_146,v$z$_147,false);
            var v$z$_161=v$z$_160[0];
            var v$z$_162=v$z$_160[1];
            var v$z$_163=v$z$_160[2];
            if(v$z$_163==2){v$z$_160[2]=false};
            if(v$z$_149==true&&v$z$_160[2]==true){
                if(v$z$_205==true&&v$z$_204==true){
                    if(Math.round(Math.abs(v$z$_146))%2==1){v$z$_146=Math.round(v$z$_146)-10**(-12)};
                };
                if(v$z$_203==false){
                    var v$z$_164=v$z$_F1F3(v$z$_146,v$z$_147,true);
                    var v$z$_165=v$z$_164[0];
                    var v$z$_166=v$z$_164[1];
                    if(v$z$_164[2]==true){v$z$_153=v$z$_calculate_trust(v$z$_161,v$z$_162,v$z$_165,v$z$_166)};
                }else{
                    v$z$_153=v$z$_calculate_trust(1,1,1,1);
                };
            };
            if(v$z$_203==true&&v$z$_163==true){v$z$_161=0};
            if(v$z$_204==true&&v$z$_163==true){v$z$_162=0};
            v$z$_150=v$z$_161;
            v$z$_151=v$z$_148*v$z$_162;
            if(v$z$_163==2){v$z$_163=true};
            v$z$_152=v$z$_163;
        }else{
            v$z$_152=false;
        };
    };
    var v$z$_167;
    if(v$z$_152==true){
        v$z$_167=v$z$_175(v$z$_150,v$z$_151);
    }else{
        v$z$_167=new Array();
        v$z$_167.push(v$z$_001);
        v$z$_167.push(v$z$_001);
    };
    v$z$_140=performance.now()-v$z$_140-v$z$_007;
    v$z$_007=0;
    if(v$z$_140<0){v$z$_140=0};
    var v$z$_168=new Array(7);
    var v$z$_169=v$z$_174(v$z$_150,v$z$_151);
    if(v$z$_169==true){v$z$_169=v$z$_174(v$z$_167[0],v$z$_167[1])};
    if(v$z$_174(v$z$_153)==false){v$z$_153=0};
    if(v$z$_152==false){v$z$_169=false};
    if(v$z$_169==true){
        v$z$_168[0]=v$z$_150;
        v$z$_168[1]=v$z$_151;
        v$z$_168[2]=v$z$_167[0];
        v$z$_168[3]=v$z$_167[1];
    }else{
        v$z$_168[0]=v$z$_001;
        v$z$_168[1]=v$z$_001;
        v$z$_168[2]=v$z$_001;
        v$z$_168[3]=v$z$_001;
    };
    v$z$_168[4]=v$z$_153;
    v$z$_168[5]=v$z$_169;
    if(v$z$_198==true){
        v$z$_168[6]=Math.floor(v$z$_140).toString() + ' ms'}else{v$z$_168[6]=Math.floor(v$z$_140)};
    return v$z$_168; // MainReturn vanilla_zeta()
    // ****** MAIN PROGRAM END ******
    // --- EDIT start ---
    function v$z$_alert_manager(alert_nr){
        var v$z$_170=false;
        // _______________________________________________________________________
        if(alert_nr==1){v$z$_170=true;alert('error_effort_declare:\neffort < 0')};
        if(alert_nr==2){v$z$_170=true;alert('error_effort_declare:\neffort > 1')};
        // _______________________________________________________________________
        if(v$z$_170==false){alert('unknown alert: vanilla_zeta()')};
    };
    function v$z$_effort_adjust(v$z$_199){
        v$z$_011=new Array(7);
        v$z$_011[0]=v$z$_199;          // effort_reference
        // Effort adjust start ______________________________________
        v$z$_011[1]=v$z$_011[0]**1.62; // effort_adjust_F2
        v$z$_011[2]=v$z$_011[0]**3.24; // effort_adjust_F4
        v$z$_011[3]=v$z$_011[0]**2;    // effort_adjust_F1(F2)\F3(F2)
        v$z$_011[4]=v$z$_011[0]**2;    // effort_adjust_F1(F6_gamma)
        v$z$_011[5]=v$z$_011[0]**4;    // effort_adjust_F1(overflow)
        v$z$_011[6]=v$z$_011[0]**2;    // effort_adjust_F3(F6_gamma)
        // Effort adjust end ________________________________________
        // Value range monitoring: 0<= effortValue <=1
        for(var v$z$_171=0;v$z$_171<v$z$_011.length;v$z$_171++){
            if(v$z$_011[v$z$_171]<0){v$z$_alert_manager(1)};
            if(v$z$_011[v$z$_171]>1){v$z$_alert_manager(2)};
        };
    };
    function v$z$_calculate_trust(v$z$_resultValueReal,v$z$_resultValueImag,v$z$_checkValueReal,v$z$_checkValueImag){
        // Calculate the difference between the result- and check number
        var delta_resChk=((v$z$_resultValueReal-v$z$_checkValueReal)**2+(v$z$_resultValueImag-v$z$_checkValueImag)**2)**(0.5);
        var v$z$_202=(v$z$_resultValueReal**2+v$z$_resultValueImag**2)**(0.5);
        if(v$z$_202>1||v$z$_201==false){delta_resChk=delta_resChk/v$z$_202}else{delta_resChk=delta_resChk*v$z$_202};
        return v$z$_177(delta_resChk); // Transform the difference into a trust value
    };
    function v$z$_177(v$z$_196){
        // trustTransformFunction
        v$z$_196=-Math.log10(v$z$_196+10**(-51));
        if(v$z$_196>0){
            v$z$_196=v$z$_196*(1-10**(-10));
            v$z$_196=((((100**0.25)**v$z$_196)/100)**(2/457));
            if(v$z$_196>1){v$z$_196=1};
            v$z$_196=1-(1-v$z$_196)/0.00998259143149816;
        };
        if(v$z$_196<0){v$z$_196=0};
        if(v$z$_196>1){v$z$_196=1};
        v$z$_196=v$z$_196*0.999999999999999;
        if(v$z$_174(v$z$_196)==false){v$z$_196=0};
        return v$z$_196;
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
