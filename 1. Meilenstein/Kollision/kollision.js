/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


    var collisionList = [];
    
    
      function collision()
            {

                var originPoint = cube.position.clone();
            
                

                for (var vertexIndex = 0; vertexIndex < cube.geometry.vertices.length; vertexIndex++)
                {
                    var localVertex = cube.geometry.vertices[vertexIndex].clone();
                    var globalVertex = localVertex.applyMatrix4(cube.matrix);
                    var directionVector = globalVertex.sub(cube.position);

                    var ray = new THREE.Raycaster(originPoint, directionVector.clone().normalize());
                    var collisionResults = ray.intersectObjects(collisionList);
                    if (collisionResults.length > 0 && collisionResults[0].distance < directionVector.length())
                    {
                       
                        console.log("Es wurde getroffen!"); //DummyVersion 
                    }
                    
                    
                }

              
           
            }