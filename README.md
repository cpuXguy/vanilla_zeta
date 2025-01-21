# vanilla_zeta() & vanilla_gamma()<br>
RIEMANN ZETA FUNCTION across the FULL COMPLEX PLANE.<br>
& EULER GAMMA FUNCTION across the FULL COMPLEX PLANE.<br>
Try it out immediately on: WWW.ZETA-CALCULATOR.COM<br>

**Guide to using the vanilla_zeta() and vanilla_gamma() functions.<br>(using the Zeta function as example)**<br>

***
Note: I take no responsibility for the correctness of the results! As one should understand, calculating Zeta/Gamma values and verifying them is a challenging task. Therefore, any output from vanilla_zeta()/vanilla_gamma() should be considered as a value recommendation, and it may differ significantly from the actual results.
***

**Execute the vanilla_zeta function / Step 1: Declare Inputs.**<br>

The complex part of the Riemann Zeta function is defined by its real and imaginary part.<br>
Real part:      -Number.MAX_VALUE <= input_Real <= Number.MAX_VALUE<br>
**var input_Real = 0.5;**<br>
Imaginary part: -Number.MAX_VALUE <= input_Imag <= Number.MAX_VALUE<br>
**var input_Imag = 14.134725141734693;**<br>

You must choose the amount of computational effort you want to invest, where 0 represents minimal effort and 1 represents maximum effort.<br>
Naturally, this will affect the calculation time.<br>
Effort level:   0 <= input_Effort <= 1<br>
**var input_Effort = 0.67;**<br>

The input for a special feature called 'Trust'.<br>
If the feature is enabled, vanilla_zeta() performs a test that verifies whether the calculation has converged, which is essential for ensuring the correctness of the result.<br>
'Trust' (verify result) enabled: true, false<br>
**var input_TrustEnabled = true;**<br>

If 'Trust' is disabled (false), the output listed in [4] will always be '-1', indicating that it is not enabled.<br>
If 'Trust' is enabled, you will get a value from '0' up to '0.999999999999999'. The meaning of this value will be explained shortly below.<br>
Be aware that the result verification 'Trust' requires a lot of computational power! If the output[4] is not relevant, set the feature to 'false' to save time.<br>

**Execute the vanilla_zeta function / Step 2: Execute.**<br>

***
**var output_array = vanilla_zeta(input_Real, input_Imag, input_Effort, input_TrustEnabled);**
***

**Interpreting the vanilla_zeta Output 'output_array' / Step 3: Read Output.**<br>

Output Descriptions:<br>

**output_array[0]** - Real result of Zeta<br>
**output_array[1]** - Imaginary result of Zeta<br>
**output_array[2]** - Polar radius result of Zeta<br>
**output_array[3]** - Polar angle result of Zeta in radians<br>
**output_array[4]** - Trust value of the calculation<br>
**output_array[5]** - Boolean indicating if the calculation was successful<br>
**output_array[6]** - Process time of 'vanilla_zeta()' in milliseconds<br>

Outputs [0] to [3]:<br>
The interpretation is self-explanatory.<br>
With the given input, the first nontrivial zero of the Zeta function should approximately be obtained, i.e., = 0 + 0i.<br>

Output[5]:<br>
If nothing went wrong during the calculation, output[5] is 'true'.<br>
If there were issues during the calculation, output[5] is 'false', and output[0] will be marked with '#err' or '#ins'. '#err' typically means there were overflows or underflows. '#ins' means the inputs were not suitable. Check if the types and tolerances conform to the requirements!<br>
For automated processing, it makes sense to check this indicator first after the calculation to avoid passing inaccurate results further along. This primarily serves to prevent disruptions.<br>

Output[6]:<br>
This is self-explanatory. Be aware that only a few calculations may not reflect real-time performance. If only a few calculations are performed, your computer may remain in standby mode, causing the time to be much higher. Perform many calculations to get the time of a fully active CPU!<br>
Additionally, the times can vary significantly depending on the region (real-imaginary position)!<br>

Output[4] - Result Verification / Trust:<br>
Possible results are '-1' if disabled, '0' (zero), or a value greater than '0' up to the maximum of '0.999999999999999'.<br>
The meaning of '=0' (exact zero) is that no convergence has been registered. Assume that the result is incorrect in this case.<br>
Now if the value is greater than '0' and at most '0.999999999999999', convergence has happened and the result should be correct. To obtain better values, always choose a high 'input_Effort'.<br>
The exact interpretation of the value is simple - the closer it approaches '1', the better the convergence, which often indicates more accurate results.<br>

ATTENTION to Output[4] - Result Verification / Trust:<br>
This feature provides good assistance in getting a feel for the quality of the results – however, the statement about the correctness of the results may be incorrect! To gain additional confidence, it makes sense to use other algorithms for deriving the Zeta values and make comparisons.
