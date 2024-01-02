export default function concatArrays(array1, array2, string) {
	let args = [...array1, ...array2, ...string];
	return (args);
}
