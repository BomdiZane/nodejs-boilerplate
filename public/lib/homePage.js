window.addEventListener('load', () => new eGamingHome());

function eGamingHome() {
	'use strict';
	
    let socketURL = 'wss://js-assignment.evolutiongaming.com/ws_api',
        logInMessage = {
            "$type": "login",
            "username": "user1234",
            "password": "password1234"
          },
        subscribeMessage = { "$type" : "subscribe_tables" },
        socket;

	if (this && this instanceof eGamingHome) initialize();
	else return new eGamingHome();

	function initialize() {

		cleanDOM(document); //Removes all empty textNodes => Makes DOM navigation easy
		startSocket(); //Get and display home page data
	
		// Window Click Listeners
		window.addEventListener('click', event => {
			let element = event.target;
				
			if (element.classList.contains('clossX')) removeTable(element);
		});
	
		// Set Default States/Values
		I('copy').appendChild(document.createTextNode(' - '+new Date().getFullYear()));
	}
	
	// METHODS
	function startSocket() {
        
        socket = new WebSocket(socketURL);
        
        // LogIn If connection to websocket is succeccful
        socket.onopen = () => {
            console.log('connected');
            socket.send(JSON.stringify(logInMessage));
        };

        // Handle payloads from server
        socket.onmessage = payload => {
            
            let payloadData = JSON.parse(payload.data);

            // Route the payload to appropriate handler
            switch(payloadData.$type){
                case 'login_successful': socket.send(JSON.stringify(subscribeMessage)); break;
                case 'table_list': payloadData.tables.forEach(table => createTableView(table)); break;
                case 'table_removed': I('tableViewsHolder').removeChild(I(payloadData.id)); break;
                case 'table_updated': handleTableUpdated(payloadData); break;
                default: console.log(payload);
            }
        };

        socket.onerror = (e) => console.log(e);
        socket.onclose = () => {};
    }
    
    // Update UI
    function handleTableUpdated(payload){

        let table = I(payload.id);

        table.firstChild.textContent = payload.name;
		table.firstChild.nextSibling.lastChild.textContent = 12 - payload.participants;
    }

    // Remove a table
    function removeTable(element) {
        let removeMessage = {
            "$type": "remove_table",
            "id": parseInt(element.parentNode.id)
        };

        socket.send(JSON.stringify(removeMessage));
    }
    
    // Add table to UI
	function createTableView(table){

		if (!table || typeof(table) !== 'object') return console.log('Invalid table');
	
		let casinoTable = I('casinoTableTemplate').content.querySelector('div'),
			newTable = document.importNode(casinoTable, true);

		cleanDOM(newTable);

		newTable.firstChild.textContent = table.name;
		newTable.firstChild.nextSibling.lastChild.textContent = 12 - table.participants;
		newTable.setAttribute('id', table.id);
	
		I('tableViewsHolder').appendChild(newTable);
	}
	
}
