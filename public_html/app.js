"use strict";
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// FIDAN SAMET 21727666
// OGUZ BAKIR 21627007

var teapotVertex = [];
var teapotFragment = [];
var numOfComponents = 3;        // x, y and z (3d)
var offset = 0;
var normalize = false;
var stride = 0;

function main() {
    const canvas = document.querySelector("#glCanvas");
    const gl = canvas.getContext("webgl2");

    if (!gl) {
        alert("Unable to initialize WebGL. Your browser or machine may not support it.");
        return;
    }
    
    gl.clearColor(250 / 255.0, 237 / 255.0, 51 / 255.0, 1.0);       // yellow
    gl.clearDepth(1.0);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    var type = gl.FLOAT;
    
    readTeapotModelFile();
    console.log(teapotVertex);
    console.log(teapotFragment);
    
    const teapotShader = initShaderProgram(gl, vertexShader, fragmentShader);
    const teapotBuffer = gl.createBuffer();
    gl.enableVertexAttribArray(gl.getAttribLocation(teapotShader, 'i_position'));
    
    // ROTATION ANIMATION
    function render () {
    
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        
        // TRIANGLES
        gl.bindBuffer(gl.ARRAY_BUFFER, teapotBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(teapotVertex), gl.STATIC_DRAW);
    
        // TRIANGLE POSITIONS
        offset = 0;
        gl.vertexAttribPointer(gl.getAttribLocation(teapotShader, 'i_position'),
            numOfComponents, type, normalize, stride, offset);
        gl.useProgram(teapotShader);
        
        // DRAW TRIANGLES
        console.log(teapotVertex.length);
        gl.drawArrays(gl.TRIANGLES, offset, teapotVertex.length);
        
        //requestAnimationFrame(render);

    }
    
    render();
}

function readTeapotModelFile () {
    $.get('teapot.smf', function(data) {
        var lines = data.split("\n");

        $.each(lines, function(n, elem) {
            var res = elem.split(" ");
            if (res[0] == "v") {
                teapotVertex.push(res[1], res[2], res[3]);
            } else {
                teapotFragment.push(res[1], res[2], res[3]);
            }
        });
    }, 'text');

}

main();