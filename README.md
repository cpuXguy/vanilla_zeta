# vanilla_zeta()
Riemann Zeta Function Across the FULL COMPLEX PLANE.

// Define real and imaginary parts for the input. The values Re=0.5 and Im=14.134725141734693*i correspond to the first non-trivial zero of the Riemann Zeta function, meaning the result should be approximately = 0 + 0i.
const Re = 0.5; // Real part (on the critical line)
const Im = 14.134725141734693; // Imaginary part that yields the first non-trivial zero.

// Define the calculation investment.
const calculationInvestment = 0.67; // 0 (minimum) <= value <= 1 (maximum)

// Define whether result verification is enabled or not. For the feature result verification, please visit WWW.ZETA-CALCULATOR.COM
const resultVerification = false; // Set 'false' to disable result verification and save calculation time.

// Call the vanilla_zeta function with the complex input and additional parameters.
const output_array = vanilla_zeta(Re, Im, calculationInvestment, resultVerification);

// Extract the real and imaginary parts from the result array. For a more detailed explanation of the output_array, please refer to the 'TEST_vanilla_zeta()' function in the 'ZETA_functionCode.js' file.
const result_Re = output_array[0];
const result_Im = output_array[1];
console.log(`zeta-result(${Re} + ${Im}i) = ${output_array[0]} + ${output_array[1]}i`);

// For detailed usage guide, please visit: WWW.ZETA-CALCULATOR.COM ...a small test method is included after the primary function for immediate testing.
