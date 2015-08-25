/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var collisionList = []; //Wand 

var wandaufbau_wo = new THREE.CubeGeometry(1, 20, 40);
var wandaufbau_sn = new THREE.CubeGeometry(1, 20, 80);
var wandMaterial = new THREE.MeshBasicMaterial({color: 0xFF00BF, visible: false}); 
var wand_w = new THREE.Mesh(wandaufbau_wo, wandMaterial);
var wand_o = new THREE.Mesh(wandaufbau_wo, wandMaterial);
var wand_n = new THREE.Mesh(wandaufbau_sn, wandMaterial);
var wand_s = new THREE.Mesh(wandaufbau_sn, wandMaterial);


collisionList.push(wand_w);
collisionList.push(wand_o);
collisionList.push(wand_n);
collisionList.push(wand_s);
//
//scene.add(wand_w);
//            scene.add(wand_o);
//            scene.add(wand_n);
//            scene.add(wand_s);
            
            wand_w.position.x = -27;
            wand_o.position.x = 27;

            wand_n.rotation.y = 1.57;
            wand_n.position.z = -12;
            
            wand_s.rotation.y = 1.57;
            wand_s.position.z = 16.5;

            scene.add(wand_w);
            scene.add(wand_o);
            scene.add(wand_n);
            scene.add(wand_s);


function collision()
{

    var originPoint = snake.position.clone();



    for (var vertexIndex = 0; vertexIndex < snake.geometry.vertices.length; vertexIndex++)
    {
        var localVertex = snake.geometry.vertices[vertexIndex].clone();
        var globalVertex = localVertex.applyMatrix4(snake.matrix);
        var directionVector = globalVertex.sub(snake.position);

        var ray = new THREE.Raycaster(originPoint, directionVector.clone().normalize());
        var collisionResults = ray.intersectObjects(collisionList);
        if (collisionResults.length > 0 && collisionResults[0].distance < directionVector.length())
        {
            //Abhandlungen 1.Versuch
            if(collisionResults[0] == wand_w )
            {
            console.log("Es wurde getroffen!-west"); //DummyVersion 
            }
               if(collisionResults[0].distance == wand_s)
            {
            console.log("Es wurde getroffen- süd!"); //DummyVersion 
            }
            //collisionResults[0].distance == wand_w || wand_o || wand_n || wand_s
        }


    }



}
