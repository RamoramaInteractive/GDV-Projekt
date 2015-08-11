/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

	var renderer	= new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	var updateFcts	= [];
	var scene	= new THREE.Scene();
	var camera	= new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 1000 );
	camera.position.z = 5;
        camera.position.y = 3;
        camera.rotation.x = -0.785;

        //hinzufügen der Objekte
	
	var geometry	= new THREE.CubeGeometry( 1, 1, 1);
	var material	= new THREE.MeshBasicMaterial({color: 0x00ff00});
	var mesh	= new THREE.Mesh( geometry, material );
	
        scene.add( mesh );
        
       
        var light = new THREE.AmbientLight( 0x404040 ); // soft white light
        scene.add( light );
	
	// tastaturbewegung
	
	var keyboard	= new THREEx.KeyboardState(renderer.domElement);
	renderer.domElement.setAttribute("tabIndex", "0");
	renderer.domElement.focus();
	
	updateFcts.push(function(){
		if( keyboard.pressed('left') ){
			mesh.position.x -= 0.01;			
		}else if( keyboard.pressed('right') ){
			mesh.position.x += 0.01;
		}
		if( keyboard.pressed('down') ){
			mesh.position.z += 0.01;		
		}else if( keyboard.pressed('up') ){
			mesh.position.z -= 0.01;		
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
        