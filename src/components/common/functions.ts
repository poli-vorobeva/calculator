
const div = (a: string, b: string): string => {
	if( +b===0) return 'Не определено'
	return +a / +b + ''
}
const multi = (a: string, b: string): string => {
	return +a * +b + ''
}
const sub = (a: string, b: string): string => {
	return +a - +b + ''
}
const add = (a: string, b: string): string => {
	return +a + +b + ''
}
export const calculate = (action: string, a: string, b: string): string => {
	const func = action === 'div' ? div : action === 'multi' ? multi : action === 'sub' ? sub : add
	return func(a, b)
}