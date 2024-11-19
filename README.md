# vanilla_zeta()
Riemann Zeta Function Across the FULL COMPLEX PLANE.
Try it out immediately on: WWW.ZETA-CALCULATOR.COM

How to use the vanilla_zeta() function - Guide:

Note: I take no responsibility for the correctness of the results! As one should know, zeta value calculations and their verification are a complex task. Therefore, any output results are merely a value recommendation from 'vanilla_zeta()', and they may differ significantly from the actual results!

Execute the vanilla_zeta function / Step 1: Declare Inputs.

The complex part of the Riemann Zeta function is defined by its real and imaginary part.
Real part:      -Number.MAX_VALUE <= input_Real <= Number.MAX_VALUE
var input_Real = 0.5;
Imaginary part: -Number.MAX_VALUE <= input_Imag <= Number.MAX_VALUE
var input_Imag = 14.134725141734693;

You must choose the amount of computational effort you want to invest, where 0 represents minimal effort and 1 represents maximum effort.
Naturally, this will affect the calculation time.
Effort level:   0 <= input_Effort <= 1
var input_Effort = 0.67;

The input for a special feature called 'Trust'.
If the feature is enabled, vanilla_zeta() performs a test that verifies whether the calculation has converged, which is essential for ensuring the correctness of the result.
'Trust' (verify result) enabled: true, false
var input_TrustEnabled = true;

If 'Trust' is disabled (false), the output listed in [4] will always be '-1', indicating that it is not enabled.
If 'Trust' is enabled, you will get a value between 0 and 0.999999999999999. The meaning of this value can be found under 'Output Descriptions/ output[4]'.
Be aware that the result verification 'Trust' requires a lot of computational power! If the output[4] is not relevant, set the feature to 'false' to save time.

Execute the vanilla_zeta function / Step 2: Execute.
***    ***    ***
var output_array = vanilla_zeta(input_Real, input_Imag, input_Effort, input_TrustEnabled);
***    ***    ***

Output Descriptions:

Interpreting the vanilla_zeta Output 'output_array' / Step 3: Read Output.
output_array[0] - Real result of Zeta
output_array[1] - Imaginary result of Zeta
output_array[2] - Polar radius result of Zeta
output_array[3] - Polar angle result of Zeta in radians
output_array[4] - Trust value of the calculation
output_array[5] - Boolean indicating if the calculation was successful
output_array[6] - Process time of 'vanilla_zeta()' in milliseconds

Outputs [0] to [3]:
the interpretation is self-explanatory.
With the given input, the first nontrivial zero of the zeta function should approximately be obtained, i.e., = 0 + 0i.

Output[5]:
If nothing went wrong during the calculation, output[5] is true.
If there were issues during the calculation, output[5] is false, and output[0] will be marked with '#err' or '#ins'. '#err' typically means there were overflows or underflows. '#ins' means the inputs were not suitable. Check if the types and tolerances conform to the requirements!

Output[6]:
This is self-explanatory. Be aware that only a few calculations may not reflect real-time performance. If only a few calculations are performed, your computer may remain in standby mode, causing the time to be much higher. Perform many calculations to get the time of a fully active CPU!
Additionally, the times can vary significantly depending on the region (real-imaginary position)!"

Remaining output[4] - Result Verification / Trust:
Possible results are '-1' if disabled, '0' (zero), or a value greater than '0' up to '0.999999999999999'.
The meaning of '=0' (exact zero) is that no convergence has been registered. Assume that the result is incorrect in this case.
Now, if a value is between '0' and '1', then convergence has been registered, and the result should be correct. To obtain better values, always choose a high 'input_Effort'.
The exact interpretation of the value is simple - the closer it approaches '1', the better the convergence, which often indicates more accurate results.

ATTENTION to Output[4] - Result Verification / Trust:
This feature provides good assistance in getting a feel for the quality of the results – however, the statement about the correctness of the results may be incorrect! To gain additional confidence, it makes sense to use other algorithms for deriving the zeta values and make comparisons.
