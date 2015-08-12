/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var collisionList = []; //Wand 

var wandaufbau_wo = new THREE.CubeGeometry(2, 5, 40);
var wandaufbau_sn = new THREE.CubeGeometry(2, 5, 80);
var wandMaterial = new THREE.MeshBasicMaterial({color: 0x000000});
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
            
             wand_w.position.x = -34.5;
            wand_o.position.x = 34.5;

            wand_n.rotation.y = 1.57;
            wand_n.position.z = -18;
            wand_s.rotation.y = 1.57;
            wand_s.position.z = 18;




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

            console.log("Es wurde getroffen!"); //DummyVersion 
        }


    }



}