
let get = (url,data,dataType) =>{
	return new Promise( (resolve,reject)=>{
		$.ajax({
			url,
			type: "GET",
			data,
			dataType,
			success: (data)=>{
				resolve(data);
			},
			fail : (e)=>{
				console.log(e);
			}
		})
	})
}


let post = (url,data,dataType) =>{
	return new Promise( (resolve,reject) =>{
		$.ajax({
			url,
			type: "POST",
			data,
			dataType,
			success: (data)=>{
				console.log(data);
			},
			fail : (e)=>{
				console.log(e);
			}
		})
	})
}
export default get;
export {
	get,
	post,
}