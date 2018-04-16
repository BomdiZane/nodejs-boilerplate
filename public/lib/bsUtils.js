let slider = I('slider');

function subscribe(){
    let subscriberEmail = I('subscriberEmail'),
        subscriberName = I('subscriberName');
    if (subscriberEmail.validity.valueMissing || subscriberName.validity.valueMissing) { warn('Please fill all fields'); }
    else if (subscriberEmail.validity.patternMismatch || subscriberName.validity.patternMismatch) { warn('Invalid data'); }
    else{
        waitDiv.style.display = 'flex';
        sendAjax({
            method: 'post',
            url: '/api/subscribe',
            data: `Email=${encodeURI(subscriberEmail.value)}&Name=${encodeURI(subscriberName.value)}`,
            callback: (event)=>{
                            if (event.target.readyState === 4 && event.target.status === 200) {
                                waitDiv.style.display = 'none';
                                if (event.target.responseText === 'Success') {
                                    success();
                                    subscriberEmail.value = '';
                                    subscriberName.value = '';
                                }
                                else error('Subscription failed. Please try again later');
                            }
                        }
        });
    }
}

function success(message='Success!'){
	'use strict';

	let statusP = I('statusP');
	statusP.style.display = 'none';
	statusP.textContent = message;
	statusP.style.backgroundColor = 'lightgreen';
	setTimeout(()=>{ statusP.style.display = 'block'; }, 50);
}

function warn(message='Failed!'){
	'use strict';

	let statusP = I('statusP');
	statusP.style.display = 'none';
	statusP.textContent = message;
	statusP.style.backgroundColor = 'tomato';
	setTimeout(()=>{ statusP.style.display = 'block'; }, 50);
}

function error(message='Error!'){
	'use strict';

	let statusP = I('statusP');
	statusP.style.display = 'none';
	statusP.textContent = message;
	statusP.style.backgroundColor = 'crimson';
	setTimeout(()=>{ statusP.style.display = 'block'; }, 50);
}

function inform(message){
	'use strict';
	
	let statusP = I('statusP');
	statusP.style.display = 'none';
	statusP.textContent = message;
	statusP.style.backgroundColor = 'grey';
	setTimeout(()=>{ statusP.style.display = 'block'; }, 50);
}