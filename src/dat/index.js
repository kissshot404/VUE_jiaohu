let obj={
	atk:'kissshot',
	as:'arerolaorion'
}
let obj1={
	atk:'kissshot',
	as:'123'
}
let obj2={
	atk:'kissshot',
	as:'456'
}
let obj3={
	atk:'kissshot',
	as:'789'
}
//如果obj3创建不用就会报错
console.log(obj3,'obj3')

export default [obj1,obj2]


export {obj,obj1}

