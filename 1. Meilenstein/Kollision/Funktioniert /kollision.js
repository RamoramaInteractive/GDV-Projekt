/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


    var collisionList = [];
    
    
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