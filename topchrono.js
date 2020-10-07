const deadline='2021-03-22';
 
function getTimeRemaining(endtime){
	const total = Date.parse(endtime)- Date.parse(new Date());
	console.log(Date.parse(endtime));
	const secondes = Math.floor((total/1000)% 60);
	const minutes = Math.floor((total/1000/60)% 60);
	const heures = Math.floor((total/(1000*60*60))% 24);
	const jours = Math.floor(total/(1000*60*60*24));

	return{
		total,
		jours,
		heures,
		minutes,
		secondes
	};
}

function initializeClock(id,endtime){
	const jours = document.getElementById('carrejours');
	const heures = document.getElementById('carreheures');
	const minutes = document.getElementById('carreminutes');
	const secondes = document.getElementById('carresecondes');
	const timeinterval = setInterval(() =>{
		const t = getTimeRemaining(endtime);
		jours.innerHTML =  t.jours ;
		heures.innerHTML = t.heures;
		minutes.innerHTML = t.minutes;
		secondes.innerHTML = t.secondes;
						
		if (t.total <= 0){
			clearInterval(timeinterval);
		}
	},1000);
}

initializeClock('countdown', deadline);









