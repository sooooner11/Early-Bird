var vote=function(obj1,obj2){
	let v1=obj1.votes;
	let v2=obj2.votes;
	return comparenumber(v1,v2);
};

var newest=function(obj1,obj2){
	let d1=obj1.date.split("/");
	let d2=obj2.date.split("/");
	if(compare(d1[0],d2[0])!=0){
		return compare(d1[0],d2[0]);
	}
	else if(compare(d1[1],d2[1])!=0){
		return compare(d1[1],d2[1]);
	}
	else return compare(d1[2],d1[2]);
}

var oldest=function(obj1,obj2){

	return -newest(obj1,obj2);	
}

var view=function(obj1,obj2){
	let v1=obj1.views;
	let v2=obj2.views;
	return comparenumber(v1,v2);
}

var compare=function(a,b){
	
		if(a.length!=b.length)
			return comparenumber(a.length,b.length)
	
	return comparenumber(a,b)
}

var comparenumber=function( a,b){

	if(a>b)
		return -1;
	else if(a<b)
		return 1;
	return 0;
}



export {vote,oldest,newest,view};