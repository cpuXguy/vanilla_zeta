# vanilla_zeta() & vanilla_gamma()<br>
RIEMANN ZETA FUNCTION across the FULL COMPLEX PLANE.<br>
& EULER GAMMA FUNCTION across the FULL COMPLEX PLANE.<br>
Try it out at: WWW.ZETA-CALCULATOR.COM<br>

**Guide to using the vanilla_zeta() and vanilla_gamma() functions.**<br>
**- using vanilla_zeta() as example -**<br>

***
Note: The results are numerical approximations. Calculating zeta or gamma values across the full complex plane is inherently difficult, and the outputs may differ from the actual values.<br>
I do not take responsibility for the correctness of the results. Therefore, any output from vanilla_zeta() or vanilla_gamma() should be regarded as an unverified value suggestion.<br>
This limitation is not unique to these functions – it also occurs in many other numerical methods for computing zeta/gamma values.
***

**Step 1 – INPUT: Declare inputs of vanilla_zeta()**<br>

The complex part of the zeta function is defined by its real and imaginary part.<br>
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

**Step 2 – EXECUTE: Execute vanilla_zeta()**<br>

***
**var output_array = vanilla_zeta(input_Real, input_Imag, input_Effort, input_TrustEnabled);**
***

**Step 3 – Output: Interpreting the return values of vanilla_zeta()**<br>

Output descriptions: Results for ζ(s) where s = input_Real + input_Imag&middot;i<br>
(for vanilla_gamma(), replace ζ with Γ accordingly)<br>

**output_array[0]** - Real part of ζ(s)<br>
**output_array[1]** - Imaginary part of ζ(s)<br>
**output_array[2]** - Magnitude (abs) of ζ(s)<br>
**output_array[3]** - Argument (arg) of ζ(s) in radians, range (−π, π]<br>
**output_array[4]** - Trust value [0–0.999999999999999]<br>
**output_array[5]** - Boolean flag: true if there were no calculation problems<br>
**output_array[6]** - Process time of 'vanilla_zeta()' in milliseconds<br>

Outputs [0] to [3]:<br>
The interpretation is self-explanatory.<br>
With the given input, the first nontrivial zero of the zeta function should approximately be obtained, i.e., ≈ 0 + 0i.<br>

Output[5]:<br>
This boolean flag is true if the calculation finished without errors; otherwise false. When false output[0] shows #err (overflow/underflow, or division by zero) or #ins (invalid input). Always check this flag before using the results.<br>

Output[6]:<br>
This is self-explanatory.<br>
Short runs may not let the CPU reach its full clock speed, which can make the measured time appear longer than it really is.
Use a larger workload for more reliable performance measurements.<br>
Additionally, the times can vary significantly depending on the region (real-imaginary position)!<br>

Output[4] - Result Verification / Trust:<br>
Possible results are '-1' if disabled, '0' (zero), or a value greater than '0' up to the maximum of '0.999999999999999'.<br>
The meaning of '=0' (exact zero) is that no convergence has been registered. Assume that the result is incorrect in this case.<br>
Now if the value is greater than '0' and at most '0.999999999999999', convergence has happened and the result should be correct. To obtain better values, always choose a high 'input_Effort'.<br>
The exact interpretation of the value is simple - the closer it approaches '1', the better the convergence, which often indicates more accurate results.<br>

Note on Output[4] – Result Verification / Trust:<br>
This feature helps you check the quality of the results, but the reported correctness can be wrong. For more confidence, compare the values with results from other algorithms or implementations.<br>
Still, the value reported under 'Trust' is not just an add-on; it is derived from additional, computation-heavy checks.
