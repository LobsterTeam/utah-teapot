/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const vertexShader = `#version 300 es

    in vec3 i_position;

    void main() {
        gl_Position = vec4(i_position, 1.0);
    }
`;

const fragmentShader = `#version 300 es

    precision mediump float;
    out vec4 o_color;
    
    void main() {
        o_color = vec4(126.0 / 255.0, 126.0 / 255.0, 126.0 / 255.0, 1.0);
    }
`;