/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
	/// Code für die Steuerung!!!		
				var updateFcts	= [];


        //hinzufügen der Objekte
	
	var geometry	= new THREE.CubeGeometry( 3, 3, 3);
	var material	= new THREE.MeshBasicMaterial({color: "rgb(250, 235, 27)"});
	var snake	= new THREE.Mesh( geometry, material );
	
        scene.add( snake );
		
		snake.position.y = 3;

		// tastaturbewegung
	
	var keyboard	= new THREEx.KeyboardState(renderer.domElement);
	renderer.domElement.setAttribute("tabIndex", "0");
	renderer.domElement.focus();
	
	updateFcts.push(function(){
		if( keyboard.pressed('left') ){
			snake.position.x -= 0.1;			
		}else if( keyboard.pressed('right') ){
			snake.position.x += 0.1;
		}
		if( keyboard.pressed('down') ){
			snake.position.z += 0.1;		
		}else if( keyboard.pressed('up') ){
			snake.position.z -= 0.1;		
		}
	})

	//render
	updateFcts.push(function(){
		renderer.render( scene, camera );		
	})

	//loop runner
	var lastTimeMsec= null
	requestAnimationFrame(function animate(nowMsec){
            // keep looping
            requestAnimationFrame( animate );
            // measure time
            lastTimeMsec	= lastTimeMsec || nowMsec-1000/60
            var deltaMsec	= Math.min(200, nowMsec - lastTimeMsec)
            lastTimeMsec	= nowMsec
	
        // call each update function
            updateFcts.forEach(function(updateFn){
            updateFn(deltaMsec/1000, nowMsec/1000)
            })
	})
	
	
	///Ende vom Code der Steuerung!!!