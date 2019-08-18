$(document).ready(function() {
	function getTime1(time){
		let tt = time.split("-");
		let tt1 = tt[0];
		let tt11 = tt1.split(":");
		let tt2 = tt[1];
		let tt22 = tt2.split(":");
		let tt11a = 0;
		let tt11b = 0;
		let tt22a = 0;
		let tt22b = 0;
		console.log(tt1);
		if(tt1.indexOf("PM") != -1){
			tt11a = parseInt(tt11[0].replace("PM", ""))+12;
			tt11b = parseInt(tt11[1]);
		}else{
			tt11a = parseInt(tt11[0].replace("AM", ""));
			tt11b = parseInt(tt11[1]);
		}	
		console.log(tt2);
		if(tt2.indexOf("PM") != -1){
			tt22a = parseInt(tt22[0].replace("PM", ""))+12;
			tt22b = parseInt(tt22[1]);
		}else{
			tt22a = parseInt(tt22[0].replace("AM", ""));
			tt22b = parseInt(tt22[1]);
		}
		let temp =[];
		temp.push(tt11a);
		temp.push(tt11b);
		temp.push(tt22a);
		temp.push(tt22b);
		return temp;
	}
	function getTime(){
      let dateObj = new Date();
      let h = parseInt(dateObj.getHours());
      let m = parseInt(dateObj.getMinutes());
      let temp =[];
      temp.push(h);
      temp.push(m);
      return temp;
	}
	console.log("ready");
	let weekNames = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
	var domain = window.location.hostname;
	if (domain == "")
	{
		return;
	}
	domain = domain.replace("www.", "");
	for(let i=0;i<globals.length;i++){
		let item = globals[i];
		let src_url = item[0];
		let day = item[1];
		let time = item[2];
		let dest_url = item[3];
		let n = src_url.indexOf(domain);//
		let n1 = dest_url.indexOf("http");
		var dates = new Date();
  		var w = dates.getDay()
		if(n1 == -1){
			dest_url = "https://"+dest_url;
			//dest_url = dest_url;
		}
		if(n != -1){
			if((weekNames[w] == day) 
				|| (day=='Weekend' && (w==6 || w==0)) 
				|| (day=='Weekday' && w>=1 && w<=5) 
				){
				let a1 = getTime1(time);////
				let a2 = getTime();
				console.log(a1);
				console.log(a2);
				let status = false;
				if(a1[0] == a2[0] && a1[1]<=a2[1]){
					status = true;
				} else if(a2[1] == a1[2] && a2[1]<=a1[3]){
					status = true;
				}
				if( (a1[0]<a2[0]&&a2[0]<a1[2]) ) {
					status = true;
				}
				if(status){
					console.log(domain);
					window.location.href = dest_url;
				}
			}
		}
	}
});